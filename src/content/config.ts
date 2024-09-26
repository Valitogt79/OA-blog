import { defineCollection, z } from "astro:content";


const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.date(),
    date: z.string(),
    description: z.string(),
    image: z.string(),

    //Relación
    author: z.string(),

    //Relación
    tags: z.array(z.string()),
  })
})

export const blogCollections = {
  blog: blogCollection,
}
