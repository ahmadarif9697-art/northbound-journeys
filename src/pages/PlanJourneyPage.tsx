import { useEffect, useState } from 'react';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import { DESTINATIONS, IMAGES } from '../data/journeys';
import type { EnquiryFormData, PageId } from '../types/travel';
import { ResilientImage } from '../components/ResilientImage';

interface PlanJourneyPageProps {
  prefill?: {
    destination?: string;
    travelStyle?: string;
    journeyReference?: string;
  } | null;
  onNavigate: (page: PageId) => void;
}

type FormErrors = Partial<Record<keyof EnquiryFormData, string>>;

const TRAVEL_STYLES = [
  'Luxury Escapes',
  'Himalayan Expeditions',
  'Cultural Journeys',
  'Adventure & Trekking',
  'Private Bespoke Tours',
];

const BUDGET_RANGES = [
  '₹2,00,000 – ₹3,50,000 per guest (Illustrative)',
  '₹3,50,000 – ₹5,00,000 per guest (Illustrative)',
  '₹5,00,000 – ₹8,00,000 per guest (Illustrative)',
  '₹8,00,000+ Exclusive Private Buyout (Illustrative)',
];

export function PlanJourneyPage({ prefill, onNavigate }: PlanJourneyPageProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    destination: prefill?.destination || 'Kashmir',
    travelDates: '',
    travellers: '2 Travellers',
    travelStyle: prefill?.travelStyle || 'Luxury Escapes',
    budgetRange: BUDGET_RANGES[0],
    requirements: '',
    journeyReference: prefill?.journeyReference || '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);

  useEffect(() => {
    if (prefill) {
      setFormData((prev) => ({
        ...prev,
        destination: prefill.destination || prev.destination,
        travelStyle: prefill.travelStyle || prev.travelStyle,
        journeyReference: prefill.journeyReference || '',
      }));
    }
  }, [prefill]);

  const validate = (data: EnquiryFormData): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.fullName.trim() || data.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!data.email.trim()) {
      nextErrors.email = 'Please enter an email address.';
    } else if (!emailRegex.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address (e.g., name@domain.com).';
    }

    const digitsOnly = data.phone.replace(/\D/g, '');
    if (!data.phone.trim()) {
      nextErrors.phone = 'Please enter a contact phone number.';
    } else if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      nextErrors.phone = 'Please enter a valid phone number (7–15 digits).';
    }

    if (!data.destination.trim()) {
      nextErrors.destination = 'Please select a preferred destination.';
    }

    if (!data.travelDates.trim()) {
      nextErrors.travelDates = 'Please specify your preferred travel dates or month.';
    }

    if (!data.travellers.trim()) {
      nextErrors.travellers = 'Please select the number of travellers.';
    }

    if (!data.travelStyle.trim()) {
      nextErrors.travelStyle = 'Please select a travel style.';
    }

    if (!data.budgetRange.trim()) {
      nextErrors.budgetRange = 'Please select an indicative budget range.';
    }

    return nextErrors;
  };

  const handleChange = (field: keyof EnquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmittedData({ ...formData });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      destination: 'Kashmir',
      travelDates: '',
      travellers: '2 Travellers',
      travelStyle: 'Luxury Escapes',
      budgetRange: BUDGET_RANGES[0],
      requirements: '',
      journeyReference: '',
    });
  };

  return (
    <div className="bg-[#FAF7F2] pt-24 sm:pt-28 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl space-y-4 pb-10 border-b border-[#202522]/12">
          <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
            Bespoke Journey Planner
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl text-[#102B25] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Plan Your Journey
          </h1>
          <p className="text-base sm:text-lg text-[#202522]/80 leading-relaxed">
            Configure your preferred destination, season, and travel style to preview a curated enquiry brief. This form operates purely on the front end as part of the SA Crown Web Design portfolio demonstration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form or Confirmation Summary */}
          <div className="lg:col-span-8">
            {submittedData ? (
              <div
                className="bg-[#F5EBD7]/55 border border-[#102B25]/20 rounded-sm p-7 sm:p-10 space-y-8"
                role="region"
                aria-live="polite"
                aria-label="Enquiry Summary Confirmation"
              >
                <div className="flex items-start gap-4 pb-6 border-b border-[#202522]/12">
                  <CheckCircle2
                    className="w-7 h-7 text-[#102B25] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold tracking-wider text-[#102B25]/75">
                      Portfolio Demo Confirmation
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl text-[#102B25]">
                      Your Illustrative Journey Brief Is Ready
                    </h2>
                    <p className="text-sm text-[#202522]/80 leading-relaxed">
                      Thank you, {submittedData.fullName}. Because Northbound Journeys is a fictional portfolio concept by SA Crown Web Design, no email or booking request has been transmitted to a backend server.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-semibold tracking-wider text-[#102B25]/70">
                    Enquiry Summary
                  </h3>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm bg-[#FAF7F2] p-6 border border-[#202522]/10 rounded-sm">
                    <div>
                      <dt className="text-xs text-[#202522]/60">Full Name</dt>
                      <dd className="font-medium text-[#102B25] mt-0.5">
                        {submittedData.fullName}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#202522]/60">Email Address</dt>
                      <dd className="font-medium text-[#102B25] mt-0.5">
                        {submittedData.email}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#202522]/60">Phone Number</dt>
                      <dd className="font-medium text-[#102B25] mt-0.5 tabular-nums">
                        {submittedData.phone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#202522]/60">Preferred Destination</dt>
                      <dd className="font-medium text-[#102B25] mt-0.5">
                        {submittedData.destination}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#202522]/60">Travel Dates</dt>
                      <dd className="font-medium text-[#102B25] mt-0.5">
                        {submittedData.travelDates}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#202522]/60">Party Size</dt>
                      <dd className="font-medium text-[#102B25] mt-0.5">
                        {submittedData.travellers}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#202522]/60">Travel Style</dt>
                      <dd className="font-medium text-[#102B25] mt-0.5">
                        {submittedData.travelStyle}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#202522]/60">Indicative Budget Range</dt>
                      <dd className="font-medium text-[#102B25] mt-0.5 tabular-nums">
                        {submittedData.budgetRange}
                      </dd>
                    </div>
                    {submittedData.journeyReference && (
                      <div className="sm:col-span-2">
                        <dt className="text-xs text-[#202522]/60">Referenced Itinerary</dt>
                        <dd className="font-medium text-[#102B25] mt-0.5">
                          {submittedData.journeyReference}
                        </dd>
                      </div>
                    )}
                    {submittedData.requirements.trim() && (
                      <div className="sm:col-span-2 pt-2 border-t border-[#202522]/10">
                        <dt className="text-xs text-[#202522]/60">Additional Requirements</dt>
                        <dd className="text-[#202522]/85 mt-1 leading-relaxed">
                          {submittedData.requirements}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#102B25] text-[#F5EBD7] text-sm font-medium rounded-sm hover:bg-[#1B3D35] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Prepare Another Enquiry</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('experiences')}
                    className="px-5 py-3 border border-[#102B25]/30 text-[#102B25] text-sm font-medium rounded-sm hover:border-[#102B25] transition-colors cursor-pointer"
                  >
                    Browse Experiences
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#F5EBD7]/35 border border-[#202522]/12 rounded-sm p-6 sm:p-10 space-y-6"
              >
                {formData.journeyReference && (
                  <div className="p-4 bg-[#FAF7F2] border border-[#D6B66F] rounded-sm flex items-center justify-between gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-[#202522]/65">Selected Itinerary: </span>
                      <span className="font-medium text-[#102B25]">
                        {formData.journeyReference}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleChange('journeyReference', '')}
                      className="text-xs text-[#102B25]/70 hover:text-[#102B25] underline shrink-0 cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-[#102B25]"
                    >
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="e.g., Aarav Sharma"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border rounded-sm text-[#102B25] placeholder:text-[#202522]/40 focus:outline-none focus:border-[#102B25] ${
                        errors.fullName ? 'border-red-700' : 'border-[#202522]/20'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-xs text-red-800">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#102B25]"
                    >
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="name@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border rounded-sm text-[#102B25] placeholder:text-[#202522]/40 focus:outline-none focus:border-[#102B25] ${
                        errors.email ? 'border-red-700' : 'border-[#202522]/20'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-800">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-[#102B25]"
                    >
                      Phone Number <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98000 00000"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border rounded-sm text-[#102B25] placeholder:text-[#202522]/40 focus:outline-none focus:border-[#102B25] ${
                        errors.phone ? 'border-red-700' : 'border-[#202522]/20'
                      }`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-xs text-red-800">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Preferred Destination */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="destination"
                      className="block text-xs font-semibold text-[#102B25]"
                    >
                      Preferred Destination <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={(e) => handleChange('destination', e.target.value)}
                      aria-invalid={Boolean(errors.destination)}
                      className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#202522]/20 rounded-sm text-[#102B25] focus:outline-none focus:border-[#102B25]"
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} — {d.subtitle}
                        </option>
                      ))}
                      <option value="Multi-Region Himalayan Circuit">
                        Multi-Region Himalayan Circuit
                      </option>
                    </select>
                  </div>

                  {/* Travel Dates */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="travelDates"
                      className="block text-xs font-semibold text-[#102B25]"
                    >
                      Preferred Travel Dates <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="travelDates"
                      name="travelDates"
                      type="text"
                      required
                      value={formData.travelDates}
                      onChange={(e) => handleChange('travelDates', e.target.value)}
                      placeholder="e.g., October 2027 (8–10 days)"
                      aria-invalid={Boolean(errors.travelDates)}
                      aria-describedby={errors.travelDates ? 'travelDates-error' : undefined}
                      className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border rounded-sm text-[#102B25] placeholder:text-[#202522]/40 focus:outline-none focus:border-[#102B25] ${
                        errors.travelDates ? 'border-red-700' : 'border-[#202522]/20'
                      }`}
                    />
                    {errors.travelDates && (
                      <p id="travelDates-error" className="text-xs text-red-800">
                        {errors.travelDates}
                      </p>
                    )}
                  </div>

                  {/* Number of Travellers */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="travellers"
                      className="block text-xs font-semibold text-[#102B25]"
                    >
                      Number of Travellers <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="travellers"
                      name="travellers"
                      value={formData.travellers}
                      onChange={(e) => handleChange('travellers', e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#202522]/20 rounded-sm text-[#102B25] focus:outline-none focus:border-[#102B25]"
                    >
                      <option value="1 Solo Traveller">1 Solo Traveller</option>
                      <option value="2 Travellers">2 Travellers</option>
                      <option value="3–4 Travellers">3–4 Travellers</option>
                      <option value="5–8 Private Party">5–8 Private Party</option>
                      <option value="9+ Exclusive Buyout">9+ Exclusive Buyout</option>
                    </select>
                  </div>

                  {/* Travel Style */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="travelStyle"
                      className="block text-xs font-semibold text-[#102B25]"
                    >
                      Travel Style <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="travelStyle"
                      name="travelStyle"
                      value={formData.travelStyle}
                      onChange={(e) => handleChange('travelStyle', e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#202522]/20 rounded-sm text-[#102B25] focus:outline-none focus:border-[#102B25]"
                    >
                      {TRAVEL_STYLES.map((style) => (
                        <option key={style} value={style}>
                          {style}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="budgetRange"
                      className="block text-xs font-semibold text-[#102B25]"
                    >
                      Illustrative Budget Range <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) => handleChange('budgetRange', e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#202522]/20 rounded-sm text-[#102B25] focus:outline-none focus:border-[#102B25]"
                    >
                      {BUDGET_RANGES.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="requirements"
                    className="block text-xs font-semibold text-[#102B25]"
                  >
                    Additional Requirements (Optional)
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => handleChange('requirements', e.target.value)}
                    placeholder="Share dietary preferences, photography focus, architectural stays, or altitude pacing notes..."
                    className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#202522]/20 rounded-sm text-[#102B25] placeholder:text-[#202522]/40 focus:outline-none focus:border-[#102B25]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#202522]/65 max-w-md">
                    Client-side demonstration only. Submitting validates your inputs and generates an on-screen summary without sending data externally.
                  </p>
                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-[#102B25] text-[#F5EBD7] font-medium text-sm rounded-sm hover:bg-[#1B3D35] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Generate Enquiry Summary
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Editorial Info Panel */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#102B25] text-[#F5EBD7] rounded-sm overflow-hidden border border-[#D6B66F]/25">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ResilientImage
                  src={IMAGES.teaTerrace}
                  alt="Morning brass tea table on a stone Himalayan mountain terrace"
                  fallbackTitle="Bespoke Concierge"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="p-6 sm:p-7 space-y-4">
                <h2 className="font-display text-2xl text-[#F5EBD7]">
                  Illustrative Planning Process
                </h2>
                <ol className="space-y-3 text-sm text-[#F5EBD7]/80">
                  <li className="flex gap-3">
                    <span className="font-display text-[#D6B66F] tabular-nums">01.</span>
                    <span>Select your region, seasonal window, and preferred pace.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display text-[#D6B66F] tabular-nums">02.</span>
                    <span>Review illustrative route options and altitude notes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display text-[#D6B66F] tabular-nums">03.</span>
                    <span>Generate an instant structured brief for reference.</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="p-6 bg-[#F5EBD7]/65 border border-[#202522]/10 rounded-sm space-y-2 text-xs text-[#202522]/80 leading-relaxed">
              <p className="font-semibold text-[#102B25]">Portfolio Notice</p>
              <p>
                Northbound Journeys is a fictional brand concept designed by SA Crown Web Design (Portfolio Project 03). No commercial bookings or payments are processed on this site.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
