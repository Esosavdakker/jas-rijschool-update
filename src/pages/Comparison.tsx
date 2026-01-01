import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, Zap, Users, Package, MessageSquare, Phone, Star, Clock, Shield, Palette, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

// Screenshots oude website
import oldWebsite1 from "@/assets/old-website-1.png";
import oldWebsite2 from "@/assets/old-website-2.png";
import oldWebsite3 from "@/assets/old-website-3.png";
import oldWebsite4 from "@/assets/old-website-4.png";
interface ComparisonItem {
  feature: string;
  oldWebsite: string | boolean;
  newWebsite: string | boolean;
  category: string;
  improvement?: string;
}

const comparisonData: ComparisonItem[] = [
  // Design & UX
  {
    feature: "Kleurenschema",
    oldWebsite: "Blauw/Oranje (licht thema)",
    newWebsite: "Donker thema met goud accenten",
    category: "Design & UX",
    improvement: "Professionelere, modernere uitstraling"
  },
  {
    feature: "Animaties",
    oldWebsite: false,
    newWebsite: true,
    category: "Design & UX",
    improvement: "Framer Motion animaties voor vloeiende overgangen"
  },
  {
    feature: "Glassmorphism effecten",
    oldWebsite: false,
    newWebsite: true,
    category: "Design & UX",
    improvement: "Moderne glaseffecten op kaarten en navigatie"
  },
  {
    feature: "Hero sectie",
    oldWebsite: "Afbeelding carousel",
    newWebsite: "Statische hero met gradient achtergrond",
    category: "Design & UX",
    improvement: "Snellere laadtijd, duidelijkere boodschap"
  },
  {
    feature: "Navigatie design",
    oldWebsite: "Standaard menu",
    newWebsite: "Glassmorphism sticky header",
    category: "Design & UX",
    improvement: "Moderne look met blur effect"
  },
  
  // Functionaliteit
  {
    feature: "WhatsApp floating button",
    oldWebsite: false,
    newWebsite: true,
    category: "Functionaliteit",
    improvement: "Altijd zichtbare WhatsApp knop voor snel contact"
  },
  {
    feature: "Contact formulier",
    oldWebsite: "Basis (Naam, Email, Bericht)",
    newWebsite: "Uitgebreid met telefoon & pakketkeuze",
    category: "Functionaliteit",
    improvement: "Meer info bij aanmelding + database opslag"
  },
  {
    feature: "Pakket aanmelding",
    oldWebsite: false,
    newWebsite: true,
    category: "Functionaliteit",
    improvement: "Direct aanmelden voor specifiek pakket via website"
  },
  {
    feature: "Database integratie",
    oldWebsite: false,
    newWebsite: true,
    category: "Functionaliteit",
    improvement: "Alle aanmeldingen opgeslagen in Lovable Cloud"
  },
  {
    feature: "Mobile CTA balk",
    oldWebsite: false,
    newWebsite: true,
    category: "Functionaliteit",
    improvement: "Vaste bel/WhatsApp knoppen op mobiel"
  },
  {
    feature: "Back to top knop",
    oldWebsite: false,
    newWebsite: true,
    category: "Functionaliteit",
    improvement: "Makkelijk terug naar boven scrollen"
  },
  
  // Content
  {
    feature: "Reviews weergave",
    oldWebsite: "Alleen tekst reviews",
    newWebsite: "Foto's van geslaagde leerlingen",
    category: "Content",
    improvement: "Visueel bewijs met échte foto's"
  },
  {
    feature: "Instructeur profiel",
    oldWebsite: "Geen aparte sectie",
    newWebsite: "Uitgebreide bio met foto",
    category: "Content",
    improvement: "Persoonlijke connectie met Alex"
  },
  {
    feature: "Diensten kaarten",
    oldWebsite: "3 diensten met oranje iconen",
    newWebsite: "6 diensten met gradient kaarten",
    category: "Content",
    improvement: "Meer diensten, modernere presentatie"
  },
  {
    feature: "Pakketten",
    oldWebsite: "4 pakketten (A-D) met lijsten",
    newWebsite: "4 pakketten met toggle voor extra opties",
    category: "Content",
    improvement: "Interactieve presentatie, extra opties zichtbaar"
  },
  {
    feature: "How it works sectie",
    oldWebsite: false,
    newWebsite: true,
    category: "Content",
    improvement: "Stapsgewijze uitleg voor nieuwe leerlingen"
  },
  {
    feature: "Google Maps",
    oldWebsite: true,
    newWebsite: false,
    category: "Content",
    improvement: "Kan toegevoegd worden indien gewenst"
  },
  {
    feature: "CBR info links",
    oldWebsite: "Footer sectie met links",
    newWebsite: false,
    category: "Content",
    improvement: "Kan toegevoegd worden aan FAQ of footer"
  },
  
  // Technisch
  {
    feature: "Tech stack",
    oldWebsite: "Onbekend (statisch?)",
    newWebsite: "React + Vite + TypeScript",
    category: "Technisch",
    improvement: "Moderne, schaalbare architectuur"
  },
  {
    feature: "Laadsnelheid",
    oldWebsite: "Met image carousel",
    newWebsite: "Geoptimaliseerd (geen carousel)",
    category: "Technisch",
    improvement: "Snellere eerste weergave"
  },
  {
    feature: "SEO",
    oldWebsite: "Basis",
    newWebsite: "Volledig geoptimaliseerd",
    category: "Technisch",
    improvement: "Meta tags, structured data ready"
  },
  {
    feature: "Social media links",
    oldWebsite: "Facebook, Instagram, TikTok",
    newWebsite: "In footer aanwezig",
    category: "Technisch",
    improvement: "Behouden uit oude site"
  },
];

const categories = [...new Set(comparisonData.map(item => item.category))];

const categoryIcons: Record<string, React.ReactNode> = {
  "Design & UX": <Palette className="w-5 h-5" />,
  "Functionaliteit": <Zap className="w-5 h-5" />,
  "Content": <MessageSquare className="w-5 h-5" />,
  "Technisch": <Shield className="w-5 h-5" />,
};

const renderValue = (value: string | boolean) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-500" />
    ) : (
      <X className="w-5 h-5 text-red-500" />
    );
  }
  return <span className="text-sm">{value}</span>;
};

const oldScreenshots = [
  { src: oldWebsite1, label: "Hero & Navigatie" },
  { src: oldWebsite2, label: "Diensten" },
  { src: oldWebsite3, label: "Pakketten" },
  { src: oldWebsite4, label: "Contact & Footer" },
];

const ScreenshotComparison = () => {
  const [selectedOld, setSelectedOld] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <Monitor className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold">Visuele Vergelijking</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Oude Website */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-4 bg-red-500/10 border-b border-border flex items-center gap-2">
            <X className="w-4 h-4 text-red-500" />
            <span className="font-medium text-red-500">Oude Website</span>
          </div>
          <div className="p-4">
            <div className="aspect-[9/16] md:aspect-video bg-muted rounded-lg overflow-hidden mb-4">
              <img 
                src={oldScreenshots[selectedOld].src} 
                alt={`Oude website - ${oldScreenshots[selectedOld].label}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {oldScreenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOld(index)}
                  className={`flex-shrink-0 px-3 py-1.5 text-xs rounded-full transition-colors ${
                    selectedOld === index 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {screenshot.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Nieuwe Website */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-4 bg-green-500/10 border-b border-border flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span className="font-medium text-green-500">Nieuwe Website</span>
          </div>
          <div className="p-4">
            <div className="aspect-[9/16] md:aspect-video bg-muted rounded-lg overflow-hidden mb-4 flex items-center justify-center">
              <Link to="/" className="w-full h-full">
                <iframe 
                  src="/" 
                  className="w-full h-full pointer-events-none"
                  title="Nieuwe website preview"
                />
              </Link>
            </div>
            <div className="text-center">
              <Link to="/">
                <Button variant="outline" size="sm">
                  Open in volledig scherm
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Comparison = () => {
  const totalNew = comparisonData.filter(item => 
    item.oldWebsite === false && item.newWebsite !== false
  ).length;
  
  const totalImproved = comparisonData.filter(item => 
    item.oldWebsite !== false && item.newWebsite !== item.oldWebsite
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            Alex Rijschool
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              ← Terug naar website
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Website Vergelijking voor Alex
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Oude vs Nieuwe Website
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Overzicht van alle verbeteringen en nieuwe features in de vernieuwde website
          </p>
        </motion.div>

        {/* Visual Screenshots Section */}
        <ScreenshotComparison />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-500 mb-1">{totalNew}</div>
            <div className="text-sm text-muted-foreground">Nieuwe Features</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{totalImproved}</div>
            <div className="text-sm text-muted-foreground">Verbeterd</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-amber-500 mb-1">{categories.length}</div>
            <div className="text-sm text-muted-foreground">Categorieën</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-1">{comparisonData.length}</div>
            <div className="text-sm text-muted-foreground">Totaal Items</div>
          </div>
        </motion.div>

        {/* Comparison by Category */}
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + categoryIndex * 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                {categoryIcons[category]}
              </div>
              <h2 className="text-2xl font-bold">{category}</h2>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-4 bg-muted/50 border-b border-border font-medium text-sm">
                <div className="col-span-4 md:col-span-3">Feature</div>
                <div className="col-span-3 md:col-span-2 text-center">Oud</div>
                <div className="col-span-1 hidden md:block"></div>
                <div className="col-span-3 md:col-span-2 text-center">Nieuw</div>
                <div className="col-span-2 md:col-span-4 hidden md:block">Verbetering</div>
              </div>

              {/* Table Rows */}
              {comparisonData
                .filter(item => item.category === category)
                .map((item, index) => (
                  <div
                    key={item.feature}
                    className={`grid grid-cols-12 gap-4 p-4 items-center ${
                      index !== comparisonData.filter(i => i.category === category).length - 1
                        ? "border-b border-border/50"
                        : ""
                    }`}
                  >
                    <div className="col-span-4 md:col-span-3 font-medium text-sm">
                      {item.feature}
                    </div>
                    <div className="col-span-3 md:col-span-2 flex justify-center text-muted-foreground">
                      {renderValue(item.oldWebsite)}
                    </div>
                    <div className="col-span-1 hidden md:flex justify-center">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="col-span-3 md:col-span-2 flex justify-center text-foreground">
                      {renderValue(item.newWebsite)}
                    </div>
                    <div className="col-span-2 md:col-span-4 hidden md:block text-sm text-muted-foreground">
                      {item.improvement}
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}

        {/* Notes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Notities voor Alex
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
              <span>Alle geslaagde leerlingen foto's zijn toegevoegd in de testimonials sectie</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
              <span>WhatsApp nummer is gekoppeld voor directe communicatie</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
              <span>Pakketten en prijzen kunnen eenvoudig aangepast worden</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
              <span>Admin dashboard is in ontwikkeling voor het beheren van aanmeldingen</span>
            </li>
          </ul>
        </motion.div>

        {/* Feedback Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Heb je feedback of wil je aanpassingen? Laat het weten!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                Bekijk de nieuwe website
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Comparison;
