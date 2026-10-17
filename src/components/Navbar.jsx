import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { useScramble } from '../hooks/useScramble';
import MagneticButton from './MagneticButton';

function NavItem({ item, isActive, onClick }) {
  const { displayText, scramble } = useScramble(item.name);

  return (
    <a
      href={item.href}
      onClick={(e) => onClick(e, item.href)}
      onMouseEnter={scramble}
      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-white dark:text-white'
          : 'text-slate-400 hover:text-slate-100 dark:text-slate-400 dark:hover:text-white'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeNavPill"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-violet-600/30 border border-blue-400/40 shadow-glow-sm -z-10"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span>{displayText}</span>
    </a>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Logo text scramble
  const { displayText: logoText, scramble: scrambleLogo } = useScramble('SC', true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <MagneticButton strength={0.2}>
            <a
              href="#"
              onMouseEnter={scrambleLogo}
              onClick={(e) => {
                e.preventDefault();
                if (window.__lenis) window.__lenis.scrollTo(0);
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-background-dark rounded-[10px] flex items-center justify-center">
                  <span className="text-sm font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {logoText}
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] font-mono tracking-wider text-slate-400">
                  Data & AI Engineer
                </span>
              </div>
            </a>
          </MagneticButton>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/60 dark:bg-slate-950/60 border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                isActive={activeSection === item.href.substring(1)}
                onClick={handleNavClick}
              />
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <MagneticButton strength={0.3}>
              <button
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white bg-slate-900/60 dark:bg-slate-900/80 border border-white/10 hover:border-blue-500/50 hover:shadow-glow-sm transition-all"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-400 transition-transform hover:-rotate-12" />
                )}
              </button>
            </MagneticButton>

            {/* Quick Resume CTA */}
            <MagneticButton strength={0.25}>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 border border-blue-400/30 shadow-glow-sm hover:shadow-glow-md transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-black/70 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 bottom-0 w-3/4 max-w-sm bg-background-dark/95 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                      SC
                    </div>
                    <span className="font-heading font-semibold text-white">Menu</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  {navLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-3 rounded-xl font-heading text-base font-medium transition-all ${
                        activeSection === item.href.substring(1)
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={personalInfo.resumePath}
                  download="Shreyash_Chaudha_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-glow-sm text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </a>
                <p className="text-center text-xs text-slate-500">
                  © 2026 Shreyash Chaudha
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
