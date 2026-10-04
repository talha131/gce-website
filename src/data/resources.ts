/*
 * Student Resources Center — study material students can read and download,
 * mirroring the college's 19_Student_Resource_Center Drive folder section for
 * section and subfolder for subfolder.
 *
 * PDFs live under /public/student-resources/ (served byte-for-byte). Scanned
 * past papers were re-encoded as JPEG at their native scan resolution on
 * import — they were stored losslessly at 3–6 MB a page — which cut them from
 * ~613 MB to a fraction of that with no visible loss. Book cover images live
 * under src/assets/content/resources/.
 *
 * A group with no `files` is a Drive subfolder the college has created but
 * not filled yet; the page lists it as "being added".
 */

export interface ResourceFile {
  title: string;
  /** University course code, e.g. 'DTE-331'. */
  code?: string;
  /** Absolute path under /public. */
  pdf: string;
}

export interface ResourceGroup {
  title: string;
  /** Optional one-liner under the group heading. */
  note?: string;
  files?: ResourceFile[];
}

export interface ResourceSection {
  slug: string;
  title: string;
  /** Short label for the jump nav. */
  shortTitle: string;
  blurb: string;
  /** Cover images for a single-publication section — names under resources/. */
  covers?: { name: string; alt: string }[];
  /** A page where the section's book can be read online (see books.ts). */
  readOnline?: { href: string; label: string };
  groups: ResourceGroup[];
}

const pp = (sem: number, file: string) => `/student-resources/past-papers/bed-4-year/semester-${sem}/${file}.pdf`;
const notes = (file: string) => `/student-resources/notes/bed-hons-4-year/${file}.pdf`;

export const resourceSections: ResourceSection[] = [
  {
    slug: 'notes',
    title: 'Notes',
    shortTitle: 'Notes',
    blurb: 'Course notes written up by students, shared for everyone who takes the course after them.',
    groups: [
      {
        title: 'Notes by students — B.Ed. (Hons.) 4 Year',
        files: [
          { title: 'Comparative Education', pdf: notes('comparative-education') },
          { title: 'Contemporary Issues and Trends in Education', pdf: notes('contemporary-issues-and-trends-in-education') },
          { title: 'Curriculum Development', pdf: notes('curriculum-development') },
          { title: 'Elementary Education', pdf: notes('elementary-education') },
          { title: 'English III (Technical Writing and Presentation Skills)', pdf: notes('english-iii-technical-writing-and-presentation-skills') },
          { title: 'Foundation of Education', pdf: notes('foundation-of-education') },
          { title: 'Introduction to Guidance and Counselling', pdf: notes('introduction-to-guidance-and-counselling') },
          { title: 'School, Community and Teacher', pdf: notes('school-community-and-teacher') },
          { title: 'Teaching Literacy Skills', pdf: notes('teaching-literacy-skills') },
          { title: 'Teaching of English', pdf: notes('teaching-of-english') },
          { title: 'Teaching of Islamic Studies', pdf: notes('teaching-of-islamic-studies') },
          { title: 'Teaching of Maths', pdf: notes('teaching-of-maths') },
        ],
      },
      { title: 'Prof. Habib Ahmed’s notes' },
    ],
  },
  {
    slug: 'past-papers',
    title: 'Past Papers',
    shortTitle: 'Past Papers',
    blurb: 'University of Karachi examination papers from previous years, semester by semester, to practise with before the real thing.',
    groups: [
      {
        title: 'B.Ed. 4 Year — Semester 1',
        files: [
          { title: 'Child Development', code: 'DTE-331', pdf: pp(1, 'child-development-dte-331') },
          { title: 'English I (Functional English)', code: 'DTE-311', pdf: pp(1, 'english-i-functional-english-dte-311') },
          { title: 'General Method of Teaching', code: 'DTE-361', pdf: pp(1, 'general-method-of-teaching-dte-361') },
          { title: 'General Science', code: 'DTE-351', pdf: pp(1, 'general-science-dte-351') },
          { title: 'Islamic Studies', code: 'DTE-321', pdf: pp(1, 'islamic-studies-dte-321') },
          { title: 'Urdu', code: 'DTE-341', pdf: pp(1, 'urdu-dte-341') },
        ],
      },
      {
        title: 'B.Ed. 4 Year — Semester 2',
        files: [
          { title: 'Classroom Management', code: 'DTE-332', pdf: pp(2, 'classroom-management-dte-332') },
          { title: 'Computer Literacy', code: 'DTE-322', pdf: pp(2, 'computer-literacy-dte-322') },
          { title: 'English II (Communication Skills)', code: 'DTE-312', pdf: pp(2, 'english-ii-communication-skills-dte-312') },
          { title: 'General Mathematics', code: 'DTE-342', pdf: pp(2, 'general-mathematics-dte-342') },
          { title: 'Methods of Teaching Islamic Studies', code: 'DTE-362', pdf: pp(2, 'methods-of-teaching-islamic-studies-dte-362') },
          { title: 'Pakistan Studies', code: 'DTE-352', pdf: pp(2, 'pakistan-studies-dte-352') },
        ],
      },
      {
        title: 'B.Ed. 4 Year — Semester 3',
        files: [
          { title: 'Art, Crafts and Calligraphy', code: 'DTE-421', pdf: pp(3, 'art-crafts-and-calligraphy-dte-421') },
          { title: 'ICT in Education', code: 'DTE-451', pdf: pp(3, 'ict-in-education-dte-451') },
          { title: 'Teaching Literacy Skills', code: 'DTE-411', pdf: pp(3, 'teaching-literacy-skills-dte-411') },
          { title: 'Teaching of General Science', code: 'DTE-441', pdf: pp(3, 'teaching-of-general-science-dte-441') },
          { title: 'Teaching of Urdu', code: 'DTE-431', pdf: pp(3, 'teaching-of-urdu-dte-431') },
        ],
      },
      {
        title: 'B.Ed. 4 Year — Semester 4',
        files: [
          { title: 'Classroom Assessment', code: 'DTE-412', pdf: pp(4, 'classroom-assessment-dte-412') },
          { title: 'School, Community and Teacher', code: 'DTE-442', pdf: pp(4, 'school-community-and-teacher-dte-442') },
          { title: 'Teaching of English', code: 'DTE-422', pdf: pp(4, 'teaching-of-english-dte-422') },
          { title: 'Teaching of Mathematics', code: 'DTE-432', pdf: pp(4, 'teaching-of-mathematics-dte-432') },
          { title: 'Teaching of Social Studies', code: 'DTE-452', pdf: pp(4, 'teaching-of-social-studies-dte-452') },
        ],
      },
      {
        title: 'B.Ed. 4 Year — Semester 5',
        files: [
          { title: 'Biology', code: 'DTE-541', pdf: pp(5, 'biology-dte-541') },
          { title: 'Curriculum Development', code: 'DTE-551', pdf: pp(5, 'curriculum-development-dte-551') },
          { title: 'Educational Psychology', code: 'DTE-561', pdf: pp(5, 'educational-psychology-dte-561') },
          { title: 'English III (Technical Writing and Professional Skills)', code: 'DTE-511', pdf: pp(5, 'english-iii-technical-writing-and-professional-skills-dte-511') },
          { title: 'Foundation of Education', code: 'DTE-521', pdf: pp(5, 'foundation-of-education-dte-521') },
        ],
      },
      {
        title: 'B.Ed. 4 Year — Semester 6',
        files: [
          { title: 'Comparative Education', code: 'DTE-542', pdf: pp(6, 'comparative-education-dte-542') },
          { title: 'Contemporary Issues and Trends in Education', code: 'DTE-512', pdf: pp(6, 'contemporary-issues-and-trends-in-education-dte-512') },
          { title: 'Elementary Education', code: 'DTE-562', pdf: pp(6, 'elementary-education-dte-562') },
          { title: 'Introduction to Guidance and Counseling', code: 'DTE-552', pdf: pp(6, 'introduction-to-guidance-and-counseling-dte-552') },
        ],
      },
      {
        title: 'B.Ed. 4 Year — Semester 7',
        files: [{ title: 'Research Methods', code: 'DTE-651', pdf: pp(7, 'research-methods-dte-651') }],
      },
      {
        title: 'B.Ed. 4 Year — Semester 8',
        files: [
          { title: 'Inclusive Education', code: 'DTE-652', pdf: pp(8, 'inclusive-education-dte-652') },
          { title: 'School Management', code: 'DTE-612', pdf: pp(8, 'school-management-dte-612') },
          { title: 'Test Development and Evaluation', code: 'DTE-622', pdf: pp(8, 'test-development-and-evaluation-dte-622') },
        ],
      },
      { title: 'B.Ed. 2.5 Year — Semesters 1 to 5' },
    ],
  },
  {
    slug: 'prof-farah-kanwal',
    title: 'Teaching of Social Studies — by Prof. Farah Kanwal',
    shortTitle: 'Prof. Farah Kanwal',
    blurb:
      'A textbook by GCE’s own Prof. Farah Kanwal, written strictly to the University of Karachi syllabus for B.Ed. Elementary and Secondary examinations (2023 and onward). Published in English and in Urdu.',
    readOnline: { href: '/student-resources/teaching-of-social-studies', label: 'Read the book online' },
    covers: [
      { name: 'teaching-of-social-studies-front', alt: 'Teaching of Social Studies by Professor Farah Kanwal — front cover' },
      { name: 'teaching-of-social-studies-back', alt: 'Teaching of Social Studies — back cover' },
    ],
    groups: [
      {
        title: 'The book',
        files: [
          { title: 'Teaching of Social Studies — English edition', pdf: '/books/teaching-of-social-studies/english/teaching-of-social-studies-english.pdf' },
          { title: 'Teaching of Social Studies — Urdu edition', pdf: '/student-resources/prof-farah-kanwal/teaching-of-social-studies-urdu.pdf' },
        ],
      },
    ],
  },
  {
    slug: 'prof-habib-un-nabi',
    title: 'Lecture notes — by Prof. Habib-un-Nabi',
    shortTitle: 'Prof. Habib-un-Nabi',
    blurb: 'Handouts from Prof. Habib-un-Nabi’s classes, free to read and download.',
    groups: [
      {
        title: 'Handouts',
        files: [
          { title: 'Basics of Lecture Method', pdf: '/student-resources/prof-habib-un-nabi/basics-of-lecture-method.pdf' },
          { title: 'Hadith and Its Types', pdf: '/student-resources/prof-habib-un-nabi/hadith-and-its-types.pdf' },
          { title: 'Working with Group and Individuals', pdf: '/student-resources/prof-habib-un-nabi/working-with-group-and-individuals.pdf' },
        ],
      },
    ],
  },
];
