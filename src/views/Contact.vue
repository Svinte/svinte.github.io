<template>
    <section id="contact">
    <div class="container mx-auto my-5 flex flex-col items-center col-5">
        <h1 class="mb-4">{{ t('contact.title') }}</h1>
        <ul>
        <li>{{ t('contact.email') }}:
            <Botsafe
            element="kokkoniemisvante@gmail.com"
            :text="t('footer.botsafe')"
            reassemble="click"
            class="text-white text-nowrap"
            />
        </li>

        <li>{{ t('contact.github') }}:
            <a href="https://github.com/svinte" target="_blank" rel="noopener noreferrer" class="text-white text-nowrap">github.com/svinte</a>
        </li>

        <li>{{ t('contact.linkedin') }}:
            <a href="https://www.linkedin.com/in/svante-kokkoniemi" target="_blank" rel="noopener noreferrer" class="text-white text-nowrap">linkedin.com/in/svante-kokkoniemi</a>
        </li>

        <li>{{ t('contact.discord') }}:
            <a href="https://discord.com/users/748136788349943859" target="_blank" rel="noopener noreferrer" class="text-white text-nowrap">svinte</a>
        </li>
        </ul>
    </div>
    </section>
</template>

<script lang="ts" setup>
import Botsafe from "@/components/Botsafe.vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
