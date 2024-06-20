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

<style scoped>
  /* style reset */
  .cfeatures.noPadding {
    padding: initial;
  }
  .vp-doc .cfeatures :deep(h2) {
    margin: initial;
    border-top: initial;
    padding-top: initial;
    letter-spacing: initial;
    position: initial;
    outline: initial;
  }
  .vp-doc .cfeatures :deep(p) {
    margin: initial;
  }
</style>
