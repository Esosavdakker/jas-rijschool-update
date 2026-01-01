import { motion } from 'framer-motion';
import { Car, HeartHandshake, Award } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Reguliere rijlessen',
    description: 'Begin vanaf het instapniveau en bouw stap voor stap vertrouwen op in het verkeer.',
    color: 'from-secondary to-blue-400',
  },
  {
    icon: HeartHandshake,
    title: 'Faalangstbegeleiding',
    description: 'Speciale begeleiding voor leerlingen die last hebben van faalangst, examenstress of spanning achter het stuur.',
    color: 'from-accent to-orange-400',
  },
  {
    icon: Award,
    title: 'Praktijkexamen & begeleiding',
    description: 'Wij nemen je mee tot aan het examen met onze auto en zorgen voor optimale voorbereiding.',
    color: 'from-primary to-blue-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
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
            Onze Diensten
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Wij bieden diverse rijopleidingen aan die aansluiten bij jouw niveau en wensen
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative bg-card rounded-2xl p-8 shadow-md border border-border/50 transition-all duration-500 group-hover:shadow-premium-lg group-hover:-translate-y-2 h-full">
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
