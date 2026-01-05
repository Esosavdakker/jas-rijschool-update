// Pakketten en prijzen - Wijzig hier alle pakketinformatie

export const packages = [
  {
    id: 'a',
    name: 'Pakket A',
    price: '€1100,-',
    features: ['20 rijlessen*', 'Snel beginnen', 'Vaste instructeur', 'Nieuwe lesauto', 'Vanaf 16,5 jaar'],
    popular: false,
  },
  {
    id: 'b',
    name: 'Pakket B',
    price: '€1900,-',
    features: ['30 rijlessen*', 'Snel beginnen', 'Vaste instructeur', 'Nieuwe lesauto', 'Vanaf 16,5 jaar', 'Praktijkexamen CBR'],
    popular: false,
  },
  {
    id: 'c',
    name: 'Pakket C',
    price: '€2025,-',
    features: ['25 rijlessen*', 'Snel beginnen', 'Vaste instructeur', 'Nieuwe lesauto', 'Vanaf 16,5 jaar', 'Praktijkexamen CBR', '1x herexamen'],
    popular: false,
  },
  {
    id: 'd',
    name: 'Pakket D',
    price: '€2625,-',
    features: ['40 rijlessen*', 'Snel beginnen', 'Vaste instructeur', 'Nieuwe lesauto', 'Vanaf 16,5 jaar', 'Praktijkexamen CBR', '1x herexamen'],
    popular: true,
  },
];

export const extraOptions = [
  { name: 'Rijles 90 min', price: '€95,-' },
  { name: 'Los rijexamen CBR', price: '€235,-' },
  { name: 'TTT toets', price: '€235,-' },
  { name: 'Faalangst examen', price: '€335,-' },
];

export const followUpPackages = [
  { name: 'Pakket 1 - 5 lessen', price: '€345,-' },
  { name: 'Pakket 2 - 10 lessen', price: '€650,-' },
  { name: 'Pakket 3 - 15 lessen', price: '€900,-' },
];
