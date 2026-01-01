import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';
import instructorAlex from '@/assets/instructor-alex.jpg';

const highlights = [
  { icon: Award, label: '10+ jaar ervaring' },
  { icon: Users, label: '500+ geslaagden' },
  { icon: Clock, label: 'Flexibele lestijden' },
  { icon: Heart, label: 'Geduldig & vriendelijk' },
];

const Instructor = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-accent via-secondary to-primary rounded-3xl blur opacity-20" />
            <img
              src={instructorAlex}
              alt="Instructeur Alex - Rij-instructeur bij JAS-Rijschool met meer dan 10 jaar ervaring"
              loading="lazy"
              className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 section-underline">
              Maak kennis met Alex
            </h2>
            <p className="text-muted-foreground mt-8 text-lg leading-relaxed mb-6">
              Mijn naam is Alex en ik ben de oprichter van JAS-Rijschool. Met meer dan 10 jaar ervaring 
              als rij-instructeur help ik je met geduld en duidelijke uitleg om een zelfverzekerde 
              bestuurder te worden.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Mijn aanpak is persoonlijk en rustgevend. Ik geloof dat iedereen op zijn eigen tempo 
              leert en zorg ervoor dat je je op je gemak voelt tijdens elke les. Samen halen we 
              jouw rijbewijs!
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-card p-4 rounded-xl border-2 border-accent/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-primary text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
