import { useTranslation } from 'react-i18next';
import { Target, Lightbulb, Rocket, Calendar } from 'lucide-react';

export default function Vision() {
  const { t } = useTranslation();

  const strategicItems = t('vision.strategicFocus.items', { returnObjects: true }) as string[];

  const roadmap = [
    {
      year: '2025',
      key: 'year2025',
      icon: Target,
      color: 'bg-emerald-500',
    },
    {
      year: '2026',
      key: 'year2026',
      icon: Lightbulb,
      color: 'bg-blue-500',
    },
    {
      year: '2027',
      key: 'year2027',
      icon: Rocket,
      color: 'bg-purple-500',
    },
    {
      year: '2030',
      key: 'year2030',
      icon: Calendar,
      color: 'bg-amber-500',
    },
  ];

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

        {/* Development Roadmap */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
            {t('vision.roadmap.title')}
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 via-purple-500 to-amber-500 rounded-full" />
            
            <div className="grid lg:grid-cols-4 gap-8">
              {roadmap.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute top-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-4 border-emerald-500 z-10" />
                  
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                    {/* Year Badge */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${item.color} mb-4`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {item.year}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                      {t(`vision.roadmap.${item.key}.title`)}
                    </h4>
                    
                    <ul className="space-y-2">
                      {(t(`vision.roadmap.${item.key}.items`, { returnObjects: true }) as string[]).map((goal, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
