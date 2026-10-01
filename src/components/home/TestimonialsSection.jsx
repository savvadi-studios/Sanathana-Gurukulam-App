import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function TestimonialsSection() {
  const { lang } = useLanguage();

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-6 sm:py-10 max-w-7xl mx-auto">
      <div className="text-left mb-6">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#C99232]">
          {lang === 'te' ? 'శిష్యుల అనుభవాలు' : 'Student Reflections'}
        </span>
        <h2 className="font-gurukulam-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#5A1E0E] mt-1">
          {lang === 'te' ? 'గురుకుల సాధకుల అనుభవాలు' : 'Voices of Our Sadhakas'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonialsData.map((t) => (
          <div
            key={t.id}
            className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#EBD7B3] shadow-warm flex flex-col justify-between text-left relative overflow-hidden"
          >
            {/* Decorative Quote watermark */}
            <Quote className="w-16 h-16 text-[#F8EACD] absolute -top-2 -right-2 pointer-events-none opacity-40 rotate-180" />

            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#C99232] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-[#3E170B] italic leading-relaxed relative z-10">
                "{lang === 'te' ? t.quoteTe : t.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="mt-4 pt-3 border-t border-[#EBD7B3]/60 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border border-[#DEBE99]"
              />
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#5A1E0E]">
                  {t.name}
                </h4>
                <p className="text-[11px] text-[#7A3518]">
                  {t.role} • {t.city}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
