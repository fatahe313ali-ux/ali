import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Team } from '@/components/Team';
import { Faq } from '@/components/Faq';
import { Gallery } from '@/components/Gallery';
import { CtaBanner } from '@/components/CtaBanner';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Gallery />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
