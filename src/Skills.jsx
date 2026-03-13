import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C / C++", "Python", "TypeScript", "JavaScript", "SQL", "Assembly"]
    },
    {
      title: "Tools",
      skills: ["React", "Node.js", "AWS", "Git", "LaTeX", "Docker"]
    },
    {
      title: "Data Tools",
      skills: ["PyTorch", "Pandas", "Scikit-Learn", "Transformers", "NumPy"]
    },
    {
      title: "Databases",
      skills: ["Supabase", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Management",
      skills: ["Cross-functional Leadership", "Strategic Planning", "Agile Workflows", "Financing", "Product Management"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-32 relative z-10 pointer-events-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
          The Arsenal.
        </h2>

        {/* Updated to a 5-Column Grid on large screens to fit the new category */}
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
                    className="bg-transparent border border-rain-grey text-light-text px-4 py-2 text-[13px] hover:border-blood-red hover:text-white transition-colors duration-200"
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