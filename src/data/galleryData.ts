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
    title: 'Aseptic Freehand Septum Placement',
    category: 'facial',
    categoryLabel: 'Facial & Nose',
    procedureType: 'Nasal Septum Procedure',
    image: './images/f506a891-5c66-476c-bf55-97ec38108080_c364210c.jpg',
    details: 'Traversing the membranous columella sweet spot between lower cartilage and nasal floor using a single-use tri-bevel cannula needle to eliminate cartilage trauma and bleeding.',
    artistNote: 'Technique: Freehand alignment without force clamp ensures exact perpendicular angle. Aftercare: Spray sterile 0.9% isotonic saline twice daily; practice L.I.T.H.A. protocol; avoid twisting or picking crusted lymph.',
    metalUsed: 'ASTM F-136 Implant-Grade Titanium (16G)',
    featured: true
  },
  {
    id: 'gal-eyebrow-vertical',
    title: 'Precision Anatomical Vertical Eyebrow',
    category: 'facial',
    categoryLabel: 'Facial & Surface',
    procedureType: 'Vertical Eyebrow Placement',
    image: './images/0b811062-7694-4a69-af97-bf924dc24c7f_6ae4f500.jpg',
    details: 'Calibrated along the supraorbital ridge curve to follow natural facial movement. Exact canal depth and tissue pinch calibration prevent surface tension and premature migration.',
    artistNote: 'Technique: Internally threaded curved shaft fitted with mirror-finished spherical beads. Aftercare: Gentle sterile saline compress morning and night; avoid makeup or oil-based washes; scheduled 6-week post downsizing.',
    metalUsed: 'ASTM F-136 Titanium Curved Barbell (16G)',
    featured: true
  },
  {
    id: 'gal-celestial-ear-curation',
    title: 'Multi-Point Cartilage & Lobule Curation',
    category: 'ear-curation',
    categoryLabel: 'Ear Styling',
    procedureType: 'Multi-Point Cartilage Placement',
    image: './images/d180bfee-c64f-448a-a0d8-4e3bc3bbe9c3_2586cd1a.jpg',
    details: 'Multi-piercing anatomical design mapped across separate cartilage and lobe planes. Needle trajectories are angled to distribute vascular pressure and allow proper lymph drainage.',
    artistNote: 'Technique: Pre-sterilized hollow-needle channels executed in a single sitting with swelling allowance. Aftercare: Mist with sterile saline spray 2x daily; sleep exclusively on a travel donut pillow; mandatory 8-week labret downsizing.',
    metalUsed: 'ASTM F-136 Titanium Flatback Posts (18G/16G)',
    featured: true
  },
  {
    id: 'gal-septum-clicker-braided',
    title: 'Low-Friction Hinged Septum & Nostril Placement',
    category: 'facial',
    categoryLabel: 'Facial & Nose',
    procedureType: 'Septum & Nostril Alignment',
    image: './images/de90d4d8-0618-4d07-967d-b81cb0444b7b_cddfc054.jpg',
    details: 'Aseptic clicker insertion through a mature, well-formed septum fistula. Precision machined hinge tolerance ensures seamless closure with zero sharp seam friction against the inner nasal mucosa.',
    artistNote: 'Technique: Microscopic bevel inspection before insertion to guarantee zero fistula abrasion. Aftercare: Daily saline misting after dust exposure; pat dry with sterile non-woven gauze; inspect clicker closure tightness regularly.',
    metalUsed: 'ASTM F-136 Implant-Grade High-Polish Titanium',
    featured: true
  },
  {
    id: 'gal-swarovski-tooth-gem',
    title: 'Non-Invasive Dental Composite Enamel Adhesion',
    category: 'tooth-gems',
    categoryLabel: 'Tooth Gems',
    procedureType: 'Orthodontic Light-Cure Bonding',
    image: './images/ded34655-21e2-4c90-a2eb-b2f9065e4e8a_bb1dcd01.jpg',
    details: 'Placed onto the labial enamel face utilizing 37% phosphoric acid conditioning and medical-grade dental primer. Completely non-destructive with zero drilling, zero grinding, and 100% reversible removal.',
    artistNote: 'Technique: Complete cotton roll salivary isolation and blue-spectrum LED photo-polymerization (450nm). Aftercare: Water only for first hour; soft diet for 24 hours; avoid direct electric brush head vibration across gem.',
    metalUsed: 'Dental-Grade Orthodontic Resin & Optical Crystal',
    featured: true
  },
  {
    id: 'gal-industrial-scaffold',
    title: 'Dual-Point Cartilage Scaffold Alignment',
    category: 'piercings',
    categoryLabel: 'Cartilage & Piercings',
    procedureType: 'Industrial Scaffold Procedure',
    image: './images/63c301db-1bde-4d04-a125-65493e6620c9_2eb4d13e.jpg',
    details: 'Dual-rim cartilage piercing connected by a single straight scaffold post. Angle of entry and exit is calibrated to ensure the barbell floats cleanly without resting against the scapha flat.',
    artistNote: 'Technique: Freehand dual-piercing alignment along the anatomical ear plane to prevent pressure necrosis. Aftercare: Sterile saline spray twice daily; cold dry compress for initial swelling; strictly no side sleeping or over-ear headphones.',
    metalUsed: 'ASTM F-136 Titanium Scaffold Barbell (14G)',
    featured: true
  },
  {
    id: 'gal-smile-cross-architecture',
    title: 'Multi-Unit Smile Architecture & Occlusal Mapping',
    category: 'tooth-gems',
    categoryLabel: 'Tooth Gems',
    procedureType: 'Multi-Unit Dental Bonding',
    image: './images/25b957aa-2fec-4850-bc52-3a551f92f87b_4fa2e26a.jpg',
    details: 'Carefully positioned across non-occlusal zones of the anterior dental arch, calibrated specifically to clear upper and lower tooth contact during active speech, mastication, and resting bite.',
    artistNote: 'Technique: Articulating paper bite evaluation verifies complete clearance from opposing incisal edges; dental resin guarantees intact enamel upon professional debonding. Aftercare: Soft-bristled manual brushing; avoid biting hard crusts directly with bonded teeth.',
    metalUsed: 'Biocompatible Dental Composite & Lead-Free Accents',
    featured: true
  },
  {
    id: 'gal-triple-cluster-helix',
    title: 'Contoured Cartilage Cluster & Lobe Alignment',
    category: 'ear-curation',
    categoryLabel: 'Ear Styling',
    procedureType: 'Outer Helix Cartilage Placement',
    image: './images/59ea4fbf-a723-4586-ba64-4e975e8a4dab_60532187.jpg',
    details: 'Single-use needle channel positioned perpendicular to the outer helical rim, paired with an internally threaded flatback labret to prevent pressure sores against the mastoid process behind the ear.',
    artistNote: 'Technique: Perpendicular needle exit prevents downward angling under jewelry weight. Aftercare: Sterile 0.9% saline spray morning and evening; pat dry with sterile gauze; downsize labret length at week 6–8.',
    metalUsed: 'ASTM F-136 Titanium Internally Threaded Labret',
    featured: true
  }
];
