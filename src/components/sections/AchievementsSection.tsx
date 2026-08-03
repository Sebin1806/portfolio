import React, { useState } from 'react';
import { FolderCode, Cpu, GitBranch, BrainCircuit, Sparkles, BookOpen, ScrollText, Lightbulb, ExternalLink, Award, BadgeCheck, Eye, X } from 'lucide-react';
import { ACHIEVEMENTS, PUBLICATIONS } from '../../data/portfolioData';
import type { Achievement, Publication } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AchievementsSection: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'folder-code': return <FolderCode className="w-6 h-6 text-[#F43F5E]" />;
      case 'cpu': return <Cpu className="w-6 h-6 text-[#F97316]" />;
      case 'git-repo': return <GitBranch className="w-6 h-6 text-[#F59E0B]" />;
      case 'brain-circuit': return <BrainCircuit className="w-6 h-6 text-[#FB7185]" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  const getPublicationIcon = (type: Publication['type']) => {
    switch (type) {
      case 'research-paper':
        return <ScrollText className="w-7 h-7" />;
      case 'patent':
        return <Lightbulb className="w-7 h-7" />;
      default:
        return <BookOpen className="w-7 h-7" />;
    }
  };

  const getPublicationGradient = (type: Publication['type']) => {
    switch (type) {
      case 'research-paper':
        return {
          border: 'hover:border-emerald-400/50',
          iconBg: 'from-emerald-500/20 to-teal-500/20',
          iconBorder: 'border-emerald-500/30',
          iconText: 'text-emerald-400',
          badgeBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
          tagBg: 'bg-emerald-500/10 text-emerald-300/80 border-emerald-500/20',
          glowShadow: 'group-hover:shadow-emerald-500/10',
          accentLine: 'from-emerald-400 to-teal-400',
        };
      case 'patent':
        return {
          border: 'hover:border-amber-400/50',
          iconBg: 'from-amber-500/20 to-orange-500/20',
          iconBorder: 'border-amber-500/30',
          iconText: 'text-amber-400',
          badgeBg: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
          tagBg: 'bg-amber-500/10 text-amber-300/80 border-amber-500/20',
          glowShadow: 'group-hover:shadow-amber-500/10',
          accentLine: 'from-amber-400 to-orange-400',
        };
      default:
        return {
          border: 'hover:border-rose-400/50',
          iconBg: 'from-rose-500/20 to-orange-500/20',
          iconBorder: 'border-rose-500/30',
          iconText: 'text-rose-400',
          badgeBg: 'bg-rose-500/15 border-rose-500/30 text-rose-400',
          tagBg: 'bg-rose-500/10 text-rose-300/80 border-rose-500/20',
          glowShadow: 'group-hover:shadow-rose-500/10',
          accentLine: 'from-rose-400 to-amber-400',
        };
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="slide-up">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#F59E0B] font-mono text-3xl sm:text-5xl md:text-6xl">07.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#F59E0B]">
                ACHIEVEMENTS & RESEARCH
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#F43F5E] to-[#F97316] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Counter Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {ACHIEVEMENTS.map((item: Achievement, index: number) => (
            <ScrollReveal key={item.label} animation="zoom-in" staggerIndex={index} staggerDelay={100} delay={100}>
            <div
              className="glass-panel rounded-3xl p-6 relative overflow-hidden flex flex-col items-center text-center justify-between group glass-card-hover border border-white/10 hover:border-amber-400/40 transition-all duration-300 h-full"
            >
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform mb-4">
                {getIcon(item.icon)}
              </div>

              <div className="my-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#60A5FA] to-[#22D3EE] font-mono">
                  {item.value}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white mt-1">{item.label}</h3>
              </div>

              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                {item.subtext}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Publications & Research ── */}
        <div className="mt-20">
          {/* Sub-Header */}
          <ScrollReveal animation="blur-in">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A78BFA] text-xs font-mono mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>PUBLICATIONS & RESEARCH</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Research{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#22D3EE]">
                  Papers & Patents
                </span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
                Contributing to the knowledge frontier through academic research and innovation.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] rounded-full mt-4" />
            </div>
          </ScrollReveal>

          {/* Publication Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PUBLICATIONS.map((pub, index) => {
              const style = getPublicationGradient(pub.type);
              return (
                <ScrollReveal key={pub.id} animation={index === 0 ? 'fade-right' : 'fade-left'} delay={index * 150}>
                <div
                  className={`group relative rounded-3xl border border-white/10 ${style.border} bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.06] shadow-xl ${style.glowShadow} hover:shadow-2xl flex flex-col justify-between h-full`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${style.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      {/* Header row */}
                      <div className="flex items-start gap-4 mb-5">
                        {/* Icon */}
                        <div className={`flex-shrink-0 p-3.5 rounded-2xl bg-gradient-to-br ${style.iconBg} border ${style.iconBorder} ${style.iconText} group-hover:scale-110 transition-transform duration-300`}>
                          {getPublicationIcon(pub.type)}
                        </div>

                        {/* Title & Publisher */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${style.badgeBg}`}>
                              {pub.type === 'research-paper' ? (
                                <><Award className="w-3 h-3" /> Research Paper</>
                              ) : (
                                <><BadgeCheck className="w-3 h-3" /> Patent</>
                              )}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">{pub.year}</span>
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#FB7185] transition-colors duration-300">
                            {pub.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 font-medium flex items-center gap-1.5">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                            {pub.publisher}
                          </p>
                        </div>
                      </div>

                      {/* Publication / Patent Certificate Image Frame */}
                      {pub.image && (
                        <div
                          className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 mb-5 relative group/img cursor-pointer bg-slate-950 shadow-inner"
                          onClick={() => setActiveModalImage(pub.image || null)}
                        >
                          <img
                            src={pub.image}
                            alt={pub.title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-4 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/30 flex items-center gap-1.5 shadow-xl">
                              <Eye className="w-4 h-4 text-[#F59E0B]" /> Zoom Certificate
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm text-slate-300/80 leading-relaxed mb-5">
                        {pub.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold border ${style.tagBg} backdrop-blur-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Status footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400/90">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        {pub.status}
                      </span>

                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#FB7185] hover:text-white transition-colors"
                        >
                          View Official Link <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Fullscreen Zoom Modal for Research Paper & Patent Certificates */}
        {activeModalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
            <div className="relative w-full max-w-4xl bg-[#0F172A] border border-white/10 rounded-3xl p-6 sm:p-8 glass-panel shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full rounded-2xl overflow-hidden border-2 border-[#F59E0B]/40 mb-4 shadow-inner bg-white">
                <img
                  src={activeModalImage}
                  alt="Certificate Preview"
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveModalImage(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
