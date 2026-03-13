import React, { useEffect, useRef } from 'react';

const Rain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas to full window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initialize rain droplets
    const drops = [];
    const maxDrops = 150; // Just enough texture, not overwhelming

    for (let i = 0; i < maxDrops; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 15 + 10, // Fast, heavy drops
        opacity: Math.random() * 0.15 + 0.05 // Extremely low opacity
      });
    }

    const draw = () => {
      // Clear the previous frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';

      for (let i = 0; i < maxDrops; i++) {
        const drop = drops[i];
        
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        // Draw line with a slight leftward angle for wind
        ctx.lineTo(drop.x - drop.speed * 0.15, drop.y + drop.length); 
        
        // Using the light-text hex from your CSS for the rain color
        ctx.strokeStyle = `rgba(205, 217, 245, ${drop.opacity})`; 
        ctx.lineWidth = 1;
        ctx.stroke();

        // Update drop position for the next frame
        drop.y += drop.speed;
        drop.x -= drop.speed * 0.15;

        // Reset drop to the top if it falls off screen
        if (drop.y > canvas.height || drop.x < 0) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width + 50; 
          drop.speed = Math.random() * 15 + 10;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};

export default Rain;