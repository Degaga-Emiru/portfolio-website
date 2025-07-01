import { useState, useEffect, useCallback } from 'react';

const Typewriter = ({ 
  words, 
  typingSpeed = 150, 
  deletingSpeed = 50, 
  delayBetweenWords = 2000 
}) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const handleTyping = useCallback(() => {
    const currentWord = words[currentIndex];
    
    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setLoopNum(loopNum + 1);
    }
  }, [currentIndex, delayBetweenWords, isDeleting, loopNum, text, words]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className="inline-block">
      {text}
      <span className="ml-1 inline-block w-1 h-8 bg-primary-light dark:bg-primary-dark animate-pulse" />
    </span>
  );
};

export default Typewriter;