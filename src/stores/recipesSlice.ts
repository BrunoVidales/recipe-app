import { StateCreator } from "zustand";
import { Filters, Recipes } from "../types";
import { recipeSearchFetch } from "../service/recipeService";
import { getState } from "./useAppStore";


export type RecipeSliceType = {
    recipes: Recipes;
    searchRecipes: (formData: Filters) => Promise<void>;
};

 
export const recipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    recipes: {
        results: []
    },
    searchRecipes: async (formData) => {
        const recipes = await recipeSearchFetch(formData);
        set({
            recipes
        })
        if(recipes?.results?.length === 0) {
            return;
        }
        getState().addRecentRecipe(recipes!);
    }

});


