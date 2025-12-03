import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const springConfig = { damping: 25, stiffness: 300, mass: 0.4 };

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const x2 = useMotionValue(-100);
  const y2 = useMotionValue(-100);

  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);
  const trailX = useSpring(x2, { ...springConfig, damping: 40 });
  const trailY = useSpring(y2, { ...springConfig, damping: 40 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 8);
      y.set(e.clientY - 8);
      x2.set(e.clientX - 18);
      y2.set(e.clientY - 18);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y, x2, y2]);

  return (
    <>
      {/* main cursor */}
      <motion.div
        className="pointer-events-none fixed z-[100] h-4 w-4 rounded-full bg-cyan-400 mix-blend-screen"
        style={{ translateX: cursorX, translateY: cursorY }}
      />
      {/* glow trail */}
      <motion.div
        className="pointer-events-none fixed z-[90] h-10 w-10 rounded-full bg-cyan-400/30 blur-xl"
        style={{ translateX: trailX, translateY: trailY }}
      />
    </>
  );
}
