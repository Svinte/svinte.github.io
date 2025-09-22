<template>
    <header>
        <div class="px-3 py-2 text-white">
            <div class="container">
                <div class="d-none d-lg-flex flex-wrap align-items-center justify-content-between">
                    <RouterLink
                        to="/"
                        class="d-flex align-items-center my-2 text-white text-decoration-none fs-4 fw-light"
                    >
                        Svante K. Kokkoniemi
                    </RouterLink>

                    <ul class="nav">
                        <li class="nav-item" v-for="item in navItems" :key="item.path">
                            <RouterLink
                                :to="item.path"
                                :class="[
                                    'nav-link',
                                    route.path === item.path ? 'active text-white' : 'text-white-50'
                                ]"
                                exact
                            >
                                {{ t(item.label) }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="d-lg-none mb-2">
                    <RouterLink
                        to="/"
                        class="d-flex align-items-center text-white text-decoration-none fs-5 fw-light"
                    >
                        Svante K. Kokkoniemi
                    </RouterLink>
                </div>

                <div class="d-flex justify-content-between align-items-center d-lg-none">
                    <button
                        class="btn fs-3 py-1 px-2"
                        @click="menuOpen = !menuOpen"
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>

                    <div class="language-switcher">
                        <button
                            class="btn text-light btn-sm me-2"
                            :class="{ active: currentLang === 'fi' }"
                            @click="changeLang('fi')"
                        >
                            Suomi
                        </button>
                        <button
                            class="btn text-light btn-sm"
                            :class="{ active: currentLang === 'en' }"
                            @click="changeLang('en')"
                        >
                            English
                        </button>
                    </div>
                </div>

                <ul
                    v-if="menuOpen"
                    class="nav flex-column mt-2 d-lg-none"
                >
                    <li class="nav-item" v-for="item in navItems" :key="item.path">
                        <RouterLink
                            :to="item.path"
                            :class="[
                                'nav-link',
                                route.path === item.path ? 'active text-white' : 'text-white-50'
                            ]"
                            exact
                        >
                            {{ t(item.label) }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>

        <div class="px-3 py-0 d-none d-lg-block">
            <div class="container d-flex justify-content-end">
                <div class="language-switcher">
                    <button
                        class="btn text-light btn-sm me-2"
                        :class="{ active: currentLang === 'fi' }"
                        @click="changeLang('fi')"
                    >
                        Suomi
                    </button>
                    <button
                        class="btn text-light btn-sm"
                        :class="{ active: currentLang === 'en' }"
                        @click="changeLang('en')"
                    >
                        English
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'

const route = useRoute()
const { t, locale } = useI18n()
const currentLang = ref<string>('fi')
const menuOpen = ref(false)

const navItems = [
    { path: '/', label: 'header.home' },
    { path: '/about', label: 'header.about' },
    { path: '/projects', label: 'header.projects' },
    { path: '/contact', label: 'header.contact' },
]

onMounted(() => {
    const savedLang = sessionStorage.getItem('lang')
    if (savedLang) {
        locale.value = savedLang
        currentLang.value = savedLang
    }
})

function changeLang(lang: string) {
    locale.value = lang
    currentLang.value = lang
    localStorage.setItem('lang', lang)
}
</script>
