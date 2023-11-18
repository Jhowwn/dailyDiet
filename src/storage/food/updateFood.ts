import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { FoodStorageDTO } from "./FoodStorage.DTO";
import { foodGetAll } from "./foodsGetAll";

export async function updateFood({ id, date, title, description, hour, isHealthy }: FoodStorageDTO) {
  try {
    const storageFoods = await foodGetAll();

    const foodIndex = storageFoods.findIndex(food => food.id === id);

    if (foodIndex !== -1) {
      storageFoods[foodIndex] = { id, date, title, description, hour, isHealthy };
    } else {
      throw new Error(`Food with ID ${id} not found.`);
    }

    const storage = JSON.stringify(storageFoods);
    await AsyncStorage.setItem(`${FOOD_COLLECTION}`, storage);
  } catch (error) {
    throw error;
  }
}