import { ref } from 'vue';
import { ref as dbRef, get, getDatabase } from 'firebase/database';
import { getAuth, signInAnonymously } from 'firebase/auth';

export const getSheetData = async () => {
  const db = getDatabase();
  try {
    await signInAnonymously(getAuth());
    return (await get(dbRef(db, 'data'))).val();
  } catch (err) {
    console.log(err);
  }
};

export const useGetSheet = async () => {
  const sheetData = ref({});
  sheetData.value = await getSheetData();

  return { sheetData };
};
