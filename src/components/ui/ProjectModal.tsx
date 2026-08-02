import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle, Calendar } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F172A] border border-white/10 rounded-3xl shadow-2xl overflow-y-auto glass-panel">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Screenshot Carousel */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-black overflow-hidden group">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/40" />

          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentImageIndex ? 'w-6 bg-[#FB7185]' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#F43F5E]/20 text-[#FB7185] border border-[#F43F5E]/40">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                  {project.timeline}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
              <p className="text-sm font-medium text-slate-300 mt-1">{project.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-semibold bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 font-mono uppercase tracking-wider mb-2">Overview</h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 font-mono uppercase tracking-wider mb-3">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 font-mono uppercase tracking-wider mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-[#F97316]/15 border border-[#F97316]/30 text-[#FB923C]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
