import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2, School } from 'lucide-react';
import { EDUCATION } from '../../data/portfolioData';
import type { EducationItem } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="zoom-in">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 flex items-center justify-center gap-3">
              <span className="text-rose-500 font-mono text-2xl sm:text-4xl md:text-5xl font-bold">05.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-rose-400">
                EDUCATION & HONORS
              </span>
            </h2>
            <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
          </div>
        </ScrollReveal>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu: EducationItem, index: number) => (
            <ScrollReveal key={edu.institution} animation={index === 0 ? 'fade-right' : 'fade-left'} delay={index * 150}>
            <div
              key={edu.institution}
              className="glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group hover:border-red-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Background gradient accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-red-600/15 via-rose-700/10 to-transparent blur-2xl pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#F43F5E]/20 text-[#FB7185] border border-[#F43F5E]/40">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                    {edu.period}
                  </span>
                </div>

                {/* Institution & Degree */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#FB7185] group-hover:scale-110 transition-transform">
                    {edu.type === 'College' ? <GraduationCap className="w-7 h-7" /> : <School className="w-7 h-7" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">{edu.institution}</p>
                    <p className="text-xs text-slate-400 font-mono mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#F97316]" />
                      {edu.location}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                {edu.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
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
