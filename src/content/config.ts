import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    tags: z.array(z.string()).optional(),
    description: z.string().optional().nullable(),
    // layout is used by Astro pages but not strictly part of content schema, but we can keep it loose or ignore it
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    technologies: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'tutorials': blogCollection,
  'playground': blogCollection,
  'portfolio': portfolioCollection,
};
