# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Overview

A personal portfolio site (React + Vite SPA) for Wang Pu. Editorial design, bilingual (Chinese default / English), light & dark themes. Deployed as the GitHub user site at https://wangpuv.github.io/.

## Commands

```bash
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the built dist/ (used for verifying production output)
```

There are no tests, linter, or formatter configured. Verification is done by building and viewing the rendered output.

## Architecture

Plain Vite + React Router SPA. No state library, no CSS framework, no i18n library — everything is small and hand-rolled. Two cross-cutting concerns are provided via React context and a pre-paint inline script:

- **Theme** (`src/hooks/useTheme.js`): toggles `data-theme="light|dark"` on `<html>`, persisted in `localStorage`. CSS does the visual work via tokens.
- **Language** (`src/i18n/LanguageContext.jsx`): `useLanguage()` returns `{ lang, setLang, toggle }`; `lang` is `'zh' | 'en'`, persisted in `localStorage`. Default is Chinese; only English-only browsers auto-start in English.

The inline script in `index.html` sets both `data-theme` and `lang` **before paint** to avoid a flash. The same detection logic is duplicated there and in `LanguageContext.jsx` / `useTheme.js` — **keep them in sync** if you change defaults.

Provider order (`src/main.jsx`): `LanguageProvider` → `BrowserRouter` → `App`. `App.jsx` holds the routes and keeps `document.title` in sync with `lang`.

### Content vs. UI strings (important)

All text is data-driven and bilingual. When editing copy, edit data — not JSX:

- `src/data/profile.js` — name, role, hero, about, skills, experience, social. Shape: shared fields (`initials`, `social`) at top, then `en` and `zh` blocks. Access via `profile[lang]`.
- `src/data/projects.js` — projects array. `slug`, `year`, `accent` are **shared** (the slug is the URL `/work/<slug>`); translatable fields live in per-project `en`/`zh` blocks. Access via `project[lang]`.
- `src/i18n/strings.js` — UI chrome (nav, buttons, section labels, footer, 404). Access via `ui[lang]`.

Components consume these with `const { lang } = useLanguage()` then index by `lang`. There is no `t()` helper — indexing is direct.

### Styling system (`src/styles/`)

- `tokens.css` — design tokens in **OKLCH**: fluid type scale (`--step-*`), spacing, motion, and the light/dark color blocks. Font stacks pair Latin (Fraunces display / Geist body, loaded from Google Fonts in `index.html`) with CJK fallbacks (Songti SC / PingFang SC).
- `global.css` — reset, base typography, layout primitives (`.wrap`, `.section`, `.stack`), and shared component classes (`.btn`, `.link`, `.eyebrow`, `.reveal`).
- `app.css` — page- and component-specific styles, imported in `App.jsx`.

Plain CSS with hand-written class names (BEM-ish), no modules/Tailwind. Scroll-reveal animations use the `.reveal` class driven by the `Reveal` component (IntersectionObserver), and all motion respects `prefers-reduced-motion`.

### CJK typography rule

Chinese display headings must not break mid-word. `global.css` applies `word-break: keep-all` (+ emergency `overflow-wrap`) scoped to `:lang(zh)` headings, so Chinese breaks only at punctuation/spaces. When authoring Chinese titles, use commas/spaces to control where lines break — words won't be split. Do not extend this to body text.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages (Pages `build_type` is `workflow`, not Jekyll). The workflow copies `dist/index.html` → `dist/404.html` so SPA deep links like `/work/<slug>` resolve on refresh (they return HTTP 404 status but render correctly — expected, not a bug). Base path is root (`/`); `BrowserRouter` uses no basename.

**Do not touch** the separate `wangpuv/littlesteps-privacy` repo — it independently serves https://wangpuv.github.io/littlesteps-privacy/.
