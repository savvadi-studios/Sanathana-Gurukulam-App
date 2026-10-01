import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Users, ArrowRight, Play, Clock, Sparkles } from 'lucide-react';
import { featuredLiveClass, upcomingClasses } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';
import TodaysWisdomCard from './TodaysWisdomCard';

export default function LiveClassesSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl mx-auto">
      
      {/* Section Title with "View All →" link */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-gurukulam-heading text-xl sm:text-2xl font-bold text-[#5A1E0E]">
          {t.liveSection.title}
        </h2>

        <Link
          to="/live"
          className="text-xs sm:text-sm font-semibold text-[#5A1E0E] hover:text-[#C99232] flex items-center gap-1 group transition-colors"
        >
          <span>{t.liveSection.viewAll}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Responsive Grid Layout: Featured Live Class | Upcoming Classes | Today's Wisdom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* 1. Featured Live Now Card (Left) */}
        <div className="relative rounded-2xl overflow-hidden bg-[#240B04] border border-[#7A3518] shadow-warm flex flex-col justify-between text-left group">
          
          {/* Background Image of Guru / Discourse */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${featuredLiveClass.bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#200A04] via-[#2E0F07]/80 to-transparent" />

          {/* Card Top: Live Badge */}
          <div className="relative z-10 p-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E53935] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md animate-pulse">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              {t.liveSection.liveNow}
            </span>

            {/* Title & Topic */}
            <h3 className="font-serif font-bold text-lg sm:text-xl text-[#FFF8E8] mt-3 leading-snug">
              {lang === 'te' ? featuredLiveClass.titleTe : featuredLiveClass.title}
            </h3>
            <p className="text-xs text-[#E8B85C] font-medium mt-1">
              {featuredLiveClass.topic}
            </p>

            {/* Instructor Row */}
            <div className="flex items-center gap-2.5 mt-4">
              <img
                src={featuredLiveClass.instructorAvatar}
                alt={featuredLiveClass.instructor}
                className="w-8 h-8 rounded-full border border-[#C99232] object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-[#F8EACD]">
                  {featuredLiveClass.instructor}
                </p>
                <p className="text-[10px] text-[#CBB79F]">
                  {featuredLiveClass.instructorRole}
                </p>
              </div>
            </div>
          </div>

          {/* Card Bottom: Viewers & Join Class Button */}
          <div className="relative z-10 p-4 pt-0 flex items-center justify-between border-t border-white/10 mt-4">
            <div className="flex items-center gap-1.5 text-xs text-[#EBD7B3]">
              <Users className="w-3.5 h-3.5 text-[#E8B85C]" />
              <span>{featuredLiveClass.viewersCount} {t.liveSection.watching}</span>
            </div>

            <Link
              to="/live"
              className="px-4 py-1.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-bold text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>{t.liveSection.joinClass}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* 2. Upcoming Classes List (Center) */}
        <div className="flex flex-col gap-2.5 justify-between">
          {upcomingClasses.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 bg-[#FFFDF9] rounded-2xl border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover transition-all text-left group"
            >
              <img
                src={item.instructorAvatar}
                alt={item.instructor}
                className="w-12 h-12 rounded-xl object-cover border border-[#E8D2B4] flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#3E170B] group-hover:text-[#5A1E0E] transition-colors truncate">
                  {lang === 'te' ? item.titleTe : item.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-[#7A3518] mt-0.5 font-medium">
                  <Clock className="w-3 h-3 text-[#C99232]" />
                  <span>{lang === 'te' ? item.timingTe : item.timing}</span>
                </div>
                <p className="text-[11px] text-[#8C6D58] truncate mt-0.5">
                  {item.instructor}
                </p>
              </div>

              <Link
                to={`/live?session=${item.id}`}
                className="w-7 h-7 rounded-full bg-[#F8EACD] group-hover:bg-[#5A1E0E] text-[#5A1E0E] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0 shadow-sm"
                title="Set Reminder"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* 3. Today's Wisdom Parchment Card (Right) */}
        <div className="flex flex-col justify-stretch">
          <TodaysWisdomCard />
        </div>

      </div>
    </section>
  );
}
