import { StateCreator } from "zustand";

export type RecipeSliceType = {
    recipes: [];
    searchRecipes: () => void;
};

 
export const recipeSlice: StateCreator<RecipeSliceType> = () => ({
    recipes: [],
    searchRecipes: () => {}
});

