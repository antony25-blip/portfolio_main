import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton.jsx";

const contacts = [
  {
    label: "Email",
    value: "antonysmechery25@example.com",
    icon: "✉️",
    link: "mailto:antonysmechery25@example.com",
  },
  {
    label: "Phone",
    value: "+91 9496189638",
    icon: "📞",
    link: "tel:+919496189638",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/antony-s-mechery",
    icon: "in",
    link: "https://www.linkedin.com/in/antony-s-mechery/",
  },
  {
    label: "GitHub",
    value: "github.com/antony25-blip",
    icon: "{}",
    link: "https://github.com/antony25-blip",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45, ease: "easeOut" },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      {/* Title + subtitle */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300">
          Get In Touch
        </h2>
        <p className="mt-4 text-sm text-slate-400 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      {/* Top contact cards */}
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 md:grid-cols-4">
          {contacts.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 32px rgba(56,189,248,0.45)",
              }}
              className="flex flex-col items-center rounded-3xl border border-cyan-500/15 
                         bg-[#020617]/80 px-4 py-6 shadow-[0_0_20px_rgba(15,23,42,0.7)] 
                         backdrop-blur-xl transition cursor-pointer"
            >
              {/* icon square */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl 
                              bg-gradient-to-br from-cyan-400 to-sky-500 
                              text-white text-xl font-semibold">
                {item.icon}
              </div>

              <p className="text-sm font-semibold text-slate-50">{item.label}</p>

              <p className="mt-1 text-[11px] text-slate-400 text-center">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom big card */}
      <div className="mx-auto mt-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl border border-cyan-500/15 bg-[#020617]/80 
                     px-6 py-10 text-center shadow-[0_0_26px_rgba(15,23,42,0.85)] 
                     backdrop-blur-xl"
        >
          {/* Animated paper-plane icon */}
          <motion.div
            className="mb-4 flex justify-center"
            animate={{
              y: [0, -6, 0],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              className="h-10 w-10 text-cyan-400"
              animate={{
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M3 11.5L20 4L13.5 20L11.2 13.4L3 11.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>

          <h3 className="text-xl font-semibold text-slate-50">
            Let&apos;s Work Together!
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Whether you have a project in mind or just want to chat about
            technology, feel free to reach out using any of the contact methods
            above.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {/* Send Email Button */}
            <MagneticButton
              className="px-6 py-2 text-sm"
              onClick={() =>
                (window.location.href =
                  "mailto:antonysmechery25@example.com")
              }
            >
              📩 Send Email
            </MagneticButton>

            {/* LinkedIn Button */}
            <MagneticButton
              className="bg-transparent border border-cyan-400/60 
                         text-cyan-200 shadow-none px-6 py-2 text-sm"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/antony-s-mechery/",
                  "_blank"
                )
              }
            >
              🔗 Connect on LinkedIn
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
