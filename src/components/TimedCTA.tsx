import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

const TimedCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    const dismissed = sessionStorage.getItem('timed-cta-dismissed');
    if (dismissed) return;

    // Show after 4 minutes (240000ms)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 240000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('timed-cta-dismissed', 'true');
  };

  const handleClick = () => {
    window.open(`https://wa.me/${siteConfig.whatsapp}`, '_blank');
    handleDismiss();
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-32 md:bottom-24 right-4 md:right-6 z-50"
        >
          <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-2xl p-4 md:p-5 max-w-[280px]">
            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 p-1.5 bg-background border border-border rounded-full shadow-lg hover:bg-muted transition-colors"
              aria-label="Sluiten"
            >
              <X className="w-3.5 h-3.5 text-foreground" />
            </button>

            {/* Content */}
            <div className="text-primary-foreground">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold text-sm">Nog aan het kijken?</span>
              </div>
              <p className="text-sm opacity-90 mb-3">
                Plan direct je proefles en begin met rijden!
              </p>
              <Button
                onClick={handleClick}
                variant="secondary"
                size="sm"
                className="w-full font-semibold"
              >
                Plan nu je proefles
              </Button>
            </div>

            {/* Decorative pulse */}
            <motion.div
              className="absolute -inset-1 bg-primary/20 rounded-2xl -z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimedCTA;
