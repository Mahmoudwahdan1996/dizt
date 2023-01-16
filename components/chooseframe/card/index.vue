<template>
  <div
    class="chooseframe--card"
    :class="this.active ? 'active' : ''"
    @click="selectFrame"
  >
    <div class="chooseframe--card-img pa-1">
      <img :src="image" />
    </div>
    <p class="text-center mt-2">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "image", "text", "active" , "frame"],

  methods: {
    selectFrame() {
      this.$emit("select-frame", this.id, this.frame);
    },
  },
};
</script>
