import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAftercare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAftercare }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Zone */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-decoration-none"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#d4af37]/60 group-hover:border-[#d4af37] transition-colors shadow-md shadow-[#d4af37]/20">
              <img
                src="/public/assets/aistudio/638fd1ce-1dad-443e-86a2-d4094d6dbf5c_9ba97be2.jpg"
                alt="VEDHA Body Piercing Studio Logo"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#d4af37] transition-colors">
                VEDHA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#c5a059] uppercase font-medium">
                Body Piercing & Gems
              </span>
            </div>
          </a>

          {/* Zone 2: Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-zinc-300">
            <a
              href="#about"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              About
            </a>
            <a
              href="#artist"
              className="hover:text-[#d4af37] text-[#f5eed3] transition-colors whitespace-nowrap shrink-0 tracking-wide flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Meet the Artist
            </a>

            <a
              href="#gallery"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Portfolio
            </a>
            <a
              href="#why-us"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Why Choose Us
            </a>
            <button
              onClick={onOpenAftercare}
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 tracking-wide flex items-center gap-1 text-zinc-300 hover:underline underline-offset-4 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              Aftercare
            </button>
            <a
              href="#contact"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Quick WhatsApp */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/918921765874?text=Hello%20VEDHA%20Studio!%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="hidden sm:inline-flex items-center justify-center p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/60 hover:text-emerald-300 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide uppercase text-black bg-gradient-to-r from-[#f5e4b7] via-[#d4af37] to-[#aa8230] rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/25 hover:brightness-105 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-3 border-t border-white/10 bg-[#0e1013]/98 backdrop-blur-xl rounded-xl px-4 space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-zinc-200 hover:text-[#d4af37] font-medium"
            >
              About Studio
            </a>
            <a
              href="#artist"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#f5eed3] hover:text-[#d4af37] font-semibold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              Meet the Artist (Amal K Pradeep)
            </a>

            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-zinc-200 hover:text-[#d4af37] font-medium"
            >
              Piercings & Gems Portfolio
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-zinc-200 hover:text-[#d4af37] font-medium"
            >
              Why Choose Us
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAftercare();
              }}
              className="w-full text-left py-2 text-sm text-[#d4af37] font-medium flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Aftercare & Healing Protocol
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-zinc-200 hover:text-[#d4af37] font-medium"
            >
              Contact & Studio Location
            </a>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <a
                href="https://wa.me/918921765874?text=Hello%20VEDHA%20Studio!%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-emerald-400 font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: +91 8921765874
              </a>
              <span className="text-[11px] text-zinc-500 font-mono">Kochi Studio</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
