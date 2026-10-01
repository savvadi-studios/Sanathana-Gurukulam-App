import React, { useState } from 'react';
import { Calendar, Play, Square, Share2, Check, Sparkles } from 'lucide-react';
import { todaysWisdom } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function TodaysWisdomCard() {
  const { lang, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  // Web Audio API Vedic Tanpura + Flute harmonic drone synthesizer
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

      const rootFreq = 138.59; // C#3
      const fifthFreq = 207.65; // G#3

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 1);
      masterGain.connect(ctx.destination);

      const osc1 = ctx.createOscillator();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(rootFreq, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(fifthFreq, ctx.currentTime);

      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.2, ctx.currentTime);

      osc1.connect(droneGain);
      osc2.connect(droneGain);
      droneGain.connect(masterGain);

      osc1.start();
      osc2.start();

      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।");
        utterance.rate = 0.85;
        utterance.lang = 'hi-IN';
        utterance.onend = () => {
          setTimeout(() => {
            if (ctx.state === 'running') ctx.close();
            setIsPlaying(false);
          }, 800);
        };
        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => {
          if (ctx.state === 'running') ctx.close();
          setIsPlaying(false);
        }, 6000);
      }
    } catch (err) {
      console.warn('Audio fallback', err);
      setIsPlaying(false);
    }
  };

  const handleShare = () => {
    const textToShare = `${todaysWisdom.shloka}\n\n${todaysWisdom.teluguMeaning}\n\n- ${todaysWisdom.reference}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative parchment-texture rounded-xl sm:rounded-2xl p-2 sm:p-4 flex flex-col justify-between overflow-hidden shadow-warm border border-[#D6B98D] text-left h-full">
      
      {/* Background Watermark */}
      <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none select-none">
        <svg width="120" height="90" viewBox="0 0 100 80" fill="#7A3518">
          <path d="M50 5 L60 25 L75 40 L85 60 L95 80 L5 80 L15 60 L25 40 L40 25 Z" />
          <line x1="50" y1="2" x2="50" y2="80" stroke="#7A3518" strokeWidth="2" />
        </svg>
      </div>

      <div>
        {/* Header Row: Today's Wisdom title + Date badge "29 Sep" */}
        <div className="flex items-center justify-between pb-1.5 sm:pb-3 border-b border-[#D6B98D]/60">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-sm sm:text-base text-[#5A1E0E]">🛕</span>
            <h3 className="font-serif font-bold text-[10px] sm:text-base text-[#5A1E0E]">
              {t.wisdom.title}
            </h3>
          </div>

          <div className="px-1.5 sm:px-2 py-0.5 rounded border border-[#C99232]/50 bg-[#FDF7E7] text-[8px] sm:text-[11px] font-semibold text-[#5A1E0E]">
            {todaysWisdom.date}
          </div>
        </div>

        {/* Shloka Body in Devanagari Sanskrit */}
        <div className="mt-1.5 sm:mt-3">
          <p className="font-serif font-bold text-[10px] sm:text-lg text-[#3E170B] leading-tight text-center">
            कर्मण्येवाधिकारस्ते<br />
            मा फलेषु कदाचन ।
          </p>

          {/* Telugu Translation */}
          <p className="mt-1 sm:mt-2 text-[8px] sm:text-xs text-[#5C3D2E] font-telugu text-center leading-tight line-clamp-2 sm:line-clamp-none">
            {lang === 'te' 
              ? 'నీకు కర్తవ్యము చేయడానికే అధికారం, ఫలితంపై మాత్రం ఆశవద్దు.' 
              : todaysWisdom.englishMeaning}
          </p>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="mt-2 pt-1.5 sm:pt-3 border-t border-[#D6B98D]/50 flex items-center justify-between relative z-10">
        
        {/* Listen Button */}
        <button
          type="button"
          onClick={handleToggleAudio}
          className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-xs font-bold transition-all shadow-sm ${
            isPlaying
              ? 'bg-[#5A1E0E] text-[#FFF8E8] ring-1 ring-[#C99232]'
              : 'bg-[#5A1E0E] hover:bg-[#3E170B] text-[#FFF8E8] active:scale-95'
          }`}
        >
          {isPlaying ? (
            <Square className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current text-[#E8B85C]" />
          ) : (
            <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current text-[#E8B85C]" />
          )}
          <span>{isPlaying ? 'ఆపు' : t.wisdom.listen}</span>
        </button>

        {/* Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-[#FFFDF9]/80 hover:bg-[#FFFDF9] border border-[#C99232]/40 text-[#5A1E0E] text-[8px] sm:text-xs font-semibold active:scale-95 transition-all"
        >
          {copied ? (
            <Check className="w-2.5 h-2.5 text-emerald-600" />
          ) : (
            <Share2 className="w-2.5 h-2.5 text-[#7A3518]" />
          )}
          <span>{copied ? 'Copied' : t.wisdom.share}</span>
        </button>
      </div>

    </div>
  );
}
