import theme from "./utils/theme";

const baseUrl = function () {
  if (process.env.NODE_ENV === "production") {
    return "https://a-ibrahem.azq1.com/Dzit/api/";
  } else {
    return "https://a-ibrahem.azq1.com/Dzit/api/";
  }
};

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dizt",

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss", "@/assets/fonts/stylesheet.css"],
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
  loadingIndicator: {
    name: "cube-grid",
    color: "#f00",
    background: "white",
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/api.js" },
    { src: "@/plugins/vuetify.js" },
    { src: "@/plugins/initializer.js", ssr: false },
    { src: "@/plugins/vuelidate.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "nuxt-i18n"],
  axios: {
    baseURL: baseUrl(),
  },
  i18n: {
    locales: [
      {
        code: "ar",
        file: "ar.json",
        name: "arabic",
        icon: "$arabicIcon",
      },
      {
        code: "en",
        file: "en.json",
        name: "english",
        icon: "$englishIcon",
      },
    ],
    defaultLocale: "ar",
    strategy: "prefix_and_default",
    langDir: "locales/",
    lazy: true,
    useCookie: true,
    cookieKey: "language",
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: "ar",
    },
  },
  vuetify: {
    customVariables: ["assets/scss/_variables.scss"],
    treeShake: true,
    theme: {
      dark: false,
      light: true,

      themes: {
        dark: theme.dark,
        light: theme.light,
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
