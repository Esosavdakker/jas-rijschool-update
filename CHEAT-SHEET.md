# JAS-Rijschool Cheat Sheet 📋

Snelle referentie voor Tailwind CSS en React patronen.

---

## 🎨 TAILWIND CSS

### Spacing (Ruimte)
```
p-{n}   = padding alle kanten       m-{n}   = margin alle kanten
px-{n}  = padding links/rechts      mx-{n}  = margin links/rechts
py-{n}  = padding boven/onder       my-{n}  = margin boven/onder
pt/pr/pb/pl = top/right/bottom/left mt/mr/mb/ml = top/right/bottom/left

Schaal: 1=4px, 2=8px, 4=16px, 6=24px, 8=32px, 10=40px, 12=48px
```

### Onze Kleuren
```
text-primary        bg-primary        border-primary      (donkerblauw)
text-secondary      bg-secondary      border-secondary    (paars)
text-accent         bg-accent         border-accent       (oranje)
text-muted          bg-muted          border-muted        (lichtgrijs)
text-white          bg-white          border-white
text-foreground     bg-background     border-border
```

### Tekst
```
text-xs    = 12px          font-normal    = 400
text-sm    = 14px          font-medium    = 500
text-base  = 16px          font-semibold  = 600
text-lg    = 18px          font-bold      = 700
text-xl    = 20px          font-extrabold = 800
text-2xl   = 24px
text-3xl   = 30px          text-left / text-center / text-right
text-4xl   = 36px
text-5xl   = 48px          leading-tight / leading-normal / leading-relaxed
```

### Flexbox
```
flex                    = display: flex
flex-row               = horizontaal (standaard)
flex-col               = verticaal
items-center           = verticaal centreren
items-start/end        = boven/onder uitlijnen
justify-center         = horizontaal centreren
justify-between        = ruimte tussen items
justify-start/end      = links/rechts uitlijnen
gap-{n}                = ruimte tussen items
flex-1                 = neem beschikbare ruimte
flex-wrap              = wrap naar volgende regel
```

### Grid
```
grid                   = display: grid
grid-cols-1/2/3/4      = aantal kolommen
gap-{n}                = ruimte tussen cellen
col-span-2             = neem 2 kolommen
```

### Responsive Breakpoints
```
(geen prefix) = mobiel (< 640px)
sm:           = vanaf 640px
md:           = vanaf 768px (tablet)
lg:           = vanaf 1024px (laptop)
xl:           = vanaf 1280px (desktop)

Voorbeeld: "text-sm md:text-base lg:text-lg"
           (klein op mobiel, normaal op tablet, groot op desktop)
```

### Afmetingen
```
w-full      = width: 100%           h-full      = height: 100%
w-screen    = width: 100vw          h-screen    = height: 100vh
w-auto      = width: auto           h-auto      = height: auto
w-{n}       = vaste breedte         h-{n}       = vaste hoogte
max-w-lg    = max-width beperken    min-h-screen = minimaal schermhoogte
```

### Randen & Schaduwen
```
rounded         = 4px              border          = 1px rand
rounded-md      = 6px              border-2        = 2px rand
rounded-lg      = 8px              border-t/r/b/l  = één kant
rounded-xl      = 12px
rounded-2xl     = 16px             shadow-sm/md/lg/xl = schaduw
rounded-3xl     = 24px
rounded-full    = cirkel
```

### Zichtbaarheid
```
hidden          = verbergen
block           = tonen
hidden md:block = verbergen op mobiel, tonen vanaf tablet
md:hidden       = tonen op mobiel, verbergen vanaf tablet
opacity-50      = 50% transparant
```

### Positionering
```
relative        = relatief positioneren
absolute        = absoluut positioneren
fixed           = vast op scherm
sticky          = plakkerig bij scrollen
top-0/right-0/bottom-0/left-0 = positie
z-10/20/30/40/50 = z-index (laag volgorde)
```

### Hover & Transitie
```
hover:bg-primary        = achtergrond bij hover
hover:text-white        = tekstkleur bij hover
hover:scale-105         = 5% groter bij hover
transition-all          = animeer alle properties
transition-colors       = alleen kleuren animeren
duration-200/300/500    = animatieduur in ms
```

---

## ⚛️ REACT PATRONEN

### Component Basis
```tsx
const MijnComponent = () => {
  return (
    <div>Inhoud</div>
  );
};

export default MijnComponent;
```

### Props (Gegevens doorgeven)
```tsx
// Definiëren
const Knop = ({ tekst, kleur }) => {
  return <button className={`bg-${kleur}`}>{tekst}</button>;
};

// Gebruiken
<Knop tekst="Klik hier" kleur="primary" />
```

### useState (Veranderbare waarde)
```tsx
import { useState } from 'react';

const [waarde, setWaarde] = useState(startWaarde);

// Voorbeelden:
const [isOpen, setIsOpen] = useState(false);
const [naam, setNaam] = useState('');
const [items, setItems] = useState([]);
```

### useEffect (Bij laden/veranderen)
```tsx
import { useEffect } from 'react';

// Bij eerste keer laden
useEffect(() => {
  console.log('Component geladen');
}, []);

// Bij elke verandering van 'waarde'
useEffect(() => {
  console.log('Waarde veranderd:', waarde);
}, [waarde]);

// Met cleanup (bijv. timers)
useEffect(() => {
  const timer = setInterval(() => { ... }, 1000);
  return () => clearInterval(timer);
}, []);
```

### Map (Loop door array)
```tsx
const items = ['A', 'B', 'C'];

{items.map((item, index) => (
  <div key={index}>{item}</div>
))}

// Met objecten
const personen = [{ naam: 'Alex' }, { naam: 'Jasper' }];

{personen.map((persoon, i) => (
  <p key={i}>{persoon.naam}</p>
))}
```

### Conditional Rendering (Als/dan)
```tsx
// Met &&
{isVisible && <div>Zichtbaar!</div>}

// Met ternary
{isActive ? <span>Actief</span> : <span>Inactief</span>}

// In className
<div className={`p-4 ${isActive ? 'bg-green-500' : 'bg-gray-500'}`}>
```

### Event Handlers
```tsx
// Click
<button onClick={() => setIsOpen(true)}>Open</button>

// Met functie
const handleClick = () => {
  console.log('Geklikt!');
};
<button onClick={handleClick}>Klik</button>

// Form submit
<form onSubmit={(e) => {
  e.preventDefault();  // Voorkom pagina refresh!
  // verwerk data...
}}>
```

### Form Input
```tsx
const [naam, setNaam] = useState('');

<input
  type="text"
  value={naam}
  onChange={(e) => setNaam(e.target.value)}
  placeholder="Jouw naam"
/>
```

---

## 🎬 ANIMATIES (Framer Motion)

### Basis Animatie
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Inhoud
</motion.div>
```

### Hover Effect
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Klik mij
</motion.button>
```

### AnimatePresence (Exit animatie)
```tsx
import { AnimatePresence, motion } from 'framer-motion';

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Kan verdwijnen met animatie
    </motion.div>
  )}
</AnimatePresence>
```

---

## 📦 IMPORTS

### Veelgebruikte Imports
```tsx
// React hooks
import { useState, useEffect } from 'react';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// UI Components
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Config
import { siteConfig } from '@/config/site';
import { packages } from '@/config/packages';

// Iconen (lucide-react)
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

// Afbeeldingen
import mijnFoto from '@/assets/mijn-foto.jpg';
```

---

## ⚡ SNELLE VOORBEELDEN

### Gecentreerde Container
```tsx
<div className="container mx-auto px-4">
  Inhoud
</div>
```

### Flex Rij met Ruimte
```tsx
<div className="flex items-center justify-between gap-4">
  <span>Links</span>
  <span>Rechts</span>
</div>
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Kaart met Schaduw
```tsx
<div className="bg-white rounded-xl shadow-lg p-6">
  Kaart inhoud
</div>
```

### Knop met Hover
```tsx
<button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
  Klik mij
</button>
```

---

*Print deze pagina uit en hang 'm naast je scherm! 🖨️*
