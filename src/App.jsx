// ===================================
// App.jsx - Main Application Layout
// All sections are imported and rendered here
// ===================================

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navigation Bar - fixed at top */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer + WhatsApp Button */}
      <Footer />
    </>
  );
}

export default App;
