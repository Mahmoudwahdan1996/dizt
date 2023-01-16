<template>
  <v-container class="py-5 mx-auto contactus">
    <h2 class="color-title text-center">تواصل معنا</h2>
    <v-sheet rounded class="pa-4 mt-5 mx-auto" max-width="600">
      <form-wrapper :validator="$v.form">
        <v-form @submit.prevent="handleSubmit">
          <v-row>
            <v-col cols="12" lg="12" class="py-0">
              <v-label for="name">
                <strong>{{ $t("fields.name") }}</strong>
              </v-label>

              <form-group name="name" attribute="fields.name">
                <template slot-scope="{ attrs, listeners }">
                  <v-text-field
                    id="name"
                    v-model="form.name"
                    class="fill-field mt-1"
                    filled
                    rounded
                    flat
                    v-bind="attrs"
                    v-on="listeners"
                  >
                  </v-text-field>
                </template>
              </form-group>
            </v-col>

            <v-col cols="12" lg="12" class="py-0">
              <form-group name="email" attribute="fields.email">
                <template slot-scope="{ attrs, listeners }">
                  <v-label for="email">
                    <strong> {{ $t("fields.email") }}</strong>
                  </v-label>
                  <v-text-field
                    v-bind="attrs"
                    id="email"
                    v-model="form.email"
                    class="fill-field mt-1"
                    filled
                    rounded
                    flat
                    v-on="listeners"
                  >
                  </v-text-field>
                </template>
              </form-group>
            </v-col>

            <v-col cols="12" lg="12" class="py-0">
              <form-group name="phone" attribute="fields.phone">
                <template slot-scope="{ attrs, listeners }">
                  <v-label for="phone">
                    <strong> {{ $t("fields.phone") }} </strong>
                  </v-label>
                  <v-text-field
                    v-bind="attrs"
                    id="phone"
                    v-model="form.phone"
                    class="fill-field mt-1"
                    filled
                    rounded
                    flat
                    v-on="listeners"
                  >
                  </v-text-field>
                </template>
              </form-group>
            </v-col>

            <v-col cols="12" class="py-0">
              <form-group name="text" attribute="fields.message">
                <template slot-scope="{ attrs, listeners }">
                  <v-label for="message">
                    <strong> {{ $t("fields.message") }}</strong>
                  </v-label>
                  <v-textarea
                    v-bind="attrs"
                    rows="4"
                    id="message"
                    v-model="form.text"
                    class="fill-field mt-1"
                    filled
                    rounded
                    no-resize
                    flat
                    v-on="listeners"
                  >
                  </v-textarea>
                </template>
              </form-group>
            </v-col>
            <v-col cols="12" lg="12" class="d-flex justify-end">
              <v-btn
                block
                height="46px"
                large
                :loading="loading"
                type="submit"
                class="secondary shadow"
              >
                {{ $t("buttons.send") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </form-wrapper>
    </v-sheet>
    <p class="mt-2 text-center">
      <span>اتصل على :</span> <span>055 444 3 222</span>
      <span>البريد الالكترونى :</span> <span>Order@Dezit.com</span>
    </p>
  </v-container>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
import { maxWords } from "@/utils/validate.js";

export default {
  name: "ContactusPage",

  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        text: "",
      },
      loading: false,
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(190),
      },
      email: {
        required,
        email,
      },

      phone: {
        required,
        minLength: minLength(9),
        maxLength: maxLength(15),
      },
      text: {
        required,
        minLength: minLength(3),
        maxWords: maxWords(40000),
      },
    },
  },

  methods: {
    resetData() {
      this.$v.form.$reset();
      for (const key in this.form) {
        this.form[key] = "";
      }
    },
    handleSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.loading = true;
        this.handleContactMessage();
      }
    },
    buildData() {
      const formData = new FormData();
      for (const key in this.form) {
        if (key !== "phone") {
          formData.append(key, this.form[key]);
        }
      }
      let phone = "";
      if (this.form.phone[0] == 0) {
        phone = this.form.phone.substring(1);
      } else {
        phone = this.form.phone;
      }
      formData.append("phone[number]", phone);
      return formData;
    },
    handleContactMessage() {
      this.resetData();
      this.loading = false;
    },
  },
};
</script>
