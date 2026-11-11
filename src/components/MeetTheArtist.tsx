import React from 'react';
import { Crown, Sparkles, Award, ShieldCheck, Heart, Calendar, MessageCircle, CheckCircle, Gem, Compass } from 'lucide-react';

interface MeetTheArtistProps {
  onBookWithArtist: (artistName: string) => void;
}

export const MeetTheArtist: React.FC<MeetTheArtistProps> = ({ onBookWithArtist }) => {
  return (
    <section id="artist" className="py-24 bg-[#0b0c0e] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background gold glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Master Craftsmanship</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Meet the Artist Behind VEDHA
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Precision clinical technique meets avant-garde body adornment. Every piercing and luxury tooth gem placement is personally conceptualized and performed with anatomical perfection.
          </p>
        </div>

        {/* Main Artist Spotlight Container (Glowing Box) */}
        <div className="glowing-box-container rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 relative overflow-hidden">
          {/* Subtle gold gradient wash */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Artist Portrait with Continuous Glowing Neon Border */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                {/* Continuous Glowing Neon Border Frame in Logo Gold */}
                <div className="artist-neon-frame relative w-64 h-72 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl">
                  <img
                    src="./images/af311161-7226-45d8-bce0-4f22b530688b_0d7a32a8.jpg"
                    alt="Amal K Pradeep - Founder, Piercing & Tooth Gem Specialist"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark bottom gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* On-photo floating signature badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-[#d4af37]/40 text-center">
                    <span className="text-[11px] font-semibold text-[#f5eed3] uppercase tracking-wider block">
                      Lead Studio Director
                    </span>
                    <span className="text-[10px] text-[#c5a03e] font-mono">
                      VEDHA STUDIO KOCHI
                    </span>
                  </div>
                </div>

                {/* Floating Decorative Gold Shield */}
                <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-zinc-950 border border-[#d4af37] shadow-xl text-[#d4af37] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Status Note under photo */}
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Accepting Private Appointments This Week</span>
              </div>
            </div>

            {/* Right Column: Artist Credentials & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Name with Crown & Official Title */}
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
                    Amal K Pradeep
                  </h3>
                  {/* Crown Icon next to Name */}
                  <div className="p-1.5 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    <Crown className="w-6 h-6 text-[#d4af37] fill-[#d4af37]/30" />
                  </div>
                </div>

                <div className="text-base sm:text-lg font-medium text-[#d4af37] font-cinzel tracking-wider">
                  Founder, Piercing &amp; Tooth Gem Specialist
                </div>

                {/* Highlighted Line: 5+ Years of Experience */}
                <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-full neon-highlight-badge">
                  <Award className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    5+ Years of Experience in Body Piercing
                  </span>
                </div>
              </div>

              {/* Artist Biography & Approach */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                As the visionary founder and master specialist of VEDHA Body Piercing Studio, Amal has pioneered international-standard body modification in Kerala. Driven by anatomical harmony, each procedure is executed with single-use tri-bevel hollow surgical needles—never trauma-inducing piercing guns.
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                His expertise spans advanced cartilage curations (daith, industrial scaffolds, rook, and conch), micro-precision facial piercings (septum, bridge, nostrils), and dental-grade light-cured tooth gem bonding with zero enamel abrasion.
              </p>

              {/* Specialization Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Freehand Anatomical Mapping</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Class-B Vacuum Autoclave Sterility</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>ASTM F-136 Implant-Grade Titanium</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Dental Composite Light-Cure Bonding</span>
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onBookWithArtist('Amal K Pradeep (Founder, Piercing & Tooth Gem Specialist)')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#f5e4b7] via-[#d4af37] to-[#aa8230] rounded-xl hover:shadow-xl hover:shadow-[#d4af37]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Session with Amal</span>
                </button>

                <a
                  href="https://wa.me/918921765874?text=Hello%20Amal!%20I%20would%20like%20to%20consult%20with%20you%20regarding%20a%20piercing%20or%20tooth%20gem%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Glowing Mini Containers: Artist Mastery Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="glowing-box-container p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-white">5+ Years</div>
              <div className="text-xs font-semibold text-[#d4af37] mt-0.5">Clinical Piercing Mastery</div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Refined anatomical experience across complex cartilage and surface projects.
              </p>
            </div>
          </div>

          <div className="glowing-box-container p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-white">4,000+</div>
              <div className="text-xs font-semibold text-[#d4af37] mt-0.5">Procedures Performed</div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Zero infections reported with strict single-use sterile protocols.
              </p>
            </div>
          </div>

          <div className="glowing-box-container p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 shrink-0">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-white">100% Safe</div>
              <div className="text-xs font-semibold text-[#d4af37] mt-0.5">Dental Composite Bonding</div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Zero drilling, medical-grade dental etch, light-cured composite bonding, and 100% reversible.
              </p>
            </div>
          </div>

          <div className="glowing-box-container p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-white">Bespoke</div>
              <div className="text-xs font-semibold text-[#d4af37] mt-0.5">Anatomical Ear Curation</div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Personalized roadmaps tailored to your individual ear and facial geometry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
