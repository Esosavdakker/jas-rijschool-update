import { motion } from 'framer-motion';
import { FileText, Users, CreditCard, Calendar, XCircle, AlertTriangle, Scale } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Algemeen',
      content: `Deze algemene voorwaarden zijn van toepassing op alle rijlessen, pakketten en diensten van ${siteConfig.name}.
        
        Door je aan te melden voor rijlessen ga je akkoord met deze voorwaarden. Wij behouden ons het recht voor om deze voorwaarden te wijzigen.`,
    },
    {
      icon: Users,
      title: 'Inschrijving & Leeftijd',
      content: `• Je moet minimaal 16,5 jaar oud zijn om te starten met rijlessen
        • Bij inschrijving vragen wij om een geldig identiteitsbewijs
        • Een gezondheidsverklaring van het CBR is vereist voordat je kunt starten
        • Inschrijving is pas definitief na bevestiging van onze kant`,
    },
    {
      icon: CreditCard,
      title: 'Betaling',
      content: `• Betaling geschiedt vooraf of volgens de afgesproken betalingsregeling
        • Prijzen zijn inclusief BTW tenzij anders vermeld
        • Bij een pakket is de volledige betaling vereist voor aanvang of in termijnen volgens afspraak
        • Losse lessen worden per les of per 5 lessen afgerekend`,
    },
    {
      icon: Calendar,
      title: 'Afspraken & Annulering',
      content: `• Rijlessen worden in overleg ingepland op basis van beschikbaarheid
        • Annuleren of verzetten van een les kan kosteloos tot 48 uur van tevoren
        • Bij annulering binnen 48 uur wordt de les in rekening gebracht
        • Bij niet verschijnen zonder afmelding wordt de volledige les in rekening gebracht`,
    },
    {
      icon: XCircle,
      title: 'Tussentijdse Beëindiging',
      content: `• Je kunt op elk moment stoppen met de lessen
        • Bij tussentijdse beëindiging van een pakket worden de reeds gevolgde lessen afgerekend tegen het tarief voor losse lessen
        • Eventueel resterend tegoed wordt binnen 14 dagen teruggestort
        • Pakketten zijn niet overdraagbaar aan derden`,
    },
    {
      icon: AlertTriangle,
      title: 'Aansprakelijkheid',
      content: `• De leerling is verplicht de aanwijzingen van de instructeur op te volgen
        • ${siteConfig.name} is verzekerd voor wettelijke aansprakelijkheid
        • De leerling is niet aansprakelijk voor schade aan de lesauto tijdens de rijles, tenzij er sprake is van opzet of grove nalatigheid
        • Bij rijden onder invloed van alcohol of drugs wordt de les onmiddellijk beëindigd`,
    },
    {
      icon: Scale,
      title: 'Examen & Garantie',
      content: `• Examens worden door ons gepland in overleg met de leerling
        • Examenkosten van het CBR zijn niet inbegrepen tenzij anders vermeld in het pakket
        • Een herexamen valt buiten het pakket en wordt apart in rekening gebracht
        • Wij bieden geen slagingsgarantie, wel doen we ons uiterste best om je zo goed mogelijk voor te bereiden`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Algemene Voorwaarden
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hieronder vind je de algemene voorwaarden die van toepassing zijn op alle diensten van {siteConfig.name}.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-md border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-primary mb-3">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-muted-foreground">
              Vragen over deze voorwaarden? Neem{' '}
              <a href="/#contact" className="text-accent hover:text-primary transition-colors font-medium">
                contact
              </a>
              {' '}met ons op.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
