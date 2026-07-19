/*
 * Student-life events, grouped for the Student Life page. `slug` matches the
 * gallery folder under src/assets/content/events/<slug>/.
 * `isFiller` marks descriptions written as placeholder copy (see README).
 */

export type EventGroup =
  | 'Celebrations & National Days'
  | 'Academics & Practicum'
  | 'Workshops & Seminars'
  | 'Competitions & Quizzes';

export interface CollegeEvent {
  slug: string;
  name: string;
  group: EventGroup;
  date?: string;
  blurb: string;
  body: string[];
  isFiller?: boolean;
}

export const events: CollegeEvent[] = [
  // ---------------------------------------- Celebrations & National Days ---
  {
    slug: 'orientation-day',
    name: 'Orientation Day',
    group: 'Celebrations & National Days',
    blurb: 'A warm welcome for every new batch — introductions, guidance and a tour of the campus.',
    body: [
      'Orientation Day is held before the beginning of every new batch to welcome new students. The programme commences with Quranic recitation by a student, followed by an interactive session with the faculty.',
      'Students are given a proper introduction to the college. The vision, mission and the history of the college are explained. The Principal and all faculty members are introduced one by one, with students told which teacher will teach which subject.',
      'Three, four senior students share their experiences, motivate and guide the newcomers. At last, they take them on a tour of the classrooms and facilities so they feel confident and comfortable at the college.',
    ],
  },
  {
    slug: 'farewell',
    name: 'Farewell',
    group: 'Celebrations & National Days',
    blurb: 'A heartfelt send-off for graduating students, celebrated across the 2024 and 2025 cohorts.',
    body: [
      'The Farewell is a warm and memorable send-off for graduating students, bringing juniors, seniors and faculty together to celebrate the outgoing batch.',
      "Organized for students from both the 2024 and 2025 cohorts. The day is filled with performances, speeches, tributes and photographs. It's a memorable finale to our students' journey at GCE and an emotional thank you to the teachers who shaped it.",
    ],
    isFiller: true,
  },
  {
    slug: 'teachers-day',
    name: "Teachers' Day",
    group: 'Celebrations & National Days',
    date: '5 October',
    blurb: 'Every semester performs to honour their teachers — mimicry, poetry, songs and gifts.',
    body: [
      "Teachers' Day is celebrated on 5 October in the IT Zone. Each semester is given 20 minutes to perform for their teachers in their own creative way.",
      'Students perform mimicry, poetry, speeches and songs to show their respect, and every semester takes part enthusiastically.',
      "At the end of the programme, students present gifts to their teachers. Teachers' Day brings a fun, respectful, and memorable celebration for our teachers and students.",
    ],
  },
  {
    slug: 'independence-day',
    name: 'Independence Day',
    group: 'Celebrations & National Days',
    date: '14 August',
    blurb: 'A lively, patriotic celebration in the IT Zone with performances, speeches and refreshments.',
    body: [
      'Independence Day is celebrated on 14th August in the IT Zone, decorated with flags, balloons and banners. All college staff and students take part, and guests from other schools are invited.',
      'Every semester performs in its own way. The event featured national songs, cultural performances and patriotic speeches by both students and teachers.',
      'Student volunteers manage the event and are later awarded certificates. Food and refreshments are also catered by the college. A lively, educational day that shows respect for the country.',
    ],
  },
  {
    slug: 'defence-day',
    name: 'Defence Day',
    group: 'Celebrations & National Days',
    date: '6 September',
    blurb: 'Honouring the courage and sacrifices of Pakistan’s soldiers with Tilawat, speeches and tributes.',
    body: [
      'Defence Day is observed on 6 September in the IT Zone, with all students and staff taking part. The event begins with Tilawat to bless the programme.',
      'Speeches recall the courage and sacrifices of Pakistani soldiers, students perform patriotic songs and poems, and teachers share their thoughts.',
      'The programme encourages students to remember the nation\'s heroes, teaching patriotism, history and national pride in a respectful, inspiring setting.',
    ],
  },
  {
    slug: 'iqbal-day',
    name: 'Iqbal Day — Fikr-e-Iqbal',
    group: 'Celebrations & National Days',
    date: '9 November',
    blurb: 'A yearly tribute to Allama Iqbal through role-play, poetry and speeches.',
    body: [
      'Iqbal Day is celebrated on 9 November every year in the IT Zone, with all staff and students invited and students from every programme and semester taking part.',
      'Performances include role-play, recitations of Iqbal\'s poetry, speeches and other activities.',
      'The celebration helps students understand Iqbal\'s ideas and philosophy while encouraging confidence, creativity and teamwork.',
    ],
  },
  {
    slug: 'eid-milad',
    name: 'Eid Milad-un-Nabi ﷺ',
    group: 'Celebrations & National Days',
    blurb: 'A reverent celebration marking the birth of the Holy Prophet ﷺ.',
    body: [
      'The college observes Eid Milad-un-Nabi ﷺ with reverence and devotion, bringing students and staff together in celebration.',
      'The programme features Tilawat, Naat recitations and speeches reflecting on the life and teachings of the Holy Prophet ﷺ, creating a spiritually uplifting atmosphere across the campus.',
    ],
    isFiller: true,
  },
  {
    slug: 'shah-abdul-latif-day',
    name: 'Shah Abdul Latif Bhitai Day',
    group: 'Celebrations & National Days',
    date: '8 August',
    blurb: 'Celebrating the life, poetry and message of the great Sindhi Sufi poet.',
    body: [
      'Shah Abdul Latif Bhitai Day is celebrated on 8th August in the IT Zone, opening with Tilawat. Sindhi professors of the college formally inaugurate the event.',
      'Speeches explore Bhitai\'s life and work, staff perform songs in his honour, and interesting stories about him are shared.',
      'Lasting about an hour and a half, the celebration, attended by the whole college, helps students appreciate their cultural heritage.',
    ],
  },
  {
    slug: 'plantation-day',
    name: 'Plantation Day',
    group: 'Celebrations & National Days',
    blurb: 'Planting for a greener future — led by the Principal, joined by teachers and students.',
    body: [
      'GCE celebrates Plantation Day with great spirit, organised around the theme of a greener future. Planting takes place inside the college, in the lawns.',
      'The Principal plants the first sapling, followed by the teachers and then the students, who plant a variety of trees and plants under their teachers\' guidance.',
      'The activity reflects love for the country and environment, encourages students to protect nature, and promotes teamwork and responsibility while keeping the campus clean and green.',
    ],
  },
  {
    slug: 'picnic-day',
    name: 'Picnic Day',
    group: 'Celebrations & National Days',
    date: '25 February 2025',
    blurb: 'A fun, well-organised day out for students and staff, with BBQ and college transport.',
    body: [
      'The college arranged a picnic on 25 February 2025, with students from different programmes and semesters taking part alongside most staff members and the Principal.',
      'Reporting time was 8:00 am, the menu included BBQ provided by the college, and transport was arranged by the college.',
      'Conducted with good safety and care, everyone returned safely. It was a fun and enjoyable experience for all.',
    ],
  },

  // ------------------------------------------------- Academics & Practicum ---
  {
    slug: 'teaching-practice',
    name: 'Teaching Practice',
    group: 'Academics & Practicum',
    blurb: 'The heart of teacher training — students teach real classes in schools under supervision.',
    body: [
      'Teaching practice is a central part of teacher education at GCE. Students are placed in government and private schools where they teach real classes and gain practical experience.',
      'In the 4-year programme, students go on practicum in the second year (3rd & 4th semesters, 15 days) and the fourth year (7th & 8th semesters). They deliver 12 lessons in the 3rd semester, 20 in the 4th, and 24 across the 7th and 8th. Each block including criticism and final lessons. In the 2.5-year programme, practicum runs for a month in the fifth semester.',
      'Students use charts, models, visual and audio aids and real objects, prepare growth and professional portfolios, and are observed and guided by faculty. Building lesson-planning, classroom-management and confidence skills that shape effective future teachers.',
    ],
  },
  {
    slug: 'internal-exams',
    name: 'Internal Exams',
    group: 'Academics & Practicum',
    blurb: 'End-of-semester assessments that prepare students thoroughly for external examinations.',
    body: [
      "GCE holds internal exams at the end of every semester, with a full schedule planned for each programme and it's semesters and conducted by the whole college staff.",
      'These exams check students\' preparation and readiness for external examinations, and internal grading feeds into the external grading system.',
      "Internal marks combine attendance, portfolio, assignment and presentation marks. Reflecting the college's commitment to assessing students properly, not just teaching them.",
    ],
  },
  {
    slug: 'cr-elections',
    name: 'Class Representative Elections',
    group: 'Academics & Practicum',
    blurb: 'A fair, professional election each semester — giving every student a chance to lead.',
    body: [
      'CR elections are held every semester, following a college policy that class representatives change each term so every student has a chance to lead.',
      'Elections are run professionally: ballot papers are printed with nominees\' names, students select two candidates, and votes are counted openly in front of everyone.',
      'Results are announced on the ground once counting is complete. This event helps students learn about responsibility, leadership and fair process.',
    ],
  },
  {
    slug: 'magazine',
    name: 'College Magazine — "Mashal-e-Ilm"',
    group: 'Academics & Practicum',
    blurb: 'The college’s own magazine, written and made with students, capturing GCE’s story.',
    body: [
      'GCE publishes its own magazine, "Mashal-e-Ilm", produced with an editor and sub-editors.',
      "It carries full information about the college. It's vision, mission and history — along with photographs of events kept as memories.",
      "Students take part in making the magazine, contributing articles, stories and poetry. Selected work is published under the student's name.",
    ],
  },

  // ------------------------------------------------- Workshops & Seminars ---
  {
    slug: 'seminar-career-counseling',
    name: 'Seminar: Career Counseling',
    group: 'Workshops & Seminars',
    blurb: 'A one-day seminar guiding B.Ed students through careers in education, at home and abroad.',
    body: [
      'A one-day seminar on Career Counseling was held in the IT Zone, organised specially for B.Ed. students. The guest speaker was certified trainer Muhammad Humail Ashrafi.',
      'He guided students through career options in education. Students learned about teaching, training and leadership — and shared job opportunities in Pakistan as well as international options such as global teaching programmes.',
      'The speaker offered tips on skill-building, communication and confidence, and students asked questions and engaged throughout. It was a genuinely helpful session for thinking clearly about the future.',
    ],
  },
  {
    slug: 'seminar-mental-health',
    name: 'Seminar: Mental Health',
    group: 'Workshops & Seminars',
    blurb: 'A World Mental Health Day lecture and panel raising awareness of well-being.',
    body: [
      'GCE marked World Mental Health Day with a special programme in the IT Zone — a lecture and panel discussion to which the whole college was invited.',
      'The main speaker was Prof. Salman Shahzad (University of Karachi), joined by Prof. Mehdi, Prof. Safdar, Prof. Sharjeel and Prof. Aoun.',
      'A detailed question-and-answer session followed, in which students discussed their well-being openly and talked about the home and personal issues that affect study — building awareness of the importance of caring for mental health.',
    ],
  },
  {
    slug: 'seminar-women-leaders',
    name: 'Seminar: Women as Educational Leaders',
    group: 'Workshops & Seminars',
    date: '3 May 2025',
    blurb: 'Part of the dynamic seminar series — on women’s leadership in education.',
    body: [
      'A seminar on Women as Educational Leaders was held on 3 May 2025 in the IT Zone, part of the college\'s dynamic seminar series. The guest speaker was Prof. Dr. Safia Urooj of the University of Karachi.',
      'She spoke about how women can become strong leaders in the education field, and the importance of women in teaching and management.',
      'Supervised by Principal Prof. Zahoor Ahmed and organised by Prof. Sharjeel Ahmed, the motivating session helped students reflect on their future role in education.',
    ],
  },
  {
    slug: 'workshop-action-research',
    name: 'Workshop: Action Research',
    group: 'Workshops & Seminars',
    date: '20 January 2025',
    blurb: 'Preparing students to solve real classroom problems through research.',
    body: [
      'The Action Research Workshop was held on 20 January 2025, organised for students and conducted by Prof. Sharjeel, Prof. Habib Ahmed and Prof. Asim.',
      'Students learned how to use action research in teaching practice — solving classroom problems through structured research, and planning, observing and improving lessons — with real classroom examples.',
      'The interactive, easy-to-follow session helped students prepare for their upcoming teaching practicums.',
    ],
  },
  {
    slug: 'workshop-data-smart',
    name: 'Workshop: Data-Smart Teachers',
    group: 'Workshops & Seminars',
    date: '31 Jan – 13 Feb',
    blurb: 'A 14-day workshop building digital skills in Excel and spreadsheets for future teachers.',
    body: [
      'GCE arranged a Data-Smart Teachers workshop, organised by Prof. Talha Mansoor and held in the ICT Lab for B.Ed. (2.5-year) students.',
      'Running for 14 days, from 31 January to 13 February, it was designed for aspiring teachers and covered knowledge of Excel and spreadsheets.',
      'Well managed and effective, the workshop strengthened students\' digital skills.',
    ],
  },
  {
    slug: 'workshop-file-organization',
    name: 'Workshop: File Organization & Development',
    group: 'Workshops & Seminars',
    date: '10 October 2024',
    blurb: 'Practical file-management skills for B.Ed students’ practicum work.',
    body: [
      'The File Organization & Development Workshop was held on 10 October 2024, arranged for B.Ed. students to support their practicum work and led by Prof. Rabia.',
      'The session focused on file-management and development skills, guiding students on how to organise academic files.',
      'Many students attended, improving their professional skills and understanding the importance of good teaching practices.',
    ],
  },
  {
    slug: 'workshop-ilm-e-tajweed',
    name: 'Workshop: Ilm-e-Tajweed',
    group: 'Workshops & Seminars',
    blurb: 'Teaching the rules of Tajweed for correct recitation of the Holy Qur’an.',
    body: [
      'The Ilm-e-Tajweed workshop is planned and conducted by Prof. Habib-un-Nabi as resource person, held in the CPD Hall with a projector used to explain topics clearly.',
      'Organised for B.Ed. (Hons) second-semester students, it teaches the importance and rules of Tajweed in Qur\'an recitation, with active student participation.',
      "Certificates are awarded to all students at the end of the workshop. It helps them recite the Qur'an correctly and motivates daily practice.",
    ],
  },
  {
    slug: 'workshop-learning-with-ai',
    name: 'Workshop: Learning with AI',
    group: 'Workshops & Seminars',
    date: '4 October',
    blurb: '"Learning with AI Like a Pro Teacher" — smart tools for the modern classroom.',
    body: [
      'A training workshop, "Learning with AI Like a Pro Teacher", was held on 4 October in the IT Zone, conducted by Ms. Huma Safdar.',
      'Students learned how AI can help in study and teaching, were introduced to smart classroom tools, and were guided on the proper and responsible use of AI, with activities and short tests along the way.',
      'The informative session encouraged questions and idea-sharing, and students who completed the tests received certificates.',
    ],
  },
  {
    slug: 'workshop-micro-teaching',
    name: 'Workshop: Micro-Teaching',
    group: 'Workshops & Seminars',
    date: '28 January 2026',
    blurb: 'A professional-development session on the micro-teaching method for B.Ed students.',
    body: [
      'A session on Micro-Teaching was held on 28 January 2026 in the IT Zone. It was a professional-development session for B.Ed. students with resource person Prof. Sharjeel Ahmed.',
      'Held under the supervision of Principal Prof. Zahoor Ahmed, it explained what micro-teaching is and how to use it in the classroom.',
      'Students from different semesters attended and learned to teach in a more confident and effective way.',
    ],
  },
  {
    slug: 'workshop-practicum',
    name: 'Workshop: Teaching Practicum',
    group: 'Workshops & Seminars',
    blurb: 'Detailed guidance on observation, lesson planning and self-assessment for practicum.',
    body: [
      'The Teaching Practicum Workshop was held in the IT Zone, with students and teachers invited, to prepare students for their practicum.',
      'It explained observation and non-observation, introduced many observation tools, discussed self-assessment in detail, and guided lesson planning for each semester, including a shared demo lesson.',
      'Well organised and informative, the workshop taught students the important points of teaching practice.',
    ],
  },
  {
    slug: 'workshop-video-editing',
    name: 'Workshop: Video Editing',
    group: 'Workshops & Seminars',
    blurb: 'Hands-on video-editing skills to prepare teachers for digital and hybrid learning.',
    body: [
      'A hands-on Video Editing Workshop was organised at GCE to prepare students for digital and hybrid learning, with resource person Prof. Talha Mansoor.',
      'Students learned basic and advanced video-editing skills through practical examples and practised editing throughout the session, supported and guided by Principal Prof. Dr. Zahoor Ahmed.',
      'Focusing on mastering one skill at a time, the workshop helped future teachers build new skills for modern classrooms.',
    ],
  },

  // ------------------------------------------------ Competitions & Quizzes ---
  {
    slug: 'art-exhibition',
    name: 'Art Exhibition',
    group: 'Competitions & Quizzes',
    blurb: 'Ten-plus stalls of student artwork, judged for creativity in the IT Zone.',
    body: [
      'The Art Exhibition, organised by students with focal person Prof. Syeda Saeed Fatima, was held in the IT Zone with all teachers, staff and students invited.',
      'The hall was decorated with about 10 to 11 stalls, each displaying different student artwork. Students presented their creative projects and designs that teachers and the Principal visited and appreciated with comments on each.',
      'Three judges evaluated the work and awarded first, second and third positions, creating a positive and inspiring environment that motivated students to show their creativity.',
    ],
  },
  {
    slug: 'flower-exhibition',
    name: 'Flower Exhibition',
    group: 'Competitions & Quizzes',
    blurb: 'Each semester decorates its own themed space with flowers and pots, judged for creativity.',
    body: [
      'The Flower Exhibition saw every semester take part, each given a separate space to decorate around a chosen theme, with flowers labelled and named and every student bringing a creatively decorated flower pot.',
      'The Principal of another college was invited alongside GCE\'s Principal, and teachers and staff visited each semester\'s space in turn.',
      "Judges scored each semester's work and three winners were selected and awarded prizes, with results announced in front of the students. The event created a fresh and positive environment in the college.",
    ],
  },
  {
    slug: 'essay-speech-poster',
    name: 'Essay, Speech & Poster Competitions',
    group: 'Competitions & Quizzes',
    blurb: 'Creative competitions tied to national days and current issues.',
    body: [
      'GCE holds essay-writing, speech and poster competitions tied to college programmes such as Independence Day and Sports Week, as well as current issues.',
      'Posters are designed around each day\'s topic and displayed on stage or walls during events, expressing themes of patriotism, social messages and awareness.',
      'These competitions develop students\' skills in expressing messages visually and verbally, and make college events colourful, attractive and engaging.',
    ],
  },
  {
    slug: 'rally',
    name: 'Awareness Rallies',
    group: 'Competitions & Quizzes',
    blurb: 'Rallies on national and social issues, led by the Principal and faculty.',
    body: [
      'GCE arranges rallies on various national and social occasions, joined by the whole faculty, staff and students from every programme and semester.',
      'A rally starts inside the college and moves to the main gate, with the Principal and teachers leading at the front and students following in lines, carrying banners and the Pakistan flag and raising slogans.',
      'The rallies raise awareness of important issues, build patriotism and responsibility, and give students a chance to freely express their views.',
    ],
  },
  {
    slug: 'sports-week',
    name: 'Sports Week',
    group: 'Competitions & Quizzes',
    blurb: 'An intra-college competition across every game — with GCE teams topping the table.',
    body: [
      'GCE\'s Sports Week, led by Prof. Nadia, is an intra-college competition featuring all kinds of games, with many students taking part in matches on the college sports ground.',
      'Practice sessions are held before the competition, and GCE teams took first position in Basketball, Badminton and Tug of War.',
      'Sports Week builds confidence and teamwork, and students thoroughly enjoy the games.',
    ],
  },
  {
    slug: 'quiz-caliphs',
    name: 'Quiz: The Rightly Guided Caliphs',
    group: 'Competitions & Quizzes',
    blurb: 'A quiz on the leadership and history of the Rightly Guided Caliphs.',
    body: [
      'The Caliphs Quiz was organised in the IT Zone, focused on the Rightly Guided Caliphs of Islam, with questions on their leadership and history.',
      'Students took part freely, the quiz was hosted by two students, and each participant answered five questions under a time limit.',
      'Winners, participants and volunteers received certificates, deepening interest in Islamic history and values.',
    ],
  },
  {
    slug: 'quiz-military-history',
    name: 'Quiz: History of Pakistan Military',
    group: 'Competitions & Quizzes',
    blurb: 'Testing knowledge of the Pakistan Army’s wars, heroes and achievements.',
    body: [
      'This quiz, held in the IT Zone, focused on the history of the Pakistan Army, with students participating enthusiastically.',
      'Questions covered wars, heroes and achievements; two students hosted, and each participant answered five questions per round within the given time.',
      'Students learned about national defence and built respect for Pakistan\'s armed forces, with certificates awarded to participants and volunteers.',
    ],
  },
  {
    slug: 'quiz-jashn-e-azadi',
    name: 'Quiz: Jashn-e-Azadi',
    group: 'Competitions & Quizzes',
    blurb: 'A quiz on Pakistan’s independence history and freedom movement.',
    body: [
      'The Jashn-e-Azadi Quiz, based on Pakistan\'s independence history, drew students from all programmes.',
      'Questions covered Pakistan\'s leaders and the freedom movement across different rounds, with students answering against a timer.',
      'Participants learned about national heroes and historical events, and all participants and volunteers received certificates.',
    ],
  },
  {
    slug: 'quiz-kashmir',
    name: 'Quiz: Kashmir',
    group: 'Competitions & Quizzes',
    blurb: 'Exploring the history, culture and struggle of Kashmir.',
    body: [
      'The Kashmir Quiz was held in the IT Zone, focused on the history and issues of Kashmir, with students taking part both as contestants and hosts.',
      'Questions explored Kashmiri culture and its struggles across multiple rounds, each participant answering five questions on time.',
      'Students learned about the importance of Kashmir, and certificates were given to participants and volunteers.',
    ],
  },
  {
    slug: 'quiz-pakistan-day',
    name: 'Quiz: Pakistan Day',
    group: 'Competitions & Quizzes',
    blurb: 'Marking 23 March and the Pakistan Resolution — the quiz GCE won against 19 teams.',
    body: [
      'GCE arranged the Pakistan Day Quiz in the IT Zone, based on 23 March and the Pakistan Resolution, with students from all programmes and semesters joining.',
      'Questions on the Pakistan Movement were run across different rounds by two hosts, with a timer for every question.',
      'Students gained historical knowledge and a stronger sense of patriotism, and participants and volunteers were awarded certificates.',
    ],
  },
  {
    slug: 'quiz-quran',
    name: "Quiz: Qur'an",
    group: 'Competitions & Quizzes',
    blurb: 'A quiz on the basic knowledge of the Holy Qur’an, its Surahs and meanings.',
    body: [
      "The Qur'an Quiz was organised in the IT Zone, focused on basic knowledge of the Holy Qur'an, with students participating with respect and great interest.",
      'Questions covered the Surahs and their meanings, with each student answering within time across several rounds.',
      'The quiz strengthened students\' Islamic knowledge and moral values, and certificates were given to all participants and volunteers.',
    ],
  },
];

export const eventGroups: EventGroup[] = [
  'Celebrations & National Days',
  'Academics & Practicum',
  'Workshops & Seminars',
  'Competitions & Quizzes',
];

/**
 * Student Life group sub-pages, in menu order. Drives SectionNav.
 * Celebrations & National Days is the /student-life landing (no overview hub);
 * the rest are static pages that live alongside the event-detail [slug] route.
 */
export const studentLifeNav = [
  { label: 'Celebrations & National Days', href: '/student-life' },
  { label: 'Academics & Practicum', href: '/student-life/academics-practicum' },
  { label: 'Workshops & Seminars', href: '/student-life/workshops-seminars' },
  { label: 'Competitions & Quizzes', href: '/student-life/competitions-quizzes' },
] as const;

export const eventBySlug = (slug: string) => events.find((e) => e.slug === slug);
