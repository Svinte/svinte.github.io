<template>
    <header>
        <div class="px-3 py-2 text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-between">
                <RouterLink to="/" class="d-flex align-items-center my-2 text-white text-decoration-none fs-4 fw-light">
                    Svante K. Kokkoniemi
                </RouterLink>

                <ul class="nav">
                    <li v-for="item in navItems" :key="item.path" class="nav-item">
                        <RouterLink
                            :to="item.path"
                            :class="['nav-link', route.path === item.path ? 'active text-white' : 'text-white-50']"
                            exact
                        >
                            {{ item.label }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        </div>

        <div class="px-3 py-0">
        <div class="container d-flex justify-content-end">
            <div class="language-switcher">
                <button class="btn text-light btn-sm me-2">Suomi</button>
                <button class="btn text-light btn-sm">English</button>
            </div>
        </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
]
</script>
