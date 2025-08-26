<template>
    <h1 class="text-center">{{ t('about.title') }}</h1>

    <Who class="scroll-animate" />

    <How class="scroll-animate" />

    <Experience class="scroll-animate" />
</template>

<script setup lang="ts">
import How from './common/About/How.vue';
import Who from './common/About/Who.vue';
import Experience from './common/About/Experience.vue';

import { useScrollFocus } from '@/resources/ts/_scroll-animate'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useScrollFocus()
</script>