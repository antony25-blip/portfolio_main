import { motion } from "framer-motion";

export default function CurvedShape({
  size = 140,
  stroke = "rgba(56, 189, 248, 0.45)",
  strokeWidth = 2,
  className = "",
  animationSpeed = 12,
  direction = 1,
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
      animate={{
        rotate: [0, 8 * direction, 0],
        y: [0, -10 * direction, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: animationSpeed,
        ease: "easeInOut",
      }}
    >
      {/* PATH = your exact shape */}
      <path
        d="
          M20 10 
          L75 20 
          Q90 25 85 60 
          L25 80 
          Q10 75 20 10
        "
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
