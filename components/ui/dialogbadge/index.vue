<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          color="primary"
          v-bind="attrs"
          v-on="on"
          class="cancel-order mt-7 text-center"
          x-large
        >
          الغاء الطلب</v-btn
        >
      </template>
      <v-sheet rounded class="mx-auto" height="400" max-width="612">
        <div class="pt-2 px-4">
          <p
            class="primary--text"
            style="cursor: pointer"
            @click="dialog = false"
          >
            <v-icon color="primary">mdi-arrow-right</v-icon> رجوع
          </p>
          <h2
            class="text-center mt-2 size-18 light-primary--text font-weight-medium"
          >
            ما هو سبب الغاء الطلب
          </h2>
          <form
            style="width: 70%; margin: 12px auto"
            @submit.prevent="submitDialog"
          >
            <v-textarea
              placeholder="اكتب السبب هنا ..."
              background-color="#F9F9F9"
              rows="5"
              no-resize
              solo
              v-model="value"
            ></v-textarea>
            <div class="d-flex justify-center align-center">
              <v-btn
                type="submit"
                outlined
                color="primary"
                class="cancel-order text-center"
                large
              >
                الغاء الطلب</v-btn
              >
            </div>
          </form>
        </div>
      </v-sheet>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      value: "",
    };
  },
  methods: {
    submitDialog() {
      this.dialog = false;
      console.log(this.value);
    },
  },
};
</script>
