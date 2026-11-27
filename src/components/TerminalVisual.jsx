import React, { useState } from 'react';
import { Code, Terminal, CheckCircle2, Copy, Check } from 'lucide-react';

const TABS = [
  {
    id: 'java',
    filename: 'Developer.java',
    language: 'Java',
    badge: 'Backend',
    code: `public class Developer {
    private String name = "Bavin Raj";
    private String role = "Java Full Stack Developer";
    private String education = "B.Tech Information Technology";
    private String[] coreStack = {
        "Java", "Spring Boot", "REST API",
        "React.js", "JavaScript", "MySQL"
    };

    public void buildApplication() {
        // Developing scalable web solutions
        System.out.println("Status: Ready to build & learn!");
    }
}`
  },
  {
    id: 'react',
    filename: 'PortfolioApp.jsx',
    language: 'React.js',
    badge: 'Frontend',
    code: `import React from 'react';

export default function Portfolio() {
  const developer = {
    name: "Bavin Raj",
    focus: "Full Stack Web Development",
    learning: "Spring Boot + React Ecosystem"
  };

  return (
    <main className="responsive-container">
      <h1>Hello, World!</h1>
      <p>Building clean, accessible interfaces</p>
    </main>
  );
}`
  },
  {
    id: 'sql',
    filename: 'schema.sql',
    language: 'MySQL',
    badge: 'Database',
    code: `-- Database Architecture & Persistence
CREATE TABLE developers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialization VARCHAR(150) NOT NULL,
    degree VARCHAR(100) DEFAULT 'B.Tech IT',
    status ENUM('Active', 'Pursuing') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO developers (name, specialization, status)
VALUES ('Bavin Raj', 'Java Full Stack Development', 'Active');`
  }
];

export default function TerminalVisual() {
  const [activeTab, setActiveTab] = useState('java');
  const [copied, setCopied] = useState(false);

  const currentSnippet = TABS.find((t) => t.id === activeTab) || TABS[0];

  const copyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-[#0d1424] text-slate-200 transition-all duration-300 hover:border-sky-500/40 hover:shadow-glow-md">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            workspace/bavin-raj
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-[#131b2e] p-1 rounded-lg border border-slate-800 text-xs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 py-1 rounded font-mono text-xs transition-all ${
                activeTab === tab.id
                  ? 'bg-sky-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {tab.filename}
            </button>
          ))}
        </div>

        {/* Copy button */}
        <button
          onClick={copyCode}
          className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
          title="Copy code"
          aria-label="Copy code snippet"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto selection:bg-sky-800/80">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/60 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Code className="w-3.5 h-3.5 text-sky-400" />
            {currentSnippet.language} • {currentSnippet.badge}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
            <CheckCircle2 className="w-3 h-3" />
            Compiling & Ready
          </span>
        </div>

        <pre className="text-slate-300 whitespace-pre font-mono">
          <code>{currentSnippet.code}</code>
        </pre>
      </div>

      {/* Bottom Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#090d16]/90 border-t border-slate-800 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open for Opportunities
          </span>
          <span className="hidden sm:inline text-slate-500">UTF-8</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Java 21</span>
          <span>•</span>
          <span>Spring Boot 3</span>
          <span>•</span>
          <span>React 18</span>
        </div>
      </div>
    </div>
  );
}
