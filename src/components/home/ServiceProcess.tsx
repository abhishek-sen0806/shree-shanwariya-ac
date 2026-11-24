import React from 'react';
import { PhoneCall, ClipboardCheck, CalendarCheck, CheckCircle2 } from 'lucide-react';

export default function ServiceProcess() {
  const steps = [
    {
      step: "01",
      title: "Contact Us",
      description: "Call or message us on WhatsApp with your appliance type and location in Indore.",
      icon: PhoneCall,
    },
    {
      step: "02",
      title: "Explain Requirement",
      description: "Describe the issue—whether cooling trouble, piping work, heating breakdown, or RO servicing.",
      icon: ClipboardCheck,
    },
    {
      step: "03",
      title: "Confirm Service Details",
      description: "Our team coordinates a convenient doorstep visit slot for our technician to inspect.",
      icon: CalendarCheck,
    },
    {
      step: "04",
      title: "Get Appliance Serviced",
      description: "Accurate physical diagnosis, transparent repair execution, and verified testing.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 bg-coolgray-50 border-b border-coolgray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
            Simple 4-Step Flow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Our Streamlined Service Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coolgray-700 leading-relaxed">
            From your first message to complete service delivery, we make getting your appliances back up and running effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-coolgray-100 shadow-subtle relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-electric-500/20 group-hover:text-electric-500/50 transition-colors">
                      {st.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy-900/5 text-navy-900 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-electric-600" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-navy-900 mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-coolgray-700 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
