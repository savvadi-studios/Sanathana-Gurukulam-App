import React from 'react';
import { Link } from 'react-router-dom';
import { knowledgeCategories } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function CategoryScroll() {
  const { lang } = useLanguage();

  return (
    <section className="px-2 sm:px-6 lg:px-8 py-2 sm:py-5 max-w-7xl mx-auto">
      {/* Horizontal scrolling container with hidden scrollbar */}
      <div className="flex items-center justify-between gap-1.5 sm:gap-5 overflow-x-auto no-scrollbar py-1 px-1">
        {knowledgeCategories.map((cat) => (
          <Link
            key={cat.id}
            to={`/courses?category=${cat.id}`}
            className="flex flex-col items-center flex-shrink-0 group cursor-pointer focus:outline-none"
          >
            {/* Circular Icon Container matching screenshot */}
            <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-[#EBD7B3]/80 group-hover:bg-[#E8B85C] border border-[#DEBE99] flex items-center justify-center text-sm sm:text-2xl shadow-sm group-hover:scale-105 group-active:scale-95 transition-all duration-300">
              <span className="text-[#5A1E0E] group-hover:text-[#2E120A] select-none">
                {cat.symbol}
              </span>
            </div>

            {/* Label below */}
            <span className="mt-1 text-[8px] sm:text-xs font-semibold text-[#3E170B] group-hover:text-[#5A1E0E] text-center whitespace-nowrap transition-colors">
              {lang === 'te' ? cat.nameTe : cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
