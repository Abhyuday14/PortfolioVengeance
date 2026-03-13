import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  // Replace with your actual email
  const email = "abhyuday1124@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="contact" className="pt-16 pb-24 flex flex-col justify-center relative z-10 pointer-events-auto border-t border-rain-grey/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
        >
          {/* Left Side: Terminal-style Email and Socials */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-blood-red"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
                Establish Connection.
              </h2>
            </div>
            
            <div className="mb-12 border-l border-rain-grey pl-6">
              <p className="text-mid-text text-xs uppercase tracking-widest mb-4 font-mono">Direct_Line</p>
              <button 
                onClick={handleCopyEmail}
                className="group text-left cursor-pointer"
              >
                <span className="flex items-center font-mono text-xl md:text-3xl text-light-text group-hover:text-white transition-colors duration-200 break-all">
                  <span className="text-blood-red opacity-0 group-hover:opacity-100 transition-opacity mr-3 select-none">{">"}</span>
                  {email}
                </span>
                <span className="text-mid-text text-xs font-mono mt-3 block h-5 group-hover:text-blood-red transition-colors">
                  {copied ? "[ Address Copied ]" : "[ Click to Copy ]"}
                </span>
              </button>
            </div>

            <div className="border-l border-rain-grey pl-6">
              <p className="text-mid-text text-xs uppercase tracking-widest mb-4 font-mono">Network_Links</p>
              <div className="flex flex-wrap gap-6">
                {/* GitHub */}
                <a href="https://github.com/Abhyuday14" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-light-text hover:text-blood-red transition-colors">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span className="font-mono text-sm underline decoration-rain-grey group-hover:decoration-blood-red underline-offset-4">GitHub</span>
                </a>
                
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-light-text hover:text-blood-red transition-colors">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span className="font-mono text-sm underline decoration-rain-grey group-hover:decoration-blood-red underline-offset-4">LinkedIn</span>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-light-text hover:text-blood-red transition-colors">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span className="font-mono text-sm underline decoration-rain-grey group-hover:decoration-blood-red underline-offset-4">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Brutalist Raw Text Form */}
          <div className="flex flex-col justify-center">
            <p className="text-mid-text text-xs uppercase tracking-widest mb-4 font-mono">Secure_Payload_Form</p>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="flex flex-col gap-4">
              <input 
                type="email" 
                name="email" 
                placeholder="SENDER_ID (EMAIL)" 
                required 
                className="bg-[#0A0A0A] border border-rain-grey text-light-text px-4 py-3 text-sm focus:outline-none focus:border-blood-red focus:border-l-4 focus:border-l-blood-red font-mono placeholder:text-rain-grey transition-all duration-200 rounded-none"
              />
              <textarea 
                name="message" 
                placeholder="PAYLOAD (MESSAGE)" 
                required 
                rows="5"
                className="bg-[#0A0A0A] border border-rain-grey text-light-text px-4 py-3 text-sm focus:outline-none focus:border-blood-red focus:border-l-4 focus:border-l-blood-red font-mono placeholder:text-rain-grey transition-all duration-200 resize-none rounded-none"
              ></textarea>
              <button 
                type="submit" 
                className="self-start bg-transparent border border-rain-grey text-light-text px-8 py-3 text-[13px] font-mono tracking-widest uppercase hover:bg-blood-red hover:border-blood-red hover:text-[#000000] cursor-pointer transition-all duration-200 rounded-none font-bold mt-2"
              >
                Transmit
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Full-width Red Banner Footer */}
      <footer className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-blood-red py-8 z-10 pointer-events-auto flex flex-col items-center justify-center text-center mt-0 border-t-[4px] border-[#0A0A0A]">
        <div className="space-y-1">
          <p className="text-[#000000] text-[13px] uppercase tracking-[0.2em] font-bold">
            Built by Abhyuday Sachdeva
          </p>
          <p className="text-[#000000] text-[11px] uppercase tracking-[0.2em] font-semibold opacity-80">
            Inspired by Gotham
          </p>
          <p className="text-[#000000] font-mono text-[10px] tracking-widest mt-2 opacity-70">
            ©2026
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;