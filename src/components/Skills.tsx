import React from 'react';
import { Wrench, Server, Database, Cloud, Activity, Gamepad2, Cpu } from 'lucide-react';
import { CVContent } from '../data/cvData';

interface SkillsProps {
  data: CVContent;
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const getCategoryIcon = (title: string) => {
    if (title.includes('Core Stack') || title.includes('Stack Principal')) return <Cpu size={17} className="text-indigo-600 dark:text-retro-cyan" />;
    if (title.includes('Architecture') || title.includes('Arquitetura') || title.includes('Cloud')) return <Cloud size={17} className="text-pink-600 dark:text-retro-pink" />;
    if (title.includes('Databases') || title.includes('Bancos')) return <Database size={17} className="text-amber-600 dark:text-retro-amber" />;
    if (title.includes('Frontend')) return <Server size={17} className="text-emerald-600 dark:text-retro-green" />;
    if (title.includes('Observability') || title.includes('Observabilidade')) return <Activity size={17} className="text-rose-500 dark:text-rose-400" />;
    if (title.includes('Game') || title.includes('Jogos')) return <Gamepad2 size={17} className="text-purple-600 dark:text-purple-400" />;
    return <Wrench size={17} className="text-slate-500 dark:text-slate-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-retro-dark relative border-t border-slate-200 dark:border-retro-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-amber-200 dark:border-retro-amber/50 bg-amber-50 dark:bg-retro-card text-xs font-mono font-semibold uppercase tracking-widest text-amber-800 dark:text-retro-amber mb-3 shadow-sm">
            <Cpu size={13} />
            // {data.ui.skills.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
            {data.ui.skills.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-mono text-xs sm:text-sm">
            // {data.ui.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-slate-50 dark:bg-retro-card border border-slate-200 dark:border-retro-border hover:border-indigo-600 dark:hover:border-retro-cyan transition-all flex flex-col justify-between group relative shadow-sm"
            >
              {/* Corner Badge */}
              <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-400 dark:text-slate-600">
                [MOD_{String(idx + 1).padStart(2, '0')}]
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-slate-200 dark:border-retro-border">
                  <div className="p-1.5 border border-slate-200 dark:border-slate-700 bg-white dark:bg-retro-dark">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <h3 className="font-tech font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-retro-cyan transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 text-[11px] font-mono bg-white dark:bg-retro-dark text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-retro-pink transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span className="text-indigo-600 dark:text-retro-cyan text-[9px]">&gt;</span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
