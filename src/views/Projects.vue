<template>
    <section class="container py-5">
        <h1 class="text-center mb-4">Pinned Projects</h1>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div v-for="repo in repos" :key="repo.name" class="col">
                <div class="card h-100 bg-dark text-white">
                    <div class="card-body">
                        <a :href="repo.url" target="_blank" class="text-decoration-none text-white">
                            <h2 class="card-title h5">{{ repo.name }}</h2>
                        </a>
                        <p class="card-text text-light">{{ repo.description }}</p>

                        <div class="d-flex gap-3 text-secondary small">
                            <span v-if="repo.primaryLanguage" :style="{ color: repo.color }">
                                {{ repo.primaryLanguage.name }}
                            </span>
                            <span>⭐ {{ repo.stargazerCount }}</span>
                            <span>🍴 {{ repo.forkCount }}</span>
                        </div>
                    </div>
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
