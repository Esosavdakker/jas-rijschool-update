import { motion } from 'framer-motion';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

const Footer = () => (
  <footer className="bg-card border-t-4 border-accent relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/30 pointer-events-none" />

    <div className="container mx-auto px-4 md:px-6 relative">
      <div className="py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center md:text-left">
            <h3 className="font-heading font-bold text-lg md:text-xl text-accent uppercase tracking-wide mb-4 md:mb-6">Contactinformatie</h3>
            <div className="space-y-3">
              <p className="font-heading font-bold text-base md:text-lg text-accent">{siteConfig.name}</p>
              <p className="flex items-start justify-center md:justify-start gap-2 text-primary text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="break-words">{siteConfig.address.full}</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-primary text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                {siteConfig.phone}
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-primary text-sm md:text-base break-all">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                <span className="break-all">{siteConfig.email}</span>
              </p>

              {/* Social */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-orange flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" /> <span className="hidden sm:inline">Facebook</span>
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-orange flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" /> <span className="hidden sm:inline">Instagram</span>
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-orange flex items-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  <span className="hidden sm:inline">TikTok</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center md:text-left">
            <h3 className="font-heading font-bold text-lg md:text-xl text-accent uppercase tracking-wide mb-4 md:mb-6">Dit kun je zelf regelen!</h3>
            <ul className="space-y-3">
              <li className="text-primary flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                <span className="text-accent font-bold">▸</span>
                Machtig ons voor je Praktijkexamen
              </li>
              <li>
                <a href="https://digid.nl/inloggen" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                  <span className="text-accent font-bold">▸</span>
                  DigiD nodig voor aanmelding CBR
                </a>
              </li>
              <li>
                <a href="https://www.cbr.nl/nl" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                  <span className="text-accent font-bold">▸</span>
                  Theorie-examen zelf inplannen bij CBR
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Logo */}
          <motion.div className="flex flex-col items-center justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="font-heading text-3xl md:text-5xl font-extrabold flex gap-1">
              <span className="text-primary">JAS</span>
              <span className="text-accent">-</span>
              <span className="text-secondary">Rijschool</span>
            </div>
            <p className="text-muted-foreground mt-4 text-center text-sm md:text-base">{siteConfig.tagline}</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t-2 border-accent/20 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-muted-foreground text-xs md:text-sm text-center">© {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.</p>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#privacy" className="text-accent hover:text-primary transition-colors">Privacy</a>
            <span className="text-muted-foreground">|</span>
            <a href="#algemene-voorwaarden" className="text-accent hover:text-primary transition-colors">Voorwaarden</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
