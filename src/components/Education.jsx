import React from 'react';
import { GraduationCap, Award, BookOpen, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { educationTimeline } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60 mb-3">
            Academic Background & Training
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Structured timeline of formal undergraduate education, professional development, and technical diplomas.
          </p>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-3"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const isPursuing = item.status === 'Currently Pursuing';

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#0b1120] border-2 border-sky-500 flex items-center justify-center z-10 shadow-sm">
                    {isPursuing ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                    )}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    } w-full`}
                  >
                    <div className="bg-white dark:bg-[#131d33] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-sky-500/40 hover:shadow-md transition-all duration-200">
                      {/* Badge & Period */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {item.organization}
                        </span>

                        <span
                          className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            isPursuing
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/60'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-300/60 dark:border-blue-700/60'
                          }`}
                        >
                          {isPursuing ? (
                            <Clock className="w-3 h-3" />
                          ) : (
                            <CheckCircle2 className="w-3 h-3" />
                          )}
                          {item.status}
                        </span>
                      </div>

                      {/* Degree / Program Title */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
