import React, { useState } from 'react';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function NewsletterSection() {
  const { lang } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-br from-[#3E170B] via-[#5A1E0E] to-[#2E0F07] p-6 sm:p-10 md:p-14 text-center text-[#FFF8E8] shadow-warm-lg border border-[#C99232]/30 overflow-hidden">
        
        {/* Subtle decorative rangoli / star accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99232]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8B85C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8B85C]/20 border border-[#E8B85C]/40 text-[#E8B85C] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'te' ? 'జ్ఞాన ప్రయాణం' : 'Journey of Wisdom'}</span>
          </div>

          <h2 className="font-gurukulam-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {lang === 'te' 
              ? 'మీ అభ్యసన ప్రయాణాన్ని కొనసాగించండి' 
              : 'Continue your journey of learning.'}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#F8EACD] mt-2 leading-relaxed">
            {lang === 'te'
              ? 'ప్రతిరోజూ ఉదయం ఒక పవిత్ర శ్లోకం, తాత్పర్యం మరియు రాబోయే ప్రత్యక్ష తరగతుల వివరాలు మీ ఈమెయిల్‌లో అందుకోండి.'
              : 'Receive daily sacred verses, profound commentaries, and direct invites to live Acharya discourses in your inbox.'}
          </p>

          {subscribed ? (
            <div className="mt-6 p-4 rounded-2xl bg-[#FFF8E8]/10 border border-[#E8B85C]/50 text-[#F8EACD] flex items-center justify-center gap-2 animate-in fade-in">
              <CheckCircle className="w-5 h-5 text-[#E8B85C]" />
              <span className="text-sm font-semibold">
                {lang === 'te' 
                  ? 'ధన్యవాదాలు! మీ సభ్యత్వం నమోదయింది.' 
                  : 'Namaste! You have successfully subscribed.'}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-[#C99232] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === 'te' ? 'మీ ఈమెయిల్ నమోదు చేయండి...' : 'Enter your email address...'}
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-[#FFF8E8] text-[#2E120A] placeholder-[#8C6D58] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B85C]"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#E8B85C] hover:bg-[#F4D38B] active:scale-95 text-[#2E120A] font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
              >
                {lang === 'te' ? 'సభ్యత్వం పొందండి' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-[10px] text-[#EBD7B3]/70 mt-3">
            {lang === 'te' ? 'నో స్పామ్ • ఎప్పుడైనా అన్‌సబ్‌స్క్రయిబ్ చేయవచ్చు' : 'Pure wisdom • No spam • Unsubscribe anytime'}
          </p>
        </div>
      </div>
    </section>
  );
}
