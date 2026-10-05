/*
 * Publications by GCE faculty — a book, lecture handouts, course notes — each
 * with a page of its own under /student-resources/<slug> that credits the
 * author and carries a page-turning reader per edition or handout. Page
 * images are rendered by scripts/render-book.py into
 * /public/books/<slug>/<edition>/ (see src/lib/flipbook.ts).
 *
 * The details below are taken from the publication itself: for the book, its
 * imprint page, acknowledgement, foreword and back cover.
 */
import type { FlipbookSource } from '@/lib/flipbook';

// Prof. Habib-un-Nabi's handouts are offered for download from where the
// Student Resources page lists them, not copied under /books.
const habibUnNabi = (file: string) => `/student-resources/prof-habib-un-nabi/${file}.pdf`;

export interface FacultyBook {
  slug: string;
  title: string;
  /** The title as printed on the Urdu edition. */
  titleUrdu?: string;
  /** What it is, as it reads after the title: 'a textbook'. Opens the hero lead, capitalised. */
  kind: string;
  /** The rest of the hero lead, after "<Kind> by <author>, <designation> at GCE — ". */
  readLead: string;
  /** The hero button that jumps to the reader, and the reader section's title. */
  readLabel: string;
  /** What the tabs switch between, for screen readers: 'Edition', 'Handout'. */
  tabsLabel: string;
  /** Search-result description; by default "<title>, <kind> by <author> of GCE, Karachi. Read the <editions> online." */
  description?: string;
  /** Front-cover image for the hero — a name under src/assets/content/resources/. */
  cover?: string;
  /** faculty.ts `folder` of the author — for the portrait, designation and qualifications, and `former` (retired, transferred) if they have left. */
  authorFolder: string;
  /** A line under the author's qualifications, e.g. a role in the college, ending in an optional link. */
  authorNote?: { text: string; link?: { href: string; label: string } };
  /** Other people credited on the imprint page. */
  credits: { role: string; name: string; note?: string }[];
  /** Short description of the publication. */
  about: string[];
  /** A line in the author's own words, and where it comes from. */
  authorQuote?: { text: string; source: string };
  details: { label: string; value: string }[];
  editions: { key: string; label: string; book: FlipbookSource }[];
}

export const facultyBooks: FacultyBook[] = [
  {
    slug: 'teaching-of-social-studies',
    title: 'Teaching of Social Studies',
    titleUrdu: 'تدریسِ معاشرتی علوم',
    kind: 'a textbook',
    readLead: 'read the whole book online, with pages that turn like the printed copy.',
    readLabel: 'Read the book',
    tabsLabel: 'Edition',
    cover: 'teaching-of-social-studies-front',
    authorFolder: 'Prof_Farah_Kanwal',
    authorNote: { text: 'In-charge,', link: { href: '/campus/teachers-resource-centre', label: 'Teachers’ Resource Centre' } },
    credits: [
      { role: 'Author', name: 'Prof. Farah Kanwal' },
      { role: 'Assistant writer & composition', name: 'Fatima Siddiqui', note: 'GCE alumna, Batch 2022–2025' },
    ],
    about: [
      'A textbook for the Teaching of Social Studies course, written strictly according to the University of Karachi’s prescribed syllabus for the B.Ed. Elementary and Secondary examinations of 2023 and onward.',
      'It explores the social studies teacher’s role as a model of democratic citizenship, and the classroom strategies that encourage critical thinking and the formation of values — helping prospective teachers develop their own approach to teaching the subject.',
      'The Urdu edition opens with a foreword by Prof. Dr. Naveed Rab Siddiqui, then Principal of the college, congratulating Prof. Farah Kanwal on bringing so comprehensive a body of material together in one book.',
    ],
    authorQuote: {
      text: 'My motive to write this book is that all the contents can be found in a single binding rather than in different pieces of paper and websites and easy for the readers.',
      source: 'from the book’s acknowledgement',
    },
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
  {
    // Lecture slides, exported to PDF; the details are taken from the slides.
    slug: 'lecture-handouts-prof-habib-un-nabi',
    title: 'Lecture Handouts',
    kind: 'three lecture handouts',
    readLead: 'read each one online, slide by slide, with pages that turn like a printed copy.',
    readLabel: 'Read the handouts',
    tabsLabel: 'Handout',
    description:
      'Three lecture handouts by Prof. Habib-un-Nabi of Government College of Education, Karachi — Basics of Lecture Method, Working with Group and Individuals, and Hadith and Its Types (in Urdu). Read them online or download the PDFs.',
    authorFolder: 'Prof_Habib_un_Nabi',
    credits: [{ role: 'Prepared by', name: 'Prof. Habib-un-Nabi' }],
    about: [
      'Three sets of lecture slides by Prof. Habib-un-Nabi for B.Ed. students — two in English on methods of teaching, and one in Urdu on the science of Hadith.',
      'Basics of Lecture Method introduces the most commonly used method of teaching: planning a lecture around four questions — who the audience is, why, how long and on what — what a good lecturer takes care of, from time and subject matter to posture, voice, vocabulary and audio-visual aids, how to organise and evaluate a lecture, and its advantages and disadvantages.',
      'Working with Group and Individuals, a lecture for the General Method of Teaching course, weighs individual work against pair and group work: what each helps students learn, and why a teacher varies the grouping to suit the goals of an activity.',
      'Hadith and Its Types, compiled in Urdu, explains what hadith is and how it is classified — by its nature, by where its chain of narration ends, by the number of its narrators, by the continuity of its chain and by whether it can be relied on — and closes with the six canonical collections, the Sihah Sittah, and their compilers.',
    ],
    details: [
      { label: 'Format', value: 'Lecture slides, three handouts' },
      { label: 'Languages', value: 'Two in English, one in Urdu' },
      { label: 'Working with Group and Individuals', value: 'General Method of Teaching (DTE-550/361), Unit 2 — B.Ed. 2.5 and 4 Year' },
    ],
    editions: [
      {
        key: 'basics-of-lecture-method',
        label: 'Basics of Lecture Method',
        book: {
          title: 'Basics of Lecture Method',
          edition: 'Lecture slides',
          path: '/books/lecture-handouts-prof-habib-un-nabi/basics-of-lecture-method',
          pageCount: 37,
          pageWidth: 2133,
          pageHeight: 1600,
          covers: false,
          lang: 'en',
          pdf: { href: habibUnNabi('basics-of-lecture-method'), label: 'Download PDF' },
        },
      },
      {
        key: 'working-with-group-and-individuals',
        label: 'Working with Group and Individuals',
        book: {
          title: 'Working with Group and Individuals',
          edition: 'Lecture slides',
          path: '/books/lecture-handouts-prof-habib-un-nabi/working-with-group-and-individuals',
          pageCount: 11,
          pageWidth: 2133,
          pageHeight: 1600,
          covers: false,
          lang: 'en',
          pdf: { href: habibUnNabi('working-with-group-and-individuals'), label: 'Download PDF' },
        },
      },
      {
        key: 'hadith-and-its-types',
        label: 'Hadith and Its Types',
        book: {
          title: 'Hadith and Its Types',
          edition: 'Lecture slides, in Urdu',
          path: '/books/lecture-handouts-prof-habib-un-nabi/hadith-and-its-types',
          pageCount: 37,
          pageWidth: 2133,
          pageHeight: 1600,
          covers: false,
          rtl: true,
          lang: 'ur',
          pdf: { href: habibUnNabi('hadith-and-its-types'), label: 'Download PDF' },
        },
      },
    ],
  },
  {
    // Course notes for self-study; the details are taken from their title
    // pages and running footers ("compiled by Prof. Habib Ahmed"). Like
    // Prof. Habib-un-Nabi's, they are downloaded from where the Student
    // Resources page lists them.
    slug: 'teaching-literacy-notes-prof-habib-ahmed',
    title: 'Teaching Literacy Notes',
    kind: 'two sets of self-study notes',
    readLead:
      'compiled for the Teaching Literacy course (DTE-411) of the B.Ed. (Hons) 4 Year programme, 3rd semester. Read each one online, with pages that turn like a printed copy.',
    readLabel: 'Read the notes',
    tabsLabel: 'Notes',
    description:
      'Teaching Literacy notes compiled by Prof. Dr. Habib Ahmed of Government College of Education, Karachi, for B.Ed. (Hons) 4 Year, 3rd semester — Teaching Literacy Skills, and 200 short question answers. Read them online or download the PDFs.',
    authorFolder: 'Prof_Habib_Ahmed',
    credits: [{ role: 'Compiled by', name: 'Prof. Dr. Habib Ahmed' }],
    about: [
      'Two sets of notes compiled by Prof. Dr. Habib Ahmed for self-study in the Teaching Literacy course, taken by B.Ed. (Hons) 4 Year students in their 3rd semester. Both follow the course’s three units: what reading and writing are; growing up to read and write, in the early years; and becoming readers and writers in classes 1 to 3.',
      'Teaching Literacy Skills opens with the course outcomes and works through each unit in prose — literacy, skilled reading and skilled writing; the components of reading and the sub-systems of language; learning to read and write in a multilingual context, the home–school connection, and the stages of second-language acquisition and of reading, spelling and writing development; phonological awareness, the alphabetic principle, word recognition and the literacy-rich, print-rich classroom; and strategies for fluency, vocabulary and comprehension, matching texts to students, guided reading, and writing as a window into reading.',
      'Short Question Answers goes over the same ground as 200 short questions, each with a brief answer, for revision — from “What is reading?” to how teachers can bring writing into reading instruction.',
    ],
    details: [
      { label: 'Format', value: 'Self-study notes, two sets' },
      { label: 'Course', value: 'Teaching Literacy (DTE-411) — B.Ed. (Hons) 4 Year, 3rd semester' },
      { label: 'Language', value: 'English' },
    ],
    editions: [
      {
        key: 'teaching-literacy-skills',
        label: 'Teaching Literacy Skills',
        book: {
          title: 'Teaching Literacy Skills',
          edition: 'Self-study notes',
          path: '/books/teaching-literacy-notes-prof-habib-ahmed/teaching-literacy-skills',
          pageCount: 20,
          pageWidth: 1236,
          pageHeight: 1600,
          covers: false,
          lang: 'en',
          pdf: { href: '/student-resources/notes/bed-hons-4-year/teaching-literacy-skills.pdf', label: 'Download PDF' },
        },
      },
      {
        key: 'short-question-answers',
        label: 'Short Question Answers',
        book: {
          title: 'Short Question Answers',
          edition: 'Teaching Literacy, for self-study',
          path: '/books/teaching-literacy-notes-prof-habib-ahmed/short-question-answers',
          pageCount: 22,
          pageWidth: 1236,
          pageHeight: 1600,
          covers: false,
          lang: 'en',
          pdf: {
            href: '/student-resources/notes/prof-habib-ahmed/short-question-answers-teaching-literacy-4-year.pdf',
            label: 'Download PDF',
          },
        },
      },
    ],
  },
];

export const bookBySlug = (slug: string) => facultyBooks.find((b) => b.slug === slug);
