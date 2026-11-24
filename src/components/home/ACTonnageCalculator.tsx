'use client';

import React, { useState } from 'react';
import { Gauge, Sparkles, CheckCircle2, ArrowRight, Zap, Sun, ShieldAlert } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function ACTonnageCalculator() {
  const [roomLength, setRoomLength] = useState<number>(12);
  const [roomWidth, setRoomWidth] = useState<number>(12);
  const [floorType, setFloorType] = useState<'ground' | 'middle' | 'top'>('middle');
  const [sunExposure, setSunExposure] = useState<'low' | 'moderate' | 'high'>('moderate');
  const [peopleCount, setPeopleCount] = useState<number>(2);

  // Calculate Square Feet
  const areaSqFt = roomLength * roomWidth;

  // Tonnage Recommendation Logic
  let recommendedTons = 1.0;
  let reason = '';

  let factor = areaSqFt;
  if (floorType === 'top') factor += 30; // Top floor heats up more in Indore summers
  if (sunExposure === 'high') factor += 25; // Afternoon direct sunlight
  if (peopleCount > 2) factor += (peopleCount - 2) * 10;

  if (factor <= 125) {
    recommendedTons = 1.0;
    reason = 'Ideal for compact bedrooms or study areas with moderate heat load.';
  } else if (factor <= 190) {
    recommendedTons = 1.5;
    reason = 'Most balanced choice for standard master bedrooms and living spaces in Indore.';
  } else {
    recommendedTons = 2.0;
    reason = 'Recommended for spacious halls, top floors under direct sun, or large living rooms.';
  }

  const estimatedUnitsPerMonth = Math.round(recommendedTons * 120); // Average monthly kWh calculation
  const inverterSaving = Math.round(estimatedUnitsPerMonth * 3.5); // Approx savings in INR vs 3-star non-inverter

  const waText = `Hello Shri Sanwariya AC, I used your AC Tonnage Calculator for a room size of ${areaSqFt} sq ft (${roomLength}x${roomWidth} ft). The recommendation is ${recommendedTons} Ton. I want advice on new AC installation / copper piping in Indore.`;

  return (
    <section id="ac-calculator" className="py-20 bg-white border-b border-coolgray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/10 text-navy-900 text-xs font-black uppercase tracking-wider mb-3">
            <Gauge className="w-3.5 h-3.5 text-electric-600" />
            <span>Smart Energy & Cooling Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight">
            AC Room Tonnage Calculator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coolgray-600">
            Calculate the exact cooling tonnage required for your room size in Indore to achieve maximum cooling and lowest electricity bills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Inputs Card (7 Cols) */}
          <div className="lg:col-span-7 bg-coolgray-50/80 rounded-3xl p-6 sm:p-8 border border-coolgray-200/90 shadow-sm space-y-6">
            
            {/* Room Dimensions Sliders */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-navy-900">
                  Room Length: <span className="text-electric-600 font-extrabold">{roomLength} Feet</span>
                </label>
                <span className="text-xs text-coolgray-500 font-semibold">Max: 25 ft</span>
              </div>
              <input
                type="range"
                min="8"
                max="25"
                value={roomLength}
                onChange={(e) => setRoomLength(Number(e.target.value))}
                className="w-full accent-electric-500 h-2 bg-coolgray-200 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-navy-900">
                  Room Width: <span className="text-electric-600 font-extrabold">{roomWidth} Feet</span>
                </label>
                <span className="text-xs text-coolgray-500 font-semibold">Max: 25 ft</span>
              </div>
              <input
                type="range"
                min="8"
                max="25"
                value={roomWidth}
                onChange={(e) => setRoomWidth(Number(e.target.value))}
                className="w-full accent-electric-500 h-2 bg-coolgray-200 rounded-lg cursor-pointer"
              />
            </div>

            {/* Total Area Indicator */}
            <div className="p-3.5 rounded-2xl bg-white border border-coolgray-200 flex items-center justify-between text-xs">
              <span className="text-coolgray-600 font-bold">Total Floor Area:</span>
              <span className="text-sm font-black text-navy-900 font-mono">
                {areaSqFt} Sq. Ft.
              </span>
            </div>

            {/* Floor Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                Building Floor Level:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'ground', label: 'Ground Floor' },
                  { id: 'middle', label: 'Middle Floor' },
                  { id: 'top', label: 'Top Floor (Roof)' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFloorType(f.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      floorType === f.id
                        ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                        : 'bg-white text-coolgray-700 border-coolgray-200 hover:bg-coolgray-100'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sun Exposure */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                Sunlight Exposure:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'low', label: 'Shaded / Low' },
                  { id: 'moderate', label: 'Moderate' },
                  { id: 'high', label: 'Heavy Sun (West/South)' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSunExposure(s.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      sunExposure === s.id
                        ? 'bg-electric-500 text-white border-electric-500 shadow-sm'
                        : 'bg-white text-coolgray-700 border-coolgray-200 hover:bg-coolgray-100'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Recommendation Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-navy-800 space-y-6">
            <div className="flex items-center justify-between border-b border-navy-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
                Recommended Capacity
              </span>
              <span className="text-[10px] uppercase font-black tracking-wider bg-electric-500/20 text-electric-300 border border-electric-500/30 px-2.5 py-1 rounded-full">
                Energy Optimized
              </span>
            </div>

            <div className="text-center py-2">
              <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-sky-300 to-white font-mono">
                {recommendedTons} Ton
              </span>
              <span className="text-sm font-bold text-coolgray-300 block mt-2">
                Optimal Air Conditioner Size
              </span>
            </div>

            <p className="text-xs text-coolgray-300 leading-relaxed text-center bg-navy-900/80 p-3.5 rounded-2xl border border-navy-800">
              {reason}
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-coolgray-400">Room Floor Area:</span>
                <span className="text-white font-bold">{areaSqFt} Sq. Ft.</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-coolgray-400">Estimated Power Bill Savings:</span>
                <span className="text-emerald-400 font-bold">~₹{inverterSaving}/Mo (Inverter AC)</span>
              </div>
            </div>

            <a
              href={generateWhatsAppLink(waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-electric-500 hover:bg-electric-600 text-white font-black py-3.5 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-glow-electric flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <span>Get Free Installation Quote for {recommendedTons} Ton</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
