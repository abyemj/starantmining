import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'business', href: '#business' },
    { key: 'projects', href: '#projects' },
    { key: 'esg', href: '#esg' },
    { key: 'vision', href: '#vision' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/logo.png"
                alt="Starant Mining"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>14A F.O Williams Street, Life Camp, Jabi Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>public@starantholdings.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>+234 816 067 7135</span>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
