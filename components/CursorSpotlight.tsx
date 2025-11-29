import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const CursorSpotlight: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default CursorSpotlight;