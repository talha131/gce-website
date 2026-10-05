/*
 * Share images — the picture a link preview shows (og:image / twitter:image)
 * when a page is shared on WhatsApp, Facebook, X, LinkedIn and the like.
 */

/** A share image as the SEO head describes it. */
export interface ShareImage {
  /** Site-relative path, e.g. "/og-default.png"; SEO makes it absolute. */
  url: string;
  width: number;
  height: number;
  type: 'image/jpeg' | 'image/png';
  /** What the image shows; SEO falls back to the page title. */
  alt?: string;
}

/** The site-wide card in /public, for pages with no picture of their own. */
export const defaultShareImage: ShareImage = {
  url: '/og-default.png',
  width: 1200,
  height: 630,
  type: 'image/png',
};
