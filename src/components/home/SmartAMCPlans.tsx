'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Zap, Star } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function SmartAMCPlans() {
  const plans = [
    {
      id: 'ac-cooling-shield',
      name: 'AC Cooling Shield',
      category: 'Air Conditioner',
      price: '₹1,299',
      period: 'Per Year / AC',
      badge: 'Most Popular in Indore',
      gradient: 'from-blue-600 to-sky-500',
      features: [
        '2 Deep Foam Jet Pump Wet Services / Year',
        '1 Free Pre-Summer Refrigerant Pressure Check',
        'Unlimited Breakdown Visits Across Indore',
        'Priority 2-Hour Dispatch Guarantee',
        '15% Flat Discount on Replacement Spare Parts',
        'Free Electrical Capacitor & Wiring Safety Test'
      ],
      popular: true
    },
    {
      id: 'ro-pure-shield',
      name: 'RO Pure Water Shield',
      category: 'Water Purifier',
      price: '₹1,599',
      period: 'Per Year / System',
      badge: 'Family Health Essential',
      gradient: 'from-emerald-600 to-teal-500',
      features: [
        '3 Scheduled Pre-Sediment Filter Changes',
        '1 Carbon Block Cartridge Replacement Included',
        'Quarterly Digital TDS & Water Purity Tuning',
        'Free Booster Pump & Adapter Health Check',
        'Zero Labor Charges on Emergency Breakdown Calls',
        'High-Grade Food-Safe Tubing Inspection'
      ],
      popular: false
    },
    {
      id: 'home-appliance-combo',
      name: 'All-in-One Home Comfort Shield',
      category: 'AC + Geyser + RO',
      price: '₹2,499',
      period: 'Per Year / Complete Home',
      badge: 'Best Value for Money',
      gradient: 'from-purple-600 to-indigo-600',
      features: [
        '2 AC Jet Pump Foam Servicing Visits',
        'Complete RO Annual Filter Maintenance Kit',
        '1 Pre-Winter Geyser Descaling & Safety Inspection',
        'Unlimited Priority Doorstep Visits in Indore',
        'Dedicated Senior Technician Assigned',
        'Single Point of Contact for All Household Appliances'
      ],
      popular: false
    }
  ];

  return (
    <section id="amc-plans" className="py-20 bg-coolgray-50/70 border-b border-coolgray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-black uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Annual Maintenance Contracts (AMC)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight">
            Smart Appliance Care AMC Plans
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coolgray-600">
            Enjoy complete peace of mind with year-round scheduled servicing, priority breakdown response, and genuine spare parts discounts.
          </p>
        </div>

        {/* 3 Premium Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const waBooking = `Hello Shri Sanwariya AC, I am interested in subscribing to the *${plan.name}* (${plan.price} ${plan.period}) for my home in Indore. Please share signup details.`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white shadow-2xl border-2 border-electric-500 ring-4 ring-electric-500/20 -translate-y-2'
                    : 'bg-white text-navy-900 border border-coolgray-200/90 shadow-subtle hover:shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md ${
                      plan.popular
                        ? 'bg-electric-500 text-white'
                        : 'bg-navy-900 text-white'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      plan.popular ? 'text-electric-400' : 'text-coolgray-400'
                    }`}>
                      {plan.category}
                    </span>
                  </div>

                  <h3 className={`text-xl font-black mb-2 ${plan.popular ? 'text-white' : 'text-navy-900'}`}>
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className={`text-4xl font-black font-mono ${plan.popular ? 'text-white' : 'text-navy-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs font-semibold ${plan.popular ? 'text-coolgray-400' : 'text-coolgray-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-coolgray-200/40 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-medium">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? 'text-emerald-400' : 'text-emerald-500'
                        }`} />
                        <span className={plan.popular ? 'text-coolgray-200' : 'text-coolgray-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div>
                  <a
                    href={generateWhatsAppLink(waBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full font-black py-3.5 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 ${
                      plan.popular
                        ? 'bg-electric-500 hover:bg-electric-600 text-white shadow-glow-electric'
                        : 'bg-navy-900 hover:bg-navy-800 text-white'
                    }`}
                  >
                    <span>Subscribe to Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
