<script setup>
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
defineProps({
  noPadding: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <VPFeatures class="cfeatures" :class="{ noPadding }" v-bind="$attrs" />
</template>

<style>
/* style reset */
.cfeatures.noPadding {
  padding: inherit;
}
.cfeatures h2 {
  margin: initial;
  border-top: initial;
  padding-top: initial;
  letter-spacing: initial;
  position: initial;
  outline: initial;
}
.cfeatures p {
  margin: inherit;
}
</style>
