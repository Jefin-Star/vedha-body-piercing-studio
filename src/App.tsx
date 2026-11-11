import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MeetTheArtist } from './components/MeetTheArtist';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AftercareModal } from './components/AftercareModal';
import { INITIAL_SERVICES, ServiceItem } from './data/servicesData';
import { MessageCircle } from 'lucide-react';

const STORAGE_KEY = 'vedha_studio_services_v3';

export default function App() {
  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_SERVICES;
  });

  const [preSelectedService, setPreSelectedService] = useState<string>('');
  const [preSelectedNotes, setPreSelectedNotes] = useState<string>('');
  const [preSelectedArtist, setPreSelectedArtist] = useState<string>('Amal K Pradeep (Founder & Specialist)');
  const [isAftercareOpen, setIsAftercareOpen] = useState(false);

  // Save services changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
    } catch {
      // fallback
    }
  }, [services]);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithArtist = (artistName: string) => {
    setPreSelectedArtist(artistName);
    setPreSelectedNotes(`Requested dedicated session with ${artistName}.`);
    scrollToBooking();
  };

  const handleSelectLookForBooking = (lookTitle: string) => {
    setPreSelectedNotes(`Inspired by portfolio look: "${lookTitle}".`);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e8e9eb] selection:bg-[#d4af37]/30 selection:text-[#f8f9fa] flex flex-col font-sans relative">
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => {
          setPreSelectedService('');
          setPreSelectedNotes('');
          scrollToBooking();
        }}
        onOpenAftercare={() => setIsAftercareOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onBookClick={() => {
          setPreSelectedService('');
          setPreSelectedNotes('');
          scrollToBooking();
        }}
        onExploreClick={() => {
          const el = document.getElementById('gallery');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* About Section */}
      <About
        onOpenAftercare={() => setIsAftercareOpen(true)}
        onOpenBooking={() => scrollToBooking()}
      />

      {/* Meet the Artist Section */}
      <MeetTheArtist onBookWithArtist={handleBookWithArtist} />

      {/* Visual Portfolio Gallery */}
      <Gallery onSelectLookForBooking={handleSelectLookForBooking} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Booking / Consultation Reservation Form */}
      <BookingForm
        services={services}
        preSelectedService={preSelectedService}
        preSelectedNotes={preSelectedNotes}
        preSelectedArtist={preSelectedArtist}
      />

      {/* Contact Section with Maps */}
      <Contact />

      {/* Footer */}
      <Footer
        onOpenBooking={() => scrollToBooking()}
        onOpenAftercare={() => setIsAftercareOpen(true)}
      />

      {/* Aftercare & Clinical Protocol Modal */}
      <AftercareModal
        isOpen={isAftercareOpen}
        onClose={() => setIsAftercareOpen(false)}
      />

      {/* Fixed WhatsApp Floating Chat Assistant */}
      <a
        href="https://wa.me/918921765874?text=Hello%20VEDHA%20Studio!%20I%20have%20an%20inquiry%20regarding%20piercing%20or%20tooth%20gems."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-emerald-400/30"
        aria-label="Direct WhatsApp Contact"
        title="Chat on WhatsApp: +91 8921765874"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}
