<template>
    <div id="Carousel" class="carousel slide position-relative" data-bs-ride="carousel">

    <div class="carousel-inner">
        <div class="carousel-item active">
        <section class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
            <div class="col-6">
                <h1 class="mb-4 text-success">Ensimmäinen huomion herättäjä</h1>
                <p>Tämä teksti herättää lukijan ensimmäisen huomion. Tähän tulee panostaa.</p>
            </div>

            <figure class="col-5">
            <picture class="d-flex align-items-center justify-content-center" style="height:400px;">
                <img src="/images/cozy.png" alt="Web app 2" width="1080" class="w-100 h-100" style="object-fit:contain;">
            </picture>
            </figure>
        </section>
        </div>

        <div class="carousel-item">
        <section class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
            <div class="col-6">
                <h1 class="mb-4 text-warning">Uusi vielä vaikuttavampi</h1>
                <p>Tämä teksti on painavempi kuin edellisempi, joka saa lukijan vaikuttumaan.</p>
            </div>

            <figure class="col-5">
            <picture class="d-flex align-items-center justify-content-center" style="height:400px;">
                <img src="/images/undraw_working-from-anywhere.svg" alt="Web app 2" width="1080" class="w-100 h-100" style="object-fit:contain;">
            </picture>
            </figure>
        </section>
        </div>

        <div class="carousel-item">
        <section class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
            <div class="col-6">
                <h1 class="mb-4 text-primary">Call to action</h1>
                <p>Tällä tekstillä ei ole visuaalista painoa. Tarkoitus on vain kutsua käyttäjä jatkamaan sivuston selausta.</p>

                <div class="mx-auto mt-5 d-flex justify-content-center">
                    <a href="" class="btn btn-warning col-3"><span>Read more</span></a>
                </div>
            </div>

            <figure class="col-5">
            <picture class="d-flex align-items-center justify-content-center" style="height:400px;">
                <img src="/images/app.png" alt="Web app 2" width="1080" class="w-100 h-100" style="object-fit:contain;">
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