import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Hoeveel rijlessen heb ik nodig?',
    answer: 'Dit verschilt per persoon. Gemiddeld hebben leerlingen 30-40 lessen nodig. Bij de proefles maken we een inschatting op basis van jouw ervaring en leervermogen.',
  },
  {
    question: 'Wat kost een rijles?',
    answer: 'Een losse rijles kost €55. Bij onze pakketten krijg je korting: hoe meer lessen je afneemt, hoe voordeliger het wordt. Bekijk onze pakketten voor de exacte prijzen.',
  },
  {
    question: 'Hoe lang duurt een rijles?',
    answer: 'Een standaard rijles duurt 60 minuten. We starten bij jouw locatie en brengen je daar ook weer terug.',
  },
  {
    question: 'Kan ik lessen in mijn eigen auto?',
    answer: 'Nee, de rijlessen worden gegeven in onze moderne lesauto die voorzien is van dubbele bediening voor jouw veiligheid.',
  },
  {
    question: 'Wat als ik faalangst heb?',
    answer: 'Geen zorgen! Alex heeft ruime ervaring met leerlingen die faalangst hebben. We werken in een rustgevende omgeving en op jouw tempo. Samen zorgen we ervoor dat je je vertrouwd voelt achter het stuur.',
  },
  {
    question: 'Hoe snel kan ik starten?',
    answer: 'Na aanmelding kunnen we meestal binnen een week starten met de eerste les. Neem contact op voor de actuele beschikbaarheid.',
  },
  {
    question: 'Regelen jullie ook het examen?',
    answer: 'Ja! Bij onze pakketten regelen wij de examenaanvraag en brengen we je met de lesauto naar het CBR voor je praktijkexamen.',
  },
  {
    question: 'In welke regio geven jullie les?',
    answer: 'We geven rijlessen in IJmuiden, Haarlem, Velsen en omgeving. Vraag gerust naar de mogelijkheden in jouw woonplaats.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 section-underline">
            Veelgestelde Vragen
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze rijlessen
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border/50 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-accent/30 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-primary hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            Staat jouw vraag er niet bij?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Neem contact met ons op →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
