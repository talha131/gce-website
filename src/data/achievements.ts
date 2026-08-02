/* Achievements, alumni success, sports honours and the ICEEC 2025 conference. */

/**
 * Achievements section sub-pages, in menu order. Drives SectionNav.
 * Honours is the /achievements landing (no overview hub).
 */
export const achievementsNav = [
  { label: 'Honours', href: '/achievements' },
  { label: 'Conference', href: '/achievements/conference' },
  { label: 'Research', href: '/achievements/research' },
  { label: 'Alumni', href: '/achievements/alumni' },
] as const;

export const alumniLicenceHolders2025 = [
  'Abeera Ahmed',
  'Ayesha Shabbir',
  'Beenish Atta',
  'Hena Khalid Akhtar',
  'Hira Niaz',
  'Jawaria Feroz',
  'Kinza Tehseen',
  'Maham Allauddin',
  'Maryam Shahid',
  'Midhat Jamal',
  'Rehana Noshin Shahzad',
  'Sehrish Karim',
  'Sitwat Jehan',
  'Syeda Nabiha Batool Jaffri',
  'Yasarat Binte Jawed',
  'Zubia Sultan',
];

export interface Honour {
  slug?: string;
  title: string;
  rank?: string;
  detail: string;
}

/** Individual and team honours. `slug` links to an image gallery where present. */
export const honours: Honour[] = [
  {
    slug: 'maleeha-khan',
    title: 'Maleeha Khan, 4th International Conference on Education 2025',
    rank: '1st Position',
    detail:
      'GCE student Maleeha Khan won first position at the 4th International Conference on Education 2025, organised by IOBM. Her research on water conservation in schools studied how awareness campaigns help save water, supervised by Prof. Shagufta Khokhar.',
  },
  {
    slug: 'fatima-siddiqui',
    title: 'Fatima Siddiqui, 4th International Conference on Education 2025',
    rank: '2nd Position',
    detail:
      'GCE student Fatima Siddiqui secured second position at the 4th International Conference on Education 2025 (IOBM), a proud reflection of the college\'s research culture.',
  },
  {
    slug: 'pakistan-day-quiz',
    title: 'Pakistan Day Quiz 2025',
    rank: '1st, beating 19 teams',
    detail:
      'GCE won first place in the Pakistan Day Quiz 2025, outperforming 19 other teams, a standout display of knowledge and teamwork.',
  },
  {
    slug: 'basketball',
    title: 'Girls Basketball Tournament',
    rank: '1st Position',
    detail: 'The GCE girls\' basketball team claimed first position in their tournament.',
  },
  {
    slug: 'table-tennis',
    title: 'Table Tennis',
    rank: '2nd Position',
    detail: 'GCE secured second position in table tennis competition.',
  },
  {
    slug: 'tug-of-war',
    title: 'Tug of War, 6th Sindh Games 2024',
    rank: '3rd Position',
    detail: 'GCE secured third position in Tug of War at the 6th Sindh Games 2024, contested at district Central level.',
  },
  {
    slug: 'zoology-project',
    title: 'Zoology Project',
    rank: '2nd Position',
    detail: 'A GCE zoology project earned second position, showcasing students\' scientific work.',
  },
];

/**
 * Institutional firsts the college is proudest of. Copy is condensed from the
 * canonical sources (the podcast studio in facilities.ts, the magazine event in
 * events.ts, and `conference` below) — no new claims. `cover` feeds
 * src/lib/images.ts; the conference gallery has no slug subfolder.
 */
export interface Milestone {
  /** Stable key; also lets the homepage pick a subset. */
  key: 'podcast' | 'magazine' | 'conference';
  kicker: string;
  title: string;
  detail: string;
  href: string;
  /** Where the cover photo comes from — see src/lib/images.ts. */
  cover: { category: string; slug?: string };
}

export const milestones: Milestone[] = [
  {
    key: 'podcast',
    kicker: 'A first for College Education Department, Sindh',
    title: 'Teach Forward — The Voice of GCE',
    detail:
      'GCE is the only college in Karachi running its own official podcast — and, as far as we know, the only government institution in Pakistan to do so. Every episode is written, hosted, recorded and published in-house, from a purpose-built studio on campus.',
    href: '/campus/podcast-studio',
    cover: { category: 'facilities', slug: 'podcast-studio' },
  },
  {
    key: 'magazine',
    kicker: 'Published in-house',
    title: 'Mashal-e-Ilm, the college magazine',
    detail:
      "The college publishes its own magazine, produced with an editor and sub-editors, carrying GCE's vision, mission and history alongside photographs kept as memories. Students contribute articles, stories and poetry, and selected work is published under their own name.",
    href: '/academics/magazine',
    cover: { category: 'events', slug: 'magazine' },
  },
  {
    key: 'conference',
    kicker: 'A first for College Education Department, Sindh',
    title: 'ICEEC 2025 — 1st International Conference',
    detail:
      'GCE hosted its first-ever International Conference on Embracing Educational Change in January 2025, organised by the DG Colleges Sindh in collaboration with the college, focused on integrating emerging technologies into teaching and learning.',
    href: '/achievements/conference',
    cover: { category: 'conference' },
  },
];

/** ICEEC 2025 — GCE's first International Conference. */
export const conference = {
  name: 'ICEEC 2025',
  fullName: '1st International Conference on Embracing Educational Change',
  date: '5 January 2025',
  theme: 'Embracing Educational Change',
  venue: 'IT Zone, GCE',
  summary:
    "GCE hosted its first-ever International Conference, ICEEC 2025, on 5 January 2025, organised by the DG Colleges Sindh in collaboration with Government College of Education. Themed \"Embracing Educational Change\", the conference focused on integrating emerging technologies into teaching and learning, and brought together teachers, students and guests, with a Zoom link for online participants.",
  keynotes: [
    { name: 'Prof. Dr. Navaid Rab Siddiqui', role: 'Director General, Colleges Sindh', topic: 'Embracing Educational Change: What? Why? and How?' },
    { name: 'Dr. Naim Syed', role: 'Founder & President, iQera (USA)', topic: 'AI in Education' },
    { name: 'Summer Long', role: 'Co-founder, Cathoven AI (USA)', topic: 'International Keynote' },
    { name: 'Dr. Sohni Siddiqui', role: 'Researcher, Technical University Berlin', topic: 'Click, Post, Harm: Understanding Cyberbullying and How Teachers Can Help' },
  ],
  panel: {
    topic: 'The Future of College Education: Empowering Learners through AI and Emerging Technologies',
    panelists: [
      'Mr. Asif Ikram, Secretary, College Education Department, Govt. of Sindh',
      'Dr. Fauzia Shamim, Chief Academic Officer, Durbeen',
      'Dr. Sajid Ali, Director, Research & Policy Studies, AKU-IED',
    ],
    moderator: 'Dr. Sarwat Nauman, CEO, Formative Academy for Higher Education and Management',
  },
  stats: [
    { value: '3', label: 'Oral presentation rounds' },
    { value: '18', label: 'Research presentations' },
    { value: '4', label: 'Keynote speakers' },
  ],
  note: 'Conference overview by Prof. Sharjeel Ahmed (Lecturer, GCE). Supervised by Prof. Dr. Navaid Rab Siddiqui (DG Colleges Sindh) and Prof. Dr. Zahoor Ahmed (Principal, GCE).',
};

/**
 * Student action-research papers. `pdf` is the full report under /public/research
 * — every final-semester cohort adds to this list, so it grows each year.
 */
export const actionResearch = [
  { title: 'Effective Strategies of Classroom Management to Reduce Disruptions in Grade VI', student: 'Hafiz Muhammad Mujtaba Saleem', supervisor: 'Prof. Tabassum Kausar', year: '2024', pdf: '/research/classroom-management-grade-6.pdf' },
  { title: 'Breaking Traditional Norms: Implementing Cooperative Learning Strategies in the Social Studies Classroom', student: 'Yumna Mahmood', supervisor: 'Prof. Tabassum Kausar', year: '2025', pdf: '/research/cooperative-learning-social-studies.pdf' },
  { title: 'The Impact of Teaching Aids on Students’ Learning in Science', student: 'Huma Liaquat Ali', supervisor: 'Prof. Tabassum Kausar', year: '2025', pdf: '/research/teaching-aids-science.pdf' },
  { title: 'Using Discrepant Events in the Science Classroom to Enhance Students’ Engagement at Grade 6', student: 'Bisma Hayat', supervisor: 'Prof. Tabassum Kausar', year: '2023', pdf: '/research/discrepant-events-science.pdf' },
  { title: 'Encouraging Water Conservation in Schools: The Impact of Awareness Campaigns on Grade 7 Students', student: 'Maleeha Khan', supervisor: 'Prof. Shagufta Khokhar', year: '2025', pdf: '/research/water-conservation-grade-7.pdf' },
];
