/**
 * Work history, taken from Christopher_Mobley_Resume_for_internship.pdf.
 * Keep this in sync with the résumé when either changes.
 */

export interface Role {
  title: string;
  /**
   * Only set when a position has several roles with different ranges, to show
   * how the time at the company was split. A single role inherits the company
   * range rather than repeating it.
   */
  start?: string;
  end?: string;
}

export interface Position {
  company: string;
  location: string;
  /** Overall range at the company, shown on the company line. */
  dates: string;
  roles: Role[];
  highlights: string[];
}

export const experience: Position[] = [
  {
    company: 'Disney Streaming',
    location: 'Remote (CA)',
    dates: 'Jul 2022 – Present',
    roles: [
      {
        title: 'Senior Software Development Engineer in Test',
        start: 'Jan 2024',
        end: 'Present',
      },
      {
        title: 'Software Development Engineer in Test',
        start: 'Jul 2022',
        end: 'Jan 2024',
      },
    ],
    highlights: [
      'Certify smoke, regression and end-to-end releases for the ad services behind Disney+, Hulu and ESPN.',
      'Contribute to an AI-driven test pipeline that runs end-to-end validations across baseline and feature deployments, and reads Datadog data to catch performance regressions.',
      'Automate REST API test cases across several microservices.',
      'Use AI tools day to day to find edge cases sooner, surface defects earlier and widen coverage.',
      'Lead projects end to end, from planning through release, and drive process improvements along the way.',
    ],
  },
  {
    company: 'Gemini',
    location: 'Remote (CA) · BITRIA team',
    dates: 'Feb 2022 – Jul 2022',
    roles: [
      { title: 'Backend Software Developer' },
      { title: 'Backend QA Engineer' },
    ],
    highlights: [
      'Added a new crypto asset to the trading platform.',
      'Fixed a two-factor authentication security issue and improved its test coverage.',
      'Automated CRUD API tests for institutional accounts, which turned up several critical bugs.',
      'Maintained and refactored the test suite for separately managed accounts.',
    ],
  },
  {
    company: 'Covius',
    location: 'Temecula, CA · formerly LenderLive',
    dates: 'May 2018 – Jan 2022',
    roles: [{ title: 'Test Automation Engineer' }],
    highlights: [
      'Automated loan-processing workflow scenarios in Python.',
      'Covered a check-printing application with smoke, regression, sanity, security, load and API tests.',
      'Built a REST API service that backed an in-house testing web app.',
      'Led the move to nightly automated test builds in TeamCity.',
    ],
  },
];
