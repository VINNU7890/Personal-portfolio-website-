import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function SpotlightGlow({
  color = 'rgba(59, 130, 246, 0.12)',
  size = 500,
  className = '',
}) {
  const [mounted, setMounted] = useState(false);
  const springX = useSpring(-500, { damping: 30, stiffness: 200 });
  const springY = useSpring(-500, { damping: 30, stiffness: 200 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      springX.set(e.clientX - size / 2);
      springY.set(e.clientY - size / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY, size]);

  if (!mounted) return null;

  return (
    <motion.div
      className={`pointer-events-none fixed z-0 transition-opacity duration-500 rounded-full blur-3xl ${className}`}
      style={{
        x: springX,
        y: springY,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}
