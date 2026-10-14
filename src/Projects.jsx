import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectData = [
    {
      title: "Quant_Signal_Screener",
      desc: "Scores each ticker in a watchlist buy, sell or hold from four indicator checks: trend, RSI, MACD and Bollinger Bands. A LangChain agent, running an open-weight model through OpenRouter, answers plain-English questions about a ticker. Educational project, not investment advice.",
      tech: ["Python", "LangChain", "yfinance", "Streamlit", "OpenRouter"],
      repo: "https://github.com/Abhyuday14/quant-signal-screener-agent",
      link: "https://quant-signal-screener-agent-exickxz7brjnxjhjzhqhyp.streamlit.app/",
      linkLabel: "Open app"
    },
    {
      title: "F1_Race_Predictor",
      desc: "Predicts Formula 1 finishing times from qualifying times and historical sector performance using gradient boosting. A Streamlit interface takes the race details as input.",
      tech: ["Python", "FastF1", "scikit-learn", "Streamlit"],
      repo: "https://github.com/Abhyuday14/f1-race-predictor"
    },
    {
      title: "JournalistShalu",
      desc: "A blogging platform and portfolio built with TypeScript and React. A Supabase-backed admin area handles writing and editing posts.",
      tech: ["TypeScript", "React", "Supabase"],
      link: "https://journalist-shalu.vercel.app/",
      linkLabel: "Visit site"
    },
    {
      title: "Portfolio_Vengeance",
      desc: "The Batman-inspired portfolio you are currently viewing, with a hand-rolled rain engine. There's a hidden protocol somewhere. Try typing a certain name.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      repo: "https://github.com/Abhyuday14/PortfolioVengeance"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10 pointer-events-auto scroll-mt-16">
      <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-blood-red mb-4">04 · Projects</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
        The Workshop.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-[#050505] border border-rain-grey/40 p-8 hover:border-blood-red/50 transition-colors duration-500"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-blood-red transition-colors font-mono">
                {project.title}
              </h3>
              <div className="w-12 h-px bg-blood-red mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>

            <p className="text-light-text/80 text-[15px] mb-6 leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="text-[10px] font-mono tracking-widest uppercase px-2 py-1 bg-[#111] border border-white/10 text-mid-text">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-auto pt-8">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gotham"
                >
                  {project.linkLabel}
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-mono uppercase tracking-[0.25em] text-mid-text hover:text-white transition-colors py-2"
                >
                  Source code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;