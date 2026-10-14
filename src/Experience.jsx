import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experienceData = [
    {
      company: "TrustBridge Compliance",
      role: "Research Analyst",
      date: "Aug 2026 – Present · Remote",
      responsibilities: [
        "Researching validation frameworks and governance standards for ML models in regulated environments, covering GAMP 5, CSA and CSV.",
        "Prototyping an AI monitoring dashboard that tracks model drift, audit trails and data integrity."
      ]
    },
    {
      company: "SAG Infotech",
      role: "AI Developer Intern",
      date: "May 2026 – Aug 2026 · Jaipur",
      responsibilities: [
        "Built a real-time face detection and recognition system with OpenCV and the face_recognition library.",
        "Integrated it into the existing codebase, so identity checks no longer needed a manual lookup."
      ]
    }
  ];

  const leadershipData = [
    {
      role: "Finance Lead",
      organization: "CSI, VIT",
      date: "May 2024 – Feb 2025",
      description: "Budgeting, fund allocation and financial reporting for 5+ technical events with 1,200+ participants. Built Excel expense-tracking models for the club treasury."
    },
    {
      role: "Project Lead",
      organization: "ISTE, VIT",
      date: "Aug 2023 – Apr 2024",
      description: "Led a developer team in Agile-style sprints, delegating tasks, mentoring junior members and reporting progress to stakeholders."
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative z-10 pointer-events-auto scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Side: Experience Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-blood-red mb-4">03 · Record</p>
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
          <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">
            Leadership
          </h3>

          <div className="space-y-6">
            {leadershipData.map((item, index) => (
              <motion.div 
                key={index}
                className="group bg-[#0A0A0A] border border-rain-grey border-l-4 border-l-rain-grey p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-bat-yellow rounded-full "></div>
                  <h4 className="text-white font-semibold text-lg tracking-tight">
                    {item.organization} <span className="text-mid-text font-normal">— {item.role}</span>
                  </h4>
                </div>
                <p className="text-mid-text font-mono text-[11px] tracking-widest uppercase mb-3">{item.date}</p>
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