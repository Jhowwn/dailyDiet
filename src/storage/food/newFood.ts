import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { FoodStorageDTO } from "./FoodStorage.DTO";
import { foodGetAll } from "./foodsGetAll";

export async function newFood({ id, date, title, description, hour, isHealthy }: FoodStorageDTO) {
  try {
    const storageFoods = await foodGetAll();

    const storage = JSON.stringify([...storageFoods, { id, date, title, description, hour, isHealthy }])

    await AsyncStorage.setItem(`${FOOD_COLLECTION}`, storage);
  } catch (error) {
    throw error;
  }
}