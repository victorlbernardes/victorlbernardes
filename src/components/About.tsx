import React from 'react';
import { User, ShieldCheck, Cpu, Code2, Users2, Languages } from 'lucide-react';
import { CVContent } from '../data/cvData';

interface AboutProps {
  data: CVContent;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  const icons = [
    <Users2 className="text-indigo-600 dark:text-retro-cyan" size={20} />,
    <Cpu className="text-pink-600 dark:text-retro-pink" size={20} />,
    <ShieldCheck className="text-amber-600 dark:text-retro-amber" size={20} />,
    <Code2 className="text-emerald-600 dark:text-retro-green" size={20} />
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-retro-dark relative border-t border-slate-200 dark:border-retro-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-indigo-200 dark:border-retro-pink/50 bg-indigo-50 dark:bg-retro-card text-xs font-mono font-semibold uppercase tracking-widest text-indigo-700 dark:text-retro-pink mb-3">
            <User size={13} />
            // {data.ui.about.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
            {data.ui.about.title}
          </h2>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
            <div className="border-l-2 border-indigo-600 dark:border-retro-cyan pl-4 py-1 text-slate-800 dark:text-slate-200 whitespace-pre-line space-y-3">
              {data.personal.about}
            </div>

            {/* Languages Badge Row */}
            <div className="pt-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-700 dark:text-retro-cyan mb-2.5">
                <Languages size={14} />
                <span>// {data.ui.about.languagesTitle}</span>
              </div>
              <div className="flex flex-wrap gap-2 font-mono">
                {data.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs border border-slate-200 dark:border-retro-border bg-slate-50 dark:bg-retro-card text-slate-800 dark:text-slate-300 flex items-center gap-1.5"
                  >
                    <span className="font-bold text-slate-900 dark:text-white">{lang.name}:</span>
                    <span className="text-amber-700 dark:text-retro-amber">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3">
            {data.ui.about.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 dark:bg-retro-card/90 border border-slate-200 dark:border-retro-border hover:border-indigo-600 dark:hover:border-retro-cyan transition-all group shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-retro-dark">
                    {icons[idx % icons.length]}
                  </div>
                  <div>
                    <h3 className="font-tech font-bold text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider mb-1 group-hover:text-indigo-600 dark:group-hover:text-retro-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
