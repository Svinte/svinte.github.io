<template>
    <h1 class="text-center">About me</h1>

    <Who class="scroll-animate" />

    <How class="scroll-animate" />

    <Experience class="scroll-animate" />
</template>

<script setup lang="ts">
import How from './common/About/How.vue';
import Who from './common/About/Who.vue';
import Experience from './common/About/Experience.vue';

import { useScrollFocus } from '@/resources/ts/_scroll-animate'

useScrollFocus()
</script>