import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Rain from './Rain';
import Nav from './Nav';
import About from './About';
import Research from './Research';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import EasterEggs from './EasterEggs';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-navy-black selection:bg-blood-red selection:text-white font-inter overflow-x-clip">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:bg-black focus:text-white focus:border focus:border-blood-red focus:px-4 focus:py-2 font-mono text-sm"
      >
        Skip to content
      </a>

      {/* THE HIDDEN ARCHITECTURE */}
      <EasterEggs />

      {/* Universal Film Grain */}
      <div className="noise-overlay"></div>

      {/* Animated Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-blood-red w-full z-50 origin-left"
        style={{ scaleX }}
      ></motion.div>

      <Nav />

      <main className="container mx-auto px-6 md:px-12 lg:px-24 relative">

        {/* Hero */}
        <section id="hero" className="min-h-[100svh] flex flex-col justify-center relative">
          <Rain />
          <div className="z-10 relative pointer-events-none">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-mono text-[12px] tracking-[0.3em] uppercase text-blood-red mb-6"
            >
              Case No. 001 · Jaipur
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-6xl md:text-[80px] font-extrabold text-white tracking-tight leading-tight pointer-events-auto"
            >
              Abhyuday Sachdeva
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="text-xl md:text-2xl text-mid-text mt-4 font-normal max-w-2xl pointer-events-auto"
            >
              ML Validation & AI Governance. Research Analyst at TrustBridge Compliance, studying how
              language models get things wrong.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="mt-12 pointer-events-auto"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-4 border border-blood-red text-blood-red px-8 py-4 text-[13px] font-mono tracking-widest uppercase hover:bg-blood-red hover:text-[#000000] cursor-pointer transition-all duration-200 font-bold"
              >
                Open the case file
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-1">↓</span>
              </a>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.a
            href="#about"
            aria-hidden="true"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-mid-text hover:text-white transition-colors"
          >
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Scroll</span>
            <span className="block w-px h-14 bg-blood-red animate-drip"></span>
          </motion.a>
        </section>

        <About />
        <Research />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

      </main>
    </div>
  );
}

export default App;
