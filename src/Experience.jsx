import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experienceData = [
    {
      company: "Tweaking Technologies",
      role: "Software Engineering Intern",
      date: "PRESENT",
      responsibilities: [
        "Developing and optimizing backend services for internal toolchains.",
        "Collaborating with the systems architecture team to refactor legacy codebases.",
        "Implementing continuous integration pipelines to reduce deployment friction."
      ]
    }
    // You can easily copy/paste this block to add more history later
  ];

  const leadershipData = [
    
    
    {
      role: "Finance Lead",
      organization: "CSI",
      description: "Managed budget allocation, secured sponsorships for flagship technical symposiums, and oversaw financial auditing for a 200+ member chapter."
    },
    {
      role: "Project Lead",
      organization: "ISTE",
      description: "Directed a cross-functional team of student developers to build and deploy open-source campus utilities, enforcing strict version control workflows."
    },
    {
      role: "General Secretary",
      organization: "The Palace School Jaipur",
      description: "Directed student council operations, acting as the primary liaison between the student body and administration to execute strategic initiatives."
    },
    
  
  ];

  return (
    <section id="experience" className="min-h-screen py-32 relative z-10 pointer-events-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Side: Experience Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            The Record.
          </h2>

          {/* The Timeline Line */}
          <div className="border-l border-rain-grey ml-2 space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-8">
                {/* The Blood Red Node */}
                <div className="absolute w-3 h-3 bg-blood-red rounded-none -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(217,0,0,0.6)]"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <span className="text-mid-text font-normal">— {exp.role}</span>
                </div>
                
                <div className="text-mid-text font-mono text-[11px] tracking-widest uppercase mb-4">
                  [{exp.date}]
                </div>
                
                <ul className="space-y-3">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-light-text text-[15px] leading-relaxed relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-[1px] before:bg-rain-grey">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Leadership Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
            Leadership
          </h2>

          <div className="space-y-6">
            {leadershipData.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 4 }} // Slight horizontal shift instead of vertical lift
                className="group bg-[#0A0A0A] border border-rain-grey border-l-4 border-l-rain-grey hover:border-rain-grey hover:border-l-bat-yellow transition-all duration-200 p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-bat-yellow rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <h3 className="text-white font-semibold text-lg tracking-tight">
                    {item.organization} <span className="text-mid-text font-normal">— {item.role}</span>
                  </h3>
                </div>
                <p className="text-mid-text text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;