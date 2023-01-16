<template>
  <div>
    <slot
      :attrs="{
        errorMessages: activeErrorMessages,
      }"
      :listeners="{ blur: () => preferredValidator.$touch() }"
    />
  </div>
</template>
<script>
import { singleErrorExtractorMixin } from "vuelidate-error-extractor";
export default {
  extends: singleErrorExtractorMixin,
};
</script>
