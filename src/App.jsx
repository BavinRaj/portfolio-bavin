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
    <div className="min-h-screen flex flex-col dev-grid-bg bg-slate-50 text-slate-900 dark:bg-[#070b14] dark:text-slate-100 transition-colors duration-300 relative overflow-hidden selection:bg-sky-500 selection:text-white">
      {/* Dynamic Ambient Background Glow Elements for Pleasant, Animatic Atmosphere */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-sky-500/10 dark:bg-sky-500/[0.08] blur-[140px] pointer-events-none animate-pulse-slow -z-10" />
      <div className="fixed top-[30%] right-[-10%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/[0.08] blur-[140px] pointer-events-none animate-pulse-slower -z-10" />
      <div className="fixed bottom-[-10%] left-[20%] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-cyan-500/10 dark:bg-emerald-500/[0.06] blur-[150px] pointer-events-none animate-pulse-slow -z-10" />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 px-4 py-2 bg-sky-600 text-white rounded-lg font-medium shadow-lg outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Header Navigation */}
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
