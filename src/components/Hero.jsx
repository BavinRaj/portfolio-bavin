import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import ProfileVisual from './ProfileVisual';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 dark:bg-sky-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80 w-fit">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>Full Stack Development • Aspiring Software Engineer</span>
            </div>

            {/* Main Greeting & Headings */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-500 dark:from-sky-400 dark:via-sky-300 dark:to-indigo-300">{personal.name}</span> <span className="inline-block hover:rotate-12 transition-transform cursor-default">👋</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100">
                {personal.title}
              </h2>

              <p className="text-base sm:text-lg font-medium text-sky-700 dark:text-sky-400">
                {personal.subtitle}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {personal.shortIntro}
            </p>

            {/* Career Focus Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400 mr-1">
                Core Focus:
              </span>
              {personal.careerFocus.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-md hover:shadow-glow-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Bavin_Raj_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <FileDown className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                Connect:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub (Placeholder URL)"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-sky-400 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn (Placeholder URL)"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-rose-400 dark:hover:bg-slate-800 transition-colors"
                aria-label="Send Email"
                title="Email (Placeholder Address)"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <ProfileVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
