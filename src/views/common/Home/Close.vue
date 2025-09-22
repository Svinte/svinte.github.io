<template>
    <section class="d-flex flex-column align-items-center py-5" id="Contact">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
                    <h2 class="mb-3">{{ t('home.close_section.header') }}</h2>
                    <p class="mb-4">{{ t('home.close_section.text') }}</p>

                    <RouterLink
                        to="/contact"
                        class="btn btn-primary btn-lg"
                    >
                        {{ t('home.close_section.button') }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
