import { ThemeProvider } from '@/contexts/ThemeContext';
import '@/i18n';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Business from '@/sections/Business';
import Exploration from '@/sections/Exploration';
import Projects from '@/sections/Projects';
import ESG from '@/sections/ESG';
import Vision from '@/sections/Vision';
import Footer from '@/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Business />
          <Exploration />
          <Projects />
          <ESG />
          <Vision />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
