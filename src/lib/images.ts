import type { ImageMetadata } from 'astro';

/*
 * Central image registry. Every image under src/assets/content is eagerly
 * globbed once, so pages/components can look up galleries by
 * `<category>/<slug>` without hard-coding individual filenames. Dropping new
 * photos into the right folder makes them appear automatically.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/content/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
  { eager: true },
);

// path -> ImageMetadata
const byPath = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  byPath.set(path, mod.default);
}

const BASE = '/src/assets/content';

/**
 * All images inside a gallery folder, sorted by filename.
 * Pass a slug for nested folders ("facilities", "library"), or omit it to read
 * images sitting directly under a category folder ("conference").
 */
export function getGallery(category: string, slug?: string): ImageMetadata[] {
  const prefix = slug ? `${BASE}/${category}/${slug}/` : `${BASE}/${category}/`;
  return Object.keys(modules)
    .filter((p) => p.startsWith(prefix) && !p.slice(prefix.length).includes('/'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((p) => byPath.get(p)!)
    .filter(Boolean);
}

/** The first image of a gallery folder, or undefined if the folder is empty. */
export function getCover(category: string, slug: string): ImageMetadata | undefined {
  return getGallery(category, slug)[0];
}

/** A single named image, e.g. getSingle("faculty", "Prof_Talha_Mansoor"). */
export function getSingle(category: string, name: string): ImageMetadata | undefined {
  const prefix = `${BASE}/${category}/${name}.`;
  const match = Object.keys(modules).find((p) => p.startsWith(prefix));
  return match ? byPath.get(match) : undefined;
}
