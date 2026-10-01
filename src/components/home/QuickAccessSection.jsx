import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, BookOpen, Headphones, Download, Calendar, Award } from 'lucide-react';
import { quickAccessItems } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function QuickAccessSection() {
  const { lang, t } = useLanguage();

  const iconMap = {
    Gift: Gift,
    BookOpen: BookOpen,
    Headphones: Headphones,
    Download: Download,
    Calendar: Calendar,
    Award: Award,
  };

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-4 text-left">
        <h2 className="font-gurukulam-heading text-xl sm:text-2xl font-bold text-[#5A1E0E]">
          {t.quickAccess.title}
        </h2>
      </div>

      {/* Grid: 3 columns on mobile (2 rows of 3) and 6 columns on desktop matching reference */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4">
        {quickAccessItems.map((item) => {
          const IconComponent = iconMap[item.icon] || BookOpen;
          return (
            <Link
              key={item.id}
              to={item.link}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#FFFDF9] hover:bg-[#F8EACD] border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover active:scale-95 transition-all duration-300 group text-center"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F8EACD] group-hover:bg-[#5A1E0E] text-[#5A1E0E] group-hover:text-[#F8EACD] flex items-center justify-center transition-colors mb-2 shadow-sm">
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
              </div>

              {/* Title */}
              <span className="text-[11px] sm:text-xs font-semibold text-[#3E170B] group-hover:text-[#5A1E0E] leading-tight">
                {lang === 'te' ? item.titleTe : item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
