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

`make deploy` runs `clean → build` then pushes `dist/` to production (gce.edu.pk) via `netlify deploy --prod --dir=dist` — it does **not** use Netlify's CI (the clean guards against shipping stale/orphaned pages, though Astro already empties `dist/` per build and Netlify deploys are atomic snapshots). Consequence: **build-time env vars must be set locally**, not just in the Netlify dashboard.

## Critical constraint — do not deploy

Pushing to `master` triggers a Netlify build. **Never `git push`** unless the user explicitly says to. Commit locally in small logical units; the owner pushes manually. GPG signing is on — never disable it.

## Releases & tags

Release tags use **Semantic Versioning** (SemVer): `vMAJOR.MINOR.PATCH`, e.g. `v1.0.0`.

- **Tag on major and minor releases only** — `vX.0.0` (major) and `vX.Y.0` (minor). Do **not** tag every patch or every deploy.
- Tags are **annotated and GPG-signed**: `git tag -s v1.1.0 -m "<summary>"` (matches the signed-commit posture).
- Keep `package.json` `version` in step with the latest release tag (same number, without the leading `v`).
- **Claude owns versioning and release tags.** When work is ready to ship, Claude judges the SemVer level from the changes, bumps `package.json` `version`, commits it, and creates + pushes the signed tag at release time — no per-release prompting needed.
- **`make deploy` auto-tags** as a convenience: after a successful deploy it tags `vX.Y.0` from `package.json` if not already tagged (patches and existing tags skipped). Deploying by **pushing to `master`** (Netlify CI) does **not** auto-tag — for those, Claude creates and pushes the tag by hand (`git tag -s vX.Y.0 -m "..."; git push origin vX.Y.0`).
- **Push boundary:** Claude may create and push **tags** for releases without asking; Claude must **not** push commits or advance `master` without explicit say-so — deploying stays the owner's trigger.
- History: `v1.0.0` is the first SemVer tag. `v0-archive` and `pre-phase-1-review-fixes` are pre-SemVer historical markers — leave them as-is.
- The footer's bottom bar shows `v<package.json version>`, read at build time (`src/components/Footer.astro`) — keeping `package.json` in step with tags keeps the footer right too.

## Architecture

### Content lives in typed data files, not in pages

All site content is in `src/data/*.ts` (plain typed TS, no content collections). Pages import these arrays/objects and render them. To change copy, add a program, a faculty member, an event, etc., edit the data file — **not** the `.astro` page. Key files: `site.ts` (identity/nav/socials/transport), `about.ts` (history, mission/vision EN+UR, principal, anthem/dua), `testimonials.ts` (alumni testimonials on the homepage), `programs.ts`, `faculty.ts`, `facilities.ts`, `events.ts`, `outlines.ts`, `resources.ts` (Student Resources Center), `magazine.ts` (flipbook issues), `books.ts` (faculty publications — books, lecture handouts, course notes — with their own reader pages), `achievements.ts`, `contributors.ts`.

Downloadable documents (course-outline PDFs, student-resource PDFs, research papers, the admission form) are **not** in `src/assets` — they live under `public/` and are referenced by absolute path from the data files, so they ship byte-for-byte rather than through the image pipeline. The one exception is scanned past papers: phone scans saved losslessly run to 3–6 MB a page, so they go through `scripts/shrink-scanned-pdf.py` (JPEG re-encode at native resolution, ~15× smaller) before landing in `public/student-resources/`. The magazine is published as page images, not PDF: `scripts/render-magazine.py` turns an issue's print PDFs (cover spreads with crop marks + A4 body) into `public/magazine/<issue>/pages|thumbs/NNN.webp` in book order, and `Flipbook.astro` (StPageFlip) reads them, loading a few pages around the one open. `scripts/pages-to-pdf.py` binds those pages into the one merged PDF offered as a download. Faculty publications use the same reader: `scripts/render-book.py` renders a plain book PDF or slide deck (optionally wrapping it in photographed covers, and writing a lossless merged PDF) into `public/books/<slug>/<edition>/`; an Urdu edition or handout sets `rtl` so it turns right-to-left. The author page (`student-resources/[slug].astro`) takes all its wording from the `books.ts` entry, so a new kind of publication needs no page changes.

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

Detail pages are generated with `getStaticPaths` from the data arrays: `programs/[slug]`, `campus/[slug]` (facilities), `student-life/[slug]` and `academics/[slug]` (events). Adding an item to the data array + a matching image folder automatically creates its detail page and gallery.

Events are one array but two sections: the `Academics` group is a **top-level** section (`/academics`), everything else lives under Student Life. `eventHref()` in `events.ts` is the single source of truth for which prefix an event hangs off — never hardcode `/student-life/<slug>`. Both `[slug]` routes render the shared `EventDetail.astro`.

### Analytics

`Analytics.astro` (in `Layout` head) injects GA4 **only when `import.meta.env.PROD` and `PUBLIC_GA_ID` is set** — so dev builds and un-configured builds emit nothing. The id comes from a git-ignored `.env` (`PUBLIC_GA_ID=G-…`, see `.env.example`); it must be present locally at `make deploy` time to reach the deployed site.

### SEO

`SEO.astro` (in `Layout`) emits per-page title/description, canonical, OG/Twitter, and site-wide `CollegeOrUniversity` JSON-LD from `site.ts`. `scripts/generate-sitemap.mjs` runs automatically at the end of **every** `astro build` (wired as an integration in `astro.config.mjs`), walking the built `dist/` to write `dist/sitemap.xml` — so the sitemap ships on every build path, including Netlify's CI build (`netlify.toml` runs `npm run build`), not just `make deploy`. `astro.config.mjs` `site` is the canonical origin. Developer attribution (Talha Mansoor) is a real visible dofollow footer credit — keep it; no hidden-SEO tricks.

**Share images (og:image).** Every page passes its own link-preview image to `Layout` as `image={shareImage(picture, alt, layout?)}` (`src/lib/og.ts`), made from a picture the page already shows — its PageHero photo, the author's portrait, the event/facility's first photo. Event and facility choices live in `src/lib/share.ts` (`eventShareImage`, `facilityShareImage`) because their group pages reuse them. `shareImage()` only builds a URL, `/og/<layout>/<source path>.<hash>.jpg`; `scripts/share-images.mjs` renders it with sharp at the end of **every** build (an `astro.config.mjs` integration, like the sitemap — it reads the og:image URLs back out of `dist/`) and serves `/og/*` on the fly in `npm run dev`. Output is a 1200×630 JPEG, re-encoded down until it is under 280 KB (WhatsApp ignores much larger images or WebP). Layouts: `cover` crops a photo to fill (`focusY` moves the crop like `imagePosition`); `card` shows the whole picture on the indigo card with the crest — use it for portraits, covers, posters, logos so heads are never cut off; the default `auto` picks `cover` for landscape pictures and `card` otherwise. A picture can be any image under `src/assets` (pass the ImageMetadata) or a `/public` path (must name `cover`/`card`). Pages that pass nothing fall back to `public/og-default.png`. `og.ts` looks images up by identity and reads metadata through Astro's untracked `clone` — reading `.src`/`.width` directly would make Astro ship every full-size original. Bump `RECIPE` in `og.ts` after changing how the images are drawn, so crawlers fetch the new URLs.

## Conventions

- **Urdu**: any Urdu block needs `lang="ur" dir="rtl"`; `global.css` then applies Nastaliq + RTL + generous line-height automatically. Poetry is stored as arrays of couplets (arrays of lines) in `about.ts` and rendered by `UrduBlock.astro`.
- **Filler content**: placeholder copy written where the source was empty is flagged `isFiller: true` in the data as an internal tracking flag (no visible in-page note). The full list of placeholders to replace is in `README.md` → "Content to replace". Keep that list in sync when adding/removing filler.
- **Admissions copy** is evergreen ("open every November") — never hardcode a year. **Affiliation** is settled ("University of Karachi", no documents/accreditation section).
