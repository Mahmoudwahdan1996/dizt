<template>
  <div class="giftowner">
    <h2 class="text-center light-primary--text font-weight-medium mt-15">
      هيا بنا نصنع هدية جميلة
    </h2>
    <v-container class="mt-15" style="max-width: 500px">
      <form-wrapper :validator="$v.form">
        <v-form @submit.prevent="handleSubmit">
          <v-row class="justify-center">
            <h4 class="text-center secondary--text mb-7">
              <strong> ما هو اسمك؟ </strong>
            </h4>
            <v-col cols="12" lg="12" class="py-0">
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
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(190),
      },
    },
  },
  computed: {
    ...mapGetters({
      nameOfOwner: "gift/name",
    }),
  },
  methods: {
    handleSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.selectName();
        console.log({ name: this.form.name });
        console.log(this.nameOfOwner);
        this.$router.push("/giftowneremail");
      }
    },

    selectName() {
      this.$store.dispatch("gift/SetName", this.form.name);
    },
  },
};
</script>
