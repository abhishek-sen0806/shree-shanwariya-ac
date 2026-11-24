import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  MapPin, 
  PhoneCall, 
  Sparkles,
  Clock
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Multiple Home Appliance Services",
      description: "One reliable point of contact for cooling, heating, water purification, and copper piping requirements in Indore.",
      icon: Layers,
    },
    {
      title: "Professional Service Approach",
      description: "Structured diagnosis, leak-detection checks, safe electrical handling, and honest communication before beginning work.",
      icon: ShieldCheck,
    },
    {
      title: "AC, Geyser & RO Solutions",
      description: "Comprehensive technical capability spanning split & window ACs, electric water heaters, and reverse osmosis systems.",
      icon: Sparkles,
    },
    {
      title: "Convenient Service Assistance",
      description: "Direct doorstep service coordination over phone or WhatsApp with transparent problem explanations.",
      icon: PhoneCall,
    },
    {
      title: "Service Support Across Indore",
      description: "Prompt technician reach across MR 10, Vijay Nagar, Scheme 54, Nipania, Palasia, and surrounding Indore neighborhoods.",
      icon: MapPin,
    },
    {
      title: "Punctual Doorstep Coordination",
      description: "Timely arrival for scheduled service visits so you can plan your day without long, uncertain waiting periods.",
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 bg-coolgray-50 border-y border-coolgray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
            Service Commitment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Why Choose Shri Sanwariya Air Conditioner?
          </h2>
          <p className="mt-3 text-base text-coolgray-700 leading-relaxed">
            We focus on technical competence, reliable doorstep assistance, and transparent communication for your essential home comfort appliances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-coolgray-100 shadow-subtle hover:shadow-premium transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-electric-500/10 text-electric-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs text-coolgray-700 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
