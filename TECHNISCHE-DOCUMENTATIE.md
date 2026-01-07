# Technische Documentatie JAS-Rijschool

Dit document legt uit hoe de website technisch werkt. Handig voor Alex en Jasper om de code te begrijpen, zelfs zonder veel React of Tailwind ervaring.

---

## 📚 INHOUD
1. [React Basics](#-react-basics)
2. [Tailwind CSS Basics](#-tailwind-css-basics)
3. [Bestandsstructuur](#-bestandsstructuur-uitgelegd)
4. [Components uitgelegd](#-components-uitgelegd)
5. [Animaties (Framer Motion)](#-animaties-framer-motion)
6. [Tips voor wijzigingen](#-tips-voor-wijzigingen)

---

## 🔵 REACT BASICS

### Wat is React?
React is een JavaScript-bibliotheek voor het bouwen van websites. In plaats van één grote HTML-pagina, splits je alles op in **"components"** (bouwblokken).

### Components
Een component is een herbruikbaar stukje van de website. Denk aan LEGO-blokjes:

```tsx
// Dit is een simpele component
const MijnKnop = () => {
  return <button>Klik mij</button>;
};
```

**In onze website:**
- `Header.tsx` = de navigatiebalk bovenaan
- `Hero.tsx` = het eerste grote gedeelte met foto's
- `Packages.tsx` = de pakketten sectie
- etc.

### Hoe herken je een component?

```tsx
// 1. Het begint met een functie (meestal met "const")
const Header = () => {
  // 2. Het "return" deel is wat je op de pagina ziet
  return (
    <header>
      <h1>JAS-Rijschool</h1>
    </header>
  );
};

// 3. Het wordt geëxporteerd zodat andere bestanden het kunnen gebruiken
export default Header;
```

### JSX: HTML in JavaScript

React gebruikt **JSX** - dat lijkt op HTML maar zit IN JavaScript:

```tsx
// Dit is JSX (let op: className i.p.v. class!)
<div className="container">
  <h1>Welkom</h1>
  <p>Dit is een paragraaf</p>
</div>
```

**Belangrijk verschil met HTML:**
- `class` wordt `className`
- Alle tags moeten gesloten worden: `<img />` i.p.v. `<img>`
- JavaScript tussen `{ }` accolades

### useState: Variabelen die kunnen veranderen

```tsx
import { useState } from 'react';

const Teller = () => {
  // [huidigeWaarde, functieOmTeVeranderen] = useState(startwaarde)
  const [aantal, setAantal] = useState(0);
  
  return (
    <button onClick={() => setAantal(aantal + 1)}>
      Geklikt: {aantal} keer
    </button>
  );
};
```

**In onze website (Hero.tsx):**
```tsx
const [currentSlide, setCurrentSlide] = useState(0);
// currentSlide = welke foto nu zichtbaar is (0, 1, 2, etc.)
// setCurrentSlide = functie om naar andere foto te gaan
```

### useEffect: Doe iets als de pagina laadt

```tsx
import { useEffect } from 'react';

useEffect(() => {
  // Dit draait als de pagina laadt
  console.log('Pagina is geladen!');
  
  // Dit draait als de pagina sluit (optioneel)
  return () => {
    console.log('Pagina wordt gesloten');
  };
}, []); // Lege array = alleen bij eerste keer laden
```

**In onze website (Hero.tsx):**
```tsx
useEffect(() => {
  // Elke 5 seconden naar volgende foto
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, 5000);
  
  // Stop de timer als component weg gaat
  return () => clearInterval(timer);
}, []);
```

### Props: Gegevens doorgeven aan components

```tsx
// Component die een naam accepteert
const Groet = ({ naam }) => {
  return <h1>Hallo {naam}!</h1>;
};

// Gebruik
<Groet naam="Alex" />     // Toont: Hallo Alex!
<Groet naam="Jasper" />   // Toont: Hallo Jasper!
```

### Imports en Exports

```tsx
// IMPORTEREN: Haal iets op uit een ander bestand
import { Button } from '@/components/ui/button';  // Specifieke export
import Header from '@/components/Header';          // Default export
import studentPassed1 from '@/assets/student-passed-1.jpg'; // Afbeelding

// EXPORTEREN: Maak beschikbaar voor andere bestanden
export const siteConfig = { ... };  // Named export
export default Header;               // Default export
```

**Het `@/` pad:**
- `@/` is een snelkoppeling naar de `src/` map
- `@/components/Header` = `src/components/Header`
- Makkelijker dan `../../components/Header`

---

## 🎨 TAILWIND CSS BASICS

### Wat is Tailwind?
Tailwind is een CSS-framework waarbij je styling direct in je HTML/JSX schrijft met **class names**.

### Hoe werkt het?
In plaats van CSS te schrijven:
```css
/* Traditionele CSS */
.mijn-box {
  padding: 16px;
  background-color: blue;
  color: white;
  border-radius: 8px;
}
```

Schrijf je classes direct:
```tsx
{/* Tailwind CSS */}
<div className="p-4 bg-blue-500 text-white rounded-lg">
  Inhoud
</div>
```

### Veelgebruikte Tailwind Classes

#### Spacing (Ruimte)
| Class | Betekenis | Pixels |
|-------|-----------|--------|
| `p-4` | padding (alle kanten) | 16px |
| `px-4` | padding links/rechts | 16px |
| `py-4` | padding boven/onder | 16px |
| `pt-4` | padding-top | 16px |
| `m-4` | margin (alle kanten) | 16px |
| `mx-auto` | margin links/rechts auto (centreren) | - |
| `gap-4` | ruimte tussen items (flexbox/grid) | 16px |

**Schaal:** 1 = 4px, 2 = 8px, 4 = 16px, 6 = 24px, 8 = 32px, etc.

#### Kleuren
| Class | Betekenis |
|-------|-----------|
| `text-primary` | tekstkleur = primary (blauw) |
| `text-white` | witte tekst |
| `text-accent` | accent kleur (oranje) |
| `bg-primary` | achtergrond = primary |
| `bg-white/90` | wit met 90% opacity |

**Onze kleuren (gedefinieerd in index.css):**
- `primary` = donkerblauw
- `secondary` = paars
- `accent` = oranje
- `muted` = lichtgrijs

#### Layout
| Class | Betekenis |
|-------|-----------|
| `flex` | display: flex |
| `flex-col` | flex-direction: column |
| `items-center` | verticaal centreren |
| `justify-between` | ruimte tussen items |
| `grid` | display: grid |
| `grid-cols-3` | 3 kolommen |

#### Responsive Design
Tailwind gebruikt **breakpoints** voor verschillende schermgroottes:

| Prefix | Schermgrootte |
|--------|---------------|
| (geen) | mobiel (standaard) |
| `sm:` | vanaf 640px |
| `md:` | vanaf 768px (tablet) |
| `lg:` | vanaf 1024px (laptop) |
| `xl:` | vanaf 1280px (desktop) |

**Voorbeeld uit onze website:**
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  {/* 
    text-4xl = groot op mobiel
    md:text-5xl = groter op tablet
    lg:text-6xl = nog groter op desktop
  */}
</h1>
```

#### Andere handige classes
| Class | Betekenis |
|-------|-----------|
| `rounded-lg` | afgeronde hoeken |
| `shadow-lg` | schaduw |
| `hover:bg-blue-600` | achtergrond verandert bij hover |
| `transition-all` | soepele animatie |
| `duration-300` | animatie duurt 300ms |
| `hidden md:block` | verborgen op mobiel, zichtbaar vanaf tablet |

---

## 📁 BESTANDSSTRUCTUUR UITGELEGD

```
src/
├── assets/                    # AFBEELDINGEN
│   └── student-passed-*.jpg   # Foto's van geslaagde leerlingen
│
├── components/                # BOUWBLOKKEN VAN DE WEBSITE
│   ├── Header.tsx             # Navigatiebalk
│   ├── Hero.tsx               # Eerste sectie (banner + slideshow)
│   ├── Services.tsx           # "Onze Diensten" sectie
│   ├── HowItWorks.tsx         # "Zo Werkt Het" sectie
│   ├── Testimonials.tsx       # Google Reviews sectie
│   ├── Packages.tsx           # Pakketten en prijzen
│   ├── Contact.tsx            # Contactformulier + FAQ
│   ├── Footer.tsx             # Footer
│   │
│   ├── FloatingWhatsApp.tsx   # Zwevende WhatsApp knop
│   ├── CookieConsent.tsx      # Cookie banner
│   ├── TimedCTA.tsx           # Popup na 4 minuten
│   ├── BackToTop.tsx          # "Terug naar boven" knop
│   └── MobileCTA.tsx          # CTA balk op mobiel
│
├── components/ui/             # HERBRUIKBARE UI ELEMENTEN
│   ├── button.tsx             # Knop component
│   ├── card.tsx               # Kaart component
│   ├── accordion.tsx          # Uitklapbaar element (FAQ)
│   └── ...                    # Meer UI componenten
│
├── config/                    # CONFIGURATIE (HIER WIJZIG JE CONTENT!)
│   ├── site.ts                # Contactgegevens, statistieken
│   ├── packages.ts            # Pakketten en prijzen
│   └── content.ts             # Teksten, reviews, FAQ, navigatie
│
├── pages/                     # PAGINA'S
│   ├── Index.tsx              # Hoofdpagina (combineert alle components)
│   ├── Comparison.tsx         # Vergelijkingspagina
│   └── NotFound.tsx           # 404 pagina
│
├── hooks/                     # HERBRUIKBARE LOGICA
│   └── use-mobile.tsx         # Detecteert of gebruiker op mobiel zit
│
├── lib/                       # HULPFUNCTIES
│   └── utils.ts               # Utility functies (zoals cn() voor classes)
│
├── App.tsx                    # HOOFD APP - definieert routes/pagina's
├── main.tsx                   # START PUNT - laadt de app
└── index.css                  # HOOFD STYLING - kleuren, fonts, etc.
```

---

## 🧩 COMPONENTS UITGELEGD

### Header.tsx - Navigatiebalk

```tsx
// Belangrijke concepten in dit bestand:

// 1. STATE: Onthouden of er gescrolld is
const [isScrolled, setIsScrolled] = useState(false);

// 2. EFFECT: Luister naar scroll events
useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 20);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// 3. CONDITIONAL STYLING: Andere stijl als gescrolld
<header className={`... ${
  isScrolled 
    ? 'bg-white/95 backdrop-blur-lg shadow-premium'  // Na scroll
    : 'bg-transparent'                                 // Geen scroll
}`}>

// 4. MAP: Loop door navigatie items
{navItems.map((item) => (
  <a key={item.href} href={item.href}>{item.label}</a>
))}
```

### Hero.tsx - Banner Sectie

```tsx
// 1. AFBEELDINGEN IMPORTEREN
import studentPassed1 from '@/assets/student-passed-1.jpg';
// ... meer imports

// 2. ARRAY VAN AFBEELDINGEN
const heroImages = [studentPassed1, studentPassed2, ...];

// 3. STATE: Welke foto is actief
const [currentSlide, setCurrentSlide] = useState(0);

// 4. EFFECT: Automatisch wisselen elke 5 seconden
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    // prev + 1 = volgende foto
    // % heroImages.length = terug naar 0 na laatste foto
  }, 5000); // 5000ms = 5 seconden
  
  return () => clearInterval(timer);
}, []);

// 5. STATISTIEKEN UIT CONFIG
const stats = [
  { number: siteConfig.stats.passedStudents, label: 'Geslaagden' },
  // ...
];
```

### Packages.tsx - Pakketten

```tsx
// Data komt uit config bestand
import { packages, extraOptions } from '@/config/packages';

// Loop door alle pakketten
{packages.map((pkg, index) => (
  <Card key={index} className={pkg.popular ? 'border-accent' : ''}>
    <h3>{pkg.name}</h3>
    <p>{pkg.price}</p>
    
    {/* Loop door features */}
    {pkg.features.map((feature, i) => (
      <li key={i}>{feature}</li>
    ))}
  </Card>
))}
```

### Contact.tsx - Formulier

```tsx
// 1. FORM STATE
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: '',
});

// 2. INPUT HANDLER
const handleChange = (e) => {
  setFormData({
    ...formData,                    // Behoud andere velden
    [e.target.name]: e.target.value // Update dit veld
  });
};

// 3. SUBMIT HANDLER
const handleSubmit = async (e) => {
  e.preventDefault();  // Voorkom pagina refresh
  
  // Stuur naar database
  const { error } = await supabase
    .from('package_signups')
    .insert({ ...formData });
    
  if (!error) {
    // Success!
  }
};
```

---

## ✨ ANIMATIES (FRAMER MOTION)

Framer Motion is de bibliotheek die we gebruiken voor animaties.

### Basis animatie

```tsx
import { motion } from 'framer-motion';

// In plaats van <div>, gebruik <motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}   // Start: onzichtbaar, 20px naar beneden
  animate={{ opacity: 1, y: 0 }}    // Eind: volledig zichtbaar, normale positie
  transition={{ duration: 0.5 }}     // Duur: 0.5 seconden
>
  Inhoud verschijnt soepel
</motion.div>
```

### AnimatePresence: Animatie bij verwijderen

```tsx
import { AnimatePresence, motion } from 'framer-motion';

// Nodig voor exit animaties
<AnimatePresence mode="wait">
  <motion.img
    key={currentSlide}  // Belangrijk! Unieke key per item
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}    // Animatie als element verdwijnt
  />
</AnimatePresence>
```

### Hover effecten

```tsx
<motion.a
  whileHover={{ scale: 1.05 }}  // 5% groter bij hover
  whileTap={{ scale: 0.95 }}    // 5% kleiner bij klikken
>
  Link
</motion.a>
```

---

## 💡 TIPS VOOR WIJZIGINGEN

### ✅ Veilige wijzigingen (kan weinig fout gaan)

1. **Teksten aanpassen in `/config/` bestanden**
   - Wijzig tekst tussen quotes: `'oude tekst'` → `'nieuwe tekst'`
   - Voeg items toe aan arrays: `[..., { nieuw: 'item' }]`

2. **Kleuren aanpassen in `/index.css`**
   - Zoek naar `:root {` voor de kleurvariabelen
   - Gebruik een HSL color picker (bijv. https://hslpicker.com/)

3. **Tailwind classes aanpassen**
   - `text-lg` → `text-xl` (grotere tekst)
   - `p-4` → `p-6` (meer padding)
   - `gap-4` → `gap-8` (meer ruimte tussen items)

### ⚠️ Let op bij deze wijzigingen

1. **Nieuwe afbeeldingen toevoegen**
   - Zet in `/assets/` map
   - Importeer bovenaan het bestand
   - Voeg toe aan de juiste array

2. **Nieuwe componenten maken**
   - Kopieer een bestaande component als basis
   - Importeer in `Index.tsx`
   - Voeg toe op de juiste plek in de return

3. **Database velden toevoegen**
   - Vereist een migratie (vraag Lovable)
   - Update ook het formulier dat data verstuurt

### ❌ Vermijd deze fouten

1. **Vergeten quotes te sluiten**
   ```tsx
   // FOUT
   const text = 'Dit is een tekst;
   
   // GOED
   const text = 'Dit is een tekst';
   ```

2. **Vergeten komma's in arrays/objecten**
   ```tsx
   // FOUT
   const items = [
     { name: 'A' }
     { name: 'B' }  // Komma mist!
   ];
   
   // GOED
   const items = [
     { name: 'A' },
     { name: 'B' }
   ];
   ```

3. **className vs class**
   ```tsx
   // FOUT (werkt niet in React)
   <div class="container">
   
   // GOED
   <div className="container">
   ```

---

## 🔧 HANDIGE TOOLS

### VS Code Extensies (aanbevolen)
- **Tailwind CSS IntelliSense** - Autocomplete voor Tailwind classes
- **ES7+ React/Redux/React-Native snippets** - Snelle code templates
- **Prettier** - Automatische code formatting

### Online Tools
- **Tailwind Docs**: https://tailwindcss.com/docs
- **HSL Color Picker**: https://hslpicker.com/
- **Lucide Icons** (onze iconen): https://lucide.dev/icons

---

## 📞 HULP NODIG?

1. **Lovable Chat**: Vraag in de chat wat je wilt wijzigen
2. **LEES-MIJ.md**: Voor snelle content wijzigingen
3. **Dit document**: Voor technische uitleg

---

*Laatst bijgewerkt: Januari 2026*
