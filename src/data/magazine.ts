/*
 * College magazine issues readable in the flipbook on the magazine page.
 *
 * Page images live under /public<path>/pages/NNN.webp (1600px tall) with
 * thumbnails in /public<path>/thumbs/NNN.webp, numbered from 001. They are
 * rendered from the print PDFs by scripts/render-magazine.py, which also puts
 * the pages in book order (front cover first, back cover last). The PDFs
 * themselves are not published: the magazine is read online, not downloaded.
 */

export interface MagazineIssue {
  title: string;
  /** Shown under the title, e.g. the year on the cover. */
  edition: string;
  /** Public folder holding pages/ and thumbs/. */
  path: string;
  pageCount: number;
  /** Pixel size of the page images; sets the book's aspect ratio. */
  pageWidth: number;
  pageHeight: number;
}

export const magazineIssues = {
  'mashal-e-ilm-2024': {
    title: 'Mashal-e-Ilm',
    edition: '2024 issue',
    path: '/magazine/mashal-e-ilm',
    pageCount: 82,
    pageWidth: 1132,
    pageHeight: 1600,
  },
} satisfies Record<string, MagazineIssue>;

export type MagazineIssueKey = keyof typeof magazineIssues;
