<template>
    <section
        class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 mx-auto"
        id="Achievements"
    >

        <figure class="col-4">
            <picture class="d-flex align-items-center justify-content-center">
                <img src="/images/undraw_visionary-technology.svg" width="1080" class="w-100" alt="Web app 2" />
            </picture>
        </figure>

        <div class="col-4">
            <h2>{{ t('home.achievements.header') }}</h2>
            <p>{{ t('home.achievements.text') }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>