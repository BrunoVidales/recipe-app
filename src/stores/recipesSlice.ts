import { StateCreator } from "zustand";
import { Filters, Recipes } from "../types";
import { recipeSearchFetch } from "../service/recipeService";
import { getState } from "./useAppStore";


export type RecipeSliceType = {
    recipes: Recipes | null;
    searchRecipes: (formData: Filters) => Promise<void>;
    setRecipeStorage: () => void;
};

 
export const recipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    recipes: {
        results: []
    },
    searchRecipes: async (formData) => {
        // Ejecuto mi loadin antes de la petición
        getState().setLoading(true);

        // Obtengo la data
        const recipes = await recipeSearchFetch(formData);
        
        // Verifico que no llegue vacio el arreglo, apagamos el loading
        if (recipes && recipes.results.length > 0) {
            localStorage.setItem('recipes', JSON.stringify(recipes));
            set({ recipes });
        } else {
            getState().setLoading(false);
            localStorage.removeItem('recipes');
            set({ recipes: null });
            return;
        }

        
        // Actaulizo el estado con el nuevo objeto
        set({
            recipes
        });
        
        getState().addRecentRecipe(recipes!);
        // Apagamos el loading
        getState().setLoading(false);
        
    },
    setRecipeStorage: () => {
        const item = localStorage.getItem('recipes');
        if(!item) return;
        try {
            const itemParsed = JSON.parse(item);
            set({
                recipes: itemParsed
            })
        } catch (error) {
            console.error('Error al parsear JSON de localStorage:', error);
            
            set({ recipes: null });
        }
        
        
    }
});


