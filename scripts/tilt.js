export function initTilt(selector) {
  const cards = document.querySelectorAll(selector);

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // 计算中心点
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 增加倾斜幅度，除数越小幅度越大
      const rotateX = ((y - centerY) / centerY) * -10; 
      const rotateY = ((x - centerX) / centerX) * 10;

      // 应用变换
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      // 复原
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });

    // 初始化 CSS 过渡，使进入平滑，离开也平滑，但移动时要跟手（transition 要短）
    // 在 CSS 中通常设置 hover 状态 transition 短，非 hover 状态长
    // 这里用 JS 动态控制有点复杂，简单做法是在 CSS 里设置好
    // 我们在 main.css 里或者 HTML class 里已经有 transition-all duration-300
    // 为了更跟手，我们在 mousemove 时临时移除 duration
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease-out';
    });
  });
}
