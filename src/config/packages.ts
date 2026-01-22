/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                    PAKKETTEN & PRIJZEN                            ║
 * ║  Wijzig hier alle pakketinformatie en prijzen                     ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────────────────────────────
// HOOFDPAKKETTEN
// Tip: Zet 'popular: true' bij het pakket dat je wilt uitlichten
// ─────────────────────────────────────────────────────────────────────
export const packages = [
  {
    id: 'a',
    name: 'Pakket A',
    price: '€1100,-',
    features: [
      '20 rijlessen*',
      'Snel beginnen',
      'Vaste instructeur',
      'Nieuwe lesauto',
      'Vanaf 16,5 jaar',
    ],
    popular: false,
  },
  {
    id: 'b',
    name: 'Pakket B',
    price: '€1900,-',
    features: [
      '30 rijlessen*',
      'Snel beginnen',
      'Vaste instructeur',
      'Nieuwe lesauto',
      'Vanaf 16,5 jaar',
      'Praktijkexamen CBR',
    ],
    popular: false,
  },
  {
    id: 'c',
    name: 'Pakket C',
    price: '€2025,-',
    features: [
      '25 rijlessen*',
      'Snel beginnen',
      'Vaste instructeur',
      'Nieuwe lesauto',
      'Vanaf 16,5 jaar',
      'Praktijkexamen CBR',
      '1x herexamen',
    ],
    popular: true, // ← Dit pakket krijgt de "Meest Gekozen" badge
  },
  {
    id: 'd',
    name: 'Pakket D',
    price: '€2625,-',
    features: [
      '40 rijlessen*',
      'Snel beginnen',
      'Vaste instructeur',
      'Nieuwe lesauto',
      'Vanaf 16,5 jaar',
      'Praktijkexamen CBR',
      '1x herexamen',
    ],
    popular: false,
  },
];

// ─────────────────────────────────────────────────────────────────────
// LOSSE OPTIES
// Extra diensten die apart geboekt kunnen worden
// ─────────────────────────────────────────────────────────────────────
export const extraOptions = [
  { name: 'Rijles 50 min', price: '€58,-' },
  { name: 'Rijles 100 min', price: '€116,-' },
  { name: 'Los rijexamen CBR', price: '€295,-' },
  { name: 'TTT toets', price: '€265,-' },
  { name: 'Faalangst examen', price: '€380,-' },
  { name: 'BNOR examen', price: '€355,-' },
];

// ─────────────────────────────────────────────────────────────────────
// VERVOLGPAKKETTEN
// Voor leerlingen die extra lessen nodig hebben na hun eerste pakket
// ─────────────────────────────────────────────────────────────────────
export const followUpPackages = [
  { name: 'Pakket 1 - 6 lessen', price: '€345,-' },
  { name: 'Pakket 2 - 10 lessen', price: '€570,-' },
  { name: 'Pakket 3 - 16 lessen', price: '€900,-' },
];
