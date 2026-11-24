'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, MessageCircle, ShieldCheck, ThumbsUp, Send } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

interface Review {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export default function CustomerReviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Vikas Malviya',
      location: 'Indore',
      service: 'Split AC Deep Jet Foam Servicing',
      rating: 5,
      date: '2 Days Ago',
      comment: 'Very professional technician. Indoor coil ko foam pump se clean kiya, pura dust nikal gaya. Cooling 15 minute me chilled ho gayi. Punctual service!',
      verified: true,
    },
    {
      id: 2,
      name: 'Pooja Agrawal',
      location: 'Indore',
      service: 'RO Water Purifier Filter & Membrane Replacement',
      rating: 5,
      date: '1 Week Ago',
      comment: 'Water taste bitter tha. Technician ne pehle digital meter se TDS check kiya (420 tha), membrane aur sediment filter change karne ke baad TDS 85 par tune kar diya. Sweet and pure water now.',
      verified: true,
    },
    {
      id: 3,
      name: 'Rajesh Solanki',
      location: 'Indore',
      service: 'Geyser Heating Coil & Thermostat Repair',
      rating: 5,
      date: '2 Weeks Ago',
      comment: 'Winter morning me geyser MCB switch trip kar raha tha. Call kiya aur 1 ghante me technician aa gaya. Element change karke safety valve bhi test kar diya. Great work!',
      verified: true,
    },
    {
      id: 4,
      name: 'Sunil Kothari',
      location: 'Indore',
      service: 'AC Copper Piping & Installation',
      rating: 5,
      date: '3 Weeks Ago',
      comment: 'New house construction me concealed AC copper piping karwaya tha. Heavy gauge copper pipe use kiya aur nitrogen pressure check karke certificate diya. Highly recommended.',
      verified: true,
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-coolgray-50/70 border-b border-coolgray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-black uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Customer Trust & Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight">
            Customer Reviews & Verified Ratings
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coolgray-600">
            Real feedback from homeowners and businesses across Indore who trust Shri Sanwariya Air Conditioner for cooling, heating, and water purification.
          </p>
        </div>

        {/* Overall Rating Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-7 rounded-3xl bg-white border border-coolgray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col items-center justify-center shrink-0">
              <span className="text-2xl font-black text-amber-600 font-mono">4.9</span>
              <div className="flex text-amber-500 text-[10px]">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-extrabold text-navy-900">
                Top Rated Doorstep Appliance Service in Indore
              </h3>
              <p className="text-xs text-coolgray-500 mt-0.5">
                Based on verified customer repair & maintenance service visits.
              </p>
            </div>
          </div>

          <a
            href={generateWhatsAppLink("Hello Shri Sanwariya AC, I want to submit feedback for your service.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs py-3 px-5 rounded-xl transition-all shadow shrink-0 flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Share Your Feedback</span>
          </a>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-coolgray-200/90 shadow-subtle hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>

                {/* Service Tag */}
                <span className="text-[11px] font-bold text-electric-600 block mb-2 leading-tight">
                  {rev.service}
                </span>

                {/* Review Text */}
                <p className="text-xs text-coolgray-700 leading-relaxed font-normal mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-3 border-t border-coolgray-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-extrabold text-navy-900">{rev.name}</h4>
                  <span className="text-[10px] text-coolgray-500">{rev.location}</span>
                </div>
                <span className="text-[10px] text-coolgray-400 font-medium">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
