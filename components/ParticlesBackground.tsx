import React, { useRef, useEffect, useState } from 'react';
import { Particle } from '../types';

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Basic performance check - if logical processors are low, reduce particle count
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
      setIsLowPower(true);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Config based on performance mode
    const PARTICLE_COUNT = isLowPower ? 30 : 80;
    const CONNECTION_DISTANCE = 150;
    const MOUSE_REPEL_RADIUS = 200;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.1,
          targetAlpha: Math.random() * 0.5 + 0.1,
        });
      }
    };

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse Repel effect
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MOUSE_REPEL_RADIUS) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (MOUSE_REPEL_RADIUS - distance) / MOUSE_REPEL_RADIUS;
          const directionX = forceDirectionX * force * 2; // Repel strength
          const directionY = forceDirectionY * force * 2;

          p.x -= directionX;
          p.y -= directionY;
        }

        // Twinkle effect
        if (Math.random() < 0.02) {
            p.targetAlpha = Math.random() * 0.5 + 0.1;
        }
        p.alpha += (p.targetAlpha - p.alpha) * 0.05;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${p.alpha})`;
        ctx.fill();

        // Draw connections
        if (!isLowPower) {
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx2 = p.x - p2.x;
                const dy2 = p.y - p2.y;
                const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                if (dist2 < CONNECTION_DISTANCE) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - dist2 / CONNECTION_DISTANCE)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    initParticles();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLowPower]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-60"
    />
  );
};

export default ParticlesBackground;