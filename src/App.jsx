import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Rain from './Rain';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import EasterEggs from './EasterEggs'; // The hidden logic

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-navy-black selection:bg-blood-red selection:text-white font-inter overflow-hidden">
      
      {/* THE HIDDEN ARCHITECTURE */}
      <EasterEggs />
      
      {/* Universal Film Grain */}
      <div className="noise-overlay"></div>

      {/* Animated Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-[2px] bg-blood-red w-full z-50 origin-left"
        style={{ scaleX }}
      ></motion.div>

      <main className="container mx-auto px-6 md:px-12 lg:px-24 relative">
        
        {/* HERO SECTION - Fully Restored */}
        <section id="hero" className="min-h-screen flex flex-col justify-center relative">
          <Rain />
          <div className="z-10 relative pointer-events-none">
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
              Systems Programming, Cloud Computing, & Natural Language Processing Research.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-6 pointer-events-auto"
            >
              {/* Anchor link pointing directly to the Projects section */}
              <a 
                href="#projects"
                className="inline-block border border-blood-red text-blood-red px-8 py-3 text-[13px] font-mono tracking-widest uppercase hover:bg-blood-red hover:text-[#000000] cursor-pointer transition-all duration-200 font-bold text-center"
              >
                View Projects
              </a>
              
              {/* Download link pointing to your actual resume file */}
              <a 
                href="abhyuday-dev\public\Abhyudays_Resume.pdf"
                download="Abhyuday_Sachdeva_Resume.pdf" 
                className="inline-block text-light-text px-8 py-3 text-[13px] font-mono tracking-widest uppercase hover:text-white cursor-pointer transition-colors duration-200 text-center"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </section>

        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />

      </main>
    </div>
  );
}

export default App;