import { motion } from 'framer-motion';
import { Shield, Lock, Clock, Trash2, Mail, FileText } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Welke gegevens verzamelen wij?',
      content: `Wij verzamelen alleen de gegevens die je zelf aan ons verstrekt via het contactformulier:
        • Naam
        • E-mailadres
        • Telefoonnummer (optioneel)
        • Je bericht
        
        We verzamelen geen gegevens via cookies of tracking, behalve functionele cookies die nodig zijn voor de website.`,
    },
    {
      icon: Shield,
      title: 'Waarvoor gebruiken wij je gegevens?',
      content: `Je gegevens worden uitsluitend gebruikt om:
        • Contact met je op te nemen over je aanvraag
        • Je te informeren over onze rijlessen en pakketten
        • Je aanmelding te verwerken
        
        Wij delen je gegevens nooit met derden voor commerciële doeleinden.`,
    },
    {
      icon: Clock,
      title: 'Hoe lang bewaren wij je gegevens?',
      content: `Je contactgegevens worden maximaal 2 jaar bewaard, tenzij je eerder verzoekt om verwijdering. Na deze periode worden je gegevens automatisch verwijderd uit onze systemen.`,
    },
    {
      icon: Lock,
      title: 'Hoe beveiligen wij je gegevens?',
      content: `Wij nemen de bescherming van je gegevens serieus:
        • Alle gegevens worden versleuteld opgeslagen
        • Toegang is beperkt tot geautoriseerde medewerkers
        • We gebruiken beveiligde HTTPS-verbindingen
        • Regelmatige beveiligingscontroles`,
    },
    {
      icon: Trash2,
      title: 'Je rechten (AVG/GDPR)',
      content: `Je hebt het recht om:
        • Je gegevens in te zien
        • Je gegevens te laten corrigeren
        • Je gegevens te laten verwijderen
        • Bezwaar te maken tegen verwerking
        
        Neem contact met ons op om gebruik te maken van deze rechten.`,
    },
    {
      icon: Mail,
      title: 'Contact',
      content: `Voor vragen over privacy of om gebruik te maken van je rechten:
        
        E-mail: ${siteConfig.email}
        Telefoon: ${siteConfig.phone}
        
        ${siteConfig.address.full}`,
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
              Privacyverklaring
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.name} respecteert je privacy. Deze verklaring legt uit hoe wij omgaan met je persoonsgegevens conform de AVG/GDPR.
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
