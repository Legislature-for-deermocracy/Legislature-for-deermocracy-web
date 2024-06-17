<script setup>
  import { useRouter } from 'vitepress';

  const router = useRouter();

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  });

  const redirect = () => {
    console.log(router);
    console.log(props.to);
    router.go(props.to);
  };
</script>

<template>
  <button
    class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold text-base py-2 px-4 rounded-full"
    @click="redirect"
  >
    {{ label }}
  </button>
</template>
