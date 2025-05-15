import { create } from "zustand";
import { recipeSlice, RecipeSliceType } from "./recipesSlice";


export const useAppStore = create<RecipeSliceType>((...a) => ({
    ...recipeSlice(...a),
}))