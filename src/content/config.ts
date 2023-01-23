import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).optional(),
  }),
});

const members = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    from: z.string(),
  }),
});

export const collections = {
  posts: posts,
  members: members,
};
