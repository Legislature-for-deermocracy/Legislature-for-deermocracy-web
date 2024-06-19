---
prev: false
next: false
---

# 現場物資庫存

<GetGoogleSheet v-model:remark="remark" v-model:information="information" />

:::warning 📢公告
**{{ remark }}**
:::

:::tip ℹ️捐贈物資資訊
**{{ information }}**
:::

<script setup>
import GetGoogleSheet from '../components/GetGoogleSheet.vue'
import { ref } from 'vue'

const remark = ref('')
const information = ref('')
</script>
