<template>
  <v-container class="mt-15 choosegift">
    <h2 class="color-title text-center font-weight-regular light-primary--text">
      اختر نوع الهدية
    </h2>
    <v-row align="center" justify="center" class="mt-9">
      <v-col cols="6">
        <v-hover v-slot="{ hover }">
          <v-card
            :class="hover ? 'active' : ''"
            class="mx-auto"
            height="228"
            max-width="291"
            nuxt
            to="/giftowner"
          >
            <v-card-title class="justify-center">
              <div
                class="rounded-circle pa-5 bg-gift d-flex justify-center align-center"
              >
                <img
                  src="@/assets/images/choosegift/frame.png"
                  width="54"
                  height="54"
                />
              </div>
            </v-card-title>
            <v-card-text class="text-center text-h6 s econdary--text">
              تصميم براويز
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="6">
        <v-hover v-slot="{ hover }">
          <v-card
            :class="hover ? 'active' : ''"
            class="mx-auto"
            height="228"
            max-width="291"
            nuxt
            to="/packagesgift"
          >
            <v-card-title class="justify-center">
              <div
                class="rounded-circle pa-5 bg-gift d-flex justify-center align-center"
              >
                <img
                  src="@/assets/images/packages/gift-card.png"
                  width="54"
                  height="54"
                />
              </div>
            </v-card-title>
            <v-card-text class="text-center text-h6 secondary--text">
              بطاقة شراء
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
