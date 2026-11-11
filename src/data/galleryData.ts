export interface GalleryItem {
  id: string;
  title: string;
  category: 'piercings' | 'ear-curation' | 'facial' | 'tooth-gems' | 'before-after';
  categoryLabel: string;
  image: string;
  details: string;
  artistNote: string;
  metalUsed: string;
  procedureType: string;
  featured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-septum-horseshoe',
    title: 'Aseptic Circular Barbell Septum Piercing',
    category: 'facial',
    categoryLabel: 'Facial & Nose',
    procedureType: 'Septum Piercing',
    image: '/public/assets/aistudio/f506a891-5c66-476c-bf55-97ec38108080_c364210c.jpg',
    details: 'Symmetrical circular horseshoe barbell with mirror-polished micro-bead ends, placed precisely in the nasal columella sweet spot.',
    artistNote: 'Freehand needle alignment through the natural membranous gap guarantees painless swift healing and flip-up discretion.',
    metalUsed: 'ASTM F-136 Implant-Grade Titanium (16G)',
    featured: true
  },
  {
    id: 'gal-eyebrow-vertical',
    title: 'Micro-Polished Vertical Eyebrow Piercing',
    category: 'facial',
    categoryLabel: 'Facial Piercings',
    procedureType: 'Vertical Eyebrow Piercing',
    image: '/public/assets/aistudio/0b811062-7694-4a69-af97-bf924dc24c7f_6ae4f500.jpg',
    details: 'Classic vertical curved barbell placed along the natural arch of the orbital ridge for effortless facial balance.',
    artistNote: 'Accurate tissue depth mapping prevents migration or rejection. Fitted with internally threaded spherical bead terminations.',
    metalUsed: 'ASTM F-136 Titanium Curved Barbell (16G)',
    featured: true
  },
  {
    id: 'gal-celestial-ear-curation',
    title: 'Celestial Constellation Full Ear Curation',
    category: 'ear-curation',
    categoryLabel: 'Ear Styling',
    procedureType: 'Multi-Point Ear Curation',
    image: '/public/assets/aistudio/d180bfee-c64f-448a-a0d8-4e3bc3bbe9c3_2586cd1a.jpg',
    details: 'Multi-piercing gold luxury project combining lightning bolt and starburst cluster studs with a curved rook barbell and diamond drop accents.',
    artistNote: 'Curated across anatomical ear folds to achieve harmonic light reflection without crowding cartilage channels.',
    metalUsed: '14k Solid Yellow Gold & Micro-Pavé Cubic Zirconia',
    featured: true
  },
  {
    id: 'gal-septum-clicker-braided',
    title: 'Textured Diamond-Cut Septum Clicker & Nostril',
    category: 'facial',
    categoryLabel: 'Facial & Nose',
    procedureType: 'Septum Clicker & Nostril Piercing',
    image: '/public/assets/aistudio/de90d4d8-0618-4d07-967d-b81cb0444b7b_cddfc054.jpg',
    details: 'Hand-finished braided texture clicker ring hugging the septum rim, complemented by a low-profile titanium nostril stud.',
    artistNote: 'Precision hinged clicker clasp allows smooth closure with seamless inner radius to preserve septum fistula integrity.',
    metalUsed: 'Implant-Grade Titanium with Faceted Diamond-Cut Finish',
    featured: true
  },
  {
    id: 'gal-swarovski-tooth-gem',
    title: 'Swarovski Solitaire Brilliant-Cut Tooth Gem',
    category: 'tooth-gems',
    categoryLabel: 'Luxury Tooth Gems',
    procedureType: 'Swarovski Tooth Gem Bonding',
    image: '/public/assets/aistudio/ded34655-21e2-4c90-a2eb-b2f9065e4e8a_bb1dcd01.jpg',
    details: 'Certified authentic lead-free Swarovski crystal flatback placed along the smile arc for diamond-like brilliance.',
    artistNote: 'Bonded using clinical-grade orthodontic etch & blue light-curing dental composite. 100% reversible with zero enamel abrasion.',
    metalUsed: 'Certified Lead-Free Swarovski Elements & Dental Composite',
    featured: true
  },
  {
    id: 'gal-industrial-scaffold',
    title: 'Custom Anatomical Industrial Scaffold',
    category: 'piercings',
    categoryLabel: 'Piercings',
    procedureType: 'Industrial Scaffold Piercing',
    image: '/public/assets/aistudio/63c301db-1bde-4d04-a125-65493e6620c9_2eb4d13e.jpg',
    details: 'Dual cartilage piercing connected by a custom-calibrated surgical titanium straight scaffold bar across the upper ear flat.',
    artistNote: 'Custom needle angles calculated to match the client’s scapha curvature, avoiding any pressure contact against the flat.',
    metalUsed: 'ASTM F-136 Titanium 14G Scaffold Barbell',
    featured: true
  },
  {
    id: 'gal-gold-cross-tooth-art',
    title: '18k Solid Gold Cross & Bespoke Smile Constellation',
    category: 'tooth-gems',
    categoryLabel: 'Luxury Tooth Gems',
    procedureType: 'Solid Gold Tooth Gem & Cap Styling',
    image: '/public/assets/aistudio/25b957aa-2fec-4850-bc52-3a551f92f87b_4fa2e26a.jpg',
    details: 'Bold smile architecture featuring a cast 18k yellow gold cross charm, spherical gold tooth studs, chrome caps, and facial piercing synergy.',
    artistNote: 'Tooth gems positioned in non-occlusal zones to ensure zero bite interference and durable long-term retention.',
    metalUsed: '18k Cast Solid Yellow Gold & Medical-Grade Dental Composite',
    featured: true
  },
  {
    id: 'gal-triple-cluster-helix',
    title: 'Curved Triple-Gem Cluster Helix & Gold Hoops',
    category: 'ear-curation',
    categoryLabel: 'Ear Styling',
    procedureType: 'Helix Piercing & Ear Styling',
    image: '/public/assets/aistudio/59ea4fbf-a723-4586-ba64-4e975e8a4dab_60532187.jpg',
    details: 'Anatomical outer helix piercing styled with a contour-hugging 3-stone cubic zirconia cluster stud, paired with timeless gold lobe hoop.',
    artistNote: 'Curved cluster aligns naturally with the helical fold; internally threaded flatback prevents hair tangling and post-sleep irritation.',
    metalUsed: 'ASTM F-136 Titanium Cluster & 18k Gold Plated Hoops',
    featured: true
  }
];
