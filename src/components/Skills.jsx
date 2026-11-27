import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  GitBranch,
  Terminal,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map categories to appropriate icons
const CATEGORY_ICONS = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  'Tools & Ecosystem': Wrench,
};

// Skill level badge styles
const LEVEL_STYLES = {
  Proficient: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  Developing: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  Familiar: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
  Learning: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60 mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Categorized overview of languages, frameworks, databases, and developer tooling. Skill levels reflect practical experience and active training.
          </p>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-3"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((catGroup) => {
            const IconComponent = CATEGORY_ICONS[catGroup.category] || Layers;

            return (
              <div
                key={catGroup.category}
                className="group p-6 rounded-2xl bg-white dark:bg-[#131d33] border border-slate-200/90 dark:border-slate-800 hover:border-sky-500/50 hover:shadow-lg dark:hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">
                          {catGroup.category}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {catGroup.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {catGroup.skills.map((skill) => {
                      const levelClass =
                        LEVEL_STYLES[skill.level] ||
                        'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';

                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/60 hover:bg-slate-100/70 dark:hover:bg-slate-850 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                              {skill.name}
                            </span>
                          </div>

                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${levelClass}`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{catGroup.skills.length} competencies</span>
                  <span className="font-mono text-sky-500">active focus</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend / Transparency Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Proficiency Guide:</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Developing = Hands-on project experience & ongoing coursework
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Learning = Actively studying concepts
          </span>
        </div>
      </div>
    </section>
  );
}
