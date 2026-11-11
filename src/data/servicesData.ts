export interface ServiceItem {
  id: string;
  name: string;
  category: 'piercing' | 'tooth-gem';
  subCategory: 'ear' | 'facial' | 'body' | 'gem';
  description: string;
  price: number;
  currency: string;
  healingTime: string;
  painLevel: 'Mild' | 'Moderate' | 'Noticeable';
  image: string;
  popular?: boolean;
  metals: string[];
}

export const STUDIO_PRICING = {
  piercing: {
    min: 1499,
    max: 3999,
    label: '₹1,499 – ₹3,999',
    startingText: 'Starting from ₹1,499 to ₹3,999',
  },
  toothGems: {
    min: 1999,
    max: 3499,
    label: '₹1,999 – ₹3,499',
    startingText: 'Starting from ₹1,999 to ₹3,499',
  },
};

export const INITIAL_SERVICES: ServiceItem[] = [
  // Advanced Piercings (Rate: ₹1,499 to ₹3,999)
  {
    id: 'helix-piercing',
    name: 'Helix Piercing',
    category: 'piercing',
    subCategory: 'ear',
    description: 'Upper cartilage outer rim piercing. Perfect for delicate gold hoops, diamond studs, or cluster curved flatback barbells.',
    price: 1499,
    currency: '₹',
    healingTime: '3 - 6 months',
    painLevel: 'Moderate',
    image: './images/59ea4fbf-a723-4586-ba64-4e975e8a4dab_60532187.jpg',
    popular: true,
    metals: ['ASTM F-136 Titanium', '14k/18k Solid Gold']
  },
  {
    id: 'nostril-piercing',
    name: 'Nostril Piercing',
    category: 'piercing',
    subCategory: 'facial',
    description: 'Classic high or standard nostril piercing. Precise placement tailored to facial symmetry using threadless labret flatbacks.',
    price: 1499,
    currency: '₹',
    healingTime: '3 - 6 months',
    painLevel: 'Mild',
    image: './images/de90d4d8-0618-4d07-967d-b81cb0444b7b_cddfc054.jpg',
    popular: true,
    metals: ['Implant Titanium Labret', 'Real Gold Stud']
  },
  {
    id: 'forward-helix',
    name: 'Forward Helix Piercing',
    category: 'piercing',
    subCategory: 'ear',
    description: 'Front rim of the ear cartilage facing forward. Beautiful as a single stud or graduated double/triple staggered row.',
    price: 1799,
    currency: '₹',
    healingTime: '3 - 9 months',
    painLevel: 'Moderate',
    image: './images/d180bfee-c64f-448a-a0d8-4e3bc3bbe9c3_2586cd1a.jpg',
    metals: ['ASTM F-136 Titanium', '18k Gold']
  },
  {
    id: 'tragus-piercing',
    name: 'Tragus Piercing',
    category: 'piercing',
    subCategory: 'ear',
    description: 'Prominent cartilage flap over the ear canal entrance. Complements ear curations with micro-bezel diamonds and gold balls.',
    price: 1799,
    currency: '₹',
    healingTime: '4 - 8 months',
    painLevel: 'Moderate',
    image: './images/d180bfee-c64f-448a-a0d8-4e3bc3bbe9c3_2586cd1a.jpg',
    metals: ['ASTM F-136 Titanium', 'Threadless Gold']
  },
  {
    id: 'conch-piercing',
    name: 'Conch Piercing',
    category: 'piercing',
    subCategory: 'ear',
    description: 'Inner ear cartilage cup. Styled with sparkling cabochon or clusters during healing, and later convertible to a stunning large hoop.',
    price: 1999,
    currency: '₹',
    healingTime: '6 - 9 months',
    painLevel: 'Moderate',
    image: './images/d180bfee-c64f-448a-a0d8-4e3bc3bbe9c3_2586cd1a.jpg',
    popular: true,
    metals: ['ASTM F-136 Titanium', 'Solid Gold']
  },
  {
    id: 'eyebrow-piercing',
    name: 'Eyebrow Piercing',
    category: 'piercing',
    subCategory: 'facial',
    description: 'Vertical or anti-eyebrow surface styling positioned along the orbital ridge. Accentuates eye symmetry and facial contours.',
    price: 1999,
    currency: '₹',
    healingTime: '2 - 4 months',
    painLevel: 'Mild',
    image: './images/0b811062-7694-4a69-af97-bf924dc24c7f_6ae4f500.jpg',
    metals: ['Curved Titanium Barbell']
  },
  {
    id: 'rook-piercing',
    name: 'Rook Piercing',
    category: 'piercing',
    subCategory: 'ear',
    description: 'Upper inner cartilage ridge above the daith. Fitted with curved titanium barbells, gem cluster ends, or dainty seam rings.',
    price: 2199,
    currency: '₹',
    healingTime: '6 - 10 months',
    painLevel: 'Moderate',
    image: './images/d180bfee-c64f-448a-a0d8-4e3bc3bbe9c3_2586cd1a.jpg',
    metals: ['Curved Titanium Barbell', '18k Gold']
  },
  {
    id: 'lip-labret-piercing',
    name: 'Lip / Labret Piercing',
    category: 'piercing',
    subCategory: 'facial',
    description: 'Central labret, philtrum (Medusa), or vertical labret. Finished with smooth-backed flat discs to protect teeth and gum health.',
    price: 2199,
    currency: '₹',
    healingTime: '2 - 3 months',
    painLevel: 'Moderate',
    image: './images/f506a891-5c66-476c-bf55-97ec38108080_c364210c.jpg',
    metals: ['Implant-grade Titanium Flatback']
  },
  {
    id: 'septum-piercing',
    name: 'Septum Piercing',
    category: 'piercing',
    subCategory: 'facial',
    description: 'Pierced through the delicate anatomical sweet spot between nasal cartilage. Easily flipped up during healing if required.',
    price: 2299,
    currency: '₹',
    healingTime: '2 - 3 months',
    painLevel: 'Mild',
    image: './images/f506a891-5c66-476c-bf55-97ec38108080_c364210c.jpg',
    popular: true,
    metals: ['ASTM F-136 Titanium Horseshoe', 'Solid Gold Clicker']
  },
  {
    id: 'navel-piercing',
    name: 'Navel / Belly Piercing',
    category: 'piercing',
    subCategory: 'body',
    description: 'Standard upper rim or floating navel piercing customized to abdominal collapse morphology with sparkling double gem curved barbells.',
    price: 2499,
    currency: '₹',
    healingTime: '4 - 9 months',
    painLevel: 'Moderate',
    image: './images/59ea4fbf-a723-4586-ba64-4e975e8a4dab_60532187.jpg',
    popular: true,
    metals: ['ASTM F-136 Titanium', 'Synthetic Opal / CZ']
  },
  {
    id: 'daith-piercing',
    name: 'Daith Piercing',
    category: 'piercing',
    subCategory: 'ear',
    description: 'Innermost cartilage fold above ear canal. Celebrated for statement ornate clicker rings, filigree gold, and migratory aesthetics.',
    price: 2699,
    currency: '₹',
    healingTime: '6 - 12 months',
    painLevel: 'Moderate',
    image: './images/d180bfee-c64f-448a-a0d8-4e3bc3bbe9c3_2586cd1a.jpg',
    popular: true,
    metals: ['Implant-grade Titanium', '14k/18k Gold Clicker']
  },
  {
    id: 'industrial-piercing',
    name: 'Industrial Piercing',
    category: 'piercing',
    subCategory: 'ear',
    description: 'Dual cartilage piercing connected by a single custom-measured surgical titanium scaffold bar across the upper ear.',
    price: 3499,
    currency: '₹',
    healingTime: '6 - 12 months',
    painLevel: 'Noticeable',
    image: './images/63c301db-1bde-4d04-a125-65493e6620c9_2eb4d13e.jpg',
    metals: ['ASTM F-136 Titanium Bar']
  },
  {
    id: 'custom-body-piercing',
    name: 'Advanced Custom Body Piercing Project',
    category: 'piercing',
    subCategory: 'body',
    description: 'Bespoke multi-piercing project or complex anatomical placement executed with precision surgical technique and luxury jewelry styling.',
    price: 3999,
    currency: '₹',
    healingTime: '6 - 12 months',
    painLevel: 'Noticeable',
    image: './images/d180bfee-c64f-448a-a0d8-4e3bc3bbe9c3_2586cd1a.jpg',
    metals: ['ASTM F-136 Titanium & Solid Gold']
  },

  // Luxury Tooth Gems (Rate: ₹1,999 to ₹3,499)
  {
    id: 'single-tooth-gem',
    name: 'Single Tooth Gem',
    category: 'tooth-gem',
    subCategory: 'gem',
    description: 'A single genuine crystal placed on your selected tooth. Semi-permanent dental-grade adhesion with zero drilling or enamel harm.',
    price: 1999,
    currency: '₹',
    healingTime: 'Instant / zero downtime',
    painLevel: 'Mild',
    image: './images/ded34655-21e2-4c90-a2eb-b2f9065e4e8a_bb1dcd01.jpg',
    popular: true,
    metals: ['Lead-Free Dental Crystal', 'Safe Composite Bond']
  },
  {
    id: 'double-tooth-gems',
    name: 'Double Tooth Gems',
    category: 'tooth-gem',
    subCategory: 'gem',
    description: 'Twin crystal application on adjacent teeth or dual vertical placement on a single canine/incisor for balanced brilliance.',
    price: 2499,
    currency: '₹',
    healingTime: 'Instant / zero downtime',
    painLevel: 'Mild',
    image: './images/ded34655-21e2-4c90-a2eb-b2f9065e4e8a_bb1dcd01.jpg',
    metals: ['Dual Swarovski Crystals']
  },
  {
    id: 'swarovski-tooth-gems',
    name: 'Swarovski Crystal Gem',
    category: 'tooth-gem',
    subCategory: 'gem',
    description: 'Certified authentic Swarovski precision-cut flatback crystal with multi-faceted diamond-like light refraction and durability.',
    price: 2799,
    currency: '₹',
    healingTime: 'Instant / zero downtime',
    painLevel: 'Mild',
    image: './images/ded34655-21e2-4c90-a2eb-b2f9065e4e8a_bb1dcd01.jpg',
    popular: true,
    metals: ['Authentic Swarovski Elements']
  },
  {
    id: 'multiple-tooth-gems',
    name: 'Multiple Tooth Gems (3 - 4 Gems)',
    category: 'tooth-gem',
    subCategory: 'gem',
    description: 'Multi-gem constellation or line accent across your smile arc. Tailored layout mapped to your natural smile window.',
    price: 2999,
    currency: '₹',
    healingTime: 'Instant / zero downtime',
    painLevel: 'Mild',
    image: './images/25b957aa-2fec-4850-bc52-3a551f92f87b_4fa2e26a.jpg',
    metals: ['Multi-Gem Constellation']
  },
  {
    id: 'premium-gold-tooth-gems',
    name: 'Premium 18k / 22k Gold Tooth Gem',
    category: 'tooth-gem',
    subCategory: 'gem',
    description: 'Solid 18k or 22k yellow or white gold charms. Choose from stars, butterflies, hearts, crucifix, lotus, or dollar emblems.',
    price: 3299,
    currency: '₹',
    healingTime: 'Instant / zero downtime',
    painLevel: 'Mild',
    image: './images/25b957aa-2fec-4850-bc52-3a551f92f87b_4fa2e26a.jpg',
    popular: true,
    metals: ['18k/22k Solid Gold Charm']
  },
  {
    id: 'custom-tooth-gem-design',
    name: 'Custom Tooth Gem Art & Combination',
    category: 'tooth-gem',
    subCategory: 'gem',
    description: 'Bespoke combination styling mixing solid gold charms with Swarovski halos, pavé tooth wraps, or freestyle smile architecture.',
    price: 3499,
    currency: '₹',
    healingTime: 'Instant / zero downtime',
    painLevel: 'Mild',
    image: './images/25b957aa-2fec-4850-bc52-3a551f92f87b_4fa2e26a.jpg',
    popular: true,
    metals: ['Solid Gold + Swarovski Pavé']
  }
];
