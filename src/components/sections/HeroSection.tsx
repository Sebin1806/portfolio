import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, ArrowDown, Download, Mail, GraduationCap, Code2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { BinaryHackerHeading } from '../ui/BinaryHackerHeading';
import { ScrollReveal } from '../ui/ScrollReveal';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/Icons';

export const HeroSection: React.FC = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const titles = PERSONAL_INFO.typingTitles;
    const fullText = titles[typingIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specializations = [
    'RAG Architecture',
    'Multi-Agent CrewAI',
    'Machine Learning',
    'Python & PyTorch',
    'Generative AI'
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      
      {/* Subtle Background Radial Glow Ring Behind Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <ScrollReveal animation="fade-down" delay={100} duration={700}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 mb-6 shadow-md transition-all hover:border-slate-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-300">
              {PERSONAL_INFO.status}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          </div>
        </ScrollReveal>

        {/* Large Centered Name Heading: Sebin S */}
        <ScrollReveal animation="blur-in" delay={250} duration={800}>
          <BinaryHackerHeading />
        </ScrollReveal>

        {/* Role Title & Academic Credentials */}
        <ScrollReveal animation="fade-up" delay={400} duration={700}>
          <div className="space-y-3 mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 max-w-3xl leading-tight">
              {PERSONAL_INFO.role}
            </h2>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
              <GraduationCap className="w-4 h-4 text-rose-400 shrink-0" />
              <span>B.Tech AI & Data Science (2023 - 2027)</span>
              <span>•</span>
              <span className="text-slate-300 font-medium">V.S.B. College of Engineering, Coimbatore</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Typewriter Text Box */}
        <ScrollReveal animation="zoom-in" delay={550} duration={600}>
          <div className="h-12 flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-6 font-mono text-sm md:text-base text-rose-400 shadow-md w-full max-w-md">
            <Terminal className="w-4 h-4 mr-2.5 text-rose-500 shrink-0" />
            <span>{currentText}</span>
            <span className="animate-pulse ml-0.5 font-bold text-rose-500">|</span>
          </div>
        </ScrollReveal>

        {/* AI Specialization Core Pills */}
        <ScrollReveal animation="fade-up" delay={700} duration={700}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 max-w-2xl">
            {specializations.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
              >
                {spec}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Sub-tagline */}
        <ScrollReveal animation="fade-up" delay={800} duration={700}>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mb-8 leading-relaxed font-normal">
            {PERSONAL_INFO.tagline}
          </p>
        </ScrollReveal>

        {/* CTA Action Buttons */}
        <ScrollReveal animation="fade-up" delay={900} duration={700}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {/* Primary Action: Explore Projects */}
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-red-custom px-6 py-3.5 text-sm font-bold shadow-lg shadow-rose-600/25 hover:scale-105 flex items-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            {/* Secondary Action: Download Resume */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white text-sm font-semibold shadow-md transition-all flex items-center gap-2 hover:scale-105"
            >
              <Download className="w-4 h-4 text-rose-400" />
              <span>Download Resume</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Quick Contact Link */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-rose-400" />
              <span>Contact Me</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Social Quick Links Row */}
        <ScrollReveal animation="fade-up" delay={1000} duration={700}>
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-800/80 w-full max-w-sm">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:scale-110 transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:scale-110 transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/Sebin1806/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode Profile"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:scale-110 transition-all"
            >
              <LeetcodeIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Direct Email"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:scale-110 transition-all"
            >
              <Mail className="w-5 h-5 text-rose-400" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
