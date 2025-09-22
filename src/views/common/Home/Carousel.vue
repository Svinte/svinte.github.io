<template>
    <div id="Carousel" class="carousel slide position-relative" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div
            v-for="(item, i) in items"
            :key="i"
            :class="['carousel-item', { active: i === 0 }]"
        >
            <section
            class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 p-3"
            >
            <div class="col-12 col-md-6 text-center text-md-start">
                <h1 :class="['mb-3', item.colorClass]">{{ item.title }}</h1>
                <p>{{ item.text }}</p>

                <div v-if="item.link" class="mt-4 d-flex justify-content-center justify-content-md-start">
                <RouterLink :to="item.link" class="btn btn-warning">
                    <span>{{ item.linkText }}</span>
                </RouterLink>
                </div>
            </div>

            <figure class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <picture class="w-100" style="max-height:300px;">
                <img
                    :src="item.img"
                    :alt="item.imgAlt"
                    class="img-fluid"
                    style="object-fit:contain; max-height:300px;"
                />
                </picture>
            </figure>
            </section>
        </div>
        </div>

        <div class="carousel-indicators position-relative mt-3 d-flex justify-content-center">
        <button
            v-for="(_, i) in items"
            :key="i"
            type="button"
            data-bs-target="#Carousel"
            :data-bs-slide-to="i"
            :class="{ active: i === 0 }"
            :aria-current="i === 0 ? 'true' : undefined"
            :aria-label="`Slide ${i + 1}`"
        ></button>
        </div>

        <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#Carousel"
        data-bs-slide="prev"
        >
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">{{ t('home.carousel.previus') }}</span>
        </button>

        <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#Carousel"
        data-bs-slide="next"
        >
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">{{ t('home.carousel.next') }}</span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const items = computed(() => {
    return Array.from({ length: 3 }, (_, i) => {
        const index = i + 1
        var link = t(`home.carousel.${index}.link`)

        const CTA = link === `home.carousel.${index}.link` ? true : false

        return {
        title: t(`home.carousel.${index}.title`),
        text: t(`home.carousel.${index}.text`),
        img: t(`home.carousel.${index}.img`),
        imgAlt: t(`home.carousel.${index}.img_alt`),
        colorClass: t(`home.carousel.${index}.color_class`),
        link: CTA ? null : link,
        linkText: link ? t(`home.carousel.${index}.link_text`) : null
        }
    })
})
</script>

<style scoped>
.carousel-control-prev,
.carousel-control-next {
  width: 3rem;
  height: 3rem;
}

@media (max-width: 768px) {
    .carousel-control-prev,
    .carousel-control-next {
        width: 2rem;
        height: 2rem;
    }
}
</style>
