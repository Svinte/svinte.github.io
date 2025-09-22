<template>
    <section
        id="Experience"
        class="row justify-content-center align-items-center gap-4 text-center text-md-start py-4"
    >
        <div class="col-12 col-md-6">
            <h2>{{ t('about.header_3') }}</h2>
            <p>{{ t('about.content_3') }}.</p>

            <RouterLink to="/projects" class="btn btn-primary mt-3">
                {{ t('about.projects_link') }}
            </RouterLink>
        </div>

        <figure class="col-12 col-md-3 mt-5">
            <img src="/images/undraw_mobile-ux.svg" class="img-fluid" alt="">
        </figure>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
