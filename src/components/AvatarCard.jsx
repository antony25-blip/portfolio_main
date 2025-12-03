import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";

export default function AvatarCard() {
  return (
    <motion.div
      className="relative h-72 w-72 sm:h-80 sm:w-80"
      initial={{ scale: 0.9, opacity: 0, y: 20 }}     // first zoom only
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Outer subtle border glow */}
      <motion.div
        className="absolute inset-0 rounded-[32px] border border-cyan-500/25"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{
          duration: 8,      // slower glow
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main card with slow glow pulse */}
      <motion.div
        className="relative h-full w-full rounded-[32px] bg-[#0B1220] overflow-hidden"
        animate={{
          boxShadow: [
            "0 0 0 rgba(23,113,255,0.0)",
            "0 0 22px rgba(23,113,255,0.25)",
            "0 0 0 rgba(23,113,255,0.0)",
          ],
        }}
        transition={{
          duration: 10,     // slow + smooth
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner dark surface */}
        <div className="absolute inset-[10px] flex items-center justify-center rounded-[26px] bg-[#050816] shadow-[inset_0_0_40px_rgba(0,0,0,0.55)]">
          
          {/* Avatar: smaller movement + slower + infinite */}
          <motion.img
            src={avatar}
            alt="avatar"
            className="h-40 w-40 object-contain"
            animate={{
              x: [0, 4, 0, -4, 0],        // tiny left-right drift
              y: [0, -3, 0, -3, 0],       // smaller float
              rotate: [-1.5, 0, 1.5, 0],  // subtle tilt
            }}
            transition={{
              duration: 6,               // slower movement
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
