import React from 'react';
import { ShieldCheck, UserCheck, Sparkles, Gem, HeartHandshake, Eye, CheckCircle2, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#d4af37]" />,
      title: 'Experienced Piercing Specialists',
      description: 'Decades of combined clinical mastery. Our piercers are certified in bloodborne pathogens, aseptic technique, and precision anatomical angling.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />,
      title: 'Hospital-Grade Hygiene Standards',
      description: 'Sterilization via Class-B vacuum autoclave units. Continuous spore testing ensures 100% biological verification and zero cross-contamination risk.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#d4af37]" />,
      title: '100% Single-Use Sterile Needles',
      description: 'Strict anti-gun policy. Precision tri-bevel surgical needles discarded immediately into designated sharps bio-containers after single contact.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#d4af37]" />,
      title: 'Premium Body-Safe Jewellery',
      description: 'Certified ASTM F-136 implant-grade titanium, 14k & 18k solid gold. Internally threaded or threadless flatbacks mirror-polished to prevent tissue irritation.',
    },
    {
      icon: <Gem className="w-6 h-6 text-[#d4af37]" />,
      title: 'Certified Tooth Gems & Dental Bond',
      description: 'Authentic lead-free Swarovski crystals and cast 18k/22k solid gold charms bonded with safe dental composites. 100% enamel safe and reversible.',
    },
    {
      icon: <Eye className="w-6 h-6 text-[#d4af37]" />,
      title: 'Personalized Anatomical Styling',
      description: 'Every ear, face, and smile is anatomically unique. We design custom curations and project roadmaps tailored to your facial architecture and lifestyle.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#d4af37]" />,
      title: 'Dedicated Aftercare Support',
      description: 'Your journey does not end when you leave our chair. Receive sterile saline care instructions, scheduled free down-sizing checkups, and direct WhatsApp support.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#d4af37]" />,
      title: 'Private & Luxury Studio Suite',
      description: 'Experience a tranquil, boutique environment designed for relaxation and total privacy. No chaotic crowd floors; every guest enjoys dedicated personal time.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0e1013] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>The VEDHA Standard</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why Discerning Clients Choose VEDHA
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We operate at the intersection of medical sterility, high jewelry craftsmanship, and anatomical aesthetics.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/10 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 w-fit mb-5 group-hover:scale-110 group-hover:border-[#d4af37]/30 transition-all">
                  {reason.icon}
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>VEDHA STANDARD 0{index + 1}</span>
                <span className="text-emerald-400">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
