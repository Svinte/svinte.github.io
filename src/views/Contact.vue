<template>
    <section id="contact">
    <div class="container mx-auto my-5 flex flex-col items-center col-5">
        <h1 class="mb-4">Yhteystiedot:</h1>
        <ul>
        <li>Sähköposti:
            <Botsafe
            element="kokkoniemisvante@gmail.com"
            text="Paina avataksesi"
            reassemble="click"
            class="text-white text-nowrap"
            />
        </li>

        <li>GitHub:
            <a href="https://github.com/svinte" target="_blank" rel="noopener noreferrer" class="text-white text-nowrap">github.com/svinte</a>
        </li>

        <li>LinkedIn:
            <a href="https://www.linkedin.com/in/svante-kokkoniemi" target="_blank" rel="noopener noreferrer" class="text-white text-nowrap">linkedin.com/in/svante-kokkoniemi</a>
        </li>

        <li>Discord:
            <a href="https://discord.com/users/748136788349943859" target="_blank" rel="noopener noreferrer" class="text-white text-nowrap">svinte</a>
        </li>
        </ul>
    </div>
    </section>
</template>

<script setup lang="ts">
import Botsafe from "@/components/Botsafe.vue";
</script>
