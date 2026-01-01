import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, Zap, Users, Package, MessageSquare, Phone, Star, Clock, Shield, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    feature: "Modern design",
    oldWebsite: false,
    newWebsite: true,
    category: "Design & UX",
    improvement: "Volledig nieuw ontwerp met moderne glassmorphism effecten"
  },
  {
    feature: "Animaties",
    oldWebsite: false,
    newWebsite: true,
    category: "Design & UX",
    improvement: "Framer Motion animaties voor vloeiende overgangen"
  },
  {
    feature: "Responsive design",
    oldWebsite: "Basis",
    newWebsite: "Volledig geoptimaliseerd",
    category: "Design & UX",
    improvement: "Perfect weergave op alle apparaten"
  },
  {
    feature: "Dark/Light mode",
    oldWebsite: false,
    newWebsite: "Donker thema",
    category: "Design & UX",
    improvement: "Professioneel donker thema"
  },
  
  // Functionaliteit
  {
    feature: "WhatsApp integratie",
    oldWebsite: false,
    newWebsite: true,
    category: "Functionaliteit",
    improvement: "Zwevende WhatsApp knop voor directe contact"
  },
  {
    feature: "Contact formulier",
    oldWebsite: "Basis",
    newWebsite: "Uitgebreid met validatie",
    category: "Functionaliteit",
    improvement: "Form validatie en database opslag"
  },
  {
    feature: "Pakket aanmelding",
    oldWebsite: false,
    newWebsite: true,
    category: "Functionaliteit",
    improvement: "Direct aanmelden via website"
  },
  {
    feature: "Database integratie",
    oldWebsite: false,
    newWebsite: true,
    category: "Functionaliteit",
    improvement: "Supabase backend voor data opslag"
  },
  {
    feature: "FAQ sectie",
    oldWebsite: false,
    newWebsite: true,
    category: "Functionaliteit",
    improvement: "Interactieve accordion FAQ"
  },
  
  // Content
  {
    feature: "Instructeur profiel",
    oldWebsite: "Basis info",
    newWebsite: "Uitgebreide bio met foto",
    category: "Content",
    improvement: "Professionele presentatie van Alex"
  },
  {
    feature: "Testimonials",
    oldWebsite: false,
    newWebsite: true,
    category: "Content",
    improvement: "Foto's van geslaagde leerlingen"
  },
  {
    feature: "Diensten overzicht",
    oldWebsite: "Lijst",
    newWebsite: "Visuele kaarten met iconen",
    category: "Content",
    improvement: "Duidelijke service presentatie"
  },
  {
    feature: "Pakketten & prijzen",
    oldWebsite: "Statische tekst",
    newWebsite: "Interactieve prijskaarten",
    category: "Content",
    improvement: "Populaire badge, extra opties toggle"
  },
  {
    feature: "How it works sectie",
    oldWebsite: false,
    newWebsite: true,
    category: "Content",
    improvement: "Stapsgewijze uitleg voor nieuwe leerlingen"
  },
  
  // Technisch
  {
    feature: "Laadsnelheid",
    oldWebsite: "Gemiddeld",
    newWebsite: "Snel (Vite + React)",
    category: "Technisch",
    improvement: "Moderne tech stack"
  },
  {
    feature: "SEO geoptimaliseerd",
    oldWebsite: "Basis",
    newWebsite: "Volledig",
    category: "Technisch",
    improvement: "Meta tags, structured data ready"
  },
  {
    feature: "Mobile CTA",
    oldWebsite: false,
    newWebsite: true,
    category: "Technisch",
    improvement: "Vaste call-to-action balk op mobiel"
  },
  {
    feature: "Back to top knop",
    oldWebsite: false,
    newWebsite: true,
    category: "Technisch",
    improvement: "Makkelijk navigeren op lange pagina's"
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
