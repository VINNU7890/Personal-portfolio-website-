import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScramble } from '../hooks/useScramble';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Name scramble effect
  const { displayText: heroName, scramble: scrambleHeroName } = useScramble(personalInfo.name, true);

  // Typewriter effect
  useEffect(() => {
    const roles = personalInfo.typewriterRoles;
    const fullText = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(1800); // Pause at end of word
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // Pause before next word
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-blue-600/20 via-violet-600/15 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono mb-6 backdrop-blur-md shadow-glow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for AI & Data Roles • 2025–2026</span>
            </motion.div>

            {/* Sub-headline Greeting */}
            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm sm:text-base tracking-wide mb-2">
              Hello, world! I am
            </p>

            {/* Name with text scramble */}
            <h1
              onMouseEnter={scrambleHeroName}
              className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 cursor-pointer select-none"
            >
              <span className="text-gradient hover:brightness-110 transition-all">
                {heroName}
              </span>
            </h1>

            {/* Typewriter Role Line */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start gap-2 mb-6 text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-slate-800 dark:text-slate-200">
              <span className="text-slate-500 dark:text-slate-400 font-normal">Specialized in</span>
              <span className="text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-500/60 pb-0.5">
                {currentText}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-8 bg-cyan-500 dark:bg-cyan-400 animate-pulse ml-0.5" />
            </div>

            {/* Short Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personalInfo.bioTagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <MagneticButton strength={0.25}>
                <button
                  onClick={() => scrollTo('projects')}
                  className="px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-glow-md hover:shadow-glow-lg border border-blue-400/40 transition-all flex items-center gap-2 group"
                >
                  <span>View Projects</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <a
                  href={personalInfo.resumePath}
                  download="Shreyash_Chaudha_Resume.pdf"
                  className="px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800/90 border border-slate-300 dark:border-white/10 hover:border-blue-400/40 transition-all flex items-center gap-2 group backdrop-blur-md shadow-sm"
                >
                  <FileText className="w-4 h-4 text-blue-500 dark:text-blue-400 transition-transform group-hover:scale-110" />
                  <span>Download Resume</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200/50 dark:bg-transparent hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-300 dark:border-transparent hover:border-slate-400 dark:hover:border-white/10 transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-violet-500 dark:text-violet-400" />
                  <span>Contact Me</span>
                </button>
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-300/60 dark:border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect
              </span>
              <div className="flex items-center gap-3">
                <MagneticButton strength={0.35}>
                  <a
                    href={personalInfo.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/40 transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.35}>
                  <a
                    href={personalInfo.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/40 transition-all shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.35}>
                  <a
                    href={personalInfo.socials.email.url}
                    aria-label="Email Shreyash"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/40 transition-all shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Tilt Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-violet-600/30 to-cyan-400/40 rounded-[2.5rem] blur-2xl -z-10 transform scale-95" />

              <TiltCard
                maxTilt={14}
                spotlight={true}
                spotlightColor="rgba(59, 130, 246, 0.25)"
                className="p-3 bg-slate-900/60 dark:bg-slate-950/70 border border-white/15 rounded-[2.5rem] shadow-2xl backdrop-blur-xl"
              >
                {/* Arch-shaped Frame with glowing gradient border */}
                <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-blue-500/20 via-violet-500/10 to-transparent p-[2px]">
                  <div className="relative w-full h-[380px] sm:h-[440px] rounded-[2.1rem] overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={personalInfo.profilePhoto}
                      alt={personalInfo.name}
                      loading="eager"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    />

                    {/* Gradient Overlay Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Floating Tech Badge 1 */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-5 left-5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/40 backdrop-blur-md shadow-lg flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs font-mono text-slate-200">LangGraph Agentic</span>
                    </motion.div>

                    {/* Floating Tech Badge 2 */}
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute bottom-5 right-5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-violet-500/40 backdrop-blur-md shadow-lg flex items-center gap-2"
                    >
                      <Terminal className="w-3.5 h-3.5 text-violet-400" />
                      <span className="text-xs font-mono text-slate-200">1M+ SQL Queries</span>
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center justify-center mt-14 sm:mt-20"
        >
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About Section"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-8 h-12 rounded-full border-2 border-slate-700 group-hover:border-cyan-400/60 flex items-start justify-center p-2 transition-colors"
            >
              <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
