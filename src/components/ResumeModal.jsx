import React from 'react';
import { X, FileDown, Printer, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, aboutHighlights, skillCategories, projects, educationTimeline } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-slate-700 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#131d33]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <h3 id="resume-modal-title" className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Resume Preview – {personal.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={personal.resumeUrl}
              download="Bavin_M_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 font-sans leading-relaxed bg-white dark:bg-[#0b1120]">
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {personal.name}
              </h1>
              <p className="text-sky-600 dark:text-sky-400 font-semibold text-base">
                {personal.title} | {personal.subtitle}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {personal.location} • {personal.email} • {personal.phone}
              </p>
            </div>
            <div className="text-xs space-y-1 text-slate-500 dark:text-slate-400 sm:text-right">
              <p>GitHub: {personal.github}</p>
              <p>LinkedIn: {personal.linkedin}</p>
            </div>
          </div>

          {/* Professional Objective */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {personal.aboutText}
            </p>
          </div>

          {/* Education & Qualifications */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Education & Certifications
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {educationTimeline.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start gap-2">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{edu.title}</span>
                    <span className="text-slate-500 dark:text-slate-400"> — {edu.organization}</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{edu.description}</p>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 shrink-0">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {skillCategories.map((group) => (
                <div key={group.category} className="p-2 rounded bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white">{group.category}: </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {group.skills.map((s) => `${s.name} (${s.level})`).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Key Projects
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900 dark:text-white">{proj.title}</span>
                    <span className="text-[11px] text-sky-600 dark:text-sky-400 font-mono">
                      {proj.isComingSoon ? 'Coming Soon' : 'Completed'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{proj.description}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold">Technologies: </span>
                    {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          {portfolioData.publications && portfolioData.publications.length > 0 && (
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
                Publications & Research
              </h2>
              <div className="space-y-2 text-xs sm:text-sm">
                {portfolioData.publications.map((pub, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                    <p className="font-bold text-slate-900 dark:text-white">{pub.title} – <span className="font-medium text-slate-600 dark:text-slate-400">{pub.authors} ({pub.date})</span></p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5"><span className="font-semibold">Technologies:</span> {pub.technologies}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
