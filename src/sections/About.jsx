import { motion } from 'framer-motion';
import AvatarCard from "../components/AvatarCard.jsx";

const cardVar = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
        {/* avatar blob – you can replace emoji with your image */}
        <motion.div
        variants={cardVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto"
        >
        <AvatarCard />
        </motion.div>


          {/* small waving shapes */}
          <motion.div
            className="absolute -right-3 -top-3 h-10 w-10 rounded-2xl border border-cyan-400/50"
            animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -left-4 bottom-4 h-8 w-8 rounded-full border border-sky-400/50"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
          />
       

        {/* text + timeline */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6 text-left"
        >
          <div>
            <h2 className="text-3xl font-bold text-cyan-300">About Me</h2>
            <div className="mt-1 h-1 w-16 rounded-full bg-cyan-500" />
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
  I’m a passionate Computer Science student with a strong focus on 
  full-stack development and modern web technologies. I enjoy building 
  end-to-end applications that are fast, scalable, and user-friendly.
</p>

<p className="max-w-xl text-sm leading-relaxed text-slate-400">
  I’m also deeply interested in machine learning, exploring how intelligent
  systems can solve real-world problems. My journey in tech is driven by 
  curiosity, continuous learning, and a commitment to writing clean,
  maintainable code that delivers great user experiences.
</p>


          {/* mini timeline */}
          <div className="mt-6 space-y-4">
  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
    Education
  </h3>

  <div className="relative border-l border-slate-700/80 pl-5 space-y-4">
    <div>
      <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-cyan-400 bg-slate-950" />
      <p className="text-sm font-semibold text-slate-100">
        B.Tech in Computer Science
      </p>
      <p className="text-xs text-slate-400">
        Final Year • 2022 – 2026
      </p>
    </div>
  </div>
</div>


     {/* tags */}
<div className="flex flex-wrap gap-4 pt-4">
  {/* Problem Solver */}
  <div
    className="
      rounded-[14px]
      border border-cyan-400/70
      bg-cyan-400/5
      px-6 py-2
      text-sm font-medium
      text-cyan-200
    "
  >
    Problem Solver
  </div>

  {/* Team Player */}
  <div
    className="
      rounded-[14px]
      border border-sky-500/60
      bg-sky-500/5
      px-6 py-2
      text-sm font-medium
      text-sky-200
    "
  >
    Team Player
  </div>
</div>


        </motion.div>
      </div>
    </section>
  );
}
