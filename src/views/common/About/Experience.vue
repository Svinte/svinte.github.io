<template>
    <section id="Experience" class="row justify-content-center align-items-center gap-5">
        <div class="col-6">
            <h2>{{ t('about.header_3') }}</h2>
            <p>{{ t('about.content_3') }}.</p>

            <RouterLink to="/projects" class="btn btn-primary mt-3">Tarkastele projekteja</RouterLink>
        </div>

        <figure class="col-3">
            <img src="/images/undraw_mobile-ux.svg" class="img-fluid" alt="">
        </figure>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>