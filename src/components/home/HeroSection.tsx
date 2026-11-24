'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ChevronRight,
  Wind,
  Flame,
  Droplets,
  Wrench,
  Snowflake,
  CheckCircle2,
  Gauge
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';

export default function HeroSection() {
  const [activeMode, setActiveMode] = useState<'cooling' | 'heating' | 'purification'>('cooling');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900 text-white pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-28 border-b border-navy-800">
      
      {/* Dynamic Animated Ambient Lights */}
      <div className={`absolute top-10 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-[110px] sm:blur-[140px] pointer-events-none transition-colors duration-700 ${
        activeMode === 'cooling' ? 'bg-electric-500/20' : activeMode === 'heating' ? 'bg-accent-500/20' : 'bg-emerald-500/20'
      }`} />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-electric-600/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1D3B6F_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Service Mode Selector Tabs - Mobile Horizontal Scroll/Grid */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex w-full sm:w-auto p-1 sm:p-1.5 rounded-2xl bg-navy-900/90 border border-navy-700/80 backdrop-blur-md shadow-2xl justify-between sm:justify-start">
            <button
              onClick={() => setActiveMode('cooling')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeMode === 'cooling' 
                  ? 'bg-electric-500 text-white shadow-glow-electric' 
                  : 'text-coolgray-300 hover:text-white'
              }`}
            >
              <Snowflake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>AC Cooling</span>
            </button>

            <button
              onClick={() => setActiveMode('heating')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeMode === 'heating' 
                  ? 'bg-accent-500 text-white shadow-glow-accent' 
                  : 'text-coolgray-300 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Geyser</span>
            </button>

            <button
              onClick={() => setActiveMode('purification')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeMode === 'purification' 
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'text-coolgray-300 hover:text-white'
              }`}
            >
              <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>RO Pure</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-electric-500/30 text-electric-300 text-[11px] sm:text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-ping" />
              <span>Indore Premier Appliance Hub • MR 10 Square</span>
            </div>

            {/* Dynamic Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18] sm:leading-[1.12]">
              {activeMode === 'cooling' && (
                <>
                  Fast & Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-sky-300 to-electric-500">AC Repair & Servicing</span> in Indore
                </>
              )}
              {activeMode === 'heating' && (
                <>
                  Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-amber-300 to-accent-500">Electric Geyser Repair</span> in Indore
                </>
              )}
              {activeMode === 'purification' && (
                <>
                  Doorstep <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">RO Water Purifier Service</span> in Indore
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-coolgray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {activeMode === 'cooling' && (
                "Precision diagnostics for split & window ACs, copper piping, deep vacuuming, and genuine refrigerant leak testing across all of Indore."
              )}
              {activeMode === 'heating' && (
                "Prompt doorstep solutions for water heater element burning, thermostat calibration, MCB tripping, and safe pressure valve mounting."
              )}
              {activeMode === 'purification' && (
                "Multi-stage filter replacement, RO membrane rejuvenation, digital TDS balance testing, and booster pump troubleshooting."
              )}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto bg-electric-500 hover:bg-electric-600 text-white font-extrabold py-3.5 sm:py-4 px-7 sm:px-8 rounded-2xl shadow-glow-electric active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 text-sm group"
              >
                <span>Book Service Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={generatePhoneLink()}
                  className="flex-1 sm:flex-initial bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 font-bold py-3.5 sm:py-4 px-5 sm:px-7 rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <Phone className="w-4 h-4 text-accent-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 sm:py-4 px-5 sm:px-6 rounded-2xl shadow-md active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 sm:pt-6 border-t border-navy-800/80 grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
              <div className="p-2 sm:p-0 rounded-xl bg-navy-900/50 sm:bg-transparent border border-navy-800/60 sm:border-0 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-white">Multi-Appliance</h4>
                  <p className="text-[9px] sm:text-[11px] text-coolgray-400 hidden sm:block">AC, Geyser & RO</p>
                </div>
              </div>

              <div className="p-2 sm:p-0 rounded-xl bg-navy-900/50 sm:bg-transparent border border-navy-800/60 sm:border-0 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-white">Doorstep Fast</h4>
                  <p className="text-[9px] sm:text-[11px] text-coolgray-400 hidden sm:block">Prompt visits</p>
                </div>
              </div>

              <div className="p-2 sm:p-0 rounded-xl bg-navy-900/50 sm:bg-transparent border border-navy-800/60 sm:border-0 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-white">All Indore</h4>
                  <p className="text-[9px] sm:text-[11px] text-coolgray-400 hidden sm:block">100% Coverage</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Diagnostic Appliance Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-electric-500 via-accent-500 to-electric-600 opacity-25 blur-xl pointer-events-none" />

              {/* Main Futuristic Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-navy-900/95 to-navy-950/95 p-5 sm:p-7 border border-navy-700/80 shadow-2xl backdrop-blur-xl">
                
                {/* Header status strip */}
                <div className="flex items-center justify-between border-b border-navy-800 pb-3 sm:pb-4 mb-4 sm:mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-coolgray-300">
                      Indore On-Site Diagnostics
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-electric-500/20 text-electric-300 border border-electric-500/30">
                    MR 10 Hub
                  </span>
                </div>

                {/* Animated AC Blower Visual */}
                <div className="relative p-4 sm:p-5 rounded-2xl bg-navy-950/90 border border-navy-800 overflow-hidden mb-4 sm:mb-5">
                  
                  {/* Subtle Airflow streams */}
                  <div className="absolute top-0 left-0 right-0 h-full flex flex-col justify-around opacity-40 pointer-events-none">
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-electric-400 to-transparent ac-airflow-line" />
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-sky-300 to-transparent ac-airflow-line [animation-delay:1.2s]" />
                  </div>

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-navy-800 border border-electric-500/30 flex items-center justify-center text-electric-400 shadow-glow-electric shrink-0">
                        {activeMode === 'cooling' && <Wind className="w-5 h-5 sm:w-6 sm:h-6 animate-wind" />}
                        {activeMode === 'heating' && <Flame className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse text-accent-400" />}
                        {activeMode === 'purification' && <Droplets className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce text-emerald-400" />}
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-white">
                          {activeMode === 'cooling' && 'AC Diagnostic Unit'}
                          {activeMode === 'heating' && 'Geyser Thermal Unit'}
                          {activeMode === 'purification' && 'RO TDS Analyzer'}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-coolgray-400">
                          {activeMode === 'cooling' && 'Coil, Gas & Compressor'}
                          {activeMode === 'heating' && 'Heating Coil & Cut-off'}
                          {activeMode === 'purification' && 'Membrane & Filter Life'}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-lg sm:text-xl font-black text-electric-400 font-mono block">
                        {activeMode === 'cooling' && '18°C'}
                        {activeMode === 'heating' && '65°C'}
                        {activeMode === 'purification' && '85 TDS'}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-emerald-400 font-semibold">
                        Optimized
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3 Status Points */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                      <span className="text-coolgray-200 font-medium">Split & Window Repair</span>
                    </div>
                    <span className="text-emerald-400 font-bold text-[11px]">Same-Day</span>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                      <span className="text-coolgray-200 font-medium">R32 / R410A Leak Check</span>
                    </div>
                    <span className="text-white font-bold text-[11px]">Nitrogen Tested</span>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-coolgray-200 font-medium">Doorstep Across Indore</span>
                    </div>
                    <span className="text-coolgray-300 text-[11px]">All Sectors</span>
                  </div>
                </div>

                {/* Bottom Direct Coordination */}
                <div className="mt-4 pt-3 border-t border-navy-800 flex items-center justify-between text-xs">
                  <span className="text-coolgray-400 text-[11px]">Workshop Hotline:</span>
                  <a 
                    href={generatePhoneLink()} 
                    className="text-white font-extrabold hover:text-electric-400 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-accent-400" />
                    <span>{BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
