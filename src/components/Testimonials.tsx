import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/config/content';
import { siteConfig } from '@/config/site';

const Testimonials = () => (
  <section id="reviews" className="py-20 md:py-28 bg-background overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      {/* Header */}
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
          <span className="text-lg font-bold text-primary">{siteConfig.stats.googleRating}</span>
          <span className="text-muted-foreground">| {siteConfig.stats.reviewCount} reviews</span>
        </div>
      </motion.div>
    </div>

    {/* Horizontal Scroll */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
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
              <Quote className="w-10 h-10 text-accent/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-primary font-medium italic leading-relaxed flex-1 mb-6">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-heading font-bold text-secondary">{testimonial.author}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
