import React from 'react';

export function BrandLogo({ name }: { name: string }) {
  switch (name) {
    case 'LG':
      return (
        <svg viewBox="0 0 100 40" className="h-6 w-auto" fill="currentColor">
          <circle cx="20" cy="20" r="14" fill="#A50034" />
          <path d="M16 13 v14 h9" stroke="#FFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="23" cy="15" r="1.5" fill="#FFF" />
          <text x="42" y="26" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill="#222">LG</text>
        </svg>
      );
    case 'Samsung':
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto">
          <ellipse cx="60" cy="20" rx="55" ry="16" fill="#1428A0" transform="rotate(-6 60 20)" />
          <text x="60" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#FFF" letterSpacing="1">SAMSUNG</text>
        </svg>
      );
    case 'Voltas':
      return (
        <svg viewBox="0 0 110 40" className="h-6 w-auto">
          <text x="55" y="26" textAnchor="middle" fontFamily="sans-serif" fontSize="17" fontWeight="900" fill="#005B94" letterSpacing="1.5">VOLTAS</text>
          <path d="M12 28 Q 55 33 98 28" stroke="#00A6FF" strokeWidth="2" fill="none" />
        </svg>
      );
    case 'Daikin':
      return (
        <svg viewBox="0 0 110 40" className="h-6 w-auto">
          <polygon points="10,24 22,12 18,24" fill="#0097E2" />
          <text x="24" y="25" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="#0097E2" letterSpacing="1">DAIKIN</text>
        </svg>
      );
    case 'Blue Star':
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto">
          <path d="M15 12 L18 20 L26 20 L20 25 L22 33 L15 28 L8 33 L10 25 L4 20 L12 20 Z" fill="#00529B" />
          <text x="32" y="25" fontFamily="sans-serif" fontSize="12" fontWeight="900" fill="#00529B" letterSpacing="0.5">BLUE STAR</text>
        </svg>
      );
    case 'Carrier':
      return (
        <svg viewBox="0 0 110 40" className="h-6 w-auto">
          <ellipse cx="55" cy="20" rx="48" ry="14" fill="#005596" />
          <text x="55" y="25" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="14" fontWeight="bold" fill="#FFF">Carrier</text>
        </svg>
      );
    case 'Hitachi':
      return (
        <svg viewBox="0 0 110 40" className="h-6 w-auto">
          <text x="55" y="24" textAnchor="middle" fontFamily="sans-serif" fontSize="15" fontWeight="900" fill="#DE0000" letterSpacing="1">HITACHI</text>
          <text x="55" y="32" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#444">Inspire the Next</text>
        </svg>
      );
    case 'Panasonic':
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto">
          <text x="60" y="26" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="900" fill="#0041C2" letterSpacing="1">Panasonic</text>
        </svg>
      );
    case 'Whirlpool':
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto">
          <circle cx="20" cy="20" r="10" stroke="#FFB800" strokeWidth="2.5" fill="none" />
          <text x="35" y="25" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#0C2340">Whirlpool</text>
        </svg>
      );
    case 'Godrej':
      return (
        <svg viewBox="0 0 110 40" className="h-6 w-auto">
          <text x="55" y="27" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="18" fontWeight="bold" fill="#D62027">Godrej</text>
        </svg>
      );
    case 'Haier':
      return (
        <svg viewBox="0 0 100 40" className="h-6 w-auto">
          <text x="50" y="26" textAnchor="middle" fontFamily="sans-serif" fontSize="17" fontWeight="900" fill="#005BAC" letterSpacing="1">Haier</text>
        </svg>
      );
    case 'IFB':
      return (
        <svg viewBox="0 0 90 40" className="h-6 w-auto">
          <text x="45" y="27" textAnchor="middle" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#E31837" letterSpacing="2">IFB</text>
        </svg>
      );
    case 'Kent':
      return (
        <svg viewBox="0 0 100 40" className="h-6 w-auto">
          <text x="50" y="23" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill="#008080" letterSpacing="1">KENT</text>
          <text x="50" y="32" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#005080">RO Systems</text>
        </svg>
      );
    case 'Aquaguard':
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto">
          <path d="M12 20 Q 18 12 24 20 T 36 20" stroke="#0099DA" strokeWidth="3" fill="none" />
          <text x="42" y="24" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#003A70">Aquaguard</text>
        </svg>
      );
    default:
      return (
        <span className="font-extrabold text-sm text-navy-900 tracking-wider">
          {name}
        </span>
      );
  }
}
