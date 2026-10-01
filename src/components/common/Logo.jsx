import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Logo({ size = 'normal', showTagline = true }) {
  const { lang, t } = useLanguage();

  return (
    <Link to="/" className="flex items-center gap-2.5 group transition-transform active:scale-95">
      {/* Sacred Icon: Lotus with Radiant Sun/Flame & Knowledge Book Motif */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 64 64"
          className={size === 'large' ? 'w-14 h-14' : size === 'small' ? 'w-8 h-8' : 'w-11 h-11'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle outer glow */}
          <circle cx="32" cy="32" r="30" fill="#F8EACD" fillOpacity="0.4" />
          
          {/* Base open book petals */}
          <path
            d="M12 44C20 40 28 42 32 46C36 42 44 40 52 44C50 49 43 51 32 48C21 51 14 49 12 44Z"
            fill="#5A1E0E"
          />
          
          {/* Lotus side petals */}
          <path
            d="M14 41C16 33 24 28 32 38C26 28 17 29 14 41Z"
            fill="#C99232"
          />
          <path
            d="M50 41C48 33 40 28 32 38C38 28 47 29 50 41Z"
            fill="#C99232"
          />

          {/* Inner Lotus Petals */}
          <path
            d="M20 39C23 27 28 22 32 32C28 22 22 28 20 39Z"
            fill="#7A3518"
          />
          <path
            d="M44 39C41 27 36 22 32 32C36 22 42 28 44 39Z"
            fill="#7A3518"
          />

          {/* Central Sacred Flame (Jyoti) */}
          <path
            d="M32 12C35 20 38 24 38 28C38 33 35 36 32 36C29 36 26 33 26 28C26 24 29 20 32 12Z"
            fill="#E8B85C"
          />
          <path
            d="M32 18C33.5 22 35 25 35 28C35 31 33.5 33 32 33C30.5 33 29 31 29 28C29 25 30.5 22 32 18Z"
            fill="#FFF8E8"
          />

          {/* Sun rays aura */}
          <circle cx="32" cy="18" r="1.5" fill="#C99232" />
          <circle cx="25" cy="20" r="1" fill="#C99232" />
          <circle cx="39" cy="20" r="1" fill="#C99232" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span className="font-gurukulam-heading tracking-wide text-[#5A1E0E] font-bold text-lg md:text-xl leading-tight group-hover:text-[#3E170B] transition-colors">
          {lang === 'te' ? 'Sanathana' : 'Sanathana'}
          <span className="block -mt-0.5 text-base md:text-lg font-serif">
            Gurukulam
          </span>
        </span>
        {showTagline && (
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-semibold text-[#7A3518] uppercase -mt-0.5">
            LEARN • PRACTICE • LIVE
          </span>
        )}
      </div>
    </Link>
  );
}
