import React from "react";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import { motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor.jsx";
import FloatingShapes from "./components/FloatingShapes.jsx";

function AppShell() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      {/* custom cursor */}
      <CustomCursor />

      {/* floating shapes / parallax background */}
      <FloatingShapes />

      {/* main content */}
      <motion.main
        className="mx-auto flex max-w-6xl flex-col gap-32 px-4 pb-24 pt-24 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  );
}

export default function App() {
  return <AppShell />;
}
