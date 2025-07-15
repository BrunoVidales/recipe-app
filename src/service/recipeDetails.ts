import api from "../lib/axios";
import { RecipeFullDetailsSchema } from "../schema/recipesDetails-schema";
import { Recipes } from "../types";

const appId : string = import.meta.env.VITE_API_KEY

const getParams = () => {
    return ({
        includeNutrition: true,
        apiKey: appId
    })
}

export const getRecipeInformation = async (id: Recipes['results'][number]['id']) => {
    try {
        const params = getParams();
        const [ { data }, { data: { ingredients } }  ] = await Promise.all([
            api.get(`${id}/information`, {params}),
            api.get(`${id}/ingredientWidget.json`, { params })
        ]);

        const fullData = {
            data,
            ingredients
        };

        const result = RecipeFullDetailsSchema.safeParse(fullData);

        if(result.success) {
            // Copiamos el objeo principal
            let copyDataInfo = { ...result.data?.data };

            const nutrientsFilter = result.data?.data.nutrition.nutrients.filter(e => ['Calories', 'Protein', 'Carbohydrates'].includes(e.name));

            const linkTagRegex = /<a\b[^>]*>(.*?)<\/a>/gi; 

            // Modificamos las partes necesarias reemplazando y copiando lo demas para no perder nada
            copyDataInfo = {
                ...copyDataInfo,
                nutrition: {
                    nutrients: nutrientsFilter
                },
                summary: copyDataInfo.summary.replace(linkTagRegex, '<b>$1</b>')
            }
           
            return {
                data: copyDataInfo,
                ingredients: result.data.ingredients
            }
        }
        
    } catch (error) {
        console.error(error);
    }
};

