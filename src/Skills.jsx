import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "R", "C++", "JavaScript", "TypeScript"]
    },
    {
      title: "Machine Learning",
      skills: ["scikit-learn", "XGBoost", "Gradient Boosting", "NLP", "LLMs", "RAG", "LangChain", "OpenCV"]
    },
    {
      title: "Data",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "yfinance", "Tableau", "Excel", "MySQL", "MongoDB"]
    },
    {
      title: "Engineering",
      skills: ["Git", "Linux", "Jupyter", "Streamlit", "pytest", "API Integration"]
    },
    {
      title: "Ways of Working",
      skills: ["Agile (Scrum)", "Project Management", "Digital Strategy"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative z-10 pointer-events-auto scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-blood-red mb-4">05 · Arsenal</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
          The Arsenal.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              {/* Category Header in Red, Uppercase, Tracking-Widest */}
              <h3 className="text-blood-red font-mono text-xs uppercase tracking-widest mb-6">
                {category.title}
              </h3>
              
              {/* Flex container for the pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-transparent border border-rain-grey text-light-text px-4 py-2 text-[13px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;