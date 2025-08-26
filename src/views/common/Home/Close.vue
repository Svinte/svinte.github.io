<template>
    <section class="d-flex flex-column align-items-center" id="Contact">
        <div class="col-4">
            <h2>{{ t('home.close_section.header') }}</h2>
            <p>{{ t('home.close_section.text') }}</p>

            <RouterLink to="/contact" class="btn btn-primary mt-4">{{ t('home.close_section.button') }}</RouterLink>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>