import { motion } from 'framer-motion';
import { Car, HeartHandshake, Award } from 'lucide-react';
import { services } from '@/config/content';

const iconMap = { Car, HeartHandshake, Award };

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 section-underline">
          Wat kunnen we voor je doen?
        </h2>
        <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
          Bij JAS-Rijschool draait alles om jou. Geen standaard programma — we kijken wat jij nodig hebt.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="relative bg-card rounded-2xl p-8 shadow-md border border-border/50 transition-all duration-500 group-hover:shadow-premium-lg group-hover:-translate-y-3 h-full tilt-card">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white icon-spin" />
                </div>

                <h3 className="text-xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
