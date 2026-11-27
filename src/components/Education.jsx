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
  Sparkles,
  MapPin,
  Flame,
  FileCheck2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Milestone custom tags and icons
const MILESTONE_CONFIG = {
  'Bachelor of Technology (Information Technology)': {
    icon: GraduationCap,
    glow: 'hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
    border: 'hover:border-cyan-500/50',
    accentText: 'text-cyan-400',
    tags: ['Data Structures & Algorithms', 'DBMS & SQL', 'Computer Networks', 'Software Engineering'],
    gradePill: 'CGPA: 7.81 / 10 • Graduated with Distinction',
    gradeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  },
  'Java Full Stack Development': {
    icon: Flame,
    glow: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
    border: 'hover:border-emerald-500/50',
    accentText: 'text-emerald-400',
    tags: ['Core Java & OOP', 'Spring Boot REST APIs', 'React.js UI', 'MySQL Relational DB'],
    gradePill: 'Active Specialization • 06/2026 – 12/2026',
    gradeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
  'Diploma in Computer Applications (DCA)': {
    icon: FileCheck2,
    glow: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
    border: 'hover:border-purple-500/50',
    accentText: 'text-purple-400',
    tags: ['C Programming', 'Python Foundations', 'Web Basics (HTML/CSS)', 'Office Productivity'],
    gradePill: 'Certified Diploma (CSC)',
    gradeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  },
  'Higher Secondary & Secondary Education (Class XII & X)': {
    icon: School,
    glow: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
    border: 'hover:border-amber-500/50',
    accentText: 'text-amber-400',
    tags: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
    gradePill: 'Class XII: 74.3% • Class X: 69.8%',
    gradeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  },
};

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
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-cyan-500/[0.04] blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-4 py-1.5 rounded-full border border-sky-800/60 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>Academic Milestones & Campus Hub</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Education & Campus
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Chronological journey through formal undergraduate engineering, specialized full stack training, and certified technical diplomas.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 rounded-full mt-4 shadow-[0_0_12px_rgba(56,189,248,0.5)]"></div>
        </div>

        {/* Illuminated Laser Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Laser Timeline with Glowing Energy Beam */}
          <div className="absolute left-4 sm:left-1/2 top-6 bottom-6 w-1 bg-gradient-to-b from-cyan-400 via-sky-500 to-indigo-500 -translate-x-1/2 rounded-full animate-laser shadow-[0_0_16px_rgba(6,182,212,0.9)]"></div>

          <div className="space-y-14">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const isPursuing = item.status === 'Currently Pursuing';
              const config = MILESTONE_CONFIG[item.title] || {
                icon: GraduationCap,
                glow: 'hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]',
                border: 'hover:border-sky-500/50',
                accentText: 'text-sky-400',
                tags: [],
                gradePill: item.status,
                gradeColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
              };
              const MilestoneIcon = config.icon;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Icon on Laser Line */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-slate-900 border-2 border-sky-400 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(56,189,248,0.6)]">
                    {isPursuing ? (
                      <span className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                      </span>
                    ) : (
                      <MilestoneIcon className="w-5 h-5 text-sky-400" />
                    )}
                  </div>

                  {/* Content Milestone Card */}
                  <div
                    className={`ml-14 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-12' : 'sm:pl-12'
                    } w-full`}
                  >
                    <div
                      className={`group relative glass-card p-6 sm:p-7 rounded-3xl border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 ${config.border} ${config.glow}`}
                    >
                      {/* Top Bar: Institution and Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-sky-400" />
                          {item.organization}
                        </span>

                        <span className="text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-white/10">
                          {item.period}
                        </span>
                      </div>

                      {/* Degree / Program Title */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Distinction / Grade Pill Badge */}
                      <div className="mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-xl border ${config.gradeColor}`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          {config.gradePill}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Coursework Tags */}
                      {config.tags && config.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {config.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Campus Photo Frame with Smooth Hover Animation */}
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
                          className="group/campus relative mt-4 overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-950 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-sky-500/70 cursor-pointer"
                        >
                          <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                            {/* Animated Zooming Campus Photo */}
                            <img
                              src={item.image}
                              alt={item.imageCaption || item.organization}
                              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover/campus:scale-110 group-hover/campus:brightness-105"
                              loading="lazy"
                            />

                            {/* Gradient Overlay Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover/campus:opacity-75" />

                            {/* Shimmer Light Flare */}
                            <div className="absolute inset-0 opacity-0 group-hover/campus:opacity-25 bg-gradient-to-tr from-transparent via-white to-transparent pointer-events-none transition-opacity duration-500" />

                            {/* Campus Label & Click to Inspect Pill */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 shadow-md">
                                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                                <span>{item.imageCaption}</span>
                              </span>

                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-200 bg-sky-950/90 backdrop-blur-md px-2.5 py-1 rounded-xl border border-sky-700/50 opacity-0 group-hover/campus:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/campus:translate-y-0 shadow-lg">
                                <Maximize2 className="w-3 h-3 text-sky-400" />
                                <span>Inspect</span>
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

      {/* Lightbox Modal for High Resolution Campus Photo Inspection */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-sky-500/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/95 backdrop-blur">
              <div className="flex items-center gap-2.5">
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
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High Definition Image */}
            <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-white/10 bg-slate-900/95 text-xs text-slate-400 flex items-center justify-between">
              <span className="text-sky-300 font-mono">{selectedImage.degree}</span>
              <span className="text-slate-500">Press ESC or click outside to dismiss</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
