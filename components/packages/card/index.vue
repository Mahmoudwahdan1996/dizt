<template>
  <v-hover v-slot="{ hover }" open-delay="50">
    <v-card
      class="mx-auto d-flex justify-center align-center package-card px-4 py-3"
      max-width="360"
      :elevation="hover ? 10 : 0"
      @click="$emit('select-package', count, price)"
    >
      <v-avatar class="package-card--img">
        <img src="@/assets/images/packages/gift-card.png" alt="package" />
      </v-avatar>
      <v-card-title class="text-button pa-2 pa-sm-4 text-sm-h6"
        >إطارات<span class="px-1" style="color: #323232">{{ count }}</span>
      </v-card-title>
      <v-card-title class="primary--text pa-2 pa-sm-4 text-button text-sm-h6">
        ريال<span class="px-1">{{ price }}</span></v-card-title
      >
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["price", "count"],
};
</script>
