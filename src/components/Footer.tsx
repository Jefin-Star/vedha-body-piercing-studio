import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin, Heart, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAftercare: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAftercare }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-white/10 text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Lockup & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/60">
                <img
                  src="./images/638fd1ce-1dad-443e-86a2-d4094d6dbf5c_9ba97be2.jpg"
                  alt="VEDHA Body Piercing Studio Emblem"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-white block">
                  VEDHA
                </span>
                <span className="text-[11px] tracking-[0.25em] text-[#c5a059] uppercase font-medium">
                  Body Piercing Studio
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Global-standard advanced body piercing and tooth gems studio led exclusively by founder &amp; specialist Amal K Pradeep. Specialized in anatomical ear curation, ASTM F-136 titanium, and dental-safe bonding.
            </p>

            <div className="text-xs text-[#d4af37] font-medium">
              Open Monday through Sunday, 12 PM to 9 PM
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/918921765874"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-emerald-400 hover:text-white hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/vedha.bodypiercing?exln=cXh4aHlleXEzYW55&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-pink-400 hover:text-white hover:border-pink-500/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:Amalkpradeep1@gmail.com"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-[#d4af37] hover:text-white hover:border-[#d4af37]/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  Studio Philosophy
                </a>
              </li>
              <li>
                <a href="#artist" className="hover:text-[#d4af37] text-[#f5eed3] transition-colors flex items-center gap-1.5">
                  Meet the Artist (Amal K Pradeep)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Portfolio Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#d4af37] transition-colors">
                  Hygiene Standards
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAftercare}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left"
                >
                  Aftercare Protocol
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">
                  Studio Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Piercings */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
              Advanced Piercings
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Helix &amp; Forward Helix</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Daith &amp; Conch Piercing</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Septum &amp; Nostril</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Tragus &amp; Rook</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Custom Industrial Scaffold</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Navel / Belly Piercing</a></li>
            </ul>
          </div>

          {/* Col 5: Tooth Gems & Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
              Luxury Tooth Gems
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Swarovski Crystal Solitaire</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">18k / 22k Solid Gold Charms</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Butterfly &amp; Star Emblems</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Smile Constellations</a></li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#aa8230] rounded-lg transition-colors cursor-pointer"
              >
                Reserve Session
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} VEDHA BODY PIERCING STUDIO. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenAftercare}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Sterilization &amp; Aftercare
            </button>
            <span>·</span>
            <a
              href="https://wa.me/918921765874"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              WhatsApp: +91 8921765874
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
