import { z } from "zod";
import { dietsList, searchParams } from "../data";
import { RecipesAPIResponseSchema } from "../schema/recipes-schema";
import { RecipeFullDetailsSchema, RecipeInformationAPIResponseSchema, RecipeIngredientsAPIResponseSchema } from "../schema/recipesDetails-schema";

export type DietsState = {
    checked: boolean;
    disabled: boolean;
};


export type DietsOption = typeof dietsList[number]; // El typeof devuelve el tipo de una variable, cuando pasamos los corchetes con el number, itera sobre el array devolviendo la union de tipos


export type DietsOptions = {
    [key in DietsOption]: DietsState;
};

export type SearchParam = typeof searchParams[number];

export type Filters = {
    [key in SearchParam]?: string | boolean;
};

export type Recipes = z.infer<typeof RecipesAPIResponseSchema>;

export type RecipeInfo = z.infer<typeof RecipeInformationAPIResponseSchema>;

export type RecipeIngredient = z.infer<typeof RecipeIngredientsAPIResponseSchema>;

export type RecipesDetails = z.infer<typeof RecipeFullDetailsSchema>;