import api from "../lib/axios";
import { RecipesAPIResponseSchema } from "../schema/recipes-schema";
import { Filters } from "../types";

const appId : string = import.meta.env.VITE_API_KEY
if (!appId) {
  throw new Error("VITE_API_KEY is missing in your environment variables."); //evitar que la clave sea undefined y la request falle silenciosamente.
}

type ParamsType = Filters & { apiKey: string }

const getParams = (filters : Filters) : ParamsType =>  {
  return ({
    ...filters,
    apiKey: appId
  })
}



export const recipeSearchFetch = async (formData: Filters) => {
  try {
    const params = getParams(formData);
    const { data } = await api.get('complexSearch', {params});
    const result = RecipesAPIResponseSchema.safeParse(data);
    if(result.success) {
      return result.data;
    };
    
  } catch (error) {
    console.error(error);
  }
};