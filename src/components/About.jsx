import React from 'react';
import { GraduationCap, Award, Code, CheckCircle, FileDown, FileText, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onPreview }) {
  const { personal, aboutHighlights } = portfolioData;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60 mb-3">
            Background & Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Technical Ambition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-sky-500" />
                Aspiring Java Full Stack Engineer
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {personal.aboutText}
              </p>

              <div className="pt-2">
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  With a solid grounding in core computer science principles from my Information Technology degree, I continuously challenge myself by turning theoretical concepts into functional code. My current concentration is on building robust REST services using Spring Boot and creating responsive user experiences with React.
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onPreview}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <FileText className="w-4 h-4 text-sky-500" />
                  <span>Preview Resume</span>
                </button>

                <a
                  href={personal.resumeUrl}
                  download="Bavin_M_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Card showing Academic & Professional Credentials */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#131d33] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-sky-500" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Key Profile Summary
                  </h4>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                  Verified Details
                </span>
              </div>

              <div className="space-y-3.5">
                {aboutHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80 flex items-start justify-between gap-3 hover:border-sky-500/30 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {item.subtitle}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        item.status === 'Currently Pursuing'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/60'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-300/60 dark:border-blue-700/60'
                      }`}
                    >
                      {item.status === 'Currently Pursuing' ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      ) : (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-lg bg-sky-50/70 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/40 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Focus: Full-lifecycle software engineering & scalable web services.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
