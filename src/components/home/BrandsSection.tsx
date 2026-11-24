import React from 'react';
import { SERVICED_BRANDS } from '@/data/business';

export default function BrandsSection() {
  return (
    <section id="brands" className="py-20 bg-white border-b border-coolgray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 text-electric-600 text-xs font-bold uppercase tracking-wider mb-3">
            Multi-Brand Technical Capability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Brands We Service in Indore
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coolgray-700 leading-relaxed">
            Our technicians have hands-on diagnostic experience across leading air conditioner, water heater, and water purifier systems.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {SERVICED_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-coolgray-50/70 hover:bg-white rounded-2xl p-4 border border-coolgray-200/60 hover:border-electric-500/40 shadow-none hover:shadow-subtle transition-all duration-200 text-center flex flex-col justify-center items-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-coolgray-200 flex items-center justify-center font-extrabold text-sm text-navy-900 mb-2 group-hover:text-electric-600 transition-colors">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <h3 className="text-sm font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
                {brand.name}
              </h3>
              <span className="text-[10px] text-coolgray-700 font-medium mt-0.5">
                {brand.category}
              </span>
            </div>
          ))}
        </div>

        {/* Clear Brand Disclaimer required by specifications */}
        <div className="mt-10 p-4 rounded-xl bg-coolgray-50 border border-coolgray-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-coolgray-700 leading-relaxed">
            <span className="font-semibold text-navy-900">Brand Compatibility Note:</span> We service all major brands where technically supported. Brand names and logos are used strictly to indicate service compatibility and repair expertise. We do not falsely claim official brand authorization or manufacturer partnerships.
          </p>
        </div>

      </div>
    </section>
  );
}
