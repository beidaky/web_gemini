export function initTyping(elementId, words) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000; // 打完一个词暂停多久

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';

  function type() {
    const fullWord = words[wordIndex % words.length];

    if (isDeleting) {
      // 删除字符
      currentText = fullWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // 输入字符
      currentText = fullWord.substring(0, charIndex + 1);
      charIndex++;
    }

    element.textContent = currentText;

    let nextSpeed = typingSpeed;

    if (isDeleting) {
      nextSpeed = deletingSpeed;
    }

    // 逻辑判断
    if (!isDeleting && currentText === fullWord) {
      // 打完了，暂停
      isDeleting = true;
      nextSpeed = pauseTime;
    } else if (isDeleting && currentText === '') {
      // 删完了，切换下一个词
      isDeleting = false;
      wordIndex++;
      nextSpeed = 500; // 开始打新词前的一点停顿
    } else {
       // 打字时的随机变速，增加真实感
       nextSpeed = isDeleting ? deletingSpeed : typingSpeed - Math.random() * 50;
    }

    setTimeout(type, nextSpeed);
  }

  // 启动
  type();
}
