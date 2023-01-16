<template>
  <div
    class="pt-15 packages d-flex flex-column align-center"
    style="background-color: #fcfcfc"
  >
    <h2 class="text-center light-primary--text font-weight-medium">
      اختر البطاقة التي تريدها
    </h2>

    <div class="d-flex flex-column flex-md-row mx-3 mt-10 gap-sm">
      <LazyPackagesCard
        frames="8"
        price="500"
        @select-package="selectPackage"
      />
      <LazyPackagesCard
        frames="12"
        price="750"
        @select-package="selectPackage"
      />
      <LazyPackagesCard
        frames="16"
        price="1000"
        @select-package="selectPackage"
      />
    </div>

    <div class="mt-8" style="max-width: 550px; min-width: 320px">
      <form-wrapper :validator="$v.form">
        <v-form @submit.prevent="handleSubmit">
          <v-row>
            <v-col cols="12" lg="12" class="py-0">
              <h4 class="text-center light-primary--text mb-7">
                <strong> ادخل البريد الالكترونى لصاحب الهدية</strong>
              </h4>
              <form-group name="email" attribute="fields.email">
                <template slot-scope="{ attrs, listeners }">
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
          </v-row>
          <v-btn
            color="secondary"
            type="submit"
            width="300px"
            class="mt-10 py-5"
            >التأكيد</v-btn
          >
        </v-form>
      </form-wrapper>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
      },
    };
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid && this.package) {
        console.log({ email: this.form.email });
        console.log(this.package);
      }
    },

    selectPackage(frame, price) {
      this.$store.dispatch("package/SetPackage", {
        count: frame,
        price: price,
      });
      console.log(this.package);
    },
  },

  computed: {
    ...mapGetters({
      package: "package/package",
    }),
  },
};
</script>
