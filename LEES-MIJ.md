# JAS-Rijschool Website

Dit document helpt om makkelijk wijzigingen te maken.

---

## Structuur

```
src/
├── config/           ← HIER WIJZIG JE CONTENT & PRIJZEN
│   ├── site.ts       → Contactgegevens, adres, social media, statistieken
│   ├── packages.ts   → Alle pakketten en prijzen
│   └── content.ts    → Teksten, reviews, FAQ, navigatie
│
├── components/       ← Alle secties van de website
│   ├── Header.tsx    → Navigatiebalk
│   ├── Hero.tsx      → Eerste sectie met foto's en CTA
│   ├── Services.tsx  → "Onze Diensten" sectie
│   ├── HowItWorks.tsx→ "Zo Werkt Het" sectie
│   ├── Testimonials.tsx → Google Reviews
│   ├── Packages.tsx  → Pakketten en prijzen
│   ├── Contact.tsx   → Contactformulier + FAQ + kaart
│   ├── Footer.tsx    → Footer met links
│   └── (utilities)   → FloatingWhatsApp, CookieConsent, etc.
│
├── pages/            ← Pagina's
│   └── Index.tsx     → Hoofdpagina (assembleert alle secties)
│
└── assets/           ← Afbeeldingen
    └── student-passed-*.jpg → Foto's van geslaagde leerlingen
```

---

## VEELVOORKOMENDE WIJZIGINGEN

### 1. Contactgegevens wijzigen

**Bestand:** `src/config/site.ts`

```ts
export const siteConfig = {
  phone: '06 44792093',        // Telefoonnummer (display)
  phoneLink: '+31644792093',   // Telefoonnummer (klikbaar)
  whatsapp: '31644792093',     // WhatsApp (zonder +)
  email: 'jasrijschool@gmail.com',

  address: {
    street: 'Reggestraat 38',
    postcode: '1972 WL',
    city: 'IJmuiden',
  },
};
```

### 2. Prijzen wijzigen

**Bestand:** `src/config/packages.ts`

```ts
export const packages = [
  {
    name: 'Pakket A',
    price: '€1100,-',          // ← Wijzig hier de prijs
    features: ['20 rijlessen*', ...],
    popular: false,            // ← Zet op true voor "Meest Gekozen" badge
  },
  // ... meer pakketten
];

export const extraOptions = [
  { name: 'Rijles 90 min', price: '€95,-' },
  // ...
];
```

### 3. Teksten en reviews wijzigen

**Bestand:** `src/config/content.ts`

```ts
// Reviews toevoegen/wijzigen
export const testimonials = [
  {
    text: "Ik heb goede lessen gehad van Alex...",
    author: "Jenz Groen",
    rating: 5,
  },
  // Voeg hier meer reviews toe
];

// FAQ vragen
export const faqs = [
  {
    question: 'Hoeveel rijlessen heb ik nodig?',
    answer: 'Dit verschilt per persoon...',
  },
  // Voeg hier meer vragen toe
];
```

### 4. Foto's van geslaagde leerlingen

**Map:** `src/assets/`

1. Voeg nieuwe foto toe: `student-passed-7.jpg` (etc.)
2. Open `src/components/Hero.tsx`
3. Voeg de import toe bovenaan:
   ```ts
   import studentPassed7 from '@/assets/student-passed-7.jpg';
   ```
4. Voeg toe aan de array:
   ```ts
   const heroImages = [..., studentPassed7];
   ```

---

## INSTELLINGEN

### Cookie banner timing

**Bestand:** `src/components/CookieConsent.tsx`

- Regel ~13: `setTimeout(() => setIsVisible(true), 1500)` → 1500ms = 1.5 seconde vertraging

### Proefles popup timing

**Bestand:** `src/components/TimedCTA.tsx`

- Regel ~18: `240000` = 4 minuten (in milliseconden)
- Wijzig naar bijv. `60000` voor 1 minuut

### WhatsApp knop

**Bestand:** `src/components/FloatingWhatsApp.tsx`

- Gebruikt automatisch het nummer uit `src/config/site.ts`

---

## DATABASE (Supabase/Lovable Cloud)

Inzendingen van het contactformulier worden opgeslagen in de database.

**Tabel:** `package_signups`

- `name` - Naam van de bezoeker
- `email` - E-mailadres
- `phone` - Telefoonnummer (optioneel)
- `message` - Bericht
- `package_name` - Wordt gebruikt voor pakket-aanmeldingen

---

## STYLING

De website gebruikt een consistent kleurenpalet gedefinieerd in `src/index.css`:

- **Primary (blauw)**: Hoofdkleur voor tekst en accenten
- **Secondary (paars)**: Secundaire accenten
- **Accent (oranje)**: CTA knoppen en highlights
- **Success (groen)**: Succes-indicaties

---

## HULP NODIG?

1. **Kleine tekstwijzigingen**: Wijzig in de `/config/` bestanden
2. **Visuele wijzigingen**: Pas de component aan in `/components/`
3. **Nieuwe pagina**: Maak aan in `/pages/` en voeg toe aan `App.tsx`

---

_Laatst bijgewerkt: Januari 2026_
