import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const contactMethods = [
  {
    icon: Phone,
    title: 'Bel ons',
    value: '06 44792093',
    href: 'tel:+31644792093',
    color: 'from-secondary to-blue-400',
    hoverShadow: 'hover:shadow-glow-blue',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'WhatsApp ons',
    href: 'https://wa.me/31644792093',
    color: 'from-success to-emerald-400',
    hoverShadow: 'hover:shadow-[0_8px_32px_-8px_hsl(142,69%,45%,0.4)]',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'jasrijschool@gmail.com',
    href: 'mailto:jasrijschool@gmail.com',
    color: 'from-accent to-orange-400',
    hoverShadow: 'hover:shadow-glow-orange',
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.name || !formState.email || !formState.message) {
      toast.error('Vul alle velden in', {
        icon: <AlertCircle className="w-5 h-5" />,
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      toast.error('Voer een geldig e-mailadres in');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Determine package name from message
      const packageMatch = formState.message.match(/Pakket [A-D]|Pakket \d|rijles|examen|TTT|Faalangst/i);
      const packageName = packageMatch ? packageMatch[0] : 'Algemeen contact';

      // Save to database
      const { error } = await supabase
        .from('package_signups')
        .insert({
          name: formState.name.trim(),
          email: formState.email.trim(),
          phone: formState.phone.trim() || null,
          package_name: packageName,
          message: formState.message.trim(),
        });

      if (error) throw error;
      
      toast.success('Bericht verzonden! We nemen snel contact op.', {
        icon: <CheckCircle className="w-5 h-5" />,
      });
      
      setFormState({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error saving signup:', error);
      toast.error('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 section-underline">
            Contact
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Neem eenvoudig contact met ons op
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group bg-card rounded-2xl p-8 shadow-md border-2 border-border/50 hover:border-transparent transition-all duration-300 hover:-translate-y-2 ${method.hoverShadow} text-center block`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                {method.title}
              </h3>

              <p className={`font-medium bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          id="contact-form"
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-8">
            Stuur ons een bericht
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Naam"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-accent/30 bg-card text-primary font-medium placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-glow-orange transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-accent/30 bg-card text-primary font-medium placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-glow-orange transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <input
                type="tel"
                placeholder="Telefoonnummer (optioneel)"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border-2 border-accent/30 bg-card text-primary font-medium placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-glow-orange transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                id="message"
                placeholder="Bericht"
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border-2 border-accent/30 bg-card text-primary font-medium placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-glow-orange transition-all duration-300 resize-none"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="min-w-[200px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Versturen...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Versturen
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-medium text-primary">Reggestraat 38, 1972 WL IJmuiden</span>
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
