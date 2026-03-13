import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-32 flex items-center relative z-10 pointer-events-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center w-full">
        
        {/* Left Column: The Cinematic Portrait */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-5 relative group"
        >
          <div className="relative overflow-hidden bg-dark-panel aspect-[3/4] border border-rain-grey">
            {/* Replace this src with your actual photo path later */}
            <img 
              src="Abhyuday.jpeg" 
              alt="Abhyuday Sachdeva" 
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:brightness-100"
            />
            {/* The Gotham Blue/Grey Wash Overlay */}
            <div className="absolute inset-0 bg-slate-900 mix-blend-overlay opacity-60"></div>
            {/* Heavy Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000000_120%)]"></div>
            {/* Subtle Grain over the image */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
          </div>
        </motion.div>

        {/* Right Column: Text & Context */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-7 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
            The Architect.
          </h2>
          
          <div className="space-y-6 text-light-text leading-relaxed">
            <p>
              I build robust, low-level systems and scalable backend infrastructure. The goal is never just to write code that works, but to architect solutions that are rigorously tested, highly performant, and structurally sound.
            </p>

            {/* Education Card - Dark panel with blood red left border */}
            <div className="bg-dark-panel border-l-2 border-blood-red p-6 my-8">
              <h3 className="text-white font-semibold text-lg tracking-wide uppercase text-[15px]">Computer Science Engineering</h3>
              <p className="text-mid-text text-sm mt-1">Vellore Institue of Technology • 2022 - 2026</p>
            </div>

            {/* Career Interests Tags */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-mid-text mb-4 font-mono">Core Focus Areas</p>
              <div className="flex flex-wrap gap-3">
                {['Systems Programming', 'Cloud Computing Architecture', 'Natural Language Processing', 'C/C++', 'Algorithm Design'].map((tag) => (
                  <span key={tag} className="px-4 py-2 text-xs text-light-text bg-transparent border border-rain-grey hover:border-blood-red hover:text-white transition-colors duration-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;