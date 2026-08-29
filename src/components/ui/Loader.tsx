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
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    const textSequence = [
      { threshold: 25, text: 'Connecting Neural Networks...' },
      { threshold: 60, text: 'Loading AI & GenAI Showcase...' },
      { threshold: 90, text: 'Finalizing Interface...' },
      { threshold: 100, text: 'Welcome to Sebin S Portfolio' }
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(timer);
          
          // Trigger finish sequence
          setTimeout(() => {
            setFadeOut(true);
            window.dispatchEvent(new Event('site-loaded'));
            setTimeout(() => {
              setHidden(true);
              document.body.style.overflow = '';
              if (onFinish) onFinish();
            }, 600);
          }, 300);
          return 100;
        }

        const match = textSequence.find((t) => next >= t.threshold);
        if (match) setLoadingText(match.text);

        return next;
      });
    }, 45);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-[#030712] transition-all duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background Glowing Mesh */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-red-600/30 via-rose-700/25 to-red-800/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Main Loader Content Box */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        
        {/* Animated Brand Logo Icon with Pulsing Glowing Ring */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600 via-red-500 to-rose-700 opacity-75 blur-xl animate-pulse" />
          <div className="relative w-20 h-20 rounded-2xl bg-[#0F172A] border border-white/20 p-1 flex items-center justify-center shadow-2xl">
            <div className="w-full h-full rounded-xl bg-[#030712] flex items-center justify-center">
              <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-700">
                SS
              </span>
            </div>
          </div>
          
          {/* Floating AI Badges */}
          <div className="absolute -top-2 -right-2 p-1.5 rounded-full bg-red-600 text-white shadow-lg animate-bounce">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="absolute -bottom-2 -left-2 p-1.5 rounded-full bg-red-700 text-white shadow-lg">
            <Cpu className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-extrabold text-red-500 tracking-tight mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          SEBIN S
        </h1>
        <p className="text-xs font-mono text-red-400 tracking-widest uppercase mb-6 flex items-center justify-center gap-1.5">
          <Bot className="w-3.5 h-3.5 text-red-500" />
          AI & DS Engineer Portfolio
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mb-4 p-0.5 border border-white/10 relative">
          <div
            className="h-full bg-gradient-to-r from-red-600 via-red-500 to-rose-700 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text & Percentage */}
        <div className="flex items-center justify-between w-64 text-xs font-mono text-slate-400">
          <span className="truncate max-w-[180px] text-slate-300">{loadingText}</span>
          <span className="font-bold text-red-400">{progress}%</span>
        </div>

      </div>
    </div>
  );
};
