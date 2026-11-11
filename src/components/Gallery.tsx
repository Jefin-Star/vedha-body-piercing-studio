import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { Eye, MessageCircle, X, ZoomIn, Sparkles, Shield, ChevronRight } from 'lucide-react';

interface GalleryProps {
  onSelectLookForBooking?: (lookTitle: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectLookForBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'ear-curation', label: 'Ear Styling' },
    { id: 'facial', label: 'Facial & Nose' },
    { id: 'piercings', label: 'Cartilage & Piercings' },
    { id: 'tooth-gems', label: 'Tooth Gems' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'piercings') {
      return item.category === 'piercings' || item.category === 'ear-curation' || item.category === 'facial';
    }
    return item.category === selectedFilter;
  });

  return (
    <section id="gallery" className="py-24 bg-[#0e1013] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Real Client Portfolio</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Curated Transformations &amp; Adornments
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Authentic studio piercings and dental-safe tooth gem procedures personally performed by Amal K Pradeep.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === filter.id
                  ? 'bg-[#d4af37] text-black font-semibold shadow-lg shadow-[#d4af37]/20 scale-105'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#d4af37]/50 cursor-pointer transition-all duration-500 shadow-md hover:shadow-2xl hover:shadow-[#d4af37]/15"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover action icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 group-hover:text-[#d4af37] group-hover:scale-110 transition-all">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Category indicator & procedure */}
                <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                  <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
                    {item.categoryLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 text-[9px] font-mono text-[#f5eed3]">
                    {item.procedureType}
                  </span>
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform">
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-white leading-snug group-hover:text-[#d4af37] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 line-clamp-2">
                    {item.details}
                  </p>
                  <div className="mt-2 text-[10px] text-emerald-400/90 font-mono truncate">
                    {item.metalUsed}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Screen Zoom Modal */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
            <div
              className="relative w-full max-w-4xl bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-zinc-400 hover:text-white hover:bg-black transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image View */}
              <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full max-h-[60vh] md:max-h-[80vh] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md text-xs text-[#d4af37] font-medium border border-white/10">
                  {activeModalItem.categoryLabel}
                </div>
              </div>

              {/* Information Panel */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                        Portfolio Showcase
                      </span>
                      <span className="text-zinc-600">·</span>
                      <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 text-[10px] font-mono text-[#f5eed3]">
                        {activeModalItem.procedureType}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                      {activeModalItem.title}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {activeModalItem.details}
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="text-xs font-semibold text-[#d4af37] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Technique &amp; Aftercare Protocol</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {activeModalItem.artistNote}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Material: <strong className="text-zinc-200">{activeModalItem.metalUsed}</strong></span>
                  </div>
                </div>

                {/* CTAs inside modal */}
                <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
                  <a
                    href={`https://wa.me/918921765874?text=Hello%20VEDHA!%20I%20love%20this%20portfolio%20look:%20"${encodeURIComponent(
                      activeModalItem.title
                    )}"%20and%20would%20like%20to%20know%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About This Look on WhatsApp</span>
                  </a>

                  {onSelectLookForBooking && (
                    <button
                      onClick={() => {
                        onSelectLookForBooking(activeModalItem.title);
                        setActiveModalItem(null);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#d4af37] hover:bg-[#aa8230] text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <span>Book Appointment for This Style</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
