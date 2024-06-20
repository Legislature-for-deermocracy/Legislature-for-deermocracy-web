import { ref } from 'vue';

export const useParseFeatures = async (arr) => {
  const features = ref([]);

  const index = arr.value.index;
  // > 如果 index 內的object中，icon、title、details 都是 ''，則不加入features
  index.forEach((item) => {
    if (item.icon !== '' && item.title !== '' && item.details !== '') {
      features.value.push(item);
    }
  });

  return { features };
};
