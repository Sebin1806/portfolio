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
      case 'root': return <School className="w-5 h-5 text-rose-400" />;
      case 'education': return <GraduationCap className="w-5 h-5 text-rose-400" />;
      case 'milestone': return <Code className="w-5 h-5 text-rose-400" />;
      case 'project': return <Sparkles className="w-5 h-5 text-rose-400" />;
      case 'future': return <Rocket className="w-5 h-5 text-emerald-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 flex items-center justify-center gap-3">
              <span className="text-rose-500 font-mono text-2xl sm:text-4xl md:text-5xl font-bold">03.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-rose-400">
                MY JOURNEY
              </span>
            </h2>
            <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
          </div>
        </ScrollReveal>

        {/* Tree Trunk Container */}
        <div className="relative">
          
          {/* Vertical Central Tree Trunk Stem */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-800 rounded-full hidden md:block" />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {treeNodes.map((node: JourneyNode, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal
                  key={node.id}
                  animation={isEven ? 'fade-left' : 'fade-right'}
                  delay={index * 80}
                  duration={500}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-4 sm:gap-6 group`}
                  >
                    {/* Card Content Side */}
                    <div className="w-full md:w-1/2">
                      <div className="glass-panel rounded-2xl p-5 sm:p-6 hover:border-slate-700 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1 shadow-md">
                        
                        {/* Top indicator tag */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-slate-900 border border-slate-800 text-rose-400">
                            {node.period}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{node.location}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-extrabold text-slate-100 group-hover:text-rose-400 transition-colors mb-1">
                          {node.title}
                        </h3>
                        <p className="text-xs font-mono text-rose-400/80 mb-3">{node.subtitle} • {node.institution}</p>
                        
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                          {node.description}
                        </p>

                        {/* Achievements list */}
                        <div className="space-y-1.5 pt-3 border-t border-slate-800">
                          {node.achievements.map((ach) => (
                            <div key={ach} className="flex items-center gap-2 text-xs text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Central Node Badge */}
                    <div className="relative flex items-center justify-center z-20 shrink-0 hidden md:flex">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-slate-800 text-rose-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-rose-500 transition-all">
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
