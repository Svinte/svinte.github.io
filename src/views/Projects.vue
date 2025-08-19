<template>
    <section class="projects-section container py-5">
        <h2 class="section-title text-center mb-4">Pinned Projects</h2>

        <div class="projects-grid">
        <div v-for="repo in repos" :key="repo.name" class="project-card">
            <a :href="repo.url" target="_blank" class="project-link">
            <h3 class="project-name">{{ repo.name }}</h3>
            </a>
            <p class="project-description">{{ repo.description }}</p>

            <div class="project-meta">
                <span v-if="repo.primaryLanguage" class="project-lang">{{ repo.primaryLanguage.name }}</span>
                <span class="project-stars">⭐ {{ repo.stargazerCount }}</span>
                <span class="project-forks">🍴 {{ repo.forkCount }}</span>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import pinned from "@/assets/pinned.json";

interface Repo {
    name: string;
    description: string;
    url: string;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage?: { name: string };
}

const repos = pinned as Repo[];
</script>

<style lang="scss" scoped>
.projects-section {
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .project-card {
        background: #1a1a1a;
        border-radius: 12px;
        padding: 1rem 1.5rem;
        transition: transform 0.2s, box-shadow 0.2s;
        cursor: pointer;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .project-link {
            text-decoration: none;
            color: #fff;

            .project-name {
                font-size: 1.25rem;
                font-weight: bold;
                margin-bottom: 0.5rem;
            }
        }

        .project-description {
            font-size: 0.95rem;
            color: #ccc;
            margin-bottom: 0.75rem;
        }

        .project-meta {
            display: flex;
            gap: 1rem;
            font-size: 0.85rem;
            color: #aaa;

            .project-lang {
                font-weight: 500;
            }
        }
    }
}
</style>
