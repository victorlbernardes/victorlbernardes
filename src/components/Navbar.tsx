import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Globe, Gamepad2 } from 'lucide-react';
import { CVContent } from '../data/cvData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  language: 'en' | 'pt';
  setLanguage: (lang: 'en' | 'pt') => void;
  crtMode: boolean;
  setCrtMode: (value: boolean) => void;
  data: CVContent;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
  data
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: data.ui.nav.about, href: '#about' },
    { name: data.ui.nav.experience, href: '#experience' },
    { name: data.ui.nav.skills, href: '#skills' },
    { name: data.ui.nav.projects, href: '#projects' },
    { name: data.ui.nav.education, href: '#education' },
    { name: data.ui.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-retro-void/90 backdrop-blur-md border-b border-slate-200 dark:border-retro-border shadow-sm' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 border border-indigo-600 dark:border-retro-cyan bg-indigo-50 dark:bg-retro-dark flex items-center justify-center text-indigo-600 dark:text-retro-cyan font-mono font-bold text-sm transition-transform group-hover:scale-105">
              VB
            </span>
            <div className="flex flex-col">
              <span className="font-tech font-bold text-sm sm:text-base tracking-wider text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-retro-cyan transition-colors">
                VICTOR_BERNARDES
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-retro-pink tracking-widest hidden sm:block">
                TECH_LEAD // SWE
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Clean and spaced */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-retro-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Social Icons + Language + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Links */}
            <div className="flex items-center gap-1.5 pr-2 border-r border-slate-200 dark:border-retro-border">
              {/* LinkedIn - Official Brand Colors */}
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1.5 rounded text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              {/* itch.io - Official Brand Color */}
              <a
                href={data.personal.itchio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="itch.io"
                className="p-1.5 rounded text-[#fa5c5c] hover:bg-[#fa5c5c]/10 transition-colors"
                title="itch.io Games"
              >
                <Gamepad2 size={18} />
              </a>

              {/* GitHub */}
              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-1.5 rounded text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              className="px-2.5 py-1 text-xs font-mono font-bold border border-slate-300 dark:border-retro-border bg-slate-100 dark:bg-retro-dark text-slate-700 dark:text-retro-cyan hover:border-indigo-600 dark:hover:border-retro-cyan transition-all flex items-center gap-1"
              title="Switch Language"
            >
              <Globe size={13} />
              <span>{language === 'en' ? 'PT' : 'EN'}</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="p-1.5 border border-slate-300 dark:border-retro-border bg-slate-100 dark:bg-retro-dark text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-retro-amber transition-all"
              title="Toggle Light / Dark Mode"
            >
              {darkMode ? <Sun size={17} className="text-retro-amber" /> : <Moon size={17} className="text-indigo-600" />}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              className="px-2 py-1 border border-slate-300 dark:border-retro-border text-xs font-mono font-bold text-slate-800 dark:text-retro-cyan"
            >
              {language === 'en' ? 'PT' : 'EN'}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 border border-slate-300 dark:border-retro-border text-slate-800 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={17} className="text-retro-amber" /> : <Moon size={17} className="text-indigo-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 border border-slate-300 dark:border-retro-border text-slate-800 dark:text-slate-300"
              aria-label="Open Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/98 dark:bg-retro-void/98 border-b border-slate-200 dark:border-retro-border px-4 pt-3 pb-6 space-y-2 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-retro-card"
            >
              &gt; {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-retro-border flex items-center justify-between">
            <div className="flex gap-3">
              <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0a66c2]">
                <Linkedin size={20} />
              </a>
              <a href={data.personal.itchio} target="_blank" rel="noopener noreferrer" className="text-[#fa5c5c]">
                <Gamepad2 size={20} />
              </a>
              <a href={data.personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
