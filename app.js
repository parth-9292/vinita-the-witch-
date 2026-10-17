/**
 * POKÉWEEN EMPORIUM - Curated by High Sorceress Vinita & Archmage Amit
 * Complete Multiverse of Kanto, Johto, Kalos & Galar Ghost Pokémon
 * Cinematic 3D Gate Opening with Lightning VFX & Web Audio,
 * Cauldron Brewery Minigame, Catch-the-Ghost Game, and Dual Spells.
 */

/* ==========================================================================
   1. Regional Pokémon x Halloween Product Catalog
   ========================================================================== */
const PRODUCTS_DATA = [
  // --- KANTO REGION (Lavender Town, Pokémon Tower, Gastly/Gengar) ---
  {
    id: 'kan-01',
    name: "Lavender Town Cubone Skull Candy Romper",
    category: 'kids',
    region: 'kanto',
    subtag: 'costume',
    price: 36.00,
    origPrice: 48.00,
    rating: 5.0,
    reviews: 189,
    badge: 'Kanto Classic',
    badgeType: 'badge-glow',
    snippet: "Plush bone-patterned romper with soft foam Cubone helmet and a candy-holding Marowak bone pouch.",
    lore: "Blessed by Witch Vinita so little trainers feel brave walking past the Pokémon Tower at dusk.",
    sizes: ['2T', '3T', '4T', '5-6', '7-8'],
    iconType: 'cubone-skull',
    accentColor: '#d4a853'
  },
  {
    id: 'kan-02',
    name: "Kanto Gengar Violet Velvet Cocktail Dress",
    category: 'women',
    region: 'kanto',
    subtag: 'costume',
    price: 118.00,
    origPrice: 160.00,
    rating: 4.9,
    reviews: 312,
    badge: 'Vinita Couture',
    badgeType: 'badge-glow',
    snippet: "Deep plum velvet with jagged Gengar-spike shoulders, ruby eyes choker, and phantom tulle petticoat.",
    lore: "Designed by Sorceress Vinita in homage to Kanto's original shadow trickster. Radiates magnetic charisma.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    iconType: 'gengar-suit',
    accentColor: '#9933ff'
  },
  {
    id: 'kan-03',
    name: "Shadow Haunter Floating-Hands Bomber Jacket",
    category: 'men',
    region: 'kanto',
    subtag: 'apparel',
    price: 125.00,
    origPrice: 165.00,
    rating: 4.8,
    reviews: 240,
    badge: 'Amit Approved',
    badgeType: 'badge-curse',
    snippet: "Satin bomber jacket with detached floating 3D Haunter hands embroidered across the chest and back.",
    lore: "Forged in the dark alleys of Saffron City under Wizard Amit's shadow runes. Glows under UV blacklight.",
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    iconType: 'haunter-shirt',
    accentColor: '#a855f7'
  },
  {
    id: 'kan-04',
    name: "Lavender Tower Marowak Memorial Lantern",
    category: 'decor',
    region: 'kanto',
    subtag: 'accessories',
    price: 48.00,
    origPrice: 65.00,
    rating: 5.0,
    reviews: 275,
    badge: 'Pure Nostalgia',
    badgeType: 'badge-glow',
    snippet: "Antique bronze lantern casting ghostly purple silhouette projections of Gastly, Haunter, and Gengar.",
    lore: "Plays a faint, gentle music-box rendition of the Lavender Town chime when switched to sleep mode.",
    sizes: ['12" Bronze Lantern with LED'],
    iconType: 'gastly-cauldron',
    accentColor: '#a855f7'
  },

  // --- JOHTO REGION (Burned Tower, Ecruteak, Houndoom, Misdreavus) ---
  {
    id: 'joh-01',
    name: "Lil' Johto Teddiursa Were-Ursaring Onesie",
    category: 'kids',
    region: 'johto',
    subtag: 'costume',
    price: 34.00,
    origPrice: 46.00,
    rating: 4.9,
    reviews: 140,
    badge: 'Johto Fur',
    badgeType: 'badge-spooky',
    snippet: "Super fluffy teddy fleece onesie with glowing crescent moon forehead and plush bear claws.",
    lore: "Transforms cute toddlers into fearsome but huggable forest guardians on Halloween night.",
    sizes: ['2T', '3T', '4T', '5-6'],
    iconType: 'mimikyu-hoodie',
    accentColor: '#ffd700'
  },
  {
    id: 'joh-02',
    name: "Ecruteak Burned Tower Houndoom Horn Corset Gown",
    category: 'women',
    region: 'johto',
    subtag: 'costume',
    price: 135.00,
    origPrice: 185.00,
    rating: 5.0,
    reviews: 380,
    badge: "Vinita's Pick",
    badgeType: 'badge-glow',
    snippet: "Matte black leatherette corset with skull buckle choker, sculpted lightweight demon horns, and crimson slit skirt.",
    lore: "Forged in the shadow of the Brass Tower. Legend says the flame in this gown never scorches the wearer.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    iconType: 'mismagius-gown',
    accentColor: '#ff1e27'
  },
  {
    id: 'joh-03',
    name: "Johto Moonlight Umbreon Neon Shadow Hoodie",
    category: 'men',
    region: 'johto',
    subtag: 'apparel',
    price: 72.00,
    origPrice: 95.00,
    rating: 4.9,
    reviews: 290,
    badge: 'Glow Rings',
    badgeType: 'badge-glow',
    snippet: "Heavy 380GSM black cotton hoodie with battery-free glow-in-the-dark Umbreon rings on ears, arms, and back.",
    lore: "Enchanted by Archmage Amit. When exposed to moonlight, the rings pulse with defensive energy.",
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    iconType: 'reaper-trench',
    accentColor: '#38bdf8'
  },
  {
    id: 'joh-04',
    name: "Sprout Tower Cursed Bell Wind-Spinner",
    category: 'decor',
    region: 'johto',
    subtag: 'accessories',
    price: 42.00,
    origPrice: 58.00,
    rating: 4.8,
    reviews: 165,
    badge: 'Zen Spooky',
    badgeType: 'badge-spooky',
    snippet: "Aged brass wind chime with Bellsprout pillar engravings and a resonant Tibetan crypt tone.",
    lore: "Rings gently whenever a ghost Pokémon flits through your garden or front porch.",
    sizes: ['24" Hanging Brass Chime'],
    iconType: 'chandelure-choker',
    accentColor: '#ffd700'
  },

  // --- KALOS REGION (Laverre City, Route 14 Manor, Gourgeist, Trevenant) ---
  {
    id: 'kal-01',
    name: "Kalos Super-Size Pumpkaboo Candy Onesie",
    category: 'kids',
    region: 'kalos',
    subtag: 'costume',
    price: 38.00,
    origPrice: 50.00,
    rating: 5.0,
    reviews: 310,
    badge: 'Super Size!',
    badgeType: 'badge-glow',
    snippet: "Plush oversized pumpkin belly with internal LED glow, yellow eye cutouts, and curly hair antenna.",
    lore: "Modeled after the rarest Super-Size Kalos Pumpkaboo, capable of holding up to 5 lbs of Halloween candy!",
    sizes: ['3T', '4T', '5-6', '7-8', '9-10'],
    iconType: 'pumpkaboo-lantern',
    accentColor: '#ff7518'
  },
  {
    id: 'kal-02',
    name: "Laverre City Gourgeist Velvet Capelet & Gown",
    category: 'women',
    region: 'kalos',
    subtag: 'costume',
    price: 140.00,
    origPrice: 190.00,
    rating: 4.9,
    reviews: 260,
    badge: 'Fairy Witch',
    badgeType: 'badge-glow',
    snippet: "Dual-toned pumpkin orange & midnight chocolate velvet gown with sculpted bat-wing capelet and gold trim.",
    lore: "Blessed by the Laverre Coven where Fairy and Ghost types harmonize under autumn twilight.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    iconType: 'mismagius-gown',
    accentColor: '#ff7518'
  },
  {
    id: 'kal-03',
    name: "Aegislash Cursed Ghost-Sword Leather Biker Coat",
    category: 'men',
    region: 'kalos',
    subtag: 'apparel',
    price: 155.00,
    origPrice: 210.00,
    rating: 4.9,
    reviews: 175,
    badge: 'Blade & Shield',
    badgeType: 'badge-curse',
    snippet: "Weathered moto trench with Aegislash golden shield backplate embroidery and antique bronze hilt zips.",
    lore: "Infused with spectral defensive posture. Guards the wearer against harsh autumn chills and ghost hexes.",
    sizes: ['M', 'L', 'XL', '2XL'],
    iconType: 'trevenant-coat',
    accentColor: '#d4a853'
  },
  {
    id: 'kal-04',
    name: "Kalos Route 14 Haunted Manor Floating Candelabra",
    category: 'decor',
    region: 'kalos',
    subtag: 'potion',
    price: 68.00,
    origPrice: 90.00,
    rating: 4.8,
    reviews: 210,
    badge: 'Levitating Tech',
    badgeType: 'badge-spooky',
    snippet: "Magnetic levitating 3-candle candelabra with flickering purple spirit flames and ultrasonic scent mist.",
    lore: "Straight from the infamous Scary House on Kalos Route 14. Floats and spins gently without touching the table.",
    sizes: ['8" Floating Candelabra Unit'],
    iconType: 'litwick-candle',
    accentColor: '#a855f7'
  },

  // --- GALAR REGION (Glimwood Tangle, Spikemuth, Polteageist, Grimmsnarl) ---
  {
    id: 'gal-01',
    name: "Galar Morpeko Hangry Mode Reversible Hoodie",
    category: 'kids',
    region: 'galar',
    subtag: 'apparel',
    price: 42.00,
    origPrice: 55.00,
    rating: 4.9,
    reviews: 270,
    badge: 'Reversible 2-in-1',
    badgeType: 'badge-glow',
    snippet: "Flips from sweet cheerful Full-Belly Yellow into fierce Trick-or-Treat Hangry Purple with glowing red eyes!",
    lore: "The ultimate trick-or-treat hoodie: switch to Hangry Mode when houses give raisins instead of chocolate!",
    sizes: ['4-5', '6-7', '8-9', '10-12'],
    iconType: 'mimikyu-hoodie',
    accentColor: '#ff3399'
  },
  {
    id: 'gal-02',
    name: "Glimwood Tangle Hatterene Witch Velvet Hat & Cloak",
    category: 'women',
    region: 'galar',
    subtag: 'costume',
    price: 148.00,
    origPrice: 200.00,
    rating: 5.0,
    reviews: 340,
    badge: 'Galar Sorcery',
    badgeType: 'badge-glow',
    snippet: "Cascading pastel lilac and deep cyan hooded velvet cape with oversized floppy witch hat and glowing tentacle clasp.",
    lore: "Known as the Forest Witch of Galar. Casts a tranquil aura that silences noisy partygoers with elegance.",
    sizes: ['Standard Cloak + Hat Set'],
    iconType: 'mismagius-gown',
    accentColor: '#00f0ff'
  },
  {
    id: 'gal-03',
    name: "Spikemuth Punk Grimmsnarl Distressed Denim Jacket",
    category: 'men',
    region: 'galar',
    subtag: 'apparel',
    price: 120.00,
    origPrice: 165.00,
    rating: 4.8,
    reviews: 195,
    badge: 'Dark Punk',
    badgeType: 'badge-curse',
    snippet: "Heavily shredded black denim jacket with Grimmsnarl hair-tendril embroidery, safety pins, and spiked collar.",
    lore: "Straight from Piers' concert hall in Spikemuth. Commands the room with raw dark-type electric attitude.",
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    iconType: 'trevenant-coat',
    accentColor: '#ff1e27'
  },
  {
    id: 'gal-04',
    name: "Galar Polteageist Cracked Antique Haunted Tea Set",
    category: 'decor',
    region: 'galar',
    subtag: 'potion',
    price: 58.00,
    origPrice: 78.00,
    rating: 5.0,
    reviews: 420,
    badge: 'Authentic Stamp',
    badgeType: 'badge-glow',
    snippet: "Porcelain teapot with Polteageist's purple ghost swirl peeking out, accompanied by 2 Sinistea cups and aroma diffuser.",
    lore: "Verified with the blue antique seal of authenticity on the bottom. Emits warm black tea and cinnamon scent.",
    sizes: ['Teapot + 2 Cups Diffuser Set'],
    iconType: 'polteageist-pot',
    accentColor: '#00f0ff'
  }
];

/* ==========================================================================
   2. Custom SVG Art Generators
   ========================================================================== */
function generateProductSVG(iconType, accentColor = '#ff7518') {
  switch (iconType) {
    case 'cubone-skull':
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#1b1510" stroke="${accentColor}" stroke-width="3"/>
          <path d="M65 85 C65 50, 135 50, 135 85 C135 110, 125 135, 100 135 C75 135, 65 110, 65 85 Z" fill="#fdfbf7" stroke="#333" stroke-width="2.5"/>
          <polygon points="65,65 45,45 68,55" fill="#fdfbf7" stroke="#333" stroke-width="2"/>
          <polygon points="135,65 155,45 132,55" fill="#fdfbf7" stroke="#333" stroke-width="2"/>
          <polygon points="78,82 92,94 76,98" fill="#150f24"/>
          <circle cx="84" cy="90" r="3" fill="#ffe600"/>
          <polygon points="122,82 108,94 124,98" fill="#150f24"/>
          <circle cx="116" cy="90" r="3" fill="#ffe600"/>
          <path d="M92 115 L100 110 L108 115" stroke="#333" stroke-width="2.5" fill="none"/>
          <circle cx="96" cy="118" r="2" fill="#333"/>
          <circle cx="104" cy="118" r="2" fill="#333"/>
          <circle cx="50" cy="48" r="6" fill="#ff3399"/>
          <polygon points="44,48 38,42 38,54" fill="#ffd700"/>
          <polygon points="56,48 62,42 62,54" fill="#ffd700"/>
        </svg>`;

    case 'polteageist-pot':
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#0c1322" stroke="${accentColor}" stroke-width="3"/>
          <ellipse cx="100" cy="125" rx="45" ry="35" fill="#f8fafc" stroke="#3b82f6" stroke-width="3"/>
          <ellipse cx="100" cy="85" rx="22" ry="7" fill="#f8fafc" stroke="#3b82f6" stroke-width="2.5"/>
          <circle cx="100" cy="78" r="4" fill="#ffd700"/>
          <path d="M85 90 C75 60, 125 60, 115 90 Z" fill="#7e22ce" filter="drop-shadow(0 0 8px #a855f7)"/>
          <circle cx="94" cy="74" r="3.5" fill="#ffd700"/>
          <circle cx="106" cy="74" r="3.5" fill="#ffd700"/>
          <circle cx="94" cy="74" r="1.5" fill="#000"/>
          <circle cx="106" cy="74" r="1.5" fill="#000"/>
          <path d="M97 82 Q100 85 103 82" stroke="#fff" stroke-width="1.5" fill="none"/>
          <path d="M55 115 C40 100, 45 90, 35 85 C35 105, 50 125, 60 128" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
          <path d="M145 110 C165 115, 165 140, 140 145" stroke="#3b82f6" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M110 115 L118 128 L114 135" stroke="#ef4444" stroke-width="2" fill="none"/>
        </svg>`;

    case 'gengar-suit':
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#0f091c" stroke="${accentColor}" stroke-width="3"/>
          <path d="M70 45 L85 65 L100 40 L115 65 L130 45 C150 70, 160 110, 145 145 C130 170, 70 170, 55 145 C40 110, 50 70, 70 45 Z" fill="#4c1d95" stroke="#7c3aed" stroke-width="2"/>
          <polygon points="72,85 92,98 72,102" fill="#ef4444"/>
          <polygon points="128,85 108,98 128,102" fill="#ef4444"/>
          <circle cx="82" cy="94" r="3" fill="#fff"/>
          <circle cx="118" cy="94" r="3" fill="#fff"/>
          <path d="M68 118 Q100 148 132 118 Q100 125 68 118 Z" fill="#f8fafc" stroke="#1e1035" stroke-width="2"/>
          <line x1="80" y1="120" x2="80" y2="128" stroke="#1e1035" stroke-width="2"/>
          <line x1="90" y1="121" x2="90" y2="132" stroke="#1e1035" stroke-width="2"/>
          <line x1="100" y1="122" x2="100" y2="134" stroke="#1e1035" stroke-width="2"/>
          <line x1="110" y1="121" x2="110" y2="132" stroke="#1e1035" stroke-width="2"/>
          <line x1="120" y1="120" x2="120" y2="128" stroke="#1e1035" stroke-width="2"/>
        </svg>`;

    case 'pumpkaboo-lantern':
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#150f24" stroke="${accentColor}" stroke-width="3"/>
          <ellipse cx="100" cy="120" rx="48" ry="38" fill="#ff7518" stroke="#222" stroke-width="2"/>
          <ellipse cx="100" cy="120" rx="30" ry="38" fill="#ff8c1a"/>
          <ellipse cx="80" cy="122" rx="8" ry="12" fill="#ffe600"/>
          <ellipse cx="120" cy="122" rx="8" ry="12" fill="#ffe600"/>
          <ellipse cx="100" cy="85" rx="36" ry="32" fill="#2d1525" stroke="#ff7518" stroke-width="2"/>
          <circle cx="88" cy="82" r="8" fill="#ffe600"/>
          <circle cx="112" cy="82" r="8" fill="#ffe600"/>
          <circle cx="88" cy="82" r="4" fill="#ff007f"/>
          <circle cx="112" cy="82" r="4" fill="#ff007f"/>
          <path d="M65 85 Q45 75 40 95 Q55 95 65 92" fill="#2d1525"/>
          <path d="M135 85 Q155 75 160 95 Q145 95 135 92" fill="#2d1525"/>
          <path d="M100 55 Q95 30 115 35 Q120 45 105 48" stroke="#eab308" stroke-width="5" fill="none" stroke-linecap="round"/>
        </svg>`;

    case 'mismagius-gown':
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#140b22" stroke="${accentColor}" stroke-width="3"/>
          <path d="M100 30 C75 35, 60 65, 80 85 C60 100, 50 145, 60 170 Q100 180 140 170 C150 145, 140 100, 120 85 C140 65, 125 35, 100 30 Z" fill="#581c87" stroke="#d4a853" stroke-width="2"/>
          <polygon points="80,85 100,105 120,85 110,110 90,110" fill="#3b0764"/>
          <circle cx="88" cy="98" r="5" fill="#dc2626"/>
          <circle cx="100" cy="96" r="6" fill="#ef4444"/>
          <circle cx="112" cy="98" r="5" fill="#dc2626"/>
          <path d="M60 170 Q70 160 80 170 Q90 160 100 170 Q110 160 120 170 Q130 160 140 170" stroke="#d4a853" stroke-width="3" fill="none"/>
          <circle cx="92" cy="62" r="4" fill="#ffd700"/>
          <circle cx="108" cy="62" r="4" fill="#ffd700"/>
        </svg>`;

    case 'haunter-shirt':
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#0d0818" stroke="${accentColor}" stroke-width="3"/>
          <path d="M70 70 L50 85 L65 95 L45 110 L70 120 L100 135 L130 120 L155 110 L135 95 L150 85 L130 70 L100 60 Z" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
          <polygon points="80,85 95,95 80,100" fill="#fff"/>
          <polygon points="120,85 105,95 120,100" fill="#fff"/>
          <circle cx="86" cy="93" r="2.5" fill="#000"/>
          <circle cx="114" cy="93" r="2.5" fill="#000"/>
          <path d="M80 110 Q100 125 120 110" stroke="#ef4444" stroke-width="3" fill="none"/>
          <path d="M40 135 L30 145 L38 148 L32 156 L46 150 Z" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
          <path d="M160 135 L170 145 L162 148 L168 156 L154 150 Z" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
        </svg>`;

    case 'trevenant-coat':
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#0c110d" stroke="${accentColor}" stroke-width="3"/>
          <path d="M75 50 L95 40 L105 40 L125 50 L135 165 L65 165 Z" fill="#2d1c13" stroke="#39ff14" stroke-width="2"/>
          <path d="M75 50 L55 30 L45 35 M55 30 L60 20" stroke="#451a03" stroke-width="4" stroke-linecap="round"/>
          <path d="M125 50 L145 30 L155 35 M145 30 L140 20" stroke="#451a03" stroke-width="4" stroke-linecap="round"/>
          <circle cx="100" cy="75" r="10" fill="#dc2626"/>
          <circle cx="100" cy="75" r="5" fill="#fef08a"/>
          <line x1="80" y1="105" x2="120" y2="125" stroke="#39ff14" stroke-width="2"/>
          <line x1="80" y1="115" x2="120" y2="135" stroke="#39ff14" stroke-width="2"/>
        </svg>`;

    case 'litwick-candle':
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#0d141e" stroke="${accentColor}" stroke-width="3"/>
          <path d="M80 85 C80 75, 120 75, 120 85 L125 150 C125 160, 75 160, 75 150 Z" fill="#f8fafc" stroke="#38bdf8" stroke-width="2"/>
          <path d="M80 85 Q75 105 85 110 Q95 105 90 85" fill="#f8fafc"/>
          <circle cx="105" cy="102" r="5" fill="#facc15"/>
          <circle cx="105" cy="102" r="2" fill="#000"/>
          <ellipse cx="100" cy="115" rx="3" ry="2" fill="#38bdf8"/>
          <path d="M100 40 Q112 60 100 75 Q88 60 100 40 Z" fill="#38bdf8" filter="drop-shadow(0 0 10px #38bdf8)"/>
          <circle cx="100" cy="62" r="5" fill="#c084fc"/>
        </svg>`;

    case 'gastly-cauldron':
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#14081c" stroke="${accentColor}" stroke-width="3"/>
          <circle cx="100" cy="95" r="55" fill="none" stroke="rgba(168, 85, 247, 0.4)" stroke-width="12" stroke-dasharray="10 8"/>
          <circle cx="100" cy="95" r="34" fill="#0f0717" stroke="#7e22ce" stroke-width="2"/>
          <ellipse cx="88" cy="90" rx="9" ry="12" fill="#fff"/>
          <ellipse cx="112" cy="90" rx="9" ry="12" fill="#fff"/>
          <circle cx="89" cy="91" r="3" fill="#000"/>
          <circle cx="111" cy="91" r="3" fill="#000"/>
          <path d="M92 110 Q100 120 108 110 Z" fill="#ff3366"/>
        </svg>`;

    default:
      return `
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="#1b1328" stroke="${accentColor}" stroke-width="3"/>
          <text x="100" y="115" font-size="50" text-anchor="middle" fill="#ff7518">🎃</text>
        </svg>`;
  }
}

/* ==========================================================================
   3. Web Audio API Pokémon & Archmage Synth Engine
   ========================================================================== */
class SpookySoundEngine {
  constructor() {
    this.ctx = null;
    this.ambientGain = null;
    this.isPlayingAmbient = false;
    this.arpInterval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleAmbient() {
    this.init();
    if (this.isPlayingAmbient) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  startAmbient() {
    this.init();
    if (!this.ctx) return;
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.ambientGain.gain.exponentialRampToValueAtTime(0.09, this.ctx.currentTime + 2.0);
    this.ambientGain.connect(this.ctx.destination);

    // Eerie Lavender Town 8-bit note arpeggio [B4, C5, B4, F#4]
    const lavenderNotes = [493.88, 523.25, 493.88, 369.99];
    let noteIdx = 0;

    this.arpInterval = setInterval(() => {
      if (!this.isPlayingAmbient || !this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(lavenderNotes[noteIdx], this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.45);
      osc.connect(gain);
      gain.connect(this.ambientGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.5);
      noteIdx = (noteIdx + 1) % lavenderNotes.length;
    }, 550);

    this.isPlayingAmbient = true;
  }

  stopAmbient() {
    if (this.arpInterval) clearInterval(this.arpInterval);
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      setTimeout(() => { this.isPlayingAmbient = false; }, 800);
    }
  }

  // Thunderclap & Creaking Gate Sound
  playThunderClap() {
    this.init();
    if (!this.ctx) return;

    // Deep thunder rumble
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 1.2);

    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 1.6);
  }

  // Wizard Amit's Thunder Staff
  playAmitThunderStaff() {
    this.init();
    if (!this.ctx) return;
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(880, this.ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.7);

    gain1.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);

    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start();
    osc1.stop(this.ctx.currentTime + 0.85);
  }

  // Witch Vinita's Spell Chant
  playVinitaSpell() {
    this.init();
    if (!this.ctx) return;
    [330, 440, 554, 659, 880].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.4);
    });
  }

  playGengarLaugh() {
    this.init();
    if (!this.ctx) return;
    [350, 260, 340, 240, 320, 220].forEach((pitch, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.1);
      osc.stop(this.ctx.currentTime + i * 0.1 + 0.16);
    });
  }

  playHoundoomHowl() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.5);
    osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 1.2);
    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 1.35);
  }

  playGourgeistGiggle() {
    this.init();
    if (!this.ctx) return;
    [520, 650, 580, 720].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.09);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.09 + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.09);
      osc.stop(this.ctx.currentTime + idx * 0.09 + 0.14);
    });
  }

  playPolteageistWhistle() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1250, this.ctx.currentTime + 0.3);
    osc.frequency.exponentialRampToValueAtTime(1100, this.ctx.currentTime + 0.7);
    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.85);
  }

  playCauldronBubbles() {
    this.init();
    if (!this.ctx) return;
    for (let i = 0; i < 4; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      const baseFreq = 420 + Math.random() * 260;
      osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime + i * 0.08);
      osc.frequency.exponentialRampToValueAtTime(baseFreq + 220, this.ctx.currentTime + i * 0.08 + 0.07);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.1);
    }
  }
}

const audio = new SpookySoundEngine();

/* ==========================================================================
   4. Ambient Particle Canvas Engine
   ========================================================================== */
class ParticleUniverse {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.currentTheme = 'all';
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initParticles(35);
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setTheme(theme) {
    this.currentTheme = theme;
    this.particles.forEach(p => p.reset(this.canvas.width, this.canvas.height, this.currentTheme));
  }

  initParticles(count) {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle(this.canvas.width, this.canvas.height, this.currentTheme));
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      p.update(this.canvas.width, this.canvas.height);
      p.draw(this.ctx, this.currentTheme);
    });
    requestAnimationFrame(() => this.animate());
  }
}

class Particle {
  constructor(w, h, theme) {
    this.reset(w, h, theme);
  }

  reset(w, h, theme) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 5 + 3;
    this.speedY = -(Math.random() * 0.8 + 0.3);
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.opacity = Math.random() * 0.6 + 0.2;
    this.pulse = Math.random() * Math.PI;

    if (theme === 'kids') {
      this.color = Math.random() > 0.5 ? '#ffaa00' : '#ff3399';
    } else if (theme === 'women') {
      this.color = Math.random() > 0.5 ? '#d4a853' : '#b545d6';
    } else if (theme === 'men') {
      this.color = Math.random() > 0.5 ? '#38bdf8' : '#ff1e27';
    } else {
      this.color = Math.random() > 0.5 ? '#ff7518' : '#9933ff';
    }
  }

  update(w, h) {
    this.y += this.speedY;
    this.x += this.speedX;
    this.pulse += 0.03;

    if (this.y < -20) this.y = h + 10;
    if (this.x < -20) this.x = w + 10;
    if (this.x > w + 20) this.x = -10;
  }

  draw(ctx, theme) {
    ctx.save();
    ctx.globalAlpha = this.opacity * (0.6 + Math.sin(this.pulse) * 0.4);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.restore();
  }
}

let particles;

/* ==========================================================================
   5. Store State & Regional Metadata
   ========================================================================== */
const state = {
  currentCategory: 'all',
  currentRegion: 'all',
  currentTag: 'all',
  searchQuery: '',
  maxPrice: 250,
  sortBy: 'featured',
  bloodMoon: false,
  cart: [],
  wishlist: new Set(),
  discountRate: 0,
  droppedIngredients: []
};

const REGION_META = {
  all: { name: "All 4 Pokémon Realms", desc: "Browsing curiosities across Kanto, Johto, Kalos & Galar." },
  kanto: { name: "Kanto • Lavender Tower", desc: "Ghost-types Gengar, Haunter, Gastly and Cubone relics." },
  johto: { name: "Johto • Burned Tower", desc: "Dark-types Houndoom, Umbreon, and Misdreavus velvet couture." },
  kalos: { name: "Kalos • Laverre Haunted Manor", desc: "Super-size Pumpkaboo, Gourgeist gowns, and Aegislash blades." },
  galar: { name: "Galar • Glimwood Tangle", desc: "Polteageist antique teapots, Morpeko hoodies, and Grimmsnarl punk." }
};

const REALM_META = {
  all: {
    name: "The Grand PokéWeen Bazaar",
    glyph: "🏰",
    desc: "Browsing all otherworldly Pokémon curiosities and witchy gear.",
    heroTitle: "The Realm of <span class='highlight-text'>PokéWeen Sorcery</span>",
    heroSub: "Summon frightfully stylish Pokémon apparel from Kanto, Johto, Kalos, and Galar across all four dimensions.",
    heroBadge: "👻 Witch Vinita & Wizard Amit Welcome You",
    cta: "Explore All Regions"
  },
  kids: {
    name: "Little Mimikyus & Candy Ghouls",
    glyph: "🍭",
    desc: "Cubone masks, Pumpkaboo onesies, and Morpeko hoodies for happy little trainers.",
    heroTitle: "Welcome to <span class='highlight-text'>Little Mimikyu Corner</span>",
    heroSub: "Cuddle into soft disguise hoodies, grab your Pikachu candy basket, and collect sweet treats with friendly ghost Pokémon!",
    heroBadge: "🍬 Fun, Cute & Candied Pokémon",
    cta: "Shop Little Mimikyus"
  },
  women: {
    name: "Vinita's Coven & Mismagius Glam",
    glyph: "🔮",
    desc: "Houndoom horned corsets, Gourgeist ballgowns, and high-fashion ghost Pokémon couture.",
    heroTitle: "Awaken Your <span class='highlight-text'>Coven Sorceress</span>",
    heroSub: "Enchanted Mismagius velvet corsets, ruby jewel accents, and grimoire bags infused with Lavender Town spells.",
    heroBadge: "✨ Sorceress Vinita's Collection",
    cta: "Summon Coven Couture"
  },
  men: {
    name: "Amit's Crypt & Shadow Horror",
    glyph: "⚡",
    desc: "Haunter shadow bombers, Aegislash sword coats, and heavyweight ghost rings.",
    heroTitle: "Clad in <span class='highlight-text'>Amit's Shadow Thunder</span>",
    heroSub: "Heavyweight battle apparel, Trevenant bark dusters, and Grimmsnarl punk leather for midnight prowlers.",
    heroBadge: "⚡ Archmage Amit's Crypt Gear",
    cta: "Enter Amit's Crypt"
  },
  decor: {
    name: "Litwick Manor & Spectral Relics",
    glyph: "🕯️",
    desc: "Polteageist tea sets, Gastly cauldrons, and levitating pumpkin Pokéballs.",
    heroTitle: "Sanctify Your <span class='highlight-text'>Haunted Gym</span>",
    heroSub: "Transform your dwelling into an eerie Lavender Tower sanctum with aromatic ghost mist and warm candlelight.",
    heroBadge: "🏺 Litwick Manor & Potions",
    cta: "Browse Manor Relics"
  }
};

/* ==========================================================================
   6. Cinematic Opening & VFX Handlers
   ========================================================================== */
function unlockHalloweenRealm() {
  // 1. Play thunderclap and lightning sound
  audio.playThunderClap();
  audio.playAmitThunderStaff();

  // 2. Trigger visual lightning flash and screen shake
  triggerLightningFlashVFX();
  document.body.classList.add('shake-active');
  setTimeout(() => { document.body.classList.remove('shake-active'); }, 600);

  // 3. Open Gate doors
  const portal = document.getElementById('cinematic-portal');
  portal.classList.add('portal-opened');
  document.body.classList.remove('portal-locked');

  // 4. Start background ambient Lavender Town chiptune music
  audio.startAmbient();
  const soundStatus = document.getElementById('sound-status');
  if (soundStatus) {
    soundStatus.textContent = 'ON';
    soundStatus.style.color = 'var(--accent-primary)';
  }
  const soundIcon = document.getElementById('sound-icon');
  if (soundIcon) soundIcon.setAttribute('data-lucide', 'volume-2');
  if (window.lucide) lucide.createIcons();

  // 5. Welcome announcement toast
  setTimeout(() => {
    showToast("🧙‍♀️ Witch Vinita & ⚡ Wizard Amit: 'Welcome to our Halloween realm!'", '🎃');
    audio.playVinitaSpell();
  }, 1200);
}

function relockGates() {
  const portal = document.getElementById('cinematic-portal');
  portal.classList.remove('portal-opened');
  document.body.classList.add('portal-locked');
  audio.playThunderClap();
  showToast("The Gates have been resealed in shadow.", '🚪');
}

function triggerLightningFlashVFX() {
  const flash = document.getElementById('vfx-flash');
  flash.classList.add('flash-active');
  setTimeout(() => { flash.classList.remove('flash-active'); }, 120);
}

function triggerAmitBoon() {
  audio.playAmitThunderStaff();
  triggerLightningFlashVFX();
  document.body.classList.add('shake-active');
  setTimeout(() => { document.body.classList.remove('shake-active'); }, 500);

  const quoteEl = document.getElementById('vinita-dynamic-quote');
  quoteEl.textContent = "\"Wizard Amit strikes the ground with his thunder staff! By the power of the Void and Ecruteak Tower, 31% is struck from your offering! Code: AMIT31 applied.\"";

  state.discountRate = 0.31;
  document.getElementById('promo-code-input').value = 'AMIT31';
  updateCartDrawerUI();
  showToast("⚡ Wizard Amit blessed you with 31% OFF! (Code: AMIT31 applied)", '⚡');
}

function triggerVinitaBlessing() {
  audio.playVinitaSpell();
  const quoteEl = document.getElementById('vinita-dynamic-quote');
  quoteEl.textContent = "\"Witch Vinita waves her star-wand: 'May the harvest moon smile on thy journey, Trainer! Take my 31% blessing with code VINITA31.'\"";

  state.discountRate = 0.31;
  document.getElementById('promo-code-input').value = 'VINITA31';
  updateCartDrawerUI();
  showToast("🧙‍♀️ Witch Vinita blessed you with 31% OFF! (Code: VINITA31 applied)", '🪄');
}

/* ==========================================================================
   7. UI Initialization & Event Listeners
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  particles = new ParticleUniverse('ambient-canvas');

  loadStoredData();
  renderProducts();
  updateCartDrawerUI();
  updateWishlistUI();
  setupEventListeners();

  setInterval(spawnFlyingGhost, 25000);
});

function setupEventListeners() {
  document.getElementById('sound-toggle-btn').addEventListener('click', () => {
    const isPlaying = audio.toggleAmbient();
    const statusText = document.getElementById('sound-status');
    const icon = document.getElementById('sound-icon');
    if (isPlaying) {
      statusText.textContent = 'ON';
      statusText.style.color = 'var(--accent-primary)';
      icon.setAttribute('data-lucide', 'volume-2');
    } else {
      statusText.textContent = 'OFF';
      statusText.style.color = 'inherit';
      icon.setAttribute('data-lucide', 'volume-x');
    }
    if (window.lucide) lucide.createIcons();
  });

  document.getElementById('sfx-vinita').addEventListener('click', () => audio.playVinitaSpell());
  document.getElementById('sfx-amit').addEventListener('click', () => {
    audio.playAmitThunderStaff();
    triggerLightningFlashVFX();
  });
  document.getElementById('sfx-gengar').addEventListener('click', () => audio.playGengarLaugh());
  document.getElementById('sfx-houndoom').addEventListener('click', () => audio.playHoundoomHowl());
  document.getElementById('sfx-gourgeist').addEventListener('click', () => audio.playGourgeistGiggle());
  document.getElementById('sfx-polteageist').addEventListener('click', () => audio.playPolteageistWhistle());

  document.getElementById('moon-toggle-btn').addEventListener('click', toggleBloodMoon);

  const searchInput = document.getElementById('product-search');
  const clearBtn = document.getElementById('clear-search-btn');

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearBtn.style.display = state.searchQuery ? 'block' : 'none';
    renderProducts();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearBtn.style.display = 'none';
    renderProducts();
  });

  const priceRange = document.getElementById('price-range');
  const priceVal = document.getElementById('price-val');
  priceRange.addEventListener('input', (e) => {
    state.maxPrice = Number(e.target.value);
    priceVal.textContent = `$${state.maxPrice}`;
    renderProducts();
  });

  document.getElementById('sort-select').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  const tagChips = document.querySelectorAll('#subfilter-tags .tag-chip');
  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      tagChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.currentTag = chip.dataset.tag;
      renderProducts();
    });
  });

  document.getElementById('wheel-open-btn').addEventListener('click', openWheelModal);

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  });
}

/* ==========================================================================
   8. Region Selection & Switching
   ========================================================================== */
function selectRegion(region) {
  state.currentRegion = region;

  document.querySelectorAll('.region-gate-card').forEach(card => {
    card.classList.toggle('active', card.dataset.region === region);
  });

  if (region === 'kanto') audio.playGengarLaugh();
  else if (region === 'johto') audio.playHoundoomHowl();
  else if (region === 'kalos') audio.playGourgeistGiggle();
  else if (region === 'galar') audio.playPolteageistWhistle();
  else audio.playVinitaSpell();

  const rMeta = REGION_META[region];
  showPortalAnnouncement(`Warped into ${rMeta.name} — ${rMeta.desc}`);
  renderProducts();
}

/* ==========================================================================
   9. Interactive Cauldron Brewery Minigame
   ========================================================================== */
function dropIngredient(region, name) {
  state.droppedIngredients.push({ region, name });
  audio.playCauldronBubbles();

  const droppedContainer = document.getElementById('cauldron-dropped-tags');
  const emptyHint = droppedContainer.querySelector('.empty-brew-hint');
  if (emptyHint) emptyHint.remove();

  const tag = document.createElement('span');
  tag.className = 'dropped-tag';
  tag.textContent = name;
  droppedContainer.appendChild(tag);

  const pot = document.getElementById('interactive-cauldron');
  pot.style.transform = 'scale(1.08)';
  setTimeout(() => { pot.style.transform = 'scale(1)'; }, 200);

  const btn = document.getElementById('btn-brew-magic');
  if (state.droppedIngredients.length >= 2) {
    btn.disabled = false;
  }

  showToast(`Added ${name} to Cauldron!`, '🧪');
}

function brewPotionNow() {
  if (state.droppedIngredients.length < 2) return;

  audio.playVinitaSpell();
  audio.playAmitThunderStaff();
  triggerLightningFlashVFX();

  const btn = document.getElementById('btn-brew-magic');
  btn.disabled = true;
  btn.innerHTML = '<span>Stirring Arcane Magic... 🌀</span>';

  setTimeout(() => {
    btn.innerHTML = '<span>✨ Stir & Brew Potion</span>';

    const regions = state.droppedIngredients.map(i => i.region);
    let code = 'VINITA31';
    let pName = "Witch Vinita & Wizard Amit's Dual Elixir";
    let pDesc = "A supreme union of Salem witchery and Burned Tower thunder! Grants 31% OFF your entire cauldron.";

    if (regions.includes('galar')) {
      code = 'GALARTEA';
      pName = "Polteageist's 25% High-Tea Elixir";
      pDesc = "Sweet haunted black tea leaves from Glimwood Tangle grant 25% OFF your order!";
    } else if (regions.includes('kalos')) {
      code = 'KALOSBOO';
      pName = "Super-Size Gourgeist Pumpkin Tonic";
      pDesc = "Brimming with sweet pumpkin aroma. Grants 25% OFF on checkout!";
    } else if (regions.includes('johto')) {
      code = 'AMIT31';
      pName = "Wizard Amit's Thunderstaff Hex (31% OFF)";
      pDesc = "Emits shadow sparks to strike 31% off your total!";
    }

    document.getElementById('potion-name').textContent = pName;
    document.getElementById('potion-desc').textContent = pDesc;
    document.getElementById('potion-code-text').textContent = code;
    document.getElementById('potion-code-wrap').style.display = 'flex';
    document.getElementById('potion-bottle-icon').textContent = '🧪⚡';

    state.droppedIngredients = [];
    document.getElementById('cauldron-dropped-tags').innerHTML = '<span class="empty-brew-hint">Potion consecrated! Drop more to brew anew.</span>';

    showToast(`Brew Complete: ${pName}!`, '✨');
  }, 1600);
}

function copyBrewCode() {
  const code = document.getElementById('potion-code-text').textContent;
  applyPromoCodeExplicit(code);
}

/* ==========================================================================
   10. Catch The Flying Ghost Pokémon Easter Egg
   ========================================================================== */
function spawnFlyingGhost() {
  const ghost = document.getElementById('flying-ghost');
  const ghosts = ['👻', '😈', '🎃', '☕', '⚡'];
  const emojis = document.getElementById('ghost-target-emoji');
  emojis.textContent = ghosts[Math.floor(Math.random() * ghosts.length)];

  const startY = 15 + Math.random() * 60;
  ghost.style.top = `${startY}%`;
  ghost.style.left = '-120px';
  ghost.style.transition = 'left 12s linear';

  setTimeout(() => {
    ghost.style.left = `${window.innerWidth + 100}px`;
  }, 100);
}

function catchGhostPokemon(e) {
  e.stopPropagation();
  const ghost = document.getElementById('flying-ghost');
  ghost.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
  ghost.style.transform = 'scale(2) rotate(360deg)';
  ghost.style.opacity = '0';

  audio.playGengarLaugh();
  showToast('🎉 GOTCHA! Wild Ghost caught! 25% OFF code: TRICKORTREAT awarded!', '⚡');

  state.discountRate = 0.25;
  document.getElementById('promo-code-input').value = 'TRICKORTREAT';
  updateCartDrawerUI();

  setTimeout(() => {
    ghost.style.opacity = '1';
    ghost.style.transform = 'scale(1)';
    ghost.style.left = '-150px';
  }, 800);
}

/* ==========================================================================
   11. Realm Switching Engine
   ========================================================================== */
function switchCategory(cat) {
  state.currentCategory = cat;

  const body = document.getElementById('body-app');
  body.className = `theme-${cat} region-${state.currentRegion} ${state.bloodMoon ? 'blood-moon-active' : ''} ${document.getElementById('cinematic-portal').classList.contains('portal-opened') ? '' : 'portal-locked'}`;

  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === cat);
  });

  const meta = REALM_META[cat];
  document.getElementById('hero-title').innerHTML = meta.heroTitle;
  document.getElementById('hero-subtitle').textContent = meta.heroSub;
  document.getElementById('hero-badge-text').textContent = meta.heroBadge;
  document.getElementById('hero-cta-text').textContent = meta.cta;

  document.getElementById('realm-title').textContent = meta.name;
  document.getElementById('realm-glyph').textContent = meta.glyph;
  document.getElementById('realm-desc').textContent = meta.desc;

  if (particles) particles.setTheme(cat);

  showPortalAnnouncement(`Transmuted to: ${meta.name}`);
  renderProducts();
}

function showPortalAnnouncement(msg) {
  const bar = document.getElementById('realm-announcer');
  const txt = document.getElementById('portal-msg');
  txt.textContent = msg;
  bar.style.display = 'block';
  setTimeout(() => { bar.style.display = 'none'; }, 4000);
}

function toggleBloodMoon() {
  state.bloodMoon = !state.bloodMoon;
  const body = document.getElementById('body-app');
  const moonBtn = document.getElementById('moon-toggle-btn');

  if (state.bloodMoon) {
    body.classList.add('blood-moon-active');
    moonBtn.style.color = '#ff2222';
    moonBtn.style.borderColor = '#ff2222';
    audio.playHoundoomHowl();
    triggerLightningFlashVFX();
    showToast('🌕 Blood Moon Eclipse has commenced across all 4 regions!', '🔥');
  } else {
    body.classList.remove('blood-moon-active');
    moonBtn.style.color = '';
    moonBtn.style.borderColor = '';
    showToast('Twilight calm restored to Kanto, Johto, Kalos & Galar.', '✨');
  }
}

/* ==========================================================================
   12. Product Rendering & Filtering
   ========================================================================== */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-state');
  const countBadge = document.getElementById('product-count-badge');

  let filtered = PRODUCTS_DATA.filter(item => {
    const catMatch = state.currentCategory === 'all' || item.category === state.currentCategory;
    const regionMatch = state.currentRegion === 'all' || item.region === state.currentRegion;
    const tagMatch = state.currentTag === 'all' || item.subtag === state.currentTag;
    const priceMatch = item.price <= state.maxPrice;
    const searchMatch = !state.searchQuery || 
      item.name.toLowerCase().includes(state.searchQuery) ||
      item.snippet.toLowerCase().includes(state.searchQuery) ||
      item.region.toLowerCase().includes(state.searchQuery) ||
      item.category.toLowerCase().includes(state.searchQuery);

    return catMatch && regionMatch && tagMatch && priceMatch && searchMatch;
  });

  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  countBadge.textContent = `Showing ${filtered.length} Items`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(item => {
    const isWishlisted = state.wishlist.has(item.id);
    const svgArt = generateProductSVG(item.iconType, item.accentColor);

    return `
      <article class="product-card" data-id="${item.id}">
        <div class="product-badge-wrap">
          <span class="product-badge ${item.badgeType}">${item.badge}</span>
          <span class="product-badge" style="background: rgba(0,0,0,0.6); color: #ffd700; border: 1px solid rgba(255,255,255,0.2);">
            ${item.region.toUpperCase()}
          </span>
        </div>

        <button 
          class="card-wish-btn ${isWishlisted ? 'active' : ''}" 
          onclick="toggleWishlist('${item.id}', event)"
          title="${isWishlisted ? 'Remove from Soul Vault' : 'Bind Soul to Wishlist'}"
          aria-label="Wishlist"
        >
          <i data-lucide="heart"></i>
        </button>

        <div class="product-visual" onclick="openQuickview('${item.id}')">
          <div class="product-illustration">
            ${svgArt}
          </div>
          <button class="quickview-hover-btn">
            <i data-lucide="eye"></i> Crystal Ball View
          </button>
        </div>

        <div class="product-info">
          <span class="product-cat-tag">${item.region.toUpperCase()} • ${item.category.toUpperCase()}</span>
          <h3 class="product-name" onclick="openQuickview('${item.id}')" style="cursor: pointer;">${item.name}</h3>

          <div class="product-rating">
            <span>⭐ ${item.rating.toFixed(1)}</span>
            <span class="review-count">(${item.reviews} reviews)</span>
          </div>

          <p class="product-snippet">${item.snippet}</p>

          <div class="product-meta-foot">
            <div class="price-box">
              <span class="curr-price">$${item.price.toFixed(2)}</span>
              <span class="old-price">$${item.origPrice.toFixed(2)}</span>
            </div>
            <button class="btn-add-cart" onclick="addToCart('${item.id}')">
              <span>+ Brew in Cauldron</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function resetFilters() {
  state.currentCategory = 'all';
  state.currentRegion = 'all';
  state.currentTag = 'all';
  state.searchQuery = '';
  state.maxPrice = 250;
  state.sortBy = 'featured';

  document.getElementById('product-search').value = '';
  document.getElementById('price-range').value = 250;
  document.getElementById('price-val').textContent = '$250';
  document.getElementById('sort-select').value = 'featured';

  document.querySelectorAll('#subfilter-tags .tag-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.tag === 'all');
  });

  document.querySelectorAll('.region-gate-card').forEach(c => {
    c.classList.toggle('active', c.dataset.region === 'all');
  });

  switchCategory('all');
}

/* ==========================================================================
   13. Quickview Modal
   ========================================================================== */
function openQuickview(id) {
  const item = PRODUCTS_DATA.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById('quickview-modal');
  const body = document.getElementById('modal-product-body');
  const svgArt = generateProductSVG(item.iconType, item.accentColor);

  body.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-product-img">
        ${svgArt}
      </div>
      <div class="modal-product-details">
        <span class="product-cat-tag">Origin: ${item.region.toUpperCase()} • Realm of ${item.category.toUpperCase()}</span>
        <h2>${item.name}</h2>
        <div class="product-rating" style="margin-bottom: 8px;">
          <span>⭐ ${item.rating.toFixed(1)}</span>
          <span class="review-count">(${item.reviews} satisfied trainers)</span>
        </div>
        <div class="price-box" style="margin-bottom: 14px;">
          <span class="curr-price" style="font-size: 1.6rem;">$${item.price.toFixed(2)}</span>
          <span class="old-price">$${item.origPrice.toFixed(2)}</span>
        </div>
        <p class="modal-lore">📜 Lore: "${item.lore}"</p>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">${item.snippet}</p>

        <div class="modal-size-select">
          <label>Select Size / Dimension:</label>
          <div class="size-options">
            ${item.sizes.map((s, idx) => `
              <span class="size-pill ${idx === 0 ? 'active' : ''}" onclick="selectModalSize(this)">${s}</span>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 12px; margin-top: 24px;">
          <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${item.id}'); closeQuickview();">
            <span>+ Brew in Cauldron 🍲</span>
          </button>
          <button class="btn btn-secondary" onclick="toggleWishlist('${item.id}'); closeQuickview();">
            <span>🖤 Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  audio.playGourgeistGiggle();
}

function selectModalSize(pill) {
  document.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
}

function closeQuickview() {
  document.getElementById('quickview-modal').classList.remove('open');
}

/* ==========================================================================
   14. Shopping Cauldron Cart & Wishlist
   ========================================================================== */
function addToCart(id) {
  const item = PRODUCTS_DATA.find(p => p.id === id);
  if (!item) return;

  const existing = state.cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      iconType: item.iconType,
      accentColor: item.accentColor,
      qty: 1
    });
  }

  audio.playCauldronBubbles();
  showToast(`Brewed "${item.name}" into Cauldron!`, '🍲');

  saveStoredData();
  updateCartDrawerUI();
}

function updateCartQty(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveStoredData();
  updateCartDrawerUI();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  saveStoredData();
  updateCartDrawerUI();
  showToast('Item banished from Cauldron.', '🕸️');
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  saveStoredData();
  updateCartDrawerUI();
  showToast('Cauldron wiped clean!', '✨');
}

function updateCartDrawerUI() {
  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty');
  const footer = document.getElementById('cart-footer');
  const headerTotal = document.getElementById('header-cart-total');
  const badgeCount = document.getElementById('cart-count');
  const drawerSub = document.getElementById('cart-drawer-sub');

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  badgeCount.textContent = totalItems;
  drawerSub.textContent = `${totalItems} cursed curios collected`;

  if (state.cart.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'flex';
    footer.style.display = 'none';
    headerTotal.textContent = '$0.00';
    updateShippingMeter(0);
    return;
  }

  emptyState.style.display = 'none';
  footer.style.display = 'block';

  container.innerHTML = state.cart.map(item => {
    const svg = generateProductSVG(item.iconType, item.accentColor);
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          ${svg}
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')" title="Banish Item">&times;</button>
      </div>
    `;
  }).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = subtotal * state.discountRate;
  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 7.99;
  const finalTotal = subtotal - discount + shipping;

  document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  headerTotal.textContent = `$${finalTotal.toFixed(2)}`;

  const discountRow = document.getElementById('row-discount');
  if (state.discountRate > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('discount-pct').textContent = `${(state.discountRate * 100).toFixed(0)}%`;
    document.getElementById('cart-discount').textContent = `-$${discount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }

  document.getElementById('cart-shipping').textContent = shipping === 0 ? 'FREE (Haunter Express)' : `$${shipping.toFixed(2)}`;
  document.getElementById('cart-total').textContent = `$${finalTotal.toFixed(2)}`;

  updateShippingMeter(subtotal);
}

function updateShippingMeter(subtotal) {
  const goal = 75;
  const fill = document.getElementById('meter-fill');
  const text = document.getElementById('meter-text');

  if (subtotal >= goal) {
    fill.style.width = '100%';
    text.innerHTML = '🎉 <strong>Haunter Express Delivery UNLOCKED across all regions!</strong>';
  } else {
    const diff = (goal - subtotal).toFixed(2);
    const pct = Math.min(100, (subtotal / goal) * 100);
    fill.style.width = `${pct}%`;
    text.textContent = `Add $${diff} more for Free Haunter Express Delivery!`;
  }
}

function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  const code = input.value.trim().toUpperCase();
  const msg = document.getElementById('promo-msg');

  if (code === 'VINITA31' || code === 'AMIT31' || code === 'SPOOKY31') {
    state.discountRate = 0.31;
    msg.style.color = '#39ff14';
    msg.textContent = '✨ 31% Vinita & Amit Archmage discount applied!';
    audio.playAmitThunderStaff();
  } else if (code === 'TRICKORTREAT' || code === 'GALARTEA' || code === 'KALOSBOO') {
    state.discountRate = 0.25;
    msg.style.color = '#ffaa00';
    msg.textContent = '🍬 25% Treat discount & Rare Candy keychain!';
    audio.playPolteageistWhistle();
  } else if (code === 'GENGAR' || code === 'BURNEDTOWER') {
    state.discountRate = 0.20;
    msg.style.color = '#b545d6';
    msg.textContent = '😈 20% Regional Tower discount applied!';
    audio.playGengarLaugh();
  } else {
    msg.style.color = '#ff3366';
    msg.textContent = '💀 Unknown incantation! Try VINITA31, AMIT31 or brew in the cauldron.';
    return;
  }

  updateCartDrawerUI();
}

function applyPromoCodeExplicit(code) {
  document.getElementById('promo-code-input').value = code;
  applyPromoCode();
  toggleCartDrawer();
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  drawer.classList.toggle('open');
  if (drawer.classList.contains('open')) {
    audio.playCauldronBubbles();
  }
}

function toggleWishlist(id, event) {
  if (event) event.stopPropagation();

  const item = PRODUCTS_DATA.find(p => p.id === id);
  if (!item) return;

  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    showToast(`Unbound "${item.name}" from your soul vault.`, '🥀');
  } else {
    state.wishlist.add(id);
    showToast(`Bound "${item.name}" to your soul vault!`, '🖤');
    audio.playGourgeistGiggle();
  }

  saveStoredData();
  renderProducts();
  updateWishlistUI();
}

function updateWishlistUI() {
  const countBadge = document.getElementById('wishlist-count');
  countBadge.textContent = state.wishlist.size;

  const container = document.getElementById('wishlist-items-container');
  const emptyState = document.getElementById('wishlist-empty');
  const sub = document.getElementById('wishlist-drawer-sub');

  sub.textContent = `${state.wishlist.size} saved artifacts`;

  if (state.wishlist.size === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'flex';
    return;
  }

  emptyState.style.display = 'none';
  const wishItems = PRODUCTS_DATA.filter(p => state.wishlist.has(p.id));

  container.innerHTML = wishItems.map(item => {
    const svg = generateProductSVG(item.iconType, item.accentColor);
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          ${svg}
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        </div>
        <button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.75rem;" onclick="addToCart('${item.id}')">
          Brew
        </button>
        <button class="cart-remove-btn" onclick="toggleWishlist('${item.id}')">&times;</button>
      </div>
    `;
  }).join('');
}

function toggleWishlistDrawer() {
  document.getElementById('wishlist-drawer').classList.toggle('open');
}

/* ==========================================================================
   15. Wheel of Doom & Checkout Flow
   ========================================================================== */
function openWheelModal() {
  document.getElementById('wheel-modal').classList.add('open');
  audio.playHoundoomHowl();
}

function closeWheelModal() {
  document.getElementById('wheel-modal').classList.remove('open');
}

let isSpinning = false;
function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  const disc = document.getElementById('wheel-disc');
  const resultDiv = document.getElementById('wheel-result');
  const spinBtn = document.getElementById('spin-btn');

  spinBtn.disabled = true;
  resultDiv.textContent = '🌀 The Pokémon spirits of all 4 regions are swirling...';

  const randomRounds = 5 + Math.floor(Math.random() * 4);
  const randomSlice = Math.floor(Math.random() * 6);
  const degrees = (randomRounds * 360) + (randomSlice * 60) + 30;

  disc.style.transform = `rotate(${degrees}deg)`;
  audio.playPolteageistWhistle();

  setTimeout(() => {
    isSpinning = false;
    spinBtn.disabled = false;

    const outcomes = [
      { text: "🎉 Witch Vinita's 31% OFF! Code: VINITA31", code: 'VINITA31', rate: 0.31 },
      { text: "⚡ WIZARD AMIT'S BOON! 31% OFF Code: AMIT31", code: 'AMIT31', rate: 0.31 },
      { text: "🔥 Blood Moon 25% OFF! Code: TRICKORTREAT", code: 'TRICKORTREAT', rate: 0.25 },
      { text: "🍬 RARE CANDY TREAT! 25% OFF with code: TRICKORTREAT", code: 'TRICKORTREAT', rate: 0.25 },
      { text: "☕ GALAR POLTEAGEIST TEA: 25% OFF code GALARTEA applied!", code: 'GALARTEA', rate: 0.25 },
      { text: "🎃 KALOS GOURGEIST BLESSING: Take 25% OFF with code: KALOSBOO", code: 'KALOSBOO', rate: 0.25 }
    ];

    const won = outcomes[randomSlice % outcomes.length];
    resultDiv.innerHTML = won.text;
    state.discountRate = won.rate;
    document.getElementById('promo-code-input').value = won.code;
    updateCartDrawerUI();
    audio.playVinitaSpell();
    audio.playAmitThunderStaff();
    triggerLightningFlashVFX();
    showToast(`Wheel Result: ${won.text}`, '🎡');
  }, 4100);
}

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your Cauldron is empty! Add Pokémon treasures first.', '⚠️');
    return;
  }
  document.getElementById('cart-drawer').classList.remove('open');
  const modal = document.getElementById('checkout-modal');
  modal.classList.add('open');

  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = subtotal * state.discountRate;
  const shipping = subtotal >= 75 ? 0 : 7.99;
  const total = subtotal - discount + shipping;

  document.getElementById('ritual-count').textContent = `${count} treasures`;
  document.getElementById('ritual-total').textContent = `$${total.toFixed(2)}`;

  document.getElementById('checkout-form').style.display = 'block';
  document.getElementById('order-success-screen').style.display = 'none';
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.remove('open');
}

function processRitualOrder(e) {
  e.preventDefault();
  const btn = document.getElementById('order-submit-btn');
  btn.disabled = true;
  btn.innerHTML = '<span>Summoning Haunter Delivery... 🦇</span>';

  audio.playHoundoomHowl();
  triggerLightningFlashVFX();

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<span>Summon Haunter Delivery 🎃</span>';

    document.getElementById('checkout-form').style.display = 'none';
    const successScreen = document.getElementById('order-success-screen');
    successScreen.style.display = 'block';

    const orderId = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('success-order-id').textContent = orderId;

    audio.playVinitaSpell();
    audio.playAmitThunderStaff();
    state.cart = [];
    saveStoredData();
    updateCartDrawerUI();
  }, 1600);
}

function resetStoreAfterOrder() {
  scrollToProducts();
  showToast('Blessings upon your journey from Vinita & Amit! Happy PokéWeen 🎃', '🍬');
}

function showToast(message, icon = '🎃') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

function scrollToProducts() {
  const sec = document.getElementById('products-section');
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
}

function subscribeCoven() {
  const emailInput = document.getElementById('coven-email');
  const status = document.getElementById('coven-status');
  if (emailInput.value && emailInput.value.includes('@')) {
    status.textContent = '✨ Vinita & Amit dispatched an arcane Grimoire scroll to your inbox!';
    emailInput.value = '';
    audio.playVinitaSpell();
  } else {
    status.textContent = '⚠️ Please enter a valid spectral email!';
    status.style.color = '#ff3366';
  }
}

function saveStoredData() {
  try {
    localStorage.setItem('pokeween_cart', JSON.stringify(state.cart));
    localStorage.setItem('pokeween_wishlist', JSON.stringify([...state.wishlist]));
  } catch (err) {
    console.error('Storage error:', err);
  }
}

function loadStoredData() {
  try {
    const storedCart = localStorage.getItem('pokeween_cart');
    const storedWishlist = localStorage.getItem('pokeween_wishlist');
    if (storedCart) state.cart = JSON.parse(storedCart);
    if (storedWishlist) state.wishlist = new Set(JSON.parse(storedWishlist));
  } catch (err) {
    console.error('Load storage error:', err);
  }
}
