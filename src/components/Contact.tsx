import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/config/content';

const contactMethods = [
  {
    icon: Phone,
    title: 'Bel ons',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneLink}`,
    color: 'from-secondary to-blue-400',
    hoverEffect: 'hover:bg-secondary/30 hover:shadow-glow-blue',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'WhatsApp ons',
    href: `https://wa.me/${siteConfig.whatsapp}`,
    color: 'from-success to-emerald-400',
    hoverEffect: 'hover:bg-success/30 hover:shadow-[0_8px_32px_-8px_hsl(142,69%,45%,0.5)]',
  },
  {
    icon: Mail,
    title: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: 'from-accent to-orange-400',
    hoverEffect: 'hover:bg-accent/30 hover:shadow-glow-orange',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 section-underline">Contact</h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">Neem eenvoudig contact met ons op</p>
        </motion.div>

        {/* Contact Cards */}
        <div className="flex justify-center gap-3 md:gap-4 max-w-3xl mx-auto mb-14 overflow-x-auto px-2">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group bg-card rounded-xl p-3 md:p-5 shadow-md border-2 border-border/50 hover:border-transparent transition-all duration-300 hover:-translate-y-1 ${method.hoverEffect} text-center block w-28 md:w-36 flex-shrink-0`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-sm md:text-base text-primary">{method.title}</h3>
            </motion.a>
          ))}
        </div>

        {/* FAQ */}
        <motion.div id="faq" className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-8">Veelgestelde Vragen</h3>
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

        {/* Map */}
        <motion.div className="mt-20 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-medium text-primary">{siteConfig.address.full}</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-premium border-2 border-accent/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38602.36!2d4.6368!3d52.3874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ec1b73686193%3A0xbc11192b5e689d5e!2sHaarlem!5e0!3m2!1snl!2snl!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie JAS-Rijschool"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
