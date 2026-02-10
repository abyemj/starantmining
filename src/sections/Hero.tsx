import { useTranslation } from 'react-i18next';
import { ChevronDown, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Theme-Aware Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/mining-site-aerial.jpg"
          alt="Mining Site"
          className="w-full h-full object-cover"
        />
        {/* Light mode: lighter overlay, Dark mode: darker overlay */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          theme === 'light' 
            ? 'bg-gradient-to-b from-slate-800/50 via-slate-700/40 to-slate-600/60' 
            : 'bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-900/85'
        }`} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full border backdrop-blur-sm mb-8 ${
            theme === 'light'
              ? 'bg-emerald-500/30 border-emerald-400/50'
              : 'bg-emerald-500/20 border-emerald-400/30'
          }`}>
            <span className={`text-sm font-medium tracking-wide ${
              theme === 'light' ? 'text-emerald-200' : 'text-emerald-300'
            }`}>
              {t('hero.tagline')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl md:text-3xl mb-8 font-light ${
            theme === 'light' ? 'text-slate-100' : 'text-slate-200'
          }`}>
            {t('hero.subtitle')}
          </p>

          {/* Location Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
            <div className={`flex items-center ${theme === 'light' ? 'text-slate-200' : 'text-slate-300'}`}>
              <Building2 className="h-5 w-5 mr-2 text-emerald-400" />
              <span className="text-base">{t('hero.headquarters')}</span>
            </div>
            <div className={`flex items-center ${theme === 'light' ? 'text-slate-200' : 'text-slate-300'}`}>
              <MapPin className="h-5 w-5 mr-2 text-emerald-400" />
              <span className="text-base">{t('hero.operations')}</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToProjects}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-medium rounded-lg shadow-lg shadow-emerald-600/30 transition-all hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-1"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-colors cursor-pointer ${
          theme === 'light' ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-400 hover:text-emerald-400'
        }`}
      >
        <span className="text-sm mb-2">{t('hero.scroll')}</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>

      {/* Decorative Elements - Theme Aware */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 transition-colors duration-500 ${
        theme === 'light' 
          ? 'bg-gradient-to-t from-white to-transparent' 
          : 'bg-gradient-to-t from-slate-900 to-transparent'
      }`} />
    </section>
  );
}
