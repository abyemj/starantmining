import { useTranslation } from 'react-i18next';
import { Target, Lightbulb } from 'lucide-react';

export default function Vision() {
  const { t } = useTranslation();

  const strategicItems = t('vision.strategicFocus.items', { returnObjects: true }) as string[];

  

  return (
    <section id="vision" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800/50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
            {t('vision.sectionTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('vision.title')}
          </h2>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Corporate Vision */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {t('vision.corporateVision.title')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('vision.corporateVision.content')}
            </p>
          </div>

          {/* Core Mission */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6">
              <Lightbulb className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {t('vision.mission.title')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('vision.mission.content')}
            </p>
          </div>
        </div>

        {/* Strategic Focus */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            {t('vision.strategicFocus.title')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {strategicItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap removed */}
      </div>
    </section>
  );
}
