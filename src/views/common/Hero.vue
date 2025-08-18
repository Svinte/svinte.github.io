<template>
    <section class="hero-section user-select-none" id="Hero">
        <img
            src="/images/undraw_tabs.svg"
            alt="Hero background"
            class="hero-bg"
        />

        <div class="d-md-flex align-items-center justify-content-center d-none">
            <div class="text-carousel">
                <div class="carousel-words">
                    <span class="display-4 fw-bold text-end carousel-word">Tehokkaampien</span>
                    <span class="display-4 fw-bold text-end carousel-word">Näyttävämpien</span>
                    <span class="display-4 fw-bold text-end carousel-word">Turvallisempien</span>
                    <span class="display-4 fw-bold text-end carousel-word">Kestävempien</span>
                    <span class="display-4 fw-bold text-end carousel-word">Parempien</span>
                </div>
            </div>
            <h1 class="display-4 fw-bold m-0 ms-2">- verkkosivujen puolesta</h1>
        </div>

        <div class="d-flex flex-column align-items-center text-center d-md-none mb-4">
            <div class="text-carousel mb-1 mx-auto">
                <div class="carousel-words">
                    <span class="fs-1 fw-bold carousel-word">Tehokkaampien</span>
                    <span class="fs-1 fw-bold carousel-word">Näyttävämpien</span>
                    <span class="fs-1 fw-bold carousel-word">Turvallisempien</span>
                    <span class="fs-1 fw-bold carousel-word">Kestävempien</span>
                    <span class="fs-1 fw-bold carousel-word">Parempien</span>
                </div>
            </div>
            <h1 class="fs-2 fw-bold mb-0 mx-auto">verkkosivujen puolesta</h1>
        </div>

        <p class="text-center fw-light text-light fs-1 fs-md-1">Jo vuodesta 2021.</p>
        <div class="mx-auto mt-5 d-flex justify-content-center align-items-center gap-4">
            <RouterLink to="/contact" class="btn">Contact</RouterLink>
            <button class="btn-gradient col-1" @click="scrollToSection"><span>Read more</span></button>
        </div>
    </section>
</template>


<script setup lang="ts">
function scrollToSection() {
    const target = document.getElementById("Carousel")

    if (!target) return

    const offset = window.innerHeight * 0.20 // 20vh offset
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 700 // 700ms

    let start: number | null = null

    function step(timestamp: number) {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)

        const ease = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress

            window.scrollTo(0, startPosition + distance * ease)

        if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
}
</script>
