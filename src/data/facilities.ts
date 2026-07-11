/*
 * Campus facilities. `slug` doubles as the image gallery folder under
 * src/assets/content/facilities/<slug>/. `category` groups the cards.
 * `isFiller` flags any facility whose description is placeholder copy.
 */

export interface Facility {
  slug: string;
  name: string;
  category: 'Academic' | 'Labs' | 'Student Support' | 'Grounds & Amenities';
  blurb: string;
  body: string[];
  note?: string;
  badge?: string;
  isFiller?: boolean;
}

export const facilities: Facility[] = [
  {
    slug: 'library',
    name: 'Library',
    category: 'Academic',
    badge: '10,000+ books',
    blurb: 'A quiet, well-stocked library with more than 10,000 books across every subject.',
    body: [
      'The GCE Library serves students and teachers alike, holding more than 10,000 books across a wide range of subjects, with new titles purchased regularly.',
      'Every book is catalogued with a serial number and a full record — author, title, year, date, price, pages and size — and arranged subject-wise on the shelves so readers can find what they need quickly.',
      'A calm, peaceful reading environment and a strong reference collection support study, research and assignments.',
    ],
  },
  {
    slug: 'micro-teaching-lab',
    name: 'Micro-Teaching Lab',
    category: 'Academic',
    badge: 'Recently established',
    blurb: 'A dedicated training facility where student-teachers refine their craft through the micro-teaching cycle.',
    body: [
      'The Micro-Teaching Lab is a professional training facility designed to strengthen the teaching competencies of prospective teachers through structured, practice-based learning in a controlled, supportive environment.',
      'It was recently established under the supervision of Principal Prof. Zahoor Ahmed. The In-charge is Prof. Sharjeel Ahmed, an experienced master trainer with active association with international teacher-education organisations.',
      'The lab operates on the recognised Micro-Teaching Cycle — Plan → Teach → Feedback → Re-plan → Re-teach → Re-feedback — helping teachers develop core skills such as lesson planning, questioning, explanation, reinforcement and classroom management, and bridging the gap between theory and classroom practice.',
    ],
    note: 'In-charge: Prof. Sharjeel Ahmed',
  },
  {
    slug: 'teachers-resource-centre',
    name: "Teachers' Resource Centre",
    category: 'Academic',
    blurb: 'A collaborative space for designing, adapting and sharing high-quality teaching aids and learning resources.',
    body: [
      "The Teachers' Resource Centre enhances teaching effectiveness through the development, use and sharing of high-quality teaching and learning resources, aligned with curriculum goals and modern pedagogy.",
      'It was recently established under the supervision of Principal Prof. Zahoor Ahmed. The In-charge is Prof. Farah Kanwal, who has extensive experience developing effective teaching and learning resources.',
      'The centre holds teaching aids for a range of subjects — Urdu and English grammar, Geography, History, Islamiyat, Physics, Chemistry and Biology — along with printed charts, geometrical instruments and 3D models for primary and secondary levels. Students heading out on teaching practice can borrow ready-made aids for short periods, a great help during their practicum.',
    ],
    note: 'In-charge: Prof. Farah Kanwal',
  },
  {
    slug: 'classrooms',
    name: 'Classrooms',
    category: 'Academic',
    blurb: 'Spacious, well-lit rooms with audio systems and a presentation dais in every class.',
    body: [
      'Our classrooms comfortably accommodate 80 to 90 students and are equipped with microphones for clear communication.',
      'Walls are decorated with educational charts, and rooms are well-lit and airy with excellent natural ventilation.',
      'Every classroom has a dais, so teachers and students can practise presentations and build the confidence they will need in their teaching careers.',
    ],
  },
  {
    slug: 'cpd-hall',
    name: 'CPD Hall',
    category: 'Academic',
    badge: '100 seats',
    blurb: 'A 100-seat Continuous Professional Development hall for orientations, workshops and functions.',
    body: [
      'CPD stands for Continuous Professional Development. The hall is used for orientations, workshops and functions, with a maximum capacity of 100 seats.',
      'It is fully equipped with a projector, computer system and speaker system, and is a well-furnished, air-conditioned room with good lighting and exhaust fans.',
    ],
  },
  {
    slug: 'ict-lab',
    name: 'ICT Lab',
    category: 'Labs',
    blurb: 'An organised computer lab with 16 systems, projector and printing — the hub for digital skills.',
    body: [
      'The ICT Lab houses 16 computers (including four SSD systems), a scanner and two printers for study and office work, and a projector for presentations and teaching.',
      'Air-conditioned and fitted with revolving chairs, it also functions as a small museum area.',
      'Students use the lab for typing, research, presentations and practice, supporting modern learning and digital skills.',
    ],
  },
  {
    slug: 'bio-lab',
    name: 'Biology Lab',
    category: 'Labs',
    blurb: 'A well-equipped biology lab with microscopes, models, specimens and space for 30 students.',
    body: [
      'The GCE Biology Lab is well equipped for practical learning, with a whiteboard, charts and biology models used to teach concepts.',
      'It offers simple and compound microscopes, a human skeleton model, stuffed animals, dissection boxes and trays, glassware such as beakers and test tubes, specimens, and permanent slides for microscopic study.',
      'Chemicals are provided for practical work, and the lab comfortably accommodates around 30 students at once.',
    ],
  },
  {
    slug: 'chemistry-lab',
    name: 'Chemistry Lab',
    category: 'Labs',
    badge: 'Seats 40',
    blurb: 'A fully equipped chemistry lab meeting all safety standards, accommodating 40 students.',
    body: [
      'The Chemistry Lab is well equipped with all basic and necessary apparatus, including a centrifuge machine and high-quality glassware.',
      'It stocks the chemicals required for both intermediate and degree-level work.',
      'Up to 40 students can carry out lab work at a time, and the lab follows standard operating procedures in line with all safety measures.',
    ],
  },
  {
    slug: 'physics-lab',
    name: 'Physics Lab',
    category: 'Labs',
    blurb: 'A well-organised physics lab with mechanical, electrical and optical instruments for 30–35 students.',
    body: [
      'The Physics Lab is well organised and equipped with mechanical, electrical and optical instruments for experiments and activities, along with a whiteboard for explanations.',
      'Around 30 to 35 students can work in the lab at once.',
      'The lab helps students understand concepts and improves their observation and problem-solving skills in an organised, learning-friendly environment.',
    ],
  },
  {
    slug: 'science-education-centre',
    name: 'Science Education Centre',
    category: 'Labs',
    blurb: 'A science facility equipped with higher-level machinery for advanced practical work.',
    body: [
      'The Science Education Centre is equipped with higher-level machinery to support advanced scientific practical work at the college.',
    ],
    isFiller: true,
  },
  {
    slug: 'podcast-studio',
    name: 'Podcast Studio',
    category: 'Labs',
    blurb: 'A well-equipped studio for recording podcasts and educational videos.',
    body: [
      'GCE has a well-equipped podcast studio inside the college for recording podcasts and other videos in a peaceful, comfortable environment.',
      'It features an attractive backdrop suited to professional recording, good-quality microphones, camera stands and tripods, and ring lights and other lighting to keep the video bright. Chairs and tables are arranged to the camera angle.',
      'A general management team handles the recording process, with a separate backup team on hand for any technical issues.',
    ],
  },
  {
    slug: 'counseling-centre',
    name: 'Psychological Guidance & Counseling Centre',
    category: 'Student Support',
    badge: 'First of its kind in Sindh',
    blurb: 'The first college centre of its kind in Sindh, caring for students’ mental and emotional well-being.',
    body: [
      'GCE is the first college in Sindh to establish a dedicated psychological guidance and counselling centre for its students.',
      'Here students can talk freely about the problems and challenges of student life. The centre looks after their mental and emotional well-being, providing a safe, comfortable space where everyone is listened to with care and without judgment.',
      'It gives students a place to release stress and feel heard — supporting them not only in their studies but in their personal growth.',
    ],
  },
  {
    slug: 'girls-common-room',
    name: "Girls' Common Room",
    category: 'Student Support',
    blurb: 'A dedicated common room for girls, with a prayer room, sick room and attached washroom.',
    body: [
      'The Girls\' Common Room is dedicated to Prof. Nishat Sumbul, who served as the Discipline Committee In-charge and looked after girls\' issues with great dedication. The room was officially dedicated to her name in 2020 in recognition of her services.',
      'For many years it has served as a sitting area for girls. It includes a separate prayer room that can also be used as a sick room for girls, an attached washroom, and carpeting throughout.',
    ],
    note: 'In-charge: Prof. Syeda Saeed Fatima',
  },
  {
    slug: 'first-aid',
    name: 'First-Aid Facility',
    category: 'Student Support',
    blurb: 'A stocked first-aid kit for quick help — so students and staff always feel safe.',
    body: [
      'GCE maintains a first-aid facility for students and staff, stocked with basic pain-relief medicine, bandages, and items for both bleeding injuries and muscle or bone pain.',
      'It provides quick help and reduces the risk of minor problems becoming serious, so students feel safe knowing help is available at the college. A box of masks is also kept for anyone feeling unwell.',
    ],
  },
  {
    slug: 'fire-safety',
    name: 'Fire Safety',
    category: 'Student Support',
    blurb: 'Fire extinguishers, blankets, buckets and alarms placed throughout the campus.',
    body: [
      'Fire-safety equipment is available across the college — fire extinguishers, fire blankets, fire buckets and fire alarms are placed in classrooms, corridors, labs and near the main entrance.',
      'A list of fire-safety instructions is displayed on the notice board for everyone\'s guidance.',
    ],
  },
  {
    slug: 'it-zone',
    name: 'IT Zone',
    category: 'Grounds & Amenities',
    badge: '250–300 capacity',
    blurb: 'A spacious 250–300 seat events hall — the stage for the college’s ceremonies and conferences.',
    body: [
      'The IT Zone is a large, spacious hall with room for about 250 to 300 people, and is the main venue for the college\'s events, programmes and functions.',
      'It has a proper stage set up for seminars, ceremonies and competitions, with microphones, a projector for videos and slides, and a sound system with large speakers so everyone can hear clearly.',
      'Comfortable seating — sofas and chairs — accommodates students, teachers and guests through long events, and a water cooler is on hand. It is central to college life.',
    ],
  },
  {
    slug: 'bagh-e-muneer',
    name: 'Bagh-e-Muneer',
    category: 'Grounds & Amenities',
    badge: 'Memorial garden',
    blurb: 'A well-kept memorial garden dedicated to the late Prof. Muneer, ringed by fruit trees and flowers.',
    body: [
      'Bagh-e-Muneer is a well-managed garden dedicated to the memory of Muneer, who served GCE for many years with great dedication in the administration office. His sudden passing was a profound loss, and the garden honours his service.',
      'With nine to ten benches, surrounded by fruit trees and flowers of many kinds, it sits under the watch of the teachers\' rooms whose windows open onto it.',
      'A sign board reads "پھول توڑنا منع ہے" (picking flowers is forbidden), and dustbins keep the garden clean.',
    ],
  },
  {
    slug: 'lawns',
    name: 'Lawns',
    category: 'Grounds & Amenities',
    blurb: 'Green, shaded lawns across the campus — spaces to relax, study and take a breath.',
    body: [
      'Three to four lawns are spread across the college. One large, open lawn faces the sports ground; another, a little ahead, has a shady tree with seating beneath it; and one more sits near the photocopy shop.',
      'All the lawns have green grass and plants that keep the environment fresh, with comfortable seating for relaxing, studying or short breaks. Students also gather here for games.',
      'A relaxation area has small rocks, benches and tree seating, and fruit trees grow throughout — guava, lemon, mulberry, fig, plum, berries and even coconut — making the campus green, peaceful and calm.',
    ],
  },
  {
    slug: 'sports',
    name: 'Sports Facilities',
    category: 'Grounds & Amenities',
    blurb: 'An open sports ground, an outdoor area and an indoor arena for a full range of games.',
    body: [
      'GCE\'s sports ground is a large open space with green grass, basketball and football nets, shaded seating for rest and spectators, and equipment provided for student use — ideal for physical-education classes, training and matches.',
      'A separate outdoor sports area, wide enough for three or four teams to play at once, hosts volleyball and other games where students practise during their sports units.',
      'Indoors, the Sports Arena Room supports table tennis and board games, with cupboards for equipment, proper lighting, ventilation and a clean, calm environment for indoor practice.',
    ],
  },
  {
    slug: 'parking',
    name: 'Parking Area',
    category: 'Grounds & Amenities',
    blurb: 'Covered, organised on-campus parking that keeps vehicles safe from sun and rain.',
    body: [
      'A covered parking area inside the college lets staff and students park safely, with the roof protecting vehicles from sun and rain.',
      'The open, organised layout allows easy entry and exit and has space for multiple vehicles, with trees around the area helping keep it cool. The space is clean and accessible.',
    ],
  },
  {
    slug: 'photocopy-shop',
    name: 'Photocopy Shop',
    category: 'Grounds & Amenities',
    blurb: 'An on-campus shop for photocopies, printing, stationery and study materials.',
    body: [
      'A photocopy shop inside the college makes copies, printing and photos quick and easy to get without leaving campus.',
      'It also stocks stationery — pens, pencils, notebooks, markers — along with notes and study materials, and is open to all students during college hours.',
    ],
  },
];

export const facilityCategories = [
  'Academic',
  'Labs',
  'Student Support',
  'Grounds & Amenities',
] as const;

export const facilityBySlug = (slug: string) => facilities.find((f) => f.slug === slug);
