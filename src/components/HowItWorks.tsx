import { motion } from 'framer-motion';
import { PhoneCall, Car, GraduationCap, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    number: '01',
    title: 'Gratis kennismaking',
    description: 'Bel of WhatsApp ons voor een gratis kennismakingsgesprek. We bespreken je wensen en plannen een proefles.',
    color: 'from-secondary to-blue-400',
  },
  {
    icon: Car,
    number: '02',
    title: 'Rijlessen op maat',
    description: 'Je krijgt persoonlijke begeleiding afgestemd op jouw niveau. We werken samen aan je rijvaardigheid en zelfvertrouwen.',
    color: 'from-accent to-orange-400',
  },
  {
    icon: GraduationCap,
    number: '03',
    title: 'Examenvoorbereiding',
    description: 'Als je klaar bent, bereiden we je optimaal voor op het praktijkexamen. We oefenen examensituaties en routes.',
    color: 'from-primary to-blue-600',
  },
  {
    icon: PartyPopper,
    number: '04',
    title: 'Rijbewijs behaald!',
    description: 'Met de juiste voorbereiding haal je je rijbewijs. Je bent klaar om zelfstandig de weg op te gaan!',
    color: 'from-success to-emerald-400',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
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
            Zo Werkt Het
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            In 4 stappen van beginner naar rijbewijs
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Connector Line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}

                <div className="text-center">
                  {/* Step Number */}
                  <motion.div
                    className="text-6xl font-heading font-extrabold text-muted/30 mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-orange-400 hover:from-accent/90 hover:to-orange-400/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-glow-orange transition-all duration-300"
          >
            <PhoneCall className="w-5 h-5" />
            Start je rijles avontuur
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
