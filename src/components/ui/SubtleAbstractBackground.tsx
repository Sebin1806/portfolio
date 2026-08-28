import React from 'react';

export const SubtleAbstractBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      
      {/* 1. Soft Ambient Glowing Orbs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-rose-600/09 rounded-full blur-[110px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 -left-32 w-[550px] h-[550px] bg-amber-500/08 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '6s' }} />
      <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] bg-emerald-500/08 rounded-full blur-[110px] animate-pulse-glow" style={{ animationDelay: '9s' }} />

      {/* 2. Minimal Abstract Geometric Outlines */}
      {/* Abstract Glowing Ring Top Right */}
      <div className="absolute top-24 right-12 w-96 h-96 border border-white/5 rounded-full animate-spin-slow opacity-25" />
      <div className="absolute top-32 right-20 w-80 h-80 border border-indigo-500/10 rounded-full animate-spin-slow opacity-20" style={{ animationDirection: 'reverse' }} />

      {/* Abstract Concentric Circles Center Left */}
      <div className="absolute top-[45%] -left-20 w-96 h-96 border border-[#F43F5E]/10 rounded-full opacity-20 animate-pulse-glow" />
      <div className="absolute top-[48%] -left-12 w-72 h-72 border border-white/5 rounded-full opacity-15" />

      {/* Subtle Floating Tech Decorative Accents (+) and Diamonds (◇) */}
      <div className="absolute top-[18%] left-[12%] text-white/10 font-mono text-xl animate-float">+</div>
      <div className="absolute top-[35%] right-[18%] text-indigo-400/15 font-mono text-2xl animate-float-delayed">◇</div>
      <div className="absolute top-[62%] left-[8%] text-[#F43F5E]/15 font-mono text-xl animate-float">◇</div>
      <div className="absolute top-[78%] right-[10%] text-amber-400/15 font-mono text-2xl animate-float-delayed">+</div>
      <div className="absolute top-[90%] left-[20%] text-emerald-400/15 font-mono text-xl animate-float">+</div>

    </div>
  );
};
