'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'AC Repair & Servicing',
    area: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setStatus('submitting');

    // Generate pre-filled WhatsApp message URL and prompt submission
    const inquiryText = `*Service Inquiry - Shri Sanwariya AC*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Area / Address:* ${formData.area || 'Indore'}\n` +
      `*Details:* ${formData.message || 'Need technician visit / quote.'}`;

    const waUrl = generateWhatsAppLink(inquiryText);

    setTimeout(() => {
      setStatus('success');
      // Open WhatsApp inquiry directly in a new tab for instant response
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-coolgray-100 relative overflow-hidden">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
          Book Service Assistance
        </h3>
        <p className="text-sm text-coolgray-700 mt-1">
          Fill in your details below for fast technician coordination in Indore.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-900">Inquiry Prepared!</h4>
          <p className="text-sm text-emerald-800">
            Thank you, {formData.name}. Your details have been queued for WhatsApp instant dispatch. Our team at MR 10 Square, Indore will connect with you shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-3 text-xs font-semibold text-emerald-800 underline hover:text-emerald-900"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
              Customer Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-3 rounded-xl border border-coolgray-200 text-sm text-navy-900 placeholder:text-coolgray-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit Mobile"
                className="w-full px-4 py-3 rounded-xl border border-coolgray-200 text-sm text-navy-900 placeholder:text-coolgray-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                Service Required <span className="text-rose-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-coolgray-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition bg-white"
              >
                <option value="AC Repair & Servicing">AC Repair & Servicing</option>
                <option value="AC Installation & Uninstallation">AC Installation & Uninstallation</option>
                <option value="AC Copper Piping Work">AC Copper Piping Work</option>
                <option value="AC Gas Refilling">AC Gas Refilling</option>
                <option value="Geyser Repair & Service">Geyser Repair & Service</option>
                <option value="Geyser Installation">Geyser Installation</option>
                <option value="RO Water Purifier Service">RO Water Purifier Service</option>
                <option value="RO Repair / Booster Pump">RO Repair / Booster Pump</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="area" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
              Address / Area in Indore
            </label>
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="e.g. Vijay Nagar, Scheme 54, Nipania, MR 10"
              className="w-full px-4 py-3 rounded-xl border border-coolgray-200 text-sm text-navy-900 placeholder:text-coolgray-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
              Problem Description (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the issue (e.g. AC not cooling, geyser tripping switch, water leaking)..."
              className="w-full px-4 py-3 rounded-xl border border-coolgray-200 text-sm text-navy-900 placeholder:text-coolgray-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-70 group"
          >
            {status === 'submitting' ? (
              <span>Preparing Request...</span>
            ) : (
              <>
                <span>Submit Service Inquiry</span>
                <Send className="w-4 h-4 text-electric-400 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-[11px] text-coolgray-400 text-center">
            Prefer direct contact? Call us immediately at <a href="tel:+917879649209" className="text-navy-900 font-bold hover:underline">+91 7879649209</a>.
          </p>
        </form>
      )}
    </div>
  );
}
