import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/common/Navbar';
import BottomNavigation from './components/common/BottomNavigation';
import Footer from './components/common/Footer';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LearnPage from './pages/LearnPage';
import LibraryPage from './pages/LibraryPage';
import LiveClassesPage from './pages/LiveClassesPage';
import EventsPage from './pages/EventsPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Auto scroll to top component on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout wrapper to conditionally exclude public header/footer on admin dashboard
function MainLayout({ children }) {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith('/dashboard');

  if (isAdminDashboard) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF6EE] text-[#2E120A] selection:bg-[#EBD7B3] selection:text-[#5A1E0E]">
      <Navbar />
      <main className="flex-1 w-full pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
      {/* Mobile Bottom Navigation Bar (recreating the 7 tabs from uploaded screenshot) */}
      <BottomNavigation />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/live" element={<LiveClassesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboard" element={<AdminDashboardPage />} />
            {/* Fallback to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </MainLayout>
      </HashRouter>
    </LanguageProvider>
  );
}
