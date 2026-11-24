'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles,
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
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900 text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-navy-800">

      {/* Dynamic Animated Ambient Lights */}
      <div className={`absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${activeMode === 'cooling' ? 'bg-electric-500/20' : activeMode === 'heating' ? 'bg-accent-500/20' : 'bg-emerald-500/20'
        }`} />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-electric-600/10 rounded-full blur-[130px] pointer-events-none animate-mist" />

      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1D3B6F_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Service Mode Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-navy-800/90 border border-navy-700/80 backdrop-blur-md shadow-2xl">
            <button
              onClick={() => setActiveMode('cooling')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${activeMode === 'cooling'
                  ? 'bg-electric-500 text-white shadow-glow-electric'
                  : 'text-coolgray-300 hover:text-white'
                }`}
            >
              <Snowflake className="w-4 h-4 animate-spin-slow" />
              <span>Air Conditioning (AC)</span>
            </button>

            <button
              onClick={() => setActiveMode('heating')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${activeMode === 'heating'
                  ? 'bg-accent-500 text-white shadow-glow-accent'
                  : 'text-coolgray-300 hover:text-white'
                }`}
            >
              <Flame className="w-4 h-4" />
              <span>Geyser Services</span>
            </button>

            <button
              onClick={() => setActiveMode('purification')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${activeMode === 'purification'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-coolgray-300 hover:text-white'
                }`}
            >
              <Droplets className="w-4 h-4" />
              <span>RO Purifiers</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800 border border-electric-500/30 text-electric-300 text-xs font-semibold shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-electric-400 animate-ping" />
              <span>Indore Premier AC, Geyser & RO Care Hub</span>
            </div>

            {/* Dynamic Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              {activeMode === 'cooling' && (
                <>
                  Fast & Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-sky-300 to-electric-500">AC Repair & Servicing</span> in Indore
                </>
              )}
              {activeMode === 'heating' && (
                <>
                  Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-amber-300 to-accent-500">Electric Geyser Repair</span> & Installation in Indore
                </>
              )}
              {activeMode === 'purification' && (
                <>
                  Doorstep <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">RO Water Purifier Service</span> in Indore
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-coolgray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {activeMode === 'cooling' && (
                "Precision diagnostics for split and window ACs, copper piping, vacuuming, and genuine refrigerant leak testing across all Indore localities."
              )}
              {activeMode === 'heating' && (
                "Prompt doorstep solutions for water heater element burning, thermostat calibration, MCB tripping, and safe pressure valve wall mounting."
              )}
              {activeMode === 'purification' && (
                "Multi-stage filter replacement, RO membrane rejuvenation, digital TDS balance testing, and booster pump troubleshooting for pure, healthy water."
              )}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto bg-electric-500 hover:bg-electric-600 text-white font-extrabold py-4 px-8 rounded-2xl shadow-glow-electric hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 text-sm group"
              >
                <span>Book Service Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <a
                href={generatePhoneLink()}
                className="w-full sm:w-auto bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 font-bold py-4 px-7 rounded-2xl shadow-lg hover:border-electric-500/50 transition-all duration-200 flex items-center justify-center gap-2.5 text-sm"
              >
                <Phone className="w-4 h-4 text-accent-400" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Multi-Appliance</h4>
                  <p className="text-[11px] text-coolgray-400">AC, Geyser, RO & Piping</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Prompt Visits</h4>
                  <p className="text-[11px] text-coolgray-400">Fast doorstep coordination</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">MR 10 Square</h4>
                  <p className="text-[11px] text-coolgray-400">Indore central hub</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive HVAC Unit Visualization */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg">

              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-electric-500 via-accent-500 to-electric-600 opacity-30 blur-xl animate-pulse-slow" />

              {/* Main Futuristic Appliance Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-navy-900/95 to-navy-950/95 p-6 sm:p-7 border border-navy-700/80 shadow-2xl backdrop-blur-xl">

                {/* Header status strip */}
                <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold tracking-wider uppercase text-coolgray-300">
                      Indore On-Site Diagnostics Active
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-electric-500/20 text-electric-300 border border-electric-500/30">
                    24B, MR 10
                  </span>
                </div>

                {/* Animated AC Indoor Blower Visual */}
                <div className="relative p-5 rounded-2xl bg-navy-950/80 border border-navy-800 overflow-hidden mb-5">

                  {/* Subtle Airflow streams animation */}
                  <div className="absolute top-0 left-0 right-0 h-full flex flex-col justify-around opacity-40 pointer-events-none">
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-electric-400 to-transparent ac-airflow-line" />
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-sky-300 to-transparent ac-airflow-line [animation-delay:1.2s]" />
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-electric-500 to-transparent ac-airflow-line [animation-delay:2.4s]" />
                  </div>

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-navy-800 border border-electric-500/30 flex items-center justify-center text-electric-400 shadow-glow-electric">
                        {activeMode === 'cooling' && <Wind className="w-6 h-6 animate-wind" />}
                        {activeMode === 'heating' && <Flame className="w-6 h-6 animate-pulse text-accent-400" />}
                        {activeMode === 'purification' && <Droplets className="w-6 h-6 animate-bounce text-emerald-400" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {activeMode === 'cooling' && 'Air Conditioner Diagnostic Unit'}
                          {activeMode === 'heating' && 'Geyser Thermal Diagnostic Unit'}
                          {activeMode === 'purification' && 'RO TDS & Purity Analyzer'}
                        </h3>
                        <p className="text-[11px] text-coolgray-400">
                          {activeMode === 'cooling' && 'Compressor, Coil & Refrigerant Check'}
                          {activeMode === 'heating' && 'Heating Coil & Thermostat Status'}
                          {activeMode === 'purification' && 'Filter Life & Membrane Pressure'}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xl font-black text-electric-400 font-mono">
                        {activeMode === 'cooling' && '18°C'}
                        {activeMode === 'heating' && '65°C'}
                        {activeMode === 'purification' && '85 TDS'}
                      </span>
                      <span className="text-[10px] text-emerald-400 block font-semibold">
                        Optimized
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3 Interactive Service Highlights */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-navy-900/90 border border-navy-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <Wrench className="w-4 h-4 text-electric-400 shrink-0" />
                      <span className="text-coolgray-200 font-medium">Split & Window Repair</span>
                    </div>
                    <span className="text-emerald-400 font-bold">Same-Day Slots</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-900/90 border border-navy-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <Gauge className="w-4 h-4 text-accent-400 shrink-0" />
                      <span className="text-coolgray-200 font-medium">R32 / R410A Leak Detection</span>
                    </div>
                    <span className="text-white font-bold">Nitrogen Tested</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-900/90 border border-navy-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-coolgray-200 font-medium">Multi-Brand Compatible</span>
                    </div>
                    <span className="text-coolgray-300">Voltas, LG, Daikin+</span>
                  </div>
                </div>

                {/* Bottom Direct Coordination Bar */}
                <div className="mt-5 pt-4 border-t border-navy-800 flex items-center justify-between text-xs">
                  <span className="text-coolgray-400">Direct Technician Line:</span>
                  <a
                    href={generatePhoneLink()}
                    className="text-white font-extrabold hover:text-electric-400 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent-400" />
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
