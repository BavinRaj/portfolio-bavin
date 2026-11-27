import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col cosmic-grid-bg bg-[#f6f8fc] text-slate-900 dark:bg-[#080d1e] dark:text-slate-100 transition-colors duration-500 relative overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Dynamic Animated Nebula Background Orbs */}
      <div className="fixed top-[-10%] left-[-5%] w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full bg-cyan-500/15 dark:bg-cyan-500/[0.14] blur-[140px] pointer-events-none animate-pulse-slow -z-10" />
      <div className="fixed top-[25%] right-[-10%] w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] rounded-full bg-indigo-500/15 dark:bg-indigo-600/[0.14] blur-[150px] pointer-events-none animate-pulse-slower -z-10" />
      <div className="fixed bottom-[-10%] left-[15%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-emerald-500/15 dark:bg-emerald-500/[0.10] blur-[140px] pointer-events-none animate-pulse-slow -z-10" />
      <div className="fixed top-[50%] left-[40%] w-[450px] h-[450px] rounded-full bg-purple-500/10 dark:bg-purple-600/[0.08] blur-[160px] pointer-events-none animate-pulse-slower -z-10" />

      {/* Top Ambient Cyber Light Beam */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-gradient-to-b from-sky-500/[0.15] dark:from-sky-400/[0.12] via-indigo-500/[0.05] to-transparent pointer-events-none -z-10 blur-xl" />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 px-4 py-2 bg-sky-600 text-white rounded-lg font-medium shadow-lg outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Floating Island Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
        <Hero />
        <About onPreview={() => setIsResumeOpen(true)} />
        <Skills />
        <Projects />
        <Education />
        <ResumeCTA onPreview={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive ATS Resume Preview Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
