import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { upcomingEvents } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function UpcomingEventsSection() {
  const { lang } = useLanguage();

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-6 sm:py-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#C99232]">
            {lang === 'te' ? 'ఆధ్యాత్మిక ఉత్సవాలు' : 'Sacred Gatherings'}
          </span>
          <h2 className="font-gurukulam-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#5A1E0E] mt-1">
            {lang === 'te' ? 'రాబోయే గురుకుల కార్యక్రమాలు' : 'Upcoming Gurukulam Events'}
          </h2>
        </div>

        <Link
          to="/events"
          className="text-xs sm:text-sm font-semibold text-[#5A1E0E] hover:text-[#C99232] flex items-center gap-1 group transition-colors"
        >
          <span>{lang === 'te' ? 'అన్నీ చూడండి' : 'View All'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {upcomingEvents.map((evt) => (
          <div
            key={evt.id}
            className="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover transition-all text-left flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F3E5D0]">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#5A1E0E]/95 text-[#FFF8E8] text-xs font-bold shadow">
                  {evt.date}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#3E170B] group-hover:text-[#5A1E0E] transition-colors leading-snug">
                  {lang === 'te' ? evt.titleTe : evt.title}
                </h3>

                <div className="mt-2.5 space-y-1 text-xs text-[#7A3518]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C99232]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C99232]" />
                    <span>{evt.mode}</span>
                  </div>
                </div>

                <p className="mt-2 text-[11px] text-[#8C6D58]">
                  Lead: <span className="font-semibold text-[#5A1E0E]">{evt.speaker}</span>
                </p>
              </div>
            </div>

            <div className="p-4 pt-0">
              <Link
                to={`/events?id=${evt.id}`}
                className="w-full py-2 rounded-xl bg-[#F8EACD] group-hover:bg-[#5A1E0E] text-[#5A1E0E] group-hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <span>{lang === 'te' ? 'నమోదు చేసుకోండి / RSVP' : 'Register Now'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
