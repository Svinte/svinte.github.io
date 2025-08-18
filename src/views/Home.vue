<template>
    <Hero class="scroll-animate" />

    <Carousel class="scroll-animate" />

    <section
        class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 scroll-animate mx-auto"
        id="Achievements"
    >

        <figure class="col-4">
            <picture class="d-flex align-items-center justify-content-center">
                <img src="/images/undraw_visionary-technology.svg" width="1080" class="w-100" alt="Web app 2" />
            </picture>
        </figure>

        <div class="col-4">
            <h2>Kerro saavutuksista</h2>
            <p>Tämä ohjaa käyttäjää projektit sivulle.</p>
        </div>
    </section>

    <section class="d-flex flex-column align-items-center scroll-animate" id="Contact">
        <h2>Clousaa sivu</h2>
        <p>
            Käyttäjän tulisi tässä vaiheessa olla jo vaihtanut uudelle sivulle, mutta anna mahdollisuus
            yhteydenottoon lopuksi.
        </p>
    </section>
</template>

<script setup>
import Hero from './common/Hero.vue'
import Carousel from './common/Carousel.vue'

import { onMounted, onBeforeUnmount } from 'vue'

let rafId = null
let observer = null
let resizeHandler = null

function clamp(v, a = 0, b = 1) {
    return Math.max(a, Math.min(b, v))
}

function updateFocus(els) {
    if (!els.length) return

    const vh = window.innerHeight
    const mid = vh / 2

    els.forEach((el) => {
        const r = el.getBoundingClientRect()

        if (r.height === 0 && r.width === 0) {
            el.style.setProperty('--focus', '0')
            return
        }

        const center = r.top + r.height / 2
        const dist = Math.abs(center - mid)
        const normalized = clamp(1 - dist / mid)
        const eased = Math.sin(normalized * Math.PI / 2)

        el.style.setProperty('--focus', String(eased))
    })

    rafId = requestAnimationFrame(() => updateFocus(els))
}

onMounted(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = Array.from(document.querySelectorAll('.scroll-animate'))

    if (reduced) {
        els.forEach((el) => {
            el.classList.add('in-view')
            el.style.setProperty('--focus', '1')
        })

        return
    }

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view')
                    observer.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.15 }
    )

    els.forEach((el) => observer.observe(el))

    updateFocus(els)

    resizeHandler = () => {
        if (rafId) cancelAnimationFrame(rafId)
        updateFocus(els)
    }

    window.addEventListener('resize', resizeHandler)
    window.addEventListener('orientationchange', resizeHandler)
})

onBeforeUnmount(() => {
    if (observer) {
        try {
            observer.disconnect()
        } catch (e) {}
        observer = null
    }

    if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
    }

    if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler)
        window.removeEventListener('orientationchange', resizeHandler)
        resizeHandler = null
    }
})
</script>
