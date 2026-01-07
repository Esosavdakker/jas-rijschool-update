import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { preloadImages } from '@/lib/performance';
import studentPassed1 from '@/assets/student-passed-1.jpg';
import studentPassed2 from '@/assets/student-passed-2.jpg';
import studentPassed3 from '@/assets/student-passed-3.jpg';
import studentPassed4 from '@/assets/student-passed-4.jpg';
import studentPassed5 from '@/assets/student-passed-5.jpg';
import studentPassed6 from '@/assets/student-passed-6.jpg';

const heroImages = [studentPassed1, studentPassed2, studentPassed3, studentPassed4, studentPassed5, studentPassed6];

// Preload hero images for faster slideshow
if (typeof window !== 'undefined') {
  preloadImages(heroImages);
}

const stats = [
  { number: siteConfig.stats.passedStudents, label: 'Geslaagden' },
  { number: siteConfig.stats.googleRating, label: 'Google Rating' },
  { number: siteConfig.stats.yearsExperience, label: 'Jaar Ervaring' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPackages = useCallback(() => {
    document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="home" className="relative min-h-screen hero-gradient overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] gap-8 lg:gap-12 py-12">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Leren rijden?{' '}
              <span className="text-accent italic">Doe het goed.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-6 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Geen standaard lesjes, maar rijlessen die bij jou passen. 
              Met Alex als vaste instructeur haal je je rijbewijs relaxed én in één keer.
            </motion.p>

            {/* Talen badge */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30">
                🇳🇱 Nederlands
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30">
                🇬🇧 English
              </span>
            </motion.div>

            {/* Voordelen */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span className="text-green-400">✓</span> Hoge slagingspercentages
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span className="text-green-400">✓</span> Lage prijzen voor lessen & examens
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span className="text-green-400">✓</span> Flexibele planning, ook 's avonds
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span className="text-green-400">✓</span> Moderne, comfortabele lesauto
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Button variant="hero" size="xl" onClick={scrollToPackages} className="group">
                Bekijk onze pakketten
                <ChevronRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Slideshow */}
          <motion.div
            className="flex-1 w-full max-w-lg lg:max-w-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-primary rounded-3xl blur opacity-30" />
              
              <div className="relative rounded-3xl overflow-hidden bg-primary/20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={heroImages[currentSlide]}
                    alt={`Geslaagde leerling ${currentSlide + 1} bij JAS-Rijschool`}
                    className="w-full h-full object-cover"
                    loading={currentSlide === 0 ? 'eager' : 'lazy'}
                    decoding={currentSlide === 0 ? 'sync' : 'async'}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7 }}
                  />
                </AnimatePresence>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Ga naar slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
