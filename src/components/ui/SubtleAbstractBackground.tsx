import React from 'react';

export const SubtleAbstractBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      
      {/* 1. Vivid Ambient Glowing Orbs */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-red-700/30 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] bg-rose-700/25 rounded-full blur-[110px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 -left-32 w-[600px] h-[600px] bg-red-900/30 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '6s' }} />
      <div className="absolute -bottom-32 right-1/4 w-[650px] h-[650px] bg-crimson-800/25 rounded-full blur-[110px] animate-pulse-glow" style={{ animationDelay: '9s' }} />

      {/* 2. Distinct Abstract Geometric Outlines & Shapes */}
      {/* Rotating Ring Top Right */}
      <div className="absolute top-20 right-8 w-[420px] h-[420px] border-2 border-red-500/40 rounded-full animate-spin-slow opacity-70" />
      <div className="absolute top-28 right-16 w-[350px] h-[350px] border-2 border-[#DC2626]/35 rounded-full animate-spin-slow opacity-60" style={{ animationDirection: 'reverse' }} />

      {/* Concentric Circles Center Left */}
      <div className="absolute top-[42%] -left-28 w-[450px] h-[450px] border-2 border-[#DC2626]/40 rounded-full opacity-65 animate-pulse-glow" />
      <div className="absolute top-[45%] -left-20 w-[380px] h-[380px] border-2 border-red-600/30 rounded-full opacity-55" />
      <div className="absolute top-[48%] -left-12 w-[300px] h-[300px] border border-white/20 rounded-full opacity-45" />

      {/* Slanted Glass Line Accents */}
      <div className="absolute top-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent opacity-60" />
      <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DC2626]/35 to-transparent opacity-50" />

      {/* Floating Tech Decorative Accents (+) and Diamonds (◇) */}
      <div className="absolute top-[15%] left-[10%] text-red-500/60 font-mono text-2xl font-bold animate-float">+</div>
      <div className="absolute top-[30%] right-[15%] text-rose-400/60 font-mono text-3xl font-bold animate-float-delayed">◇</div>
      <div className="absolute top-[55%] left-[6%] text-[#DC2626]/60 font-mono text-2xl font-bold animate-float">◇</div>
      <div className="absolute top-[75%] right-[8%] text-red-600/60 font-mono text-3xl font-bold animate-float-delayed">+</div>
      <div className="absolute top-[88%] left-[18%] text-rose-500/60 font-mono text-2xl font-bold animate-float">+</div>

    </div>
  );
};
