export function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  
  // 性能优化：根据设备核数调整粒子数量
  const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  const PARTICLE_COUNT = isLowPower ? 30 : 60;
  const CONNECTION_DISTANCE = 150;
  const MOUSE_REPEL_RADIUS = 200;

  let width = window.innerWidth;
  let height = window.innerHeight;
  let mouse = { x: -1000, y: -1000 };

  // 初始化画布尺寸
  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  };
  window.addEventListener('resize', resize);
  resize();

  // 监听鼠标
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // 粒子类
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
      this.baseAlpha = Math.random() * 0.5 + 0.1;
      this.alpha = this.baseAlpha;
      this.targetAlpha = this.baseAlpha;
    }

    update() {
      // 移动
      this.x += this.vx;
      this.y += this.vy;

      // 边界反弹
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // 鼠标排斥逻辑
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MOUSE_REPEL_RADIUS) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (MOUSE_REPEL_RADIUS - distance) / MOUSE_REPEL_RADIUS;
        
        // 施加排斥力
        this.x -= forceDirectionX * force * 2;
        this.y -= forceDirectionY * force * 2;
      }

      // 闪烁效果
      if (Math.random() < 0.02) {
        this.targetAlpha = Math.random() * 0.5 + 0.1;
      }
      this.alpha += (this.targetAlpha - this.alpha) * 0.05;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100, 200, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  // 初始化粒子
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  // 动画循环
  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, index) => {
      p.update();
      p.draw();

      // 连线逻辑 (低性能模式下关闭)
      if (!isLowPower) {
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - dist / CONNECTION_DISTANCE)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    });

    requestAnimationFrame(animate);
  };

  animate();
}
