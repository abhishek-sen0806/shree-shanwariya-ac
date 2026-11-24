import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightMode?: boolean;
}

export default function AppLogo({
  className = '',
  size = 'md',
  showText = true,
  lightMode = false,
}: LogoProps) {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  };

  const titleSizes = {
    sm: 'text-sm font-extrabold',
    md: 'text-base sm:text-lg font-extrabold',
    lg: 'text-lg sm:text-2xl font-black',
    xl: 'text-2xl sm:text-3xl font-black',
  };

  const subtitleSizes = {
    sm: 'text-[9px] font-bold tracking-wider',
    md: 'text-[10px] sm:text-[11px] font-bold tracking-wider',
    lg: 'text-xs sm:text-sm font-bold tracking-wider',
    xl: 'text-sm font-bold tracking-wider',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Premium Multi-Element Emblem (Snowflake/Cooling + Pure Water Drop + Thermal Radiance) */}
      <div
        className={`${iconSizes[size]} relative rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-[#0A2540] flex items-center justify-center p-2 shadow-md border border-navy-700/60 group-hover:border-electric-500/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,166,255,0.35)] shrink-0 overflow-hidden`}
      >
        {/* Subtle internal gradient gloss */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-electric-500/10 to-transparent pointer-events-none" />

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Electric Blue Ice Gradient */}
            <linearGradient id="coolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#00A6FF" />
            </linearGradient>

            {/* Warm Orange Heat Gradient */}
            <linearGradient id="warmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>

            {/* Pure Water Aqua Gradient */}
            <linearGradient id="waterGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A6FF" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>

          {/* Central Cooling Wave Arc Top (AC Air Breeze) */}
          <path
            d="M 22 36 C 36 22, 64 22, 78 36"
            stroke="url(#coolGradient)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Central Cooling Wave Arc Middle */}
          <path
            d="M 28 48 C 40 38, 60 38, 72 48"
            stroke="url(#coolGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Pure RO Water Drop Integrated in Center */}
          <path
            d="M 50 44 C 44 54, 38 60, 38 68 C 38 75, 43 81, 50 81 C 57 81, 62 75, 62 68 C 62 60, 56 54, 50 44 Z"
            fill="url(#waterGradient)"
          />

          {/* Subtle Water Reflection Highlight */}
          <path
            d="M 44 64 C 44 60, 48 56, 50 54"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Warm Geyser Energy Spark / Flame Arc */}
          <circle cx="76" cy="30" r="4.5" fill="url(#warmGradient)" />
          <circle cx="24" cy="30" r="3" fill="#38BDF8" opacity="0.9" />

          {/* HVAC Precision Cross Accent on Drop Base */}
          <circle cx="50" cy="70" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography Block */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span
              className={`${titleSizes[size]} tracking-tight leading-tight block ${
                lightMode ? 'text-white' : 'text-navy-900 group-hover:text-electric-600'
              } transition-colors`}
            >
              Shri Sanwariya
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse hidden sm:inline-block" />
          </div>

          <span
            className={`${subtitleSizes[size]} uppercase font-extrabold ${
              lightMode ? 'text-electric-400' : 'text-electric-600'
            } block leading-tight`}
          >
            Air Conditioner & Appliance Care
          </span>
        </div>
      )}
    </div>
  );
}
