<template>
  <div class="pt-15 chooseframe">
    <div
      class="chooseframe--header mt-10 d-flex flex-column justify-center align-center"
    >
      <h3 class="primary--text text-center">اختر الاطار المناسب</h3>
      <v-container class="mt-15 pb-10">
        <LazySwiperWrapper
          ref="swiper_ref"
          :breakpoints="breakpoints"
          :options="options"
        >
          <swiper-slide v-for="{ id, name, image, frame } in frames" :key="id">
            <LazyChooseframeCard
              :text="name"
              :id="id"
              :image="image"
              :frame="frame"
              :active="activeFrame == id"
              @select-frame="handleSelectedFrame"
            />
          </swiper-slide>
        </LazySwiperWrapper>
      </v-container>
      <v-container class="img-for-preview" v-if="ShowImgs.length">
        <LazySwiperWrapper
          ref="swiper_ref"
          :breakpoints="breakpoints"
          :options="{ ...options, loop: isLooping }"
        >
          <swiper-slide v-for="pair in pairs" :key="pair.index">
            <LazyChooseframeImagecard
              :src="pair.imageSrc"
              :imageFile="pair.imageFile"
              :index="pair.index"
              :choosenFrame="selectedFrame"
              @delete-image="deleteImage"
              @image-cropped="croppedImage"
            />
          </swiper-slide>
        </LazySwiperWrapper>
        <v-btn
          v-if="ShowImgs.length"
          class="add-image--btn"
          icon
          x-large
          elevation="5"
          @click="$refs.file.click()"
        >
          <v-icon color="primary">mdi-plus-circle</v-icon>
        </v-btn>
      </v-container>
      <input
        type="file"
        ref="file"
        style="display: none"
        multiple
        @change="onFileChange"
      />
      <div
        v-if="!ShowImgs.length"
        @click="$refs.file.click()"
        style="cursor: pointer"
        class="d-flex flex-column justify-center align-center"
      >
        <v-icon color="primary" size="100">mdi-cloud-upload</v-icon>
        <p class="primary--text d-block">اختر بعض الصور لنبدأ</p>
      </div>
      <div v-if="ShowImgs.length" class="actions">
        <div
          class="select-woman px-4 mt-4 d-flex justify-space-between align-center"
        >
          <v-checkbox
            color="transpernt"
            background-color="white"
            v-model="selectForWoman"
            label="الطباعة النسائى"
            class="ms-7"
          ></v-checkbox>
          <img src="@/assets/icons/Icon material-help-outline.svg" />
        </div>
        <v-btn
          color="secondary"
          width="300px"
          class="mt-10 py-5"
          @click="drawer = true"
          >تاكيد</v-btn
        >
      </div>
    </div>

    <v-navigation-drawer
      absolute
      app
      right
      temporary
      v-model="drawer"
      width="310px"
      height="100%"
      style="direction: rtl"
    >
      <div class="d-flex justify-space-between align-center my-5 mx-5">
        <h4>تأكيد عملية الشراء</h4>
        <v-btn icon plain @click="drawer = false" class="pointer">
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </div>

      <v-divider></v-divider>

      <LazyAddressForm />
      <div
        class="mx-9 d-flex justify-space-between align-center mt-6 border-around pa-3"
      >
        <div class="d-inline">
          <v-icon class="primary--text">mdi-cash</v-icon>
          <span> إضافة الدفع</span>
        </div>
        <span class="light-primary--text">
          <v-icon class="light-primary--text">mdi-check-circle-outline</v-icon
          >تم
        </span>
      </div>

      <div class="fast-delevery px-4 mt-8 d-flex">
        <v-checkbox
          color="transpernt"
          background-color="white"
          v-model="fastDelevary"
          label="التوصيل السريع"
          class="ms-7"
        ></v-checkbox>
        <img src="@/assets/icons/Icon material-help-outline.svg" />
      </div>
      <div class="mt-8 px-4">
        <form-wrapper :validator="$v.form">
          <v-form @submit.prevent="handleSubmitCoupon">
            <v-row>
              <v-col cols="8" lg="8" class="py-0">
                <form-group name="name" attribute="fields.name">
                  <template>
                    <v-text-field
                      id="name"
                      v-model="form.coupon"
                      class="fill-field mt-1"
                      filled
                      rounded
                      flat
                    >
                    </v-text-field>
                  </template>
                </form-group>
              </v-col>
              <v-col>
                <v-btn height="46px" type="submit" class="secondary shadow">
                  okay
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </form-wrapper>
      </div>
      <div class="pa-6">
        <v-row>
          <v-col offset="4" cols="4">
            {{ ShowImgs?.length }}
            <span style="color: #323232">قطع</span>
          </v-col>
          <v-col cols="4" class="pa-2 d-flex justify-end">
            <span style="color: #828282">R.S</span
            ><span class="mx-3">{{ getTotalPrice }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="4" cols="4"
            ><span style="color: #323232">الضريبة</span>
          </v-col>
          <v-col cols="4" class="pa-2 d-flex justify-end">
            <span style="color: #828282">R.S</span><span class="mx-3">0 </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="4" cols="4"
            ><span style="color: #323232">التوصيل</span></v-col
          >
          <v-col cols="4" class="pa-2 d-flex justify-end">
            <span style="color: #828282">R.S</span
            ><span class="mx-3">{{ delevryCost }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="4" cols="4"
            ><span style="color: #323232">الخصم</span></v-col
          >
          <v-col cols="4" class="pa-2 d-flex justify-end">
            <span style="color: #828282">R.S</span
            ><span class="mx-3">{{ discount }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="3" cols="6"
            ><span style="color: #323232"> الخدمة النسائية </span>
          </v-col>
          <v-col cols="3" class="pa-2 d-flex justify-end">
            <span style="color: #828282">R.S</span><span class="mx-3">0 </span>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <div class="pa-4">
        <v-row>
          <v-col offset="4" cols="5"
            ><span style="color: #323232">الاجمالى</span>
          </v-col>
          <v-col cols="3" class="pa-2 d-flex justify-end">
            <span style="color: #828282">R.S</span
            ><span class="mx-3">{{ totalWithextra }} </span>
          </v-col>
        </v-row>
      </div>
      <div class="px-4 pt-5">
        <p class="mb-3">في حالة التأكيد فأنت موافق على</p>
        <nuxt-link to="/privacypolicy"
          ><span class="light-primary--text">الشروط والأحكام</span></nuxt-link
        >
      </div>
      <div class="text-center py-5">
        <v-btn
          color="secondary"
          width="300px"
          class="mx-auto"
          @click="handleSubmit"
          >تاكيد</v-btn
        >
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { isValidImgType } from "@/utils/validate";
import { mapGetters, mapActions } from "vuex";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  name: "ChooseframePage",
  layout: "pakages",
  data() {
    return {
      drawer: false,
      drawerForAddress: false,
      options: {
        loop: false,
        slidesPerView: "auto",
        slidesPerColumnFill: "row",
      },
      breakpoints: {
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1380: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      },
      ShowImgs: [],
      imageFiles: [],
      selectedFrame: null,
      frames: [],
      activeFrame: null,
      selectForWoman: false,
      fastDelevary: false,
      delevryCost: 0,
      discount: 0,
      form: {
        coupon: "",
      },
    };
  },

  validations: {
    form: {
      coupon: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(190),
      },
    },
  },
  computed: {
    ...mapGetters({
      getAddress: "address/getAddress",
    }),
    ...mapGetters({
      maxImgsUpload: "package/maxImgsUpload",
      getTotalPrice: "package/getTotalPrice",
      getImages: "package/getImages",
    }),
    isLooping() {
      if (this.ShowImgs.length > 5) {
        return true;
      } else {
        return false;
      }
    },
    pairs() {
      return this.ShowImgs.map((imageSrc, i) => {
        return {
          imageSrc: imageSrc,
          imageFile: this.imageFiles[i],
          index: i,
        };
      });
    },
    totalWithextra() {
      return this.getTotalPrice + this.delevryCost + this.discount;
    },
  },

  fetch() {
    this.getFrames();
  },
  watch: {
    fastDelevary(val) {
      if (val) {
        this.delevryCost = 50;
      } else {
        this.delevryCost = 0;
      }
    },
  },

  methods: {
    ...mapActions({ SetImages: "package/SetImages" }),
    croppedImage(blob, index) {
      console.log(blob, index);
    },
    getFrames() {
      this.$http.get({ resource: "frames" }).then((res) => {
        const { data } = res.data;
        this.frames = data;
      });
    },
    validateType(file) {
      if (isValidImgType(file)) {
        return true;
      } else {
        return false;
      }
    },
    onFileChange(e) {
      let imgFiles = e.target.files;

      for (const file of imgFiles) {
        const photoUrl = URL.createObjectURL(file);
        if (this.validateType(file)) {
          if (this.validateMaxUpload()) {
            this.imageFiles.push(file);
            this.ShowImgs.push(photoUrl);
            this.SetImages(this.ShowImgs);
            console.log(this.getTotalPrice);
          }
        }
      }
    },
    validateMaxUpload() {
      if (this.maxImgsUpload) {
        if (this.ShowImgs.length < this.maxImgsUpload) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    },
    handleSelectedFrame(id, frame) {
      this.selectedFrame = frame;
      this.activeFrame = id;
    },

    deleteImage(index) {
      this.ShowImgs.splice(index, 1);
      this.imageFiles.splice(index, 1);
      this.SetImages(this.imageFiles);
      console.log(this.getTotalPrice);
    },
    handleSubmitCoupon() {
      this.$http
        .post({ resource: "check-coupon", data: { coupon: this.form.coupon } })
        .then((res) => {
          const { data } = res.data;
          this.discount = data.sale;
          console.log(data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    handleSubmit() {
      const data = {
        amount: this.getTotalPrice,
        ...this.getAddress,
        images: this.getImages,
        frame_id: this.activeFrame,
        women_print: this.selectForWoman,
        fast_delivery: this.fastDelevary,
        coupon_used: this.form.coupon,
        total_paid: this.totalWithextra,
      };
      console.log(data);
      this.$http
        .post({ resource: "normal-order", data: { ...data } })
        .then((res) => {
          const { data } = res.data;
          console.log(data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>
