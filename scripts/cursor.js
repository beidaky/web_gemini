export function initCursorSpotlight(elementId) {
  const spotlight = document.getElementById(elementId);
  if (!spotlight) return;

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // 使用径向渐变模拟聚光灯
    spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 243, 255, 0.1), transparent 80%)`;
  });
}
