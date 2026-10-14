import React from 'react';
import { motion } from 'framer-motion';
import abhyudayPic from './assets/Abhyuday.jpeg';

const About = () => {
  return (
    <section id="about" className="py-32 flex items-center relative z-10 pointer-events-auto scroll-mt-16">
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
            <img 
              src={abhyudayPic} 
              alt="Portrait of Abhyuday Sachdeva"
              loading="lazy"
              decoding="async" 
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
          <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-blood-red mb-4">01 · About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
            The Analyst.
          </h2>
          
          <div className="space-y-6 text-light-text leading-relaxed">
            <p>
              I studied computer science at VIT, graduating in 2026. My final-year research measured how well different prompting strategies reduce hallucination in large language models. At SAG Infotech I built a real-time face recognition system as an AI developer intern.
            </p>
            <p>
              I now work as a research analyst at TrustBridge Compliance, on how machine learning models are validated and governed in regulated environments, under GAMP 5, CSA and CSV.
            </p>

            {/* Education Card - Dark panel with blood red left border */}
            <div className="bg-dark-panel border-l-2 border-blood-red p-6 my-8">
              <h3 className="text-white font-semibold tracking-wide uppercase text-[15px]">B.Tech in Computer Science</h3>
              <p className="text-mid-text text-sm mt-1">Vellore Institute of Technology • May 2026</p>
            </div>

            {/* Career Interests Tags */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-mid-text mb-4 font-mono">Core Focus Areas</p>
              <div className="flex flex-wrap gap-3">
                {['ML Model Validation', 'AI Governance', 'LLM Evaluation', 'Natural Language Processing', 'Python'].map((tag) => (
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