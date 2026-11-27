import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  Sparkles,
  Smartphone,
  Server,
  Layers,
  HeartPulse,
  Info,
  X,
  Terminal,
  Activity,
  Mic,
  Briefcase,
  Recycle,
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Visual preview banner per project to create unique animatic aesthetics
const PROJECT_VISUALS = {
  'udhavi-kural': {
    badge: 'Voice AI & Accessibility',
    path: '~/ai-engine/udhavi-kural.py',
    gradient: 'from-cyan-500/20 via-sky-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]',
    accentText: 'text-cyan-400',
    renderVisual: () => (
      <div className="relative h-28 w-full rounded-2xl bg-gradient-to-r from-slate-900/90 via-cyan-950/40 to-slate-900/90 border border-cyan-500/30 p-4 flex items-center justify-between overflow-hidden shadow-inner">
        {/* Background glow orb */}
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-3.5 z-10">
          <div className="relative p-3 rounded-2xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Mic className="w-5 h-5 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white tracking-wide">
                TAMIL SPEECH PIPELINE
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                16kHz PCM
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              VOSK-ASR ➔ Rasa NLU ➔ Festival TTS
            </p>
          </div>
        </div>

        {/* Dynamic Equalizer Soundwave Bars */}
        <div className="flex items-center gap-1.5 z-10">
          <div className="w-1.5 bg-cyan-400 rounded-full animate-wave-1 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
          <div className="w-1.5 bg-sky-400 rounded-full animate-wave-2 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
          <div className="w-1.5 bg-indigo-400 rounded-full animate-wave-3 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
          <div className="w-1.5 bg-emerald-400 rounded-full animate-wave-4 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
          <div className="w-1.5 bg-cyan-400 rounded-full animate-wave-2 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
        </div>
      </div>
    ),
  },
  'digital-nomad': {
    badge: 'Enterprise Full Stack',
    path: '~/web-app/digital-nomad.tsx',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-sky-500/20',
    borderColor: 'border-emerald-500/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]',
    accentText: 'text-emerald-400',
    renderVisual: () => (
      <div className="relative h-28 w-full rounded-2xl bg-gradient-to-r from-slate-900/90 via-emerald-950/30 to-slate-900/90 border border-emerald-500/30 p-4 flex items-center justify-between overflow-hidden shadow-inner">
        <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-3.5 z-10">
          <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white tracking-wide">
                FREELANCE TALENT PLATFORM
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                REST API
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Spring Boot MVC ➔ React ➔ MySQL Database
            </p>
          </div>
        </div>

        {/* Mini stats cards */}
        <div className="hidden sm:flex flex-col gap-1 text-right z-10 font-mono">
          <span className="text-[10px] text-slate-400">Match Engine</span>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
            98% Algorithmic Match
          </span>
        </div>
      </div>
    ),
  },
  'global-waste-trade': {
    badge: 'Real-Time Bidding Auction',
    path: '~/auction-engine/waste-trade.jsx',
    gradient: 'from-amber-500/20 via-orange-500/20 to-purple-500/20',
    borderColor: 'border-amber-500/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]',
    accentText: 'text-amber-400',
    renderVisual: () => (
      <div className="relative h-28 w-full rounded-2xl bg-gradient-to-r from-slate-900/90 via-amber-950/30 to-slate-900/90 border border-amber-500/30 p-4 flex items-center justify-between overflow-hidden shadow-inner">
        <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-3.5 z-10">
          <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
            <Recycle className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white tracking-wide">
                CIRCULAR COMMERCE ENGINE
              </span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                LIVE BIDDING
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Real-Time Bidding ➔ Resource Recovery Metrics
            </p>
          </div>
        </div>

        {/* Live timer badge */}
        <div className="hidden sm:flex flex-col gap-1 text-right z-10 font-mono">
          <span className="text-[10px] text-slate-400">Auction Engine</span>
          <span className="text-xs font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
            Real-Time Socket
          </span>
        </div>
      </div>
    ),
  },
};

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-indigo-500/[0.04] blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-4 py-1.5 rounded-full border border-sky-800/60 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
            <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>Engineering Showcase & Case Studies</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Demonstrating end-to-end full stack architecture, speech AI accessibility pipelines, and production database modeling.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 rounded-full mt-4 shadow-[0_0_12px_rgba(56,189,248,0.5)]"></div>
        </div>

        {/* Projects Grid with Terminal Window Headers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const visual = PROJECT_VISUALS[project.id] || {
              badge: project.category,
              path: `~/code/${project.id}`,
              gradient: 'from-sky-500/20 to-indigo-500/20',
              borderColor: 'border-sky-500/40',
              glowColor: 'group-hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]',
              accentText: 'text-sky-400',
              renderVisual: () => null,
            };

            return (
              <div
                key={project.id}
                className={`group relative flex flex-col justify-between rounded-3xl glass-card border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 overflow-hidden ${visual.borderColor} ${visual.glowColor}`}
              >
                {/* Terminal Mac Window Header Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/80 border-b border-white/[0.08] backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_6px_rgba(244,63,94,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_6px_rgba(16,185,129,0.7)]"></span>
                    <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-sky-400" />
                      {visual.path}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {project.badge}
                  </span>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Animated Visual Banner */}
                    <div className="mb-6">{visual.renderVisual()}</div>

                    {/* Category & Period */}
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono">
                      <span className={`${visual.accentText} font-semibold uppercase tracking-wider`}>
                        {project.category}
                      </span>
                      <span className="text-slate-400 dark:text-slate-500">
                        {project.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-3 group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* High-Tech 2-Column Feature Matrix Grid */}
                    <div className="mb-6">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-sky-400" />
                        Key Engineering Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {project.features.slice(0, 3).map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-white/[0.05] text-xs text-slate-700 dark:text-slate-300 group-hover:border-sky-500/30 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Tags with Glowing Hover */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] hover:border-sky-400 hover:text-sky-400 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Toolbar */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 active:scale-95 transition-all shadow-md shadow-sky-500/25"
                    >
                      <Info className="w-4 h-4" />
                      <span>Architecture Details</span>
                    </button>

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/70 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-white/10 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-slate-900 border border-sky-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] relative max-h-[90vh] overflow-y-auto text-slate-100">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedProject.period}
                </span>
              </div>

              <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="font-bold text-sm text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Key Architecture & Application Capabilities:
                </h4>
                <div className="grid grid-cols-1 gap-2.5 text-sm text-slate-300">
                  {selectedProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-slate-800/60 p-3 rounded-xl border border-white/[0.08]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm text-white mb-2.5 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-sky-400" />
                  Applied Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-sky-950/80 text-sky-300 border border-sky-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors border border-white/10"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all shadow-md shadow-sky-500/25"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
