<template>
  <div
    class="pt-15 packages d-flex flex-column justify-center align-center"
    style="background-color: #fcfcfc"
  >
    <h2 class="text-center light-primary--text font-weight-medium">
      اختر من العروض
    </h2>
    <h4 class="text-center mt-3 font-weight-regular">
      لدينا عروض مميزة جدا. اختر الان واستفاد من عروضنا
    </h4>
    <div class="d-flex flex-column flex-md-row mx-3 mt-10 gap-sm">
      <LazyPackagesCard
        v-for="{ id, count, price } in packages"
        :key="id"
        :count="count"
        :price="price"
        @select-package="selectPackage"
      />
    </div>

    <v-btn
      color="secondary"
      nuxt
      to="/chooseframe"
      width="300px"
      class="mt-10 py-5"
      >تخطى</v-btn
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "pakages",

  name: "PackagesPage",
  data() {
    return {
      packages: [],
    };
  },
  computed: {
    ...mapGetters({
      selectedPackage: "package/selectedPackage",
    }),
  },
  fetch() {
    this.getPackages();
  },
  methods: {
    selectPackage(count, price) {
      if (this.selectedPackage?.count === count) {
        this.$store.dispatch("package/ClearPackage");
        console.log(this.selectedPackage);
        return;
      }
      this.$store.dispatch("package/SetPackage", {
        count,
        price,
      });
      console.log(this.selectedPackage);
    },
    getPackages() {
      this.$http.get({ resource: "packages/NORMAL" }).then((res) => {
        const { data } = res.data;
        this.packages = data;
        console.log(this.packages);
      });
    },
  },
};
</script>
