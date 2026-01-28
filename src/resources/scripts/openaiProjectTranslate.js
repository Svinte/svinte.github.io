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


async function translateDescription(text, projectName) {
    const prompt = `
Translate the following project description into Finnish.
- Do NOT translate the project name (${projectName}).
- Return only the Finnish translation, nothing else.
- Do not add explanations, comments, or quotation marks.
- Do not translate coder slang such as tool or interface names.

English: ${text}
Finnish:
    `.trim();

    for (let attempt = 1; attempt <= 2; attempt++) {
        try {
        const res = await client.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0,
        });

        const fiText = res.choices?.[0]?.message?.content?.trim();
        if (fiText) return fiText;

        if (attempt === 2) return text; // fallback
        await new Promise((r) => setTimeout(r, 500));
        } catch (err) {
        console.error(`⚠ OpenAI request failed (attempt ${attempt}):`, err.message);
        if (attempt === 2) return text; // fallback
        await new Promise((r) => setTimeout(r, 500));
        }
    }
}

async function run() {
    const filePath = "src/assets/pinned.json";
    const data = await fs.readFile(filePath, "utf-8");
    const projects = JSON.parse(data);

    const updated = [];

    for (const project of projects) {
        const fi = await translateDescription(project.description, project.name);

        updated.push({
        ...project,
        description_en: project.description,
        description_fi: fi,
        });

        delete updated[updated.length - 1].description;

        console.log(`✅ ${project.name} translated`);
    }

    await fs.writeFile(filePath, JSON.stringify(updated, null, 2), "utf-8");

    console.log("✨ pinned.json updated");
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
