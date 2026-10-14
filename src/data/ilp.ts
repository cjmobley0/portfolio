/**
 * Content for the ILP homepage. Maps to the assignment rubric: CSUMB logo,
 * name and short bio, a description of the program, and goals.
 */

export const ilp = {
  degree: 'Bachelor of Science in Computer Science',
  programName: 'CS Online Degree Completion',
  institution: 'California State University, Monterey Bay',
  expectedGraduation: 'Summer 2028',

  catalogUrl: 'https://csumb.edu/scd/cs-course-curriculum/',
  programUrl: 'https://csumb.edu/scd/computer-science-online-degree-completion/program-structure/',

  /**
   * Your words. This page is public, so keep it describing what you do now
   * rather than what you want to do next.
   */
  bio: [
    "I'm a software engineer in test who happens to like embedded engineering as a hobby. I'm working through CSUMB's online CS degree, and this is where I post what I build each term.",
  ],

  /**
   * Goals for the degree. These are written as learning goals for the program,
   * which is what the assignment asks for. Keep them that way: this page is
   * public, so it should not read as a plan to leave the job.
   */
  goals: [
    {
      title: 'Strengthen the fundamentals',
      body: 'Fill in the computer science underneath the work I already do, especially operating systems, networks, databases and algorithms.',
    },
    {
      title: 'Test what I build',
      body: 'Testing is the part of engineering I know best, and I want to keep applying it everywhere, including the hardware projects I work on at home.',
    },
    {
      title: 'Finish while working full time',
      body: 'Complete the B.S. by Summer 2028 without stepping back from work, and reach the capstone with a project worth the time.',
    },
  ],

  /** Verified against the CSUMB program pages and the ILP document. */
  programFacts: [
    { label: 'Format', value: '24 months, year-round, fully online' },
    { label: 'Terms', value: '8-week terms, one to two courses at a time' },
    { label: 'Units', value: '45–51 upper-division units at CSUMB' },
    { label: 'Cohort', value: '27 — FA26' },
    { label: 'Expected graduation', value: 'Summer 2028' },
  ],

  programDescription:
    'An online, upper-division program for people who finished their lower-division computer science and math coursework somewhere else. It runs year-round in 8-week terms, one or two courses at a time, with the cohort moving through a fixed sequence together. Upper-division general education is built into the major, so there are no separate GE courses to take alongside it.',

} as const;
