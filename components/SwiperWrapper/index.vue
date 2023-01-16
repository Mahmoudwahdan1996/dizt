<template>
  <swiper
    ref="mySwiper"
    :options="swiperOptions"
    class="pb-15"
    :dir="direction"
  >
    <slot />
  </swiper>
</template>

<script>
export default {
  name: "SwiperWrapper",
  inheritAttrs: false,
  props: {
    breakpoints: {
      type: Object,
      default: () => {},
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    swiperOptions() {
      return {
        spaceBetween: 0,
        centeredSlides: false,
        breakpoints: this.breakpoints,
        autoplay: false,
        ...this.options,
      };
    },
    direction() {
      if (this.$i18n.locale === "ar") {
        return "rtl";
      } else {
        return "ltr";
      }
    },
  },

  methods: {
    slideTo(index) {
      this.$refs.mySwiper.$swiper.slideTo(index);
    },
    slideNext() {
      this.$refs.mySwiper.$swiper.slideNext();
    },
    slidePrev() {
      this.$refs.mySwiper.$swiper.slidePrev();
    },
  },
};
</script>
