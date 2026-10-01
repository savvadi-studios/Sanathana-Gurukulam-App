import React, { useState } from 'react';
import { Calendar, Play, Square, Share2, Check, Sparkles } from 'lucide-react';
import { todaysWisdom } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function TodaysWisdomCard() {
  const { lang, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  // Web Audio API Vedic Tanpura + Flute harmonic drone synthesizer for the Sanskrit recitation
  const handleToggleAudio = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (window._gurukulamAudioCtx) {
        window._gurukulamAudioCtx.close();
        window._gurukulamAudioCtx = null;
      }
      return;
    }

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      window._gurukulamAudioCtx = ctx;
      setIsPlaying(true);

      // Create meditative Sa-Pa drone (C#3 fundamental + G#3 fifth)
      const rootFreq = 138.59; // C#3 (Indian classical Sa)
      const fifthFreq = 207.65; // G#3 (Indian classical Pa)

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 1);
      masterGain.connect(ctx.destination);

      // Low warm drone oscillator 1 (Root)
      const osc1 = ctx.createOscillator();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(rootFreq, ctx.currentTime);

      // Drone oscillator 2 (Fifth)
      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(fifthFreq, ctx.currentTime);

      // Harmonics shimmer
      const osc3 = ctx.createOscillator();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(rootFreq * 2, ctx.currentTime);

      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.2, ctx.currentTime);

      osc1.connect(droneGain);
      osc2.connect(droneGain);
      osc3.connect(droneGain);
      droneGain.connect(masterGain);

      osc1.start();
      osc2.start();
      osc3.start();

      // Voice recitation synthesis via SpeechSynthesis (if supported) for the Sanskrit shloka
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेతుర్భూర్మా తే సఙ్గోఽస్త్వకర్మణి ॥");
        utterance.rate = 0.85;
        utterance.pitch = 0.95;
        utterance.lang = 'hi-IN'; // Closest native phonetics for Sanskrit/Devanagari
        
        utterance.onend = () => {
          setTimeout(() => {
            if (masterGain && ctx.state === 'running') {
              masterGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
              setTimeout(() => {
                setIsPlaying(false);
                if (ctx.state === 'running') ctx.close();
              }, 1600);
            }
          }, 1000);
        };

        window.speechSynthesis.speak(utterance);
      } else {
        // Auto stop drone after 8 seconds if no TTS
        setTimeout(() => {
          if (ctx.state === 'running') {
            masterGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
            setTimeout(() => {
              setIsPlaying(false);
              ctx.close();
            }, 1100);
          }
        }, 8000);
      }
    } catch (err) {
      console.warn('Audio play fallback', err);
      setIsPlaying(false);
    }
  };

  const handleShare = () => {
    const textToShare = `${todaysWisdom.shloka}\n\n${todaysWisdom.teluguMeaning}\n\n- ${todaysWisdom.reference}\n(Via Sanathana Gurukulam)`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="relative parchment-texture rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-warm border border-[#D6B98D] text-left">
      
      {/* Background Watermark: Temple silhouette in bottom-right corner matching screenshot */}
      <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none select-none">
        <svg width="180" height="140" viewBox="0 0 100 80" fill="#7A3518">
          <path d="M50 5 L60 25 L75 40 L85 60 L95 80 L5 80 L15 60 L25 40 L40 25 Z" />
          <line x1="50" y1="2" x2="50" y2="80" stroke="#7A3518" strokeWidth="2" />
          <circle cx="50" cy="3" r="2" fill="#7A3518" />
        </svg>
      </div>

      <div>
        {/* Header Row: Today's Wisdom title with calendar icon + Date badge "29 Sep" */}
        <div className="flex items-center justify-between pb-3 border-b border-[#D6B98D]/60">
          <div className="flex items-center gap-2">
            <span className="text-lg text-[#5A1E0E]">🛕</span>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#5A1E0E] flex items-center gap-1.5">
              {t.wisdom.title}
            </h3>
          </div>

          <div className="px-2.5 py-0.5 rounded-md border border-[#C99232]/50 bg-[#FDF7E7] text-[11px] font-semibold text-[#5A1E0E]">
            {todaysWisdom.date}
          </div>
        </div>

        {/* Shloka Body in Devanagari Sanskrit */}
        <div className="mt-3 sm:mt-4">
          <p className="font-serif font-bold text-base sm:text-lg md:text-xl text-[#3E170B] leading-relaxed tracking-wide text-center">
            कर्मण्येवाधिकारस्ते<br />
            मा फलेषु कदाचन ।
          </p>

          {/* Telugu Translation */}
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#5C3D2E] font-telugu text-center leading-relaxed">
            {lang === 'te' 
              ? todaysWisdom.teluguMeaning 
              : todaysWisdom.englishMeaning}
          </p>

          <p className="mt-1 text-[10px] text-center text-[#7A3518] font-semibold uppercase tracking-wider">
            {todaysWisdom.reference}
          </p>
        </div>
      </div>

      {/* Action Buttons Row matching screenshot: ▶ Listen and Share */}
      <div className="mt-4 pt-3 border-t border-[#D6B98D]/50 flex items-center justify-between relative z-10">
        
        {/* Listen Button with audio simulation */}
        <button
          type="button"
          onClick={handleToggleAudio}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
            isPlaying
              ? 'bg-[#5A1E0E] text-[#FFF8E8] ring-2 ring-[#C99232]'
              : 'bg-[#5A1E0E] hover:bg-[#3E170B] text-[#FFF8E8] active:scale-95'
          }`}
        >
          {isPlaying ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current text-[#E8B85C]" />
              <span>ఆపు / Stop</span>
              <span className="flex gap-0.5">
                <span className="w-1 h-3 bg-[#E8B85C] animate-pulse"></span>
                <span className="w-1 h-2 bg-[#E8B85C] animate-pulse delay-75"></span>
                <span className="w-1 h-4 bg-[#E8B85C] animate-pulse delay-150"></span>
              </span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current text-[#E8B85C]" />
              <span>{t.wisdom.listen}</span>
            </>
          )}
        </button>

        {/* Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFDF9]/80 hover:bg-[#FFFDF9] border border-[#C99232]/40 text-[#5A1E0E] text-xs font-semibold active:scale-95 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">{t.wisdom.copied}</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-[#7A3518]" />
              <span>{t.wisdom.share}</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
