import { motion } from "framer-motion";

const techSkills = [
  { name: "React", badge: "R", from: "#22d3ee", to: "#0ea5e9" },
  { name: "JavaScript", badge: "JS", from: "#fbbf24", to: "#f97316" },
  { name: "HTML", badge: "</>", from: "#fb7185", to: "#f97316" },
  { name: "CSS", badge: "{}", from: "#38bdf8", to: "#0ea5e9" },
  { name: "Tailwind CSS", badge: "Tw", from: "#22d3ee", to: "#06b6d4" },

  { name: "Node.js", badge: "Nd", from: "#22c55e", to: "#16a34a" },
  { name: "Python", badge: "Py", from: "#a855f7", to: "#22d3ee" },
  { name: "MongoDB", badge: "Mg", from: "#22c55e", to: "#16a34a" },
  { name: "SQL", badge: "DB", from: "#6366f1", to: "#4f46e5" },

  { name: "Java", badge: "J", from: "#fb923c", to: "#f97316" },
  { name: "C", badge: "C", from: "#0ea5e9", to: "#2563eb" },
  { name: "C++", badge: "C++", from: "#8b5cf6", to: "#6366f1" },
];

const tools = [
  "Git/GitHub",
  "Figma",
  "CAD",
  "VS Code",
  "Google Colab",
  "Vercel",
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.45, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      {/* Section title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300">
          Skills &amp; Technologies
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-cyan-500" />
        <p className="mt-4 text-sm text-slate-400">
          Technologies I work with
        </p>
      </div>

      {/* Tech skill cards */}
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {techSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 32px rgba(56,189,248,0.45)",
              }}
              className="group flex flex-col items-center justify-center rounded-3xl border border-cyan-500/15 bg-[#020617]/70 px-4 py-5 shadow-[0_0_20px_rgba(15,23,42,0.7)] backdrop-blur-lg"
            >
              {/* icon box */}
              <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold text-white"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${skill.from}, ${skill.to})`,
                }}
              >
                {skill.badge}
              </div>
              <p className="text-sm font-medium text-slate-50">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="mt-14 text-center">
        <h3 className="text-xl font-semibold text-cyan-300">
          Tools &amp; Platforms
        </h3>
        <p className="mt-2 text-xs text-slate-400">
          What I use to get things done
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-5xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 26px rgba(56,189,248,0.35)",
              }}
              className="flex items-center justify-center rounded-3xl border border-cyan-500/15 bg-[#020617]/80 px-4 py-4 text-xs font-medium text-slate-100 shadow-[0_0_20px_rgba(15,23,42,0.7)] backdrop-blur-lg"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
