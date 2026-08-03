import React, { useEffect, useState } from 'react';

interface BinaryNameHeadingProps {
  className?: string;
}

export const BinaryNameHeading: React.FC<BinaryNameHeadingProps> = ({ className }) => {
  const fullText = "Hi, I'm Sebin S";
  const nameStartIndex = 8; // Index where "Sebin S" starts in "Hi, I'm Sebin S"

  const [displayChars, setDisplayChars] = useState<string[]>(() =>
    fullText.split('').map((char) => (char === ' ' ? ' ' : Math.random() > 0.5 ? '1' : '0'))
  );
  const [revealedIndices, setRevealedIndices] = useState<boolean[]>(() =>
    new Array(fullText.length).fill(false)
  );

  useEffect(() => {
    let step = 0;
    // Initial delay before binary decode starts (allows site loader to complete fade-out)
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        step++;

        setDisplayChars((prevChars) => {
          return prevChars.map((_, index) => {
            if (revealedIndices[index] || fullText[index] === ' ') {
              return fullText[index];
            }
            // Rapidly randomize between binary 0 and 1 for unrevealed positions
            return Math.random() > 0.5 ? '1' : '0';
          });
        });

        setRevealedIndices((prevRevealed) => {
          const next = [...prevRevealed];
          let updated = false;

          for (let i = 0; i < fullText.length; i++) {
            if (!next[i]) {
              // Lock characters sequentially based on step counts
              const lockStep = 6 + i * 3;
              if (step >= lockStep) {
                next[i] = true;
                updated = true;
              }
            }
          }

          if (next.every((val) => val)) {
            clearInterval(interval);
          }

          return updated ? next : prevRevealed;
        });

      }, 40);

      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <h1 className={className || "text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4"}>
      {/* Prefix Part: "Hi, I'm " */}
      <span className="inline-block">
        {fullText.slice(0, nameStartIndex).split('').map((char, i) => {
          const isRevealed = revealedIndices[i];
          const displayChar = isRevealed ? char : displayChars[i];

          return (
            <span
              key={i}
              className={`transition-all duration-150 ${
                !isRevealed
                  ? 'font-mono text-[#22D3EE] drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] opacity-90 inline-block scale-95'
                  : 'text-white'
              }`}
            >
              {displayChar === ' ' ? '\u00A0' : displayChar}
            </span>
          );
        })}
      </span>

      {/* Name Part: "Sebin S" with vibrant gradient styling */}
      <span className="inline-block">
        {fullText.slice(nameStartIndex).split('').map((char, index) => {
          const actualIndex = nameStartIndex + index;
          const isRevealed = revealedIndices[actualIndex];
          const displayChar = isRevealed ? char : displayChars[actualIndex];

          return (
            <span
              key={actualIndex}
              className={`transition-all duration-150 ${
                !isRevealed
                  ? 'font-mono text-[#60A5FA] drop-shadow-[0_0_10px_rgba(96,165,250,0.9)] opacity-90 inline-block scale-105'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#8B5CF6] to-[#22D3EE]'
              }`}
            >
              {displayChar === ' ' ? '\u00A0' : displayChar}
            </span>
          );
        })}
      </span>
    </h1>
  );
};
