import React from 'react';
import { Rocket, GraduationCap, Code, Sparkles, School, CheckCircle2 } from 'lucide-react';
import { JOURNEY } from '../../data/portfolioData';
import type { JourneyNode } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const JourneySection: React.FC = () => {
  // Render upward growing tree timeline (Reverse array order so roots are at bottom)
  const treeNodes = [...JOURNEY].reverse();

  const getIcon = (type: string) => {
    switch (type) {
      case 'root': return <School className="w-5 h-5 text-amber-400" />;
      case 'education': return <GraduationCap className="w-5 h-5 text-[#FB7185]" />;
      case 'milestone': return <Code className="w-5 h-5 text-[#F59E0B]" />;
      case 'project': return <Sparkles className="w-5 h-5 text-[#F97316]" />;
      case 'future': return <Rocket className="w-5 h-5 text-emerald-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#F43F5E]" />;
    }
  };

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="rotate-in">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#F59E0B] font-mono text-3xl sm:text-5xl md:text-6xl">03.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#F59E0B]">
                MY JOURNEY
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#F43F5E] to-[#F97316] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Tree Trunk Container */}
        <div className="relative">
          
          {/* Vertical Central Glowing Tree Trunk Stem */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F97316] via-[#F43F5E] to-amber-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.5)]" />

          <div className="space-y-12 relative z-10">
            {treeNodes.map((node: JourneyNode, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal
                  key={node.id}
                  animation={isEven ? 'fade-left' : 'fade-right'}
                  delay={index * 120}
                  duration={800}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-8 group`}
                  >
                    {/* Card Content Side */}
                    <div className="w-full md:w-1/2">
                      <div className="glass-panel rounded-3xl p-6 sm:p-8 hover:border-[#F43F5E]/50 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1 shadow-xl">
                        
                        {/* Top indicator tag */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-white/5 border border-white/10 text-[#FB7185]">
                            {node.period}
                          </span>
                          <span className="text-xs font-mono text-slate-400">{node.location}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                          {node.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mb-3">{node.subtitle} • {node.institution}</p>
                        
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                          {node.description}
                        </p>

                        {/* Achievements list */}
                        <div className="space-y-1.5 pt-3 border-t border-white/10">
                          {node.achievements.map((ach) => (
                            <div key={ach} className="flex items-center gap-2 text-xs text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Central Node Badge */}
                    <div className="relative flex items-center justify-center z-20">
                      <div className="w-12 h-12 rounded-2xl bg-[#030712] border-2 border-[#F43F5E] flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.6)] group-hover:scale-125 group-hover:border-[#F59E0B] transition-all">
                        {getIcon(node.type)}
                      </div>
                    </div>

                    {/* Empty Spacer Side */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Tree Roots Base Badge */}
          <ScrollReveal animation="scale-up" delay={200}>
            <div className="mt-16 flex flex-col items-center text-center">
              <div className="px-6 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold shadow-lg shadow-amber-500/10">
                🌱 Roots: Evans Matriculation HSS & Early Curiosity
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
