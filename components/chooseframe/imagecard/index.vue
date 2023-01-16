<template>
  <v-hover v-slot="{ hover }">
    <div class="img-card">
      <div class="img-card--img">
        <img :src="src" class="choosenimage" />
        <img :src="choosenFrame" class="choosenFrame" />
      </div>
      <div
        class="img-card--actions gap-xs"
        :class="hover ? 'd-flex' : 'd-none'"
      >
        <v-btn icon small @click="$emit('delete-image', index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn icon small @click.stop="dialog = true">
          <v-icon>mdi-crop-free</v-icon>
        </v-btn>
        <div class="text-center" v-if="dialog">
          <v-dialog v-model="dialog" width="600">
            <LazyPreviewImage
              :imageFile="imageFile"
              :src="src"
              :index="index"
              @image-cropped="imageCropped"
            />
          </v-dialog>
        </div>
      </div>
    </div>
  </v-hover>
</template>

<script>
export default {
  props: ["choosenFrame", "src", "index", "imageFile"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    imageCropped(blob, index) {
      this.$emit("image-cropped", blob, index);
    },
  },
};
</script>
