import { promises as fs } from "node:fs";
import { config as configDotenv } from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

configDotenv();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("GEMINI_API_KEY missing");
    process.exit(1);
}

const MODEL_NAME = "gemini-2.5-flash";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

const HEX_RE = /^#([0-9a-fA-F]{6})$/;
const FALLBACK = "#3f8efc";

/**
 * Ask Gemini for a hex color code for the given language.
 * Always return format #RRGGBB or fallback.
 */
async function fetchHexForLanguage(lang) {
    const prompt = [
        "Act as a strict color picker.",
        "Task: Output ONE hex color code for the given programming language name.",
        "Constraints:",
        "- Return ONLY a 7-character #RRGGBB string.",
        "- Ensure the color has sufficient contrast against background color #0f1016 according to WCAG guidelines.",
        "- No text, no comments, no markdown, no extra characters.",
        `Language: ${lang}`,
    ].join("\n");


    for (let attempt = 1; attempt <= 2; attempt++) {
        const res = await model.generateContent(prompt);
        const text = res.response.text().trim();
        const match = text.match(HEX_RE);

        if (match) return match[0];

        if (attempt === 2) {
            console.error(`Invalid HEX for "${lang}": "${text}"`);
            return FALLBACK;
        }

        await new Promise((r) => setTimeout(r, 500));
    }
}

/**
 * Read pinned.json, add color field and write back.
 */
async function main() {
    const raw = await fs.readFile("src/assets/pinned.json", "utf8");
    const items = JSON.parse(raw);

    // Collect unique languages
    const languages = new Set(
        items
            .map((p) => p?.primaryLanguage?.name)
            .filter((v) => typeof v === "string" && v.trim().length)
    );

    // Ask Gemini for each language
    const colors = {};
    for (const lang of languages) {
        const hex = await fetchHexForLanguage(lang);

        colors[lang] = hex;

        console.log(`✔ ${lang} -> ${hex}`);
    }

    // Add color field to projects
    const updated = items.map((p) => {
        const lang = p?.primaryLanguage?.name;
        const color = colors[lang] ?? FALLBACK;

        return { ...p, color };
    });

    await fs.writeFile("src/assets/pinned.json", JSON.stringify(updated, null, 2), "utf8");

    console.log("✅ pinned.json updated");
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
