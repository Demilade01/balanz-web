import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#212121]">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
