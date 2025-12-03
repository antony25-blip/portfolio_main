import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton.jsx";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
  id="home"
  className="relative flex min-h-[90vh] flex-col items-center justify-center text-center"
>

      {/* pulsing blue glow behind text */}
      <motion.div
        className="hero-glow pointer-events-none absolute inset-0 -z-20"
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* subtle diagonal squares like in your hero */}
      <motion.div
        className="pointer-events-none absolute -left-10 top-24 h-28 w-28 rounded-3xl border border-cyan-400/40"
        animate={{ rotate: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-16 bottom-24 h-20 w-20 rounded-3xl border border-cyan-400/40"
        animate={{ rotate: [0, -15, 0], y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* availability pill */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-8 flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/40 px-5 py-1.5 text-[11px] text-cyan-200 backdrop-blur-xl"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        Available for opportunities
      </motion.div>

      {/* text block */}
      <div className="relative mb-10">
        {/* glow blob just behind name */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 -top-10 -z-10 mx-auto h-72 w-72 rounded-[50%] bg-cyan-500/30 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        <motion.h1
          className="text-[30px] font-semibold tracking-[0.12em] text-slate-300 sm:text-[32px] uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Hi, I&apos;m
        </motion.h1>

        <motion.h2
          className="mt-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text 
                     text-[42px] font-extrabold tracking-tight text-transparent 
                     sm:text-[56px] md:text-[72px] lg:text-[82px] leading-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          Antony S Mechery
        </motion.h2>

        <motion.p
          className="mt-6 text-[18px] text-slate-200 sm:text-[20px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <span className="text-cyan-400 font-semibold">
   Web Developer
</span>

        </motion.p>

        <motion.p
          className="mx-auto mt-4 max-w-xl text-[13px] leading-relaxed text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          Crafting elegant solutions with modern web technologies. Passionate
          about creating seamless user experiences.
        </motion.p>
      </div>

      {/* CTA buttons */}
      <motion.div
  className="mt-10 flex items-center justify-center gap-4"
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.7 }}
>
  {/* Left Gradient Box Button */}
  <button
    onClick={() =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="
      flex items-center gap-3
      px-8 py-4
      rounded-[12px]     /* <-- PERFECT box edge */
      text-white font-semibold text-[17px]
      bg-gradient-to-r from-cyan-400 to-blue-500
      shadow-[inset_0_0_14px_rgba(255,255,255,0.12)]
      min-w-[200px]      /* <-- ensures box shape */
      justify-center
    "
  >
    <span className="text-xl">&lt;/&gt;</span>
    View My Work
  </button>

  {/* Right Outline Box Button */}
  <button
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="
      px-8 py-4
      rounded-[12px]     /* <-- same curved box edge */
      border border-cyan-300
      text-cyan-300 font-semibold text-[17px]
      min-w-[200px]      /* <-- same width */
      bg-transparent
      justify-center
    "
  >
    Get In Touch
  </button>
</motion.div>



    </section>
  );
}
