import React from 'react';
import { Shield, Sparkles, HeartHandshake, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenAftercare: () => void;
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAftercare, onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-[#0e1013] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Philosophy &amp; Standards</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Where Anatomy Meets High-End Fine Jewelry
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            VEDHA was founded with a singular conviction: body piercing and smile adornment should be approached with the precision of medical science and the aesthetic sensitivity of high jewelry.
          </p>
        </div>

        {/* 2-Column Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Image Collage & Trust Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="./images/f506a891-5c66-476c-bf55-97ec38108080_c364210c.jpg"
                alt="VEDHA Studio Fine Septum Piercing"
                className="w-full h-[460px] object-cover object-center hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Zero Piercing Guns Policy</div>
                    <div className="text-xs text-zinc-300">100% precision single-use hollow needles only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Logo Badge */}
            <div className="hidden sm:flex absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-zinc-950 border border-[#d4af37]/40 shadow-xl p-2 items-center justify-center">
              <img
                src="./images/638fd1ce-1dad-443e-86a2-d4094d6dbf5c_9ba97be2.jpg"
                alt="VEDHA Insignia"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Key Tenets & Craftsmanship */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-semibold text-white">
                Master Specialist Amal K Pradeep Dedicated to Your Comfort
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Every appointment begins with an anatomical consultation with Amal K Pradeep. He maps your ear cartilage curves, facial symmetry, and tooth shape to recommend placements that celebrate your natural architecture. We never force standard placements onto unique bodies.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-center gap-2.5 text-[#d4af37] mb-2 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Implant-Grade Materials</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Only verified ASTM F-136 Titanium, 14k/18k solid gold, and lead-free Swarovski crystals. Nickel-free, hypoallergenic, and bio-compatible.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-center gap-2.5 text-[#d4af37] mb-2 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Medical Sterilization</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Hospital-grade Class-B vacuum autoclave units. Each tool is unwrapped in front of you from heat-sealed sterility indicator pouches.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-center gap-2.5 text-[#d4af37] mb-2 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Dental-Safe Tooth Gems</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Applied using professional dental etching and light-curing composites. Zero drilling, zero enamel abrasion, and easily reversible.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-center gap-2.5 text-[#d4af37] mb-2 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Lifetime Downsizing &amp; Care</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Continuous aftercare support, post-healing jewelry down-sizing checks, and direct WhatsApp access to Amal K Pradeep throughout your healing journey.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAftercare}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#d4af37] bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-lg transition-colors cursor-pointer"
              >
                <span>Read Full Aftercare Protocol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
