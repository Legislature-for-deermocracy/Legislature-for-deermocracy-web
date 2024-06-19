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
    color: {
      type: String,
      default: 'bg-blue-500',
    },
  });

  const redirect = () => {
    router.go(props.to);
  };
</script>

<template>
  <button
    class="ml-4 hover:bg-blue-700 text-white font-bold text-base py-2 px-4 rounded-full"
    :class="props.color"
    @click="redirect"
  >
    {{ label }}
  </button>
  <image
    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
  />

  <image src="https://imgur.com/3NmYNzG" />
</template>
