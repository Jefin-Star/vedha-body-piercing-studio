import React from 'react';
import { MessageCircle, Mail, Instagram, MapPin, Clock, Navigation, Phone, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const directMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Vedha.bodypiercing+10.0013887,76.3101539';

  return (
    <section id="contact" className="py-24 bg-[#0b0c0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Visit Or Connect</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Studio Location &amp; Inquiries
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Located in Kochi, Kerala. Experience advanced body piercing and tooth gem artistry in our private, hygienic studio environment.
          </p>
        </div>

        {/* 2-Column Grid: Contact Cards & Live Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Links & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/918921765874?text=Hello%20VEDHA%20Studio!%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-950/20"
              >
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                      WhatsApp Booking &amp; Chat
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div className="font-mono text-base font-bold text-white mt-0.5">
                    +91 8921765874
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Direct consultations with Amal K Pradeep, rapid quote inquiries, and slot confirmations.
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/vedha.bodypiercing?exln=cXh4aHlleXEzYW55&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-950/20"
              >
                <div className="p-3 rounded-xl bg-pink-950/50 border border-pink-500/30 text-pink-400 group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold">
                      Instagram Showcase
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-400 transition-colors" />
                  </div>
                  <div className="font-mono text-base font-bold text-white mt-0.5">
                    @vedha.bodypiercing
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Daily studio stories, healed client curations, and new jewelry drops.
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:Amalkpradeep1@gmail.com"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#d4af37]/50 transition-all hover:shadow-lg hover:shadow-[#d4af37]/10"
              >
                <div className="p-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                      Official Studio Email
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d4af37] transition-colors" />
                  </div>
                  <div className="font-mono text-base font-bold text-white mt-0.5 break-all">
                    Amalkpradeep1@gmail.com
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Direct client consultations, studio bookings, and bespoke procedure requests.
                  </p>
                </div>
              </a>
            </div>

            {/* Opening Hours Box */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                <Clock className="w-4 h-4" />
                <span>Studio Working Hours</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-[#d4af37]/30">
                <p className="text-sm font-semibold text-white">
                  Our studio is open Monday through Sunday, from 12 PM to 9 PM.
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Private consultations and procedures personally performed by Amal K Pradeep.
                </p>
              </div>
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-400">Monday – Sunday:</span>
                  <span className="font-mono font-semibold text-[#d4af37]">12:00 PM – 09:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-zinc-400">Schedule:</span>
                  <span className="text-emerald-400 font-medium">Open 7 Days a Week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Directions Overlay */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-zinc-950/80 border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 border-b border-white/10 bg-zinc-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div>
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-white">
                    VEDHA Body Piercing Studio
                  </h4>
                  <p className="text-xs text-zinc-400">Kochi, Kerala, India</p>
                </div>
              </div>

              <a
                href={directMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#d4af37] text-black text-xs font-semibold hover:bg-[#aa8230] transition-colors shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative w-full flex-1 min-h-[360px] sm:min-h-[420px] bg-zinc-900">
              <iframe
                title="VEDHA Body Piercing Studio Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.0065705587576!2d76.3101539!3d10.0013887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d00661a734b%3A0x8a0411d3889b159a!2sVedha.bodypiercing!5e1!3m2!1sen!2sin!4v1794315891090!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
