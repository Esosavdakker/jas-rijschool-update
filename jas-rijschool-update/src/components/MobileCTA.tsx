import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

const MobileCTA = () => (
  <motion.div
    className="fixed bottom-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-lg border-t border-white/10 p-3 md:hidden"
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
  >
    <div className="flex gap-3">
      <a
        href={`tel:${siteConfig.phoneLink}`}
        className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white py-3 rounded-xl font-semibold transition-colors"
      >
        <Phone className="w-5 h-5" /> Bellen
      </a>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[hsl(142,69%,45%)] hover:bg-[hsl(142,69%,40%)] text-white py-3 rounded-xl font-semibold transition-colors"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp
      </a>
    </div>
  </motion.div>
);

export default MobileCTA;
