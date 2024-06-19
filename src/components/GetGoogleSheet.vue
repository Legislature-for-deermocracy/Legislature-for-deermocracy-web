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

  let lastRequestTime = localStorage.getItem('lastRequestTime')
    ? parseInt(localStorage.getItem('lastRequestTime'))
    : 0;
  const sheetData = ref({});
  const getData = async () => {
    const now = Date.now();
    // > 如果 10 秒內有過請求，則不再發送請求
    if (now - lastRequestTime < 10000) {
      console.log('10 秒內有過請求，不再發送請求');
      sheetData.value = JSON.parse(localStorage.getItem('data')) || {};
      parseData();
      return;
    }
    console.log('發送請求');
    lastRequestTime = now;
    localStorage.setItem('lastRequestTime', lastRequestTime);

    try {
      const res = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SHEET_ID}/values/物資量能(for 網站)?alt=json&key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
      );
      sheetData.value = await res.json();
      // 存入 localStorage
      localStorage.setItem('data', JSON.stringify(sheetData.value));
    } catch (err) {
      console.error(err);
    } finally {
      parseData();
    }
  };

  const parseData = () => {
    console.log(sheetData.value);
    item.value.water = sheetData.value.values[11][1] || '統計中...';
    item.value.food = sheetData.value.values[11][2] || '統計中...';
    item.value.raincoat = sheetData.value.values[11][3] || '統計中...';

    Object.keys(item.value).forEach((key) => {
      if (item.value[key] === '存貨充足，不需補充') {
        itemColor.value[key] = colorList.green;
      } else if (item.value[key] === '庫存緊張，可持續補充') {
        itemColor.value[key] = colorList.yellow;
      } else if (item.value[key] === '嚴重不足，急需補充') {
        itemColor.value[key] = colorList.red;
      }
    });

    remark.value = sheetData.value.values[12]?.[1] || '';
    information.value = sheetData.value.values[13]?.[1] || '';
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
