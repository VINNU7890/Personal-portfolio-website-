import { useState, useCallback, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789_#@%&*<>/';

export function useScramble(originalText, triggerOnMount = false) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef(null);

  const scramble = useCallback(() => {
    // Respect reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(originalText);
      return;
    }

    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return originalText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 2;
    }, 28);
  }, [originalText]);

  useEffect(() => {
    if (triggerOnMount) {
      scramble();
    }
    return () => clearInterval(intervalRef.current);
  }, [scramble, triggerOnMount]);

  return { displayText, scramble };
}
