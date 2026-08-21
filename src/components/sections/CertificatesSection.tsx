import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, Eye, CheckCircle2, X, Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { CERTIFICATES } from '../../data/portfolioData';
import type { Certificate } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const CertificatesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePreviewCert, setActivePreviewCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const categories = ['All', 'NPTEL', 'AI', 'Python', 'Power BI'];

  const filteredCerts = selectedCategory === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.category === selectedCategory);

  const totalCerts = filteredCerts.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating || totalCerts <= 1) return;
    setIsAnimating(true);
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % totalCerts);
    } else {
      setCurrentIndex((prev) => (prev - 1 + totalCerts) % totalCerts);
    }
    setTimeout(() => setIsAnimating(false), 350);
  };

  const handlePrev = () => navigate('prev');
  const handleNext = () => navigate('next');

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePreviewCert) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalCerts, activePreviewCert, isAnimating]);

  useEffect(() => {
    if (!isAutoPlay || activePreviewCert) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay, activePreviewCert, totalCerts, isAnimating]);

  // Compute 3D circular position style based on offset from currentIndex
  const getCardStyle = (offset: number): React.CSSProperties => {
    const absOffset = Math.abs(offset);

    if (absOffset === 0) {
      // Center Stage Card (front, prominent, elevated, zero blur)
      return {
        transform: 'translateX(0px) translateZ(80px) scale(1) rotateY(0deg)',
        zIndex: 40,
        opacity: 1,
        filter: 'blur(0px)',
        pointerEvents: 'auto' as const,
      };
    } else if (absOffset === 1) {
      // Immediate Left/Right side cards (rotated in 3D perspective, soft blur)
      const xShift = offset > 0 ? 280 : -280;
      const rotateY = offset > 0 ? -16 : 16;
      return {
        transform: `translateX(${xShift}px) translateZ(-40px) scale(0.84) rotateY(${rotateY}deg)`,
        zIndex: 25,
        opacity: 0.8,
        filter: 'blur(1.5px)',
        pointerEvents: 'auto' as const,
      };
    } else if (absOffset === 2) {
      // Background side cards (further back, small, higher blur)
      const xShift = offset > 0 ? 510 : -510;
      const rotateY = offset > 0 ? -26 : 26;
      return {
        transform: `translateX(${xShift}px) translateZ(-120px) scale(0.66) rotateY(${rotateY}deg)`,
        zIndex: 10,
        opacity: 0.45,
        filter: 'blur(3.5px)',
        pointerEvents: 'auto' as const,
      };
    } else {
      // Outer offscreen cards (sliding in/out from left or right end of the system screen!)
      const xShift = offset > 0 ? 850 : -850;
      const rotateY = offset > 0 ? -36 : 36;
      return {
        transform: `translateX(${xShift}px) translateZ(-250px) scale(0.4) rotateY(${rotateY}deg)`,
        zIndex: 0,
        opacity: 0,
        filter: 'blur(10px)',
        pointerEvents: 'none' as const,
      };
    }
  };

  const getCardsWithOffsets = () => {
    if (totalCerts === 0) return [];
    const cards: { cert: Certificate; offset: number; actualIndex: number }[] = [];
    // Render up to offset 3 so offscreen cards transition smoothly from outer screen bounds
    const range = Math.min(3, Math.floor((totalCerts - 1) / 2));

    for (let i = -range; i <= range; i++) {
      const idx = ((currentIndex + i) % totalCerts + totalCerts) % totalCerts;
      cards.push({ cert: filteredCerts[idx], offset: i, actualIndex: idx });
    }
    return cards;
  };

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      
      {/* Background ambient glowing gradient blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#F59E0B]/10 via-[#F43F5E]/15 to-[#F97316]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="blur-in">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#F59E0B] font-mono text-3xl sm:text-5xl md:text-6xl">06.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#F59E0B]">
                CERTIFICATIONS
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#F43F5E] to-[#F97316] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Category Filter & Control Bar */}
        <ScrollReveal animation="scale-up" delay={100}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-2xl text-xs font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#F59E0B] via-[#F43F5E] to-[#F97316] text-white shadow-lg shadow-amber-500/30 border border-transparent font-bold scale-105'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Counter Badge */}
            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-[#F59E0B]/30 text-xs font-mono text-slate-300">
                Card <span className="text-[#F59E0B] font-bold">{currentIndex + 1}</span> of {totalCerts}
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* ═══════════════════════════════════════════════════════════════
           FLUID 3D CIRCULAR CAROUSEL STAGE
           ═══════════════════════════════════════════════════════════════ */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div
            className="relative h-[480px] sm:h-[520px] flex items-center justify-center py-4 select-none"
            style={{ perspective: '1200px' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            
            {/* ── PREVIOUS BUTTON ── */}
            <div className="absolute left-1 sm:left-4 lg:left-6 z-[60]" style={{ transform: 'translateZ(200px)' }}>
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                aria-label="Previous Certificate"
                className="relative p-[3px] rounded-full bg-gradient-to-br from-[#F59E0B] via-[#F43F5E] to-[#F97316] shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_45px_rgba(245,158,11,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
              >
                <span className="relative flex items-center justify-center w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#0B132B] group-hover:bg-[#0F172A] border border-white/20 transition-colors">
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#F59E0B] group-hover:text-white transition-all group-hover:-translate-x-0.5" />
                </span>
              </button>
            </div>

            {/* ── NEXT BUTTON ── */}
            <div className="absolute right-1 sm:right-4 lg:right-6 z-[60]" style={{ transform: 'translateZ(200px)' }}>
              <button
                onClick={handleNext}
                disabled={isAnimating}
                aria-label="Next Certificate"
                className="relative p-[3px] rounded-full bg-gradient-to-br from-[#F43F5E] via-[#F97316] to-[#F59E0B] shadow-[0_0_30px_rgba(244,63,94,0.5)] hover:shadow-[0_0_45px_rgba(244,63,94,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
              >
                <span className="relative flex items-center justify-center w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#0B132B] group-hover:bg-[#0F172A] border border-white/20 transition-colors">
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#F43F5E] group-hover:text-white transition-all group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>

            {/* ── 3D CAROUSEL CARDS STAGE ── */}
            <div className="relative w-full h-full flex items-center justify-center">
              {getCardsWithOffsets().map(({ cert, offset, actualIndex }) => {
                const style = getCardStyle(offset);
                const isCenter = offset === 0;

                return (
                  <div
                    key={cert.id}
                    onClick={() => {
                      if (!isCenter && !isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(actualIndex);
                        setTimeout(() => setIsAnimating(false), 350);
                      }
                    }}
                    className="absolute top-4 w-[310px] sm:w-[350px] cursor-pointer"
                    style={{
                      ...style,
                      transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.35s ease, filter 0.35s ease',
                      willChange: 'transform, opacity, filter',
                    }}
                  >
                    <div
                      className={`glass-panel rounded-3xl p-5 relative overflow-hidden flex flex-col justify-between group border shadow-2xl transition-all duration-500 ${
                        isCenter
                          ? 'border-[#F59E0B]/60 bg-[#0F172A]/90 shadow-[0_0_50px_rgba(245,158,11,0.25)] hover:border-[#F59E0B]'
                          : 'border-white/10 bg-white/[0.04] hover:border-white/25'
                      }`}
                    >
                      {/* Top Accent Line */}
                      {isCenter && (
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#F43F5E] to-[#F97316]" />
                      )}

                      {/* Certificate Thumbnail */}
                      <div
                        className={`w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-white/10 mb-4 relative bg-slate-950 shadow-inner ${
                          isCenter ? 'cursor-pointer group-hover:scale-[1.02] transition-transform duration-300' : ''
                        }`}
                        onClick={(e) => {
                          if (isCenter) {
                            e.stopPropagation();
                            setActivePreviewCert(cert);
                          }
                        }}
                      >
                        {cert.image ? (
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${cert.previewColor} p-5 flex flex-col justify-between`}>
                            <Award className="w-8 h-8 text-white/80" />
                            <h4 className="text-base font-bold text-white line-clamp-2">{cert.title}</h4>
                          </div>
                        )}

                        {/* Hover Zoom Overlay (center card only) */}
                        {isCenter && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-4 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/30 flex items-center gap-1.5 shadow-xl">
                              <Eye className="w-4 h-4 text-[#F59E0B]" /> Zoom View
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Certificate Title & Metadata */}
                      <div className="mb-3">
                        <h4 className={`text-sm sm:text-base font-bold line-clamp-2 leading-snug transition-colors ${
                          isCenter ? 'text-white group-hover:text-[#FB7185]' : 'text-slate-300'
                        }`}>
                          {cert.title}
                        </h4>
                        <p className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-2">
                          <span className="text-[#F59E0B] font-semibold">{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.issueDate}</span>
                        </p>
                      </div>

                      {/* Skills Covered Pills */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skillsCovered.slice(0, isCenter ? 6 : 3).map((s) => (
                            <span
                              key={s}
                              className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar (center card only) */}
                      {isCenter && (
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActivePreviewCert(cert);
                            }}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all cursor-pointer hover:border-[#F59E0B]/40"
                          >
                            <Eye className="w-3.5 h-3.5 text-[#F59E0B]" />
                            <span>Preview</span>
                          </button>

                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#F43F5E] to-[#F97316] text-white hover:opacity-90 transition-all shadow-md shadow-rose-500/20"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Verify</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </ScrollReveal>

        {/* ── PAGINATION DOTS INDICATOR ── */}
        <ScrollReveal animation="zoom-in" delay={200}>
          <div className="flex flex-col items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-2 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              {filteredCerts.map((cert, index) => {
                const isCurrent = index === currentIndex;
                return (
                  <button
                    key={cert.id}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(index);
                        setTimeout(() => setIsAnimating(false), 550);
                      }
                    }}
                    aria-label={`Jump to certificate ${index + 1}`}
                    title={cert.title}
                    className={`relative rounded-full transition-all duration-500 cursor-pointer ${
                      isCurrent
                        ? 'w-10 h-3 bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6] shadow-md shadow-cyan-400/50'
                        : 'w-3 h-3 bg-white/20 hover:bg-white/50'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Certificate Fullscreen Zoom Modal */}
        {activePreviewCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
            <div className="relative w-full max-w-3xl bg-[#0F172A] border border-white/10 rounded-3xl p-6 sm:p-8 glass-panel shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActivePreviewCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-[#22D3EE]/20 border border-[#22D3EE]/40 text-[#22D3EE]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activePreviewCert.title}</h3>
                  <p className="text-xs font-mono text-slate-400">Issued by {activePreviewCert.issuer} ({activePreviewCert.issueDate})</p>
                </div>
              </div>

              {/* Certificate Image Display */}
              {activePreviewCert.image ? (
                <div className="w-full rounded-2xl overflow-hidden border-2 border-[#22D3EE]/40 mb-6 shadow-inner bg-white">
                  <img
                    src={activePreviewCert.image}
                    alt={activePreviewCert.title}
                    className="w-full h-auto max-h-[550px] object-contain mx-auto"
                  />
                </div>
              ) : (
                <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-[#030712] via-[#0F172A] to-[#1E293B] border-2 border-[#22D3EE]/40 p-6 flex flex-col justify-between relative shadow-inner mb-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#22D3EE]" />
                      <span className="font-extrabold text-sm text-white tracking-widest uppercase">CERTIFICATE OF ACHIEVEMENT</span>
                    </div>
                  </div>

                  <div className="text-center my-4">
                    <p className="text-xs text-slate-400 font-mono">This is to certify that</p>
                    <h4 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#8B5CF6] to-[#22D3EE] my-1">
                      SEBIN S
                    </h4>
                    <p className="text-xs text-slate-300">has successfully completed all requirements for</p>
                    <p className="text-sm font-bold text-white mt-1">{activePreviewCert.title}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-slate-400">
                    <span>Issuer: {activePreviewCert.issuer}</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Valid
                    </span>
                  </div>
                </div>
              )}

              {/* Credential ID info */}
              {activePreviewCert.credentialId && (
                <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-xl bg-white/5 border border-white/10 w-fit">
                  <span className="text-xs text-[#94A3B8] font-mono">Credential / Roll ID:</span>
                  <span className="text-xs text-[#22D3EE] font-mono font-bold">{activePreviewCert.credentialId}</span>
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-2 border-t border-white/10">
                <button
                  onClick={() => setActivePreviewCert(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
                >
                  Close Preview
                </button>
                <a
                  href={activePreviewCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] text-white hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Credential</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
