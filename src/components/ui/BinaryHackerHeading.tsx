import React, { useEffect, useState } from 'react';

interface BinaryHackerHeadingProps {
  className?: string;
}

export const BinaryHackerHeading: React.FC<BinaryHackerHeadingProps> = ({ className }) => {
  const fullText = "𝑺𝑬𝑩𝑰𝑵 𝑺";
  const textChars = Array.from(fullText);

  // Pure binary numbers for 100% stable width hacker decryption
  const cipherChars = "010110100101011001010101";

  const [displayChars, setDisplayChars] = useState<string[]>(() =>
    textChars.map((char) => (char === ' ' ? ' ' : cipherChars[Math.floor(Math.random() * cipherChars.length)]))
  );

  const [revealedCount, setRevealedCount] = useState<number>(0);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const triggerAnimation = () => {
    setIsStarted(false);
    setRevealedCount(0);
    setDisplayChars(
      textChars.map((char) => (char === ' ' ? ' ' : cipherChars[Math.floor(Math.random() * cipherChars.length)]))
    );
    setTimeout(() => {
      setIsStarted(true);
    }, 50);
  };

  useEffect(() => {
    const handleLoaded = () => {
      triggerAnimation();
    };

    window.addEventListener('site-loaded', handleLoaded);

    // Fallback trigger if loader already finished
    const fallbackTimer = setTimeout(() => {
      setIsStarted(true);
    }, 400);

    return () => {
      window.removeEventListener('site-loaded', handleLoaded);
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (!isStarted) return;

    let step = 0;
    const totalSteps = 20; // 20 steps * 25ms = 500ms snappy, consistent decryption duration
    const charsToDecode = textChars.length;

    const interval = setInterval(() => {
      step++;

      // How many characters should be permanently locked based on progress
      const targetRevealed = Math.min(charsToDecode, Math.floor((step / totalSteps) * charsToDecode));

      if (targetRevealed > revealedCount) {
        setRevealedCount(targetRevealed);
      }

      setDisplayChars(() => {
        return textChars.map((targetChar, index) => {
          if (index < targetRevealed || targetChar === ' ') {
            return targetChar;
          }
          // Cycle through binary numbers & integers for unrevealed positions
          return cipherChars[Math.floor(Math.random() * cipherChars.length)];
        });
      });

      if (step >= totalSteps) {
        setRevealedCount(textChars.length);
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isStarted, revealedCount, textChars.length]);

  return (
    <div
      className="relative flex justify-center w-full my-2"
    >
      <h1 className={className || "text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-normal mb-4 text-center leading-none"}>
        <span className="inline-flex items-center justify-center">
          {textChars.map((char, index) => {
            const isRevealed = index < revealedCount;
            const displayChar = isRevealed ? char : displayChars[index];
            const isSpace = char === ' ';
            const isWideChar = char === '𝑩' || char === '𝑵';

            return (
              <span
                key={index}
                className={`inline-block text-center whitespace-pre overflow-visible shrink-0 transition-colors duration-150 ${
                  isSpace ? 'w-[0.85em]' : isWideChar ? 'w-[0.76em]' : 'w-[0.68em]'
                } ${
                  !isRevealed
                    ? 'text-[#FF2E37] drop-shadow-[0_0_20px_rgba(255,46,55,0.95)] opacity-90 select-none'
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E37] via-[#FF525B] to-[#DC2626] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] filter drop-shadow-[0_0_12px_rgba(255,46,55,0.8)]'
                }`}
              >
                {displayChar === ' ' ? '\u00A0' : displayChar}
              </span>
            );
          })}
        </span>
      </h1>
    </div>
  );
};
