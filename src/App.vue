<script setup lang="ts">
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
    <Header />

    <main class="container my-5">
        <RouterView />
    </main>

    <Footer />
</template>

<style scoped></style>
