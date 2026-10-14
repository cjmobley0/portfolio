import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const courses = defineCollection({
  loader: glob({ base: './src/content/courses', pattern: '**/*.md' }),
  schema: z.object({
    code: z.string(),
    title: z.string(),
    units: z.number(),
    term: z.string(),
    half: z.enum(['A', 'B']),
    status: z.enum(['complete', 'in-progress', 'planned']),
    /** Upper-division GE or GWAR requirement this course satisfies, if any. */
    fulfills: z.string().optional(),
    /**
     * Official CSUMB catalog description, quoted verbatim. Left unset for the
     * few courses the catalog program page does not list; never paraphrased.
     */
    description: z.string().optional(),
  }),
});

export const collections = { courses };
