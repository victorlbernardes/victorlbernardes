import React from 'react';
import { ArrowDown, Linkedin, Sparkles, Terminal, Cpu, Gamepad2 } from 'lucide-react';
import { CVContent } from '../data/cvData';

interface HeroProps {
  data: CVContent;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-retro-void transition-colors duration-200">
      {/* 80s Retrowave Perspective Grid at bottom */}
      <div className="retrowave-grid-perspective opacity-25 dark:opacity-100 transition-opacity" />

      {/* Cyber Neon Glow Horizon */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-indigo-500/10 dark:from-retro-pink/15 via-purple-500/5 dark:via-retro-purple/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Status HUD Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-slate-300 dark:border-retro-cyan/50 bg-white dark:bg-retro-dark/90 text-xs font-mono font-semibold text-indigo-700 dark:text-retro-cyan mb-6 shadow-sm dark:shadow-neon-cyan">
          <span className="w-2 h-2 bg-emerald-500 dark:bg-retro-green rounded-full animate-pulse" />
          <span className="tracking-widest uppercase">// {data.ui.hero.statusBadge}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-900 dark:text-white mb-5 uppercase">
          {data.ui.hero.headline1} <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-purple-600 dark:from-retro-cyan dark:via-retro-pink dark:to-retro-amber">
            {data.ui.hero.headlineGradient}
          </span>
        </h1>

        {/* Workstation Interactive Terminal Box */}
        <div className="max-w-3xl mx-auto my-6 text-left bg-white dark:bg-retro-dark/95 border border-slate-300 dark:border-retro-cyan/40 p-4 sm:p-5 shadow-sm dark:shadow-neon-cyan font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-300 backdrop-blur-md relative">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200 dark:border-retro-border text-slate-500 text-[11px]">
            <span className="flex items-center gap-1.5 text-indigo-600 dark:text-retro-cyan font-bold">
              <Cpu size={14} /> SYS_KERNEL // V-BERNARDES.OS
            </span>
            <span className="text-emerald-600 dark:text-retro-pink font-mono tracking-widest">[STATUS: ONLINE]</span>
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-500 dark:text-retro-green font-bold">&gt; IDENTITY:</span>
              <strong className="text-slate-900 dark:text-white font-bold">{data.personal.name}</strong>
              <span className="text-slate-500 dark:text-slate-400">// {data.personal.headline}</span>
            </p>
            <p className="flex items-center gap-1.5 flex-wrap">
              <span className="text-indigo-600 dark:text-retro-cyan font-bold">&gt; CORE_STACK:</span>
              <strong className="text-amber-700 dark:text-retro-amber font-bold">JAVA (Spring Boot)</strong>
              <span className="text-slate-400">&gt;</span>
              <strong className="text-pink-600 dark:text-retro-pink font-bold">C++ (Drogon, UE5)</strong>
              <span className="text-slate-400">&gt;</span>
              <strong className="text-sky-600 dark:text-retro-cyan font-bold">TYPESCRIPT (React)</strong>
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              &gt; ARCHITECTURE: Event-Driven (Kafka) • Low-Latency REST/WebSockets • AWS Cloud
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 font-mono text-xs">
          <a
            href="#projects"
            className="px-5 py-3 font-bold uppercase tracking-wider text-white bg-indigo-600 dark:bg-retro-cyan dark:text-black hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
          >
            <Sparkles size={15} />
            {data.ui.hero.viewProjects}
          </a>
          <a
            href="#experience"
            className="px-5 py-3 font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-white dark:bg-retro-dark border border-slate-300 dark:border-retro-pink/60 hover:border-indigo-600 dark:hover:border-retro-pink transition-all flex items-center gap-2 shadow-sm"
          >
            <Terminal size={15} className="text-indigo-600 dark:text-retro-pink" />
            {data.ui.hero.viewExperience}
          </a>
          {/* LinkedIn with official Brand Colors */}
          <a
            href={data.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 font-bold uppercase tracking-wider text-white bg-[#0a66c2] hover:bg-[#004182] transition-all flex items-center gap-2 shadow-sm"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          {/* itch.io with official Brand Colors */}
          <a
            href={data.personal.itchio}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 font-bold uppercase tracking-wider text-white bg-[#fa5c5c] hover:bg-[#d94444] transition-all flex items-center gap-2 shadow-sm"
          >
            <Gamepad2 size={15} />
            itch.io Games
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2">
          {data.personal.stats.map((stat, idx) => (
            <div key={idx} className="p-3 sm:p-4 bg-white dark:bg-retro-dark/80 border border-slate-200 dark:border-retro-border text-left font-mono shadow-sm">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-indigo-600 dark:text-retro-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                // {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Down Indicator */}
        <div className="mt-10 flex justify-center">
          <a href="#about" className="text-slate-400 dark:text-retro-cyan hover:text-indigo-600 dark:hover:text-retro-pink transition-colors animate-bounce p-2 font-mono text-xs flex flex-col items-center gap-1" aria-label="Scroll">
            <span>[ SCROLL ]</span>
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
