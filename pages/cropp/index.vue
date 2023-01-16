<template>
  <v-container fluid>
    <v-card-title>Avatar cropper</v-card-title>
    jjj
    <v-card-text>
      <v-file-input
        v-model="selectedFile"
        accept="image/png, image/jpeg"
        label="File"
        placeholder="Select a file"
        :show-size="1024"
        @change="setupCropper"
      />

      <v-row v-if="objectUrl">
        <v-col cols="12" sm="6">
          <div style="width: 100%">
            <div>Original</div>
            <div class="image-container elevation-4">
              <img ref="source" :src="objectUrl" />
            </div>
            <div class="d-flex justify-center">
              <v-btn icon small @click="resetCropper">
                <v-icon small> mdi-aspect-ratio</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" :disabled="!objectUrl"> Submit </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import Cropper from "cropperjs";
import debounce from "lodash/debounce";

export default {
  data() {
    return {
      cropper: null,
      objectUrl: null,
      selectedFile: null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257),
    };
  },

  methods: {
    resetCropper() {
      this.cropper.reset();
    },
    rotateLeft() {
      this.cropper.rotate(-90);
    },
    rotateRight() {
      this.cropper.rotate(90);
    },
    setupCropper(selectedFile) {
      if (this.cropper) {
        this.cropper.destroy();
      }

      if (this.objectUrl) {
        window.URL.revokeObjectURL(this.objectUrl);
      }

      if (!selectedFile) {
        this.cropper = null;
        this.objectUrl = null;
        return;
      }

      this.objectUrl = window.URL.createObjectURL(selectedFile);
      console.log(this.objectUrl);
      this.$nextTick(this.setupCropperInstance);
    },
    setupCropperInstance() {
      this.cropper = new Cropper(this.$refs.source, {
        aspectRatio: 3 / 3,
        crop: this.debouncedUpdatePreview,
        cropBoxResizable: false,
        background: false,
        zoomable: false,
        minContainerHeight: 300,
        minContainerWidth: 300,
        minCanvasWidth: 300,
        minCanvasHeight: 300,
        cropBoxMovable: false,
      });
    },
    updatePreview(event) {
      const canvas = this.cropper.getCroppedCanvas();
    },
  },

};
</script>

<style lang="sass" scoped></style>

<style lang="sass">
@import 'cropperjs/dist/cropper.css'
</style>













  // data() {
  //   return {
  //     cropper: null,
  //     objectUrl: null,
  //     selectedFile: null,
  //     debouncedUpdatePreview: debounce(this.updatePreview, 257),
  //   };
  // },

  // methods: {
  //   resetCropper() {
  //     this.cropper.reset();
  //   },
  //   rotateLeft() {
  //     this.cropper.rotate(-90);
  //   },
  //   rotateRight() {
  //     this.cropper.rotate(90);
  //   },
  //   setupCropper(selectedFile) {
  //     if (this.cropper) {
  //       this.cropper.destroy();
  //     }

  //     if (this.objectUrl) {
  //       window.URL.revokeObjectURL(this.objectUrl);
  //     }

  //     if (!selectedFile) {
  //       this.cropper = null;
  //       this.objectUrl = null;
  //       return;
  //     }

  //     this.objectUrl = window.URL.createObjectURL(selectedFile);
  //     this.$nextTick(this.setupCropperInstance);
  //   },
  //   setupCropperInstance() {
  //     this.cropper = new Cropper(this.$refs.source, {
  //       aspectRatio: 1,
  //       crop: this.debouncedUpdatePreview,
  //       cropBoxResizable: false,
  //       minContainerHeight: 500,
  //       minContainerWidth: 500,
  //     });
  //   },
  //   updatePreview(event) {
  //     const canvas = this.cropper.getCroppedCanvas();
  //   },
  // },





    //  <v-card>
    //   <v-card-title>Avatar cropper</v-card-title>
    //   jjj
    //   <v-card-text>
    //     <v-file-input
    //       v-model="selectedFile"
    //       accept="image/png, image/jpeg"
    //       label="File"
    //       placeholder="Select a file"
    //       :show-size="1024"
    //       @change="setupCropper"
    //     />

    //     <v-row v-if="objectUrl">
    //       <v-col cols="12" sm="6">
    //         <div style="width: 100%">
    //           <div>Original</div>
    //           <div class="image-container elevation-4">
    //             <img ref="source" :src="objectUrl" />
    //           </div>
    //           <div class="d-flex justify-center">
    //             <v-btn icon small @click="resetCropper">
    //               <v-icon small> mdi-aspect-ratio</v-icon>
    //             </v-btn>
    //           </div>
    //         </div>
    //       </v-col>
    //     </v-row>
    //   </v-card-text>
    //   <v-card-actions>
    //     <v-spacer></v-spacer>
    //     <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
    //   </v-card-actions>
    // </v-card>