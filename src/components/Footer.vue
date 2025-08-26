<template>
    <footer class="text-white py-4 mt-auto">
        <section class="container py-3">
            <div class="d-flex flex-wrap justify-content-between gap-3 w-100 w-md-50 mx-auto">
                <div class="d-flex flex-column flex-md-row align-items-center gap-2">
                    <img src="/icons/mail.svg" alt="email" height="24" />
                    <Botsafe
                        element="kokkoniemisvante@gmail.com"
                        :text="t('footer.botsafe')"
                        reassemble="click"
                        class="text-white text-nowrap"
                    />
                </div>

                <div class="d-flex flex-column flex-md-row align-items-center gap-2">
                    <img src="/icons/linked.svg" alt="linkedin" height="24" />
                    <a
                        href="https://linked.in/svante-kokkoniemi"
                        class="text-white text-nowrap"
                        target="_blank"
                    >
                        Svante Kokkoniemi
                    </a>
                </div>

                <div class="d-flex flex-column flex-md-row align-items-center gap-2">
                    <img src="/icons/discord.svg" alt="discord" height="24" />
                    <a
                        href="https://discord.com/users/748136788349943859"
                        class="text-white text-nowrap"
                        target="_blank"
                    >
                        Svinte
                    </a>
                </div>

                <div class="d-flex flex-column flex-md-row align-items-center gap-2">
                    <img src="/icons/github.svg" alt="github" height="24" />
                    <a
                        href="https://github.com/svinte"
                        class="text-white text-nowrap"
                        target="_blank"
                    >
                        Svinte
                    </a>
                </div>
            </div>
        </section>

        <section class="container row text-center text-md-start mx-auto mt-5">
            <div class="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                <p class="mb-0">&copy; Svante Kokkoniemi 2024–2025, MIT</p>
                <p class="mb-0">{{ t('footer.host') }}</p>
            </div>
        </section>
    </footer>
</template>


<script setup lang="ts">
import Botsafe from './Botsafe.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>