import React from 'react';
import { FileDown, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeCTA({ onPreview }) {
  const { personal } = portfolioData;

  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-900 via-[#0c4a6e] to-[#0f172a] text-white p-8 sm:p-12 shadow-2xl border border-sky-500/20">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Interested in my profile?
              </h2>

              <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
                Download my resume to learn more about my education, technical skills, projects, and experience.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs text-sky-200/80">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  ATS-Friendly
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  PDF Format
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Updated 2026
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={onPreview}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-sky-600/80 hover:bg-sky-500 border border-sky-400/40 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <FileText className="w-5 h-5" />
                <span>Preview Resume</span>
              </button>

              <a
                href={personal.resumeUrl}
                download="Bavin_M_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-sky-950 bg-white hover:bg-sky-50 active:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FileDown className="w-5 h-5 text-sky-600" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
