import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Search, Bell, User, BookOpen, Video, 
  Library as LibraryIcon, Calendar, Users, LayoutDashboard,
  Compass, ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/learn', label: t.nav.learn },
    { to: '/courses', label: t.nav.courses },
    { to: '/live', label: t.nav.live },
    { to: '/library', label: t.nav.library },
    { to: '/events', label: t.nav.events },
    { to: '/community', label: t.nav.community },
    { to: '/dashboard', label: t.nav.dashboard, badge: 'Admin' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FBF6EE]/95 backdrop-blur-md border-b border-[#EBD7B3] transition-all">
        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Left: Mobile Hamburger & Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-[#5A1E0E] hover:bg-[#F3E5D0] active:scale-95 transition-all lg:hidden"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive(link.to)
                      ? 'bg-[#5A1E0E] text-[#FFF8E8] shadow-sm'
                      : 'text-[#5A1E0E] hover:bg-[#F4E4CB] hover:text-[#3E170B]'
                  } flex items-center gap-1.5`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] rounded-full bg-[#C99232] text-white uppercase font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Center-Right: Search Bar (as shown in mobile screenshot) */}
            <form 
              onSubmit={handleSearchSubmit}
              className="flex-1 max-w-[190px] sm:max-w-xs md:max-w-sm relative hidden sm:block"
            >
              <div className="relative">
                <Search className="w-4 h-4 text-[#7A3518] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.nav.searchPlaceholder}
                  className="w-full pl-9 pr-3 py-1.5 sm:py-2 text-xs md:text-sm bg-[#EBD7B3]/60 hover:bg-[#EBD7B3]/80 focus:bg-[#FFFDF9] border border-transparent focus:border-[#C99232] rounded-full text-[#3E170B] placeholder-[#8C6D58] focus:outline-none transition-all"
                />
              </div>
            </form>

            {/* Right: Language Switcher, Notifications & Profile */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              
              {/* Language Switcher Pill (Replicating "తెలుగు | English" badge in reference) */}
              <div className="flex items-center bg-[#3E170B] rounded-full p-0.5 text-[11px] font-medium shadow-inner">
                <button
                  type="button"
                  onClick={() => setLang('te')}
                  className={`px-2 py-0.5 rounded-full transition-all ${
                    lang === 'te'
                      ? 'bg-[#5A1E0E] text-[#F8EACD] font-bold shadow-sm'
                      : 'text-[#EBD7B3] hover:text-white'
                  }`}
                >
                  తెలుగు
                </button>
                <span className="text-[#A37B5C] px-0.5 text-[10px]">|</span>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 rounded-full transition-all ${
                    lang === 'en'
                      ? 'bg-[#5A1E0E] text-[#F8EACD] font-bold shadow-sm'
                      : 'text-[#EBD7B3] hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>

              {/* Notification Bell */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-full text-[#5A1E0E] hover:bg-[#F3E5D0] active:scale-95 transition-all relative"
                  aria-label="Notifications"
                >
                  <Bell className="w-5 h-5 text-[#5A1E0E]" />
                  {/* Red dot badge matching the screenshot */}
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D32F2F] rounded-full ring-2 ring-[#FBF6EE] animate-pulse"></span>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-[#FFFDF9] border border-[#EBD7B3] rounded-2xl shadow-warm-lg p-3 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center justify-between pb-2 border-b border-[#EBD7B3]">
                      <span className="font-serif font-bold text-xs text-[#5A1E0E]">సూచనలు / Notifications</span>
                      <span className="text-[10px] text-[#C99232] cursor-pointer hover:underline">Mark all read</span>
                    </div>
                    <div className="mt-2 space-y-2 text-xs">
                      <div className="p-2 rounded-xl bg-[#F8EACD]/50 border border-[#E8D2B4]">
                        <p className="font-semibold text-[#5A1E0E]">🔴 Bhagavad Gita Chapter 2 is Live Now!</p>
                        <p className="text-[11px] text-[#7A3518] mt-0.5">Acharya Dr. Srinivas Sharma started streaming.</p>
                      </div>
                      <div className="p-2 rounded-xl hover:bg-[#FBF6EE]">
                        <p className="font-semibold text-[#3E170B]">Sanskrit Basics Class starts at 6:00 PM</p>
                        <p className="text-[11px] text-[#7A3518] mt-0.5">Reminder for registered learners.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Avatar Icon */}
              <Link
                to="/profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#5A1E0E] text-[#F8EACD] flex items-center justify-center font-bold text-xs shadow hover:ring-2 hover:ring-[#C99232] transition-all"
                title="Student Profile"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#F8EACD]" />
              </Link>

            </div>
          </div>

          {/* Mobile Search Bar (under header for small phones) */}
          <div className="mt-2 sm:hidden">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="w-4 h-4 text-[#7A3518] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.nav.searchPlaceholder}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#EBD7B3]/60 focus:bg-[#FFFDF9] border border-transparent focus:border-[#C99232] rounded-full text-[#3E170B] placeholder-[#8C6D58] focus:outline-none"
              />
            </form>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[#FFFDF9] border-r border-[#EBD7B3] shadow-2xl p-5 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EBD7B3]">
                <Logo size="small" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-[#5A1E0E] hover:bg-[#F3E5D0]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive(link.to)
                        ? 'bg-[#5A1E0E] text-[#FFF8E8]'
                        : 'text-[#3E170B] hover:bg-[#F8EACD]/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </Link>
                ))}
              </div>

              {/* Quick Links inside Mobile Drawer */}
              <div className="pt-4 border-t border-[#EBD7B3] space-y-2">
                <p className="text-xs uppercase tracking-wider font-bold text-[#7A3518]">
                  {lang === 'te' ? 'త్వరిత విభాగాలు' : 'Quick Sections'}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    to="/library?tab=books"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-[#F8EACD]/40 text-[#5A1E0E] font-medium flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C99232]" />
                    {lang === 'te' ? 'పుస్తకాలు' : 'Books'}
                  </Link>
                  <Link
                    to="/live"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-[#F8EACD]/40 text-[#5A1E0E] font-medium flex items-center gap-1.5"
                  >
                    <Video className="w-3.5 h-3.5 text-[#D32F2F]" />
                    {lang === 'te' ? 'ప్రత్యక్షం' : 'Live Streams'}
                  </Link>
                  <Link
                    to="/events"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-[#F8EACD]/40 text-[#5A1E0E] font-medium flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C99232]" />
                    {lang === 'te' ? 'కార్యక్రమాలు' : 'Events'}
                  </Link>
                  <Link
                    to="/community"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-[#F8EACD]/40 text-[#5A1E0E] font-medium flex items-center gap-1.5"
                  >
                    <Users className="w-3.5 h-3.5 text-[#C99232]" />
                    {lang === 'te' ? 'సత్సంగం' : 'Community'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-[#EBD7B3] text-center text-xs text-[#7A3518]">
              <p className="font-serif font-bold text-[#5A1E0E]">Sanathana Gurukulam</p>
              <p className="text-[10px] mt-0.5">LEARN • PRACTICE • LIVE</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
