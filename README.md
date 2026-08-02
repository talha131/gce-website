# Government College of Education (GCE) — Website

A fast, accessible, static website for **Government College of Education, Karachi**
— a government teacher-education college founded in **1953**, affiliated with the
**University of Karachi**. Built with **Astro** and **Tailwind CSS**, deployed as
static output on **Netlify**.

---

## Quick start

```bash
npm install       # install dependencies
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

Or use the `Makefile` shortcuts: `make dev`, `make build`, `make preview`,
`make clean`, `make deploy`. Node 22+ is recommended (see `netlify.toml`).

## Deployment

The site is deployed to **gce.edu.pk** via the Netlify CLI, pushing a
locally-built `dist/` (not Netlify's CI):

```bash
netlify link      # one-time: connect this repo to the Netlify site
make deploy       # clean → build → `netlify deploy --prod --dir=dist`
```

`make deploy` cleans first so a deploy can never ship stale or orphaned pages.

Because the deploy uses the local build, **build-time env vars (see Analytics)
must be set locally** — Netlify's own environment variables do not apply to a
CLI artifact deploy.

> ### ⚠️ `git push` also deploys
> Pushing to `master` triggers a Netlify CI build. Only push when you intend to
> deploy. GPG signing is enabled and must stay on.

## Analytics

Google Analytics 4 (`src/components/Analytics.astro`) loads **only in production
builds and only when `PUBLIC_GA_ID` is set**, so dev never pollutes analytics.
To enable it, copy `.env.example` to `.env` and set the measurement id:

```
PUBLIC_GA_ID=G-XXXXXXXXXX
```

`.env` is git-ignored. Since we deploy a local build, the id must be present in
`.env` when you run `make deploy` for it to be baked into the deployed site.

---

## Project structure

```
src/
  assets/
    brand/logo.png            college logo (processed by the image pipeline)
    content/                  photos, imported from the source folder by slug
      facilities/<slug>/…     campus facility galleries
      events/<slug>/…         student-life event galleries
      faculty/<folder>.jpg    faculty portraits
      contributors/<folder>.* student contributor portraits
      achievements/<slug>/…   achievement photos
      conference/…            ICEEC 2025 photos
      principal/principal.jpg principal portrait
  components/                 reusable UI (cards, gallery+lightbox, SEO, …)
  data/                       all site content as typed TS files
  layouts/Layout.astro        base HTML shell (head, header, footer, motion)
  lib/images.ts               resolves galleries by category/slug via glob
  pages/                      one file per route (+ dynamic [slug] routes)
  scripts/motion.ts           scroll-reveal + count-up (reduced-motion aware)
  styles/
    theme.css                 ← THE theme file (all design tokens)
    global.css                Tailwind + base styles + motion keyframes
public/                       favicon, OG image, logo.png, robots.txt
scripts/import-assets.sh      one-time importer: source photos → src/assets
Project - GCE Website/        raw source content (kept for reference; untracked)
```

---

## Re-skinning the site (theming)

**Every** colour, font, radius and shadow is defined once in
[`src/styles/theme.css`](src/styles/theme.css) as CSS custom properties. Change a
value there and it propagates across the whole site — indigo `--brand` (#2504B1)
is the dominant brand colour, gold is the accent. Tailwind utilities
(`bg-brand`, `text-ink`, `shadow-card`, …) read these tokens via `@theme` in
`global.css`. A dark-mode scaffold is included (`:root[data-theme="dark"]`).

---

## Editing content

Content lives in **`src/data/`** — plain typed TS files, no CMS:

| File | Controls |
|------|----------|
| `site.ts` | Name, contact, socials, nav, transport routes |
| `about.ts` | History, mission/vision (EN+UR), principal, anthem & dua, testimonials |
| `programs.ts` | The four academic programs |
| `faculty.ts` | Education Department & administrative staff |
| `facilities.ts` | Campus facilities |
| `events.ts` | Student-life events, and the Academics & Practicum section |
| `outlines.ts` | Course outlines by programme and semester (PDFs in `public/course-outlines/`) |
| `achievements.ts` | Alumni honours, ICEEC 2025 conference, action research |
| `contributors.ts` | Student website contributors (colophon) |

### Adding or replacing photos

Galleries are resolved automatically from folders under
`src/assets/content/<category>/<slug>/`. To add photos to a facility or event,
drop image files into the matching folder — they appear in the gallery with no
code change. `slug` in the data file must match the folder name.

The photos currently in the project were copied from the source content folder by
`scripts/import-assets.sh` (a one-time, idempotent importer). The raw source
folder `Project - GCE Website/` is kept untouched for reference.

---

## Content to replace (placeholders / filler)

Some source material was empty, so tasteful **filler content** was written to make
the site look complete. Replace the following when the college supplies final copy
and photos (each is flagged with `isFiller: true` in the data files):

- **Principal's message** (`about.ts` → `principal.message`) — a placeholder draft.
- **Testimonials** (`about.ts` → `testimonials`) — 3 filler quotes attributed to
  generic roles ("B.Ed (Hons) Graduate", "Parent", "Alumnus & Schoolteacher"),
  shown on the homepage.
- **BS Education program** (`programs.ts`) — some details are filler pending final
  curriculum copy (`isFiller: true`).
- **Science Education Centre** (`facilities.ts`) — brief filler description
  (`isFiller: true`).
- **Farewell** and **Eid Milad-un-Nabi** events (`events.ts`) — filler descriptions
  (the source folders had photos but no text; `isFiller: true`).
- **Faculty/staff without photos** (several administrative staff) — shown with an
  elegant monogram avatar. Add `src/assets/content/faculty/<Folder_Name>.jpg` to
  replace.

Everything else uses verified content from the source material. Affiliation is
settled ("Affiliated with the University of Karachi", no documents section).
Admissions copy is evergreen ("open every November", no hardcoded year).

---

## Accessibility, SEO & performance

- Lighthouse (mobile): **Accessibility 100, Best Practices 100, SEO 100**; fast
  Core Web Vitals (static output, optimized images, minimal JS).
- All motion is gated behind `prefers-reduced-motion`.
- Full keyboard navigation, visible focus rings, semantic landmarks, alt text.
- Per-page titles/descriptions, canonical URLs, Open Graph + Twitter cards,
  `EducationalOrganization` / `CollegeOrUniversity` JSON-LD, `robots.txt` and a
  `sitemap.xml` generated from the built pages by `scripts/generate-sitemap.mjs`,
  which runs automatically at the end of every `astro build` (wired as an Astro
  integration), so it ships on every build path including Netlify's CI build.

---

Designed & developed by [Talha Mansoor](https://talhamansoor.com).
