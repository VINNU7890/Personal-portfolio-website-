import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'pointer' | 'project' | 'drag'
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing ring physics
  const springConfig = { damping: 24, stiffness: 280, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check touch device or reduced motion
    const touchCheck = () => {
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(hover: none)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsTouchDevice(isTouch || prefersReducedMotion);
    };

    touchCheck();
    window.addEventListener('resize', touchCheck);

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Global listener for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor]'
      );

      if (!target) {
        setCursorType('default');
        setCursorText('');
        return;
      }

      const customCursorData = target.getAttribute('data-cursor');
      if (customCursorData === 'project') {
        setCursorType('project');
        setCursorText('View');
      } else if (customCursorData === 'drag') {
        setCursorType('drag');
        setCursorText('Drag');
      } else {
        setCursorType('pointer');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', touchCheck);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Small Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'project' || cursorType === 'drag' ? 0 : cursorType === 'pointer' ? 6 : 8,
          height: cursorType === 'project' || cursorType === 'drag' ? 0 : cursorType === 'pointer' ? 6 : 8,
          opacity: cursorType === 'project' || cursorType === 'drag' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing Outer Glow Ring / Label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center font-heading font-semibold text-xs tracking-wider"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width:
            cursorType === 'project'
              ? 64
              : cursorType === 'drag'
              ? 60
              : cursorType === 'pointer'
              ? 48
              : 32,
          height:
            cursorType === 'project'
              ? 64
              : cursorType === 'drag'
              ? 60
              : cursorType === 'pointer'
              ? 48
              : 32,
          backgroundColor:
            cursorType === 'project'
              ? 'rgba(59, 130, 246, 0.9)'
              : cursorType === 'drag'
              ? 'rgba(139, 92, 246, 0.9)'
              : cursorType === 'pointer'
              ? 'rgba(59, 130, 246, 0.15)'
              : 'rgba(255, 255, 255, 0.05)',
          borderColor:
            cursorType === 'project' || cursorType === 'drag'
              ? 'rgba(255, 255, 255, 0.8)'
              : cursorType === 'pointer'
              ? 'rgba(56, 189, 248, 0.7)'
              : 'rgba(255, 255, 255, 0.3)',
          borderWidth: cursorType === 'project' || cursorType === 'drag' ? 0 : 1.5,
          color: '#ffffff',
          boxShadow:
            cursorType === 'project' || cursorType === 'drag'
              ? '0 0 25px rgba(59, 130, 246, 0.6)'
              : cursorType === 'pointer'
              ? '0 0 15px rgba(56, 189, 248, 0.3)'
              : 'none',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[11px] font-bold text-white uppercase tracking-widest drop-shadow-sm select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
