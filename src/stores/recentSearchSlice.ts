import { StateCreator } from "zustand";
import { Recipes } from "../types";
import { getStorageItem, removeStorageItem, setStorageItem } from "../helpers/storageHelper";

export type RecentSearchSliceType = {
    recent: Recipes['results'];
    addRecentRecipe: (recipe: Recipes) => void;
    setRecentFromStorage: () => void;
    handleClearRecent: (id: number) => void
};

export const recentSearchSlice: StateCreator<RecentSearchSliceType> = (set) => ({
    recent: [],
    addRecentRecipe: (recipe) => {
        set((state) => {
            let recipeResult = recipe.results[0];
            const updatedRecent = [...state.recent]; // Copio el estado actual para no perder los elementos
            const exists = updatedRecent.find(e => e.id === recipeResult.id);
            if(exists) return { recent: updatedRecent } // Si existe una receta, retornamos el mismo estado

            if(updatedRecent.length >= 6) updatedRecent.pop(); // Verifico que si supera 5 elementos. Cuando supere elimino la primera receta
            updatedRecent.unshift(recipeResult); // Agrego al principio la primera receta
            
            setStorageItem('recent', updatedRecent);

            return {
            recent: updatedRecent, // Set necesita saber que quiero actualizar
            }
        });
    },
    setRecentFromStorage: () => {
        const recent = getStorageItem<Recipes['results']>('recent');
        set({
            recent
        });
    },
    handleClearRecent: (id: number) => {
        const recent = removeStorageItem<Recipes['results'][number]>('recent', id);
        set({
            recent
        });
       
    }
})                              