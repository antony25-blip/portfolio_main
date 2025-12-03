import { motion, useMotionValue } from 'framer-motion';
import React from 'react';

export default function MagneticButton({ children, className = '', ...rest }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      {...rest}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`relative overflow-hidden rounded-full px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 
        bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-glow
        flex items-center gap-2 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </motion.button>
  );
}
