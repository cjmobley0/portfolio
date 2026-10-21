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

/**
 * Written deliverables that sit alongside a course's final project, such as the
 * CST 349 interview report. Kept out of the course body because that body is the
 * final project and the two are separate submissions.
 */
const reports = defineCollection({
  loader: glob({ base: './src/content/reports', pattern: '**/*.md' }),
  schema: z.object({
    /** Course code this report belongs to, matching a course's `code`. */
    course: z.string(),
    title: z.string(),
  }),
});

export const collections = { courses, reports };
