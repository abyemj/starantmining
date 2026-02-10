import { useTranslation } from 'react-i18next';
import { Search, Pickaxe, Factory, Ship } from 'lucide-react';

export default function Business() {
  const { t } = useTranslation();

  const valueChain = [
    {
      icon: Search,
      title: t('business.valueChain.step1'),
      description: t('business.valueChain.step1Desc'),
    },
    {
      icon: Pickaxe,
      title: t('business.valueChain.step2'),
      description: t('business.valueChain.step2Desc'),
    },
    {
      icon: Factory,
      title: t('business.valueChain.step3'),
      description: t('business.valueChain.step3Desc'),
    },
    {
      icon: Ship,
      title: t('business.valueChain.step4'),
      description: t('business.valueChain.step4Desc'),
    },
  ];

  return (
    <section id="business" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800/50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
            {t('business.sectionTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('business.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('business.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Strategic Focus */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="w-14 h-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
              <Search className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {t('business.strategicFocus.title')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('business.strategicFocus.content')}
            </p>
          </div>

          {/* Dual Mission */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <Ship className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {t('business.dualMission.title')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('business.dualMission.content')}
            </p>
          </div>
        </div>

        {/* Value Chain */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
            {t('business.valueChain.title')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueChain.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Line */}
                {index < valueChain.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-emerald-300 dark:bg-emerald-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
