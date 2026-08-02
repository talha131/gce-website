/* The four academic programs offered by GCE. */

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  shift: string;
  duration: string;
  semesters: number;
  entry: string;
  tagline: string;
  overview: string[];
  practicum: string;
  /** true where the source content is filler pending final copy (see README). */
  isFiller?: boolean;
}

export const programs: Program[] = [
  {
    slug: 'bed-hons-4-year',
    name: 'B.Ed (Hons) 4-Year',
    shortName: 'B.Ed (Hons)',
    shift: 'Morning',
    duration: '4 Years',
    semesters: 8,
    entry: 'After 12 years of education',
    tagline: 'A four-year honours degree that prepares teachers for both primary and secondary education.',
    overview: [
      'A four-year degree programme spread across eight semesters, each of six months.',
      'Open to students who have completed 12 years of education.',
      'The first four semesters build a foundation in general subjects; the final four allow students to choose optional specialisations.',
      'Students study both content and pedagogy, developing professional teaching skills throughout.',
      'A professional degree that prepares teachers for primary and secondary education.',
      'GCE faculty teach so thoroughly that extra tuition is not required.',
    ],
    practicum:
      'Students go on Teaching Practicum twice — in the second year (3rd & 4th semesters) and the fourth year (7th & 8th semesters). In the 3rd semester they deliver 12 lessons and in the 4th, 20 lessons; the 7th and 8th semesters require 24 lessons. Second-year students prepare a growth portfolio and final-year students a professional portfolio.',
  },
  {
    slug: 'bs-education',
    name: 'BS Education',
    shortName: 'BS Education',
    shift: 'Morning',
    duration: '4 Years',
    semesters: 8,
    entry: 'At least 45% marks in Intermediate',
    tagline: 'A four-year Bachelor of Studies in Education grounding future educators in theory and practice.',
    overview: [
      'A four-year degree programme spread across eight semesters.',
      'Open to students with at least 45% marks at Intermediate level.',
      'Combines a broad education foundation with professional teaching preparation.',
      'Students engage with both subject content and modern pedagogy.',
      'Prepares graduates for teaching careers and further study in education.',
    ],
    practicum:
      'Students undertake supervised teaching practice in schools during the programme, applying classroom methods learned at the college.',
    isFiller: true,
  },
  {
    slug: 'bed-2-5-year-morning',
    name: 'B.Ed 2.5-Year (Morning)',
    shortName: 'B.Ed 2.5-Year',
    shift: 'Morning',
    duration: '2.5 Years',
    semesters: 5,
    entry: 'After 14 years of education',
    tagline: 'A professional degree that prepares subject specialists for secondary-level teaching.',
    overview: [
      'A two-and-a-half-year degree programme comprising five semesters.',
      'Open to students who have completed 14 years of education.',
      'Students study general subjects alongside a chosen specialisation, together with pedagogy and teaching methods.',
      'A professional degree that prepares teachers for secondary education.',
      'Offered in both morning and evening shifts at GCE.',
      'GCE faculty teach so thoroughly that extra tuition is not required.',
    ],
    practicum:
      'Students go on Teaching Practicum in the fifth semester for one month, delivering 40 lessons in secondary sections, and prepare a professional portfolio.',
  },
  {
    slug: 'bed-2-5-year-evening',
    name: 'B.Ed 2.5-Year (Evening)',
    shortName: 'B.Ed 2.5-Year',
    shift: 'Evening',
    duration: '2.5 Years',
    semesters: 5,
    entry: 'After 14 years of education',
    tagline: 'The evening cohort of our professional B.Ed degree — the same rigour, a flexible schedule.',
    overview: [
      'A two-and-a-half-year degree programme comprising five semesters.',
      'Open to students who have completed 14 years of education.',
      'Students study general subjects alongside a chosen specialisation, together with pedagogy and teaching methods.',
      'A professional degree that prepares teachers for secondary education.',
      'Offered in the evening shift to accommodate working students.',
      'GCE faculty teach so thoroughly that extra tuition is not required.',
    ],
    practicum:
      'Students go on Teaching Practicum in the fifth semester for one month, delivering 40 lessons in secondary sections, and prepare a professional portfolio.',
  },
];

/**
 * Programs section sub-pages, in menu order. Drives SectionNav.
 * Full `name` (not `shortName`) is deliberate — the two 2.5-Year programs share
 * a `shortName` and are only distinguishable by their (Morning)/(Evening) suffix.
 */
export const programsNav = [
  ...programs.map((p) => ({ label: p.name, href: `/programs/${p.slug}` })),
  { label: 'Course Outlines', href: '/programs/course-outlines' },
];

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);
