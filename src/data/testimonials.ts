/*
 * Alumni testimonials, shown on the homepage. From the college's Testimonials
 * Drive folder, one entry per alumnus. `folder` matches the portrait under
 * src/assets/content/testimonials/<folder>.jpg (a head-and-shoulders crop of
 * the supplied photo).
 *
 * `quote` is a short line lifted verbatim from the alumnus's own text for the
 * card. `story` is their complete testimonial, lightly copy-edited, shown in
 * full when the card is opened. A story block is a paragraph (string), a
 * subheading ({ heading }), or a bullet list (string[]).
 */

export type StoryBlock = string | { heading: string } | string[];

export interface Testimonial {
  name: string;
  folder: string;
  /** Batch or year of graduation, as the alumnus gave it. */
  batch: string;
  /** Current position or designation. */
  role: string;
  quote: string;
  story: StoryBlock[];
}

export const testimonials: Testimonial[] = [
  {
    name: 'Fatima Siddiqui',
    folder: 'Fatima_Siddiqui',
    batch: 'Batch 2022–2025',
    role: 'Education Specialist, STEAM Trainer, Curriculum Developer and Professional Development Trainer',
    quote: 'Today, when I look at the journey, I realize that GCE shaped not only what I do, but also who I am.',
    story: [
      'Fatima Siddiqui, a girl who once planned to pursue BS Political Science, was admitted to GCE, and it transformed her life entirely.',
      'When I look back, I realize that GCE gave me much more than an education. The trust of its leaders, their belief in my potential, and the opportunities they gave me pushed me to discover abilities I did not even know I had.',
      'GCE gave me the confidence to stand before an audience and speak, the courage to express my ideas, and the opportunity to turn those ideas into books and research articles. It helped me grow as a learner, a teacher, a researcher, and a leader. Most importantly, it taught me how to connect with students, understand them, inspire them, and be loved by them.',
      'I believe GCE is not just an institution. It is a family, a community, and a place that leaves a part of its legacy in everyone who becomes a part of it. It prepares its students for the real world, not only through content knowledge, but by developing the confidence, skills, and character needed to face life and make a difference.',
      'Being a part of GCE, I enjoyed every moment to the fullest. I cherished being a learner, and every opportunity became a chance for me to grow. The girl who entered GCE with a completely different plan could never have imagined the person she would become.',
      'Today, when I look at the journey, I realize that GCE shaped not only what I do, but also who I am.',
      'And if I were to recommend GCE to someone today, I would simply say: if you love teaching, believe in learning, and want to contribute to transforming society, become a part of GCE. Become part of the family, discover your potential, and be part of the change.',
    ],
  },
  {
    name: 'Hafsa Fatima',
    folder: 'Hafsa_Fatima',
    batch: 'Class of 2024',
    role: 'Counsellor',
    quote:
      'These four years have given me not only academic knowledge but also confidence, leadership skills, friendships, beautiful memories, and countless valuable life lessons.',
    story: [
      'My name is Hafsa Fatima, and I am a former student of Government College of Education. I was admitted to the college in 2021 and successfully graduated in 2024. Throughout my four years at the college, my overall experience was truly remarkable and unforgettable.',
      'First and foremost, I would like to appreciate the teachers. From the first semester to the eighth semester, we were fortunate to have highly qualified, well-educated, well-mannered, and dedicated teachers who had excellent command of their respective subjects. They demonstrated their expertise through effective teaching and always guided us whenever we faced difficulties or challenges.',
      'Whether it was lectures, examinations, assignments, or any other academic matter, the teachers were always supportive and cooperative. The teaching staff, administrative staff, and management of Government College of Education were extremely helpful and approachable. The principals who served during my time at the college were also very supportive and contributed positively to our academic environment.',
      'One of the best aspects of the college was that education was not limited to academics. A variety of co-curricular activities were also organized, including sports, celebrations of national days, and other events. Alhamdulillah, I actively participated in these activities and always tried to contribute to the best of my abilities. I was also fortunate to achieve good positions and receive certificates in recognition of my participation and performance.',
      'Alongside my participation in co-curricular activities and sports, I also remained focused on my studies. Alhamdulillah, I always made sincere efforts to perform well in my examinations and maintain a good academic record.',
      'Another thing I truly appreciated was the strong and respectful bond between students and teachers. We could approach our teachers without hesitation whenever we had a question, concern, or personal or academic difficulty. Their friendly and cooperative attitude made us feel comfortable and supported throughout our college journey.',
      'I also had the opportunity to serve as Chief CR, which was a very valuable and memorable experience for me. This responsibility helped me develop leadership, communication, coordination, and organizational skills. I also contributed through hostel duties and various other responsibilities whenever required.',
      'Overall, my experience at Government College of Education has been absolutely wonderful. These four years have given me not only academic knowledge but also confidence, leadership skills, friendships, beautiful memories, and countless valuable life lessons.',
      'Alhamdulillah, my time at the college has been one of the most beautiful and memorable chapters of my life. It is a part of my life that I will always cherish and can never forget.',
      'I am sincerely grateful to all my respected teachers, staff members, principals, and fellow students for making my college journey so meaningful and memorable.',
      'Thank you so much, Government College of Education, for being such an important and beautiful part of my life.',
    ],
  },
  {
    name: 'Hina Rafiq Siddiqui',
    folder: 'Hina_Rafiq_Siddiqui',
    batch: 'Class of 2025',
    role: 'Elementary Class Teacher',
    quote:
      'GCE gave me more than an education; it gave me confidence, practical skills, and the motivation to become a better teacher.',
    story: [
      'My journey at Government College of Education (GCE) was truly an amazing and enriching experience. From the first to the eighth semester, the supportive and encouraging attitude of both the teaching and non-teaching staff made my journey memorable.',
      [
        'During teaching practice in government schools, our teachers guided us in applying modern teaching methodologies, effective classroom strategies, technology, and teaching aids.',
        'The practical experiences helped me understand how to turn theoretical knowledge into effective classroom practices.',
        'In the 8th semester, under the supervision of inspiring, innovative, and passionate teachers, I developed a deeper understanding of educational research.',
        'I successfully completed my research on “Social Emotional Learning,” which further enhanced my research skills and understanding of students’ emotional and social development.',
        'The continuous guidance and encouragement from the GCE faculty helped me become a stronger, more confident, and well-prepared teacher.',
      ],
      { heading: 'Best memories' },
      [
        'Teaching practice and applying innovative teaching strategies.',
        'Learning from supportive and inspiring faculty members.',
        'Exploring educational technology and teaching aids.',
        'Completing my research project on Social Emotional Learning.',
        'Growing academically and professionally throughout the eight semesters.',
      ],
      'GCE gave me more than an education; it gave me confidence, practical skills, and the motivation to become a better teacher.',
      'I am proud to be a GCE graduate. My experience at GCE will always remain a meaningful and unforgettable part of my journey. Thank you, GCE!',
    ],
  },
  {
    name: 'Maham Allauddin',
    folder: 'Maham_Allauddin',
    batch: 'Class of 2022',
    role: 'EST (BPS-16)',
    quote: 'By studying at GCE you don’t just leave with a degree… you leave as a different, stronger version of you.',
    story: [
      'It’s where we learnt books and life.',
      [
        'Teachers treated us more like grown-ups. Less spoon-feeding, more self-study.',
        'In the era of GCE, we started understanding why we are studying, not just what.',
        'Projects, presentations, group work — all built confidence.',
      ],
      { heading: 'Best memories' },
      [
        'Functions, sports, debates, trips, farewell.',
        'Exam prep nights, canteen gossip, group photos.',
        'Worked as Urdu editor of the GCE magazine, Mashal-e-Ilm.',
        'Research and practicum days.',
      ],
      'We learnt to speak up, manage ourselves, and take responsibility.',
      'By the end, I can say that by studying at GCE you don’t just leave with a degree… you leave as a different, stronger version of you.',
    ],
  },
  {
    name: 'Maleeha Khan',
    folder: 'Maleeha_Khan',
    batch: 'Class of 2025',
    role: 'Cooperative Teacher & English Lecturer, Government College of Education',
    quote:
      'What makes GCE truly special is its welcoming academic culture, strong sense of collaboration, and commitment to excellence.',
    story: [
      'Subjects taught: Teaching of English, Expository Writing, and Functional English in the Four-Year B.Ed. and BS Education programs.',
      'My journey at Government College of Education has been an exceptionally enriching and inspiring experience. As a Cooperative Teacher and English Lecturer, I have had the privilege of teaching Teaching of English, Expository Writing, and Functional English to students of the Four-Year B.Ed. and BS Education programs. This role has not only strengthened my professional capabilities but has also allowed me to contribute meaningfully to the academic and personal development of future educators.',
      'What makes GCE truly special is its welcoming academic culture, strong sense of collaboration, and commitment to excellence. The institution provides an environment where teachers are encouraged to learn, innovate, share ideas, and grow professionally. The cooperation and dedication of the faculty and management have made my experience both fulfilling and memorable.',
      'I am particularly grateful for the leadership of our respected Principal, Mr. Zahoor Ahmed, whose vision, encouragement, and effective leadership play an important role in fostering a positive and progressive educational environment. His supportive approach reflects the values of professionalism, teamwork, and continuous improvement that make GCE a remarkable institution.',
      'Being a part of GCE has been a valuable chapter in my professional journey, and I feel proud to contribute to an institution that is dedicated to nurturing educators and shaping the future of education.',
    ],
  },
  {
    name: 'Shabih Nadeem',
    folder: 'Shabih_Nadeem',
    batch: 'Batch 2019–2023',
    role: 'Educator, Civilization Public School and College',
    quote: 'GCE was not just where I earned my degree — it was where I discovered my potential as an educator.',
    story: [
      'My four years at GCE were not just about earning a degree; they were about learning, growing, and discovering the educator I wanted to become.',
      [
        'The hands-on teaching practice helped me develop strong classroom management skills and prepared me to confidently step into the professional world.',
        'The guidance, encouragement, and support of dedicated professors played an important role in shaping my confidence and professional growth.',
        'GCE provided me with an environment where I could learn beyond textbooks and develop the practical skills needed to become an effective teacher.',
        'Through presentations, activities, teaching practice, and continuous learning, I gradually transformed into a more confident and responsible educator.',
      ],
      { heading: 'Best memories' },
      [
        'Teaching practicum and hands-on classroom experiences.',
        'Learning from inspiring and supportive professors.',
        'Presentations, activities, and collaborative learning.',
        'The memorable moments shared with classmates throughout the four years.',
        'The journey of growing from a student into a confident professional educator.',
      ],
      'GCE gave me more than an academic qualification. It gave me the confidence, skills, and inspiration to pursue teaching as a meaningful profession.',
      'By the end, I can proudly say that GCE was not just where I earned my degree — it was where I discovered my potential as an educator and found the confidence to make a real impact in the lives of my students.',
    ],
  },
  {
    name: 'Wania Siddiqui',
    folder: 'Wania_Siddiqui',
    batch: 'Batch 2021–2025',
    role: 'Manager, PakQatar Takaful',
    quote:
      'Beyond academics, GCE gave me opportunities to explore my abilities, represent my institution, and grow with confidence.',
    story: [
      'My overall experience at Government College of Education (GCE) was truly wonderful and filled with memorable moments. Beyond academics, GCE gave me opportunities to explore my abilities, represent my institution, and grow with confidence.',
      [
        'One of the highlights of my journey was representing GCE in sports trips and competitions.',
        'Our team became regional winners and was the first team from our college to bring back awards and trophies, marking the beginning of a strong sports culture at GCE, Alhamdulillah.',
        'Alongside academics, I was also selected to participate in international research, where I made excellent progress and gained valuable experience.',
        'The curricular and co-curricular activities at GCE added immense value to my learning journey and made my time at the institution even more meaningful.',
        'The constant support and encouragement of my teachers gave me the confidence to recognize my abilities and represent GCE with pride.',
      ],
      { heading: 'Best memories' },
      'Representing GCE in sports competitions, bringing home awards and trophies, participating in international research, and sharing these achievements with my teachers and fellow students are some of the most cherished memories of my time at GCE.',
      'Looking back, I am deeply grateful to GCE and my teachers for believing in me, encouraging my potential, and giving me opportunities that helped shape my personal and professional journey.',
    ],
  },
  {
    name: 'Zain Riaz',
    folder: 'Zain_Riaz',
    batch: 'Class of 2022',
    role: 'Admin Executive',
    quote:
      'GCE gave me much more than an education, it gave me lifelong friendships, wonderful memories, and experiences that helped shape who I am today.',
    story: [
      'My time at GCE is something I will always remember fondly. Our entire batch shared a really special bond. We were always united and stood by each other, whether it was for studies, events, or just the everyday moments of college life. We were also fortunate to have such an incredible relationship with our teachers and even the Principal at the time.',
      'Being given the opportunity to serve as the Associate Editor of the English section of our college magazine was another experience that helped me come out of my shell and become much more confident in my abilities. The support, encouragement, and opportunities I received at GCE helped me grow not only academically, but also personally.',
      'Looking back, GCE gave me much more than an education, it gave me lifelong friendships, wonderful memories, and experiences that helped shape who I am today.',
    ],
  },
];
