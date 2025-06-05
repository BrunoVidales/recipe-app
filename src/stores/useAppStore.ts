import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { recipeSlice, RecipeSliceType } from "./recipesSlice";
import { recentSearchSlice, RecentSearchSliceType } from "./recentSearchSlice";

export const useAppStore = create<RecipeSliceType & RecentSearchSliceType>()(
  devtools(
    (...a) => ({
      ...recipeSlice(...a),
      ...recentSearchSlice(...a),
    }))
);
export const { getState } = useAppStore; // estado global
(window as any).zustand = useAppStore;
