import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Gamepad2 } from 'lucide-react';
import { CVContent } from '../data/cvData';

interface FooterProps {
  data: CVContent;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-100 dark:bg-retro-void border-t border-slate-200 dark:border-retro-border text-slate-500 dark:text-slate-400 font-mono text-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 border border-indigo-600 dark:border-retro-cyan bg-white dark:bg-retro-dark flex items-center justify-center text-indigo-600 dark:text-retro-cyan font-bold font-mono text-[11px]">
              VB
            </span>
            <div>
              <span className="font-tech font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">{data.personal.name}</span>
              <span className="block text-[10px] text-slate-500">© {new Date().getFullYear()} // ALL_RIGHTS_RESERVED</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 border border-slate-300 dark:border-slate-800 bg-white dark:bg-retro-dark text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={data.personal.itchio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="itch.io"
              className="p-1.5 border border-slate-300 dark:border-slate-800 bg-white dark:bg-retro-dark text-[#fa5c5c] hover:bg-[#fa5c5c]/10 transition-colors"
              title="itch.io"
            >
              <Gamepad2 size={14} />
            </a>
            <a
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 border border-slate-300 dark:border-slate-800 bg-white dark:bg-retro-dark text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-retro-cyan transition-colors"
              title="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={`mailto:${data.personal.email}`}
              aria-label="Email"
              className="p-1.5 border border-slate-300 dark:border-slate-800 bg-white dark:bg-retro-dark text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-retro-cyan transition-colors"
              title="Email"
            >
              <Mail size={14} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-1.5 border border-indigo-600 dark:border-retro-pink bg-white dark:bg-retro-dark text-indigo-600 dark:text-retro-pink hover:bg-indigo-600 hover:text-white dark:hover:bg-retro-pink dark:hover:text-white transition-all ml-1.5"
              title="Return to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
