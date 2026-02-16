import { useTranslation } from 'react-i18next';
import { Building2, Lightbulb, Globe, Award } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Building2,
      title: t('about.headquarters.title'),
      description: t('about.headquarters.content'),
    },
    {
      icon: Lightbulb,
      title: t('about.innovation.title'),
      description: t('about.innovation.content'),
    },
    {
      icon: Globe,
      title: t('about.africa.title'),
      description: t('about.africa.content'),
    },
  ];

  const stats = [
    { value: '10+', label: t('about.stats.experience'), icon: Award },
    { value: '5', label: t('about.stats.states'), icon: Globe },
    { value: '254+', label: t('about.stats.area'), icon: Building2 },
    { value: '5', label: t('about.stats.minerals'), icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
            {t('about.sectionTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/headquarters.jpg"
                alt="Starant Headquarters"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">2023</div>
              <div className="text-sm opacity-90">Established</div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700/50 border border-slate-200 dark:border-slate-700"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-emerald-600 dark:text-emerald-400" />
              <div className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
