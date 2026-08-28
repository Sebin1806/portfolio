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
      case 'root': return <School className="w-5 h-5 text-red-500" />;
      case 'education': return <GraduationCap className="w-5 h-5 text-red-400" />;
      case 'milestone': return <Code className="w-5 h-5 text-[#DC2626]" />;
      case 'project': return <Sparkles className="w-5 h-5 text-red-600" />;
      case 'future': return <Rocket className="w-5 h-5 text-emerald-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="journey" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="rotate-in">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#DC2626] font-mono text-2xl sm:text-4xl md:text-5xl">03.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-red-500">
                MY JOURNEY
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#DC2626] via-red-600 to-rose-700 rounded-full mt-3" />
          </div>
        </ScrollReveal>

        {/* Tree Trunk Container */}
        <div className="relative">
          
          {/* Vertical Central Glowing Tree Trunk Stem */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-rose-700 to-red-800 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)]" />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {treeNodes.map((node: JourneyNode, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal
                  key={node.id}
                  animation={isEven ? 'fade-left' : 'fade-right'}
                  delay={index * 100}
                  duration={600}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-4 sm:gap-6 group`}
                  >
                    {/* Card Content Side */}
                    <div className="w-full md:w-1/2">
                      <div className="glass-panel rounded-2xl p-4 sm:p-6 hover:border-[#F43F5E]/50 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1 shadow-lg">
                        
                        {/* Top indicator tag */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-white/5 border border-white/10 text-[#FB7185]">
                            {node.period}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{node.location}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                          {node.title}
                        </h3>
                        <p className="text-[11px] font-mono text-slate-400 mb-2">{node.subtitle} • {node.institution}</p>
                        
                        <p className="text-xs text-slate-300 leading-relaxed mb-3">
                          {node.description}
                        </p>

                        {/* Achievements list */}
                        <div className="space-y-1 pt-2 border-t border-white/10">
                          {node.achievements.map((ach) => (
                            <div key={ach} className="flex items-center gap-2 text-[11px] text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Central Node Badge */}
                    <div className="relative flex items-center justify-center z-20 shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#030712] border-2 border-[#F43F5E] flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.6)] group-hover:scale-110 group-hover:border-[#F59E0B] transition-all">
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

        </div>
      </div>
    </section>
  );
};
