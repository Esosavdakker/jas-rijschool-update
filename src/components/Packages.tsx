import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const packages = [
  {
    id: 'a',
    name: 'Pakket A',
    price: '€1100,-',
    features: ['20 rijlessen*', 'Snel beginnen', 'Vaste instructeur', 'Nieuwe lesauto', 'Vanaf 16,5 jaar'],
    popular: false,
  },
  {
    id: 'b',
    name: 'Pakket B',
    price: '€1900,-',
    features: ['30 rijlessen*', 'Snel beginnen', 'Vaste instructeur', 'Nieuwe lesauto', 'Vanaf 16,5 jaar', 'Praktijkexamen CBR'],
    popular: false,
  },
  {
    id: 'c',
    name: 'Pakket C',
    price: '€2025,-',
    features: ['25 rijlessen*', 'Snel beginnen', 'Vaste instructeur', 'Nieuwe lesauto', 'Vanaf 16,5 jaar', 'Praktijkexamen CBR', '1x herexamen'],
    popular: false,
  },
  {
    id: 'd',
    name: 'Pakket D',
    price: '€2625,-',
    features: ['40 rijlessen*', 'Snel beginnen', 'Vaste instructeur', 'Nieuwe lesauto', 'Vanaf 16,5 jaar', 'Praktijkexamen CBR', '1x herexamen'],
    popular: true,
  },
];

const extraOptions = [
  { name: 'Rijles 90 min', price: '€95,-' },
  { name: 'Los rijexamen CBR', price: '€235,-' },
  { name: 'TTT toets', price: '€235,-' },
  { name: 'Faalangst examen', price: '€335,-' },
];

const followUpPackages = [
  { name: 'Pakket 1 - 5 lessen', price: '€345,-' },
  { name: 'Pakket 2 - 10 lessen', price: '€650,-' },
  { name: 'Pakket 3 - 15 lessen', price: '€900,-' },
];

const Packages = () => {
  const [showExtras, setShowExtras] = useState(false);

  const scrollToContact = (message: string) => {
    const element = document.querySelector('#contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Set message in textarea after scroll
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 section-underline">
            Pakketten & Prijzen
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Kies het pakket dat bij jou past en start direct met je rijopleiding
          </p>
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
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-success to-emerald-400 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Populair
                  </div>
                </div>
              )}

              <div className={`h-full bg-card rounded-2xl p-6 shadow-md border-2 transition-all duration-300 hover:shadow-glow-orange hover:-translate-y-2 flex flex-col ${
                pkg.popular ? 'border-accent' : 'border-accent/30 hover:border-accent/60'
              }`}>
                {/* Package Title */}
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block mb-4 w-fit mx-auto">
                  <h3 className="font-heading font-bold text-lg">{pkg.name}</h3>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-secondary mb-6 text-center">
                  {pkg.price}
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="accent"
                  className="w-full"
                  onClick={() => scrollToContact(`Ik wil me aanmelden voor ${pkg.name}`)}
                >
                  Aanmelden
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Extras Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            variant="hero"
            size="lg"
            onClick={() => setShowExtras(!showExtras)}
            className="gap-2"
          >
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
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 pt-12 border-t-2 border-accent/20">
                {/* Extra Options Card */}
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
                          <Button
                            size="sm"
                            onClick={() => scrollToContact(`Ik wil graag: ${option.name}`)}
                          >
                            Kiezen
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Follow-up Packages Card */}
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
                        <span className="font-medium text-primary">{pkg.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-secondary">{pkg.price}</span>
                          <Button
                            size="sm"
                            onClick={() => scrollToContact(`Ik wil graag: ${pkg.name}`)}
                          >
                            Kiezen
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-8 italic">
          *Lesduur: 90 minuten per les
        </p>
      </div>
    </section>
  );
};

export default Packages;
