export const site = {
  name: 'Christopher Mobley',
  shortName: 'Chris Mobley',
  url: 'https://cjmobley.com',

  tagline: 'Software Engineer in Test who enjoys designing hardware and embedded systems',

  description:
    'Software Engineer in Test with embedded systems experience — test automation, release certification, firmware and PCB design.',

  // Contact, per your choice: GitHub and LinkedIn only. No email, no phone.
  links: {
    github: 'https://github.com/cjmobley0',
    linkedin: 'https://www.linkedin.com/in/christopher-mobley/',
  },
} as const;

export const portfolioNav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
] as const;

export const ilpNav = [
  { href: '/ilp', label: 'Overview' },
  { href: '/ilp/courses', label: 'Courses' },
] as const;
