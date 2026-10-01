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
    <section className="px-2.5 sm:px-6 lg:px-8 py-2.5 sm:py-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-2 sm:mb-4 text-left">
        <h2 className="font-gurukulam-heading text-sm sm:text-2xl font-bold text-[#5A1E0E]">
          {t.quickAccess.title}
        </h2>
      </div>

      {/* Grid: Exactly 6 columns in 1 single row matching reference screenshot */}
      <div className="grid grid-cols-6 gap-1 sm:gap-3 md:gap-4">
        {quickAccessItems.map((item) => {
          const IconComponent = iconMap[item.icon] || BookOpen;
          return (
            <Link
              key={item.id}
              to={item.link}
              className="flex flex-col items-center justify-center p-1.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFDF9] hover:bg-[#F8EACD] border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover active:scale-95 transition-all duration-300 group text-center"
            >
              {/* Icon Container */}
              <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#F8EACD] group-hover:bg-[#5A1E0E] text-[#5A1E0E] group-hover:text-[#F8EACD] flex items-center justify-center transition-colors mb-1 sm:mb-2 shadow-sm">
                <IconComponent className="w-3.5 h-3.5 sm:w-6 sm:h-6 stroke-[1.8]" />
              </div>

              {/* Title */}
              <span className="text-[7.5px] sm:text-xs font-semibold text-[#3E170B] group-hover:text-[#5A1E0E] leading-tight truncate w-full">
                {lang === 'te' ? item.titleTe : item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
