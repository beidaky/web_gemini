export function initScrollAnimation(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 进入视口
        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-x-[-50px]', 'translate-x-[50px]');
        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        // 不需要重复触发，停止观察
        // observer.unobserve(entry.target); 
      } else {
        // 可选：如果希望滑出去再滑回来还有动画，就保留 else 块
        // 现在的设计通常希望只触发一次，或者每次都触发
        // 为了视觉效果，我们让它每次滑入都触发，但滑出时重置状态
        
        // 简单处理：我们只触发一次，保持干净
      }
    });
  }, {
    threshold: 0.2 // 露出 20% 时触发
  });

  elements.forEach(el => observer.observe(el));
}
