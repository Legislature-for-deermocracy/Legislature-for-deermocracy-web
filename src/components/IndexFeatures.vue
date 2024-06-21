<script setup>
  import { ref, onMounted } from 'vue';
  import { useGetSheet } from '../composables/get-sheet-data.js';
  import { useParseFeatures } from '../composables/parse-features.js';

  defineProps({
    noPadding: {
      type: Boolean,
      default: false,
    },
  });

  const data = ref([
    {
      icon: '📢',
      title: '現場公告',
      details: '加載中...',
    },
    {
      icon: 'ℹ️',
      title: '',
      details: '加載中...',
    },
  ]);

  const getData = async () => {
    const { sheetData } = await useGetSheet();
    const { features } = await useParseFeatures(sheetData);

    data.value = features.value;
  };

  onMounted(() => {
    getData();
  });
</script>

<template>
  <CustomFeatures :no-padding :features="data" />
</template>
