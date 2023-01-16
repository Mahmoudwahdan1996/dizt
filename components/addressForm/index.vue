<template>
  <v-dialog v-model="localDialog" width="600">
    <template v-slot:activator="{ on, attrs }">
      <div
        class="mx-9 d-flex justify-space-between align-center mt-6 border-around pa-3"
        v-bind="attrs"
        v-on="on"
      >
        <div class="d-inline">
          <v-icon class="primary--text">mdi-map-marker</v-icon>
          <span>إضافة العنوان</span>
        </div>
        <span class="light-primary--text" v-if="checked">
          <v-icon class="light-primary--text">mdi-check-circle-outline</v-icon
          >تم
        </span>
      </div>
    </template>
    <v-sheet rounded class="pa-8 mx-auto address" max-width="600">
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
            <v-col cols="12" lg="12" class="py-0">
              <v-label for="country">
                <strong>{{ $t("fields.country") }}</strong>
              </v-label>

              <form-group name="country" attribute="fields.country">
                <template slot-scope="{ attrs, listeners }">
                  <v-text-field
                    id="country"
                    v-model="form.country"
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
              <v-label for="city">
                <strong>{{ $t("fields.city") }}</strong>
              </v-label>

              <form-group name="city" attribute="fields.city">
                <template slot-scope="{ attrs, listeners }">
                  <v-text-field
                    id="city"
                    v-model="form.city"
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
              <v-label for="street">
                <strong>{{ $t("fields.street") }}</strong>
              </v-label>

              <form-group name="street" attribute="fields.street">
                <template slot-scope="{ attrs, listeners }">
                  <v-text-field
                    id="street"
                    v-model="form.street"
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

            <v-col cols="6" lg="6" class="py-0">
              <v-label for="building">
                <strong>{{ $t("fields.building") }}</strong>
              </v-label>

              <form-group name="building" attribute="fields.building">
                <template slot-scope="{ attrs, listeners }">
                  <v-text-field
                    id="building"
                    v-model="form.building"
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

            <v-col cols="6" lg="6" class="py-0">
              <v-label for="Flat">
                <strong>{{ $t("fields.Flat") }}</strong>
              </v-label>

              <form-group name="Flat" attribute="fields.Flat">
                <template>
                  <v-text-field
                    id="Flat"
                    v-model="form.Flat"
                    class="fill-field mt-1"
                    filled
                    rounded
                    flat
                  >
                  </v-text-field>
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
                {{ $t("buttons.confirm") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </form-wrapper>
    </v-sheet>
  </v-dialog>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "AddressForm",

  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "en" ? "ltr" : "rtl",
      },
    };
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        street: "",
        building: "",
        Flat: "",
      },
      loading: false,
      localDialog: null,
      checked: false,
    };
  },
  watch: {
    dialog(val) {
      this.localDialog = val;
    },
    form: {
      deep: true,
      handler() {
        if (this.$v.form.$invalid) {
          this.checked = false;
        } else {
          this.checked = true;
        }
      },
    },
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
      country: {
        required,
      },
      city: {
        required,
      },
      street: {
        required,
      },
      building: {
        required,
      },
    },
  },
  methods: {
    ...mapActions({ SetAddress: "address/SetAddress"  }),

    handleSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.checked = true;
        this.localDialog = false;
        this.SetAddress({ ...this.buildData() });
        this.handleContactMessage();
      } else {
        this.checked = false;
      }
    },

    buildData() {
      let data = {};
      let address =
        this.form.country +
        "/" +
        this.form.city +
        "/" +
        this.form.street +
        "/" +
        this.form.building;
      if (this.form.Flat) {
        address = address + "/" + this.form.Flat;
      }

      data = {
        name: this.form.name,
        email: this.form.email,
        phone_number: this.form.phone,
        address: address,
      };
      return data;
    },
    handleContactMessage() {
      this.loading = false;
    },
  },
};
</script>
