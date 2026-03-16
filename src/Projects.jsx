import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectData = [
    {
      title: "JournalistShalu",
      desc: "A full-stack blogging platform and portfolio built with TypeScript and React. Features a secure administrative backend using Supabase for seamless CRUD operations.",
      tech: ["TypeScript", "React", "Supabase"],
      repo: "https://github.com/Abhyuday14/JournalistShalu",
      link: "https://journalist-shalu.vercel.app/" // Replace with live link if different
    },
    {
      title: "Portfolio_Vengeance",
      desc: "The cinematic, Batman-inspired portfolio system you are currently viewing. Built with custom rain engines and a 'Vengeance Protocol' Easter egg.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      repo: "https://github.com/Abhyuday14/PortfolioVengeance",
      link: "#"
    },
    {
      title: "NLP_Inference_Engine",
      desc: "A high-performance inference system designed for text-based analysis, focusing on AI hallucination detection and mitigation in Large Language Models.",
      tech: ["Python", "PyTorch", "HuggingFace"],
      repo: "https://github.com/Abhyuday14/Reducing-Hallucination",
      link: "https://github.com/Abhyuday14/Reducing-Hallucination/blob/main/README.md"
    },
    {
      title: "F1 race Predictor",
      desc: "This project predicts the finishing times of Formula 1 drivers based on qualifying times and historical race sector performance using machine learning.",
      tech: ["Streamlit", "FastF1API", "Machine Learning"],
      repo: "https://github.com/Abhyuday14/f1-race-predictor",
      link: "https://github.com/Abhyuday14/f1-race-predictor/blob/main/README.md"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 pointer-events-auto bg-black">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2 h-2 bg-blood-red"></div>
        <h2 className="text-3xl font-bold text-white tracking-tighter uppercase font-mono">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#050505] border border-rain-grey/20 p-8 hover:border-blood-red/50 transition-all duration-500"
          >
            {/* GitHub Icon Link */}
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-6 right-6 text-rain-grey hover:text-white transition-colors z-20"
              title="View Repository"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-blood-red transition-colors font-mono">
                {project.title}
              </h3>
              <div className="w-12 h-px bg-blood-red mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>

            <p className="text-mid-text text-sm mb-6 font-mono leading-relaxed opacity-80">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag, i) => (
                <span key={i} className="text-[9px] font-mono tracking-widest uppercase px-2 py-1 bg-[#111] border border-white/5 text-rain-grey">
                  {tag}
                </span>
              ))}
            </div>
            
            <a 
              href={project.link} 
              className="inline-block mt-8 text-[11px] font-mono uppercase tracking-[0.3em] text-blood-red hover:text-white transition-colors"
            >
              Execute →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;