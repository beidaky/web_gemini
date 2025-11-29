import { initParticles } from './particles.js';
import { initTyping } from './typing.js';
import { initTilt } from './tilt.js';
import { initScrollAnimation } from './scroll.js';
import { initCursorSpotlight } from './cursor.js';

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', () => {
  console.log('Nexus System Initializing...');
  
  // 1. 启动粒子背景
  initParticles('particles-canvas');
  
  // 2. 启动打字机效果
  initTyping('typing-text', [
    "无限未来", 
    "赛博美学", 
    "极致交互", 
    "智能边界"
  ]);
  
  // 3. 启动 3D 倾斜效果
  initTilt('.tilt-card');
  
  // 4. 启动滚动渐入动画
  initScrollAnimation('.fade-in-section');
  
  // 5. 启动光标聚光灯
  initCursorSpotlight('cursor-spotlight');
});
