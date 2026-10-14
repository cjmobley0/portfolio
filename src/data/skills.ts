/**
 * Skills, taken from Christopher_Mobley_Resume_for_internship.pdf.
 * Keep this in sync with the résumé when either changes.
 */

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'Rust', 'C++', 'Java', 'SQL'],
  },
  {
    label: 'Test frameworks',
    items: ['Selenium', 'Playwright', 'Cypress', 'Postman'],
  },
  {
    label: 'Embedded & hardware',
    items: ['Daisy Seed', 'ESP32', 'UART', 'LVGL', 'PCB design', 'DSP'],
  },
  {
    label: 'Tools & cloud',
    items: ['Git', 'Docker', 'Jenkins', 'TeamCity', 'Datadog', 'AWS (S3, DynamoDB)'],
  },
  {
    label: 'AI tools',
    items: ['Claude Code', 'Cursor', 'Claude Skills', 'MCP servers'],
  },
];

/** The two sides of the work, used for the pair of panels on the homepage. */
export const pillars = [
  {
    id: 'test',
    label: 'Test Engineering',
    summary:
      'Seven years automating and certifying releases, most recently for the ad services behind Disney+, Hulu and ESPN.',
  },
  {
    id: 'embedded',
    label: 'Embedded Systems',
    summary:
      'Firmware, audio DSP and circuit board design, mostly on synthesizers and other instruments I build for myself.',
  },
] as const;
