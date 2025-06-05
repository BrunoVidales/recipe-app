import { StateCreator } from "zustand";
import { Recipes } from "../types";

export type RecentSearchSliceType = {
    recent: Recipes['results'];
    addRecentRecipe: (recipe: Recipes) => void;
    setRecentFromStorage: (storage: Recipes['results']) => void
};

export const recentSearchSlice: StateCreator<RecentSearchSliceType> = (set) => ({
    recent: [],
    addRecentRecipe: (recipe) => {
        let recipeResult = recipe.results[0];
        let copyRecent: Recipes['results'] = [];
        set((state) => {
            copyRecent = [...state.recent]; // Copio el estado actual para no perder los elementos

            const exists = copyRecent.find(e => e.id === recipeResult.id);
            if(exists) return { recent: copyRecent } // Si existe una receta, retornamos el mismo estado

            if(copyRecent.length >= 5) copyRecent.pop(); // Verifico que si supera 5 elementos. Cuando supere elimino la primera receta
            copyRecent.unshift(recipeResult); // Agrego al principio la primera receta
            

            return {
            recent: copyRecent, // Set necesita saber que quiero actualizar
            }
        });
        
        localStorage.setItem('recent', JSON.stringify(copyRecent));
    },
    setRecentFromStorage: (storage: Recipes['results']) => {
        set({
            recent: storage
        });
    }
})                              