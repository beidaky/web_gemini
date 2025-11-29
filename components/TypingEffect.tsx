import React, { useState, useEffect } from 'react';

const words = ["Innovation", "Future", "Cyberpunk", "Boundless", "Aesthetics"];
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseTime = 2000;

const TypingEffect: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseTime);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typingSpeed);
    } else if (!isDeleting && updatedText !== fullText) {
      setDelta(typingSpeed - Math.random() * 50); // Slight variation for realism
    }
  };

  return (
    <div className="font-display text-2xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 min-h-[60px]">
      <span className="text-white opacity-80 mr-2">Experience</span>
      <span>{text}</span>
      <span className="animate-cursor-blink border-r-4 border-cyan-400 ml-1 h-full inline-block align-middle">&nbsp;</span>
    </div>
  );
};

export default TypingEffect;