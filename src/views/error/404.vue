<template>
    <section class="d-flex justify-content-center align-items-center">
        <div class="card mt-5 p-5">
            <section class="card-body">
                <p class="display-1 mb-2 text-center" aria-hidden="true">404</p>

                <hr>

                <h1 class="card-title">Page not found</h1>
                <p class="card-text">We could not find the page you requested. Please check the address.</p>

                <section class="d-flex pt-4">
                    <RouterLink to="/" class='btn btn-outline-secondary m-auto'>&laquo; Back to home page</RouterLink>
                </section>
            </section>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>