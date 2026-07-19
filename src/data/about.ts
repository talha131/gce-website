/* About-page content: history, mission/vision, principal, anthem & dua, testimonials. */

/** About section sub-pages, in menu order. Drives SectionNav. */
export const aboutNav = [
  { label: 'Overview', href: '/about' },
  { label: 'History', href: '/about/history' },
  { label: 'Mission & Vision', href: '/about/mission-vision' },
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'Heritage', href: '/about/heritage' },
] as const;

export const history = {
  paragraphs: [
    'In 1953, prompted by the need to empower school teachers, the Directorate of Education, Karachi initiated a training programme that laid the groundwork for a specialised college.',
    'In 1954, the Central Govt. Teacher Training College was established near Nazimabad, affiliated with the University of Karachi. After relocating three times, it found its permanent home in 1980 at Federal B Area, Block 15.',
    'Over its 60-plus-year history, the college has produced more than 50,000 competent and committed teachers.',
  ],
  milestones: [
    { year: '1953', text: 'Directorate of Education, Karachi initiates a teacher-training programme.' },
    { year: '1954', text: 'Central Govt. Teacher Training College established near Nazimabad, affiliated with the University of Karachi.' },
    { year: '1980', text: 'The college finds its permanent home at Federal B Area, Block 15.' },
    { year: 'Today', text: 'More than 50,000 teachers trained — and counting.' },
  ],
};

export const mission = {
  en: 'The mission of the Govt. College of Education is to prepare competent and caring educators who understand students, serve the community and develop professionally to become ethical decision-makers and leaders.',
  ur: 'کالج آف ایجوکیشن کا مقصد ایسے باصلاحیت اور ذمہ دار ماہرینِ تعلیم تیار کرنا ہے جو معاشرے کی خدمت سر انجام دیتے ہوئے پیشہ ورانہ ترقی کریں اور اخلاقی فیصلہ ساز قیادت فراہم کریں۔',
};

export const vision = {
  en: [
    'Rooted in Islamic values and the ideology of Pakistan, the Govt. College of Education affirms its ability to prepare educators to meet the demands of contemporary society, and its readiness to build on the institution’s legacy of high-quality education programmes.',
    'The College of Education aspires to be a premier education unit by offering a continuum of high-quality programmes and services for pre-service and in-service educators.',
  ],
  ur: 'اسلامی اقدار اور نظریۂ پاکستان کی بنیادوں پر گورنمنٹ کالج آف ایجوکیشن، اپنے تمام تر وسائل کو بروئے کار لاتے ہوئے معاشرے کے عصری تقاضوں سے ہم آہنگ ماہرینِ تعلیم کی تربیت اور ادارے کی اعلیٰ تعلیمی روایتوں کو برقرار رکھتے ہوئے معیاری تعلیمی پروگراموں کے انعقاد و تکمیل کو یقینی بناتا ہے۔ کالج آف ایجوکیشن مستقل بنیادوں پر موجودہ اور متوقع ماہرینِ تعلیم کے لیے اعلیٰ معیار کے پروگرام اور خدمات بہم کرتے ہوئے ایک اعلیٰ و ارفع تعلیمی مقام کا خواہاں ہے۔',
};

export const principal = {
  name: 'Prof. Zahoor Ahmed',
  title: 'Principal (BPS-20)',
  tenure: 'Over 31 years as teacher, principal and vice principal',
  intro:
    'With his dynamic leadership, Prof. Zahoor Ahmed drives the college towards new heights of excellence in teacher education. He personally established the Micro-Teaching Lab and the Teachers’ Resource Centre.',
  // NOTE: Placeholder draft — the college will supply the final message later.
  isFiller: true,
  message: [
    "For over seven decades, Government College of Education has carried a singular responsibility: to prepare the teachers who shape our nation's future. It is a duty we hold with both pride and humility.",
    'When a student joins us, we do not merely train them to teach; we nurture educators who are competent, compassionate, and committed to the communities they will serve. Our classrooms, laboratories, and resource centres exist for one purpose: to bridge sound theory with confident practice.',
    'I warmly invite you to become part of a legacy that began in 1953 and continues, stronger than ever, today. Together, let us keep striving hard to educate the nation.',
  ],
};

/** College anthem, Dua and national anthem — Urdu, rendered RTL in Nastaliq. */
export const anthemAndDua = {
  collegeAnthem: {
    title: 'ترانہ',
    titleEn: 'College Anthem',
    author: 'صفدرؔ عباس',
    authorEn: 'Safdar Abbas',
    couplets: [
      ['اے درس گاہِ فنِ درس مادرِ علمی', 'تجھی سے زندگی تدریس کے ہنر کو ملی'],
      ['ترے ہی دم سے ہیں سرسبز باغِ علم و عمل', 'یہ جھرنے آج کے دریاؤں میں ڈھلیں گے کل'],
      ['جلا دیے ہیں رہِ زیست میں جو تو نے چراغ', 'وہ جگمگا کے اجالیں گے قلب اور دماغ'],
      ['یوں تو نے نور سے تعلیم کے سنوارا ہے', 'بنا کے شمس و قمر ذروں کو ابھارا ہے'],
      ['جہاں کہیں بھی درخشاں ہیں مہر و ماہ ترے', 'مٹا رہے ہیں اندھیرے سبھی جہالت کے'],
      ['یہ عہد کرتے ہیں تجھ سے اے درس گاہِ عظیم', 'رکھیں گے اونچا عَلم علم کا بفضلِ کریم'],
      ["دعا لبوں پہ سدا ' ربِّ زدنی علما ' رہے", 'کہ شہرِ علم کے در سے سبھی کو فیض ملے'],
    ],
  },
  dua: {
    title: 'دعا',
    titleEn: 'Dua',
    author: 'علامہ اقبالؔ',
    authorEn: 'Allama Iqbal',
    couplets: [
      ['لب پہ آتی ہے دعا بن کے تمنا میری', 'زندگی شمع کی صورت ہو خدایا میری'],
      ['دور دنیا کا مرے دم سے اندھیرا ہو جائے', 'ہر جگہ میرے چمکنے سے اجالا ہو جائے'],
      ['ہو مرے دم سے ہی یوں میرے وطن کی زینت', 'جس طرح پھول سے ہوتی ہے چمن کی زینت'],
      ['زندگی ہو مری پروانے کی صورت یارب', 'علم کی شمع سے ہو مجھ کو محبت یارب'],
      ['ہو مرا کام غریبوں کی حمایت کرنا', 'درد مندوں سے ضعیفوں سے محبت کرنا'],
      ['مرے اللہ برائی سے بچانا مجھ کو', 'نیک جو راہ ہو اس رہ پہ چلانا مجھ کو'],
    ],
  },
  nationalAnthem: {
    title: 'قومی ترانہ',
    titleEn: 'National Anthem',
    author: 'حفیظؔ جالندھری',
    authorEn: 'Hafeez Jalandhari',
    couplets: [
      ['پاک سر زمین شاد باد', 'کشورِ حسین شاد باد'],
      ['تو نشانِ عزمِ عالی شان', 'ارضِ پاکستان!'],
      ['مرکزِ یقین شاد باد'],
      ['پاک سر زمین کا نظام', 'قوتِ اخوتِ عوام'],
      ['قوم، ملک، سلطنت', 'پائندہ تابندہ باد', 'شاد باد منزلِ مراد'],
      ['پرچمِ ستارہ و ہلال', 'رہبرِ ترقی و کمال'],
      ['ترجمانِ ماضی شانِ حال', 'جانِ استقبال'],
      ['سایہءِ خدائے ذوالجلال'],
    ],
  },
};

/**
 * PLACEHOLDER testimonials — filler quotes attributed to generic roles.
 * Replace with real, attributed testimonials when the college supplies them.
 */
export const testimonials = {
  isFiller: true,
  items: [
    {
      quote:
        'GCE didn’t just teach me how to teach — it gave me the confidence to walk into any classroom and make a difference. The teaching practice was the turning point in my career.',
      author: 'B.Ed (Hons) Graduate, Class of 2024',
    },
    {
      quote:
        'As a parent, what reassured me most was the care. From the counselling centre to the way teachers know each student by name, my daughter has been in good hands.',
      author: 'Parent of a current student',
    },
    {
      quote:
        'I trained here decades ago and still carry what I learned into my own classroom every day. The legacy is real — GCE shapes teachers for life.',
      author: 'Alumnus & Schoolteacher',
    },
  ],
};
