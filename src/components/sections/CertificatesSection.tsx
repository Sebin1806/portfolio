import React, { useState } from 'react';
import { Award, ExternalLink, Eye, CheckCircle2, X, Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { CERTIFICATES } from '../../data/portfolioData';
import type { Certificate } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const CertificatesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePreviewCert, setActivePreviewCert] = useState<Certificate | null>(null);
  const [dragRotation, setDragRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startDragRotation, setStartDragRotation] = useState<number>(0);

  const categories = ['All', 'NPTEL', 'AI', 'Python', 'Power BI'];

  const filteredCerts = selectedCategory === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.category === selectedCategory);

  const totalCerts = filteredCerts.length;

  const handlePrev = () => {
    const angleStep = 360 / Math.max(1, totalCerts);
    setDragRotation((prev) => prev + angleStep);
  };

  const handleNext = () => {
    const angleStep = 360 / Math.max(1, totalCerts);
    setDragRotation((prev) => prev - angleStep);
  };

  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setStartDragRotation(dragRotation);
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - startX;
    setDragRotation(startDragRotation + deltaX * 0.5);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
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
            <p className="text-xs sm:text-sm font-mono text-slate-400 mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
              Drag mouse or swipe left/right to rotate 3D showcase
            </p>
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

            {/* Total Count Badge */}
            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-[#F59E0B]/30 text-xs font-mono text-slate-300">
                Total Certificates: <span className="text-[#F59E0B] font-bold">{totalCerts}</span>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* ═══════════════════════════════════════════════════════════════
           UIVERSE.IO 3D ROTATING CYLINDER SHOWCASE (WITH DRAG, SWIPE & NAV BUTTONS)
           ═══════════════════════════════════════════════════════════════ */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div
            className={`uiverse-wrapper my-6 select-none ${isDragging ? 'is-dragging cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={(e) => handlePointerDown(e.clientX)}
            onMouseMove={(e) => handlePointerMove(e.clientX)}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
            onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
            onTouchEnd={handlePointerUp}
          >
            {/* ── PREVIOUS CERTIFICATE BUTTON ── */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous Certificate"
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-[60] p-[3px] rounded-full bg-gradient-to-br from-[#F59E0B] via-[#F43F5E] to-[#F97316] shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:shadow-[0_0_40px_rgba(245,158,11,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <span className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#0B132B] group-hover:bg-[#0F172A] border border-white/20 transition-colors">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] group-hover:text-white transition-all group-hover:-translate-x-0.5" />
              </span>
            </button>

            {/* ── NEXT CERTIFICATE BUTTON ── */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next Certificate"
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-[60] p-[3px] rounded-full bg-gradient-to-br from-[#F43F5E] via-[#F97316] to-[#F59E0B] shadow-[0_0_25px_rgba(244,63,94,0.6)] hover:shadow-[0_0_40px_rgba(244,63,94,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <span className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#0B132B] group-hover:bg-[#0F172A] border border-white/20 transition-colors">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#F43F5E] group-hover:text-white transition-all group-hover:translate-x-0.5" />
              </span>
            </button>

            <div
              className="uiverse-inner"
              style={{
                '--quantity': totalCerts,
                transform: `perspective(1200px) rotateX(-6deg) rotateY(${dragRotation}deg)`
              } as React.CSSProperties}
            >
              {filteredCerts.map((cert: Certificate, index: number) => {
                return (
                  <div
                    key={cert.id}
                    className="uiverse-card group cursor-pointer"
                    style={{ '--index': index } as React.CSSProperties}
                    onClick={() => {
                      if (!isDragging) setActivePreviewCert(cert);
                    }}
                  >
                    {/* Glassmorphism Card Container */}
                    <div className="w-full h-full bg-[#0F172A]/95 border-2 border-[#F59E0B]/50 hover:border-[#F43F5E] p-2.5 sm:p-3 flex flex-col justify-between rounded-2xl relative shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_45px_rgba(244,63,94,0.5)] transition-all duration-300">
                      
                      {/* Top Accent Gradient Bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F59E0B] via-[#F43F5E] to-[#F97316]" />

                      {/* Certificate Image Thumbnail (100% Fully Visible with object-contain) */}
                      <div className="w-full h-22 sm:h-26 rounded-lg overflow-hidden border border-white/10 relative bg-[#030712] shadow-inner group-hover:scale-[1.02] transition-transform duration-300 shrink-0 flex items-center justify-center p-1">
                        {cert.image ? (
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-contain mx-auto"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${cert.previewColor} p-3 flex flex-col justify-between rounded-lg`}>
                            <Award className="w-6 h-6 text-white/80" />
                            <h4 className="text-xs font-bold text-white line-clamp-2">{cert.title}</h4>
                          </div>
                        )}

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-lg bg-white/20 text-white text-[11px] font-semibold backdrop-blur-md border border-white/30 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-[#F59E0B]" /> View Certificate
                          </span>
                        </div>
                      </div>

                      {/* Title & Metadata */}
                      <div className="text-left mt-2">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FB7185] line-clamp-2 leading-tight transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-[10px] font-mono text-[#F59E0B] mt-1 flex items-center justify-between">
                          <span className="truncate pr-1">{cert.issuer}</span>
                          <span className="text-slate-400 shrink-0">{cert.issueDate}</span>
                        </p>
                      </div>

                      {/* Action Footer */}
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-1 text-[10px] font-mono text-slate-300">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400 font-semibold">
                          Verified
                        </span>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#F43F5E] to-[#F97316] text-white hover:opacity-90 transition-opacity font-semibold"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Verify</span>
                        </a>
                      </div>

                    </div>
                  </div>
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
