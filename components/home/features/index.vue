<template>
  <div class="features pt-5 mb-15 pb-15 px-4">
    <v-row class="mt-4 mt-sm-15">
      <v-col cols="4" class="d-flex flex-column justify-center align-center">
        <div
          class="features-item rounded-circle d-flex justify-center align-center"
        >
          <img src="@/assets/icons/Icon-3.svg" />
        </div>
        <h4 class="primary--text mt-4 hidden-xs-only">
          {{ $t("features.first_feature") }}
        </h4>
      </v-col>
      <v-col cols="4" class="d-flex flex-column justify-center align-center">
        <div
          class="features-item rounded-circle d-flex justify-center align-center"
        >
          <img src="@/assets/icons/Icon-2.svg" />
        </div>
        <h4 class="primary--text mt-4 hidden-xs-only">
          {{ $t("features.second_feature") }}
        </h4>
      </v-col>
      <v-col cols="4" class="d-flex flex-column justify-center align-center">
        <div
          class="features-item rounded-circle d-flex justify-center align-center"
        >
          <img src="@/assets/icons/Icon-1.svg" />
        </div>
        <h4 class="primary--text mt-4 hidden-xs-only">
          {{ $t("features.third_feature") }}
        </h4>
      </v-col>
    </v-row>
    <div class="pa-3 mt-6 design-btn hidden-sm-and-up" v-onScroll>
      <v-btn
        nuxt
        to="/packages"
        :ripple="false"
        depressed
        block
        x-large
        color="secondary"
      >
        إبدأ التصميم
      </v-btn>
    </div>

    <div class="features-wrapper">
      <div class="features-content">
        <div
          class="features-description d-flex flex-column justify-center align-center"
        >
          <h3 class="text-weight-medium hidden-xs-only">انيقة وعملية</h3>
          <p class="mt-3 text-caption px-5 text-center hidden-xs-only">
            مع تقنية التثبيت بدلها وعيد ترتيبها مثل ما تحب فقط صمم ودز مشروعك
            واستمتع وعيش اللحظة
          </p>
          <v-btn small color="white primary--text mt-4 hidden-xs-only"
            ><v-icon>mdi-menu-right</v-icon> شاهد الفيديو
          </v-btn>
          <v-btn x-large color="white primary--text mt-4 hidden-sm-and-up "
            ><v-icon>mdi-menu-right</v-icon> شاهد الفيديو
          </v-btn>
        </div>
      </div>
      <div class="features-content--frame">
        <img src="@/assets/images/home/frame-home.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    onScroll: {
      bind(el, bind) {
        document.addEventListener("scroll", (e) => {
          if (e.path[1].scrollY > 5) {
            el.classList.add("fixed-btn");
          } else {
            el.classList.remove("fixed-btn");
          }
        });
      },
    },
  },
};
</script>
