import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { CVContent } from '../data/cvData';

interface EducationProps {
  data: CVContent;
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-retro-dark relative border-t border-slate-200 dark:border-retro-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-indigo-200 dark:border-retro-cyan/50 bg-indigo-50 dark:bg-retro-card text-xs font-mono font-semibold uppercase tracking-widest text-indigo-700 dark:text-retro-cyan mb-3 shadow-sm">
            <GraduationCap size={13} />
            // {data.ui.education.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
            {data.ui.education.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-mono text-xs sm:text-sm">
            // {data.ui.education.subtitle}
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {data.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-slate-50 dark:bg-retro-card border border-slate-200 dark:border-retro-border hover:border-amber-500 dark:hover:border-retro-amber transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3 pb-2.5 border-b border-slate-200 dark:border-retro-border font-mono">
                  <div className="flex items-center gap-2 text-amber-700 dark:text-retro-amber">
                    <GraduationCap size={17} />
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">[DEGREE]</span>
                  </div>
                  <span className="text-[11px] text-indigo-600 dark:text-retro-cyan font-bold">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-tech font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-retro-amber transition-colors mb-1">
                  {edu.degree}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-pink-600 dark:text-retro-pink mb-2">
                  @{edu.institution}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <MapPin size={11} />
                  {edu.location}
                </div>
                {edu.details && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
