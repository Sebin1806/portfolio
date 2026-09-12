import React, { useEffect, useState } from 'react';
import { Bot, Sparkles, Cpu } from 'lucide-react';

interface LoaderProps {
  onFinish?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing AI Core...');
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      window.dispatchEvent(new Event('site-loaded'));
      setHidden(true);
      if (onFinish) onFinish();
      return;
    }

    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    const textSequence = [
      { threshold: 25, text: 'Loading Neural Models...' },
      { threshold: 65, text: 'Preparing Showcase...' },
      { threshold: 90, text: 'Finalizing Interface...' },
      { threshold: 100, text: 'Welcome to Sebin S Portfolio' }
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 14) + 12;
        if (next >= 100) {
          clearInterval(timer);
          
          // Fast exit sequence (~150ms hold + 300ms fade)
          setTimeout(() => {
            setFadeOut(true);
            window.dispatchEvent(new Event('site-loaded'));
            setTimeout(() => {
              setHidden(true);
              document.body.style.overflow = '';
              if (onFinish) onFinish();
            }, 300);
          }, 150);
          return 100;
        }

        const match = textSequence.find((t) => next >= t.threshold);
        if (match) setLoadingText(match.text);

        return next;
      });
    }, 25);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-[#0B0F19] transition-all duration-300 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none scale-102' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle Background Glow */}
      <div className="absolute w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Loader Content Box */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        
        {/* Animated Brand Mark */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="absolute -inset-3 rounded-2xl bg-rose-500/20 blur-lg animate-pulse" />
          <div className="relative w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 p-1 flex items-center justify-center shadow-xl">
            <div className="w-full h-full rounded-lg bg-[#0B0F19] flex items-center justify-center">
              <span className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600">
                SS
              </span>
            </div>
          </div>
          
          {/* Floating AI Badges */}
          <div className="absolute -top-1.5 -right-1.5 p-1 rounded-full bg-rose-500 text-white shadow-md">
            <Sparkles className="w-3 h-3" />
          </div>
          <div className="absolute -bottom-1.5 -left-1.5 p-1 rounded-full bg-slate-800 text-rose-400 border border-slate-700 shadow-md">
            <Cpu className="w-3 h-3" />
          </div>
        </div>

        {/* Title & Tagline */}
        <h1 className="text-lg font-bold text-white tracking-tight mb-0.5">
          SEBIN S
        </h1>
        <p className="text-[11px] font-mono text-rose-400 tracking-wider uppercase mb-5 flex items-center justify-center gap-1.5">
          <Bot className="w-3 h-3 text-rose-500" />
          AI & Data Science Engineer
        </p>

        {/* Progress Bar Container */}
        <div className="w-56 h-1.5 bg-slate-800/80 rounded-full overflow-hidden mb-3 border border-slate-700/50 relative">
          <div
            className="h-full bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text & Percentage */}
        <div className="flex items-center justify-between w-56 text-[11px] font-mono text-slate-400">
          <span className="truncate max-w-[170px] text-slate-300">{loadingText}</span>
          <span className="font-semibold text-rose-400">{progress}%</span>
        </div>

      </div>
    </div>
  );
};

