import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // Scrollspy detection
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      <div
        className={`rounded-2xl border transition-all duration-300 px-3.5 sm:px-5 py-2.5 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#070c18]/90 border-slate-200/90 dark:border-white/15 backdrop-blur-2xl shadow-xl shadow-slate-900/10 dark:shadow-[0_10px_35px_rgba(0,0,0,0.7)] ring-1 ring-sky-500/10'
            : 'bg-white/75 dark:bg-[#070c18]/80 border-slate-200/70 dark:border-white/[0.08] backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand with Profile Avatar */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none rounded-xl p-1 transition-all"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-sky-500/50 group-hover:ring-sky-400 group-hover:scale-105 transition-all duration-300 shadow-md shadow-sky-500/25 shrink-0 bg-slate-800">
              <img
                src={portfolioData.personal.avatarImage}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-950 animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors flex items-center gap-1.5">
                {portfolioData.personal.name}
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              </span>
              <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400 leading-tight">
                Java Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Capsule Pills) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200/60 dark:border-white/[0.06]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sm shadow-sky-500/30'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle + Resume CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={portfolioData.personal.resumeUrl}
              download="Bavin_M_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 active:scale-95 transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 focus:outline-none"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200/80 dark:border-white/10 space-y-2.5 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sm'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
            <div className="pt-2 border-t border-slate-100 dark:border-white/[0.06]">
              <a
                href={portfolioData.personal.resumeUrl}
                download="Bavin_M_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
