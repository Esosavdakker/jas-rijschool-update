import { useEffect } from 'react';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CheatSheet = () => {
  useEffect(() => {
    document.title = 'JAS-Rijschool Cheat Sheet - Print Versie';
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Button - Hidden when printing */}
      <div className="fixed top-4 right-4 print:hidden z-50">
        <Button onClick={handlePrint} className="gap-2 shadow-lg">
          <Printer size={18} />
          Print / PDF
        </Button>
      </div>

      {/* Back link - Hidden when printing */}
      <div className="fixed top-4 left-4 print:hidden z-50">
        <a href="/" className="text-primary hover:underline font-medium">
          ← Terug naar website
        </a>
      </div>

      {/* Printable Content */}
      <div className="max-w-4xl mx-auto p-8 print:p-4 print:max-w-none bg-white min-h-screen">
        {/* Header */}
        <header className="text-center mb-8 print:mb-4">
          <h1 className="text-3xl print:text-2xl font-bold text-primary mb-2">
            JAS-Rijschool Cheat Sheet 📋
          </h1>
          <p className="text-muted-foreground print:text-sm">
            Snelle referentie voor Tailwind CSS en React
          </p>
        </header>

        {/* Two Column Layout for Print */}
        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 print:gap-4 print:text-xs">
          
          {/* TAILWIND SECTION */}
          <section className="space-y-4 print:space-y-2">
            <h2 className="text-xl print:text-base font-bold text-accent border-b-2 border-accent pb-1">
              🎨 TAILWIND CSS
            </h2>

            {/* Spacing */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Spacing</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div>p-4 = padding 16px | m-4 = margin 16px</div>
                <div>px/py = links-rechts/boven-onder</div>
                <div>pt/pr/pb/pl = individuele kanten</div>
                <div className="text-muted-foreground mt-1">
                  Schaal: 1=4px, 2=8px, 4=16px, 6=24px, 8=32px
                </div>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Onze Kleuren</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary text-white px-2 rounded">primary</span>
                  <span className="bg-secondary text-white px-2 rounded">secondary</span>
                  <span className="bg-accent text-white px-2 rounded">accent</span>
                </div>
                <div className="mt-1">text-primary | bg-primary | border-primary</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Tekst</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div>text-sm/base/lg/xl/2xl/3xl/4xl</div>
                <div>font-normal/medium/semibold/bold</div>
                <div>text-left/center/right</div>
              </div>
            </div>

            {/* Flexbox */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Flexbox</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div>flex flex-row/col</div>
                <div>items-center/start/end</div>
                <div>justify-center/between/start/end</div>
                <div>gap-4</div>
              </div>
            </div>

            {/* Grid */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Grid</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div>grid grid-cols-1/2/3/4 gap-4</div>
                <div>col-span-2 = neem 2 kolommen</div>
              </div>
            </div>

            {/* Responsive */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Responsive</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div>(geen) = mobiel</div>
                <div>md: = tablet (768px+)</div>
                <div>lg: = desktop (1024px+)</div>
                <div className="text-muted-foreground mt-1">
                  Vb: text-sm md:text-base lg:text-lg
                </div>
              </div>
            </div>

            {/* Sizing */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Afmetingen</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div>w-full/screen/auto | h-full/screen</div>
                <div>max-w-sm/md/lg/xl/2xl</div>
              </div>
            </div>

            {/* Borders */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Randen & Schaduwen</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div>rounded-md/lg/xl/2xl/full</div>
                <div>border border-2</div>
                <div>shadow-sm/md/lg/xl</div>
              </div>
            </div>

            {/* Visibility */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Zichtbaarheid</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div>hidden | block</div>
                <div>hidden md:block = verberg op mobiel</div>
                <div>opacity-50 = 50% transparant</div>
              </div>
            </div>

            {/* Hover */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Hover & Animatie</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs">
                <div>hover:bg-primary hover:scale-105</div>
                <div>transition-all duration-300</div>
              </div>
            </div>
          </section>

          {/* REACT SECTION */}
          <section className="space-y-4 print:space-y-2">
            <h2 className="text-xl print:text-base font-bold text-secondary border-b-2 border-secondary pb-1">
              ⚛️ REACT PATRONEN
            </h2>

            {/* Component */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Component Basis</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`const MijnComponent = () => {
  return <div>Inhoud</div>;
};
export default MijnComponent;`}
              </div>
            </div>

            {/* useState */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">useState</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`import { useState } from 'react';

const [waarde, setWaarde] = useState(start);
const [isOpen, setIsOpen] = useState(false);
const [naam, setNaam] = useState('');`}
              </div>
            </div>

            {/* useEffect */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">useEffect</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`import { useEffect } from 'react';

// Bij laden
useEffect(() => {
  // code hier
}, []);

// Bij verandering
useEffect(() => {
  // code hier
}, [waarde]);`}
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Map (Loop)</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`{items.map((item, index) => (
  <div key={index}>{item}</div>
))}`}
              </div>
            </div>

            {/* Conditional */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Conditional Rendering</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`// Met &&
{isVisible && <div>Zichtbaar</div>}

// Met ternary
{isActive ? <span>Ja</span> : <span>Nee</span>}`}
              </div>
            </div>

            {/* Events */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Events</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`<button onClick={() => setOpen(true)}>
  Klik
</button>

<form onSubmit={(e) => {
  e.preventDefault();
  // verwerk...
}}>`}
              </div>
            </div>

            {/* Form Input */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">Form Input</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`<input
  value={naam}
  onChange={(e) => setNaam(e.target.value)}
/>`}
              </div>
            </div>

            {/* Framer Motion */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">🎬 Framer Motion</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>`}
              </div>
            </div>

            {/* Imports */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">📦 Veelgebruikte Imports</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Menu, X } from 'lucide-react';
import foto from '@/assets/foto.jpg';`}
              </div>
            </div>

            {/* Quick Examples */}
            <div>
              <h3 className="font-bold text-primary print:text-sm">⚡ Snelle Voorbeelden</h3>
              <div className="bg-muted rounded p-2 print:p-1 font-mono text-sm print:text-xs whitespace-pre-wrap">
{`// Container
<div className="container mx-auto px-4">

// Flex rij
<div className="flex items-center justify-between">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

// Kaart
<div className="bg-white rounded-xl shadow-lg p-6">`}
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-8 print:mt-4 text-center text-muted-foreground text-sm print:text-xs border-t pt-4">
          <p>JAS-Rijschool • Januari 2026</p>
          <p className="print:hidden mt-2">
            Druk op <kbd className="bg-muted px-2 py-1 rounded">Ctrl+P</kbd> (of <kbd className="bg-muted px-2 py-1 rounded">⌘+P</kbd> op Mac) om te printen of op te slaan als PDF
          </p>
        </footer>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 1cm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  );
};

export default CheatSheet;
