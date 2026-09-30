/*
 * College magazine issues readable in the flipbook on the magazine page.
 *
 * Page images live under /public<path>/pages/NNN.webp (1600px tall) with
 * thumbnails in /public<path>/thumbs/NNN.webp, numbered from 001. They are
 * rendered from the print PDFs by scripts/render-magazine.py, which also puts
 * the pages in book order (front cover first, back cover last). The print
 * PDFs themselves are not published (130 MB): the magazine is read online, and
 * scripts/pages-to-pdf.py binds the same pages into one merged PDF, offered as
 * an optional download from the reader.
 */

import type { FlipbookSource } from '@/lib/flipbook';

export const magazineIssues = {
  'mashal-e-ilm-2024': {
    title: 'Mashal-e-Ilm',
    edition: '2024 issue',
    path: '/magazine/mashal-e-ilm',
    pageCount: 82,
    pageWidth: 1132,
    pageHeight: 1600,
    covers: true,
    pdf: { href: '/magazine/mashal-e-ilm/mashal-e-ilm-2024.pdf', label: 'Download the full issue (PDF)' },
  },
} satisfies Record<string, FlipbookSource>;

export type MagazineIssueKey = keyof typeof magazineIssues;
