import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Layers } from 'lucide-react';
import { CVContent } from '../data/cvData';

interface ExperienceProps {
  data: CVContent;
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const [filter, setFilter] = useState<'ALL' | 'LEADERSHIP' | 'BACKEND' | 'GAME'>('ALL');

  const filteredExperiences = data.experiences.filter((exp) => {
    if (filter === 'ALL') return true;
    if (filter === 'LEADERSHIP') return exp.role.includes('Lead');
    if (filter === 'GAME') return exp.company.includes("Can't Afford") || exp.technologies.includes('Unreal Engine 5');
    if (filter === 'BACKEND') return exp.technologies.some(t => ['Java', 'Spring Boot', 'Kafka', 'C++'].includes(t));
    return true;
  });

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-retro-void relative border-t border-slate-200 dark:border-retro-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-indigo-200 dark:border-retro-cyan/50 bg-white dark:bg-retro-card text-xs font-mono font-semibold uppercase tracking-widest text-indigo-700 dark:text-retro-cyan mb-3 shadow-sm">
            <Briefcase size={13} />
            // {data.ui.experience.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
            {data.ui.experience.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-mono text-xs sm:text-sm">
            // {data.ui.experience.subtitle}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 font-mono">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border transition-all ${
                filter === 'ALL'
                  ? 'border-indigo-600 bg-indigo-600 text-white dark:border-retro-cyan dark:bg-retro-cyan dark:text-black shadow-sm'
                  : 'border-slate-300 bg-white dark:border-slate-800 dark:bg-retro-dark text-slate-700 dark:text-slate-400 hover:border-slate-400'
              }`}
            >
              [ {data.ui.experience.filters.all}: {data.experiences.length} ]
            </button>
            <button
              onClick={() => setFilter('LEADERSHIP')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border transition-all ${
                filter === 'LEADERSHIP'
                  ? 'border-pink-600 bg-pink-600 text-white dark:border-retro-pink dark:bg-retro-pink shadow-sm'
                  : 'border-slate-300 bg-white dark:border-slate-800 dark:bg-retro-dark text-slate-700 dark:text-slate-400 hover:border-slate-400'
              }`}
            >
              [ {data.ui.experience.filters.leadership} ]
            </button>
            <button
              onClick={() => setFilter('BACKEND')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border transition-all ${
                filter === 'BACKEND'
                  ? 'border-amber-600 bg-amber-600 text-white dark:border-retro-amber dark:bg-retro-amber dark:text-black shadow-sm'
                  : 'border-slate-300 bg-white dark:border-slate-800 dark:bg-retro-dark text-slate-700 dark:text-slate-400 hover:border-slate-400'
              }`}
            >
              [ {data.ui.experience.filters.backend} ]
            </button>
            <button
              onClick={() => setFilter('GAME')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border transition-all ${
                filter === 'GAME'
                  ? 'border-emerald-600 bg-emerald-600 text-white dark:border-retro-green dark:bg-retro-green dark:text-black shadow-sm'
                  : 'border-slate-300 bg-white dark:border-slate-800 dark:bg-retro-dark text-slate-700 dark:text-slate-400 hover:border-slate-400'
              }`}
            >
              [ {data.ui.experience.filters.game} ]
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-300 dark:border-retro-cyan/40 ml-4 md:ml-36 space-y-8">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className={`absolute -left-[7px] top-2 w-3.5 h-3.5 border-2 border-white dark:border-retro-void transition-transform group-hover:scale-125 ${
                exp.current ? 'bg-emerald-500 shadow-sm' : 'bg-indigo-600 dark:bg-retro-cyan'
              }`} />

              {/* Date Badge on Desktop */}
              <div className="hidden md:block absolute -left-40 top-1 w-32 text-right font-mono">
                <span className={`text-[11px] font-bold uppercase block tracking-wider ${exp.current ? 'text-emerald-700 dark:text-retro-green' : 'text-slate-600 dark:text-retro-cyan'}`}>
                  &gt; {exp.period}
                </span>
              </div>

              {/* Card */}
              <div className="p-5 bg-white dark:bg-retro-card/90 border border-slate-200 dark:border-retro-border hover:border-indigo-600 dark:hover:border-retro-cyan transition-all shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2.5">
                  <div>
                    <h3 className="text-base sm:text-lg font-tech font-bold uppercase tracking-wide text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-retro-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-amber-700 dark:text-retro-amber flex items-center gap-2 mt-0.5">
                      <span>@{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Period */}
                  <div className="md:hidden">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-slate-300 dark:border-retro-cyan/40 text-[10px] font-mono text-slate-700 dark:text-retro-cyan bg-slate-50 dark:bg-retro-dark">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                  </div>

                  {exp.current && (
                    <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-emerald-300 dark:border-retro-green text-[10px] font-mono uppercase tracking-widest text-emerald-700 dark:text-retro-green bg-emerald-50 dark:bg-retro-green/10">
                      <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-retro-green rounded-full animate-pulse" />
                      {data.ui.experience.currentBadge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3.5 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-1.5 mb-4 font-sans">
                  {exp.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="text-pink-600 dark:text-retro-pink font-mono font-bold mt-0.5">&gt;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-2.5 border-t border-slate-100 dark:border-retro-border flex flex-wrap gap-1.5 items-center font-mono">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                    <Layers size={11} /> {data.ui.experience.stackLabel}
                  </span>
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono uppercase bg-slate-100 dark:bg-retro-dark text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
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
