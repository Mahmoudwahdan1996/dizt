<template>
  <div class="subscribe">
    <v-container>
      <v-row class="mx-2">
        <v-col cols="12" class="order-2 order-sm-1 pa-3" sm="6">
          <div class="subscribe-content">
            <div class="subscribe-img">
              <img src="@/assets/images/home/subscribe-1.png" />
            </div>
            <div class="subscribe-content--frame">
              <img src="@/assets/images/home/frame-home.png" />
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="mb-5 mb-sm-0 d-flex flex-column justify-center order-1 order-sm-2 pa-4"
        >
          <h2 class="title-color">
            {{ $t("subscribe.first_subscribe.title") }}
          </h2>
          <p class="mt-5 size-16 hidden-xs-only">
            {{ $t("subscribe.first_subscribe.description") }}
          </p>
        </v-col>
      </v-row>
      <v-row class="my-10 mx-2">
        <v-col
          cols="12"
          sm="6"
          class="d-flex flex-column justify-center mb-5 mb-sm-0 pa-4"
        >
          <h2 class="title-color">
            {{ $t("subscribe.second_subscribe.title") }}
          </h2>
          <p class="mt-5 size-16 hidden-xs-only">
            {{ $t("subscribe.second_subscribe.description") }}
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="pa-3">
          <div class="subscribe-content">
            <div class="subscribe-img">
              <img src="@/assets/images/home/subscribe-2.png" />
            </div>
            <div class="subscribe-content--frame-left">
              <img src="@/assets/images/home/frame-home-left.png" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
