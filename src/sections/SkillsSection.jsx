import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Bot,
  Network,
  Cpu,
  BarChart3,
  Code2,
  Table,
  Zap,
  HardDrive,
  Sparkles,
  Layers,
  Users,
  Link2,
  Binary,
  Activity,
  Search,
  Terminal,
  GitBranch,
  CheckCircle2,
  Box,
  BrainCircuit,
} from 'lucide-react';
import { skillCategories, marqueeSkillsRow1, marqueeSkillsRow2 } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';

// Icon mapper for dynamic string icon lookups
const iconMap = {
  Database,
  Bot,
  Network,
  Cpu,
  BarChart3,
  Code2,
  Table,
  Zap,
  HardDrive,
  Sparkles,
  Layers,
  Users,
  Link2,
  Binary,
  Activity,
  Search,
  Terminal,
  GitBranch,
  CheckCircle2,
  Box,
  BrainCircuit,
};

function MarqueeItem({ item }) {
  const IconComponent = iconMap[item.icon] || Sparkles;

  return (
    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-panel border border-white/10 hover:border-blue-400/40 hover:shadow-glow-sm transition-all mx-3 shrink-0 select-none">
      <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
        <IconComponent className="w-4 h-4" />
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-100">{item.name}</div>
        <div className="text-[10px] font-mono text-slate-400">{item.category}</div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background-dark/50">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4"
          >
            Skills, Tools & <span className="text-gradient">Architectures</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Specialized toolkit spanning high-performance relational databases, exploratory statistical pipelines, and state-of-the-art agentic AI systems.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-glow-sm border border-blue-400/40'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-glow-sm border border-blue-400/40'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grouped Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Sparkles;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard maxTilt={8} className="p-7 glass-panel border border-white/10 h-full flex flex-col justify-between shadow-xl">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-cyan-400 shadow-glow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-blue-500/15 border border-white/10 hover:border-blue-400/30 transition-all flex items-center gap-1.5"
                        >
                          <span className="text-xs font-medium text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-cyan-400/70">
                            • {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Infinite Auto-Scrolling Marquee Banner */}
      <div className="relative w-full overflow-hidden py-4 border-y border-white/10 bg-slate-950/40 backdrop-blur-sm">
        {/* Left & Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none" />

        {/* Row 1: Leftward Marquee */}
        <div className="flex overflow-hidden group mb-4">
          <div className="flex shrink-0 animate-marquee-left group-hover:[animation-play-state:paused]">
            {marqueeSkillsRow1.concat(marqueeSkillsRow1).map((item, idx) => (
              <MarqueeItem key={`r1-${idx}`} item={item} />
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee-left group-hover:[animation-play-state:paused]" aria-hidden="true">
            {marqueeSkillsRow1.concat(marqueeSkillsRow1).map((item, idx) => (
              <MarqueeItem key={`r1-dup-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Marquee */}
        <div className="flex overflow-hidden group">
          <div className="flex shrink-0 animate-marquee-right group-hover:[animation-play-state:paused]">
            {marqueeSkillsRow2.concat(marqueeSkillsRow2).map((item, idx) => (
              <MarqueeItem key={`r2-${idx}`} item={item} />
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee-right group-hover:[animation-play-state:paused]" aria-hidden="true">
            {marqueeSkillsRow2.concat(marqueeSkillsRow2).map((item, idx) => (
              <MarqueeItem key={`r2-dup-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
