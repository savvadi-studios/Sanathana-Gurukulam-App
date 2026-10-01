# 🛕 Sanathana Gurukulam (సనాతన గురుకులం)
> **LEARN • PRACTICE • LIVE** | నేర్చుకో • ఆచరించు • జీవించు

A modern, production-grade responsive frontend learning platform dedicated to **Sanatana Dharma, the Bhagavad Gita, Vedas, Sanskrit Linguistics, Patanjali Yoga, Dharma, Itihasas, Puranas, Temple Culture, and Bharatiya Heritage**.

Crafted with traditional Indian aesthetic sensibilities (rich maroon, antique gold, warm ivory, parchment textures) combined with modern online learning UX.

---

## 🌟 Key Features

1. **Faithful Visual Re-creation of Reference Design**:
   - Primary palette: Dark Maroon (`#5A1E0E`), Deep Brown (`#3E170B`), Antique Gold (`#C99232`), Soft Beige (`#EBD7B3`), Cream (`#F8EACD`), Warm Ivory (`#FFF8E8`).
   - Authentic typography blending Classical Serif (`Cinzel`, `Playfair Display`) and Unicode Telugu typography (`Noto Sans Telugu`).
   - Seamless bilingual switch (`తెలుగు | English`) directly from the header navigation.

2. **Core Sections**:
   - **Hero Section**: Golden-hour panoramic Gurukula temple ambiance, inspiring ancient-meets-modern typography, Telugu supporting text, and interactive video discourse modal.
   - **Choose Your Learning Path**: 4 personalized age groups (Bala Gurukulam [5–12], Yuva Gurukulam [13–25], Sadhaka Gurukulam [26–55], Jnana Gurukulam [56+]).
   - **Knowledge Categories**: Horizontal category navigation (Vedas, Bhagavad Gita, Sanskrit, Yoga, Dharma, Itihasas, Puranas, Temple Culture, Indian History).
   - **Live Classes Hub**: Live Now streaming card with viewer count + upcoming schedule.
   - **Today's Wisdom (నేటి సుభాషితం)**: Authentic parchment-style card with Sanskrit Devanagari verse, Telugu translation, Web Audio API Sa-Pa meditative drone chanting recitation, and quick share action.
   - **Popular Courses**: Filterable course cards with lesson count, star ratings, and Free/Paid tags.
   - **Quick Access**: Direct tiles for Free Content, Books Library, Audio Library, Offline Downloads, Events, and Certificates.
   - **Additional Sections**: Venerated Acharyas directory, student testimonials, temple/gurukulam events calendar, and newsletter signup.

3. **Multi-Page Routing**:
   - `/` — Homepage with all core & extended sections
   - `/courses` — Comprehensive course catalog with search, price filters, category tabs, and level filters
   - `/courses/:id` — Course details with interactive sample video player, syllabus curriculum accordion, instructor bio, and enrollment action
   - `/learn` — Student study portal with active course progress tracker, daily streak counter, and study history
   - `/library` — Sacred digital library with tabs for Books, Audio, Shlokas, Stotras, and Scriptures
   - `/live` — Live streaming hub with interactive simulated live chat and past broadcast archive
   - `/events` — Temple festivals, chanting workshops, and RSVP reservation system
   - `/community` — Satsang forum with spiritual discussion threads and verified Acharya responses
   - `/profile` — Student profile with verified certificates, streak days, saved bookmarks, and settings
   - `/dashboard` — Dedicated professional Admin Dashboard with KPI stats, student analytics, recent enrollments, and course management

4. **Mobile Excellence**:
   - 7-tab bottom navigation bar (`Home`, `Learn`, `Live`, `Library`, `Events`, `Community`, `Profile`) replicating the mobile experience.
   - Slide-out drawer menu with quick links.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **React Router 6**
- **Tailwind CSS 3**
- **Lucide Icons**
- **Web Audio API** (Vedic Tanpura & recitation drone)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
git clone https://github.com/savvadi-studios/Sanathana-Gurukulam-App.git
cd Sanathana-Gurukulam-App
npm install
```

### Run Locally
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### Build for Production
```bash
npm run build
```

---

## 🏛️ Future Backend Architecture
The project is structured with clean data layers (`src/data/mockData.js`), context providers (`src/context/LanguageContext.jsx`), and modular components to easily plug in Firebase Authentication, Firestore databases, Cloud Storage, or streaming CDNs.

---

## 📜 License
MIT License. Dedicated to the timeless heritage of Bharat.
