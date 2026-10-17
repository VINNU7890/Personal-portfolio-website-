import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Eye,
  Maximize2,
  FileCheck,
} from 'lucide-react';
import { personalInfo, education, skillCategories } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';

export default function ResumeSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-background-dark/50">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4"
          >
            Professional <span className="text-gradient">Resume</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Review my complete credentials, coursework, projects, and certifications directly below or download a verified PDF copy.
          </motion.p>
        </div>

        {/* Main Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Shreyash_Chaudha_Resume.pdf
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Last updated: {personalInfo.resumeLastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Buttons: Download & Open in New Tab */}
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton strength={0.25}>
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Open in New Tab</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <a
                  href={personalInfo.resumePath}
                  download="Shreyash_Chaudha_Resume.pdf"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 border border-blue-400/30 flex items-center gap-2 shadow-glow-sm hover:shadow-glow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* PDF Viewer Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Embedded PDF iframe */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-inner">
              <div className="bg-slate-900 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    PDF Document Viewer
                  </span>
                </div>
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Full Screen</span>
                </a>
              </div>

              {/* Responsive PDF Iframe */}
              <div className="w-full h-[580px] sm:h-[680px] bg-slate-900/40 relative">
                <iframe
                  src={`${personalInfo.resumePath}#toolbar=0&navpanes=0`}
                  title="Shreyash Chaudha Resume"
                  className="w-full h-full border-none"
                  loading="lazy"
                />

                {/* Mobile Fallback Overlay if browser doesn't render PDF iframe */}
                <div className="sm:hidden absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/90 border border-white/10 backdrop-blur-md text-center">
                  <p className="text-xs text-slate-300 mb-2">
                    On mobile? Tap below to view or download directly:
                  </p>
                  <a
                    href={personalInfo.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Open PDF in Full View
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Resume Digest / Key Qualifications */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Key Qualifications
                </h4>

                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="pb-3 border-b border-white/5">
                    <span className="font-semibold text-slate-200 block mb-1">
                      Academic Degree
                    </span>
                    <span className="text-slate-400">
                      B.Tech in CSE, LNCT University (2023–2027)
                    </span>
                  </div>

                  <div className="pb-3 border-b border-white/5">
                    <span className="font-semibold text-slate-200 block mb-1">
                      Core Strengths
                    </span>
                    <span className="text-slate-400">
                      Python, SQL (MySQL & SQLite), LangGraph Agent Loops, RAG Pipelines, ChromaDB
                    </span>
                  </div>

                  <div className="pb-3 border-b border-white/5">
                    <span className="font-semibold text-slate-200 block mb-1">
                      Scale & Throughput
                    </span>
                    <span className="text-slate-400">
                      Cleaned and queried 1,000,000+ transactional user records
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-200 block mb-1">
                      Community Impact
                    </span>
                    <span className="text-slate-400">
                      Author of 45-Day AI Engineering Challenge series
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Download Callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-violet-900/30 border border-blue-400/30">
                <h5 className="font-heading text-sm font-bold text-white mb-2">
                  Need a copy for hiring review?
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Download the official, ATS-friendly one-page PDF version optimized for technical evaluation.
                </p>

                <a
                  href={personalInfo.resumePath}
                  download="Shreyash_Chaudha_Resume.pdf"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download PDF Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
