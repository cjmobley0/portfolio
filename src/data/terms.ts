/**
 * The CSUMB CS Online course pathway, transcribed from the Undergraduate
 * Individual Learning Plan (cohort 27-FA26).
 *
 * This file is the source of truth for ORDER and GROUPING. Per-course status and
 * content live in the frontmatter of src/content/courses/*.md.
 *
 * Deliberately excluded for privacy: student ID number and academic advisor
 * contact details, both of which appear on the ILP document.
 */

export type TermHalf = 'A' | 'B';

export interface TermBlock {
  /** Stable slug used for anchors, e.g. "fall-2026-a". */
  id: string;
  /** Academic term the two halves belong to, e.g. "Fall 2026". */
  term: string;
  half: TermHalf;
  /** Combined units as the ILP lists them for this block. */
  units: number;
  /** Course codes, matching the `code` field in src/content/courses/*.md. */
  courses: string[];
}

export const termBlocks: TermBlock[] = [
  { id: 'fall-2026-a', term: 'Fall 2026', half: 'A', units: 5, courses: ['CST 300', 'CST 349'] },
  { id: 'fall-2026-b', term: 'Fall 2026', half: 'B', units: 4, courses: ['CST 338'] },
  { id: 'spring-2027-a', term: 'Spring 2027', half: 'A', units: 4, courses: ['CST 363'] },
  { id: 'spring-2027-b', term: 'Spring 2027', half: 'B', units: 4, courses: ['CST 334'] },
  { id: 'summer-2027-a', term: 'Summer 2027', half: 'A', units: 4, courses: ['CST 311'] },
  { id: 'summer-2027-b', term: 'Summer 2027', half: 'B', units: 4, courses: ['CST 336'] },
  { id: 'fall-2027-a', term: 'Fall 2027', half: 'A', units: 4, courses: ['CST 370'] },
  { id: 'fall-2027-b', term: 'Fall 2027', half: 'B', units: 6, courses: ['CST 462S', 'CST 328'] },
  { id: 'spring-2028-a', term: 'Spring 2028', half: 'A', units: 4, courses: ['CST 383'] },
  { id: 'spring-2028-b', term: 'Spring 2028', half: 'B', units: 4, courses: ['CST 438'] },
  { id: 'summer-2028-a', term: 'Summer 2028', half: 'A', units: 4, courses: ['CST 329', 'CST 489'] },
  { id: 'summer-2028-b', term: 'Summer 2028', half: 'B', units: 4, courses: ['CST 499'] },
];

/** Academic terms in pathway order, each with its A/B blocks. */
export const terms = termBlocks.reduce<{ term: string; blocks: TermBlock[] }[]>((acc, block) => {
  const existing = acc.find((t) => t.term === block.term);
  if (existing) existing.blocks.push(block);
  else acc.push({ term: block.term, blocks: [block] });
  return acc;
}, []);

export const totalCourses = termBlocks.reduce((n, b) => n + b.courses.length, 0);

/**
 * Lower-division prerequisites, completed outside CSUMB before the pathway
 * begins. Listed on the ILP overview for completeness — these do not get their
 * own pages, since the assignment asks for a page per course in the pathway.
 */
export const transferredPrerequisites = [
  'CST 231: Problem Solving and Programming',
  'CST 237: Computer Architecture',
  'CST 238: Introduction to Data Structures',
  'MATH 130: Precalculus',
  'MATH 150: Calculus 1',
  'MATH 151: Calculus 2',
  'MATH 170: Discrete Mathematics',
];
