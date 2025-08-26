<template>
    <header>
        <div class="px-3 py-2 text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-between">
                <RouterLink to="/" class="d-flex align-items-center my-2 text-white text-decoration-none fs-4 fw-light">
                    Svante K. Kokkoniemi
                </RouterLink>

                <ul class="nav">
                    <li class="nav-item">
                        <RouterLink
                            to="/"
                            :class="['nav-link', route.path === '/' ? 'active text-white' : 'text-white-50']"
                            exact
                        >
                            {{ t('header.home') }}
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink
                            to="/about"
                            :class="['nav-link', route.path === '/about' ? 'active text-white' : 'text-white-50']"
                            exact
                        >
                            {{ t('header.about') }}
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink
                            to="/projects"
                            :class="['nav-link', route.path === '/projects' ? 'active text-white' : 'text-white-50']"
                            exact
                        >
                            {{ t('header.projects') }}
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink
                            to="/contact"
                            :class="['nav-link', route.path === '/contact' ? 'active text-white' : 'text-white-50']"
                            exact
                        >
                            {{ t('header.contact') }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        </div>

        <div class="px-3 py-0">
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

const route = useRoute();
const { t, locale } = useI18n()
const currentLang = ref<string>('fi')

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
