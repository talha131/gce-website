# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing/informational website for **Government College of Education (GCE), Karachi** — a teacher-education college founded 1953, affiliated with the University of Karachi. Built with **Astro 5 + Tailwind CSS v4**, no backend/CMS. Ships to **Netlify** as static output.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → dist/ (also validates all pages/types)
npm run preview   # serve the built dist/ locally (use this for Lighthouse, not dev)
```

Or the `Makefile`: `make dev|build|preview|clean|deploy`. There is no test suite and no separate lint step — `npm run build` is the gate (it type-checks `.astro`/`.ts` and fails on broken image references or bad `getStaticPaths`). Run a build before considering a change done.

`make deploy` builds locally and pushes `dist/` to production (gce.edu.pk) via `netlify deploy --prod --dir=dist` — it does **not** use Netlify's CI. Consequence: **build-time env vars must be set locally**, not just in the Netlify dashboard.

## Critical constraint — do not deploy

Pushing to `master` triggers a Netlify build. **Never `git push`** unless the user explicitly says to. Commit locally in small logical units; the owner pushes manually. GPG signing is on — never disable it.

## Architecture

### Content lives in typed data files, not in pages

All site content is in `src/data/*.ts` (plain typed TS, no content collections). Pages import these arrays/objects and render them. To change copy, add a program, a faculty member, an event, etc., edit the data file — **not** the `.astro` page. Key files: `site.ts` (identity/nav/socials/transport), `about.ts` (history, mission/vision EN+UR, principal, anthem/dua, testimonials), `programs.ts`, `faculty.ts`, `facilities.ts`, `events.ts`, `achievements.ts`, `contributors.ts`.

### Images resolve by a `category/slug` convention (the key pattern)

`src/lib/images.ts` eagerly globs everything under `src/assets/content/**` and exposes `getGallery(category, slug?)`, `getCover(category, slug)`, `getSingle(category, name)`. Data files carry a `slug` (facilities/events) or `folder` (faculty/contributors) field that **must match the folder/filename** under `src/assets/content/<category>/`:

- `facilities/<slug>/*.jpg` ← `facilities.ts` `slug`
- `events/<slug>/*.jpg` ← `events.ts` `slug`
- `faculty/<folder>.jpg` ← `faculty.ts` `folder` (one image per person)
- `contributors/<folder>.png` ← `contributors.ts` `folder`
- `achievements/<slug>/*`, `conference/*` (conference has no slug subfolder — `getGallery('conference')`)

Consequence: **dropping photos into the right folder makes them appear in galleries with no code change.** A missing photo is not an error — `CoverImage.astro` renders a branded placeholder and `FacultyCard`/`Monogram.astro` render initials.

Photos were bulk-imported from the source folder by `scripts/import-assets.sh` (one-time, idempotent; maps messy source folder names → clean slugs; prefixes filenames when merging multiple source folders into one gallery so `Image_01.jpg` collisions don't overwrite). The raw source `Project - GCE Website/` is **kept untouched and untracked** (hundreds of MB of images/PDFs) — do not commit it; the images we use are already in `src/assets/`.

### Theming is a single file

`src/styles/theme.css` defines **every** color/font/radius/shadow as CSS custom properties on `:root` (indigo `--brand: #2504B1` dominant, gold accent, warm light canvas). `src/styles/global.css` maps those vars into Tailwind via `@theme` (so utilities like `bg-brand`, `text-ink`, `shadow-card`, `font-urdu` resolve to the tokens) and holds base element styles + motion keyframes. To re-skin, edit `theme.css` only. A dark-mode scaffold exists (`:root[data-theme="dark"]`) but the site ships light-first. Prefer token-backed Tailwind utilities over hardcoded colors.

### Motion is progressive enhancement, gated on reduced-motion

Add `data-reveal` (optionally `style="--reveal-delay:Nms"`) to any element for scroll-reveal; `<StatCounter>` uses `data-count` for count-up. `src/scripts/motion.ts` (imported once in `Layout.astro`) wires an IntersectionObserver for both and **shows everything immediately if `prefers-reduced-motion: reduce`**. `global.css` also has a blanket reduced-motion off-switch. Any new motion must respect this. Note: because reveals start at `opacity:0`, a full-page screenshot before scrolling looks blank — that's expected, not a bug.

### Layout & routing

`src/layouts/Layout.astro` is the shell for every page (SEO head, skip link, sticky `Header`, `Footer`, motion script). Pass `title`/`description` (and `isHome` on the homepage). `Header.astro` is transparent over the dark hero at page top and switches to a solid light state on scroll — its foreground colors are driven by CSS vars (`--hdr-fg` etc.) that flip on the `.header-solid` class; every page therefore starts with a dark hero (`PageHero.astro` or the home hero) so the transparent nav stays legible.

Detail pages are generated with `getStaticPaths` from the data arrays: `programs/[slug]`, `campus/[slug]` (facilities), `student-life/[slug]` (events). Adding an item to the data array + a matching image folder automatically creates its detail page and gallery.

### Analytics

`Analytics.astro` (in `Layout` head) injects GA4 **only when `import.meta.env.PROD` and `PUBLIC_GA_ID` is set** — so dev builds and un-configured builds emit nothing. The id comes from a git-ignored `.env` (`PUBLIC_GA_ID=G-…`, see `.env.example`); it must be present locally at `make deploy` time to reach the deployed site.

### SEO

`SEO.astro` (in `Layout`) emits per-page title/description, canonical, OG/Twitter, and site-wide `CollegeOrUniversity` JSON-LD from `site.ts`. `@astrojs/sitemap` auto-generates `sitemap-index.xml`; `astro.config.mjs` `site` is the canonical origin. Developer attribution (Talha Mansoor) is a real visible dofollow footer credit — keep it; no hidden-SEO tricks.

## Conventions

- **Urdu**: any Urdu block needs `lang="ur" dir="rtl"`; `global.css` then applies Nastaliq + RTL + generous line-height automatically. Poetry is stored as arrays of couplets (arrays of lines) in `about.ts` and rendered by `UrduBlock.astro`.
- **Filler content**: placeholder copy written where the source was empty is flagged `isFiller: true` in the data and surfaced with a small in-page note. The full list of placeholders to replace is in `README.md` → "Content to replace". Keep that list in sync when adding/removing filler.
- **Admissions copy** is evergreen ("open every November") — never hardcode a year. **Affiliation** is settled ("University of Karachi", no documents/accreditation section).
