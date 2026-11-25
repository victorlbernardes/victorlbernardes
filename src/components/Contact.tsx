import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, Terminal, Linkedin, Gamepad2 } from 'lucide-react';
import { CVContent } from '../data/cvData';

interface ContactProps {
  data: CVContent;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-retro-void relative border-t border-slate-200 dark:border-retro-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-pink-200 dark:border-retro-pink/50 bg-pink-50 dark:bg-retro-card text-xs font-mono font-semibold uppercase tracking-widest text-pink-700 dark:text-retro-pink mb-3 shadow-sm">
            <Terminal size={13} />
            // {data.ui.contact.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
            {data.ui.contact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-mono text-xs sm:text-sm">
            // {data.ui.contact.subtitle}
          </p>
        </div>

        {/* 3 Contact Cards: Email, LinkedIn, itch.io */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12 font-mono">
          {/* 1. Email */}
          <div className="p-5 bg-white dark:bg-retro-card border border-slate-200 dark:border-retro-border hover:border-indigo-600 dark:hover:border-retro-cyan transition-all flex flex-col items-center text-center group shadow-sm">
            <div className="p-2.5 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-retro-dark text-indigo-600 dark:text-retro-cyan mb-3">
              <Mail size={18} />
            </div>
            <h3 className="font-tech font-bold uppercase text-slate-900 dark:text-white text-sm mb-1">{data.ui.contact.emailCard.title}</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4 break-all">{data.personal.email}</p>
            <div className="flex gap-2 w-full mt-auto">
              <a
                href={`mailto:${data.personal.email}`}
                className="flex-1 py-2 px-3 text-xs font-bold uppercase bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Send size={12} />
                {data.ui.contact.emailCard.sendBtn}
              </a>
              <button
                onClick={() => copyToClipboard(data.personal.email)}
                className="py-2 px-2.5 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-retro-dark text-slate-700 dark:text-slate-300 hover:border-indigo-600 text-xs transition-colors"
                title="Copy email"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          {/* 2. LinkedIn - Official Brand Color #0a66c2 */}
          <div className="p-5 bg-white dark:bg-retro-card border border-slate-200 dark:border-retro-border hover:border-[#0a66c2] transition-all flex flex-col items-center text-center group shadow-sm">
            <div className="p-2.5 border border-[#0a66c2]/30 bg-[#0a66c2]/10 text-[#0a66c2] mb-3">
              <Linkedin size={18} />
            </div>
            <h3 className="font-tech font-bold uppercase text-slate-900 dark:text-white text-sm mb-1">{data.ui.contact.linkedinCard.title}</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">{data.ui.contact.linkedinCard.subtitle}</p>
            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto py-2 px-3 text-xs font-bold uppercase bg-[#0a66c2] hover:bg-[#004182] text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Linkedin size={13} />
              {data.ui.contact.linkedinCard.btn}
            </a>
          </div>

          {/* 3. itch.io - Official Brand Color #fa5c5c */}
          <div className="p-5 bg-white dark:bg-retro-card border border-slate-200 dark:border-retro-border hover:border-[#fa5c5c] transition-all flex flex-col items-center text-center group shadow-sm">
            <div className="p-2.5 border border-[#fa5c5c]/30 bg-[#fa5c5c]/10 text-[#fa5c5c] mb-3">
              <Gamepad2 size={18} />
            </div>
            <h3 className="font-tech font-bold uppercase text-slate-900 dark:text-white text-sm mb-1">{data.ui.contact.itchioCard.title}</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">{data.ui.contact.itchioCard.subtitle}</p>
            <a
              href={data.personal.itchio}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto py-2 px-3 text-xs font-bold uppercase bg-[#fa5c5c] hover:bg-[#d94444] text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Gamepad2 size={13} />
              {data.ui.contact.itchioCard.btn}
            </a>
          </div>
        </div>

        {/* Location Note */}
        <div className="text-center font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
          <MapPin size={12} className="text-indigo-600 dark:text-retro-cyan" />
          <span>// {data.ui.contact.footerNote}</span>
        </div>
      </div>
    </section>
  );
};
