import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useLenis } from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import SpotlightGlow from './components/SpotlightGlow';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';
import CommunitySection from './sections/CommunitySection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useLenis();

  // Simple route/hash check for 404 demonstration
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#404' || window.location.pathname === '/404') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (is404) {
    return (
      <NotFound
        onGoHome={() => {
          window.location.hash = '';
          setIs404(false);
        }}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-500/30 selection:text-white">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgressBar />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Ambient Spotlight Glow following cursor */}
      <SpotlightGlow color="rgba(59, 130, 246, 0.08)" size={550} />

      {/* Sticky Glass Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections (In exact prescribed order) */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. ABOUT */}
        <AboutSection />

        {/* 3. SKILLS */}
        <SkillsSection />

        {/* 4. PROJECTS */}
        <ProjectsSection />

        {/* 5. CERTIFICATIONS */}
        <CertificationsSection />

        {/* 6. COMMUNITY / CONTENT */}
        <CommunitySection />

        {/* 7. RESUME */}
        <ResumeSection />

        {/* 8. CONTACT */}
        <ContactSection />
      </main>

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
}
