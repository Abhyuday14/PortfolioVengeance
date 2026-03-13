import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEggs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [debugKeys, setDebugKeys] = useState("");
  
  const stealthBuffer = useRef("");
  const resetTimer = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!/^[a-zA-Z0-9]$/.test(e.key)) return; 

      // Clear the 15s reset timer every time a key is pressed
      if (resetTimer.current) clearTimeout(resetTimer.current);

      stealthBuffer.current += e.key.toLowerCase();
      
      // character limit 8
      if (stealthBuffer.current.length > 8) {
        stealthBuffer.current = stealthBuffer.current.slice(-8);
      }
      
      setDebugKeys(stealthBuffer.current);

      if (stealthBuffer.current.includes('batman')) {
        if (isPlaying) return; 

        setIsPlaying(true);
        stealthBuffer.current = ""; 
        setDebugKeys(""); 
        
        setTimeout(() => setIsPlaying(false), 10000); 
      } else {
        // Reset to original after 15 seconds of inactivity
        resetTimer.current = setTimeout(() => {
          stealthBuffer.current = "";
          setDebugKeys("");
        }, 15000);
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, [isPlaying]);

  return (
    <>
      {/* THE FLICKERING TRACKING BOX */}
      <div className="fixed top-4 right-4 z-[99999] bg-[#0A0A0A] border border-blood-red text-blood-red font-mono px-4 py-2 pointer-events-none animate-pulse-eerie">
        <span className="opacity-70">TRACKING!!</span>
        <span className="animate-flicker inline-block ml-2 uppercase text-white tracking-widest">
          {debugKeys}
        </span>
      </div>

      {/* CRT Warm-up Flicker */}
      <motion.div
        initial={{ opacity: 0.08 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.08, ease: "step-end" }}
        className="fixed inset-0 bg-white pointer-events-none z-[9999]"
      />

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black pointer-events-none"
          >
            {/* Phase 1: Blood Red Flash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 4, times: [0, 0.4, 1], ease: "easeInOut" }}
              className="absolute inset-0 bg-blood-red z-20"
            />

            {/* Phase 2: Black Text during fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ delay: 2.1, duration: 2.8, times: [0, 0.1, 0.9, 1] }}
              className="absolute z-30 text-[#000000] font-mono text-xl md:text-3xl tracking-[0.5em] font-bold uppercase animate-flicker text-center px-6"
            >
              Vengeance Protocol Initiated
            </motion.div>

            {/* Phase 3: The Takeover GIF */}
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 4.8, duration: 1.5, ease: "easeOut" }}
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGRrZ2hwb2RuM3p1MnVoeWNqZDc5bGRleDV2ZDV3bnI3ZGJsMGtuNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ygizJv7z4cvcBnF47d/giphy.gif" 
              alt="Vengeance"
              className="w-full h-full object-cover z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEggs;