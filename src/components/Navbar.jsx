import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Code2 } from 'lucide-react';
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
      // Toggle elevation shadow on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scrollspy detection
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand with Profile Avatar */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl p-1 transition-all"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-sky-500/50 group-hover:ring-sky-400 group-hover:scale-105 transition-all duration-300 shadow-md shadow-sky-500/20 shrink-0 bg-slate-800">
              <img
                src={portfolioData.personal.avatarImage}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors flex items-center gap-1.5">
                {portfolioData.personal.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 opacity-75"></span>
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight">
                Java Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    isActive
                      ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons: Theme Toggle + Download Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={portfolioData.personal.resumeUrl}
              download="Bavin_M_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-all shadow-sm hover:shadow-glow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#080d1a]/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-sky-500/50 shrink-0">
              <img
                src={portfolioData.personal.avatarImage}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">{portfolioData.personal.name}</div>
              <div className="text-xs text-sky-500 font-mono">Java Full Stack Developer</div>
            </div>
          </div>
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Bavin_M_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-lg text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
