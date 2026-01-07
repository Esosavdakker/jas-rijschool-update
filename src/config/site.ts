/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                    WEBSITE CONFIGURATIE                           ║
 * ║  Wijzig hier alle algemene gegevens van de rijschool              ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

export const siteConfig = {
  // ─────────────────────────────────────────────────────────────────────
  // BEDRIJFSGEGEVENS
  // ─────────────────────────────────────────────────────────────────────
  name: 'JAS-Rijschool',
  tagline: 'Jouw partner voor een succesvolle rijopleiding',

  // ─────────────────────────────────────────────────────────────────────
  // CONTACTGEGEVENS
  // Let op: whatsapp nummer is ZONDER + teken
  // ─────────────────────────────────────────────────────────────────────
  phone: '06 44792093',           // Weergave op website
  phoneLink: '+31644792093',      // Klikbare link (met landcode)
  whatsapp: '31644792093',        // WhatsApp nummer (zonder +)
  email: 'jasrijschool@gmail.com',

  // ─────────────────────────────────────────────────────────────────────
  // ADRESGEGEVENS
  // ─────────────────────────────────────────────────────────────────────
  address: {
    street: 'Reggestraat 38',
    postcode: '1972 WL',
    city: 'IJmuiden',
    full: 'Reggestraat 38, 1972 WL IJmuiden',
  },

  // ─────────────────────────────────────────────────────────────────────
  // SOCIAL MEDIA LINKS
  // Kopieer de volledige URL van je social media pagina
  // ─────────────────────────────────────────────────────────────────────
  social: {
    facebook: 'https://www.facebook.com/share/17ovAkVjpv/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/jas_rijschool?igsh=MWdvbTR5NDlxeXdkMg%3D%3D&utm_source=qr',
    tiktok: 'https://www.tiktok.com/@jas.rijschool?_r=1&_t=ZG-92MX33iCsrp',
  },

  // ─────────────────────────────────────────────────────────────────────
  // STATISTIEKEN (worden getoond op de website)
  // Pas deze aan wanneer je nieuwe mijlpalen bereikt!
  // ─────────────────────────────────────────────────────────────────────
  stats: {
    passedStudents: '100+',   // Aantal geslaagde leerlingen
    googleRating: '4.9',      // Google review score
    yearsExperience: '5+',    // Jaren ervaring
    reviewCount: '50+',       // Aantal Google reviews
  },
};
