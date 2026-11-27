import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Maximize2, 
  X, 
  School,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { educationTimeline } = portfolioData;
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60 mb-3">
            Academic Background & Campus Life
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Campus
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Structured timeline of formal undergraduate education, professional training, and campus memories.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 rounded-full mt-3 shadow-glow-sm"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Timeline Line with Glowing Gradient */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-emerald-400 -translate-x-1/2 opacity-80 shadow-glow-sm"></div>

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
                    <div className="glass-card p-5 sm:p-6 rounded-2xl shadow-sm hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 group/card">
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

                      {/* Campus Photo with Hover Animation */}
                      {item.image && (
                        <div
                          onClick={() =>
                            setSelectedImage({
                              url: item.image,
                              caption: item.imageCaption,
                              title: item.organization,
                              degree: item.title,
                            })
                          }
                          className="group/campus relative mt-4 overflow-hidden rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-950 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-sky-500/70 cursor-pointer"
                        >
                          <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                            {/* Animated Zooming Image */}
                            <img
                              src={item.image}
                              alt={item.imageCaption || item.organization}
                              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover/campus:scale-110 group-hover/campus:brightness-105"
                              loading="lazy"
                            />

                            {/* Gradient Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none transition-opacity duration-300 group-hover/campus:opacity-75" />

                            {/* Subtle Light Glare on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover/campus:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent pointer-events-none transition-opacity duration-500" />

                            {/* Campus Label & Click to Expand Pill */}
                            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
                              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-sm">
                                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                                <span>{item.imageCaption}</span>
                              </span>

                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-200 bg-sky-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-sky-700/50 opacity-0 group-hover/campus:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/campus:translate-y-0 shadow-md">
                                <Maximize2 className="w-3 h-3 text-sky-400" />
                                <span>Click to View</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-400" />
                <div>
                  <h4 className="font-bold text-white text-base leading-tight">
                    {selectedImage.caption}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {selectedImage.title}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Full Image */}
            <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-slate-800 bg-slate-900/90 text-xs text-slate-400 flex items-center justify-between">
              <span>{selectedImage.degree}</span>
              <span className="text-slate-500">Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
