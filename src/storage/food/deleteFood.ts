import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { foodGetAll } from "./foodsGetAll";

export async function deleteFood(foodId: string) {
  try {
    const storageFoods = await foodGetAll();
    
    // Filtra os alimentos mantendo apenas aqueles cujo ID não corresponde ao ID fornecido
    const updatedFoods = storageFoods.filter((food) => food.id !== foodId);

    const storage = JSON.stringify(updatedFoods);

    await AsyncStorage.setItem(`${FOOD_COLLECTION}`, storage);
  } catch (error) {
    throw error;
  }
}