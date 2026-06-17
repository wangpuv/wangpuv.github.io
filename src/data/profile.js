// ───────────────────────────────────────────────────────────
// PLACEHOLDER CONTENT — replace the values below with your own.
// This is the single source of truth for personal info used
// across the whole site. Nothing here is wired to a CMS, so
// editing this file is all you need to do.
// ───────────────────────────────────────────────────────────

export const profile = {
  name: 'Wang Pu',
  initials: 'WP',
  role: 'Designer & Engineer',
  location: 'Shanghai, China',

  // Home hero — keep it short and confident.
  heroLines: ['Designer &', 'Engineer', 'building things', 'that matter.'],
  heroIntro:
    'I design and build digital products end to end, from the first sketch to the shipped interface. Currently focused on tools that feel calm, fast, and genuinely useful.',

  // About page
  about: [
    'Hello — I’m a designer and engineer with a decade of experience turning fuzzy ideas into products people actually use. I care about typography, performance, and the small details that make software feel considered.',
    'I’ve worked across consumer apps, internal tools, and design systems. I like the messy early phase where the problem is still unclear, and I like the late phase where everything has to be pixel-correct.',
    'Outside of work I read too much, take photos on a 35mm lens, and tinker with side projects that rarely ship but always teach me something.',
  ],

  skills: [
    { group: 'Design', items: ['Product design', 'Design systems', 'Prototyping', 'Brand & identity'] },
    { group: 'Engineering', items: ['React / TypeScript', 'Node.js', 'CSS architecture', 'Accessibility'] },
    { group: 'Practice', items: ['User research', 'Design ops', 'Mentoring', 'Workshops'] },
  ],

  experience: [
    { period: '2022 — Now', role: 'Principal Designer', org: 'Northbound Studio', note: 'Lead design for a B2B analytics suite; built the design system from scratch.' },
    { period: '2019 — 2022', role: 'Senior Product Designer', org: 'Meridian', note: 'Owned the mobile onboarding flow; lifted activation by 24%.' },
    { period: '2016 — 2019', role: 'Product Designer', org: 'Foldspace', note: 'Designed and shipped the first version of the flagship editor.' },
  ],

  social: [
    { label: 'Email', href: 'mailto:hello@example.com', display: 'hello@example.com' },
    { label: 'GitHub', href: 'https://github.com/yourname', display: 'github.com/yourname' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', display: 'linkedin.com/in/yourname' },
    { label: 'Twitter', href: 'https://twitter.com/yourname', display: '@yourname' },
  ],
}
