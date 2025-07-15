import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { recipeSlice, RecipeSliceType } from "./recipesSlice";
import { recentSearchSlice, RecentSearchSliceType } from "./recentSearchSlice";
import { recipeDetailsSlice, RecipeDetailsSliceType } from "./recipeDetailSlice";
import { loadingSlice, LoadingSliceType } from "./loadingSlice";


export const useAppStore = create<RecipeSliceType & RecentSearchSliceType & RecipeDetailsSliceType & LoadingSliceType>()(
  devtools(
    (...a) => ({
      ...recipeSlice(...a),
      ...recentSearchSlice(...a),
      ...recipeDetailsSlice(...a),
      ...loadingSlice(...a)
    }))
);
export const { getState } = useAppStore; // estado global
(window as any).zustand = useAppStore;
