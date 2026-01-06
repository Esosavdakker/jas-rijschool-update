import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
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
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.name || !formState.email || !formState.message) {
      toast.error('Vul alle velden in', { icon: <AlertCircle className="w-5 h-5" /> });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      toast.error('Voer een geldig e-mailadres in');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const packageMatch = formState.message.match(/Pakket [A-D]|Pakket \d|rijles|examen|TTT|Faalangst/i);
      const packageName = packageMatch ? packageMatch[0] : 'Algemeen contact';

      const { error } = await supabase.from('package_signups').insert({
        name: formState.name.trim(),
        email: formState.email.trim(),
        phone: formState.phone.trim() || null,
        package_name: packageName,
        message: formState.message.trim(),
      });

      if (error) throw error;
      
      toast.success('Bericht verzonden! We nemen snel contact op.', { icon: <CheckCircle className="w-5 h-5" /> });
      setFormState({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error saving signup:', error);
      toast.error('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-5 py-4 rounded-xl border-2 border-accent/30 bg-card text-primary font-medium placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-glow-orange transition-all duration-300";

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

        {/* Form */}
        <motion.div id="contact-form" className="max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-8">Stuur ons een bericht</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Naam" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className={inputClass} />
              <input type="email" placeholder="E-mail" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className={inputClass} />
            </div>
            <input type="tel" placeholder="Telefoonnummer (optioneel)" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className={inputClass} />
            <textarea id="message" placeholder="Bericht" rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className={`${inputClass} resize-none`} />

            <div className="text-center">
              <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="min-w-[200px]">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Versturen...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">Versturen <Send className="w-5 h-5" /></span>
                )}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* FAQ */}
        <motion.div id="faq" className="max-w-3xl mx-auto mt-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
