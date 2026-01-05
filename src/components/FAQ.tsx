import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/config/content';

const FAQ = () => (
  <section id="faq" className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 section-underline">
          Veelgestelde Vragen
        </h2>
        <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
          Antwoorden op de meest gestelde vragen over onze rijlessen
        </p>
      </motion.div>

      {/* Accordion */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
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

      {/* CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-muted-foreground mb-4">Staat jouw vraag er niet bij?</p>
        <a href="#contact" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
          Neem contact met ons op →
        </a>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
