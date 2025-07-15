import { StateCreator } from "zustand";
import { Recipes, RecipesDetails } from "../types";
import { getRecipeInformation } from "../service/recipeDetails";
import { getState } from "./useAppStore";


export type RecipeDetailsSliceType = {
    recipeDetails: RecipesDetails;
    setRecipe: (id: Recipes['results'][number]['id']) => void;
    setRecipeDetailsStorage: () => void;
};

export const recipeDetailsSlice: StateCreator<RecipeDetailsSliceType> = (set) => ({
    recipeDetails: {
        data: {
            id: 0,
            cookingMinutes:0, 
            diets: [],
            extendedIngredients: [],
            image: '',
            instructions: '',
            nutrition: {
                nutrients: []
            },
            preparationMinutes: 0,
            readyInMinutes: 0,
            summary: '',
            title: ''
        },
        ingredients: []
        
    },
    setRecipe: async (id) => {
        getState().setLoading(true);
        const recipeDetails = await getRecipeInformation(id);
        localStorage.setItem('recipeDetails', JSON.stringify(recipeDetails));
        set({recipeDetails})
        getState().setLoading(false);
    },
    setRecipeDetailsStorage: () => {
        const item = localStorage.getItem('recipeDetails');
        if(!item) return undefined;
        const itemParsed = JSON.parse(item);
        set({recipeDetails: itemParsed});
    }
});