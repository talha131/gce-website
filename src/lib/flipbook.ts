/*
 * A book the Flipbook component can read: pre-rendered page images under
 * /public<path>/pages/NNN.webp (and thumbs/NNN.webp), numbered from 001 in
 * reading order. See scripts/render-magazine.py (cover spreads + body) and
 * scripts/render-book.py (a plain book PDF, optionally with cover photos).
 */
export interface FlipbookSource {
  title: string;
  /** Shown under the title, e.g. '2024 issue' or 'English edition'. */
  edition: string;
  /** Public folder holding pages/ and thumbs/. */
  path: string;
  pageCount: number;
  /** Pixel size of the page images; sets the book's aspect ratio. */
  pageWidth: number;
  pageHeight: number;
  /** First and last pages are the covers: turned as hard covers, labelled so. */
  covers: boolean;
  /** Right-to-left binding (Urdu): the book opens from the right. */
  rtl?: boolean;
  /** Language of the book's text, for the reader's lang attribute. */
  lang?: string;
  /** Optional download of the whole book, offered under the reader. */
  pdf?: { href: string; label: string };
}
