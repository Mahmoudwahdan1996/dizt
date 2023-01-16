<template>
  <div class="testimonials text-center mt-10">
    <h2 class="title-color">اراء العملاء</h2>
    <v-container class="mt-15 pb-10">
      <LazySwiperWrapper
        ref="swiper_ref"
        :breakpoints="breakpoints"
        :options="options"
      >
        <swiper-slide>
          <LazyHomeTestimonialcard />
        </swiper-slide>
        <swiper-slide>
          <LazyHomeTestimonialcard />
        </swiper-slide>
        <swiper-slide>
          <LazyHomeTestimonialcard />
        </swiper-slide>
        <swiper-slide>
          <LazyHomeTestimonialcard />
        </swiper-slide>
        <swiper-slide>
          <LazyHomeTestimonialcard />
        </swiper-slide>
        <swiper-slide>
          <LazyHomeTestimonialcard />
        </swiper-slide>
        <swiper-slide>
          <LazyHomeTestimonialcard />
        </swiper-slide>
      </LazySwiperWrapper>
      <div class="swiper-pagination" slot="pagination" />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        slidesPerView: "auto",
        slidesPerColumnFill: "row",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      breakpoints: {
        1440: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1380: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      },
    };
  },
};
</script>
