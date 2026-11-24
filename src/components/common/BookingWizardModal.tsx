'use client';

import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Wind, 
  Flame, 
  Droplets, 
  Wrench, 
  Zap,
  ShieldCheck,
  FileText,
  User,
  Sparkles
} from 'lucide-react';
import { generateWhatsAppLink, generatePhoneLink } from '@/lib/utils';
import { BUSINESS_INFO } from '@/data/business';

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingWizardModal({ isOpen, onClose, defaultService }: BookingWizardProps) {
  const [step, setStep] = useState<number>(1);
  
  // Step 1: Service Selection
  const [selectedAppliance, setSelectedAppliance] = useState<'AC' | 'Geyser' | 'RO' | 'Piping'>('AC');
  const [selectedIssue, setSelectedIssue] = useState<string>(defaultService || 'Deep Jet Foam Servicing');
  const [otherIssueText, setOtherIssueText] = useState<string>('');

  // Step 2: Time & Date Slot
  const [selectedDay, setSelectedDay] = useState<string>('Today');
  const [selectedSlot, setSelectedSlot] = useState<string>('Morning (9 AM - 12 PM)');
  const [otherSlotText, setOtherSlotText] = useState<string>('');

  // Step 3: Contact & Address
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerArea, setCustomerArea] = useState<string>('');
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [bookingCompleted, setBookingCompleted] = useState<boolean>(false);
  const [generatedTicketNo, setGeneratedTicketNo] = useState<string>('');

  const handleClose = () => {
    // Reset state so next open gives a fresh booking flow
    setStep(1);
    setBookingCompleted(false);
    setErrorMessage('');
    setOtherIssueText('');
    setOtherSlotText('');
    setCoords(null);
    setIsLocating(false);
    onClose();
  };

  const handleFetchCurrentLocation = () => {
    if (!navigator.geolocation) {
      setErrorMessage('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    setErrorMessage('');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = Number(pos.coords.latitude.toFixed(6));
        const lng = Number(pos.coords.longitude.toFixed(6));
        setCoords({ lat, lng });
        setIsLocating(false);
        if (!customerArea.trim()) {
          setCustomerArea('Live GPS Location Attached (Indore)');
        }
      },
      (err) => {
        setIsLocating(false);
        if (err.code === 1) {
          setErrorMessage('Location permission denied. Please allow location access or type your area.');
        } else {
          setErrorMessage('Unable to retrieve location. Please type your colony / area.');
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  if (!isOpen) return null;

  const applianceIssues = {
    AC: [
      'Deep Jet Foam Servicing',
      'AC Not Cooling / Ice on Coils',
      'Gas Leak Repair & Refilling (R32/R410A)',
      'AC Installation / Uninstallation',
      'Water Dripping / Drain Block',
      'Unusual Noise / Motor Capacitor Fault',
      'Other / Describe Issue'
    ],
    Geyser: [
      'Water Not Heating / Cold Water',
      'Geyser Tripping MCB Switch',
      'Heating Element Replacement',
      'Water Leakage from Tank / Pipe',
      'New Geyser Wall Mounting Installation',
      'Other / Describe Issue'
    ],
    RO: [
      'Complete Filter & Membrane Replacement',
      'High TDS / Bad Water Taste',
      'Booster Pump Repair / No Power',
      'Water Dispensing Very Slowly',
      'RO Leakage & Tube Fitting Repair',
      'Other / Describe Issue'
    ],
    Piping: [
      'Concealed AC Copper Pipeline (New House)',
      'Copper Pipe Replacement / Repair',
      'Nitrogen Pressure Leak Testing',
      'Drainage Line & Outdoor Stand Setup',
      'Other / Describe Issue'
    ]
  };

  const timeSlots = [
    'Morning (9 AM - 12 PM)',
    'Afternoon (12 PM - 3 PM)',
    'Evening (3 PM - 6 PM)',
    'Immediate Urgent Dispatch',
    'Custom Time Window'
  ];

  const handleNextStep = () => {
    if (step === 1) {
      if (selectedIssue === 'Other / Describe Issue' && !otherIssueText.trim()) {
        setErrorMessage('Please describe the issue or service needed.');
        return;
      }
      setErrorMessage('');
      setStep(2);
    } else if (step === 2) {
      if (selectedSlot === 'Custom Time Window' && !otherSlotText.trim()) {
        setErrorMessage('Please specify your preferred time window.');
        return;
      }
      setErrorMessage('');
      setStep(3);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!customerName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = customerPhone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Generate random Ticket Number like SSA-8492
    const randomTicket = `SSA-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedTicketNo(randomTicket);

    const finalIssue = selectedIssue === 'Other / Describe Issue'
      ? (otherIssueText.trim() ? `Other: ${otherIssueText.trim()}` : 'Custom Appliance Service')
      : selectedIssue;

    const finalSlot = selectedSlot === 'Custom Time Window'
      ? (otherSlotText.trim() ? `Custom: ${otherSlotText.trim()}` : 'Flexible Timing')
      : selectedSlot;

    // Executive Invoice & Job Order WhatsApp format (Modern Digital Bill Style)
    const professionalMessage = 
`╔════════════════════════════════════╗
   🧾 *SHRI SANWARIYA AIR CONDITIONER*
   *Doorstep Service Invoice & Job Dispatch*
╚════════════════════════════════════╝

📋 *BOOKING INVOICE & ORDER SUMMARY*
────────────────────────────────────
🔖 *Order No:* #${randomTicket}
📅 *Date:* ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
⏰ *Visiting Slot:* ${selectedDay} • ${finalSlot}
📍 *Coverage:* All Indore Doorstep Service

👤 *BILL TO / CUSTOMER DETAILS*
────────────────────────────────────
• *Customer Name:* ${customerName.trim()}
• *Mobile Number:* ${customerPhone.trim()}
• *Service Address:* ${customerArea.trim() || 'Indore'}
${coords ? `• 📍 *Live GPS Map:* https://maps.google.com/?q=${coords.lat},${coords.lng}\n` : ''}

🛠️ *SERVICE SPECIFICATION*
────────────────────────────────────
• *Appliance Category:* ${selectedAppliance}
• *Required Job:* ${finalIssue}
${notes.trim() ? `• *Customer Remarks:* ${notes.trim()}\n` : '• *Inspection:* Standard Diagnostic Visit\n'}
💰 *VISITING & ESTIMATION DETAILS*
────────────────────────────────────
• *Inspection Charge:* ₹199 (Adjusted in final repair bill)
• *Billing Type:* Transparent Rates as per Spares & Work
• *Workshop Desk:* 24B, MR 10 Square, Indore
• *Helpline:* +91 78796 49209

✅ *Status: Instant Web Booking Confirmed*
_Technician dispatch team will contact you shortly._`;

    const waUrl = generateWhatsAppLink(professionalMessage);

    // Open WhatsApp
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    // Show Confirmation Screen inside Modal
    setBookingCompleted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/75 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Shell */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-coolgray-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white flex items-center justify-between shrink-0 border-b border-navy-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-electric-500/20 text-electric-400 border border-electric-500/30 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black tracking-tight leading-tight">
                Quick Service Booking
              </h3>
              <p className="text-[11px] text-coolgray-300">
                Shri Sanwariya AC • Doorstep Coordination Across Indore
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-coolgray-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* POST-BOOKING RECEIPT SCREEN */}
        {bookingCompleted ? (
          <div className="p-6 sm:p-8 space-y-6 text-center animate-in zoom-in-95 duration-200 overflow-y-auto">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                WhatsApp Dispatch Queued
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-navy-900 mt-2">
                Booking Request Prepared!
              </h4>
              <p className="text-xs sm:text-sm text-coolgray-600 mt-1">
                Your Job Order <strong className="text-navy-900 font-mono">#{generatedTicketNo}</strong> has been forwarded to our service coordination desk at MR 10 Square, Indore.
              </p>
            </div>

            {/* Printable-style Ticket Summary Card */}
            <div className="rounded-2xl border-2 border-dashed border-coolgray-200 bg-coolgray-50/70 p-4 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-coolgray-200 pb-2 font-bold text-navy-900">
                <span>Job Ticket: #{generatedTicketNo}</span>
                <span className="text-emerald-700">Doorstep Indore</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-coolgray-700">
                <div>
                  <span className="text-[10px] text-coolgray-400 block uppercase">Customer</span>
                  <span className="font-semibold text-navy-900">{customerName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-coolgray-400 block uppercase">Mobile</span>
                  <span className="font-semibold text-navy-900">{customerPhone}</span>
                </div>
                <div>
                  <span className="text-[10px] text-coolgray-400 block uppercase">Appliance / Task</span>
                  <span className="font-semibold text-navy-900">
                    {selectedAppliance} • {selectedIssue === 'Other / Describe Issue' ? (otherIssueText || 'Custom Service') : selectedIssue}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-coolgray-400 block uppercase">Time Window</span>
                  <span className="font-semibold text-navy-900">
                    {selectedDay} ({selectedSlot === 'Custom Time Window' ? (otherSlotText || 'Custom Window') : selectedSlot})
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href={generatePhoneLink()}
                className="w-full bg-navy-900 hover:bg-navy-800 text-white font-black py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-accent-400" />
                <span>Call Technician Directly: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-center justify-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setBookingCompleted(false);
                  }}
                  className="text-xs font-bold text-electric-600 hover:text-electric-700 underline"
                >
                  Book Another Service
                </button>
                <span className="text-coolgray-300">•</span>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-xs font-bold text-coolgray-500 hover:text-navy-900 underline"
                >
                  Close Window
                </button>
              </div>
            </div>

          </div>
        ) : (
          <>
            {/* Step Indicator Progress Bar */}
            <div className="bg-coolgray-50 border-b border-coolgray-200 px-6 py-2.5 flex items-center justify-between text-xs font-bold shrink-0">
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                  step >= 1 ? 'bg-electric-500 text-white' : 'bg-coolgray-200 text-coolgray-600'
                }`}>1</span>
                <span className={step === 1 ? 'text-navy-900 font-extrabold' : 'text-coolgray-500'}>Service</span>
              </div>

              <span className="w-8 h-0.5 bg-coolgray-200" />

              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                  step >= 2 ? 'bg-electric-500 text-white' : 'bg-coolgray-200 text-coolgray-600'
                }`}>2</span>
                <span className={step === 2 ? 'text-navy-900 font-extrabold' : 'text-coolgray-500'}>Slot</span>
              </div>

              <span className="w-8 h-0.5 bg-coolgray-200" />

              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                  step >= 3 ? 'bg-electric-500 text-white' : 'bg-coolgray-200 text-coolgray-600'
                }`}>3</span>
                <span className={step === 3 ? 'text-navy-900 font-extrabold' : 'text-coolgray-500'}>Address</span>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
              
              {/* STEP 1: APPLIANCE & ISSUE */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy-900 mb-2">
                      1. Select Your Appliance:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'AC', label: 'Air Conditioner', icon: Wind },
                        { id: 'Geyser', label: 'Geyser Heater', icon: Flame },
                        { id: 'RO', label: 'RO Purifier', icon: Droplets },
                        { id: 'Piping', label: 'Copper Piping', icon: Wrench },
                      ].map((app) => {
                        const AppIcon = app.icon;
                        return (
                          <button
                            key={app.id}
                            type="button"
                            onClick={() => {
                              setSelectedAppliance(app.id as any);
                              setSelectedIssue(applianceIssues[app.id as keyof typeof applianceIssues][0]);
                            }}
                            className={`p-3 rounded-2xl border text-center flex flex-col items-center justify-center gap-1.5 transition-all ${
                              selectedAppliance === app.id
                                ? 'bg-navy-900 text-white border-navy-900 shadow-md ring-2 ring-electric-500/30'
                                : 'bg-coolgray-50 text-navy-900 border-coolgray-200 hover:bg-white'
                            }`}
                          >
                            <AppIcon className={`w-5 h-5 ${selectedAppliance === app.id ? 'text-electric-400' : 'text-coolgray-600'}`} />
                            <span className="text-xs font-bold">{app.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy-900 mb-2">
                      2. Select Problem / Required Service:
                    </label>
                    <div className="space-y-2">
                      {applianceIssues[selectedAppliance].map((issue, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelectedIssue(issue);
                            setErrorMessage('');
                          }}
                          className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                            selectedIssue === issue
                              ? 'bg-electric-50/70 border-electric-500 text-electric-900 shadow-sm'
                              : 'bg-white border-coolgray-200 text-coolgray-700 hover:bg-coolgray-50'
                          }`}
                        >
                          <span>{issue}</span>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            selectedIssue === issue ? 'border-electric-500 bg-electric-500' : 'border-coolgray-300'
                          }`}>
                            {selectedIssue === issue && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* DYNAMIC DESCRIBE INPUT WHEN "OTHER" IS SELECTED */}
                    {selectedIssue === 'Other / Describe Issue' && (
                      <div className="mt-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 animate-in fade-in duration-200">
                        <label className="block text-xs font-black text-amber-900 mb-1.5 flex items-center gap-1.5">
                          <span>✏️ Describe your specific issue / requirement:</span>
                        </label>
                        <textarea
                          rows={2}
                          value={otherIssueText}
                          onChange={(e) => setOtherIssueText(e.target.value)}
                          placeholder="e.g. AC remote sensor not working, PCB board burning smell, need split to window conversion..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-xs text-navy-900 placeholder-coolgray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          autoFocus
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 2: DATE & TIME SLOT */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy-900 mb-2">
                      1. Preferred Service Day:
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'Today', label: 'Today (Same Day)' },
                        { id: 'Tomorrow', label: 'Tomorrow' },
                        { id: 'Upcoming Weekend', label: 'This Weekend' },
                      ].map((d) => (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => setSelectedDay(d.id)}
                          className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                            selectedDay === d.id
                              ? 'bg-navy-900 text-white border-navy-900 shadow-md ring-2 ring-electric-500/20'
                              : 'bg-white text-coolgray-700 border-coolgray-200 hover:bg-coolgray-50'
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy-900 mb-2">
                      2. Convenient Time Slot:
                    </label>
                    <div className="space-y-2">
                      {timeSlots.map((slot, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelectedSlot(slot);
                            setErrorMessage('');
                          }}
                          className={`p-3.5 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-between ${
                            selectedSlot === slot
                              ? 'bg-electric-50/80 border-electric-500 text-electric-900 shadow-sm'
                              : 'bg-white border-coolgray-200 text-coolgray-700 hover:bg-coolgray-50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Clock className={`w-4 h-4 ${selectedSlot === slot ? 'text-electric-600' : 'text-coolgray-400'}`} />
                            <span>{slot}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            selectedSlot === slot ? 'border-electric-500 bg-electric-500' : 'border-coolgray-300'
                          }`}>
                            {selectedSlot === slot && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* DYNAMIC DESCRIBE INPUT WHEN "CUSTOM TIME WINDOW" IS SELECTED */}
                    {selectedSlot === 'Custom Time Window' && (
                      <div className="mt-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 animate-in fade-in duration-200">
                        <label className="block text-xs font-black text-amber-900 mb-1.5 flex items-center gap-1.5">
                          <span>⏰ Specify your suitable time / instructions:</span>
                        </label>
                        <input
                          type="text"
                          value={otherSlotText}
                          onChange={(e) => setOtherSlotText(e.target.value)}
                          placeholder="e.g. Sharp 7:30 PM after office, or Sunday 11 AM..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-xs text-navy-900 placeholder-coolgray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          autoFocus
                        />
                      </div>
                    )}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-2.5 text-xs text-emerald-800">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Our technician calls 15 minutes before reaching your doorstep in Indore.</span>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT & ADDRESS */}
              {step === 3 && (
                <form onSubmit={handleFinalSubmit} className="space-y-4 animate-in fade-in duration-200">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  {/* Summary Review */}
                  <div className="p-3.5 rounded-2xl bg-coolgray-50 border border-coolgray-200 text-xs space-y-1">
                    <div className="font-bold text-navy-900">
                      Service: {selectedAppliance} — {selectedIssue}
                    </div>
                    <div className="text-coolgray-600">
                      Slot: {selectedDay} ({selectedSlot})
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy-900 mb-1">
                      Customer Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-coolgray-200 text-sm focus:outline-none focus:ring-2 focus:ring-electric-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy-900 mb-1">
                      Mobile Number (WhatsApp) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="10-digit WhatsApp Number"
                      className="w-full px-4 py-3 rounded-xl border border-coolgray-200 text-sm focus:outline-none focus:ring-2 focus:ring-electric-500"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-black uppercase tracking-wider text-navy-900">
                        Locality / Colony / Sector in Indore
                      </label>
                      <button
                        type="button"
                        onClick={handleFetchCurrentLocation}
                        disabled={isLocating}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-electric-600 hover:text-electric-700 bg-electric-50 hover:bg-electric-100 px-2.5 py-1 rounded-lg border border-electric-200 transition-colors"
                      >
                        <MapPin className="w-3 h-3 text-electric-500" />
                        <span>{isLocating ? 'Locating...' : '📍 Auto-Detect Live GPS'}</span>
                      </button>
                    </div>
                    <input
                      type="text"
                      value={customerArea}
                      onChange={(e) => setCustomerArea(e.target.value)}
                      placeholder="e.g. Vijay Nagar, Scheme 54, Palasia, MR 10"
                      className="w-full px-4 py-3 rounded-xl border border-coolgray-200 text-sm focus:outline-none focus:ring-2 focus:ring-electric-500"
                    />
                    {coords && (
                      <div className="mt-1.5 flex items-center justify-between text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                        <span className="flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          GPS Coords Attached: ({coords.lat}, {coords.lng})
                        </span>
                        <a
                          href={`https://maps.google.com/?q=${coords.lat},${coords.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-bold text-emerald-800"
                        >
                          View Map
                        </a>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy-900 mb-1">
                      Appliance Model / Remarks (Optional)
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. 1.5 Ton Split AC, AO Smith Geyser"
                      className="w-full px-4 py-3 rounded-xl border border-coolgray-200 text-sm focus:outline-none focus:ring-2 focus:ring-electric-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 px-6 rounded-2xl text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
                  >
                    <span>Generate Job Ticket & Send on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>

            {/* Modal Navigation Footer */}
            <div className="p-4 bg-coolgray-50 border-t border-coolgray-200 flex items-center justify-between shrink-0">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="text-xs font-bold text-coolgray-600 hover:text-navy-900 px-3 py-2"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 && (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-xl flex items-center gap-1.5 shadow"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </>
        )}

      </div>

    </div>
  );
}
