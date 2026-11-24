'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { generateWhatsAppLink, generatePhoneLink } from '@/lib/utils';
import { BUSINESS_INFO } from '@/data/business';

interface ServiceEstimate {
  id: string;
  name: string;
  category: 'AC' | 'Geyser' | 'RO';
  priceRange: string;
  timeEstimate: string;
  includes: string[];
}

export default function CostEstimator() {
  const [selectedCategory, setSelectedCategory] = useState<'AC' | 'Geyser' | 'RO'>('AC');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ac-wet-service');

  const services: ServiceEstimate[] = [
    // AC Services
    {
      id: 'ac-wet-service',
      name: 'Deep Foam Jet Pump AC Servicing',
      category: 'AC',
      priceRange: '₹499 - ₹699',
      timeEstimate: '45 - 60 Mins',
      includes: ['High pressure water jet wash', 'Indoor cooling coil foam clean', 'Outdoor condenser fin wash', 'Drain pipe flushing & filter sanitization']
    },
    {
      id: 'ac-repair-diagnostic',
      name: 'AC Breakdown Diagnosis & Electrical Check',
      category: 'AC',
      priceRange: '₹299 - ₹499',
      timeEstimate: '30 - 45 Mins',
      includes: ['Comprehensive error code analysis', 'Compressor capacitor & relay check', 'PCB board voltage diagnostic', 'Sensor & fan motor inspection']
    },
    {
      id: 'ac-gas-charge',
      name: 'AC Gas Leak Repair & Full Charging',
      category: 'AC',
      priceRange: '₹1,999 - ₹2,799',
      timeEstimate: '60 - 90 Mins',
      includes: ['Nitrogen joint leak pressure test', 'Silver flare brazing repair', 'Two-stage deep vacuum evacuation', 'Pure R32 / R410A weight-based recharge']
    },
    {
      id: 'ac-install',
      name: 'Split AC Installation with Vacuuming',
      category: 'AC',
      priceRange: '₹1,199 - ₹1,499',
      timeEstimate: '90 - 120 Mins',
      includes: ['Precision wall bracket anchoring', 'Core hole brick drilling', 'Torque wrench flare connection', 'Vacuuming & thermal performance check']
    },

    // Geyser Services
    {
      id: 'geyser-service',
      name: 'Geyser Complete Descaling & Service',
      category: 'Geyser',
      priceRange: '₹449 - ₹599',
      timeEstimate: '45 - 60 Mins',
      includes: ['Tank hard-water sediment flush', 'Heating coil scale removal', 'Thermostat auto cut-off test', 'Anode corrosion inspection']
    },
    {
      id: 'geyser-repair',
      name: 'Heating Element / Thermostat Repair',
      category: 'Geyser',
      priceRange: '₹699 - ₹1,199',
      timeEstimate: '45 - 60 Mins',
      includes: ['Burned element replacement', 'Thermostat trip switch fix', 'Electric shock safety continuity test', 'Gasket seal leak prevention']
    },
    {
      id: 'geyser-install',
      name: 'Geyser Wall Mounting & Plumbing Setup',
      category: 'Geyser',
      priceRange: '₹599 - ₹799',
      timeEstimate: '45 - 60 Mins',
      includes: ['Heavy duty anchor bolt drilling', 'Inlet/Outlet hose connection', 'Safety PRV valve installation', 'Pressurized leak check']
    },

    // RO Services
    {
      id: 'ro-service',
      name: 'RO Comprehensive Filter Replacement Service',
      category: 'RO',
      priceRange: '₹599 - ₹999',
      timeEstimate: '45 - 60 Mins',
      includes: ['Spun pre-sediment filter change', 'Activated carbon block refresh', 'Digital TDS level tuning', 'Tank sanitization & tube check']
    },
    {
      id: 'ro-membrane',
      name: 'Authentic RO Membrane Replacement',
      category: 'RO',
      priceRange: '₹1,299 - ₹1,899',
      timeEstimate: '45 - 60 Mins',
      includes: ['High-rejection original RO membrane', 'Flow restrictor (FR) change', 'Pre-filter flush to protect membrane', 'Digital TDS purity testing']
    },
    {
      id: 'ro-pump-repair',
      name: 'RO Booster Pump / SMPS Adapter Repair',
      category: 'RO',
      priceRange: '₹799 - ₹1,499',
      timeEstimate: '45 - 60 Mins',
      includes: ['Booster pump pressure test', 'DC voltage SMPS replacement', 'Solenoid valve leakage fix', 'Push-fit joint leak proofing']
    }
  ];

  const currentServices = services.filter((s) => s.category === selectedCategory);
  const selectedService = services.find((s) => s.id === selectedServiceId) || currentServices[0];

  const waInquiry = `Hello Shri Sanwariya AC, I checked the estimate for *${selectedService.name}* (${selectedService.priceRange}) on your website. I want to book a doorstep technician in Indore.`;

  return (
    <section id="cost-estimator" className="py-20 bg-gradient-to-b from-white via-coolgray-50/70 to-white border-b border-coolgray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 text-xs font-black uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight">
            Instant Service Cost Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coolgray-600">
            Select your appliance requirement below to view estimated doorstep service charges in Indore with zero hidden surprises.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-coolgray-200 shadow-md gap-1">
            <button
              onClick={() => {
                setSelectedCategory('AC');
                setSelectedServiceId('ac-wet-service');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                selectedCategory === 'AC' 
                  ? 'bg-navy-900 text-white shadow-md' 
                  : 'text-coolgray-600 hover:text-navy-900'
              }`}
            >
              Air Conditioner (AC)
            </button>
            <button
              onClick={() => {
                setSelectedCategory('Geyser');
                setSelectedServiceId('geyser-service');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                selectedCategory === 'Geyser' 
                  ? 'bg-navy-900 text-white shadow-md' 
                  : 'text-coolgray-600 hover:text-navy-900'
              }`}
            >
              Geyser Heater
            </button>
            <button
              onClick={() => {
                setSelectedCategory('RO');
                setSelectedServiceId('ro-service');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                selectedCategory === 'RO' 
                  ? 'bg-navy-900 text-white shadow-md' 
                  : 'text-coolgray-600 hover:text-navy-900'
              }`}
            >
              RO Water Purifier
            </button>
          </div>
        </div>

        {/* Estimator Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Selector (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-coolgray-500 mb-2">
              Select Specific Appliance Issue / Service:
            </h3>

            {currentServices.map((srv) => (
              <div
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                  selectedServiceId === srv.id 
                    ? 'bg-white border-electric-500 shadow-premium ring-2 ring-electric-500/20' 
                    : 'bg-white/80 border-coolgray-200 hover:bg-white hover:border-coolgray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selectedServiceId === srv.id 
                      ? 'border-electric-500 bg-electric-500 text-white' 
                      : 'border-coolgray-300'
                  }`}>
                    {selectedServiceId === srv.id && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-navy-900">
                      {srv.name}
                    </h4>
                    <span className="text-xs text-coolgray-500">
                      Est. Time: {srv.timeEstimate}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-base sm:text-lg font-black text-electric-600 block font-mono">
                    {srv.priceRange}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold uppercase">
                    Doorstep Indore
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Quote Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-navy-800 space-y-6">
            <div className="flex items-center justify-between border-b border-navy-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-coolgray-400">
                Live Estimate Breakdown
              </span>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                Guaranteed Genuine Spares
              </span>
            </div>

            <div>
              <span className="text-xs text-electric-400 font-semibold block uppercase">
                Selected Service
              </span>
              <h4 className="text-xl font-black text-white mt-0.5">
                {selectedService.name}
              </h4>
            </div>

            <div className="p-4 rounded-2xl bg-navy-900/90 border border-navy-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-coolgray-400 block">Estimated Cost:</span>
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                  {selectedService.priceRange}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-coolgray-400 block">Service Duration:</span>
                <span className="text-sm font-bold text-electric-400">
                  {selectedService.timeEstimate}
                </span>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coolgray-300 block mb-2.5">
                What’s Included in This Service:
              </span>
              <ul className="space-y-2 text-xs text-coolgray-300">
                {selectedService.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 space-y-2.5">
              <a
                href={generateWhatsAppLink(waInquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>Book Service at this Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={generatePhoneLink()}
                className="w-full bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent-400" />
                <span>Call Technician: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            <p className="text-[11px] text-coolgray-400 text-center">
              *Actual price may vary slightly based on appliance model and additional parts replaced on site.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
