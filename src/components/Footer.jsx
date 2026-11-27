import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-sky-500/40 shadow-sm shrink-0">
              <img
                src={personal.avatarImage}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                {personal.name}
              </span>
              <p className="text-xs text-sky-600 dark:text-sky-400 font-mono leading-tight">
                {personal.title}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Building scalable web applications with Java, Spring Boot & React.
              </p>
            </div>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white hover:scale-105 transition-all"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white hover:scale-105 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-white hover:scale-105 transition-all"
              aria-label={`Email ${personal.name}`}
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>© 2026 {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for professional IT & software engineering applications</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
