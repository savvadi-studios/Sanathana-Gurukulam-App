import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { learningPathsData } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function LearningPathSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="px-2.5 sm:px-6 lg:px-8 py-2.5 sm:py-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-2 sm:mb-4 text-left">
        <h2 className="font-gurukulam-heading text-sm sm:text-2xl md:text-3xl font-bold text-[#5A1E0E]">
          {t.learningPath.title}
        </h2>
        <p className="text-[10px] sm:text-sm md:text-base text-[#7A3518] mt-0.5 font-medium">
          {t.learningPath.subtitle}
        </p>
      </div>

      {/* Grid: Exactly 4 columns in ONE single row matching the reference screenshot */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-4 md:gap-5">
        {learningPathsData.map((item) => (
          <Link
            key={item.id}
            to={`/courses?path=${item.id}`}
            className="group flex flex-col bg-[#FFFDF9] rounded-xl sm:rounded-2xl overflow-hidden border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Container with rounded top */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3E5D0]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content area */}
            <div className="p-1.5 sm:p-4 flex flex-col justify-between flex-1 text-left">
              <div>
                <h3 className="font-serif font-bold text-[10px] sm:text-base md:text-lg text-[#3E170B] group-hover:text-[#5A1E0E] transition-colors leading-tight truncate">
                  {lang === 'te' ? item.titleTe : item.title}
                </h3>
                
                <span className="block text-[8px] sm:text-xs font-semibold text-[#7A3518] mt-0.5 truncate">
                  {lang === 'te' ? item.ageTe : item.age}
                </span>

                <p className="text-[8px] sm:text-xs text-[#5C3D2E] font-telugu mt-0.5 sm:mt-1.5 leading-tight line-clamp-1 sm:line-clamp-2">
                  {lang === 'te' ? item.subtitleTe : item.subtitle}
                </p>
              </div>

              {/* Bottom Row with circular arrow button matching screenshot */}
              <div className="mt-1.5 sm:mt-4 flex items-center justify-end">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#5A1E0E] group-hover:bg-[#C99232] text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:rotate-45">
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
