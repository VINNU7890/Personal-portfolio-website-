import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  CheckCircle2,
  Code2,
  Activity,
  Terminal,
  X,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Systems</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <MagneticButton strength={0.3}>
              <button
                onClick={prevSlide}
                aria-label="Previous project"
                className="w-12 h-12 rounded-2xl glass-panel border border-white/10 hover:border-blue-400/40 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md group"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              </button>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <button
                onClick={nextSlide}
                aria-label="Next project"
                className="w-12 h-12 rounded-2xl glass-panel border border-white/10 hover:border-blue-400/40 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md group"
              >
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative" data-cursor="project">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard
                maxTilt={6}
                spotlight={true}
                spotlightColor="rgba(59, 130, 246, 0.18)"
                className="p-8 sm:p-10 glass-panel border border-white/15 shadow-2xl relative overflow-hidden bg-slate-900/60 dark:bg-slate-950/70"
              >
                {/* Accent top gradient strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${currentProject.accentColor}`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Project Details & Highlights */}
                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <div>
                      {/* Sub-header Badges */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/20 text-blue-300 border border-blue-400/30">
                          {currentProject.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {currentProject.year}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Featured Architecture
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
                        {currentProject.title}
                      </h3>

                      <p className="text-sm sm:text-base font-medium text-cyan-400/90 mb-4">
                        {currentProject.tagline}
                      </p>

                      <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                        {currentProject.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-3 mb-8">
                        {currentProject.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                            <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="mb-8">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                          Technologies Deployed
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 border border-white/10 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                      <MagneticButton strength={0.3}>
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-white/15 flex items-center gap-2 shadow-sm transition-all"
                        >
                          <Github className="w-4 h-4" />
                          <span>View on GitHub</span>
                        </a>
                      </MagneticButton>

                      <MagneticButton strength={0.3}>
                        <button
                          onClick={() => setSelectedProject(currentProject)}
                          className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 border border-blue-400/30 flex items-center gap-2 shadow-glow-sm transition-all"
                        >
                          <Activity className="w-4 h-4" />
                          <span>System Architecture</span>
                        </button>
                      </MagneticButton>
                    </div>
                  </div>

                  {/* Right Column: Architectural Highlights Stats Card */}
                  <div className="lg:col-span-4 w-full">
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 shadow-inner flex flex-col gap-5">
                      <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                          Architecture Metrics
                        </span>
                      </div>

                      {Object.entries(currentProject.stats).map(([k, v], sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                            {k}
                          </span>
                          <span className="text-sm font-bold font-mono text-white mt-0.5">
                            {v}
                          </span>
                        </div>
                      ))}

                      <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-xs text-blue-300 leading-relaxed font-mono">
                        ✓ Evaluated with zero paid APIs & production-grade telemetry.
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Progress Dots & Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-10 h-2.5 bg-gradient-to-r from-blue-500 to-violet-500 shadow-glow-sm'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal: Detailed System Architecture View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full glass-panel border border-white/20 p-8 rounded-3xl shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/20 text-blue-300">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedProject.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-cyan-400 font-medium mb-6">
                {selectedProject.tagline}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 font-mono">
                  Deep Dive & Engineering Implementation
                </h4>
                {selectedProject.bullets.map((b, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs uppercase tracking-wider flex items-center gap-2 shadow-glow-sm"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
