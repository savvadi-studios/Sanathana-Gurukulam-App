import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Sparkles, BookOpen, Users, Award, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative px-2.5 sm:px-6 lg:px-8 pt-1 sm:pt-2 pb-2 sm:pb-6 max-w-7xl mx-auto">
      {/* Hero Banner Card Container with Rounded Corners matching reference */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm border border-[#EBD7B3] bg-[#2E120A] min-h-[250px] sm:min-h-[380px] lg:min-h-[500px] flex items-end sm:items-center">
        
        {/* Background Image: Ancient Temple Mandapam with Golden Hour Lighting */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105 hover:scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1599818817454-e694503932e6?auto=format&fit=crop&w=1920&q=85')`,
          }}
        >
          {/* Subtle warm gradient overlay for readability while keeping the golden temple glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#240B04] via-[#3E170B]/50 to-transparent sm:bg-gradient-to-r sm:from-[#240B04]/90 sm:via-[#3E170B]/70 sm:to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 p-3.5 sm:p-8 md:p-12 lg:p-16 max-w-2xl text-left w-full">
          
          {/* Main Hero Headings - Recreating Reference Lines */}
          <h1 className="font-gurukulam-heading text-lg sm:text-3xl md:text-5xl lg:text-6xl text-[#FFF8E8] font-bold tracking-tight leading-tight drop-shadow-md">
            {lang === 'te' ? (
              <>
                <span className="block">సనాతన జ్ఞానం</span>
                <span className="block">ఆధునిక అభ్యసన</span>
                <span className="block text-[#E8B85C]">శాశ్వత విలువలు</span>
              </>
            ) : (
              <>
                <span className="block">Ancient Wisdom</span>
                <span className="block">Modern Learning</span>
                <span className="block text-[#E8B85C]">Timeless Values</span>
              </>
            )}
          </h1>

          {/* Telugu Supporting Subtext */}
          <p className="mt-1 sm:mt-3 text-[11px] sm:text-base md:text-lg text-[#F8EACD] font-telugu font-medium drop-shadow leading-tight">
            {lang === 'te' 
              ? 'భారతీయ జీవిత విధానం తరతరాలకు...' 
              : 'భారతీయ జీవిత విధానం తరతరాలకు... (Nurturing Bharat\'s eternal heritage across generations)'}
          </p>

          {/* CTA Buttons */}
          <div className="mt-2.5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-4">
            
            {/* Primary CTA: Warm Golden Amber Pill */}
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 rounded-full bg-[#E8B85C] hover:bg-[#F4D38B] active:scale-95 text-[#2E120A] font-bold text-[10px] sm:text-sm tracking-wide shadow-warm transition-all group"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA: Translucent Pill with Play Icon */}
            <button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-1.5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 active:scale-95 text-[#FFF8E8] font-medium text-[10px] sm:text-sm tracking-wide transition-all"
            >
              <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current text-white translate-x-0.5" />
              </div>
              <span>{t.hero.watchBtn}</span>
            </button>
          </div>

          {/* Desktop Trust Indicators */}
          <div className="hidden md:flex items-center gap-6 mt-8 pt-6 border-t border-white/10 text-xs text-[#F8EACD]/90">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#E8B85C]" />
              <span><strong>48,000+</strong> Shishyas</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#E8B85C]" />
              <span><strong>100%</strong> Traditional Gurus</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#E8B85C]" />
              <span>Verified Certifications</span>
            </div>
          </div>
        </div>

        {/* Carousel indicators dots at bottom right (matching screenshot) */}
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-10 flex items-center gap-1 bg-black/40 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full backdrop-blur-sm">
          <span className="w-2.5 h-1 sm:w-3.5 sm:h-1.5 bg-[#E8B85C] rounded-full"></span>
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/50 rounded-full"></span>
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/50 rounded-full"></span>
        </div>
      </div>

      {/* Video Modal Simulation */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="bg-[#2E120A] border border-[#C99232] rounded-3xl max-w-2xl w-full p-6 text-center text-[#FFF8E8] relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8E8]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl sm:text-2xl text-[#E8B85C] mb-2">
              సనాతన గురుకులం కథనం / The Gurukulam Story
            </h3>
            <p className="text-xs sm:text-sm text-[#F8EACD] mb-4">
              Reviving the ancient Gurukula tradition with 21st-century digital excellence.
            </p>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-[#7A3518]">
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80" 
                alt="Gurukulam discourse preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#E8B85C] flex items-center justify-center shadow-lg animate-pulse">
                  <Play className="w-7 h-7 text-[#2E120A] fill-current translate-x-0.5" />
                </div>
                <span className="mt-3 text-xs tracking-wider uppercase font-semibold text-[#FFF8E8]">
                  Click to start spiritual intro stream
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowVideoModal(false)}
                className="px-5 py-2 rounded-full bg-[#5A1E0E] text-[#F8EACD] hover:bg-[#7A3518] text-xs font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
