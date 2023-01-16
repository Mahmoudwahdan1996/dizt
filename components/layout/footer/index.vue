<template>
  <v-footer
    class="footer d-flex justify-center align-center bg-grey pt-13"
    app
    absolute
  >
    <div class="footer--frame">
      <img src="@/assets/images/Footer shape.svg" />
    </div>
    <div class="footer--content d-flex flex-column text-center">
      <nuxt-link exact to="/" class="logo mx-auto">
        <img
          class="wow fadeInRight move-logo"
          data-wow-duration="2s"
          :src="require('@/assets/images/Navbar-Logo.svg')"
          height="40px"
          alt="OTAS logo"
        />
      </nuxt-link>
      <ul class="footer--content-list d-flex justify-center mt-3 mt-sm-6">
        <li>
          <nuxt-link class="size-16" to="/about">من نحن</nuxt-link>
        </li>
        <li>
          <nuxt-link class="size-16" to="/about"> سياسة الخصوصية</nuxt-link>
        </li>
        <li>
          <nuxt-link class="size-16" to="/about"> تواصل معنا</nuxt-link>
        </li>
      </ul>
      <div class="d-flex justify-center align-center">
        <ul class="footer--content-list d-flex justify-center mt-3 mt-sm-6">
          <li><v-icon class="social" dense>mdi-snapchat</v-icon></li>
          <li><v-icon class="social" dense> mdi-twitter</v-icon></li>
          <li><v-icon class="social" dense>mdi-instagram</v-icon></li>
          <li><v-icon class="social" dense> mdi-facebook</v-icon></li>
        </ul>
        <div class="d-flex justify-center align-center ml-8 mt-3 mt-sm-6">
          <v-icon class="px-2 rounded-circle" v-text="currentLocale.icon" />
          <span>{{ currentLanguage }}</span>
        </div>
      </div>
    </div>
    <div class="footer--copy-right"></div>
  </v-footer>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locales.find((el) => el.code === this.$i18n.locale);
    },
    currentLanguage() {
      if (this.$i18n.locale == "ar") {
        return "Arabic";
      }
      return "English";
    },
  },
};
</script>
