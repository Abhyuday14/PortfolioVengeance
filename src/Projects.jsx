import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Static mock data. Later, we can hook this up to the GitHub API.
  const projectsData = [
    {
      title: "Journalist Shalu",
      description: "A high-performance content management system and portfolio interface. Architected with strict static typing and a real-time relational database for seamless state management.",
      tags: ["TypeScript", "React", "Supabase"],
      stars: 31, // You can update this to the actual star count later
      updated: "Recently", 
      githubUrl: "https://github.com/Abhyuday14/JournalistShalu"
    },
    {
      title: "F1 Race Predictor",
      description: "Machine learning model predicting race outcomes using historical telemetry and weather data.",
      tags: ["Python", "Scikit-Learn", "Pandas"],
      stars: 24,
      updated: "2 days ago"
    },
    {
      title: "MediQR",
      description: "Secure, decentralized medical record access system using encrypted QR codes.",
      tags: ["React", "Node.js", "Cryptography"],
      stars: 18,
      updated: "1 week ago"
    },
    {
      title: "Realm Quest",
      description: "A text-based RPG engine built with custom memory management and a cloud-hosted backend.",
      tags: ["C", "Systems", "AWS"],
      stars: 42,
      updated: "3 weeks ago"
    },
    {
      title: "NLP Inference Engine",
      description: "Optimized natural language processing pipeline for classifying complex textual datasets.",
      tags: ["Python", "PyTorch", "Transformers"],
      stars: 15,
      updated: "1 month ago"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-32 relative z-10 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          Featured Work.
        </h2>

        {/* 3-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.a
              href="#"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -4 }} // 4px lift on hover
              className="group block bg-[#0A0A0A] border border-rain-grey border-l-4 border-l-rain-grey hover:border-rain-grey hover:border-l-blood-red transition-all duration-200 p-6 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h3 className="text-white font-semibold text-xl tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-mid-text text-[15px] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-blood-red font-mono text-[11px] tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mock GitHub Metadata */}
                <div className="flex items-center gap-4 text-mid-text font-mono text-[10px] uppercase tracking-widest border-t border-rain-grey pt-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    {project.stars}
                  </span>
                  <span>Updated {project.updated}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;