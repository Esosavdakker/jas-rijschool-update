import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, ChevronUp, Sparkles, Clock, Flame } from 'lucide-react';
import { packages, extraOptions, followUpPackages } from '@/config/packages';

const Packages = () => {
  const [showExtras, setShowExtras] = useState(false);

  const scrollToContact = (message: string) => {
    const element = document.querySelector('#contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const textarea = document.querySelector('#message') as HTMLTextAreaElement;
        if (textarea) {
          textarea.value = message;
          textarea.focus();
        }
      }, 500);
    }
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 section-underline">
            Wat kost het?
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Geen verborgen kosten, gewoon eerlijke pakketten. Kies wat bij je past.
          </p>
          
          {/* Urgency Banner */}
          <motion.div
            className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 border-2 border-destructive/30 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-destructive">
              <Flame className="w-5 h-5 animate-pulse" />
              <span className="font-bold">Nog maar 3 plekken vrij deze maand</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-muted-foreground text-sm">
              <Clock className="w-4 h-4" />
              <span>Beperkte beschikbaarheid</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="relative w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-success to-emerald-400 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Populair
                  </div>
                </div>
              )}

              <div className={`h-full bg-card rounded-2xl p-6 shadow-md border-2 transition-all duration-300 hover:shadow-glow-orange hover:-translate-y-3 hover:rotate-1 flex flex-col tilt-card ${
                pkg.popular ? 'border-accent' : 'border-accent/30 hover:border-accent/60'
              }`}>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block mb-4 w-fit mx-auto">
                  <h3 className="font-heading font-bold text-lg">{pkg.name}</h3>
                </div>

                <div className="text-2xl font-bold text-secondary mb-6 text-center">{pkg.price}</div>

                <ul className="flex-1 space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="accent" className="w-full click-bounce pulse-cta" onClick={() => scrollToContact(`Ik wil me aanmelden voor ${pkg.name}`)}>
                  Aanmelden
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Extras */}
        <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Button variant="hero" size="lg" onClick={() => setShowExtras(!showExtras)} className="gap-2">
            {showExtras ? 'Verberg extra opties' : 'Bekijk extra opties'}
            {showExtras ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </motion.div>

        {/* Extra Options */}
        <AnimatePresence>
          {showExtras && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 pt-12 border-t-2 border-accent/20">
                {/* Extra Options */}
                <motion.div
                  className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border-2 border-secondary/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="font-heading font-bold text-xl text-primary bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block mb-6">
                    Extra opties
                  </h4>
                  <div className="space-y-3">
                    {extraOptions.map((option, i) => (
                      <div key={i} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                        <span className="font-medium text-primary">{option.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-secondary">{option.price}</span>
                          <Button size="sm" onClick={() => scrollToContact(`Ik wil graag: ${option.name}`)}>Kiezen</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Follow-up Packages */}
                <motion.div
                  className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border-2 border-secondary/30"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-heading font-bold text-xl text-primary bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block mb-6">
                    Vervolg pakketten
                  </h4>
                  <div className="space-y-3">
                    {followUpPackages.map((pkg, i) => (
                      <div key={i} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                        <span className="font-bold text-primary">{pkg.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-secondary">{pkg.price}</span>
                          <Button size="sm" onClick={() => scrollToContact(`Ik wil graag: ${pkg.name}`)}>Kiezen</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-muted-foreground mt-8 italic">*Lesduur: 100 minuten per les</p>
      </div>
    </section>
  );
};

export default Packages;
