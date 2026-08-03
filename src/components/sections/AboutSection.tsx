import React from 'react';
import { GraduationCap, MapPin, Briefcase, Sparkles, Brain, Cpu, Rocket, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#F43F5E] font-mono text-3xl sm:text-5xl md:text-6xl">01.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FB7185]">
                ABOUT ME
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#F43F5E] via-[#F97316] to-[#F59E0B] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Bio Card (7 Cols) */}
          <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group hover:border-[#F43F5E]/40 transition-all duration-300 h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F97316]/15 via-[#F43F5E]/10 to-transparent blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#F43F5E]/20 to-[#F97316]/20 border border-[#F43F5E]/30 text-[#FB7185] shadow-lg">
                    <Brain className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Engineering the Future of AI</h3>
                    <p className="text-xs text-[#F59E0B] font-mono mt-0.5">B.Tech AI & Data Science Student</p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    Hi, I'm <strong className="text-white font-semibold">Sebin S</strong>, a Final Year B.Tech Artificial Intelligence & Data Science student at <strong className="text-[#FB7185] font-semibold">V.S.B. College of Engineering Technical Campus, Coimbatore</strong>.
                  </p>
                  <p>
                    I'm deeply passionate about Artificial Intelligence, Machine Learning, Generative AI, Retrieval-Augmented Generation (RAG), Multi-Agent AI Systems (CrewAI), Cloud Computing, and Data Analytics. I enjoy designing intelligent software solutions that solve real-world problems and continuously expand my knowledge by exploring emerging technologies.
                  </p>
                  <p>
                    I aspire to build impactful AI applications that improve lives while contributing to innovative engineering teams at forward-thinking companies.
                  </p>
                </div>
              </div>

              {/* Core Interest Pills */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2.5">
                {[
                  'Generative AI & LLMs',
                  'RAG Architecture',
                  'Multi-Agent Workflows',
                  'Machine Learning',
                  'Cloud (AWS)',
                  'Data Analytics'
                ].map((interest, i) => (
                  <ScrollReveal key={interest} animation="zoom-in" staggerIndex={i} staggerDelay={60} delay={300}>
                    <span
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-slate-200 hover:bg-[#F43F5E]/20 hover:border-[#F43F5E]/40 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{interest}</span>
                    </span>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Info Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Facts Card */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="glass-panel rounded-3xl p-6 md:p-8 space-y-4 hover:border-[#F97316]/40 transition-all">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2 mb-4">
                  <Cpu className="w-4 h-4 text-[#F97316]" />
                  <span>Quick Information</span>
                </h4>

                <div className="space-y-4 text-xs sm:text-sm">
                  <ScrollReveal animation="fade-left" delay={300}>
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                      <GraduationCap className="w-5 h-5 text-[#FB7185] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-slate-400 text-xs font-mono block">Education</span>
                        <span className="text-white font-medium block leading-snug">{PERSONAL_INFO.college}</span>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-left" delay={400}>
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                      <MapPin className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-slate-400 text-xs font-mono block">Location</span>
                        <span className="text-white font-medium block leading-snug">{PERSONAL_INFO.location}</span>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-left" delay={500}>
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                      <Briefcase className="w-5 h-5 text-[#FB923C] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-slate-400 text-xs font-mono block">Career Status</span>
                        <span className="text-emerald-400 font-semibold block leading-snug">{PERSONAL_INFO.status}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>

            {/* Opportunities Status Card */}
            <ScrollReveal animation="flip-up" delay={400}>
              <div className="glass-panel rounded-3xl p-6 md:p-8 bg-gradient-to-br from-[#0F172A] via-[#F43F5E]/10 to-[#F97316]/10 border border-[#F43F5E]/30 hover:border-[#F43F5E]/60 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-white font-bold text-base">
                      <Rocket className="w-5 h-5 text-[#FB7185]" />
                      <span>Open for Opportunities</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      2023-2027 Batch
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Available for Full-time AI Engineering & ML Roles</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Available for AI / Data Science Internship programs</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Open to Relocation & Remote Eng Collaboration</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-xs font-semibold bg-gradient-to-r from-[#F43F5E] to-[#F97316] text-white hover:opacity-90 transition-all shadow-md shadow-rose-500/20"
                >
                  <span>Connect with Sebin</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};
