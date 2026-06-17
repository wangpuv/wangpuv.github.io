// ───────────────────────────────────────────────────────────
// PLACEHOLDER PROJECTS — replace with your real work.
// `slug` is used in the URL: /work/<slug>
// Add or remove entries freely; the Work list and detail pages
// are generated from this array.
// ───────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'aurora-analytics',
    title: 'Aurora Analytics',
    year: '2024',
    role: 'Lead Designer & Frontend',
    summary: 'A real-time analytics dashboard that makes complex data feel approachable.',
    tags: ['Product', 'Design System', 'Data Viz'],
    accent: 'oklch(54% 0.17 36)',
    overview:
      'Aurora is a self-serve analytics platform for product teams. The challenge was to surface dense, fast-moving data without overwhelming non-technical users. I led both the design language and the frontend implementation.',
    contributions: [
      'Defined the visual language and component library used across 40+ screens.',
      'Designed a flexible chart system that adapts to light and dark themes.',
      'Built the frontend in React, shipping a 40% faster first paint.',
    ],
    outcome: 'Activation up 24%, support tickets down 30% within two quarters.',
  },
  {
    slug: 'meridian-mobile',
    title: 'Meridian Mobile',
    year: '2023',
    role: 'Product Designer',
    summary: 'Rethinking onboarding for a finance app used by two million people.',
    tags: ['Mobile', 'Onboarding', 'Research'],
    accent: 'oklch(55% 0.13 250)',
    overview:
      'Meridian’s onboarding was leaking users at every step. Through research and rapid prototyping, we cut the flow from nine screens to four without losing required compliance steps.',
    contributions: [
      'Ran 18 moderated usability sessions to map drop-off points.',
      'Prototyped and tested three flow variants in two weeks.',
      'Partnered with legal to keep compliance while reducing friction.',
    ],
    outcome: 'Completion rate rose from 61% to 84%.',
  },
  {
    slug: 'foldspace-editor',
    title: 'Foldspace Editor',
    year: '2021',
    role: 'Design & Engineering',
    summary: 'A distraction-free writing tool with a focus on typography.',
    tags: ['Editor', 'Typography', 'Web'],
    accent: 'oklch(58% 0.12 150)',
    overview:
      'Foldspace is a writing environment built around the belief that good typography helps you think. I designed the reading experience and implemented the rich-text engine.',
    contributions: [
      'Designed a typographic system with optical sizing and balanced line lengths.',
      'Built a collaborative rich-text editor with conflict-free editing.',
      'Shipped offline-first sync so work is never lost.',
    ],
    outcome: 'Featured as a Product of the Day; 12k sign-ups in week one.',
  },
  {
    slug: 'field-notes',
    title: 'Field Notes',
    year: '2020',
    role: 'Side Project',
    summary: 'A small app for capturing thoughts on the move, designed in a weekend.',
    tags: ['Side Project', 'iOS', 'Personal'],
    accent: 'oklch(60% 0.14 70)',
    overview:
      'Field Notes started as a personal itch: a fast, quiet place to jot ideas without the bloat of bigger apps. It stays intentionally tiny.',
    contributions: [
      'Designed and built the entire app solo over a long weekend.',
      'Focused on a single gesture-driven capture interaction.',
      'Kept the whole thing under 2 MB.',
    ],
    outcome: 'Still my daily driver four years later.',
  },
]
