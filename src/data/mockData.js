// Authentic imagery matching the Sanathana Gurukulam visual aesthetic

export const brandImages = {
  heroBanner: 'https://images.unsplash.com/photo-1599818817454-e694503932e6?auto=format&fit=crop&w=1920&q=80', // Temple courtyard with golden sunlight
  heroBannerAlt: 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1920&q=80',
  balaGurukulam: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80', // Indian traditional celebration/learning
  yuvaGurukulam: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', // Contemplative youth in ancient setting
  sadhakaGurukulam: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80', // Mindful meditation in temple
  jnanaGurukulam: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=600&q=80', // Elderly wisdom and peace
  
  // Courses
  gitaCourse: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80', // Sacred art & temple
  sanskritCourse: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', // Ancient books & scripts
  historyCourse: 'https://images.unsplash.com/photo-1600100397608-f010f443b22b?auto=format&fit=crop&w=800&q=80', // Grand Indian stone temple architecture
  ramayanaCourse: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80', // Golden sunrise landscape silhouette
  vedasCourse: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80', // Traditional yajna sacred lamp
  yogaCourse: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80', // Sunrise yoga dhyana

  // Gurus / Teachers
  guruSrinivas: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  guruVedaPrakash: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
  guruAnasuya: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
  guruParthasarathy: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
};

export const learningPathsData = [
  {
    id: 'bala',
    title: 'Bala Gurukulam',
    titleTe: 'బాల గురుకులం',
    age: 'Ages 5 – 12',
    ageTe: 'వయస్సు 5 – 12',
    subtitle: 'Sanskar, culture, stories & joyful discovery',
    subtitleTe: 'సంస్కారం • సాంప్రదాయం సంతోషంగా',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80',
    link: '/courses?path=bala',
    badge: 'Child Development',
  },
  {
    id: 'yuva',
    title: 'Yuva Gurukulam',
    titleTe: 'యువ గురుకులం',
    age: 'Ages 13 – 25',
    ageTe: 'వయస్సు 13 – 25',
    subtitle: 'Wisdom, leadership, clarity & life skills',
    subtitleTe: 'జ్ఞానం • నాయకత్వం జీవిత నైపుణ్యాలు',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    link: '/courses?path=yuva',
    badge: 'Youth Leadership',
  },
  {
    id: 'sadhaka',
    title: 'Sadhaka Gurukulam',
    titleTe: 'సాధక గురుకులం',
    age: 'Ages 26 – 55',
    ageTe: 'వయస్సు 26 – 55',
    subtitle: 'Spiritual equilibrium, family harmony & daily dharma',
    subtitleTe: 'ఆధ్యాత్మికం • కుటుంబం జీవన విలువలు',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    link: '/courses?path=sadhaka',
    badge: 'Householder Dharma',
  },
  {
    id: 'jnana',
    title: 'Jnana Gurukulam',
    titleTe: 'జ్ఞాన గురుకులం',
    age: 'Ages 56+',
    ageTe: 'వయస్సు 56+',
    subtitle: 'Devotion, introspection, peace & pure awareness',
    subtitleTe: 'భక్తి • ఆధ్యాత్మిక జ్ఞానం సహజమైన జీవనం',
    image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=600&q=80',
    link: '/courses?path=jnana',
    badge: 'Spiritual Fulfillment',
  },
];

export const knowledgeCategories = [
  { id: 'vedas', name: 'Vedas', nameTe: 'వేదాలు', symbol: 'ॐ', count: '14 Courses' },
  { id: 'gita', name: 'Bhagavad Gita', nameTe: 'భగవద్గీత', symbol: '📖', count: '18 Courses' },
  { id: 'sanskrit', name: 'Sanskrit', nameTe: 'సంస్కృతం', symbol: '🪷', count: '22 Courses' },
  { id: 'yoga', name: 'Yoga', nameTe: 'యోగ', symbol: '🧘', count: '16 Courses' },
  { id: 'dharma', name: 'Dharma', nameTe: 'ధర్మం', symbol: '☸️', count: '12 Courses' },
  { id: 'itihasas', name: 'Itihasas', nameTe: 'ఇతిహాసాలు', symbol: '🛕', count: '20 Courses' },
  { id: 'puranas', name: 'Puranas', nameTe: 'పురాణాలు', symbol: '📜', count: '15 Courses' },
  { id: 'temple', name: 'Temple Culture', nameTe: 'దేవాలయ సంస్కృతి', symbol: '🏛️', count: '11 Courses' },
  { id: 'history', name: 'Indian History', nameTe: 'భారతీయ చరిత్ర', symbol: '🇮🇳', count: '19 Courses' },
  { id: 'more', name: 'More', nameTe: 'మరిన్ని', symbol: '⊞', count: '50+ Streams' },
];

export const featuredLiveClass = {
  id: 'live-gita-ch2',
  status: 'LIVE NOW',
  title: 'Bhagavad Gita Chapter 2',
  titleTe: 'భగవద్గీత రెండవ అధ్యాయం - సాంఖ్య యోగము',
  topic: 'Sankhya Yoga & Immortality of the Soul',
  instructor: 'Acharya Dr. Srinivas Sharma',
  instructorRole: 'Head of Vedantic Studies',
  instructorAvatar: brandImages.guruSrinivas,
  viewersCount: '1.2K',
  bgImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80',
  description: 'In-depth exploration of Verses 11 to 25. Discover the timeless nature of the Self (Atman) and triumph over sorrow.',
};

export const upcomingClasses = [
  {
    id: 'live-sanskrit-basics',
    title: 'Sanskrit Basics',
    titleTe: 'సంస్కృత అక్షరమాల & ఉచ్చారణ',
    timing: 'Today, 6:00 PM',
    timingTe: 'ఈరోజు, సా॥ 6:00 గంటలకు',
    instructor: 'Acharya Veda Prakash',
    instructorAvatar: brandImages.guruVedaPrakash,
    registered: 450,
  },
  {
    id: 'live-yoga-daily',
    title: 'Yoga for Daily Life',
    titleTe: 'నిత్యజీవితంలో ప్రాణాయామం & యోగా',
    timing: 'Today, 7:30 PM',
    timingTe: 'ఈరోజు, రా॥ 7:30 గంటలకు',
    instructor: 'Smt. Anasuya Devi',
    instructorAvatar: brandImages.guruAnasuya,
    registered: 680,
  },
  {
    id: 'live-vishnu-sahasra',
    title: 'Vishnu Sahasranamam',
    titleTe: 'శ్రీ విష్ణు సహస్రనామ స్తోత్ర పఠనం',
    timing: 'Tomorrow, 6:00 AM',
    timingTe: 'రేపు, ఉ॥ 6:00 గంటలకు',
    instructor: 'Sri Parthasarathy garu',
    instructorAvatar: brandImages.guruParthasarathy,
    registered: 890,
  },
];

export const todaysWisdom = {
  date: '29 Sep',
  dateFormatted: 'ఆశ్వయుజ శుద్ధ నవమి',
  shloka: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
मा कर्मफलहेतुर्भूर्मा ते सङ्గోऽस्त्वकर्मणि ॥`,
  teluguMeaning: `నీకు కర్తవ్యము చేయడానికే అధికారం,
ఫలితంపై మాత్రం ఆశవద్దు.
కర్మఫలానికి నీవు కారకుడివి కావద్దు;
అలాగని కర్మను విడనాడటంలో ఆసక్తి కలిగి ఉండవద్దు.`,
  englishMeaning: `You have an absolute right only to perform your prescribed duty, but never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.`,
  reference: 'శ్రీమద్భగవద్గీత • సాంఖ్య యోగః 2.47',
  audioUrl: 'https://actions.google.com/sounds/v1/ambiences/temple_bell.ogg', // mock audio
};

export const popularCourses = [
  {
    id: 'bhagavad-gita-beginners',
    title: 'Bhagavad Gita for Beginners',
    titleTe: 'ప్రారంభకులకు భగవద్గీత బోధన',
    category: 'gita',
    type: 'Free',
    typeTe: 'ఉచితం',
    price: 0,
    lessonsCount: 12,
    duration: '6.5 Hours',
    rating: 4.8,
    reviewsCount: '1.2K',
    level: 'Beginner',
    instructor: 'Acharya Dr. Srinivas Sharma',
    instructorTitle: 'Dean of Vedanta',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80',
    description: 'Learn the eternal wisdom of the Gita explained verse-by-verse with everyday applications for clarity, courage, and mental peace.',
    curriculum: [
      { id: 1, title: 'Introduction to Kurukshetra & The Context', duration: '28m' },
      { id: 2, title: 'Sankhya Yoga: The Imperishable Atman', duration: '35m' },
      { id: 3, title: 'Karma Yoga: Action Without Selfish Attachment', duration: '40m' },
      { id: 4, title: 'Jnana Karma Sannyasa Yoga: Wisdom in Action', duration: '32m' },
      { id: 5, title: 'Dhyana Yoga: Science of Meditation', duration: '45m' },
      { id: 6, title: 'Bhakti Yoga: Path of Unconditional Love', duration: '38m' },
    ]
  },
  {
    id: 'sanskrit-basics',
    title: 'Sanskrit Basics',
    titleTe: 'సరళ సంస్కృత భాషా ప్రవేశం',
    category: 'sanskrit',
    type: 'Paid',
    typeTe: 'రుసుము',
    price: 999,
    originalPrice: 1999,
    lessonsCount: 24,
    duration: '14 Hours',
    rating: 4.7,
    reviewsCount: '980',
    level: 'Beginner',
    instructor: 'Acharya Veda Prakash',
    instructorTitle: 'Linguistics & Vyakarana Scholar',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80',
    description: 'Master Sanskrit alphabets (Devanagari), sandhi rules, everyday spoken phrases, and accurate Vedic pronunciation from scratch.',
    curriculum: [
      { id: 1, title: 'Devanagari Varnamala (Vowels & Consonants)', duration: '30m' },
      { id: 2, title: 'Uchharana Sthana: Vedic Vocal Science', duration: '35m' },
      { id: 3, title: 'Simple Nouns and Gender Rules', duration: '42m' },
      { id: 4, title: 'Daily Conversational Sanskrit Sentences', duration: '29m' },
    ]
  },
  {
    id: 'indian-history-true-perspective',
    title: 'Indian History: True Perspective',
    titleTe: 'భారతీయ యథార్థ చరిత్ర దర్శనం',
    category: 'history',
    type: 'Paid',
    typeTe: 'రుసుము',
    price: 1499,
    originalPrice: 2499,
    lessonsCount: 28,
    duration: '18 Hours',
    rating: 4.8,
    reviewsCount: '1.5K',
    level: 'Intermediate',
    instructor: 'Dr. Vikramaditya Reddy',
    instructorTitle: 'Archeologist & Epigraphist',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f443b22b?auto=format&fit=crop&w=700&q=80',
    description: 'Explore the grand intellectual, scientific, mathematical, and maritime achievements of ancient Bharat supported by archaeological evidence.',
    curriculum: [
      { id: 1, title: 'Sarasvati-Sindhu Civilization Realities', duration: '45m' },
      { id: 2, title: 'Maritime Trade of Cholas and Kalingas', duration: '50m' },
      { id: 3, title: 'Ancient Indian Metallurgy and Mathematics', duration: '40m' },
      { id: 4, title: 'The Great Universities: Takshashila and Nalanda', duration: '55m' },
    ]
  },
  {
    id: 'ramayana-deep-study',
    title: 'Ramayana Deep Study',
    titleTe: 'వాల్మీకి రామాయణ తత్త్వ శోధన',
    category: 'itihasas',
    type: 'Paid',
    typeTe: 'రుసుము',
    price: 1299,
    originalPrice: 2199,
    lessonsCount: 32,
    duration: '22 Hours',
    rating: 4.9,
    reviewsCount: '2.1K',
    level: 'Intermediate',
    instructor: 'Sri Parthasarathy garu',
    instructorTitle: 'Pravachana Karta',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80',
    description: 'Go beyond popular retellings into Sage Valmiki’s original Sanskrit text to understand Maryada Purushottama Rama’s dharmic decisions.',
    curriculum: [
      { id: 1, title: 'Bala Kanda: Divine Advent & Rishi Vishwamitra', duration: '45m' },
      { id: 2, title: 'Ayodhya Kanda: The Trial of Dharma and Duty', duration: '52m' },
      { id: 3, title: 'Aranya Kanda: Sages and the Forest Hermitage', duration: '48m' },
      { id: 4, title: 'Kishkindha Kanda: Friendship and Surrender', duration: '50m' },
      { id: 5, title: 'Sundara Kanda: Devotion & Heroism of Hanuman', duration: '60m' },
      { id: 6, title: 'Yuddha Kanda: Victory of Dharma over Adharma', duration: '58m' },
    ]
  },
  {
    id: 'rigvedic-mantra-chanting',
    title: 'Rigvedic Mantra Chanting',
    titleTe: 'ఋగ్వేద మంత్ర పఠన శిక్షణ',
    category: 'vedas',
    type: 'Free',
    typeTe: 'ఉచితం',
    price: 0,
    lessonsCount: 16,
    duration: '9 Hours',
    rating: 4.9,
    reviewsCount: '840',
    level: 'Advanced',
    instructor: 'Veda Brahma Sri Ramamurthy Ghanapati',
    instructorTitle: 'Vedic Chanting Master',
    image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=700&q=80',
    description: 'Learn authentic Vedic svaras (Udatta, Anudatta, Svarita) and chant Shanti Mantras and Gayatri Suktam with perfection.',
    curriculum: [
      { id: 1, title: 'Rules of Vedic Intonation and Accents', duration: '35m' },
      { id: 2, title: 'Agni Suktam: First Hymn of the Rigveda', duration: '42m' },
      { id: 3, title: 'Gayatri Mantra: Science and Metre (Chandas)', duration: '40m' },
    ]
  },
  {
    id: 'patanjali-yoga-sutras',
    title: 'Patanjali Yoga Sutras',
    titleTe: 'పతంజలి యోగ సూత్రాల సమగ్ర వివరణ',
    category: 'yoga',
    type: 'Paid',
    typeTe: 'రుసుము',
    price: 1199,
    originalPrice: 1899,
    lessonsCount: 20,
    duration: '11 Hours',
    rating: 4.8,
    reviewsCount: '1.1K',
    level: 'Intermediate',
    instructor: 'Smt. Anasuya Devi',
    instructorTitle: 'Yoga Master',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=700&q=80',
    description: 'Systematic study of Samadhi Pada and Sadhana Pada. Cultivate mental mastery, chitta-vritti-nirodha, and inner tranquility.',
    curriculum: [
      { id: 1, title: 'Yoga Chitta Vritti Nirodha: The Ultimate Definition', duration: '38m' },
      { id: 2, title: 'Ashtanga Yoga: The Eight Limbs Explained', duration: '44m' },
      { id: 3, title: 'Yama and Niyama in Modern Daily Living', duration: '36m' },
    ]
  }
];

export const quickAccessItems = [
  { id: 'free-content', title: 'Free Content', titleTe: 'ఉచిత విజ్ఞానం', icon: 'Gift', link: '/courses?filter=free' },
  { id: 'books-library', title: 'Books Library', titleTe: 'పుస్తకాల నిధి', icon: 'BookOpen', link: '/library?tab=books' },
  { id: 'audio-library', title: 'Audio Library', titleTe: 'శ్రవణ నిధి', icon: 'Headphones', link: '/library?tab=audio' },
  { id: 'download-offline', title: 'Download for Offline', titleTe: 'ఆఫ్‌లైన్ డౌన్‌లోడ్', icon: 'Download', link: '/learn?tab=offline' },
  { id: 'events', title: 'Events', titleTe: 'వేడుకలు', icon: 'Calendar', link: '/events' },
  { id: 'certificates', title: 'Certificates', titleTe: 'ప్రమాణపత్రాలు', icon: 'Award', link: '/profile?tab=certificates' },
];

export const teachersData = [
  {
    id: 'acharya-srinivas',
    name: 'Acharya Dr. Srinivas Sharma',
    nameTe: 'ఆచార్య డా॥ శ్రీనివాస శర్మ',
    role: 'Dean of Vedantic Studies',
    roleTe: 'వేదాంత విభాగాధిపతి',
    experience: '28+ Years Experience',
    bio: 'Renowned scholar of Advaita Vedanta and Gita Bhashyam. Conducted 500+ discourses worldwide.',
    avatar: brandImages.guruSrinivas,
    studentsCount: '34,000+',
    rating: 4.9,
  },
  {
    id: 'acharya-veda-prakash',
    name: 'Acharya Veda Prakash',
    nameTe: 'ఆచార్య వేద ప్రకాష్',
    role: 'Sanskrit Grammar & Panini Sutras',
    roleTe: 'సంస్కృత వ్యాకరణ విశారద',
    experience: '20+ Years Experience',
    bio: 'Dedicated to reviving spoken Sanskrit with interactive mnemonic techniques and conversational pedagogy.',
    avatar: brandImages.guruVedaPrakash,
    studentsCount: '21,000+',
    rating: 4.8,
  },
  {
    id: 'smt-anasuya-devi',
    name: 'Smt. Anasuya Devi',
    nameTe: 'శ్రీమతి అనసూయ దేవి',
    role: 'Classical Yoga & Holistic Wellness',
    roleTe: 'యోగాచార్య & ఆయుర్వేద నిపుణులు',
    experience: '18+ Years Experience',
    bio: 'Specialist in Patanjali Yoga, Pranayama, and mindful living for householders and professionals.',
    avatar: brandImages.guruAnasuya,
    studentsCount: '28,500+',
    rating: 4.9,
  },
  {
    id: 'sri-parthasarathy',
    name: 'Sri Parthasarathy garu',
    nameTe: 'శ్రీ పార్థసారథి గారు',
    role: 'Itihasa-Purana Exponent',
    roleTe: 'ఇతిహాస పురాణ ప్రవచనకర్త',
    experience: '32+ Years Experience',
    bio: 'Mesmerizing storyteller of Valmiki Ramayana, Mahabharata, and Vishnu Sahasranama with deep philosophical analysis.',
    avatar: brandImages.guruParthasarathy,
    studentsCount: '45,000+',
    rating: 5.0,
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Raghavendra Rao',
    city: 'Hyderabad',
    role: 'Software Architect & Parent',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    quote: 'Sanathana Gurukulam transformed our home atmosphere. My children eagerly attend Bala Gurukulam every Sunday morning, and I have found clarity in the Bhagavad Gita classes.',
    quoteTe: 'సనాతన గురుకులం మా కుటుంబంలో గొప్ప మార్పును తెచ్చింది. మా పిల్లలు ప్రతి ఆదివారం బాల గురుకులం పాఠాల కోసం ఉత్సాహంగా ఎదురుచూస్తారు.',
    course: 'Bala Gurukulam & Bhagavad Gita',
  },
  {
    id: 2,
    name: 'Kavitha Ramachandran',
    city: 'Bengaluru',
    role: 'High School Teacher',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    quote: 'The Sanskrit pronunciation lessons are so structured and clear. The mobile experience is smooth, and the shloka recitations give me immense peace during daily commutes.',
    quoteTe: 'సంస్కృత ఉచ్చారణ తరగతులు ఎంతో చక్కగా వివరించారు. నిత్య జీవితంలో మనసుకు అపారమైన ప్రశాంతత లభిస్తోంది.',
    course: 'Sanskrit Basics',
  },
  {
    id: 3,
    name: 'Siddharth Iyer',
    city: 'San Jose, California',
    role: 'Tech Lead',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    quote: 'Being thousands of miles away from India, this platform is an anchor for our cultural roots. True Indian history taught with archaeological evidence is eye-opening.',
    quoteTe: 'విదేశాల్లో ఉన్నప్పటికీ భారతీయ మూలాలను నిలబెట్టుకోవడానికి ఈ గురుకులం మాకు దిక్సూచిగా నిలిచింది.',
    course: 'Indian History True Perspective',
  },
];

export const upcomingEvents = [
  {
    id: 'event-gita-jayanti',
    title: 'Gita Jayanti Akhanda Chanting & Discourse',
    titleTe: 'గీతా జయంతి అఖండ పారాయణం & సత్సంగం',
    date: 'Dec 11, 2026',
    time: '9:00 AM - 1:00 PM IST',
    mode: 'Online & Temple Mandapam',
    seatsLeft: 85,
    speaker: 'Acharya Dr. Srinivas Sharma',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'event-sanskrit-sambhshana',
    title: '10-Day Spoken Sanskrit Shibir',
    titleTe: '10 రోజుల సంస్కృత సంభాషణ శిబిరం',
    date: 'Nov 05 - Nov 15, 2026',
    time: '7:00 PM - 8:30 PM IST',
    mode: 'Interactive Live Zoom',
    seatsLeft: 40,
    speaker: 'Acharya Veda Prakash',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'event-temple-architecture',
    title: 'Temple Architecture & Sacred Geometry Walk',
    titleTe: 'దేవాలయ శిల్పకళ & ఆగమ శాస్త్ర సదస్సు',
    date: 'Nov 22, 2026',
    time: '10:00 AM - 4:00 PM IST',
    mode: 'Hybrid Heritage Session',
    seatsLeft: 25,
    speaker: 'Dr. Vikramaditya Reddy',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f443b22b?auto=format&fit=crop&w=600&q=80',
  },
];

export const libraryResources = [
  {
    id: 'lib-gita-pdf',
    title: 'Srimad Bhagavad Gita - Original Sanskrit with Word-by-Word Meaning',
    titleTe: 'శ్రీమద్భగవద్గీత - ప్రతిపదార్థ తాత్పర్య సహితం',
    category: 'Books',
    format: 'PDF (24 MB)',
    author: 'Sanathana Gurukulam Press',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
    downloads: '14,200',
  },
  {
    id: 'lib-vishnu-audio',
    title: 'Sri Vishnu Sahasranama Stotram - Chanted by Traditional Ghanapathis',
    titleTe: 'శ్రీ విష్ణు సహస్రనామ స్తోత్ర శ్రవణ రత్నం',
    category: 'Audio',
    format: 'MP3 (320 kbps)',
    author: 'Veda Pathashala Heritage Recordings',
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
    downloads: '28,900',
  },
  {
    id: 'lib-upanishad-pdf',
    title: 'The Ten Principal Upanishads - English & Telugu Commentary',
    titleTe: 'దశోపనిషత్తులు - తాత్త్విక వివరణ',
    category: 'Scriptures',
    format: 'E-Book (EPUB / PDF)',
    author: 'Gurukulam Editorial Board',
    cover: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80',
    downloads: '9,450',
  },
  {
    id: 'lib-meditation-audio',
    title: 'Vedic Omkar & Gayatri Dhyana Audio Suite (432 Hz Tuning)',
    titleTe: 'ఓంకార & గాయత్రీ ధ్యాన నాదం',
    category: 'Audio',
    format: 'FLAC / High Res',
    author: 'Gurukulam Sound Research Lab',
    cover: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=400&q=80',
    downloads: '19,100',
  },
];

export const communityTopics = [
  {
    id: 'comm-1',
    author: 'Venkatesh Murthy',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    tag: 'Bhagavad Gita',
    title: 'How to practice Nishkama Karma in a high-stress corporate environment?',
    titleTe: 'కార్పొరేట్ ఉద్యోగ ఒత్తిడిలో నిష్కామ కర్మను ఎలా ఆచరించాలి?',
    time: '2 hours ago',
    likes: 48,
    replies: 16,
    verifiedAnswer: true,
    acharyaAnswer: 'Acharya Dr. Srinivas Sharma: Focus on dedicating your effort to Ishwara rather than obsessing over annual reviews. When intention is selfless, anxiety transforms into excellence.',
  },
  {
    id: 'comm-2',
    author: 'Lavanya S.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    tag: 'Sanskrit Grammar',
    title: 'Clarification regarding Visarga Sandhi in Chapter 2, Verse 14',
    titleTe: 'రెండవ అధ్యాయం 14వ శ్లోకంలో విసర్గ సంధి సందేహ నివృత్తి',
    time: '5 hours ago',
    likes: 32,
    replies: 9,
    verifiedAnswer: true,
    acharyaAnswer: 'Acharya Veda Prakash: In "mātrā-sparśās tu", the visarga before "tu" (hard dental consonant) converts to dental sibilant "s".',
  },
  {
    id: 'comm-3',
    author: 'Aditya Prasad',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    tag: 'Bala Gurukulam',
    title: 'Daily 10-minute bedtime sanskar routine for 7-year-olds',
    titleTe: '7 సంవత్సరాల పిల్లల కోసం రాత్రి పూట 10 నిమిషాల సంస్కార పద్ధతులు',
    time: 'Yesterday',
    likes: 74,
    replies: 24,
    verifiedAnswer: false,
  }
];

export const userProfileData = {
  name: 'Srinivasa Raghavan',
  email: 'srinivas.raghavan@example.com',
  gurukulamStage: 'Sadhaka Gurukulam',
  memberSince: 'March 2026',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  streakDays: 42,
  completedCourses: 3,
  hoursLearned: 48,
  certificatesEarned: 2,
  enrolledCourses: [
    {
      id: 'bhagavad-gita-beginners',
      title: 'Bhagavad Gita for Beginners',
      progress: 75,
      currentLesson: 'Chapter 4: Jnana Karma Sannyasa Yoga',
      lastAccessed: 'Yesterday',
    },
    {
      id: 'sanskrit-basics',
      title: 'Sanskrit Basics',
      progress: 40,
      currentLesson: 'Lesson 8: Halanta Words',
      lastAccessed: '3 days ago',
    },
    {
      id: 'patanjali-yoga-sutras',
      title: 'Patanjali Yoga Sutras',
      progress: 90,
      currentLesson: 'Lesson 18: Kaivalya Pada Introduction',
      lastAccessed: 'Today',
    }
  ]
};

export const adminDashboardData = {
  stats: {
    totalStudents: '48,250',
    studentGrowth: '+12.4% this month',
    activeCourses: '36',
    liveClassesThisWeek: '18',
    totalHoursStreamed: '620 hrs',
    totalRevenue: '₹24,80,500',
  },
  learningPathDistribution: [
    { name: 'Bala Gurukulam', count: 12400, percent: '26%' },
    { name: 'Yuva Gurukulam', count: 18200, percent: '38%' },
    { name: 'Sadhaka Gurukulam', count: 11650, percent: '24%' },
    { name: 'Jnana Gurukulam', count: 6000, percent: '12%' },
  ],
  recentSignups: [
    { name: 'Ananya Deshpande', email: 'ananya.d@example.com', course: 'Bhagavad Gita for Beginners', date: '10 mins ago', status: 'Active' },
    { name: 'Karthik Subbaraman', email: 'karthik.s@example.com', course: 'Sanskrit Basics', date: '35 mins ago', status: 'Active' },
    { name: 'Meenakshi Sundaram', email: 'meena.s@example.com', course: 'Indian History True Perspective', date: '1 hr ago', status: 'Active' },
    { name: 'Balaji Narayanan', email: 'balaji.n@example.com', course: 'Ramayana Deep Study', date: '2 hrs ago', status: 'Active' },
  ],
  recentLiveClasses: [
    { title: 'Bhagavad Gita Chapter 2', instructor: 'Acharya Dr. Srinivas Sharma', viewers: '1,240', status: 'Streaming Now' },
    { title: 'Sanskrit Pronunciation Lab', instructor: 'Acharya Veda Prakash', viewers: '512', status: 'Scheduled (6 PM)' },
    { title: 'Pranayama for Vitality', instructor: 'Smt. Anasuya Devi', viewers: '730', status: 'Scheduled (7:30 PM)' },
  ]
};
