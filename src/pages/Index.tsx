import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileCTA from '@/components/MobileCTA';
import BackToTop from '@/components/BackToTop';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Packages />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCTA />
      <BackToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
