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

  const result = await model.generateContent(prompt);

  return result.response.text().trim();
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

    await fs.writeFile(
        filePath,
        JSON.stringify(updated, null, 2),
        "utf-8"
    );

    console.log("✨ pinned.json updated");
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
