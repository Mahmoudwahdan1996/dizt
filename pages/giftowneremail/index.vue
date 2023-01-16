<template>
  <div class="giftowner">
    <h2 class="text-center light-primary--text font-weight-medium mt-15">
      مرحبا {{ nameOfOwner }}
    </h2>
    <v-container class="mt-15" style="max-width: 500px">
      <form-wrapper :validator="$v.form">
        <v-form @submit.prevent="handleSubmit">
          <v-row class="justify-center">
            <h4 class="text-center secondary--text mb-7">
              <strong> ادخل بريدك الالكترونى </strong>
            </h4>
            <v-col cols="12" lg="12" class="py-0">
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
          <div class="d-flex flex-column align-center">
            <v-btn
              color="secondary"
              type="submit"
              width="300"
              class="mt-8 mx-auto"
              >التالى</v-btn
            >
          </div>
        </v-form>
      </form-wrapper>
    </v-container>
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
  computed: {
    ...mapGetters({
      emailOfOwner: "gift/email",
      nameOfOwner: "gift/name",
    }),
  },
  methods: {
    handleSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.selectEmail();
        console.log({ email: this.form.email });
        console.log(this.emailOfOwner);
        this.$router.push("/chooseframe");
      }
    },

    selectEmail() {
      this.$store.dispatch("gift/SetEmail", this.form.email);
    },
  },
};
</script>
