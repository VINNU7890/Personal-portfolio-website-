import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';
import Toast from '../components/Toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const triggerToast = (text) => {
    setToastMessage(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    triggerToast(`Copied ${key} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      /**
       * TO CONNECT FORMSPREE:
       * Replace 'YOUR_FORMSPREE_ID' with your form ID (e.g., https://formspree.io/f/xyzab123)
       * or use EmailJS with your Service & Template ID.
       */
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
      const FORMSPREE_ENDPOINT = formspreeId && formspreeId !== 'your_formspree_id_here'
        ? `https://formspree.io/f/${formspreeId}`
        : 'https://formspree.io/f/YOUR_FORMSPREE_ID';

      // If user hasn't set their Formspree ID yet, simulate successful submission
      if (FORMSPREE_ENDPOINT.includes('YOUR_FORMSPREE_ID')) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Network response was not ok');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#8b5cf6', '#06b6d4'],
        });
      } catch (err) {
        // silent fallback
      }

      triggerToast('Message sent successfully! I will reply promptly.');
    } catch (err) {
      setSubmitStatus('error');
      triggerToast('Failed to send message. Please try directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      actionHref: `mailto:${personalInfo.email}`,
      actionLabel: 'Send Email',
      color: 'from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/30',
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      actionHref: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      actionLabel: 'Call Now',
      color: 'from-cyan-500/20 to-cyan-600/10 text-cyan-400 border-cyan-500/30',
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 70670 99093',
      actionHref: personalInfo.whatsapp,
      actionLabel: 'Chat on WhatsApp',
      color: 'from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-500/30',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'in/shreyashchaudha',
      actionHref: personalInfo.socials.linkedin.url,
      actionLabel: 'Connect',
      color: 'from-indigo-500/20 to-indigo-600/10 text-indigo-400 border-indigo-500/30',
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: 'github.com/VINNU7890',
      actionHref: personalInfo.socials.github.url,
      actionLabel: 'Explore Repos',
      color: 'from-violet-500/20 to-violet-600/10 text-violet-400 border-violet-500/30',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4"
          >
            Let's Build Something <span className="text-gradient">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Whether you have an autonomous agent challenge, big-data SQL pipeline, or internship opportunity — reach out directly below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Instant Channels
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Click to open immediately, or copy address/number to clipboard.
            </p>

            {contactCards.map((card) => {
              const Icon = card.icon;
              const isCopied = copiedKey === card.label;

              return (
                <div
                  key={card.id}
                  className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-blue-400/30 transition-all flex items-center justify-between shadow-sm group"
                >
                  <a
                    href={card.actionHref}
                    target={card.id === 'email' || card.id === 'phone' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.color} border flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-slate-400">
                        {card.label}
                      </div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                        {card.value}
                      </div>
                    </div>
                  </a>

                  {/* Copy Button */}
                  <div className="flex items-center gap-2 pl-3">
                    <MagneticButton strength={0.3}>
                      <button
                        onClick={() => copyToClipboard(card.value, card.label)}
                        aria-label={`Copy ${card.label}`}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-all"
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </MagneticButton>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Working Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <TiltCard
              maxTilt={4}
              spotlight={true}
              spotlightColor="rgba(59, 130, 246, 0.15)"
              className="p-8 sm:p-10 glass-panel border border-white/15 shadow-2xl relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Direct delivery to shreyashchaudha@gmail.com
                  </p>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs mb-6 flex items-center gap-3">
                  <Check className="w-5 h-5 shrink-0" />
                  <span>
                    Thank you! Your message has been recorded. I'll get back to you shortly.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs mb-6">
                  Submission encountered an issue. Please write to me directly at{' '}
                  <a href={`mailto:${personalInfo.email}`} className="underline font-semibold">
                    {personalInfo.email}
                  </a>
                  .
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Mercer"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/60 dark:bg-slate-950/60 border ${
                      errors.name ? 'border-rose-500/60' : 'border-white/10'
                    } text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/60 dark:bg-slate-950/60 border ${
                      errors.email ? 'border-rose-500/60' : 'border-white/10'
                    } text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/60 dark:bg-slate-950/60 border ${
                      errors.message ? 'border-rose-500/60' : 'border-white/10'
                    } text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <MagneticButton strength={0.25} className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-glow-md hover:shadow-glow-lg border border-blue-400/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </MagneticButton>
              </form>

              {/* Formspree / EmailJS Setup Guide Note */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500 leading-relaxed">
                <span className="text-slate-400 font-semibold">Form Integration Note:</span> In{' '}
                <code className="text-cyan-400">src/sections/ContactSection.jsx</code> line 68, you can insert your Formspree Form ID or EmailJS service endpoint to receive inquiries directly.
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Copy Toast Alert */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
