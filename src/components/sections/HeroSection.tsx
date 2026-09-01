import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { BinaryHackerHeading } from '../ui/BinaryHackerHeading';
import { ScrollReveal } from '../ui/ScrollReveal';

export const HeroSection: React.FC = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const titles = PERSONAL_INFO.typingTitles;
    const fullText = titles[typingIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <ScrollReveal animation="fade-down" delay={200} duration={800}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 mb-6 shadow-md transition-all">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-300">
              {PERSONAL_INFO.status}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          </div>
        </ScrollReveal>

        {/* Large Centered Name Heading: Sebin S */}
        <ScrollReveal animation="blur-in" delay={400} duration={1000}>
          <BinaryHackerHeading />
        </ScrollReveal>

        {/* Role Title (Centered) */}
        <ScrollReveal animation="fade-up" delay={600} duration={800}>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100 mb-6 max-w-3xl leading-snug">
            {PERSONAL_INFO.role}
          </h2>
        </ScrollReveal>

        {/* Typewriter Text Box (Centered) */}
        <ScrollReveal animation="zoom-in" delay={800} duration={700}>
          <div className="h-12 flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-6 font-mono text-sm md:text-base text-rose-400 shadow-md w-full max-w-md">
            <Terminal className="w-4 h-4 mr-2.5 text-rose-500 shrink-0" />
            <span>{currentText}</span>
            <span className="animate-pulse ml-0.5 font-bold text-rose-500">|</span>
          </div>
        </ScrollReveal>

        {/* Sub-tagline (Centered) */}
        <ScrollReveal animation="fade-up" delay={1000} duration={800}>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mb-8 leading-relaxed font-normal">
            {PERSONAL_INFO.tagline}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
