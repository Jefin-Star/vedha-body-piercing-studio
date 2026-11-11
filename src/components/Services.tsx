import React, { useState, useMemo } from 'react';
import { ServiceItem } from '../data/servicesData';
import { Sparkles, Clock, AlertCircle, Edit3, Check, RotateCcw, Search, ChevronRight } from 'lucide-react';

interface ServicesProps {
  services: ServiceItem[];
  onUpdatePrice: (id: string, newPrice: number) => void;
  onResetPrices: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({
  services,
  onUpdatePrice,
  onResetPrices,
  onBookService,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'piercing' | 'tooth-gem'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditingPrices, setIsEditingPrices] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState<string>('');

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.metals.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [services, activeCategory, searchQuery]);

  const handleStartEdit = (service: ServiceItem) => {
    setEditingId(service.id);
    setTempPrice(service.price.toString());
  };

  const handleSavePrice = (id: string) => {
    const num = parseInt(tempPrice, 10);
    if (!isNaN(num) && num > 0) {
      onUpdatePrice(id, num);
    }
    setEditingId(null);
  };

  return (
    <section id="services" className="py-24 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
              <span>Curated Studio Menu</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our Services &amp; Precision Pricing
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              All piercing procedures include sterile single-use needle piercing and initial ASTM F-136 implant-grade titanium jewelry. Tooth gems utilize certified non-invasive dental bonding.
            </p>

            {/* Official Rates Banner */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-[#d4af37]/30 text-xs">
                <span className="text-zinc-400">Body Piercing:</span>
                <span className="text-white font-mono font-bold">Starting ₹1,499 to ₹3,999</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-[#d4af37]/30 text-xs">
                <span className="text-zinc-400">Tooth Gems:</span>
                <span className="text-white font-mono font-bold">Starting ₹1,999 to ₹3,499</span>
              </div>
            </div>
          </div>

          {/* Studio Price Customizer Toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-zinc-900/90 border border-white/10 rounded-xl p-1.5 backdrop-blur-md">
            <button
              onClick={() => setIsEditingPrices(!isEditingPrices)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                isEditingPrices
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Studio owner tool to adjust starting prices on the fly"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditingPrices ? 'Exit Price Editor' : 'Edit Prices'}</span>
            </button>
            {isEditingPrices && (
              <button
                onClick={onResetPrices}
                className="p-1.5 text-zinc-400 hover:text-rose-400 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                title="Reset to default studio prices"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-xl border border-white/5 overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#d4af37] text-black font-semibold shadow-md shadow-[#d4af37]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Services ({services.length})
            </button>
            <button
              onClick={() => setActiveCategory('piercing')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'piercing'
                  ? 'bg-[#d4af37] text-black font-semibold shadow-md shadow-[#d4af37]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Advanced Piercings
            </button>
            <button
              onClick={() => setActiveCategory('tooth-gem')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'tooth-gem'
                  ? 'bg-[#d4af37] text-black font-semibold shadow-md shadow-[#d4af37]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Luxury Tooth Gems
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search piercing or gems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-zinc-900/80 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-[#d4af37]/10"
            >
              {/* Image Preview Slot */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* SubCategory Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-medium text-zinc-300 capitalize">
                  {service.category === 'tooth-gem' ? 'Tooth Gems' : `${service.subCategory} Piercing`}
                </div>

                {service.popular && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#d4af37]/90 text-black text-[11px] font-bold uppercase tracking-wider">
                    Popular
                  </div>
                )}
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Metal specs & healing info */}
                  <div className="space-y-1.5 mb-6 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>Healing: <strong className="text-zinc-200 font-normal">{service.healingTime}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span className="truncate">Jewellery: {service.metals.join(' · ')}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Price & Book Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-zinc-500 block uppercase tracking-wider">
                      Starting From
                    </span>

                    {isEditingPrices && editingId === service.id ? (
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-zinc-400 text-sm">₹</span>
                        <input
                          type="number"
                          value={tempPrice}
                          onChange={(e) => setTempPrice(e.target.value)}
                          className="w-20 px-2 py-0.5 bg-zinc-900 border border-[#d4af37] text-white text-sm rounded font-mono"
                          autoFocus
                        />
                        <button
                          onClick={() => handleSavePrice(service.id)}
                          className="p-1 rounded bg-[#d4af37] text-black hover:brightness-110"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => isEditingPrices && handleStartEdit(service)}
                        className={`font-mono text-xl font-bold text-white tabular-nums flex items-center gap-1 ${
                          isEditingPrices ? 'cursor-pointer text-[#d4af37] underline decoration-dotted' : ''
                        }`}
                      >
                        <span>{service.currency}</span>
                        <span>{service.price.toLocaleString()}</span>
                        {isEditingPrices && <Edit3 className="w-3 h-3 text-[#d4af37]" />}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onBookService(service)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#f5e4b7] via-[#d4af37] to-[#aa8230] rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/20 hover:brightness-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Book Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-zinc-950/40 rounded-2xl border border-white/5 p-8">
            <AlertCircle className="w-8 h-8 text-zinc-500 mx-auto mb-3" />
            <p className="text-zinc-300 font-medium">No services match &quot;{searchQuery}&quot;</p>
            <p className="text-zinc-500 text-xs mt-1">Try clearing your search query or selecting &quot;All Services&quot;</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs text-[#d4af37] border border-[#d4af37]/30 rounded-lg hover:bg-[#d4af37]/10"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
