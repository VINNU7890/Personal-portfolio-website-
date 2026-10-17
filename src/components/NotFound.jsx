import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function NotFound({ onGoHome }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background-dark text-slate-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full glass-panel p-8 rounded-3xl border border-white/10 text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <h1 className="text-6xl font-extrabold font-heading text-gradient mb-2">404</h1>
        <h2 className="text-2xl font-bold font-heading text-white mb-3">Page Not Found</h2>
        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The requested coordinate does not exist or has been shifted in dimensional space. Let's get you back on track.
        </p>

        <MagneticButton strength={0.3} className="w-full">
          <button
            onClick={onGoHome}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium shadow-glow-sm hover:shadow-glow-md flex items-center justify-center gap-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>
        </MagneticButton>
      </motion.div>
    </div>
  );
}
