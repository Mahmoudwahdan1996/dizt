<template>
  <div class="cropper">
    <div class="cropper-image">
      <img :src="src" ref="image" />
      <v-btn @click="handleImageCropped" class="cropp-edit"> Update </v-btn>
    </div>
  </div>
</template>

<script>
import Cropper from "cropperjs";

export default {
  props: ["imageFile", "src", "index"],
  data() {
    return {
      cropper: null,
      // isopen: false,
    };
  },
  methods: {
    handleImageCropped() {
      const croppedImg = this.cropper.getCroppedCanvas({
        width: 250,
        height: 250,
        fillColor: "#fff",
      });

      console.log(croppedImg);
      this.cropper
        .getCroppedCanvas({
          width: 250,
          height: 250,
        })
        .toBlob((blob) => {
          this.$emit("image-cropped", blob, this.index);
        }, "image/jpeg");
    },
  },

  mounted() {
    console.log(this.$refs.image);

    this.cropper = new Cropper(this.$refs.image, {
      aspectRatio: 1,
      minCropBoxHeight: 250,
      minCropBoxWidth: 250,
      viewMode: 1,
      dragMode: "move",
      background: false,
      cropBoxMovable: false,
      cropBoxResizable: false,
      toggleDragModeOnDblclick: false,
    });
    console.log("one");
  },
  unmounted() {
    console.log("mahmoud");
    this.cropper.destroy();
  },
};
</script>

<style lang="sass" scoped></style>
<style lang="sass"></style>
