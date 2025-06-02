import { z } from 'zod';

export const RecipesAPIResponseSchema = z.object({
    results: z.array(z.object({
        id: z.number(),
        image: z.string(), 
        title: z.string()
    }))
});