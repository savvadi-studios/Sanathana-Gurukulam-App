import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, Clock } from 'lucide-react';
import { featuredLiveClass, upcomingClasses } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';
import TodaysWisdomCard from './TodaysWisdomCard';

export default function LiveClassesSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="px-2.5 sm:px-6 lg:px-8 py-2.5 sm:py-6 max-w-7xl mx-auto">
      
      {/* Section Title with "View All →" link */}
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h2 className="font-gurukulam-heading text-sm sm:text-2xl font-bold text-[#5A1E0E]">
          {t.liveSection.title}
        </h2>

        <Link
          to="/live"
          className="text-[10px] sm:text-sm font-semibold text-[#5A1E0E] hover:text-[#C99232] flex items-center gap-1 group transition-colors"
        >
          <span>{t.liveSection.viewAll}</span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid: Exactly 3 columns in 1 single row (Featured | Upcoming | Today's Wisdom) */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
        
        {/* 1. Featured Live Now Card (Left) */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#240B04] border border-[#7A3518] shadow-warm flex flex-col justify-between text-left group p-2 sm:p-4">
          
          {/* Background Image of Guru / Discourse */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${featuredLiveClass.bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#200A04] via-[#2E0F07]/80 to-transparent" />

          {/* Card Top: Live Badge */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-[#E53935] text-white text-[8px] sm:text-xs font-bold uppercase tracking-wider shadow-md animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              {t.liveSection.liveNow}
            </span>

            {/* Title */}
            <h3 className="font-serif font-bold text-[11px] sm:text-xl text-[#FFF8E8] mt-1.5 sm:mt-3 leading-snug">
              {lang === 'te' ? featuredLiveClass.titleTe : featuredLiveClass.title}
            </h3>

            {/* Instructor Row */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 mt-2 sm:mt-4">
              <img
                src={featuredLiveClass.instructorAvatar}
                alt={featuredLiveClass.instructor}
                className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-[#C99232] object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-[9px] sm:text-xs font-semibold text-[#F8EACD] truncate">
                  {featuredLiveClass.instructor}
                </p>
              </div>
            </div>
          </div>

          {/* Card Bottom: Viewers & Join Class Button */}
          <div className="relative z-10 pt-2 sm:pt-4 flex items-center justify-between border-t border-white/10 mt-2 sm:mt-4">
            <div className="flex items-center gap-1 text-[8px] sm:text-xs text-[#EBD7B3]">
              <Users className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#E8B85C]" />
              <span className="truncate">{featuredLiveClass.viewersCount}</span>
            </div>

            <Link
              to="/live"
              className="px-2 sm:px-4 py-1 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-bold text-[8px] sm:text-xs shadow-md active:scale-95 transition-all flex items-center gap-1"
            >
              <span>{t.liveSection.joinClass}</span>
            </Link>
          </div>
        </div>

        {/* 2. Upcoming Classes List (Center Column with 3 stacked rows) */}
        <div className="flex flex-col gap-1 sm:gap-2.5 justify-between">
          {upcomingClasses.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-1.5 sm:gap-3 p-1.5 sm:p-3 bg-[#FFFDF9] rounded-xl sm:rounded-2xl border border-[#EBD7B3] shadow-warm text-left"
            >
              <img
                src={item.instructorAvatar}
                alt={item.instructor}
                className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl object-cover border border-[#E8D2B4] flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-serif font-bold text-[9px] sm:text-sm text-[#3E170B] truncate leading-tight">
                  {lang === 'te' ? item.titleTe : item.title}
                </h4>
                <div className="flex items-center gap-1 text-[8px] sm:text-[11px] text-[#7A3518] mt-0.5 font-medium truncate">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C99232] flex-shrink-0" />
                  <span className="truncate">{lang === 'te' ? item.timingTe : item.timing}</span>
                </div>
                <p className="text-[7px] sm:text-[11px] text-[#8C6D58] truncate">
                  {item.instructor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Today's Wisdom Parchment Card (Right Column) */}
        <div className="flex flex-col justify-stretch">
          <TodaysWisdomCard />
        </div>

      </div>
    </section>
  );
}
