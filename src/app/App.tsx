import { useState } from 'react';
import { LoadingScreen } from './components/loading-screen';
import { Navbar } from './components/navbar';
import { Doodles } from './components/doodles';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { Team } from './components/team';
import { Methodology } from './components/methodology';
import { About } from './components/about';
import { Benefits } from './components/benefits';
import { ContactForm } from './components/contact-form';
import { Footer } from './components/footer';
import { WhatsAppButton } from './components/whatsapp-button';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-gray-50 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Doodles />
        <div className="pt-[100px]">
          <Hero />
          <Services />
          <Team />
          <Methodology />
          <About />
          <Benefits />
          <ContactForm />
          <Footer />
        </div>
        <WhatsAppButton />
      </div>
    </>
  );
}