/*
 * Faculty & staff. `folder` matches the image filename under
 * src/assets/content/faculty/<folder>.<ext>; where no photo exists the card
 * falls back to an elegant monogram avatar.
 */

export interface Person {
  name: string;
  folder: string;
  /** Designation, e.g. 'Assistant Professor'. */
  title?: string;
  /** Basic Pay Scale grade, e.g. 'BPS-18'. Shown after the designation. */
  grade?: string;
  quals: string[];
  /** CSS object-position for the card photo, e.g. 'top' or 'center 25%'. Set only where the default centre crop clips the face. */
  focus?: string;
  /**
   * Lower the photo inside its frame by `y` (a translateY, e.g. '5%') without
   * cropping or zooming — for a photo whose head already touches its own top
   * edge, so `focus` has no headroom to reveal. `bg` fills the strip this opens
   * at the top and should match the photo's backdrop.
   */
  nudge?: { y: string; bg: string };
  /** College email, rendered as a mailto link on the card. */
  email?: string;
  /** Personal website without protocol, e.g. 'talhamansoor.com'. */
  website?: string;
  /** Set where a member has left the college; renders a muted pill + tenure line. */
  former?: { label: string; years: string };
  /** Use a portrait kept elsewhere under src/assets/content/ instead of faculty/<folder>. */
  photo?: { category: string; name: string };
  /** Listed ahead of the alphabetical order (the Principal). */
  first?: boolean;
  /** Another appointment held alongside this one, shown under the designation. */
  alsoAt?: string;
}

/**
 * Faculty & Staff sub-pages, in menu order. Drives SectionNav.
 * Teaching faculty is the /faculty landing (no overview hub).
 */
export const facultyNav = [
  { label: 'Faculty', href: '/faculty' },
  { label: 'Administrative Staff', href: '/faculty/administrative-staff' },
] as const;

/** Teaching faculty, Education Department. */
export const educationDept: Person[] = [
  {
    name: 'Prof. Zahoor Ahmed',
    folder: 'Prof_Zahoor_Ahmed',
    title: 'Principal · Professor',
    grade: 'BPS-20',
    quals: ['M.S. (Economics)'],
    alsoAt: 'Visiting Faculty, University of Karachi',
    email: 'zahoor@gce.edu.pk',
    photo: { category: 'principal', name: 'principal' },
    first: true,
  },
  { name: 'Prof. Dr. Ahmed Hussain Kolachi', folder: 'Prof_Dr_Ahmed_Hussain_Kolachi', title: 'Assistant Professor', grade: 'BPS-18', quals: ['Ph.D. (Sindhi)', 'B.Ed.'] },
  { name: 'Prof. Dr. Barkat Ali Dahri', folder: 'Prof_Dr_Barkat_Ali_Dahri', title: 'Assistant Professor', grade: 'BPS-18', quals: ['Ph.D. (Sindhi)', 'M.A. (Sindhi)', 'LLB', 'B.Ed.'] },
  { name: 'Prof. Dr. Sohail Ahmed', folder: 'Prof_Dr_Sohail_Ahmed', title: 'Associate Professor', grade: 'BPS-19', quals: ['Ph.D. (Education)', 'M.A. (Education)'], email: 'drsohail@gce.edu.pk' },
  { name: 'Prof. Dr. Asim Ahmed', folder: 'Prof_Asim_Ahmed', title: 'Assistant Professor', grade: 'BPS-18', quals: ['Ph.D. (Education)', 'M.Phil. (Education)', 'M.Ed., M.A. (Urdu)'] },
  { name: 'Prof. Sharjeel Ahmed', folder: 'Prof_Sharjeel_Ahmed', title: 'Lecturer', grade: 'BPS-17', quals: ['Ph.D. (Teacher Education) — In Progress', 'M.Phil. (Educational Leadership & Management)', 'M.Ed. / M.A. / Dip-ECED / EYFS (UK)'], email: 'sharjeel@gce.edu.pk' },
  { name: 'Prof. Tabassum Kausar', folder: 'Prof_Tabbasum_Kausar', title: 'Assistant Professor', grade: 'BPS-18', quals: ['Ph.D. (Teacher Education) — In Progress', 'M.Phil. (Education)', 'M.Ed.'], email: 'tabbasum@gce.edu.pk' },
  { name: 'Prof. Shagufta', folder: 'Prof_Shagufta', title: 'Lecturer', grade: 'BPS-17', quals: ['Ph.D. (Education) — In Progress', 'M.Phil. (Education)', 'B.Ed. (Hons.)'] },
  { name: 'Prof. Muhammad Akbar', folder: 'Prof_Muhammad_Akbar', title: 'Assistant Professor', grade: 'BPS-18', quals: ['M.Phil. (Education)', 'M.Ed.'] },
  { name: 'Prof. Rashid Ali', folder: 'Prof_Rashid_Ali', title: 'Assistant Professor', grade: 'BPS-18', quals: ['M.Phil. (Education)', 'M.Ed.', 'M.A. (Economics)'], email: 'rashidali@gce.edu.pk' },
  { name: 'Prof. Waseem Sajjad', folder: 'Prof_Waseem_Sajjad', title: 'Assistant Professor', grade: 'BPS-18', quals: ['M.Phil. (Education)', 'M.Ed. / B.Sc.'] },
  { name: 'Prof. Syeda Saeed Fatima', folder: 'Prof_Syeda_Saeed_Fatima', title: 'Assistant Professor', grade: 'BPS-18', quals: ['M.Phil. (Education)', 'M.Ed., M.A.'] },
  { name: 'Prof. Rabia Essa', folder: 'Prof_Rabia_Essa', title: 'Assistant Professor', grade: 'BPS-18', quals: ['M.Phil. (Mathematics)', 'M.B.A.', 'M.Ed.'] },
  { name: 'Prof. Safdar Abbas', folder: 'Prof_Safdar_Abbas', title: 'Assistant Professor', grade: 'BPS-18', quals: ['M.Phil. (Urdu)', 'M.A. (Urdu) / M.A. (Islamic Studies)', 'M.Ed.', 'M.B.A. (Finance)'], email: 'safdar@gce.edu.pk' },
  { name: 'Prof. Aoun Ali', folder: 'Prof_Aoun_Ali', title: 'Lecturer', grade: 'BPS-17', quals: ['Ph.D. (Clinical Psychology) — In Progress', 'M.Phil. (Clinical Psychology)'], email: 'aoun.ali@gce.edu.pk' },
  { name: 'Prof. Syed Mehdi Naqvi', folder: 'Prof_Syed_Mehdi_Naqvi', title: 'Lecturer', grade: 'BPS-17', quals: ['M.Phil. (Clinical Psychology) — In Progress', 'B.S. (Clinical Psychology)'], email: 'mehdi@gce.edu.pk' },
  { name: 'Prof. Syeda Nasreen Zehra', folder: 'Prof_Syeda_Nasreen_Zehra', title: 'Associate Professor', grade: 'BPS-19', quals: ['M.Phil. (English) — In Progress', 'M.A. (English)'] },
  { name: 'Prof. Talha Mansoor', folder: 'Prof_Talha_Mansoor', title: 'Lecturer', grade: 'BPS-17', quals: ['M.Phil. (Computer Science)', 'B.S. (Computer Science)'], email: 'talha@gce.edu.pk', website: 'talhamansoor.com' },
  { name: 'Prof. Habib-un-Nabi', folder: 'Prof_Habib_un_Nabi', title: 'Professor', grade: 'BPS-20', quals: ['M.Ed.', 'M.A. (Islamic Studies)', 'Certified Islamic Scholar'], email: 'habibunnabi@gce.edu.pk' },
  { name: 'Prof. Farah Kanwal', folder: 'Prof_Farah_Kanwal', title: 'Assistant Professor', grade: 'BPS-18', quals: ['M.A. (Islamic History)', 'M.Ed.'], focus: 'top' },
  { name: 'Prof. Ghulam Umar Mirani', folder: 'Prof_Ghulam_Umar_Mirani', title: 'Associate Professor', grade: 'BPS-19', quals: ['M.B.A.', 'M.Ed.'] },
  { name: 'Prof. Rizwan Ahmed', folder: 'Prof_Rizwan_Ahmed', title: 'Assistant Professor', grade: 'BPS-18', quals: ['M.Sc. (Chemistry)', 'B.Ed.'], focus: 'center 30%' },
  { name: 'Prof. Nadeem Uddin', folder: 'Prof_Nadeem_Uddin', title: 'Lecturer', grade: 'BPS-17', quals: ['M.Sc. (Chemistry)', 'M.Ed.'] },
  { name: 'Prof. Irfat un Nisa', folder: 'Prof_Irfat_un_Nisa', title: 'Lecturer', grade: 'BPS-17', quals: ['M.Sc. (Physics)'], nudge: { y: '5%', bg: '#cdbbaf' } },
  { name: 'Prof. Waseem Ahmed Khan', folder: 'Prof_Waseem_Ahmed_Khan', title: 'Associate Professor', grade: 'BPS-19', quals: ['M.Sc. (Zoology)'] },
  { name: 'Prof. Muhammad Rizwan', folder: 'Prof_Muhammad_Rizwan', title: 'Lecturer', grade: 'BPS-17', quals: ['M.A. (Pakistan Studies)'] },
  { name: 'Prof. Nouman Baqar', folder: 'Prof_Nouman_Baqar', title: 'Associate Professor', grade: 'BPS-19', quals: ['M.A. (Urdu)'], email: 'nbnaqvi@gce.edu.pk' },
  { name: 'Muhammad Mustaqeem', folder: 'Muhammad_Mustaqeem', title: 'Senior Librarian', grade: 'BPS-18', quals: ['Masters in Library & Information Science'], focus: 'center 33%' },
  {
    name: 'Prof. Yusra',
    folder: 'Prof_Yusra',
    title: 'Assistant Professor',
    grade: 'BPS-18',
    quals: [
      'M.A. (English Literature)',
      'M.A. TESOL (Eötvös Loránd University, Hungary)',
      'M.S. Education, Curriculum & Instruction (UW–Madison, USA)',
      'B.Ed. (Indus University, Karachi)',
      'M.Ed. (University of Karachi)',
      'CELTA, TEFL (Cambridge)',
    ],
    focus: 'top',
  },
  {
    name: 'Prof. Dr. Habib Ahmed',
    folder: 'Prof_Habib_Ahmed',
    title: 'Assistant Professor',
    grade: 'BPS-18',
    quals: [
      'Ph.D. (Education)',
      'M.Phil. (Education)',
      'M.Ed.',
      'B.Ed.',
      'M.A. (Economics, Political Science, Islamic Culture, Sociology)',
      'LLB',
      'Post-Graduate Diploma (Quality Assurance in Higher Education)',
    ],
    former: { label: 'Retired', years: '2019 – 2025' },
  },
  {
    name: 'Zubair',
    folder: 'Zubair',
    title: 'Librarian',
    grade: 'BPS-17',
    quals: ['Masters in Library & Information Science'],
    former: { label: 'Transferred', years: '2020 – 2025' },
  },
];

/** Administrative & support staff. */
export const adminStaff: Person[] = [
  { name: 'Abdul Waseem', folder: 'Abdul_Waseem', title: 'Superintendent', quals: ['Graduation'] },
  { name: 'Mumtaz Khan', folder: 'Mumtaz_Khan', title: 'Senior Clerk', quals: ["Master's"] },
  { name: 'Muhammad Ashfaq', folder: 'Muhammad_Ashfaq', title: 'Senior Clerk', quals: ['B.Com.'] },
  { name: 'Saba Zehra', folder: 'Saba_Zehra', title: 'Senior Clerk', quals: ['B.Com.'] },
  { name: 'Imran Khan', folder: 'Imran_Khan', title: 'Junior Clerk', quals: ['Intermediate'] },
  { name: 'Shagufta Azmat', folder: 'Shagufta_Azmat', title: 'Assistant', quals: ['Matric'] },
  { name: 'Qazi Adnan Raza', folder: 'Qazi_Adnan_Raza', title: 'Senior Lab Assistant', quals: ['M.C.S.'] },
  { name: 'Syed Muhammad Zeeshan', folder: 'Syed_Muhammad_Zeeshan', title: 'Senior Lab Assistant', quals: ['B.Com.'] },
  { name: 'Nasir Khan', folder: 'Nasir_Khan', title: 'Senior Lab Assistant', quals: ['B.A.'] },
  { name: 'Mr. Muhammad Sohail Khan', folder: 'Mr_Muhammad_Sohail_Khan', title: 'Senior Lab Assistant', quals: ['B.A.', 'M.Ed.'] },
  { name: 'Mr. Syed Raza Haider Jaffri', folder: 'Mr_Syed_Raza_Haider_Jafri', title: 'Lab Supervisor', quals: ['Intermediate'] },
  { name: 'Mr. Mahmood', folder: 'Mr_Mahmood', title: 'Support Staff', quals: [] },
  { name: 'Iftikhar Masih', folder: 'Iftikhar_Masih', title: 'Support Staff', quals: [] },
];

/*
 * Display order: the member marked `first` (the Principal) leads; then by
 * BPS grade, highest first (20, 19, 18, 17); then, within a grade,
 * alphabetically by given name, ignoring the leading honorifics "Prof.",
 * "Dr.", "Mr.", "Mrs." and "Ms." (so "Prof. Dr. Ahmed Hussain Kolachi" sorts
 * under "A"). "Syed"/"Syeda" are part of the name, not honorifics, so they
 * sort under "S". Administrative staff carry no grade, so they are simply
 * alphabetical.
 */
const gradeOf = (p: Person) => Number(p.grade?.match(/\d+/)?.[0] ?? 0);
const byRank = (a: Person, b: Person) => {
  if (a.first !== b.first) return a.first ? -1 : 1;
  if (gradeOf(a) !== gradeOf(b)) return gradeOf(b) - gradeOf(a);
  const key = (n: string) => n.replace(/^(?:(?:Prof|Dr|Mr|Mrs|Ms)\.\s*)+/i, '');
  return key(a.name).localeCompare(key(b.name));
};
educationDept.sort(byRank);
adminStaff.sort(byRank);
