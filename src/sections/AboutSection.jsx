import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  Database,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo, education, currentlyLearning, metrics } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';

function CounterItem({ metric }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!isInView) return;

    const target = metric.value;
    if (target === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, metric.value]);

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
    return num.toLocaleString();
  };

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-blue-500/30 transition-all shadow-lg flex flex-col justify-between"
    >
      <div>
        <div className="font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 mb-2">
          {formatNumber(count)}
          <span className="text-cyan-400">{metric.suffix}</span>
        </div>
        <div className="text-sm font-semibold text-white mb-1">{metric.label}</div>
      </div>
      <p className="text-xs text-slate-400 mt-2">{metric.description}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Bridging Clean Data to <span className="text-gradient">Autonomous Intelligence</span>
          </motion.h2>
        </div>

        {/* Counter Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, idx) => (
            <CounterItem key={idx} metric={metric} />
          ))}
        </motion.div>

        {/* Main Grid: Summary & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl glass-panel border border-white/10 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Professional Summary
                </h3>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {personalInfo.summary}
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-semibold text-cyan-400 text-sm mb-1">01. Exploratory Data</div>
                  <p className="text-xs text-slate-400">Python, Pandas, statistical anomalies & visual reports.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-semibold text-blue-400 text-sm mb-1">02. High-Volume SQL</div>
                  <p className="text-xs text-slate-400">1M+ records processed, normalized, and optimized.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-semibold text-violet-400 text-sm mb-1">03. Agentic & RAG</div>
                  <p className="text-xs text-slate-400">LangGraph state loops, vector databases & Gemini integration.</p>
                </div>
              </div>
            </div>

            {/* Currently Learning Card */}
            <div className="p-8 rounded-3xl glass-panel border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Currently Expanding & Learning
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">Continuous Upskilling Horizon</p>
                </div>
              </div>

              <div className="space-y-4">
                {currentlyLearning.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-sm text-slate-200">{item.title}</span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {item.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <TiltCard maxTilt={8} className="p-8 rounded-3xl glass-panel border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-glow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Formal Education
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {education.institution}
                  </h3>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-base font-semibold text-slate-100 mb-1">
                  {education.degree}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span>{education.period}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">{education.status}</span>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Relevant Coursework
                </span>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-200 border border-white/10"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {education.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </TiltCard>

            {/* Quick Contact Badge Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 shadow-lg bg-gradient-to-br from-blue-950/40 to-slate-900/60">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold text-white">Hands-on Production Mindset</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Not just theory: every architecture is backed by functional code, reproducible SQLite/MySQL databases, and evaluated with LangSmith telemetry.
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Location: {personalInfo.location}</span>
                <span className="text-cyan-400">Open to Relocation / Remote</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
