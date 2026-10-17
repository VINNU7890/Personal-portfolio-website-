import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import MagneticButton from '../components/MagneticButton';

export default function Footer() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
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
    <footer className="relative pt-16 pb-12 border-t border-white/10 bg-background-darker overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white text-sm shadow-glow-sm">
                SC
              </div>
              <span className="font-heading text-lg font-bold text-white">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Data Science, SQL & Agentic AI Engineer. Designing robust end-to-end applications that bridge structured data, high-throughput queries, and autonomous LLM agents.
            </p>

            <div className="flex items-center gap-3">
              <MagneticButton strength={0.3}>
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href={personalInfo.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href={personalInfo.socials.email.url}
                  aria-label="Email"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href={personalInfo.socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Navigation Map
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top & Status */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between">
            <MagneticButton strength={0.3}>
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </MagneticButton>

            <div className="text-xs font-mono text-slate-500 mt-6 md:mt-0 text-left md:text-right">
              <p>Designed with Vite + React</p>
              <p>Tailwind CSS & Framer Motion</p>
            </div>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineered with precision for Data & AI</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
