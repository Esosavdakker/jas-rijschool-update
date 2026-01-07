/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                    WEBSITE CONTENT                                ║
 * ║  Wijzig hier alle teksten, reviews en FAQ                         ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────────────────────────────
// NAVIGATIE
// De menu-items bovenaan de pagina
// href moet overeenkomen met de section id (bijv. #contact)
// ─────────────────────────────────────────────────────────────────────
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Diensten', href: '#services' },
  { label: 'Pakketten', href: '#packages' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

// ─────────────────────────────────────────────────────────────────────
// DIENSTEN
// De 3 kaartjes in de "Onze Diensten" sectie
// Beschikbare icons: Car, HeartHandshake, Award, PhoneCall, GraduationCap, PartyPopper
// ─────────────────────────────────────────────────────────────────────
export const services = [
  {
    title: 'Rijlessen',
    description: 'Of je nu net begint of al wat ervaring hebt — we bouwen samen aan jouw rijvaardigheden. Op jouw tempo, zonder stress.',
    icon: 'Car',
    color: 'from-secondary to-blue-400',
  },
  {
    title: 'Faalangst? Geen probleem',
    description: 'Zenuwachtig voor het examen? Alex snapt dat als geen ander. Rustige begeleiding, geduld en een veilige sfeer. Je kunt het.',
    icon: 'HeartHandshake',
    color: 'from-accent to-orange-400',
  },
  {
    title: 'Examen? Wij regelen het',
    description: 'Van aanmelding tot de rit naar het CBR — wij zorgen dat je relaxed op komt dagen. In onze auto, met vertrouwen.',
    icon: 'Award',
    color: 'from-primary to-blue-600',
  },
];

// ─────────────────────────────────────────────────────────────────────
// ZO WERKT HET
// De 4 stappen in het proces
// ─────────────────────────────────────────────────────────────────────
export const howItWorksSteps = [
  {
    number: '01',
    title: 'Even bellen of appen',
    description: 'Stuur een berichtje via WhatsApp of bel even. We plannen een proefles in en kijken wat jij nodig hebt.',
    icon: 'PhoneCall',
    color: 'from-secondary to-blue-400',
  },
  {
    number: '02',
    title: 'Lekker leren rijden',
    description: 'Geen standaard lessen, maar afgestemd op jou. Waar jij moeite mee hebt, daar focussen we op. Simpel.',
    icon: 'Car',
    color: 'from-accent to-orange-400',
  },
  {
    number: '03',
    title: 'Klaar voor het examen',
    description: 'We oefenen de routes die het CBR gebruikt en zorgen dat je niks kan verrassen. Je gaat goed voorbereid.',
    icon: 'GraduationCap',
    color: 'from-primary to-blue-600',
  },
  {
    number: '04',
    title: 'Yes! Geslaagd 🎉',
    description: 'En dan is het zover: jouw rijbewijs. Zelfstandig op pad, wanneer jij wilt. Gefeliciteerd!',
    icon: 'PartyPopper',
    color: 'from-success to-emerald-400',
  },
];

// ─────────────────────────────────────────────────────────────────────
// GOOGLE REVIEWS
// Voeg hier nieuwe reviews toe
// Rating is altijd een getal van 1-5
// ─────────────────────────────────────────────────────────────────────
export const testimonials = [
  {
    text: "Ik heb goede lessen gehad van Alex. Een superfijne instructeur die duidelijk uitleg geeft en met wie het altijd gezellig is. Bedankt!",
    author: "Jenz Groen",
    rating: 5,
  },
  {
    text: "Door zijn rustige houding en duidelijke instructies in 1 keer geslaagd! Bedankt Alex!",
    author: "N",
    rating: 5,
  },
  {
    text: "Eigenlijk de beste leraar!!!!",
    author: "Vlad Ivanov",
    rating: 5,
  },
  {
    text: "Ik heb mijn rijbewijs in één keer gehaald! En bedankt Alex voor je geduldige, rustige en duidelijke instructies!! Superblij!!",
    author: "Yeny Isimtekin",
    rating: 5,
  },
  {
    text: "Supervriendelijk! En heel flexibel met reistijden.",
    author: "Imanuel Orlando",
    rating: 5,
  },
  {
    text: "Zeer rustige instructeur met veel geduld. Ik heb in één keer mijn rijbewijs gehaald.",
    author: "Zahra Rana",
    rating: 5,
  },
  {
    text: "Het was de beste ervaring ooit en de rustige manier van lesgeven was erg behulpzaam bij het examen.",
    author: "Abdul Kayyum Abdulla",
    rating: 5,
  },
  // ⬇️ VOEG HIER NIEUWE REVIEWS TOE ⬇️
  // {
  //   text: "Je review tekst hier...",
  //   author: "Naam van de reviewer",
  //   rating: 5,
  // },
];

// ─────────────────────────────────────────────────────────────────────
// VEELGESTELDE VRAGEN (FAQ)
// Deze verschijnen onderaan de contactpagina
// ─────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: 'Hoeveel lessen heb ik nodig?',
    answer: 'Dat is voor iedereen anders. De meeste leerlingen hebben zo\'n 30-40 lessen nodig, maar bij de proefles schatten we dat samen in. Geen verrassingen achteraf.',
  },
  {
    question: 'Wat kost een les?',
    answer: 'Een losse les is €55. Maar eerlijk? Met een pakket ben je voordeliger uit. Hoe meer lessen, hoe meer korting.',
  },
  {
    question: 'Hoe lang duurt een les?',
    answer: '60 minuten. We halen je thuis op en brengen je weer terug. Makkelijk toch?',
  },
  {
    question: 'Kan ik in mijn eigen auto lessen?',
    answer: 'Nee, je rijdt in onze lesauto. Die heeft dubbele bediening, dus je bent altijd veilig — ook als het even spannend wordt.',
  },
  {
    question: 'Ik ben zenuwachtig, is dat erg?',
    answer: 'Helemaal niet! Alex heeft veel ervaring met leerlingen die stress of faalangst hebben. Rustige uitleg, geduld, en we gaan pas verder als jij er klaar voor bent.',
  },
  {
    question: 'Wanneer kan ik beginnen?',
    answer: 'Meestal binnen een week na aanmelding. Stuur even een berichtje en we plannen het in.',
  },
  {
    question: 'Regelen jullie het examen ook?',
    answer: 'Jazeker! Wij melden je aan bij het CBR en brengen je met de lesauto. Jij hoeft alleen maar op te komen dagen.',
  },
  {
    question: 'Waar geven jullie les?',
    answer: 'In IJmuiden, Haarlem, Velsen en omgeving. Twijfel je of we bij jou in de buurt komen? Vraag het even!',
  },
  // ⬇️ VOEG HIER NIEUWE VRAGEN TOE ⬇️
  // {
  //   question: 'Je vraag hier?',
  //   answer: 'Het antwoord hier.',
  // },
];
