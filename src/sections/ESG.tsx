import { useTranslation } from 'react-i18next';
import { Leaf, Users, Scale, GraduationCap, CheckCircle2, Droplets, Recycle, TreePine, Sun } from 'lucide-react';

export default function ESG() {
  const { t } = useTranslation();

  const esgPillars = [
    {
      key: 'environment',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      items: t('esg.commitment.environment.items', { returnObjects: true }) as unknown as string[],
    },
    {
      key: 'social',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      items: t('esg.commitment.social.items', { returnObjects: true }) as unknown as string[],
    },
    {
      key: 'governance',
      icon: Scale,
      color: 'from-purple-500 to-violet-600',
      items: t('esg.commitment.governance.items', { returnObjects: true }) as unknown as string[],
    },
  ];

  const communityStats = [
    { value: '20km', label: t('esg.community.stats.roads'), icon: 'road' },
    { value: '10+', label: t('esg.community.stats.education'), icon: 'education' },
    { value: '10+', label: t('esg.community.stats.enterprises'), icon: 'enterprise' },
    { value: '100+', label: t('esg.community.stats.jobs'), icon: 'jobs' },
  ];

  const greenMeasures = [
    { icon: Sun, text: (t('esg.greenMining.measures', { returnObjects: true }) as unknown as string[])[0] },
    { icon: Recycle, text: (t('esg.greenMining.measures', { returnObjects: true }) as unknown as string[])[1] },
    { icon: TreePine, text: (t('esg.greenMining.measures', { returnObjects: true }) as unknown as string[])[2] },
    { icon: Droplets, text: (t('esg.greenMining.measures', { returnObjects: true }) as unknown as string[])[3] },
    { icon: CheckCircle2, text: (t('esg.greenMining.measures', { returnObjects: true }) as unknown as string[])[4] },
    { icon: Leaf, text: (t('esg.greenMining.measures', { returnObjects: true }) as unknown as string[])[5] },
  ];

  const goals = t('esg.greenMining.goals', { returnObjects: true }) as unknown as { title: string; desc: string }[];

  return (
    <section id="esg" className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
            {t('esg.sectionTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('esg.title')}
          </h2>
        </div>

        {/* ESG Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {esgPillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                <pillar.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t(`esg.commitment.${pillar.key}.title`)}
              </h3>
              <ul className="space-y-3">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Community Development */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
            {t('esg.community.title')}
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/work-in-progress.jpg"
                alt="Work in Progress"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {t('esg.community.infrastructure.title')}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('esg.community.infrastructure.content')}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {t('esg.community.education.title')}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('esg.community.education.content')}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-900/20">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {t('esg.community.economic.title')}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('esg.community.economic.content')}
                </p>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700/50 border border-slate-200 dark:border-slate-700"
              >
                <GraduationCap className="h-8 w-8 mx-auto mb-3 text-emerald-600 dark:text-emerald-400" />
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Green Mining */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                {t('esg.greenMining.title')}
              </h3>
              <p className="text-emerald-100 mb-8 leading-relaxed">
                {t('esg.greenMining.description')}
              </p>

              {/* Green Measures */}
              <div className="grid grid-cols-2 gap-3">
                {greenMeasures.map((measure, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-white/10 backdrop-blur-sm"
                  >
                    <measure.icon className="h-5 w-5 text-emerald-200" />
                    <span className="text-sm">{measure.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="grid grid-cols-2 gap-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-sm text-center"
                >
                  <div className="text-3xl font-bold mb-2">{index + 1}</div>
                  <div className="font-semibold mb-1">{goal.title}</div>
                  <div className="text-sm text-emerald-100">{goal.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
