import { motion } from 'framer-motion';
import { PhoneCall, Car, GraduationCap, PartyPopper } from 'lucide-react';
import { howItWorksSteps } from '@/config/content';

const iconMap = { PhoneCall, Car, GraduationCap, PartyPopper };

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}

                <div className="text-center">
                  <motion.div className="text-6xl font-heading font-extrabold text-muted/30 mb-4" whileHover={{ scale: 1.1 }}>
                    {step.number}
                  </motion.div>

                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
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

export default HowItWorks;
