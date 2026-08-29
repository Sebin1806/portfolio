import React from 'react';
import { Download, ExternalLink, Sparkles, ShieldCheck, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="blur-in">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#DC2626] font-mono text-3xl sm:text-5xl md:text-6xl">10.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-red-500">
                RESUME & CV
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#DC2626] via-red-600 to-rose-700 rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Main Resume Showcase Card */}
        <ScrollReveal animation="scale-up" delay={150} duration={800}>
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-red-500/30 relative overflow-hidden group hover:border-red-500/60 transition-all duration-300 shadow-2xl">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-600/15 via-rose-700/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Info */}
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified 2023-2027 Batch AI Engineer Resume</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Sebin S — Official Resume
              </h3>
              
              <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                Click below to open my official Google Drive folder where you can view and download the latest resume in PDF format.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FB7185]" /> PDF Format
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-[#F59E0B]" /> Google Drive Hosted
                </span>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-red-custom flex items-center gap-3 px-8 py-4 text-base shadow-xl shadow-red-600/30 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
                <ExternalLink className="w-4 h-4 opacity-90" />
              </a>
              <span className="text-[11px] font-mono text-slate-400">Opens in Google Drive</span>
            </div>

          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
