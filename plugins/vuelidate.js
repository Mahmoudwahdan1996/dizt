import Vue from "vue";
import Vuelidate from "vuelidate";

import FormGroup from "@/components/FormGroup";

import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

Vue.use(Vuelidate);

const messages = {
  en: require("@/locales/en.json"),
  ar: require("@/locales/ar.json"),
};

Vue.use(vuelidateErrorExtractor, {
  messages,
  i18n: "validation",
});

Vue.component("FormGroup", FormGroup);

Vue.component("FormWrapper", templates.FormWrapper);
