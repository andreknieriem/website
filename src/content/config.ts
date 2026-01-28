import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    tags: z.array(z.string()).optional(),
    description: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    technologies: z.array(z.string()).optional(),
    image: z.string().optional().nullable(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'tutorials': blogCollection,
  'playground': blogCollection,
  'portfolio': portfolioCollection,
};