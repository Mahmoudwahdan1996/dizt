<template>
  <div>
    <v-sheet class="orderTracking pt-15">
      <h3 class="text-center my-8">تتبع الطلب</h3>
      <v-sheet elevation="3" class="mx-auto pb-8" :max-width="width">
        <v-stepper alt-labels value="1">
          <v-stepper-header>
            <v-stepper-step
              color="light-primary "
              step="1"
              complete
              complete-icon=""
            >
              <span class="size-14"> تحضير الطلب</span>
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              color="light-primary"
              step="2"
              :complete="false"
              complete-icon=""
            >
              <span class="size-14">في الطريق اليك</span>
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" color="light-primary " complete-icon="">
              <span class="size-14">تم التوصيل</span>
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>

        <v-divider class="devider" />
        <div class="pa-5">
          <h5 class="pt-3" style="color: #1f1635">التوصيل الى :</h5>
          <p class="pt-2 text-subtitle-2" style="color: #323232">
            عبدالله عبدالمجيد
          </p>
          <p class="pt-2 text-subtitle-2" style="color: #323232">
            رقم المبنى , الشارع , الرياض, المملكة العربية السعودية
          </p>
          <p class="pt-2 text-subtitle-2" style="color: #323232">
            011 000 0000 00
          </p>
          <p class="pt-2 pb-3 text-subtitle-2" style="color: #323232">
            username@gmail.com
          </p>
        </div>
        <v-divider class="devider" />
        <div class="pa-5">
          <v-row>
            <v-col>
              <span class="size-18 font-weight-regular">3 قطع</span>
            </v-col>
            <v-col>300 <span style="color: #828282">R.S</span> </v-col>
          </v-row>
          <v-row>
            <v-col class="size-18 font-weight-regular">التوصيل</v-col>
            <v-col> 0 <span style="color: #828282">R.S</span></v-col>
          </v-row>
        </div>
        <v-divider class="devider" />
        <div class="pa-5">
          <v-row>
            <v-col>
              <span class="size-18 font-weight-regular">الاجمالى</span>
            </v-col>
            <v-col>300 <span style="color: #828282">R.S</span> </v-col>
          </v-row>
        </div>
        <LazyUiDialogbadge />
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>
export default {
  layout: "pakages",

  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case this.$vuetify.breakpoint.width < 400:
          return 300;
        case "xs":
          return 400;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 500;
        case "xl":
          return 500;
      }
    },
  },
};
</script>
