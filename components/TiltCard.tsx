import React, { useRef, useState } from 'react';
import { TiltCardProps } from '../types';

const TiltCard: React.FC<TiltCardProps> = ({ title, description, icon, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.05 : 1})`,
        transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className={`
        relative group p-8 rounded-2xl bg-dark-card border border-white/10 backdrop-blur-md
        hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]
        transition-all duration-300 overflow-hidden cursor-default
        opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]
      `}
    >
        {/* Internal Glow Gradient */}
        <div 
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
        />
        
        <div className="relative z-10 flex flex-col items-start gap-4">
            <div className="p-3 rounded-lg bg-white/5 text-neon-blue group-hover:text-white group-hover:bg-neon-blue transition-colors duration-300">
                {icon}
            </div>
            <h3 className="font-display text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">
                {title}
            </h3>
            <p className="font-sans text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    </div>
  );
};

export default TiltCard;