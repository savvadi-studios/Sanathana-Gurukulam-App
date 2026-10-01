import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Ticket, Check, Sparkles } from 'lucide-react';
import { upcomingEvents } from '../data/mockData';
import { useLanguage } from '../../src/context/LanguageContext';

export default function EventsPage() {
  const { lang } = useLanguage();
  const [registeredEvent, setRegisteredEvent] = useState(null);

  const allEvents = [
    ...upcomingEvents,
    {
      id: 'event-navaratri',
      title: 'Navaratri Devi Mahatmyam Akhanda Parayanam',
      titleTe: 'దేవీ శరన్నవరాత్రుల అఖండ చండీ సప్తశతి పారాయణం',
      date: 'Oct 15 - Oct 24, 2026',
      time: '6:00 AM - 12:30 PM Daily',
      mode: 'Sanathana Mandir Mandapam & Global Zoom',
      seatsLeft: 120,
      speaker: 'Siddha Peetham Acharyas',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'event-vedic-math',
      title: 'Vedic Mathematics 3-Day Youth Bootcamp',
      titleTe: 'యువత కోసం వేద గణిత 3 రోజుల కార్యశాల',
      date: 'Dec 02 - Dec 04, 2026',
      time: '4:00 PM - 6:00 PM IST',
      mode: 'Interactive Online Lab',
      seatsLeft: 55,
      speaker: 'Prof. Anantha Krishna',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-left">
      
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C99232]">
          {lang === 'te' ? 'ఆధ్యాత్మిక సమారోహం' : 'Spiritual Calendar'}
        </span>
        <h1 className="font-gurukulam-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#5A1E0E] mt-1">
          {lang === 'te' ? 'గురుకుల & దేవాలయ వేడుకలు' : 'Gurukulam Events & Festivals'}
        </h1>
        <p className="text-xs sm:text-sm text-[#7A3518] mt-1 max-w-2xl">
          {lang === 'te'
            ? 'దేవాలయ ఉత్సవాలు, గీతా జయంతి వేడుకలు, సంస్కృత శిబిరాలు మరియు సామూహిక సాధన కార్యక్రమాలు.'
            : 'Participate in sacred chanting, temple celebrations, youth workshops, and global discourses.'}
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allEvents.map((evt) => (
          <div
            key={evt.id}
            className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F3E5D0]">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-[#5A1E0E]/95 text-[#FFF8E8] text-xs font-bold shadow">
                  {evt.date}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 text-[#E8B85C] text-[11px] font-semibold backdrop-blur-sm">
                  {evt.seatsLeft} స్థానాలు మాత్రమే
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#3E170B] group-hover:text-[#5A1E0E] transition-colors leading-snug">
                  {lang === 'te' ? evt.titleTe : evt.title}
                </h3>

                <div className="mt-3 space-y-1.5 text-xs text-[#7A3518]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C99232]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C99232]" />
                    <span>{evt.mode}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#C99232]" />
                    <span>ముఖ్య ఆచార్యులు: <strong>{evt.speaker}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              {registeredEvent === evt.id ? (
                <div className="w-full py-2.5 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>నమోదు పూర్తయింది! వివరాలు ఈమెయిల్ చేయబడ్డాయి</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setRegisteredEvent(evt.id)}
                  className="w-full py-2.5 rounded-2xl bg-[#5A1E0E] hover:bg-[#3E170B] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Ticket className="w-4 h-4 text-[#E8B85C]" />
                  <span>నమోదు చేసుకోండి / Reserve Pass (Free)</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
