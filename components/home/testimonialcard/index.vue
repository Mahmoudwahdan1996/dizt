<template>
  <v-hover v-slot="{ hover }" open-delay="100">
    <v-card class="mx-auto" max-width="260" :elevation="hover ? 16 : 2">
      <div style="width: 100%">
        <img src="@/assets/images/home/testimonial.jpg" width="100%" />
      </div>

      <h5 class="text-start text-caption font-weight-medium pa-3">
        المنتجات اعجبتنى جدا والخامات المستخدمة ممتازة
      </h5>

      <v-card-actions class="d-flex">
        <div>
          <img src="@/assets/images/home/Done-shape.svg" />
        </div>
        <span>خالد أحمد</span>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>
