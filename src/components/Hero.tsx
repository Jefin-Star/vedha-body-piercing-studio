import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Gem, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0b0c0e]">
      {/* Background with Dark Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_studio_piercing_1794316028744.jpg"
          alt="VEDHA Body Piercing Studio Luxury Suite"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.1] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Subtle radial and linear gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/70 to-[#0b0c0e]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Studio Gold Emblem Lockup */}
          <div className="inline-flex items-center gap-3 mb-6 p-1.5 pr-4 rounded-full bg-white/5 border border-[#d4af37]/30 backdrop-blur-md hover:border-[#d4af37]/60 transition-colors">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#d4af37]">
              <img
                src="/public/assets/aistudio/638fd1ce-1dad-443e-86a2-d4094d6dbf5c_9ba97be2.jpg"
                alt="VEDHA Studio Insignia"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
              <span className="text-[#d4af37] font-semibold tracking-wider">VEDHA</span>
              <span className="text-zinc-600">·</span>
              <span className="tracking-wide">Advanced Body Piercings & Luxury Tooth Gems</span>
            </div>
          </div>

          {/* Primary Studio Headline */}
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
            The Art of <span className="gold-gradient-text">Anatomic Expression</span> & Sacred Adornment
          </h1>

          {/* Subtitle / Philosophy */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed mb-6 [text-wrap:balance]">
            Experience world-class aseptic body piercing and certified Swarovski &amp; 18k solid gold tooth gem bonding. Crafted for your unique anatomy with medical-grade precision.
          </p>

          {/* Official Studio Rate Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950/80 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] text-xs sm:text-sm">
              <span className="text-zinc-400">Body Piercing:</span>
              <strong className="text-white font-mono font-bold tracking-wide">Starting ₹1,499 to ₹3,999</strong>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950/80 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] text-xs sm:text-sm">
              <span className="text-zinc-400">Tooth Gems:</span>
              <strong className="text-white font-mono font-bold tracking-wide">Starting ₹1,999 to ₹3,499</strong>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#f5e4b7] via-[#d4af37] to-[#aa8230] rounded-xl hover:shadow-2xl hover:shadow-[#d4af37]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#d4af37]/50 rounded-xl transition-all cursor-pointer group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Sub-tag WhatsApp note */}
          <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Instant booking confirmation &amp; consultations via WhatsApp:</span>
            <a
              href="https://wa.me/918921765874"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:underline font-mono"
            >
              +91 8921765874
            </a>
          </div>
        </div>
      </div>

      {/* Proof / Trust Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-6 px-6 sm:px-8 rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Class-B Autoclave</div>
              <div className="text-xs text-zinc-400">Hospital-grade 100% sterility</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 shrink-0">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Dental-Safe Gems</div>
              <div className="text-xs text-zinc-400">Lead-free Swarovski &amp; Gold charms</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Anatomy Mapping</div>
              <div className="text-xs text-zinc-400">Bespoke styling &amp; aftercare care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
