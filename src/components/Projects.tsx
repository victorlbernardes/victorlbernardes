import React from 'react';
import { FolderGit2, ExternalLink, Github, Layers, Sparkles, Rocket } from 'lucide-react';
import { CVContent } from '../data/cvData';

interface ProjectsProps {
  data: CVContent;
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-retro-void relative border-t border-slate-200 dark:border-retro-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-pink-200 dark:border-retro-pink/50 bg-pink-50 dark:bg-retro-card text-xs font-mono font-semibold uppercase tracking-widest text-pink-700 dark:text-retro-pink mb-3 shadow-sm">
            <FolderGit2 size={13} />
            // {data.ui.projects.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
            {data.ui.projects.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-mono text-xs sm:text-sm">
            // {data.ui.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.projects.map((project, idx) => (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-retro-card border border-slate-200 dark:border-retro-border hover:border-indigo-600 dark:hover:border-retro-cyan transition-all flex flex-col justify-between group shadow-sm relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100 dark:border-retro-border">
                  <div className="flex items-center gap-2 font-mono text-xs text-indigo-600 dark:text-retro-cyan">
                    {project.title.includes('Delta-V') ? (
                      <Rocket size={17} className="text-[#fa5c5c]" />
                    ) : project.title.includes('RPG') ? (
                      <Sparkles size={17} className="text-amber-600 dark:text-retro-amber" />
                    ) : (
                      <Layers size={17} className="text-indigo-600 dark:text-retro-cyan" />
                    )}
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      [DOSSIER_{String(idx + 1).padStart(2, '0')}]
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-retro-dark text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-retro-cyan transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 border text-white transition-all shadow-sm ${
                          project.link.includes('itch.io') 
                            ? 'bg-[#fa5c5c] border-[#fa5c5c] hover:bg-[#d94444]' 
                            : 'bg-indigo-600 border-indigo-600 hover:bg-indigo-700'
                        }`}
                        aria-label="External Link"
                        title={project.link.includes('itch.io') ? 'Play on itch.io' : 'Open Project'}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-tech font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-retro-cyan transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-2.5 border-t border-slate-100 dark:border-retro-border flex flex-wrap gap-1 font-mono">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[10px] uppercase bg-slate-50 dark:bg-retro-dark text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
