<template>
    <section
        :class="['d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 px-3 py-5 mx-auto', $attrs.class]"
        id="Achievements"
    >
        <figure class="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
            <picture class="d-flex align-items-center justify-content-center w-100">
                <img
                    src="/images/undraw_visionary-technology.svg"
                    class="img-fluid"
                    alt="Web app 2"
                />
            </picture>
        </figure>

        <div class="col-12 col-md-5 text-center text-md-start">
            <h2 class="fs-4 fs-md-3 mb-3">{{ t('home.achievements.header') }}</h2>
            <p class="fs-6 fs-md-5 lh-lg">{{ t('home.achievements.text') }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
