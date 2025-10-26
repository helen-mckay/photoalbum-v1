import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            date: z.coerce.date(),
            title: z.string(),
            image: image(),
            altText: z.string(),
            uuid: z.string()
        }),
});

export const collections = { posts };
