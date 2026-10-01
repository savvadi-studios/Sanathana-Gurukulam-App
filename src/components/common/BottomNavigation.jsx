import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Video, Headphones, Calendar, Users, User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function BottomNavigation() {
  const { lang, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { to: '/', label: lang === 'te' ? 'ప్రధానం' : 'Home', icon: Home },
    { to: '/learn', label: lang === 'te' ? 'అభ్యసన' : 'Learn', icon: BookOpen },
    { to: '/live', label: lang === 'te' ? 'ప్రత్యక్షం' : 'Live', icon: Video },
    { to: '/library', label: lang === 'te' ? 'గ్రంథాలయం' : 'Library', icon: Headphones },
    { to: '/events', label: lang === 'te' ? 'వేడుకలు' : 'Events', icon: Calendar },
    { to: '/community', label: lang === 'te' ? 'సత్సంగం' : 'Community', icon: Users },
    { to: '/profile', label: lang === 'te' ? 'ప్రొఫైల్' : 'Profile', icon: User },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#2D0F08] border-t border-[#4E2214] shadow-[0_-4px_20px_rgba(0,0,0,0.35)]">
      <nav className="flex items-center justify-around px-1 py-1.5 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-transform active:scale-95 ${
                active ? 'text-[#E8B85C]' : 'text-[#B89F8B] hover:text-[#EBD7B3]'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-colors ${active ? 'stroke-[2.4] text-[#E8B85C]' : 'stroke-[1.8]'}`} />
                {active && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#E8B85C] rounded-full"></span>
                )}
              </div>
              <span className={`text-[9px] sm:text-[10px] tracking-tight mt-0.5 font-medium truncate max-w-[50px] ${
                active ? 'font-bold text-[#E8B85C]' : 'text-[#B89F8B]'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
      {/* iOS style home indicator space */}
      <div className="h-1 bg-[#2D0F08]"></div>
    </div>
  );
}
