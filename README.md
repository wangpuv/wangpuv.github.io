# Personal Site — Wang Pu

A multi-page portfolio built with **React + Vite**. Warm editorial design system
with light/dark themes. Pages: Home, Work (+ project detail), About, Contact.

## Run it

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Replace the placeholder content

All copy lives in two files — no CMS, just edit these:

- **`src/data/profile.js`** — your name, role, hero text, about paragraphs,
  skills, experience timeline, and social links (email/GitHub/LinkedIn/Twitter).
- **`src/data/projects.js`** — your projects. Each entry's `slug` becomes the
  URL (`/work/<slug>`). Add or remove entries freely; the Work list and detail
  pages regenerate automatically.

The project detail page uses a generated accent gradient (`accent` field) as a
stand-in for a hero image. To use a real image instead, drop files in `public/`
and swap the `.project__banner` element in `src/pages/ProjectDetail.jsx`.

## Customize the look

- **Colors, type scale, spacing, motion** → `src/styles/tokens.css`
  (defined in OKLCH; light and dark theme blocks at the bottom).
- **Fonts** → loaded from Google Fonts in `index.html` (display: *Fraunces*,
  body: *Geist*). Note: fonts require an internet connection; for fully offline
  use, install `@fontsource` packages instead.
- **Component & page styles** → `src/styles/app.css`.

## Deploy

Any static host works (the build output is in `dist/`). For SPA routing to work
on refresh of nested routes like `/work/aurora-analytics`, enable SPA fallback:

- **Vercel / Netlify**: rewrite all routes to `/index.html` (Netlify: add a
  `public/_redirects` file with `/*  /index.html  200`).
- **GitHub Pages**: copy `index.html` to `404.html` after build.
