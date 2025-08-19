<template>
    <Hero class="scroll-animate" />

    <Carousel class="scroll-animate" />

    <Achivements class="scroll-animate" />

    <Close class="scroll-animate" />
</template>

<script setup>
import Hero from './common/Home/Hero.vue'
import Carousel from './common/Home/Carousel.vue'
import Achivements from './common/Home/Achivements.vue'
import Close from './common/Home/Close.vue'

import { useScrollFocus } from '@/resources/ts/_scroll-animate'

useScrollFocus()
</script>
