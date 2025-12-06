import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton.jsx";
import pj1 from "../assets/pj1.png";
import pj3 from "../assets/pj3.png";
import pj2 from "../assets/pj2.png";


const projects = [
    {
      title: "AI-based Plagiarism Checker",
      description:
        "Developed a Python-based tool to detect plagiarism by comparing a source document against multiple files. Implemented sentence segmentation and utilized the 'difflib' library's 'SequenceMatcher' for efficient text similarity scoring.",
      tech: ["Python", "difflib", "Flask", "NLP"],
      live: "https://plagiarism-checker-3-6aiw.onrender.com",
      github: "https://github.com/antony25-blip/plagiarism_checker",
      image: pj1,
    },
  
    {
      title: "Sentinal Connect",
      description:
        "Sentinal Connect is a one-to-one encrypted messaging platform with built-in online safety features. It supports profile pictures, emojis, and a simple user dashboard. The app uses two ML models—one to detect phishing URLs (protected by a password-gate for safety) and another to identify cyberbullying or hate speech. Users under 18 must provide a parent’s email, and parents are notified automatically if harmful or abusive behaviour is detected.",
        tech: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Socket.io",
          "JWT Auth",
          "bcrypt Hashing",
          "AES Encryption",
        ],
      live: "https://sentinal-connect.vercel.app/",
      github: "https://github.com/antony25-blip/sentinal-connect",
      image: pj2,
    },
  
    {
      title: "Daily Mood & Reflection",
      description:
        "A simple self-contained mental health check-in app that asks about mood, energy, stress, and sleep, lets you write a reflection, runs lexicon-based sentiment analysis, and saves recent history in localStorage.",
      tech: ["JavaScript", "React", "Sentiment Logic", "localStorage"],
      live: "https://antony25-blip.github.io/mental_healthAI/",
      github: "https://github.com/antony25-blip/mental_healthAI",
      image: pj3,
    },
  
    {
      title: "Air Quality Prediction System",
      description:
        "A full-stack ML project that trains a model to predict air quality categories based on environmental features and shows predictions in a clean web UI.",
      tech: ["Machine Learning", "Python", "Pandas", "Flask/React"],
      live: "#",
      github: "#",
      image: null,
    },
  ];
  
  
export default function Projects() {

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-cyan-300">Projects</h2>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-cyan-500" />
        <p className="mt-4 text-sm text-slate-400">
          A selection of my full-stack, ML, and web projects
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="glass-card relative overflow-hidden p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            {/* preview block */}
            {/* Project Cover Image */}
<div className="mb-5 h-40 w-full overflow-hidden rounded-2xl bg-slate-900/40">
  {project.image ? (
    <motion.img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    />
  ) : (
    <motion.div
      className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900"
      animate={{ opacity: [1, 0.7, 1] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 shadow-glow" />
    </motion.div>
  )}
</div>


            <h3 className="text-lg font-semibold text-slate-100">
              {project.title}
            </h3>
            <div
              className="mt-2 h-16 overflow-y-auto pr-2 text-sm text-slate-400"
            >
              {project.description}
            </div>


            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[11px] text-cyan-100"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Live Demo button (only if live link is not '#') */}
              {project.live && project.live !== "#" && (
                <MagneticButton
                  className="px-4 py-1 text-xs"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  Live Demo
                </MagneticButton>
              )}

              {/* GitHub button (only if github link is not '#') */}
              {project.github && project.github !== "#" && (
                <MagneticButton
                  className="bg-slate-900/80 px-4 py-1 text-xs text-cyan-100 border border-cyan-500/40 shadow-none"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  GitHub
                </MagneticButton>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
