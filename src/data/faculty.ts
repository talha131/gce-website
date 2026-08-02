/*
 * Faculty & staff. `folder` matches the image filename under
 * src/assets/content/faculty/<folder>.<ext>; where no photo exists the card
 * falls back to an elegant monogram avatar.
 */

export interface Person {
  name: string;
  folder: string;
  title?: string;
  quals: string[];
  /** CSS object-position for the card photo, e.g. 'top' or 'center 25%'. Set only where the default centre crop clips the face. */
  focus?: string;
  /** College email, rendered as a mailto link on the card. */
  email?: string;
  /** Personal website without protocol, e.g. 'talhamansoor.com'. */
  website?: string;
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
  { name: 'Prof. Dr. Ahmed Hussain Kolachi', folder: 'Prof_Dr_Ahmed_Hussain_Kolachi', quals: ['Ph.D. (Sindhi)', 'B.Ed.'] },
  { name: 'Prof. Dr. Barkat Ali Dahri', folder: 'Prof_Dr_Barkat_Ali_Dahri', quals: ['Ph.D. (Sindhi)', 'M.A. (Sindhi)', 'LLB', 'B.Ed.'] },
  { name: 'Prof. Dr. Sohail Ahmed', folder: 'Prof_Dr_Sohail_Ahmed', title: 'Associate Professor', quals: ['Ph.D. (Education)', 'M.A. (Education)'], email: 'drsohail@gce.edu.pk' },
  { name: 'Prof. Asim Ahmed', folder: 'Prof_Asim_Ahmed', quals: ['Ph.D. (Education) — Thesis Submitted', 'M.Phil. (Education)', 'M.Ed., M.A. (Urdu)'] },
  { name: 'Prof. Sharjeel Ahmed', folder: 'Prof_Sharjeel_Ahmed', quals: ['Ph.D. (Teacher Education) — In Progress', 'M.Phil. (Educational Leadership & Management)', 'M.Ed. / M.A. / Dip-ECED / EYFS (UK)'], email: 'sharjeel@gce.edu.pk' },
  { name: 'Prof. Tabassum Kausar', folder: 'Prof_Tabbasum_Kausar', title: 'Assistant Professor', quals: ['Ph.D. (Teacher Education) — In Progress', 'M.Phil. (Education)', 'M.Ed.'], email: 'tabbasum@gce.edu.pk' },
  { name: 'Prof. Shagufta', folder: 'Prof_Shagufta', quals: ['Ph.D. (Education) — In Progress', 'M.Phil. (Education)', 'B.Ed. (Hons.)'], email: 'shagufta@gce.edu.pk' },
  { name: 'Prof. Muhammad Akbar', folder: 'Prof_Muhammad_Akbar', quals: ['M.Phil. (Education)', 'M.Ed.'] },
  { name: 'Prof. Rashid Ali', folder: 'Prof_Rashid_Ali', quals: ['M.Phil. (Education)', 'M.Ed.', 'M.A. (Economics)'], email: 'rashidali@gce.edu.pk' },
  { name: 'Prof. Waseem Sajjad', folder: 'Prof_Waseem_Sajjad', quals: ['M.Phil. (Education)', 'M.Ed. / B.Sc.'] },
  { name: 'Prof. Syeda Saeed Fatima', folder: 'Prof_Syeda_Saeed_Fatima', quals: ['M.Phil. (Education)', 'M.Ed., M.A.'] },
  { name: 'Prof. Rabia Essa', folder: 'Prof_Rabia_Essa', quals: ['M.Phil. (Mathematics)', 'M.B.A.', 'M.Ed.'] },
  { name: 'Prof. Safdar Abbas', folder: 'Prof_Safdar_Abbas', quals: ['M.Phil. (Urdu)', 'M.A. (Urdu) / M.A. (Islamic Studies)', 'M.Ed.', 'M.B.A. (Finance)'], email: 'safdar@gce.edu.pk' },
  { name: 'Prof. Aoun Ali', folder: 'Prof_Aoun_Ali', quals: ['Ph.D. (Clinical Psychology) — In Progress', 'M.Phil. (Clinical Psychology)'], email: 'aoun.ali@gce.edu.pk' },
  { name: 'Prof. Syed Mehdi Naqvi', folder: 'Prof_Syed_Mehdi_Naqvi', quals: ['M.Phil. (Clinical Psychology) — In Progress', 'B.S. (Clinical Psychology)'], email: 'mehdi@gce.edu.pk' },
  { name: 'Prof. Syeda Nasreen Zehra', folder: 'Prof_Syeda_Nasreen_Zehra', quals: ['M.Phil. (English) — In Progress', 'M.A. (English)'] },
  { name: 'Prof. Talha Mansoor', folder: 'Prof_Talha_Mansoor', quals: ['MS (Computer Science)'], email: 'talha@gce.edu.pk', website: 'talhamansoor.com' },
  { name: 'Prof. Habib-un-Nabi', folder: 'Prof_Habib_un_Nabi', quals: ['M.Ed.', 'M.A. (Islamic Studies)', 'Certified Islamic Scholar'], email: 'habibunnabi@gce.edu.pk' },
  { name: 'Prof. Farah Kanwal', folder: 'Prof_Farah_Kanwal', quals: ['M.A. (Islamic History)', 'M.Ed.'] },
  { name: 'Prof. Ghulam Umar Mirani', folder: 'Prof_Ghulam_Umar_Mirani', quals: ['M.B.A.', 'M.Ed.'] },
  { name: 'Prof. Rizwan Ahmed', folder: 'Prof_Rizwan_Ahmed', quals: ['M.Sc. (Chemistry)', 'B.Ed.'] },
  { name: 'Prof. Nadeem Uddin', folder: 'Prof_Nadeem_Uddin', quals: ['M.Sc. (Chemistry)', 'M.Ed.'] },
  { name: 'Prof. Irfat un Nisa', folder: 'Prof_Irfat_un_Nisa', quals: ['M.Sc. (Physics)'] },
  { name: 'Prof. Waseem Ahmed Khan', folder: 'Prof_Waseem_Ahmed_Khan', quals: ['M.Sc. (Zoology)'] },
  { name: 'Prof. Muhammad Rizwan', folder: 'Prof_Muhammad_Rizwan', quals: ['M.A. (Pakistan Studies)'] },
  { name: 'Prof. Nouman Baqar', folder: 'Prof_Nouman_Baqar', quals: ['M.A. (Urdu)'], email: 'nbnaqvi@gce.edu.pk' },
  { name: 'Muhammad Mustaqeem', folder: 'Muhammad_Mustaqeem', title: 'Senior Librarian', quals: ['Masters in Library & Information Science'] },
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
  { name: 'Mr. Syed Raza Haider Jaffri', folder: 'Mr_Syed_Raza_Haider_Jafri', title: 'Lab Supervisor', quals: ['Intermediate'] },
  { name: 'Mr. Mahmood', folder: 'Mr_Mahmood', title: 'Support Staff', quals: [] },
  { name: 'Iftikhar Masih', folder: 'Iftikhar_Masih', title: 'Support Staff', quals: [] },
];

/*
 * Faculty and staff are displayed in alphabetical order by given name,
 * ignoring the leading honorifics "Prof.", "Dr.", "Mr.", "Mrs." and "Ms."
 * (so "Prof. Dr. Ahmed Hussain Kolachi" sorts under "A"). "Syed"/"Syeda" are
 * part of the name, not honorifics, so they sort under "S".
 */
const byName = (a: Person, b: Person) => {
  const key = (n: string) => n.replace(/^(?:(?:Prof|Dr|Mr|Mrs|Ms)\.\s*)+/i, '');
  return key(a.name).localeCompare(key(b.name));
};
educationDept.sort(byName);
adminStaff.sort(byName);
