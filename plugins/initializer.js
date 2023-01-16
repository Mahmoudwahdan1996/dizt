import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import GlobalImagePreview from "@/components/GlobalImagePreview";

import "swiper/css/swiper.css";
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/js/swiper.esm";

SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(VueAwesomeSwiper);
Vue.component("global-image-preview", GlobalImagePreview);
