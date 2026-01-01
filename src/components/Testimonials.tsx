import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Ik heb goede lessen gehad van Alex. Een superfijne instructeur die duidelijk uitleg geeft en met wie het altijd gezellig is. Bedankt!",
    author: "Jenz Groen",
    rating: 5,
  },
  {
    text: "Door zijn rustige houding en duidelijke instructies in 1 keer geslaagd! Bedankt Alex!",
    author: "N",
    rating: 5,
  },
  {
    text: "Eigenlijk de beste leraar!!!!",
    author: "Vlad Ivanov",
    rating: 5,
  },
  {
    text: "Ik heb mijn rijbewijs in één keer gehaald! En bedankt Alex voor je geduldige, rustige en duidelijke instructies!! Superblij!!",
    author: "Yeny Isimtekin",
    rating: 5,
  },
  {
    text: "Supervriendelijk! En heel flexibel met reistijden.",
    author: "Imanuel Orlando",
    rating: 5,
  },
  {
    text: "Zeer rustige instructeur met veel geduld. Ik heb in één keer mijn rijbewijs gehaald.",
    author: "Zahra Rana",
    rating: 5,
  },
  {
    text: "Het was de beste ervaring ooit en de rustige manier van lesgeven was erg behulpzaam bij het examen.",
    author: "Abdul Kayyum Abdulla",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 section-underline">
            Google Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-bold text-primary">4.9</span>
            <span className="text-muted-foreground">| 50+ reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 overflow-x-auto custom-scrollbar px-6 md:px-12 pb-4 -mx-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[350px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full bg-card rounded-2xl p-6 shadow-md border-2 border-accent/20 hover:border-accent/40 hover:shadow-glow-orange transition-all duration-300 hover:-translate-y-2 flex flex-col">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-accent/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-primary font-medium italic leading-relaxed flex-1 mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-heading font-bold text-secondary">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
