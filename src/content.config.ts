import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const productCollection = defineCollection({
  schema: ({ image }) => z.object({
    name: z.string(),
    price: z.number(),
    image: image()
  }),
});

export const collections = { activities, products: productCollection };
