<script setup>
  import { ref, onBeforeMount, onUnmounted } from 'vue';
  import { ref as dbRef, get, getDatabase } from 'firebase/database';
  import { getAuth, signInAnonymously } from 'firebase/auth';

  const remark = defineModel('remark', {
    type: String,
    default: '',
  });
  const information = defineModel('information', {
    type: String,
    default: '',
  });

  const db = getDatabase();
  const sheetData = ref({});
  const getData = async () => {
    try {
      await signInAnonymously(getAuth());
      sheetData.value = (await get(dbRef(db, 'data'))).val();
    } catch (err) {
      console.log(err);
    }
  };

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

  const parseData = () => {
    item.value.water = sheetData.value.item.water.value || '統計中...';
    item.value.food = sheetData.value.item.food.value || '統計中...';
    item.value.raincoat = sheetData.value.item.raincoat.value || '統計中...';

    Object.keys(item.value).forEach((key) => {
      if (item.value[key] === '存貨充足，不需補充') {
        itemColor.value[key] = colorList.green;
      } else if (item.value[key] === '庫存緊張，可持續補充') {
        itemColor.value[key] = colorList.yellow;
      } else if (item.value[key] === '嚴重不足，急需補充') {
        itemColor.value[key] = colorList.red;
      }
    });

    remark.value = sheetData.value.post.announcement || '';
    information.value = sheetData.value.post.info || '';
  };

  const intervalId = setInterval(() => {
    // > 每30秒自動執行一次 getData
    setTimeout(parseData);
  }, 30000);
  onBeforeMount(async () => {
    await getData();
    parseData();
  });

  // 卸載時清除 interval
  onUnmounted(() => {
    clearInterval(intervalId);
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
