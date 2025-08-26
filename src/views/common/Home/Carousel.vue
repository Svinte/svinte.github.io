<template>
    <div id="Carousel" class="carousel slide position-relative" data-bs-ride="carousel">

    <div class="carousel-inner">
        <div
            v-for="(item, i) in items"
            :key="i"
            :class="['carousel-item', { active: i === 0 }]"
        >
            <section class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
            <div class="col-6">
                <h1 :class="['mb-4', item.colorClass]">{{ item.title }}</h1>
                <p>{{ item.text }}</p>

                <div v-if="item.link" class="mx-auto mt-5 d-flex justify-content-center">
                    <RouterLink :to="item.link" class="btn btn-warning col-3">
                        <span>{{ item.linkText }}</span>
                    </RouterLink>
                </div>
            </div>

            <figure class="col-5">
                <picture class="d-flex align-items-center justify-content-center" style="height:400px;">
                <img
                    :src="item.img"
                    :alt="item.imgAlt"
                    width="1080"
                    class="w-100 h-100"
                    style="object-fit:contain;"
                />
                </picture>
            </figure>
            </section>
        </div>
    </div>

    <div class="w-50">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#Carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <button class="carousel-control-prev position-absolute top-100 ms-5" type="button" data-bs-target="#Carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Edellinen</span>
        </button>

        <button class="carousel-control-next position-absolute top-100 me-5" type="button" data-bs-target="#Carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Seuraava</span>
        </button>
    </div>

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