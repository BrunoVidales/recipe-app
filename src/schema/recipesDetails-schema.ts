import { z } from "zod";


export const RecipeInformationAPIResponseSchema = z.object({
    id: z.number(),
    cookingMinutes: z.number().nullable(), 
    diets: z.array(z.string()),
    extendedIngredients: z.array(z.object({
        id: z.number()
    })),
    image: z.string(),
    instructions: z.string(),
    nutrition: z.object({
        nutrients: z.array(z.object({
            name: z.string(),
            amount: z.number(),
            unit: z.string()
        }))
    }),
    preparationMinutes: z.number().nullable(),
    readyInMinutes: z.number().nullable(),
    summary: z.string(),
    title: z.string()
});

export const RecipeIngredientsAPIResponseSchema = z.array(z.object({
    name: z.string(),
    image: z.string().nullable(),
    amount: z.object({
        metric: z.object({
            unit: z.string(),
            value: z.number()
        })
    })
}));

export const RecipeFullDetailsSchema = z.object({
    data: RecipeInformationAPIResponseSchema,
    ingredients: RecipeIngredientsAPIResponseSchema
});
