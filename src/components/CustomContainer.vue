<!-- fake custom component: https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/containers.ts -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
})

const computedTitle = computed(() => {
  return props.title || props.type[0].toUpperCase() + props.type.slice(1)
})

</script>

<template>
  <details v-if="props.type === 'details'">
    <summary :class="[props.type, 'custom-block']">{{ computedTitle }}</summary>
    <p><slot /></p>
  </details>
  <div :class="[props.type, 'custom-block']" v-else>
    <p class="custom-block-title">{{ computedTitle }}</p>
    <p><slot /></p>
  </div>
</template>
