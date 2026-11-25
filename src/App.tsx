import React, { useState, useEffect } from 'react';
import { cvDataEn, cvDataPt } from './data/cvData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'pt'>('en'); // Default: English
  const [crtMode, setCrtMode] = useState(false); // Retrowave CRT Scanlines

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  useEffect(() => {
    if (crtMode) {
      document.body.classList.add('crt-mode');
    } else {
      document.body.classList.remove('crt-mode');
    }
  }, [crtMode]);

  const activeData = language === 'pt' ? cvDataPt : cvDataEn;

  return (
    <div className={`min-h-screen ${
      darkMode 
        ? 'bg-retro-void text-slate-100' 
        : 'bg-[#f4f4f7] text-slate-900'
    } flex flex-col font-sans selection:bg-retro-pink selection:text-white transition-colors duration-200 relative overflow-x-hidden`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        crtMode={crtMode}
        setCrtMode={setCrtMode}
        data={activeData}
      />
      <main className="flex-grow">
        <Hero data={activeData} />
        <About data={activeData} />
        <Experience data={activeData} />
        <Skills data={activeData} />
        <Projects data={activeData} />
        <Education data={activeData} />
        <Contact data={activeData} />
      </main>
      <Footer data={activeData} />
    </div>
  );
};
