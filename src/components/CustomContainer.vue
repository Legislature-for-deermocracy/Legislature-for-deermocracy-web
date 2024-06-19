<!-- fake custom component: https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/containers.ts -->
<script setup>
const props = defineProps({
  type: String,
  title: String,
})
</script>

<template>
  <details v-if="props.type === 'details'">
    <summary :class="[props.type, 'custom-block']">{{ props.title }}</summary>
    <p><slot /></p>
  </details>
  <div :class="[props.type, 'custom-block']" v-else>
    <p class="custom-block-title">{{ props.title }}</p>
    <p><slot /></p>
  </div>
</template>
