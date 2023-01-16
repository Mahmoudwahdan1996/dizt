<template>
  <!-- Image Preview -->
  <v-dialog
    @input="$emit('update:showDialog')"
    :value="showDialog"
    max-width="700"
    persistent
  >
    <section class="img-preview-overlay">
      <v-btn class="img-preview-close" icon @click="closePreview">
        <v-icon color="error">mdi-close</v-icon>
      </v-btn>
      <span></span>

      <div class="img-preview-container">
        <img class="img-preview-img" :src="imagePath" />
      </div>
    </section>
  </v-dialog>
  <!-- Image Preview -->
</template>

<script>
export default {
  name: "image-preview",
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    imagePath: {
      type: String,
      default: ""
    }
  },
  methods: {
    closePreview() {
      this.$emit("closePreview");
    }
  }
};
</script>
<style>
.img-preview-container {
  width: 80% !important;
}
/* img {
  width: 100%;
} */
</style>
