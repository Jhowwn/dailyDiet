import { FoodStorageDTO } from "@storage/food/FoodStorage.DTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
      feedback: {
        isHealthy: boolean;
      }
      detailsFood: FoodStorageDTO
      details: {
        percent: number
        registerMeals: number
        sequency: number
        isHealthy: boolean
        healthy: number
        notHealthy: number
      }
    }
  }
}