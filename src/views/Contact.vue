<template>
    <section id="contact" class="py-5">
        <div class="container">
            <div class="col-12 col-sm-6 mx-auto">
                <h1 class="mb-4">{{ t('contact.title') }}</h1>

                <ul class="list-unstyled">
                    <li class="mb-3">
                        {{ t('contact.email') }}:
                        <Botsafe
                            element="kokkoniemisvante@gmail.com"
                            :text="t('footer.botsafe')"
                            reassemble="click"
                            class="d-inline text-white"
                        />
                    </li>
                    <li class="mb-3">
                        {{ t('contact.github') }}:
                        <a href="https://github.com/svinte" target="_blank" rel="noopener noreferrer" class="d-inline text-white">
                            github.com/svinte
                        </a>
                    </li>
                    <li class="mb-3">
                        {{ t('contact.linkedin') }}:
                        <a href="https://www.linkedin.com/in/svante-kokkoniemi" target="_blank" rel="noopener noreferrer" class="d-inline text-white">
                            linkedin.com/in/svante-kokkoniemi
                        </a>
                    </li>
                    <li class="mb-3">
                        {{ t('contact.discord') }}:
                        <a href="https://discord.com/users/748136788349943859" target="_blank" rel="noopener noreferrer" class="d-inline text-white">
                            svinte
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Botsafe from "@/components/Botsafe.vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
