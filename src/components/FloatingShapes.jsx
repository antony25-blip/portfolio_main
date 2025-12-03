import { motion, useScroll, useTransform } from 'framer-motion';

export default function FloatingShapes() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-hero-gradient">
      {/* subtle star noise via Tailwind bg-slate-900 is already there */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-32 top-10 h-64 w-64 rounded-[40%] bg-cyan-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-32 top-40 h-80 w-80 rounded-[50%] bg-sky-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: ['0%', '-10%', '0%'], rotate: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
        className="absolute left-20 bottom-40 h-24 w-24 rounded-3xl border border-cyan-500/40"
      />
      <motion.div
        animate={{ y: ['0%', '10%', '0%'], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        className="absolute right-24 top-32 h-20 w-20 rounded-3xl border border-sky-400/40"
      />
    </div>
  );
}
