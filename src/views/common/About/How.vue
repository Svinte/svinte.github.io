<template>
    <section id="who" class="row justify-content-center align-items-center gap-5">
        <figure class="col-md-4">
            <img src="/images/undraw_career-development.svg" class="img-fluid" alt="">
        </figure>

        <div class="col-md-4">
            <h2>{{ t('about.header_2') }}</h2>
            <p>{{ t('about.content_2') }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
