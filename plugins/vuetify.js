import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ArabicIcon from "@/assets/icons/arabicIcon";
import EnglishIcon from "@/assets/icons/englishIcon";
Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  icons: {
    iconfont: "mdi",
    values: {
      arabicIcon: {
        component: ArabicIcon,
      },
      englishIcon: {
        component: EnglishIcon,
      },
    },
  },
});
