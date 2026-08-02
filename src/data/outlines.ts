/*
 * Course outlines, semester by semester, for each set of outlines the college
 * currently teaches to. The PDFs live under /public/course-outlines/<slug>/ and
 * were copied out of the source Drive folder (19_Outlines) — see
 * scripts/import-assets.sh for the wider asset-import convention.
 *
 * `programSlug` links an outline set back to its entry in programs.ts where one
 * exists (the two 4-year sets share a single program).
 */

export interface OutlineCourse {
  title: string;
  /** University course code, where the outline carries one (2.5-year sets). */
  code?: string;
  /** Absolute path under /public. */
  pdf: string;
}

export interface OutlineSemester {
  n: number;
  courses: OutlineCourse[];
}

export interface OutlineSet {
  slug: string;
  /** Full heading, e.g. 'B.Ed. (Hons.) 4 Years — New Outlines 2026'. */
  name: string;
  /** Short label for the jump nav. */
  shortName: string;
  /** Which program in programs.ts this belongs to. */
  programSlug: string;
  /** One line under the heading. */
  blurb: string;
  /** Optional whole-programme document (scheme of subjects, combined outline). */
  document?: { label: string; pdf: string };
  semesters: OutlineSemester[];
}

export const outlineSets: OutlineSet[] = [
  {
    slug: 'bed-4-year-pre-2026',
    name: 'B.Ed. (Hons.) 4 Years — Outlines before 2026',
    shortName: 'B.Ed. 4 Years (pre-2026)',
    programSlug: 'bed-hons-4-year',
    blurb:
      'The outlines followed by students who joined before the 2026 revision. Seven semesters of outlines are published; the eighth is practicum.',
    semesters: [
      {
        n: 1,
        courses: [
          { title: 'Child Development', pdf: '/course-outlines/bed-4-year-pre-2026/semester-1/child-development.pdf' },
          { title: 'Functional English I', pdf: '/course-outlines/bed-4-year-pre-2026/semester-1/functional-english-i.pdf' },
          { title: 'General Methods of Teaching', pdf: '/course-outlines/bed-4-year-pre-2026/semester-1/general-methods-of-teaching.pdf' },
          { title: 'General Science', pdf: '/course-outlines/bed-4-year-pre-2026/semester-1/general-science.pdf' },
          { title: 'Islamic Studies', pdf: '/course-outlines/bed-4-year-pre-2026/semester-1/islamic-studies.pdf' },
          { title: 'Urdu', pdf: '/course-outlines/bed-4-year-pre-2026/semester-1/urdu.pdf' },
        ],
      },
      {
        n: 2,
        courses: [
          { title: 'Classroom Management', pdf: '/course-outlines/bed-4-year-pre-2026/semester-2/classroom-management.pdf' },
          { title: 'Computer Literacy', pdf: '/course-outlines/bed-4-year-pre-2026/semester-2/computer-literacy.pdf' },
          { title: 'English II — Communication Skills', pdf: '/course-outlines/bed-4-year-pre-2026/semester-2/english-ii-communication-skills.pdf' },
          { title: 'General Mathematics', pdf: '/course-outlines/bed-4-year-pre-2026/semester-2/general-mathematics.pdf' },
          { title: 'Pakistan Studies', pdf: '/course-outlines/bed-4-year-pre-2026/semester-2/pakistan-studies.pdf' },
        ],
      },
      {
        n: 3,
        courses: [
          { title: 'Art, Craft and Calligraphy', pdf: '/course-outlines/bed-4-year-pre-2026/semester-3/art-craft-and-calligraphy.pdf' },
          { title: 'Developmental Practicum', pdf: '/course-outlines/bed-4-year-pre-2026/semester-3/developmental-practicum.pdf' },
          { title: 'ICTs in Education', pdf: '/course-outlines/bed-4-year-pre-2026/semester-3/information-and-communication-technologies-icts-in-education.pdf' },
          { title: 'Teaching Literacy', pdf: '/course-outlines/bed-4-year-pre-2026/semester-3/teaching-literacy.pdf' },
          { title: 'Teaching of Science', pdf: '/course-outlines/bed-4-year-pre-2026/semester-3/teaching-of-science.pdf' },
          { title: 'Teaching of Urdu', pdf: '/course-outlines/bed-4-year-pre-2026/semester-3/teaching-of-urdu.pdf' },
        ],
      },
      {
        n: 4,
        courses: [
          { title: 'Classroom Assessment', pdf: '/course-outlines/bed-4-year-pre-2026/semester-4/classroom-assessment.pdf' },
          { title: 'School, Community and Teacher', pdf: '/course-outlines/bed-4-year-pre-2026/semester-4/school-community-and-teacher.pdf' },
          { title: 'Teaching of English', pdf: '/course-outlines/bed-4-year-pre-2026/semester-4/teaching-of-english.pdf' },
          { title: 'Teaching of Mathematics', pdf: '/course-outlines/bed-4-year-pre-2026/semester-4/teaching-of-mathematics.pdf' },
          { title: 'Teaching of Social Studies', pdf: '/course-outlines/bed-4-year-pre-2026/semester-4/teaching-of-social-studies.pdf' },
          { title: 'Teaching Practicum', pdf: '/course-outlines/bed-4-year-pre-2026/semester-4/teaching-practicum.pdf' },
        ],
      },
      {
        n: 5,
        courses: [
          { title: 'English I (Language in Use)', pdf: '/course-outlines/bed-4-year-pre-2026/semester-5/english-ilanguage-in-use.pdf' },
          { title: 'Mathematics I', pdf: '/course-outlines/bed-4-year-pre-2026/semester-5/mathematics-i.pdf' },
          { title: 'Science Content I (Biology)', pdf: '/course-outlines/bed-4-year-pre-2026/semester-5/science-content-ibiology.pdf' },
          { title: 'Social Studies (Content I)', pdf: '/course-outlines/bed-4-year-pre-2026/semester-5/social-studies-content-i.pdf' },
          { title: 'Urdu I', pdf: '/course-outlines/bed-4-year-pre-2026/semester-5/urdu-i.pdf' },
        ],
      },
      {
        n: 6,
        courses: [
          { title: 'English II (Academic Reading and Writing)', pdf: '/course-outlines/bed-4-year-pre-2026/semester-6/english-iiacademic-reading-and-writing.pdf' },
          { title: 'Psychology', pdf: '/course-outlines/bed-4-year-pre-2026/semester-6/psychology.pdf' },
          { title: 'Science Content II (Chemistry)', pdf: '/course-outlines/bed-4-year-pre-2026/semester-6/science-content-iichemistry.pdf' },
          { title: 'Urdu II', pdf: '/course-outlines/bed-4-year-pre-2026/semester-6/urdu-ii.pdf' },
        ],
      },
      {
        n: 7,
        courses: [
          { title: 'English III (Poetry and Drama)', pdf: '/course-outlines/bed-4-year-pre-2026/semester-7/english-iiipoetry-and-drama.pdf' },
          { title: 'Geography Content III', pdf: '/course-outlines/bed-4-year-pre-2026/semester-7/geography-content-iii.pdf' },
          { title: 'Pedagogy of English', pdf: '/course-outlines/bed-4-year-pre-2026/semester-7/pedagogy-of-english.pdf' },
          { title: 'Social Sciences (Pedagogy)', pdf: '/course-outlines/bed-4-year-pre-2026/semester-7/social-sciencespedagogy.pdf' },
          { title: 'Urdu III', pdf: '/course-outlines/bed-4-year-pre-2026/semester-7/urdu-iii.pdf' },
          { title: 'Urdu Pedagogy', pdf: '/course-outlines/bed-4-year-pre-2026/semester-7/urdu-pedagogy.pdf' },
        ],
      },
    ],
  },
  {
    slug: 'bed-4-year-2026',
    name: 'B.Ed. (Hons.) 4 Years — New Outlines 2026',
    shortName: 'B.Ed. 4 Years (2026)',
    programSlug: 'bed-hons-4-year',
    blurb:
      'The revised scheme in force for the 2026 intake onwards. The full combined outline is below, with the published semesters listed individually.',
    document: {
      label: 'Complete course outline, 2026 and onwards',
      pdf: '/course-outlines/bed-4-year-2026/course-outline-2026-and-onwards.pdf',
    },
    semesters: [
      {
        n: 1,
        courses: [
          { title: 'Applications of Information and Communication Technology', pdf: '/course-outlines/bed-4-year-2026/semester-1/applications-of-information-and-communication-technology.pdf' },
          { title: 'Natural Science', pdf: '/course-outlines/bed-4-year-2026/semester-1/natural-science.pdf' },
          { title: 'Quantitative Reasoning I', pdf: '/course-outlines/bed-4-year-2026/semester-1/quantative-reasoning.pdf' },
        ],
      },
      {
        n: 2,
        courses: [
          { title: 'English II — Expository Writing', pdf: '/course-outlines/bed-4-year-2026/semester-2/english-ll-expository-writing.pdf' },
          { title: 'Introduction to Social Science', pdf: '/course-outlines/bed-4-year-2026/semester-2/introduction-to-social-science.pdf' },
          { title: 'Quantitative Reasoning II', pdf: '/course-outlines/bed-4-year-2026/semester-2/quantative-reasoning-ll.pdf' },
        ],
      },
      {
        n: 3,
        courses: [
          { title: 'Introduction to Ethics', pdf: '/course-outlines/bed-4-year-2026/semester-3/introduction-to-ethics.pdf' },
          { title: 'The Ideology and Constitution of Pakistan', pdf: '/course-outlines/bed-4-year-2026/semester-3/the-idealogy-and-constitution-of-pakistan.pdf' },
        ],
      },
      {
        n: 4,
        courses: [
          { title: 'Community and Civic Engagement', pdf: '/course-outlines/bed-4-year-2026/semester-4/community-and-civic-engagements.pdf' },
          { title: 'Entrepreneurship', pdf: '/course-outlines/bed-4-year-2026/semester-4/entrepreneurship.pdf' },
          { title: 'Pakistan Studies', pdf: '/course-outlines/bed-4-year-2026/semester-4/pakistan-studies.pdf' },
        ],
      },
    ],
  },
  {
    slug: 'bed-2-5-year-morning',
    name: 'B.Ed. 2.5 Years — Morning',
    shortName: 'B.Ed. 2.5 Years (Morning)',
    programSlug: 'bed-2-5-year-morning',
    blurb: 'Five semesters, with elective content subjects alongside the core education courses.',
    document: {
      label: 'Scheme of subjects',
      pdf: '/course-outlines/bed-2-5-year-morning/scheme-of-subjects.pdf',
    },
    semesters: [
      {
        n: 1,
        courses: [
          { title: 'Classroom Management', code: 'DTE-530', pdf: '/course-outlines/bed-2-5-year-morning/semester-1/clasroom-management-dte-530.pdf' },
          { title: 'English', code: 'DTE-510', pdf: '/course-outlines/bed-2-5-year-morning/semester-1/english-dte-510.pdf' },
          { title: 'General Methods of Teaching', code: 'DTE-550', pdf: '/course-outlines/bed-2-5-year-morning/semester-1/gmot-dte-550.pdf' },
          { title: 'Information & Communication Technology', code: 'DTE-560', pdf: '/course-outlines/bed-2-5-year-morning/semester-1/ict-dte-560.pdf' },
          { title: 'Society, School and Teacher', code: 'DTE-540', pdf: '/course-outlines/bed-2-5-year-morning/semester-1/society-school-and-teacher-dte-540.pdf' },
          { title: 'Teaching Literacy', code: 'DTE-520', pdf: '/course-outlines/bed-2-5-year-morning/semester-1/teaching-literacy-dte-520.pdf' },
        ],
      },
      {
        n: 2,
        courses: [
          { title: 'Assessment in Education', code: 'DTE-531', pdf: '/course-outlines/bed-2-5-year-morning/semester-2/assessment-in-education-dte-531.pdf' },
          { title: 'Critical Thinking and Reflective Practices', code: 'DTE-521', pdf: '/course-outlines/bed-2-5-year-morning/semester-2/critical-thinking-and-reflective-practices-dte-521.pdf' },
          { title: 'Philosophy of Education', code: 'DTE-511', pdf: '/course-outlines/bed-2-5-year-morning/semester-2/philosophy-of-education-dte-511.pdf' },
          { title: 'Psychology of Education and Guidance', code: 'DTE-541', pdf: '/course-outlines/bed-2-5-year-morning/semester-2/psychology-of-education-and-guidance-dte-541.pdf' },
          { title: 'Biology I', pdf: '/course-outlines/bed-2-5-year-morning/semester-2/biology-i.pdf' },
          { title: 'Chemistry I', pdf: '/course-outlines/bed-2-5-year-morning/semester-2/chemistry-i.pdf' },
          { title: 'Economics I', pdf: '/course-outlines/bed-2-5-year-morning/semester-2/economics-i.pdf' },
          { title: 'Islamic Studies I', pdf: '/course-outlines/bed-2-5-year-morning/semester-2/islamic-studies-i.pdf' },
          { title: 'Mathematics I', pdf: '/course-outlines/bed-2-5-year-morning/semester-2/mathematics-i.pdf' },
        ],
      },
      {
        n: 3,
        courses: [
          { title: 'Contemporary Issues and Trends in Education', code: 'DTE-532', pdf: '/course-outlines/bed-2-5-year-morning/semester-3/contemporary-issues-and-trends-in-education-dte-532.pdf' },
          { title: 'Curriculum Planning and Development', code: 'DTE-512', pdf: '/course-outlines/bed-2-5-year-morning/semester-3/curriculum-planning-and-development-dte-512.pdf' },
          { title: 'Inclusive Education', code: 'DTE-542', pdf: '/course-outlines/bed-2-5-year-morning/semester-3/inclusive-education-dte-542.pdf' },
          { title: 'Perspectives on Teacher Education', code: 'DTE-522', pdf: '/course-outlines/bed-2-5-year-morning/semester-3/perspective-on-teacher-education-dte-522.pdf' },
          { title: 'Biology II', pdf: '/course-outlines/bed-2-5-year-morning/semester-3/biology-ii.pdf' },
          { title: 'Chemistry II', pdf: '/course-outlines/bed-2-5-year-morning/semester-3/chemistry-ii.pdf' },
          { title: 'Economics II', pdf: '/course-outlines/bed-2-5-year-morning/semester-3/economics-ii.pdf' },
          { title: 'Mathematics II', pdf: '/course-outlines/bed-2-5-year-morning/semester-3/mathematics-ii.pdf' },
        ],
      },
      {
        n: 4,
        courses: [
          { title: 'Comparative Education', code: 'DTE-611', pdf: '/course-outlines/bed-2-5-year-morning/semester-4/comparative-education-dte-611.pdf' },
          { title: 'Research and Statistics in Education', code: 'DTE-621', pdf: '/course-outlines/bed-2-5-year-morning/semester-4/research-and-statistics-in-education-dte-621.pdf' },
          { title: 'Secondary Education in Pakistan', code: 'DTE-631', pdf: '/course-outlines/bed-2-5-year-morning/semester-4/secondary-education-in-pakistan-dte-631.pdf' },
          { title: 'Education Policy and Planning', code: 'DTE-641', pdf: '/course-outlines/bed-2-5-year-morning/semester-4/education-policy-and-planning-dte-641.pdf' },
          { title: 'Biology III', pdf: '/course-outlines/bed-2-5-year-morning/semester-4/biology-iii.pdf' },
          { title: 'Chemistry III', pdf: '/course-outlines/bed-2-5-year-morning/semester-4/chemistry-iii.pdf' },
          { title: 'Economics III', pdf: '/course-outlines/bed-2-5-year-morning/semester-4/economics-iii.pdf' },
          { title: 'Mathematics III', pdf: '/course-outlines/bed-2-5-year-morning/semester-4/mathematics-iii.pdf' },
        ],
      },
      {
        n: 5,
        courses: [
          { title: 'Research Project', code: 'DTE-612', pdf: '/course-outlines/bed-2-5-year-morning/semester-5/research-project-dte-612.pdf' },
          { title: 'Educational Leadership and Organizational Behaviour', code: 'DTE-622', pdf: '/course-outlines/bed-2-5-year-morning/semester-5/educational-leadership-and-organizational-behaviour-dte-622.pdf' },
          { title: 'Practicum (Long Term)', code: 'DTE-652', pdf: '/course-outlines/bed-2-5-year-morning/semester-5/practicumlong-term-dte-652.pdf' },
          { title: 'Teaching of Mathematics (Pedagogy)', pdf: '/course-outlines/bed-2-5-year-morning/semester-5/teaching-of-mathematics-pedagogy.pdf' },
          { title: 'Teaching of Science (Pedagogy)', pdf: '/course-outlines/bed-2-5-year-morning/semester-5/teaching-of-science-pedagogy.pdf' },
        ],
      },
    ],
  },
  {
    slug: 'bed-2-5-year-evening',
    name: 'B.Ed. 2.5 Years — Evening',
    shortName: 'B.Ed. 2.5 Years (Evening)',
    programSlug: 'bed-2-5-year-evening',
    blurb: 'The same five-semester scheme as the morning shift, taught in the evening.',
    semesters: [
      {
        n: 1,
        courses: [
          { title: 'Classroom Management', code: 'DTE-530', pdf: '/course-outlines/bed-2-5-year-evening/semester-1/clasroom-management-dte-530.pdf' },
          { title: 'English', code: 'DTE-510', pdf: '/course-outlines/bed-2-5-year-evening/semester-1/english-dte-510.pdf' },
          { title: 'General Methods of Teaching', code: 'DTE-550', pdf: '/course-outlines/bed-2-5-year-evening/semester-1/gmot-dte-550.pdf' },
          { title: 'Information & Communication Technology', code: 'DTE-560', pdf: '/course-outlines/bed-2-5-year-evening/semester-1/ict-dte-560.pdf' },
          { title: 'Society, School and Teacher', code: 'DTE-540', pdf: '/course-outlines/bed-2-5-year-evening/semester-1/society-school-and-teacher-dte-540.pdf' },
          { title: 'Teaching Literacy', code: 'DTE-520', pdf: '/course-outlines/bed-2-5-year-evening/semester-1/teaching-literacy-dte-520.pdf' },
        ],
      },
      {
        n: 2,
        courses: [
          { title: 'Assessment in Education', code: 'DTE-531', pdf: '/course-outlines/bed-2-5-year-evening/semester-2/assessment-in-education-dte-531.pdf' },
          { title: 'Critical Thinking and Reflective Practices', code: 'DTE-521', pdf: '/course-outlines/bed-2-5-year-evening/semester-2/critical-thinking-and-reflective-practices-dte-521.pdf' },
          { title: 'Philosophy of Education', code: 'DTE-511', pdf: '/course-outlines/bed-2-5-year-evening/semester-2/philosophy-of-education-dte-511.pdf' },
          { title: 'Psychology of Education and Guidance', code: 'DTE-541', pdf: '/course-outlines/bed-2-5-year-evening/semester-2/psychology-of-education-and-guidance-dte-541.pdf' },
          { title: 'Chemistry I', pdf: '/course-outlines/bed-2-5-year-evening/semester-2/chemistry-i.pdf' },
          { title: 'Mathematics I', pdf: '/course-outlines/bed-2-5-year-evening/semester-2/mathematics-i.pdf' },
        ],
      },
      {
        n: 3,
        courses: [
          { title: 'Contemporary Issues and Trends in Education', code: 'DTE-532', pdf: '/course-outlines/bed-2-5-year-evening/semester-3/contemporary-issues-and-trends-in-education-dte-532.pdf' },
          { title: 'Curriculum Planning and Development', code: 'DTE-512', pdf: '/course-outlines/bed-2-5-year-evening/semester-3/curriculum-planning-and-development-dte-512.pdf' },
          { title: 'Inclusive Education', code: 'DTE-542', pdf: '/course-outlines/bed-2-5-year-evening/semester-3/inclusive-education-dte-542.pdf' },
          { title: 'Perspectives on Teacher Education', code: 'DTE-522', pdf: '/course-outlines/bed-2-5-year-evening/semester-3/perspective-on-teacher-education-dte-522.pdf' },
          { title: 'Biology II', pdf: '/course-outlines/bed-2-5-year-evening/semester-3/biology-ii.pdf' },
          { title: 'Mathematics II', pdf: '/course-outlines/bed-2-5-year-evening/semester-3/mathematics-ii.pdf' },
        ],
      },
      {
        n: 4,
        courses: [
          { title: 'Comparative Education', code: 'DTE-611', pdf: '/course-outlines/bed-2-5-year-evening/semester-4/comparative-education-dte-611.pdf' },
          { title: 'Research and Statistics in Education', code: 'DTE-621', pdf: '/course-outlines/bed-2-5-year-evening/semester-4/research-and-statistics-in-education-dte-621.pdf' },
          { title: 'Secondary Education in Pakistan', code: 'DTE-631', pdf: '/course-outlines/bed-2-5-year-evening/semester-4/secondary-education-in-pakistan-dte-631.pdf' },
          { title: 'Education Policy and Planning', code: 'DTE-641', pdf: '/course-outlines/bed-2-5-year-evening/semester-4/education-policy-and-planning-dte-641.pdf' },
          { title: 'Biology III', pdf: '/course-outlines/bed-2-5-year-evening/semester-4/biology-iii.pdf' },
          { title: 'Chemistry III', pdf: '/course-outlines/bed-2-5-year-evening/semester-4/chemistry-iii.pdf' },
          { title: 'Mathematics III', pdf: '/course-outlines/bed-2-5-year-evening/semester-4/mathematics-iii.pdf' },
        ],
      },
      {
        n: 5,
        courses: [
          { title: 'Research Project', code: 'DTE-612', pdf: '/course-outlines/bed-2-5-year-evening/semester-5/research-project-dte-612.pdf' },
          { title: 'Educational Leadership and Organizational Behaviour', code: 'DTE-622', pdf: '/course-outlines/bed-2-5-year-evening/semester-5/educational-leadership-and-organizational-behaviour-dte-622.pdf' },
          { title: 'Practicum (Long Term)', code: 'DTE-652', pdf: '/course-outlines/bed-2-5-year-evening/semester-5/practicumlong-term-dte-652.pdf' },
        ],
      },
    ],
  },
];

export const outlineCourseCount = outlineSets.reduce(
  (total, set) => total + set.semesters.reduce((n, s) => n + s.courses.length, 0),
  0,
);
