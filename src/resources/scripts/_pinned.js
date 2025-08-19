import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname } from "node:path";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = "svinte";

if (!GITHUB_TOKEN) {
  console.error("❌ GitHub token puuttuu");
  process.exit(1);
}

const query = `
{
  user(login: "${USERNAME}") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
          }
        }
      }
    }
  }
}
`;

async function main() {
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();

    if (!data.data || !data.data.user) {
      console.error("❌ User not found in GitHub response", data);
      process.exit(1);
    }

    const pinnedItems = data.data.user.pinnedItems.nodes;

    const outputPath = "src/assets/pinned.json";
    const dir = dirname(outputPath);

    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    writeFileSync(outputPath, JSON.stringify(pinnedItems, null, 2));
    console.log("✅ Pinned repos saved to src/assets/pinned.json");
  } catch (err) {
    console.error("❌ Failed to fetch pinned repos:", err);
    process.exit(1);
  }
}

main();
