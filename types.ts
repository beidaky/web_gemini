import React from 'react';

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  targetAlpha: number;
}

export interface TiltCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}