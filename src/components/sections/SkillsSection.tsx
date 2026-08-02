import React, { useState } from 'react';
import { Sparkles, Code, Database, Cloud } from 'lucide-react';
import { SKILLS } from '../../data/portfolioData';
import type { Skill } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Generative AI & LLMs',
    'Programming & DB',
    'Data Analytics & Cloud',
    'Tools & Frameworks'
  ];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <ScrollReveal animation="slide-up">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#F97316] font-mono text-3xl sm:text-5xl md:text-6xl">02.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FB923C]">
                TECHNICAL SKILLS
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#F97316] via-[#F43F5E] to-[#F59E0B] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal animation="flip-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#F43F5E] to-[#F97316] text-white shadow-lg shadow-rose-500/25 border border-transparent'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: Skill, index: number) => (
            <ScrollReveal key={skill.name} animation="fade-up" staggerIndex={index} staggerDelay={80} delay={150}>
              <div
                className={`glass-panel rounded-3xl p-6 relative overflow-hidden group glass-card-hover transition-all duration-300 flex flex-col justify-between h-full ${
                  skill.highlight ? 'border-[#F43F5E]/30 hover:border-[#F43F5E]/70' : 'hover:border-white/20'
                }`}
              >
                {/* Glow background accent */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F43F5E]/10 rounded-full blur-2xl group-hover:bg-[#F97316]/20 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#FB7185] group-hover:scale-105 group-hover:text-[#F59E0B] transition-all">
                        {skill.category.includes('AI') ? (
                          <Sparkles className="w-5 h-5" />
                        ) : skill.category.includes('DB') ? (
                          <Database className="w-5 h-5" />
                        ) : skill.category.includes('Cloud') ? (
                          <Cloud className="w-5 h-5" />
                        ) : (
                          <Code className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-[#FB7185] transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">{skill.category}</span>
                      </div>
                    </div>

                    {skill.highlight && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#F43F5E]/20 text-[#FB7185] border border-[#F43F5E]/30">
                        Core Stack
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Decorative Subtle Glow Bar */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="text-[#F59E0B] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F43F5E]" /> Active Domain
                  </span>
                  <span className="text-slate-500">Applied Tech</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
