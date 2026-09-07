# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal portfolio site (React + Vite SPA) for Wang Pu. Editorial design, bilingual (Chinese default / English), light & dark themes. Deployed as the GitHub user site, served at https://wangpuv.com/.

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

### Courses (`/writing`, `/claude-code`, `/llm-engineer`)

Two serialised tutorials. `/writing` is the spread listing both; each course
keeps its own contents page at `/<slug>` and its lessons at `/<slug>/<lesson>`.
`/claude-code` URLs predate the spread and must keep working.

**They are not published the same way.** The Claude Code course goes out on the
WeChat account 阿诚的代码 first and is mirrored here; the LLM course is published
on this site first and is not on WeChat at all. So venue is per-course copy
(`wechat` and the `follow` string in `src/data/courses/<slug>.js`), never a
sentence about "both courses". Only a course with `wechat: true` shows the QR.

Routes, nav highlighting and the spread are all derived from the `courses`
array in `src/data/course.js`, so nothing needs a new route added by hand.

Each course is split into a generated half and a hand-written half.

`npm run course` reads the Obsidian sources (one folder per course, listed in
`COURSES` at the top of `scripts/build-course.mjs`; `$COURSE_SRC` and
`$LLM_COURSE_SRC` override the paths) and writes three things, all committed:

- `src/content/course/<course>/<slug>.html` — article markup, lazily imported
- `src/data/course.generated.js` — lesson metadata, TOC, dates, reading time,
  keyed by course slug
- `public/course/<course>/*.webp` — figures, converted from PNG

**Re-run `npm run course` after publishing a lesson**; nothing picks up new
source automatically. Never hand-edit those three outputs.

A course entry may carry an `include` list naming the source stems that ship.
The LLM course keeps unfinished lessons in the same Obsidian folder as the
published ones, so without it a half-written 第 8 课 would appear on the site
with 3–7 still missing. Omit `include` to publish every `.md` in the folder.

The hand-written half is one module per course under `src/data/courses/`:
English titles for each published lesson, the stage groupings, the lessons
announced but not yet written, an optional appendix, and which accent the
serial is inked in (`ink: 'accent' | 'highlight'`). `src/data/course.js` joins
the two halves and owns what the courses share: the chrome strings, the WeChat
channel, and the spread's copy.

Adding a third course: write `src/data/courses/<slug>.js`, add it to `COURSES`
in the build script, and register it in `src/data/course.js`.

Lesson bodies stay Chinese in both languages — English mode translates the
chrome and contents page and shows a note on the article. The 公众号 cover
cards are deliberately not imported (navy/yellow plates that repeat the
headline). `markdown-it` and `sharp` are devDependencies used only by the
build script; neither reaches the browser.

### Styling system (`src/styles/`)

- `tokens.css` — design tokens in **OKLCH**: fluid type scale (`--step-*`), spacing, motion, and the light/dark color blocks. Font stacks pair Latin (Fraunces display / Geist body, loaded from Google Fonts in `index.html`) with CJK fallbacks (Songti SC / PingFang SC).
- `global.css` — reset, base typography, layout primitives (`.wrap`, `.section`, `.stack`), and shared component classes (`.btn`, `.link`, `.eyebrow`, `.reveal`).
- `app.css` — page- and component-specific styles, imported in `App.jsx`.

Each serial re-inks the whole course section through `--course-ink` /
`--course-ink-text`, set as inline custom properties on the page root from the
course's `ink` field (terracotta `--accent` for Claude Code, teal
`--highlight` for the LLM course). The spread uses `--serial-ink` the same way.

Note that `main.jsx` imports `App.jsx` (which pulls `app.css`) *before*
`global.css`, so `app.css` loses the cascade at equal specificity. A colour in
`app.css` that has to beat `.display`, `.meta` or `.eyebrow` must be scoped one
level up (`.serial .serial__tagline`, not `.serial__tagline`).

Plain CSS with hand-written class names (BEM-ish), no modules/Tailwind. Scroll-reveal animations use the `.reveal` class driven by the `Reveal` component (IntersectionObserver), and all motion respects `prefers-reduced-motion`.

### CJK typography rule

Chinese display headings must not break mid-word. `global.css` applies `word-break: keep-all` (+ emergency `overflow-wrap`) scoped to `:lang(zh)` headings, so Chinese breaks only at punctuation/spaces. When authoring Chinese titles, use commas/spaces to control where lines break — words won't be split. Do not extend this to body text.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages (Pages `build_type` is `workflow`, not Jekyll). The workflow copies `dist/index.html` → `dist/404.html` so SPA deep links like `/work/<slug>` resolve on refresh (they return HTTP 404 status but render correctly — expected, not a bug). Base path is root (`/`); `BrowserRouter` uses no basename.

**The live site is https://wangpuv.com/**, set by `public/CNAME`. `wangpuv.github.io`
still resolves but 301s to the custom domain, and so does every project site under it.
When verifying a deploy with curl, follow redirects (`curl -L`) — a bare 301 is the
domain hop, not a failed deploy.

**Do not touch** the separate `wangpuv/littlesteps-privacy` repo — it independently serves https://wangpuv.com/littlesteps-privacy/.
