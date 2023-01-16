<template>
  <section class="hero">
    <div class="hero-content d-flex align-start">
      <div>
        <h1 class="primary--text">{{ $t("home.home_title") }}</h1>
        <h4 class="light-primary--text mt-5 font-weight-regular">
          {{ $t("home.home_subtitle") }}
        </h4>
        <v-btn
          nuxt
          to="/packages"
          :ripple="false"
          depressed
          color="secondary "
          class="px-8 pt-1 size-14 mt-5 d-sm-inline-block start hidden-xs-only"
        >
          {{ $t("buttons.start") }}
        </v-btn>
      </div>
      <img class="hero-shape" src="@/assets/shapes/hero shape.svg" />
    </div>
    <div class="hero-bg">
      <img src="@/assets/images/bg.png" />
    </div>
  </section>
</template>
