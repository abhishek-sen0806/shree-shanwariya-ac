'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2, AlertTriangle, Wind, Flame, Droplets } from 'lucide-react';

export default function BeforeAfterShowcase() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'ac-coil' | 'geyser-element' | 'ro-membrane'>('ac-coil');

  const comparisons = {
    'ac-coil': {
      title: 'AC Cooling Coil & Blower Jet Cleaning',
      icon: Wind,
      accentColor: 'text-sky-400',
      beforeTag: 'CHOKED WITH DUST & MOLD',
      afterTag: 'PRESSURE FOAM RESTORED',
      beforeHeading: 'Restricted Airflow & Lukewarm Air',
      afterHeading: '18°C Super-Chill Factory Airflow',
      beforeDetail: 'Clogged fins trap bacterial mold and force the compressor to run nonstop, burning excess electricity.',
      afterDetail: 'Deep pressurized foam chemical wash flushes deep internal channels without fin damage.',
      // Visual elements for Before
      beforeBadge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      afterBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      beforeStatus: 'Low Cooling • High Power Bill',
      afterStatus: 'Full 18°C Chill • Energy Efficient',
      beforeBg: 'from-[#1A120B] via-[#2A1810] to-[#140C08]',
      afterBg: 'from-[#071E3D] via-[#0C2D57] to-[#05162D]',
    },
    'geyser-element': {
      title: 'Geyser Heavy Copper Heating Coil',
      icon: Flame,
      accentColor: 'text-amber-400',
      beforeTag: 'HEAVY CALCIUM STONE SCALING',
      afterTag: 'DESCALED / NEW INCOLOY FITTED',
      beforeHeading: 'Burned Element & Tripping MCB',
      afterHeading: 'Boiling Hot Water in 5 Mins',
      beforeDetail: 'Indore hard-water deposits coat the element in stone, preventing heat transfer and creating shock risk.',
      afterDetail: 'Dual thermostat calibrated with new high-efficiency incoloy coil and verified safety grounding.',
      beforeBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      afterBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      beforeStatus: 'Stone Coated • Electric Hazard',
      afterStatus: 'Safe Cut-Off • Instant Hot Water',
      beforeBg: 'from-[#1E110A] via-[#2B1B10] to-[#120B06]',
      afterBg: 'from-[#2D1305] via-[#3E1B07] to-[#1B0B03]',
    },
    'ro-membrane': {
      title: 'RO Multi-Stage Purification Chamber',
      icon: Droplets,
      accentColor: 'text-emerald-400',
      beforeTag: 'MUDDY SEDIMENT & 450+ HIGH TDS',
      afterTag: 'GENUINE 80 GPD MEMBRANE (85 TDS)',
      beforeHeading: 'Foul Taste & Sluggish Water Drip',
      afterHeading: 'Crystal Pure, Sweet Mineral Water',
      beforeDetail: 'Exhausted carbon and blocked pore membranes fail to reject contaminants, giving water a bitter taste.',
      afterDetail: 'Multi-stage cartridge renewal with high-rejection semi-permeable membrane and digital TDS tuning.',
      beforeBadge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
      afterBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      beforeStatus: 'Bitter Taste • Choked Membrane',
      afterStatus: '85 TDS Tuned • Sweet & Pure',
      beforeBg: 'from-[#1B180B] via-[#241F0C] to-[#100E06]',
      afterBg: 'from-[#062925] via-[#0B3B35] to-[#041D1A]',
    }
  };

  const current = comparisons[activeTab];
  const Icon = current.icon;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-coolgray-200/80 relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-electric-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-accent-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/10 text-navy-900 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-electric-600" />
            <span>Visible Workmanship Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight">
            Before & After Work Quality
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coolgray-600">
            Slide the interactive divider left and right to inspect the real diagnostic difference our technician makes.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-coolgray-200 shadow-md gap-1.5">
            <button
              onClick={() => setActiveTab('ac-coil')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'ac-coil'
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'text-coolgray-600 hover:text-navy-900'
              }`}
            >
              <Wind className="w-4 h-4 text-electric-400" />
              <span>AC Coil Cleaning</span>
            </button>
            <button
              onClick={() => setActiveTab('geyser-element')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'geyser-element'
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'text-coolgray-600 hover:text-navy-900'
              }`}
            >
              <Flame className="w-4 h-4 text-accent-400" />
              <span>Geyser Descaling</span>
            </button>
            <button
              onClick={() => setActiveTab('ro-membrane')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'ro-membrane'
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'text-coolgray-600 hover:text-navy-900'
              }`}
            >
              <Droplets className="w-4 h-4 text-emerald-400" />
              <span>RO Membrane Renewal</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto">
          
          {/* Card Outer Shell with Modern Glow and Border */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-navy-800/80 h-96 sm:h-[420px] select-none bg-navy-950">
            
            {/* RIGHT SIDE: AFTER SERVICE (Clean & Modern High-Tech) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${current.afterBg} flex flex-col justify-between p-6 sm:p-10 text-right`}>
              
              {/* Background Geometric Grid Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

              {/* Top Status */}
              <div className="relative z-10 flex items-center justify-end gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border shadow-md ${current.afterBadge}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>AFTER SERVICE</span>
                </span>
              </div>

              {/* Visual Appliance Illustration on Right */}
              <div className="relative z-10 my-auto flex flex-col items-end">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-glow-electric mb-3">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-electric-400 animate-pulse" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {current.afterTag}
                </span>
                <span className="text-[11px] text-coolgray-300 font-medium">
                  {current.afterStatus}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 max-w-sm self-end">
                <h4 className="text-xl sm:text-2xl font-black text-white mb-1.5 tracking-tight">
                  {current.afterHeading}
                </h4>
                <p className="text-xs sm:text-sm text-coolgray-200 leading-relaxed font-normal">
                  {current.afterDetail}
                </p>
              </div>
            </div>

            {/* LEFT SIDE: BEFORE SERVICE (Clipped dynamically by slider) */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${current.beforeBg} flex flex-col justify-between p-6 sm:p-10 overflow-hidden`}
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              {/* Dark Grunge Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(244,63,94,0.12)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

              {/* Top Status */}
              <div className="relative z-10 flex items-center justify-start gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border shadow-md ${current.beforeBadge}`}>
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>BEFORE SERVICE</span>
                </span>
              </div>

              {/* Visual Appliance Illustration on Left */}
              <div className="relative z-10 my-auto flex flex-col items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-md mb-3">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-rose-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  {current.beforeTag}
                </span>
                <span className="text-[11px] text-coolgray-400 font-medium">
                  {current.beforeStatus}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 max-w-sm">
                <h4 className="text-xl sm:text-2xl font-black text-white mb-1.5 tracking-tight">
                  {current.beforeHeading}
                </h4>
                <p className="text-xs sm:text-sm text-coolgray-300 leading-relaxed font-normal">
                  {current.beforeDetail}
                </p>
              </div>
            </div>

            {/* Vertical Divider Line with Glow and Circular Controller */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-navy-950 text-white shadow-2xl flex items-center justify-center border-2 border-electric-400">
                <ArrowLeftRight className="w-4 h-4 text-electric-400 animate-pulse" />
              </div>
            </div>

            {/* Range Controller Overlay */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Drag to compare before and after appliance servicing"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          {/* User Guide Pill */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-coolgray-500 font-bold uppercase tracking-wider">
            <ArrowLeftRight className="w-3.5 h-3.5 text-electric-500" />
            <span>Slide left / right across the box to compare repair difference</span>
          </div>

        </div>

      </div>
    </section>
  );
}
