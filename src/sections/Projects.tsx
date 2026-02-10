import { useTranslation } from 'react-i18next';
import { Battery, Cpu, CircleDollarSign, Plane, MapPin, Ruler, FileCheck, Layers } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

  const overviewStats = [
    { value: '254+', label: t('projects.overview.totalArea'), unit: 'sq km' },
    { value: '10+', label: t('projects.overview.miningRights'), unit: '' },
    { value: '5', label: t('projects.overview.minerals'), unit: '' },
    { value: '5', label: t('projects.overview.states'), unit: '' },
  ];

  const projects = [
    {
      key: 'lithium',
      icon: Battery,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    },
    {
      key: 'tantalum',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      key: 'gold',
      icon: CircleDollarSign,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    },
    {
      key: 'titanium',
      icon: Plane,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
  ];

  const getApplications = (key: string): string[] => {
    const apps = t(`projects.${key}.applications`, { returnObjects: true });
    return Array.isArray(apps) ? apps as string[] : [];
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800/50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
            {t('projects.sectionTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {overviewStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
              {stat.unit && (
                <div className="text-xs text-slate-500 dark:text-slate-500">
                  {stat.unit}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
            >
              {/* Card Header */}
              <div className={`p-6 bg-gradient-to-r ${project.color}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {t(`projects.${project.key}.description`)}
                </p>

                {/* Details Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        {t(`projects.${project.key}.location`)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Ruler className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        {t(`projects.${project.key}.area`)}
                      </div>
                    </div>
                  </div>
                  {project.key === 'lithium' && (
                    <>
                      <div className="flex items-start space-x-3">
                        <FileCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {t(`projects.${project.key}.rights`)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Layers className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {t(`projects.${project.key}.resources`)}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {project.key === 'tantalum' && (
                    <>
                      <div className="flex items-start space-x-3">
                        <Layers className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {t(`projects.${project.key}.minerals`)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {t(`projects.${project.key}.resources`)}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {project.key === 'gold' && (
                    <>
                      <div className="flex items-start space-x-3">
                        <Layers className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {t(`projects.${project.key}.reserves`)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {t(`projects.${project.key}.smelter`)} {t(`projects.${project.key}.smelterYear`)}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {project.key === 'titanium' && (
                    <>
                      <div className="flex items-start space-x-3">
                        <FileCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {t(`projects.${project.key}.rights`)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Layers className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {t(`projects.${project.key}.exploration`)}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Applications */}
                <div className={`p-4 rounded-xl ${project.bgColor}`}>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Applications:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getApplications(project.key).map((app: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
