import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden bg-[#030712]">
      
      {/* Glow Ambient Blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gradient-to-t from-[#F43F5E]/10 via-[#F97316]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Bio */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white">SEBIN S</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#F43F5E]/20 text-[#FB7185] border border-[#F43F5E]/30">
                B.Tech AI & DS (2023 - 2027 Batch)
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#60A5FA] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Sub-footer Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1.5">
            <span>Designed & Developed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by</span>
            <span className="font-semibold text-slate-300">Sebin S</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
