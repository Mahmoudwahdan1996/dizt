<template>
  <div class="header">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      width="100%"
      height="100vh"
      class="sidebar"
    >
      <header
        class="sidebar-header d-flex justify-space-between align-center px-8"
      >
        <v-icon color="white" large @click.stop="drawer = !drawer"
          >mdi-close-circle-outline</v-icon
        >

        <v-list flat color="transparent" class="d-sm-flex">
          <v-list-item dense class="px-0">
            <v-list-item-action>
              <nuxt-link exact to="/" class="logo d-flex align-center">
                <img
                  class="wow fadeInRight move-logo"
                  data-wow-duration="2s"
                  :src="require('@/assets/images/Logo-White.svg')"
                  height="40px"
                  alt="OTAS logo"
                />
              </nuxt-link>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </header>
      <v-row class="sidebar-content mx-15">
        <v-col cols="12" sm="6">
          <ul>
            <li class="first text-h6 text-md-h5 my-8">
              <nuxt-link to="/"><span>الرئيسية</span></nuxt-link>
            </li>
            <li class="text-h6 text-md-h5 my-8">
              <nuxt-link to="/aboutus"><span>من نحن</span></nuxt-link>
            </li>
            <li class="text-h6 text-md-h5 my-8">
              <nuxt-link to="/orderTracking"><span>تتبع الطلب</span></nuxt-link>
            </li>

            <li class="text-h6 text-md-h5 my-8">
              <nuxt-link to="/choosegift"><span>إرسال هدية</span></nuxt-link>
            </li>
            <li class="text-h6 text-md-h5 my-8">
              <nuxt-link to="/privacypolicy"
                ><span>سياسة الخصوصية</span></nuxt-link
              >
            </li>
            <li class="text-h6 text-md-h5 my-8">
              <nuxt-link to="/contactus"><span>تواصل معنا</span></nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="6" class="d-none d-md-block">
          <ul>
            <li class="first text-h5 my-8">
              <nuxt-link to="/"><span>تواصل معنا</span></nuxt-link>
            </li>
            <li class="text-subtitle-2 my-4">
              <nuxt-link to="/"
                ><span>اتصل على : 055 444 3 222</span></nuxt-link
              >
            </li>
            <li class="text-subtitle-2 my-4">
              <nuxt-link to="/">
                <span> البريد الالكترونى</span> :
                <span> Order@Dezit.com</span>
              </nuxt-link>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-app-bar
      elevation="0"
      :clipped-left="clipped"
      fixed
      app
      style="
        z-index: 16;
        width: 100%;
        left: 0;
        right: 0;
        background-color: #fcfcfc;
      "
    >
      <v-toolbar
        flat
        color="transparent"
        class="fix-header px-0 justify-center"
      >
        <v-app-bar-nav-icon small @click.stop="drawer = !drawer" />
        <v-spacer />

        <!-- <v-menu rounded offset-y transition="slide-x-transition">
          <template #activator="{ attrs, on }">
            <v-btn width="80" text v-bind="attrs" v-on="on">
              <span class="font-weight-bold mx-2" v-text="currentLocale.code">
              </span>
              <v-img
                :src="require('@/assets/images/globe-lang.svg')"
                contain
                width="32"
                height="32"
              />
            </v-btn>
          </template>

          <v-list class="pa-0">
            <v-list-item
              v-for="(locale, index) in $i18n.locales"
              :key="index"
              @click="onChangeLanguage(locale)"
              :active-class="
                currentLocale.code === locale.code ? 'active-item' : ''
              "
              :input-value="locale.code"
            >
              <v-list-item-title
                style="cursor: pointer"
                class="d-flex align-center justify-center"
              >
                <span class="text-capitalize">{{ locale.code }}</span>
                <v-icon class="px-2" v-text="locale.icon" />
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->

        <v-btn
          width="80"
          text
          @click="onChangeLanguage(languageDropdown)"
          class="rounded-circle mx-4"
        >
          <v-icon class="px-2" v-text="languageDropdown.icon" />
          <span class="font-weight-bold mx-1" v-text="languageDropdown.code">
          </span>
        </v-btn>
        <v-list flat color="transparent" class="d-sm-flex">
          <v-list-item dense class="px-0">
            <v-list-item-action>
              <nuxt-link exact to="/" class="logo d-flex align-center">
                <img
                  class="wow fadeInRight move-logo"
                  data-wow-duration="2s"
                  :src="require('@/assets/images/Navbar-Logo.svg')"
                  height="40px"
                  alt="OTAS logo"
                />
              </nuxt-link>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-toolbar>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  directives: {
    onScroll: {
      bind(el, bind) {
        document.addEventListener("scroll", (e) => {
          if (e.path[1].scrollY > 100) {
            el.classList.add("active-header");
          } else {
            el.classList.remove("active-header");
          }
        });
      },
    },
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      isRight: true,
    };
  },
  computed: {
    items() {
      return [
        {
          title: this.$t("routes.home"),
          to: "/",
        },
        {
          title: this.$t("about_otas"),
          to: "/about-us",
        },
        // {
        //   title: this.$t("routes.pricing"),
        //   to: "/pricing",
        // },
      ];
    },

    locale() {
      return this.$i18n.locale;
    },

    languageDropdown() {
      return this.$i18n.locales.find((el) => el.code !== this.$i18n.locale);
    },
    currentLocale() {
      return this.$i18n.locales.find((el) => el.code === this.$i18n.locale);
    },
  },
  methods: {
    onChangeLanguage(locale) {
      this.$router.push(this.switchLocalePath(locale.code));
      this.$nuxt.refresh();
      this.$nextTick(() => {});
    },
  },
};
</script>
