import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle2,
  Zap,
  TrendingUp,
  Cpu,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map categories to appropriate icons & gradient schemes
const CATEGORY_CONFIG = {
  'Programming Languages': {
    icon: Code2,
    gradient: 'from-amber-500/20 via-sky-500/20 to-cyan-500/20',
    border: 'hover:border-amber-500/50',
    glow: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
    accentColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    terminalTitle: 'languages.core',
  },
  'Frontend Development': {
    icon: Layout,
    gradient: 'from-cyan-500/20 via-sky-500/20 to-blue-500/20',
    border: 'hover:border-cyan-500/50',
    glow: 'hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
    accentColor: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    terminalTitle: 'client.ui',
  },
  'Backend & Frameworks': {
    icon: Server,
    gradient: 'from-emerald-500/20 via-teal-500/20 to-sky-500/20',
    border: 'hover:border-emerald-500/50',
    glow: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
    accentColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    terminalTitle: 'server.api',
  },
  'Databases & Persistence': {
    icon: Database,
    gradient: 'from-blue-500/20 via-indigo-500/20 to-violet-500/20',
    border: 'hover:border-indigo-500/50',
    glow: 'hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]',
    accentColor: 'text-indigo-400',
    badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    terminalTitle: 'database.sql',
  },
  'Tools & Developer Ecosystem': {
    icon: Wrench,
    gradient: 'from-purple-500/20 via-fuchsia-500/20 to-pink-500/20',
    border: 'hover:border-purple-500/50',
    glow: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
    accentColor: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    terminalTitle: 'toolchain.env',
  },
};

// Skill level progress values & styles
const LEVEL_CONFIG = {
  Proficient: {
    percentage: 90,
    badge: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    barGradient: 'from-cyan-400 to-sky-500',
    ringColor: 'ring-cyan-500/40',
  },
  Developing: {
    percentage: 78,
    badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    barGradient: 'from-emerald-400 to-teal-500',
    ringColor: 'ring-emerald-500/40',
  },
  Familiar: {
    percentage: 62,
    badge: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
    barGradient: 'from-indigo-400 to-violet-500',
    ringColor: 'ring-indigo-500/40',
  },
  Learning: {
    percentage: 48,
    badge: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    barGradient: 'from-amber-400 to-orange-500',
    ringColor: 'ring-amber-500/40',
  },
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Filter categories based on selection
  const displayedCategories =
    activeCategory === 'ALL'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient radial neon glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-500/[0.05] blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-4 py-1.5 rounded-full border border-cyan-800/60 mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Interactive Tech Telemetry</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Proficiency meters reflect active software engineering coursework, production builds, and hands-on full stack architecture.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 rounded-full mt-4 shadow-[0_0_12px_rgba(56,189,248,0.5)]"></div>
        </div>

        {/* High-Tech Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('ALL')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'ALL'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 ring-1 ring-white/20'
                : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-white/[0.08]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Stacks ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)}+)</span>
          </button>

          {skillCategories.map((catGroup) => {
            const isSelected = activeCategory === catGroup.category;
            const config = CATEGORY_CONFIG[catGroup.category] || {};
            const Icon = config.icon || Code2;

            return (
              <button
                key={catGroup.category}
                type="button"
                onClick={() => setActiveCategory(catGroup.category)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 ring-1 ring-white/20'
                    : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-white/[0.08]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : config.accentColor}`} />
                <span>{catGroup.category.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid with Cyber Terminal Window Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayedCategories.map((catGroup) => {
            const config = CATEGORY_CONFIG[catGroup.category] || {
              icon: Layers,
              gradient: 'from-sky-500/20 to-indigo-500/20',
              border: 'hover:border-sky-500/50',
              glow: 'hover:shadow-[0_0_30px_rgba(14,165,233,0.25)]',
              accentColor: 'text-sky-400',
              badgeBg: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
              terminalTitle: 'stack.spec',
            };
            const IconComponent = config.icon;

            return (
              <div
                key={catGroup.category}
                className={`group relative rounded-3xl glass-card border border-white/[0.08] transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-2 ${config.border} ${config.glow}`}
              >
                {/* Cyber Terminal Title Bar */}
                <div className="flex items-center justify-between px-5 py-3 bg-slate-900/70 border-b border-white/[0.08] backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.6)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.6)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.6)]"></span>
                    <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-sky-400" />
                      {config.terminalTitle}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${config.badgeBg}`}>
                    {catGroup.skills.length} Items
                  </span>
                </div>

                <div className="p-6">
                  {/* Category Header with Glow Icon */}
                  <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-slate-200/80 dark:border-white/[0.08]">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-tr ${config.gradient} border border-white/10 ${config.accentColor} shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight">
                        {catGroup.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {catGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List with Dynamic Progress Bars & Moving Shimmer */}
                  <div className="space-y-3.5">
                    {catGroup.skills.map((skill) => {
                      const levelInfo = LEVEL_CONFIG[skill.level] || LEVEL_CONFIG.Developing;
                      const isHovered = hoveredSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="group/item relative p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-white/[0.05] hover:border-sky-500/50 dark:hover:bg-slate-900/90 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-2 h-2 rounded-full transition-transform ${
                                  skill.highlight
                                    ? 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)]'
                                    : 'bg-slate-400 dark:bg-slate-500'
                                } ${isHovered ? 'scale-150' : ''}`}
                              ></span>
                              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                {skill.name}
                                {skill.highlight && (
                                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 inline-block animate-pulse" />
                                )}
                              </span>
                            </div>

                            <span
                              className={`text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full border ${levelInfo.badge} transition-transform ${
                                isHovered ? 'scale-105' : ''
                              }`}
                            >
                              {skill.level} ({levelInfo.percentage}%)
                            </span>
                          </div>

                          {/* Animated Progress Meter with Moving Shimmer */}
                          <div className="relative w-full h-2 bg-slate-200/80 dark:bg-slate-800/80 rounded-full overflow-hidden">
                            <div
                              style={{ width: `${levelInfo.percentage}%` }}
                              className={`relative h-full rounded-full bg-gradient-to-r ${levelInfo.barGradient} transition-all duration-700 ease-out group-hover/item:brightness-125 overflow-hidden`}
                            >
                              {/* Glowing Shimmer Reflection */}
                              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer pointer-events-none"></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Count Badge */}
                <div className="px-6 py-3.5 border-t border-slate-200/80 dark:border-white/[0.06] bg-slate-100/50 dark:bg-slate-900/30 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    {catGroup.skills.length} active competencies
                  </span>
                  <span className="inline-flex items-center gap-1 text-cyan-400 font-mono text-[11px] font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Verified Stack
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Legend with Glass Card */}
        <div className="mt-14 p-5 rounded-3xl glass-card border border-white/[0.08] text-center max-w-3xl mx-auto text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-center gap-6 shadow-lg shadow-black/20">
          <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            Telemetry Metrics:
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]"></span>
            <strong>Proficient (90%)</strong> — Advanced hands-on mastery
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
            <strong>Developing (78%)</strong> — Active full stack development
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
            <strong>Familiar (62%)</strong> — Applied core concepts
          </span>
        </div>
      </div>
    </section>
  );
}
