import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, GraduationCap } from 'lucide-react';
import { teachersData } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function FeaturedTeachersSection() {
  const { lang } = useLanguage();

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-6 sm:py-10 max-w-7xl mx-auto">
      <div className="text-left mb-6">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#C99232]">
          {lang === 'te' ? 'సనాతన గురు పరంపర' : 'Venerated Gurus & Scholars'}
        </span>
        <h2 className="font-gurukulam-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#5A1E0E] mt-1">
          {lang === 'te' ? 'మా ప్రముఖ ఆచార్యులు' : 'Featured Gurus & Acharyas'}
        </h2>
        <p className="text-xs sm:text-sm text-[#7A3518] mt-1">
          {lang === 'te' 
            ? 'వేద, శాస్త్ర, సంస్కృత పాండిత్యంలో సుప్రసిద్ధులైన విద్వాంసులచే మార్గదర్శనం' 
            : 'Learn directly from masters of Vedanta, Vyakarana, Yoga, and Sacred Epics.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teachersData.map((guru) => (
          <div
            key={guru.id}
            className="bg-[#FFFDF9] rounded-2xl p-4 border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover transition-all text-left flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-[#F3E5D0]">
                <img
                  src={guru.avatar}
                  alt={guru.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#5A1E0E]/90 text-[#F8EACD] text-[10px] font-bold flex items-center gap-1 shadow">
                  <Star className="w-3 h-3 fill-[#C99232] text-[#C99232]" />
                  <span>{guru.rating}</span>
                </div>
              </div>

              <h3 className="font-serif font-bold text-sm sm:text-base text-[#3E170B] group-hover:text-[#5A1E0E] transition-colors">
                {lang === 'te' ? guru.nameTe : guru.name}
              </h3>
              
              <p className="text-xs font-semibold text-[#C99232] mt-0.5">
                {lang === 'te' ? guru.roleTe : guru.role}
              </p>

              <p className="text-[11px] text-[#7A3518] mt-1 font-medium">
                {guru.experience}
              </p>

              <p className="text-xs text-[#5C3D2E] mt-2 line-clamp-3 leading-relaxed">
                {guru.bio}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EBD7B3]/60 flex items-center justify-between text-[11px] text-[#8C6D58]">
              <span>👥 {guru.studentsCount} Shishyas</span>
              <Link
                to={`/courses?teacher=${guru.id}`}
                className="text-[#5A1E0E] font-bold hover:text-[#C99232]"
              >
                తరగతులు →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
