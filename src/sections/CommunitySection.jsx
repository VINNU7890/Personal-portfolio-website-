import React from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Flame,
  Calendar,
  Share2,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  MessageSquare,
  Users,
} from 'lucide-react';
import { communityContent, personalInfo } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Public Learning & Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4"
          >
            45-Day AI Engineering <span className="text-gradient">Challenge</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Demystifying agent loops, RAG retrieval architectures, and real-world LLM orchestration through daily technical posts on LinkedIn.
          </motion.p>
        </div>

        {/* Feature Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <TiltCard
            maxTilt={5}
            spotlight={true}
            spotlightColor="rgba(59, 130, 246, 0.2)"
            className="p-8 sm:p-12 glass-panel border border-white/15 rounded-3xl shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-blue-950/40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {communityContent.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      Active Sprint • 2025 – Present
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {communityContent.description}
                </p>

                {/* Challenge Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 mb-8">
                  {communityContent.stats.map((s, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs font-mono text-slate-400">{s.label}</span>
                      <span className="text-base sm:text-lg font-bold font-heading text-white mt-0.5">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* LinkedIn Follow Button */}
                <MagneticButton strength={0.3}>
                  <a
                    href={communityContent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs uppercase tracking-wider shadow-glow-sm hover:shadow-glow-md border border-blue-400/40 transition-all group"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Follow Challenge on LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </MagneticButton>
              </div>

              {/* Right Column: Visual topics snapshot */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Daily Breakdown Series Topics
                </span>
                <div className="space-y-2.5">
                  {communityContent.topics.slice(0, 4).map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/5 hover:border-blue-400/30 transition-all"
                    >
                      <div className="font-semibold text-xs text-cyan-300 mb-0.5">
                        {topic.name}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2">
                        {topic.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Breakdown Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityContent.topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-blue-400/30 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-base font-bold text-white mb-2">
                  {topic.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
