import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const message = encodeURIComponent("Hallo! Ik heb interesse in rijlessen bij JAS-Rijschool.");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      // Hide when within 150px of the bottom
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 150;
      setIsVisible(!isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`https://web.whatsapp.com//${siteConfig.whatsapp}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-20 z-50 flex items-center gap-3 bg-[hsl(142,69%,45%)] hover:bg-[hsl(142,69%,40%)] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
