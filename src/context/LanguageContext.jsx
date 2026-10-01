import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    brandName: 'Sanathana Gurukulam',
    tagline: 'LEARN • PRACTICE • LIVE',
    nav: {
      home: 'Home',
      learn: 'Learn',
      courses: 'Courses',
      live: 'Live Classes',
      library: 'Library',
      events: 'Events',
      community: 'Community',
      profile: 'Profile',
      dashboard: 'Admin Dashboard',
      searchPlaceholder: 'Search courses, shlokas, teachers...',
    },
    hero: {
      line1: 'Ancient Wisdom',
      line2: 'Modern Learning',
      line3: 'Timeless Values',
      subtitle: 'Nurturing Indian heritage & timeless knowledge for future generations...',
      exploreBtn: 'Explore Courses',
      watchBtn: 'Watch Our Story',
    },
    learningPath: {
      title: 'Choose Your Learning Path',
      subtitle: 'Select your age group to get a personalized experience',
      balaTitle: 'Bala Gurukulam',
      balaAge: 'Ages 5 – 12',
      balaDesc: 'Sanskar, culture, stories & joyful discovery',
      yuvaTitle: 'Yuva Gurukulam',
      yuvaAge: 'Ages 13 – 25',
      yuvaDesc: 'Wisdom, leadership, clarity & life skills',
      sadhakaTitle: 'Sadhaka Gurukulam',
      sadhakaAge: 'Ages 26 – 55',
      sadhakaDesc: 'Spiritual equilibrium, family harmony & daily dharma',
      jnanaTitle: 'Jnana Gurukulam',
      jnanaAge: 'Ages 56+',
      jnanaDesc: 'Devotion, introspection, peace & pure awareness',
    },
    categories: {
      title: 'Knowledge Streams',
      vedas: 'Vedas',
      gita: 'Bhagavad Gita',
      sanskrit: 'Sanskrit',
      yoga: 'Yoga',
      dharma: 'Dharma',
      itihasas: 'Itihasas',
      puranas: 'Puranas',
      temple: 'Temple Culture',
      history: 'Indian History',
      more: 'More',
    },
    liveSection: {
      title: 'Live Classes',
      viewAll: 'View All',
      liveNow: 'LIVE NOW',
      watching: 'watching',
      joinClass: 'Join Class',
      upcomingTitle: 'Upcoming Classes',
    },
    wisdom: {
      title: "Today's Wisdom",
      listen: 'Listen',
      share: 'Share',
      copied: 'Copied to clipboard!',
    },
    courses: {
      title: 'Popular Courses',
      viewAll: 'View All',
      freeBadge: 'Free',
      paidBadge: 'Paid',
      lessons: 'Lessons',
    },
    quickAccess: {
      title: 'Quick Access',
      freeContent: 'Free Content',
      booksLibrary: 'Books Library',
      audioLibrary: 'Audio Library',
      downloadOffline: 'Download for Offline',
      events: 'Events',
      certificates: 'Certificates',
    },
  },
  te: {
    brandName: 'సనాతన గురుకులం',
    tagline: 'నేర్చుకో • ఆచరించు • జీవించు',
    nav: {
      home: 'ప్రధానం',
      learn: 'అభ్యసన',
      courses: 'కోర్సులు',
      live: 'ప్రత్యక్ష తరగతులు',
      library: 'గ్రంథాలయం',
      events: 'కార్యక్రమాలు',
      community: 'సత్సంగం',
      profile: 'ప్రొఫైల్',
      dashboard: 'నిర్వాహక విభాగం',
      searchPlaceholder: 'కోర్సులు, శ్లోకాలు, ఆచార్యుల కోసం వెతకండి...',
    },
    hero: {
      line1: 'సనాతన జ్ఞానం',
      line2: 'ఆధునిక అభ్యసన',
      line3: 'శాశ్వత విలువలు',
      subtitle: 'భారతీయ జీవిత విధానం తరతరాలకు...',
      exploreBtn: 'కోర్సులు చూడండి',
      watchBtn: 'మా కథను వీక్షించండి',
    },
    learningPath: {
      title: 'మీ అభ్యసన మార్గాన్ని ఎంచుకోండి',
      subtitle: 'మీ వయస్సు ఆధారంగా అనుకూలమైన ఆధ్యాత్మిక అనుభవం పొందండి',
      balaTitle: 'బాల గురుకులం',
      balaAge: 'వయస్సు 5 – 12',
      balaDesc: 'సంస్కారం • సాంప్రదాయం సంతోషంగా',
      yuvaTitle: 'యువ గురుకులం',
      yuvaAge: 'వయస్సు 13 – 25',
      yuvaDesc: 'జ్ఞానం • నాయకత్వం జీవిత నైపుణ్యాలు',
      sadhakaTitle: 'సాధక గురుకులం',
      sadhakaAge: 'వయస్సు 26 – 55',
      sadhakaDesc: 'ఆధ్యాత్మికం • కుటుంబం జీవన విలువలు',
      jnanaTitle: 'జ్ఞాన గురుకులం',
      jnanaAge: 'వయస్సు 56+',
      jnanaDesc: 'భక్తి • ఆధ్యాత్మిక జ్ఞానం సహజమైన జీవనం',
    },
    categories: {
      title: 'జ్ఞాన విభాగాలు',
      vedas: 'వేదాలు',
      gita: 'భగవద్గీత',
      sanskrit: 'సంస్కృతం',
      yoga: 'యోగ',
      dharma: 'ధర్మం',
      itihasas: 'ఇతిహాసాలు',
      puranas: 'పురాణాలు',
      temple: 'దేవాలయ సంస్కృతి',
      history: 'భారతీయ చరిత్ర',
      more: 'మరిన్ని',
    },
    liveSection: {
      title: 'ప్రత్యక్ష తరగతులు',
      viewAll: 'అన్నీ చూడండి',
      liveNow: 'ప్రత్యక్ష ప్రసారం',
      watching: 'వీక్షిస్తున్నారు',
      joinClass: 'తరగతిలో చేరండి',
      upcomingTitle: 'రాబోయే తరగతులు',
    },
    wisdom: {
      title: 'నేటి సుభాషితం',
      listen: 'వినండి',
      share: 'పంచుకోండి',
      copied: 'కాపీ చేయబడింది!',
    },
    courses: {
      title: 'జనాదరణ పొందిన కోర్సులు',
      viewAll: 'అన్నీ చూడండి',
      freeBadge: 'ఉచితం',
      paidBadge: 'రుసుము',
      lessons: 'పాఠాలు',
    },
    quickAccess: {
      title: 'శీఘ్ర ప్రాప్యత',
      freeContent: 'ఉచిత విజ్ఞానం',
      booksLibrary: 'పుస్తకాల నిధి',
      audioLibrary: 'శ్రవణ నిధి',
      downloadOffline: 'ఆఫ్‌లైన్ డౌన్‌లోడ్',
      events: 'వేడుకలు',
      certificates: 'ప్రమాణపత్రాలు',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('te'); // default to Telugu to match screenshot, with easy toggle

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'te' ? 'en' : 'te'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
