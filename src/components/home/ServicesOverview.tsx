import React from 'react';
import Link from 'next/link';
import { 
  Wind, 
  Wrench, 
  Flame, 
  Droplets, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Gauge, 
  Snowflake,
  CheckCircle2
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCards = [
    {
      title: "AC Repair & Servicing",
      category: "Air Conditioning",
      badge: "Indore Summer Ready",
      description: "Thorough physical and electrical diagnosis for cooling failure, compressor tripping, ice formation on cooling coils, and PCB faults across all major split and window brands.",
      icon: Snowflake,
      features: ["Compressor Diagnostic", "Coil Cleaning & Wash", "Capacitor & Fan Repair"],
      slug: "ac-repair-indore",
      accentBg: "bg-electric-500/10 text-electric-500 group-hover:bg-electric-500 group-hover:text-white",
      badgeColor: "bg-electric-500/10 text-electric-600 border-electric-500/20",
      borderHover: "hover:border-electric-500/60 hover:shadow-glow-electric",
      linkText: "View AC Repair Details"
    },
    {
      title: "AC Installation & Piping",
      category: "HVAC Infrastructure",
      badge: "Heavy Gauge Copper",
      description: "Precision indoor wall mounting, core hole drilling, leak-free copper flaring, vacuum evacuation, and concealed wall chasing piping for new construction homes and offices in Indore.",
      icon: Wrench,
      features: ["Precision Level Mount", "Deep Vacuum Evacuation", "Nitrogen Pressure Check"],
      slug: "ac-installation-indore",
      accentBg: "bg-navy-800 text-electric-400 group-hover:bg-navy-900 group-hover:text-white",
      badgeColor: "bg-navy-900/10 text-navy-800 border-navy-700/20",
      borderHover: "hover:border-navy-700/60 hover:shadow-premium",
      linkText: "View Piping & Setup Details"
    },
    {
      title: "Geyser Repair & Setup",
      category: "Water Heating",
      badge: "Safety PRV Verified",
      description: "Fast doorstep troubleshooting for electric water heaters: calcified or burned heating elements, thermostat failures, MCB power tripping, and secure anchor bolt mounting.",
      icon: Flame,
      features: ["Element Descaling", "Thermostat Calibration", "Safety PRV Valve Setup"],
      slug: "geyser-repair-indore",
      accentBg: "bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white",
      badgeColor: "bg-accent-500/10 text-accent-600 border-accent-500/20",
      borderHover: "hover:border-accent-500/60 hover:shadow-glow-accent",
      linkText: "View Geyser Repair Details"
    },
    {
      title: "RO Water Purifier Service",
      category: "Water Purification",
      badge: "Digital TDS Tested",
      description: "Complete water purifier maintenance: multi-stage sediment and carbon filter replacement, authentic reverse osmosis membrane installation, booster pump repairs, and TDS adjustment.",
      icon: Droplets,
      features: ["Filter Replacement", "RO Membrane Rejuvenation", "Booster Pump & Adapter"],
      slug: "ro-water-purifier-service-indore",
      accentBg: "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white",
      badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      borderHover: "hover:border-emerald-500/60 hover:shadow-lg",
      linkText: "View RO Purifier Details"
    }
  ];

  return (
    <section id="services" className="py-24 bg-coolgray-50/70 border-b border-coolgray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expert Technical Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
            Specialized Appliance Solutions in Indore
          </h2>
          <p className="mt-4 text-base sm:text-lg text-coolgray-700 leading-relaxed font-normal">
            Whether preparing for summer heat or winter cold, our technicians deliver precision diagnosis and reliable service execution at your doorstep.
          </p>
        </div>

        {/* 4 Premium Animated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.slug}
                className={`group bg-white rounded-3xl p-7 border border-coolgray-200/90 shadow-subtle hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${card.borderHover} hover:-translate-y-2`}
              >
                <div>
                  {/* Top category & badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold text-coolgray-500 uppercase tracking-wider">
                      {card.category}
                    </span>
                    {/* <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${card.badgeColor}`}>
                      {card.badge}
                    </span> */}
                  </div>

                  {/* Icon Circle */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-6 shadow-sm ${card.accentBg} group-hover:scale-110`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-electric-600 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-coolgray-600 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 pt-3 border-t border-coolgray-100 mb-6">
                    {card.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-coolgray-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-coolgray-100">
                  <Link
                    href={`/services/${card.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-navy-900 group-hover:text-electric-600 transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-4 h-4 text-coolgray-400 group-hover:text-electric-600 group-hover:translate-x-1.5 transition-all" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Specialized Links Strip */}
        <div className="mt-14 p-6 rounded-3xl bg-white border border-coolgray-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-navy-900">
              Need Specific Technical Tasks?
            </h4>
            <div className="text-xs text-coolgray-600 flex flex-wrap gap-2.5 pt-1">
              <Link href="/services/ac-gas-refilling-indore" className="text-electric-600 font-semibold hover:underline">
                • AC Gas Refilling (R32/R410A)
              </Link>
              <Link href="/services/ac-piping-indore" className="text-electric-600 font-semibold hover:underline">
                • Concealed Copper Piping
              </Link>
              <Link href="/services/geyser-installation-indore" className="text-electric-600 font-semibold hover:underline">
                • Geyser Installation
              </Link>
              <Link href="/services/ro-repair-indore" className="text-electric-600 font-semibold hover:underline">
                • RO Booster Pump Repair
              </Link>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2 group"
          >
            <span>Consult Technician</span>
            <ArrowRight className="w-3.5 h-3.5 text-electric-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
