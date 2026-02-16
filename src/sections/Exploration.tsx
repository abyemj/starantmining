import { useTranslation } from 'react-i18next';
import { Users, ClipboardCheck, Drill, Radar, FlaskConical, MapPinned } from 'lucide-react';

export default function Exploration() {
  const { t } = useTranslation();

  const equipment = [
    { icon: Drill, text: t('exploration.equipment.item1') },
    { icon: Radar, text: t('exploration.equipment.item2') },
    { icon: FlaskConical, text: t('exploration.equipment.item3') },
    { icon: MapPinned, text: t('exploration.equipment.item4') },
  ];

  const stats = [
    { key: 'area', icon: MapPinned },
    { key: 'drilling', icon: Drill },
    { key: 'tanb', icon: FlaskConical },
    { key: 'gold', icon: Users },
  ];

  return (
    <section id="exploration" className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
            {t('exploration.sectionTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('exploration.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('exploration.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/drilling-equipments.jpg"
              alt="Drilling Equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg font-medium">
                {t('exploration.imageCaption')}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Professional Team */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {t('exploration.professionalTeam.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('exploration.professionalTeam.content')}
                </p>
              </div>
            </div>

            {/* Third Party Verification */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <ClipboardCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {t('exploration.thirdParty.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('exploration.thirdParty.content')}
                </p>
              </div>
            </div>

            {/* Equipment */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {t('exploration.equipment.title')}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {equipment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800"
                  >
                    <item.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white"
            >
              <div className="relative z-10">
                <stat.icon className="h-8 w-8 mb-4 opacity-80" />
                <div className="text-4xl lg:text-5xl font-bold mb-1">
                  {t(`exploration.stats.${stat.key}.value`)}
                </div>
                <div className="text-sm opacity-90 mb-1">
                  {t(`exploration.stats.${stat.key}.label`)}
                </div>
                <div className="text-xs opacity-70">
                  {t(`exploration.stats.${stat.key}.unit`)}
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
