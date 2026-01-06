import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay before showing
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50"
        >
          <div className="bg-card border border-border rounded-2xl shadow-2xl p-4 md:p-5">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-xl shrink-0">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                  Cookies
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Wij gebruiken cookies om je ervaring te verbeteren. Door verder te gaan, ga je akkoord met ons cookiebeleid.
                </p>
                <div className="flex gap-2 mt-3">
                  <Button
                    onClick={acceptCookies}
                    size="sm"
                    className="text-xs h-8"
                  >
                    Accepteren
                  </Button>
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    size="sm"
                    className="text-xs h-8"
                  >
                    Weigeren
                  </Button>
                </div>
              </div>
              <button
                onClick={declineCookies}
                className="p-1 hover:bg-muted rounded-lg transition-colors shrink-0"
                aria-label="Sluiten"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
