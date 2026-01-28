import { promises as fs } from "node:fs";
import { config as configDotenv } from "dotenv";
import OpenAI from "openai";

configDotenv();

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
    console.error("❌ OPENAI_API_KEY missing");
    process.exit(1);
}

const client = new OpenAI({ apiKey: API_KEY });

/**
 * Translate a JSON object from Finnish to English using OpenAI
 * - Keeps keys unchanged
 * - Only translates string values
 * - Returns a valid JSON object
 */
async function translateJson(jsonData) {
    const jsonString = JSON.stringify(jsonData);
    const prompt = `
Translate the following JSON object from Finnish to English.
- Keep the structure identical.
- Do not translate keys, only string values.
- Return only valid JSON, nothing else.
- Keep developer slang intact.
- Read all _BUILD elements. These are translating guidelines that
  you must follow. You don't need to translate these comments.

Finnish JSON: ${jsonString}
English JSON:
    `.trim();

    for (let attempt = 1; attempt <= 2; attempt++) {
        try {
            const res = await client.chat.completions.create({
                model: "gpt-4.1-mini",
                messages: [{ role: "user", content: prompt }],
                temperature: 0
            });

            let translated = res.choices?.[0]?.message?.content?.trim() ?? "";

            // Remove code block fences if present
            translated = translated.replace(/^```json\s*/, '').replace(/\s*```$/, '');

            return JSON.parse(translated);
        } catch (err) {
            console.error(`⚠ Attempt ${attempt} failed:`, err.message);
            if (attempt === 2) throw err;
            await new Promise(r => setTimeout(r, 500));
        }
    }
}

async function run() {
    const fiPath = "src/locales/fi.json";
    const enPath = "src/locales/en.json";

    const data = await fs.readFile(fiPath, "utf-8");
    const fiLocales = JSON.parse(data);

    const enLocales = await translateJson(fiLocales);

    await fs.writeFile(enPath, JSON.stringify(enLocales, null, 2), "utf-8");

    console.log("✨ en.json created in one batch");
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
