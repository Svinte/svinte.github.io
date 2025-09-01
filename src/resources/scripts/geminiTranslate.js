import { promises as fs } from "node:fs";
import { config as configDotenv } from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

configDotenv();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("❌ GEMINI_API_KEY missing");
    process.exit(1);
}

const MODEL_NAME = "gemini-2.5-flash";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

async function translateJson(jsonData) {
    const jsonString = JSON.stringify(jsonData);
    const prompt = `
                    Translate the following JSON object from Finnish to English.
                    - Keep the structure identical.
                    - Do not translate keys, only string values.
                    - Return only valid JSON, nothing else.
                    - Keep up with developer slang.
                    - Read all _BUILD elements. These are translating quidelines that
                      you must follow. You don't need to translate those comments.

                    Finnish JSON: ${jsonString}
                    English JSON:
                    `.trim();

    const result = await model.generateContent(prompt);
    const translated = result.response.text().trim().replace(/^```json\s*/, '').replace(/\s*```$/, '');

    try {
        return JSON.parse(translated);
    } catch (err) {
        console.error("Failed to parse translated JSON:", translated);
        throw err;
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
