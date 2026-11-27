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
    <div className="min-h-screen flex flex-col dev-grid-bg bg-slate-50 text-slate-900 dark:bg-[#0b1120] dark:text-slate-100 transition-colors duration-200">
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
