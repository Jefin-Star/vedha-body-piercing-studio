import React, { useState } from 'react';
import { X, ShieldCheck, Sparkles, AlertTriangle, CheckCircle, Clock, Droplets, Heart } from 'lucide-react';

interface AftercareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AftercareModal: React.FC<AftercareModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'piercing' | 'tooth-gems'>('piercing');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#d4af37]/20 text-[#d4af37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                Studio Aftercare &amp; Healing Guide
              </h3>
              <p className="text-xs text-zinc-400">
                Official clinical protocols provided by VEDHA Piercing Specialists
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close aftercare guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 px-6 pt-3 bg-zinc-950">
          <button
            onClick={() => setActiveTab('piercing')}
            className={`pb-3 px-4 text-xs sm:text-sm font-semibold tracking-wide border-b-2 transition-colors cursor-pointer ${
              activeTab === 'piercing'
                ? 'border-[#d4af37] text-[#d4af37]'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Body &amp; Cartilage Piercings
          </button>
          <button
            onClick={() => setActiveTab('tooth-gems')}
            className={`pb-3 px-4 text-xs sm:text-sm font-semibold tracking-wide border-b-2 transition-colors cursor-pointer ${
              activeTab === 'tooth-gems'
                ? 'border-[#d4af37] text-[#d4af37]'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Luxury Tooth Gems Care
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-zinc-300">
          {activeTab === 'piercing' ? (
            <>
              {/* Golden Rules */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200">
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>The Fundamental Rule: Leave It Alone (L.I.T.H.A)</span>
                </div>
                <p className="text-xs text-amber-300/90 leading-relaxed">
                  Never rotate, twist, or pick at your jewelry crusties with unwashed hands. Moving healing jewelry micro-tears the newly forming fistula skin and leads to irritation bumps.
                </p>
              </div>

              {/* Cleaning Routine */}
              <div className="space-y-3">
                <h4 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#d4af37]" />
                  <span>Daily Cleaning Routine (2x per day)</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                  <li>
                    <strong>Saline Spray Only:</strong> Spray the front and back of the piercing with sterile 0.9% USP grade saline spray (such as NeilMed Piercing Aftercare).
                  </li>
                  <li>
                    <strong>Soak &amp; Dry:</strong> Let the saline soften any lymph crust for 3 minutes, then gently pat completely dry using single-use woven medical gauze or a hairdryer on the cool setting.
                  </li>
                  <li>
                    <strong>Shower Caution:</strong> Avoid getting heavy soaps, perfumes, shampoos, or hair styling products directly onto fresh piercings. Rinse thoroughly with clean warm water at the end of showers.
                  </li>
                </ul>
              </div>

              {/* Downsizing */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 space-y-2">
                <h4 className="font-semibold text-xs sm:text-sm text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span>Mandatory Downsizing Schedule (4 to 8 Weeks)</span>
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Initial jewelry is intentionally placed with extra post length to comfortably accommodate normal swelling. Once swelling subsides (usually 4–8 weeks), return to VEDHA studio to have your post down-sized to a snug post. Wearing an oversized post too long can cause crooked migration or snagging.
                </p>
              </div>

              {/* What NOT to do */}
              <div className="space-y-2 text-xs">
                <span className="font-semibold text-rose-400 block uppercase tracking-wider">
                  Strictly Prohibited During Healing:
                </span>
                <p className="text-zinc-400">
                  ❌ No Dettol, rubbing alcohol, hydrogen peroxide, tea tree oil, or antibiotic ointments.<br />
                  ❌ No submerging in public pools, hot tubs, ocean, or bathtubs for 4 weeks.<br />
                  ❌ No sleeping directly on healing cartilage (use a travel pillow / donut pillow).
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Tooth Gems Guide */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>First 24 Hours: Curing &amp; Bonding Settlement</span>
                </div>
                <p className="text-xs text-emerald-300/90 leading-relaxed">
                  Although light-cured instantly in our studio chair, composite bonding reaches its maximum structural bond strength within 24 hours. Follow these simple tips for long-lasting sparkle.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                  <span>Do&apos;s for Tooth Gem Care</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                  <li>
                    <strong>First 1 Hour:</strong> Drink water only. Avoid hot liquids or food.
                  </li>
                  <li>
                    <strong>First 12 Hours:</strong> Stick to soft foods (soups, yogurts, smoothies). Avoid biting directly into hard apples, crusty breads, or ice with the gem-bearing tooth.
                  </li>
                  <li>
                    <strong>Daily Hygiene:</strong> Continue your normal brushing and flossing routine. You can safely brush over the gem with a soft-bristled toothbrush.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 space-y-2">
                <h4 className="font-semibold text-xs sm:text-sm text-white flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#d4af37]" />
                  <span>Professional Dental Cleanings &amp; Longevity</span>
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Our gems typically last between 6 months to 24 months. You can still visit your dentist for regular ultrasonic teeth scaling. If you ever wish to remove the gem earlier, your dentist or our studio can buff it off safely in seconds with zero enamel trace.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-zinc-900/50 flex items-center justify-between">
          <span className="text-xs text-zinc-400">
            Have healing concerns? Reach our piercers 24/7 on WhatsApp.
          </span>
          <a
            href="https://wa.me/918921765874?text=Hi%20VEDHA%20Team!%20I%20have%20an%20aftercare%20question%20regarding%20my%20piercing/tooth%20gem."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
          >
            Chat with Studio
          </a>
        </div>
      </div>
    </div>
  );
};
