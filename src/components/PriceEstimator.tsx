import React, { useState } from 'react';
import { ServiceItem } from '../data/servicesData';
import { Calculator, Sparkles, Check, ArrowRight, X } from 'lucide-react';

interface PriceEstimatorProps {
  services: ServiceItem[];
  onBookCombination: (items: ServiceItem[], total: number) => void;
}

export const PriceEstimator: React.FC<PriceEstimatorProps> = ({ services, onBookCombination }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = services.filter((s) => selectedIds.includes(s.id));
  const totalPrice = selectedItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      {/* Floating Widget Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-zinc-950/90 text-white border border-[#d4af37]/60 shadow-2xl shadow-black/80 hover:scale-105 active:scale-95 transition-all backdrop-blur-md cursor-pointer group"
        aria-label="Open Project Estimator"
      >
        <div className="p-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] group-hover:rotate-12 transition-transform">
          <Calculator className="w-4 h-4" />
        </div>
        <span className="text-xs font-semibold tracking-wide font-cinzel">
          Project Estimator
        </span>
        {selectedIds.length > 0 && (
          <span className="ml-1 w-5 h-5 rounded-full bg-[#d4af37] text-black text-[10px] font-bold flex items-center justify-center">
            {selectedIds.length}
          </span>
        )}
      </button>

      {/* Estimator Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-2xl bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#d4af37]/20 text-[#d4af37]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white">
                    Piercing &amp; Tooth Gems Project Estimator
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Select multiple piercings or tooth gems to estimate your bespoke project investment.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Selection Grid */}
            <div className="p-6 overflow-y-auto space-y-3">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                Click to add or remove services:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((service) => {
                  const isSelected = selectedIds.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleSelect(service.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#d4af37]/15 border-[#d4af37] text-white shadow-sm shadow-[#d4af37]/20'
                          : 'bg-zinc-900/60 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <div className="text-xs font-semibold text-white truncate">
                          {service.name}
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          {service.category === 'tooth-gem' ? 'Dental Gem' : 'Piercing'}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-xs font-bold text-[#d4af37]">
                          ₹{service.price}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                            isSelected
                              ? 'bg-[#d4af37] border-[#d4af37] text-black'
                              : 'border-white/20'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Calculation */}
            <div className="p-6 border-t border-white/10 bg-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                  Estimated Total ({selectedItems.length} items)
                </span>
                <div className="font-mono text-2xl font-bold text-white flex items-center gap-1">
                  <span className="text-[#d4af37]">₹</span>
                  <span>{totalPrice.toLocaleString()}</span>
                  <span className="text-xs text-zinc-500 font-sans font-normal ml-2">
                    (Standard Implant Titanium / Swarovski)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {selectedIds.length > 0 && (
                  <button
                    onClick={() => setSelectedIds([])}
                    className="px-3 py-2 text-xs text-zinc-400 hover:text-rose-400 transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  disabled={selectedIds.length === 0}
                  onClick={() => {
                    onBookCombination(selectedItems, totalPrice);
                    setIsOpen(false);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f5e4b7] via-[#d4af37] to-[#aa8230] text-black text-xs sm:text-sm font-semibold uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all disabled:opacity-40 cursor-pointer"
                >
                  <span>Book This Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
