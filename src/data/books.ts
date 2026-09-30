/*
 * Books written by GCE faculty, each with a page of its own under
 * /student-resources/<slug> that credits the author and carries a page-turning
 * reader. Page images are rendered by scripts/render-book.py into
 * /public/books/<slug>/<edition>/ (see src/lib/flipbook.ts).
 *
 * The details below are taken from the book itself: its imprint page,
 * acknowledgement, foreword and back cover.
 */
import type { FlipbookSource } from '@/lib/flipbook';

export interface FacultyBook {
  slug: string;
  title: string;
  /** The title as printed on the Urdu edition. */
  titleUrdu?: string;
  /** faculty.ts `folder` of the author — for her portrait, designation and qualifications. */
  authorFolder: string;
  /** Other people credited on the imprint page. */
  credits: { role: string; name: string; note?: string }[];
  /** Short description of the book. */
  about: string[];
  /** A line in the author's own words, from the book's acknowledgement. */
  authorQuote: string;
  details: { label: string; value: string }[];
  editions: { key: string; label: string; book: FlipbookSource }[];
}

export const facultyBooks: FacultyBook[] = [
  {
    slug: 'teaching-of-social-studies',
    title: 'Teaching of Social Studies',
    titleUrdu: 'تدریسِ معاشرتی علوم',
    authorFolder: 'Prof_Farah_Kanwal',
    credits: [
      { role: 'Author', name: 'Prof. Farah Kanwal' },
      { role: 'Assistant writer & composition', name: 'Fatima Siddiqui', note: 'GCE alumna, Batch 2022–2025' },
    ],
    about: [
      'A textbook for the Teaching of Social Studies course, written strictly according to the University of Karachi’s prescribed syllabus for the B.Ed. Elementary and Secondary examinations of 2023 and onward.',
      'It explores the social studies teacher’s role as a model of democratic citizenship, and the classroom strategies that encourage critical thinking and the formation of values — helping prospective teachers develop their own approach to teaching the subject.',
      'The Urdu edition opens with a foreword by Prof. Dr. Naveed Rab Siddiqui, then Principal of the college, congratulating Prof. Farah Kanwal on bringing so comprehensive a body of material together in one book.',
    ],
    authorQuote:
      'My motive to write this book is that all the contents can be found in a single binding rather than in different pieces of paper and websites and easy for the readers.',
    details: [
      { label: 'Edition', value: 'First edition, August 2023' },
      { label: 'Syllabus', value: 'University of Karachi — B.Ed. Elementary & Secondary, 2023 onward' },
      { label: 'Languages', value: 'English and Urdu editions' },
      { label: 'Published by', value: 'A One Book, Urdu Bazar, M.A. Jinnah Road, Karachi' },
    ],
    editions: [
      {
        key: 'english',
        label: 'English edition',
        book: {
          title: 'Teaching of Social Studies',
          edition: 'English edition',
          path: '/books/teaching-of-social-studies/english',
          pageCount: 141,
          pageWidth: 1236,
          pageHeight: 1600,
          covers: true,
          lang: 'en',
          pdf: {
            href: '/books/teaching-of-social-studies/english/teaching-of-social-studies-english.pdf',
            label: 'Download PDF',
          },
        },
      },
      {
        key: 'urdu',
        label: 'Urdu edition',
        book: {
          title: 'Teaching of Social Studies',
          edition: 'Urdu edition',
          path: '/books/teaching-of-social-studies/urdu',
          pageCount: 144,
          pageWidth: 1133,
          pageHeight: 1600,
          covers: false,
          rtl: true,
          lang: 'ur',
          pdf: { href: '/student-resources/prof-farah-kanwal/teaching-of-social-studies-urdu.pdf', label: 'Download PDF' },
        },
      },
    ],
  },
];

export const bookBySlug = (slug: string) => facultyBooks.find((b) => b.slug === slug);
