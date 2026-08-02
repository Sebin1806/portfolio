import React from 'react';
import { Sparkles, Brain, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { TECH_STACK_GROUPS } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const TechStackSection: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Artificial Intelligence')) return <Sparkles className="w-5 h-5 text-[#F59E0B]" />;
    if (category.includes('Machine Learning')) return <Brain className="w-5 h-5 text-[#F97316]" />;
    if (category.includes('Data')) return <Database className="w-5 h-5 text-[#F43F5E]" />;
    return <Terminal className="w-5 h-5 text-[#FB7185]" />;
  };

  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <ScrollReveal animation="fade-down">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#F97316] font-mono text-3xl sm:text-5xl md:text-6xl">09.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FB923C]">
                TECH ECOSYSTEM
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#F97316] via-[#F43F5E] to-[#F59E0B] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Tech Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_STACK_GROUPS.map((group, index) => (
            <ScrollReveal key={group.category} animation="rotate-in" staggerIndex={index} staggerDelay={150} delay={100}>
            <div
              className="glass-panel rounded-3xl p-6 sm:p-8 hover:border-[#F43F5E]/50 transition-all duration-300 group h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(group.category)}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FB7185] transition-colors">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/5 hover:bg-[#F43F5E]/20 border border-white/10 hover:border-[#F43F5E]/40 transition-all text-xs font-mono font-medium text-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
