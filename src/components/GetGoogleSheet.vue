<script setup>
  import { ref, onBeforeMount } from 'vue';

  const remark = defineModel('remark', {
    type: String,
    default: '',
  });
  const information = defineModel('information', {
    type: String,
    default: '',
  });

  const item = ref({
    water: '統計中...',
    food: '統計中...',
    raincoat: '統計中...',
  });

  const colorList = {
    red: '#a13d43',
    yellow: '#a17d3d',
    green: '#3da13d',
  };
  const itemColor = ref({
    water: '',
    food: '',
    raincoat: '',
  });

  const getData = async () => {
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SHEET_ID}/values/物資量能(for 網站)?alt=json&key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
    );
    const data = await res.json();
    item.value.water = data.values[11][1];
    item.value.food = data.values[11][2];
    item.value.raincoat = data.values[11][3];

    Object.keys(item.value).forEach((key) => {
      if (item.value[key] === '存貨充足，不需補充') {
        itemColor.value[key] = colorList.green;
      } else if (item.value[key] === '庫存緊張，可持續補充') {
        itemColor.value[key] = colorList.yellow;
      } else if (item.value[key] === '嚴重不足，急需補充') {
        itemColor.value[key] = colorList.red;
      }
    });

    remark.value = data.values[12]?.[1] || '';
    information.value = data.values[13]?.[1] || '';
  };

  onBeforeMount(async () => {
    await getData();
  });
</script>

<template>
  <div
    class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center"
  >
    <div class="item" :style="{ backgroundColor: itemColor.water }">
      <div>
        <p class="text-4xl pb-2">水</p>
      </div>
      <div>
        {{ item.water }}
      </div>
    </div>
    <div class="item" :style="{ backgroundColor: itemColor.food }">
      <div>
        <p class="text-3xl pb-2">餅乾零食</p>
      </div>
      <div>
        {{ item.food }}
      </div>
    </div>
    <div class="item" :style="{ backgroundColor: itemColor.raincoat }">
      <div>
        <p class="text-4xl pb-2">雨衣</p>
      </div>
      <div>
        {{ item.raincoat }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .item {
    width: 90%;
    margin: 12px;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    height: 130px;
    background-color: var(--vp-c-bg-soft);
    transition:
      border-color 0.25s,
      background-color 0.25s;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
</style>
