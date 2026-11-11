import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Upload, CheckCircle2, MessageCircle, AlertCircle, X, Sparkles, User, Phone, Mail, Image as ImageIcon } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface BookingFormProps {
  services: ServiceItem[];
  preSelectedService?: string;
  preSelectedNotes?: string;
  preSelectedArtist?: string;
  onClose?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  services,
  preSelectedService,
  preSelectedNotes,
  preSelectedArtist,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceCategory: 'Piercing',
    specificService: 'Helix Piercing',
    jewelryStyle: 'ASTM F-136 Titanium (Standard)',
    placement: 'Left Ear',
    artist: 'Amal K Pradeep (Founder, Piercing & Tooth Gem Specialist)',
    appointmentDate: '',
    appointmentTime: '12:00 PM',
    additionalNotes: '',
    sendToWhatsApp: true,
  });

  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Handle preselection
  useEffect(() => {
    if (preSelectedService) {
      const match = services.find(
        (s) => s.name.toLowerCase() === preSelectedService.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({
          ...prev,
          serviceCategory: match.category === 'tooth-gem' ? 'Tooth Gems' : 'Piercing',
          specificService: match.name,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          additionalNotes: `Inquiring about: ${preSelectedService}. ${prev.additionalNotes}`,
        }));
      }
    }
    if (preSelectedNotes) {
      setFormData((prev) => ({
        ...prev,
        additionalNotes: `${prev.additionalNotes ? prev.additionalNotes + '\n' : ''}${preSelectedNotes}`,
      }));
    }
    if (preSelectedArtist) {
      setFormData((prev) => ({
        ...prev,
        artist: preSelectedArtist,
      }));
    }
  }, [preSelectedService, preSelectedNotes, preSelectedArtist, services]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, image: 'Image size should be under 5MB' }));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setReferenceImage(reader.result as string);
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated.image;
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeReferenceImage = () => {
    setReferenceImage(null);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 9)
      errs.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Valid email is required';
    if (!formData.appointmentDate)
      errs.appointmentDate = 'Please select a preferred date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Generate random confirmation code
    const refCode = `VEDHA-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(refCode);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const getWhatsAppBookingUrl = () => {
    const message = `✨ *VEDHA STUDIO APPOINTMENT REQUEST* ✨\n
*Reference Code:* ${confirmationCode || 'VEDHA-BOOKING'}
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service:* ${formData.serviceCategory} - ${formData.specificService}
*Jewelry Style:* ${formData.jewelryStyle}
*Placement:* ${formData.placement}
*Artist:* ${formData.artist}
*Preferred Date:* ${formData.appointmentDate}
*Preferred Time:* ${formData.appointmentTime}
${formData.additionalNotes ? `*Notes:* ${formData.additionalNotes}\n` : ''}
${referenceImage ? `*(Reference Image Attached in portal)*\n` : ''}
Looking forward to confirmation!`;

    return `https://wa.me/918921765874?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="booking" className="py-24 bg-[#0b0c0e] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Online Reservation &amp; Pricing</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Book Your Studio Session
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-6">
            Private, aseptic piercing sessions and bespoke tooth gem appointments with master specialist Amal K Pradeep. Walk-ins subject to availability; appointments prioritized.
          </p>

          {/* Official Rates & Studio Hours Banner Container */}
          <div className="p-4 sm:p-5 rounded-2xl glowing-box-container max-w-xl mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-xs sm:text-sm">
              <div className="text-center">
                <span className="text-zinc-400 block text-[11px] uppercase tracking-wider mb-0.5">Body Piercing Rates</span>
                <strong className="text-white font-mono font-bold text-base sm:text-lg text-[#f5eed3]">₹1,499 – ₹3,999</strong>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div className="text-center">
                <span className="text-zinc-400 block text-[11px] uppercase tracking-wider mb-0.5">Tooth Gem Rates</span>
                <strong className="text-white font-mono font-bold text-base sm:text-lg text-[#f5eed3]">₹1,999 – ₹3,499</strong>
              </div>
            </div>
            <div className="pt-2.5 border-t border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#f5eed3] font-medium">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Our studio is open Monday through Sunday, from 12 PM to 9 PM.</span>
            </div>
          </div>
        </div>

        {/* Success Confirmation Modal / Card */}
        {isSubmitted ? (
          <div className="rounded-2xl bg-zinc-950 border border-[#d4af37]/40 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
              Appointment Request Submitted
            </h3>
            <p className="text-zinc-300 text-sm max-w-lg mx-auto mb-6">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Your session request has been logged. Our studio coordinator will confirm your exact slot within 2 hours.
            </p>

            <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 max-w-md mx-auto mb-8 text-left text-xs text-zinc-300 space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-zinc-500">Booking Reference:</span>
                <span className="font-mono text-[#d4af37] font-semibold">{confirmationCode}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-zinc-500">Service:</span>
                <span className="font-medium text-white">{formData.specificService}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-zinc-500">Date &amp; Time:</span>
                <span className="font-medium text-white">{formData.appointmentDate} at {formData.appointmentTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Artist:</span>
                <span className="font-medium text-white">{formData.artist}</span>
              </div>
            </div>

            {/* Instant WhatsApp Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-lg shadow-emerald-900/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setReferenceImage(null);
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-sm font-medium border border-white/10 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          /* Main Form */
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-zinc-950/80 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8"
          >
            {/* Section 1: Customer Details */}
            <div>
              <h4 className="font-cinzel text-lg font-bold text-white mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-[#d4af37]" />
                <span>1. Guest Information</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maya Menon"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors ${
                      errors.fullName ? 'border-rose-500' : 'border-white/10'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Phone / WhatsApp <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors ${
                      errors.phone ? 'border-rose-500' : 'border-white/10'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. maya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-white/10'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>
            </div>

            {/* Section 2: Service & Adornment Details */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="font-cinzel text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span>2. Service &amp; Styling Selection</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Category */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Service Category
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => {
                      const newCat = e.target.value;
                      const defaultService =
                        newCat === 'Tooth Gems' ? 'Single Tooth Gem' : 'Helix Piercing';
                      setFormData({
                        ...formData,
                        serviceCategory: newCat,
                        specificService: defaultService,
                      });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Piercing">Advanced Body Piercing</option>
                    <option value="Tooth Gems">Luxury Tooth Gems</option>
                  </select>
                </div>

                {/* Specific Service */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Specific Piercing or Tooth Gem
                  </label>
                  <select
                    value={formData.specificService}
                    onChange={(e) => setFormData({ ...formData, specificService: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  >
                    {services
                      .filter((s) =>
                        formData.serviceCategory === 'Tooth Gems'
                          ? s.category === 'tooth-gem'
                          : s.category === 'piercing'
                      )
                      .map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} (from ₹{s.price})
                        </option>
                      ))}
                  </select>
                </div>

                {/* Preferred Jewellery / Gem Style */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Jewellery / Gem Style
                  </label>
                  <select
                    value={formData.jewelryStyle}
                    onChange={(e) => setFormData({ ...formData, jewelryStyle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="ASTM F-136 Titanium (Standard)">ASTM F-136 Titanium (Medical Grade)</option>
                    <option value="18k Solid Yellow Gold Charm">18k Solid Yellow Gold Charm</option>
                    <option value="14k Solid White Gold">14k Solid White Gold</option>
                    <option value="Authentic Swarovski Diamond Cut">Authentic Swarovski Diamond Cut</option>
                    <option value="Opal Cabochon Cluster">Opal Cabochon Cluster</option>
                    <option value="Custom Consultation on Studio Visit">Consultation on Studio Visit</option>
                  </select>
                </div>

                {/* Preferred Placement */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Preferred Placement
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Left Ear Cartilage / Upper Canine"
                    value={formData.placement}
                    onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Preferred Specialist */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Studio Specialist
                  </label>
                  <select
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-[#d4af37]/40 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Amal K Pradeep (Founder, Piercing & Tooth Gem Specialist)">👑 Amal K Pradeep (Founder, Piercing &amp; Tooth Gem Specialist)</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Preferred Date <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.appointmentDate}
                    onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none focus:border-[#d4af37] ${
                      errors.appointmentDate ? 'border-rose-500' : 'border-white/10'
                    }`}
                  />
                  {errors.appointmentDate && <p className="text-[11px] text-rose-400 mt-1">{errors.appointmentDate}</p>}
                </div>

                {/* Preferred Time (12 PM to 9 PM) */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Preferred Time Slot (12 PM – 9 PM)
                  </label>
                  <select
                    value={formData.appointmentTime}
                    onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Reference Image Upload */}
            <div className="pt-6 border-t border-white/10">
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                Reference Image / Inspiration (Optional)
              </label>
              <p className="text-xs text-zinc-500 mb-4">
                Upload a screenshot or photo of your desired ear curation, placement, or tooth gem layout.
              </p>

              {referenceImage ? (
                <div className="relative inline-block border border-[#d4af37]/50 rounded-xl overflow-hidden p-1 bg-zinc-900">
                  <img
                    src={referenceImage}
                    alt="Uploaded Reference Preview"
                    className="w-36 h-36 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeReferenceImage}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/80 text-white hover:text-rose-400 hover:bg-black transition-colors"
                    title="Remove reference image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <span className="block text-center text-[10px] text-emerald-400 mt-1 font-medium">
                    ✓ Image attached
                  </span>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-white/15 hover:border-[#d4af37]/60 rounded-xl cursor-pointer bg-zinc-900/40 hover:bg-zinc-900/80 transition-colors">
                  <Upload className="w-6 h-6 text-zinc-400 mb-2" />
                  <span className="text-xs font-medium text-zinc-300">
                    Click to browse or drag inspiration photo
                  </span>
                  <span className="text-[11px] text-zinc-500 mt-0.5">PNG, JPG, WebP up to 5MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Section 4: Additional Notes */}
            <div className="pt-6 border-t border-white/10">
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Additional Notes or Anatomical Questions
              </label>
              <textarea
                rows={3}
                placeholder="Share any questions about allergies, previous piercings, or special event timings..."
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Instant WhatsApp Sync Checkbox */}
            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.sendToWhatsApp}
                  onChange={(e) => setFormData({ ...formData, sendToWhatsApp: e.target.checked })}
                  className="w-4 h-4 rounded text-[#d4af37] bg-zinc-900 border-white/20 focus:ring-0"
                />
                <span className="text-xs text-zinc-300">
                  Enable fast-track WhatsApp confirmation with studio reception (+91 8921765874)
                </span>
              </label>
            </div>

            {/* Submit Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-500">
                <span>By submitting, you agree to our hygiene &amp; cancellation policies.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#f5e4b7] via-[#d4af37] to-[#aa8230] rounded-xl hover:shadow-xl hover:shadow-[#d4af37]/25 hover:brightness-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Processing Reservation...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Submit Booking Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
