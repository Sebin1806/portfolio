import React, { useState } from 'react';
import { ArrowRight, Eye, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'RAG & GenAI', 'Healthcare AI', 'NLP & ML', 'Multi-Agent'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="flip-up">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 flex items-center justify-center gap-3">
              <span className="text-rose-500 font-mono text-2xl sm:text-4xl md:text-5xl font-bold">04.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-rose-400">
                FEATURED PROJECTS
              </span>
            </h2>
            <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal animation="scale-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn-red-custom px-4 py-2 text-xs transition-all duration-300 ${
                  activeCategory === cat
                    ? 'scale-105 shadow-lg shadow-rose-600/30 font-bold'
                    : 'opacity-85 hover:opacity-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <ScrollReveal key={project.id} animation="fade-up" staggerIndex={index} staggerDelay={100} delay={100}>
            <div
              className="glass-panel rounded-2xl overflow-hidden group hover:border-slate-700 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1.5"
            >
              {/* Project Image Preview Header with Hover Zoom Effect */}
              {project.images && project.images.length > 0 && (
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative w-full h-48 sm:h-52 bg-slate-950 overflow-hidden cursor-pointer group/img shrink-0 border-b border-slate-800/80"
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Category Pill & Timeline Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#0B0F19]/90 text-rose-400 border border-slate-800 backdrop-blur-md shadow-md">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono text-slate-300 bg-[#0B0F19]/90 border border-slate-800 backdrop-blur-md">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Quick View Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs z-20">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold border border-slate-700 shadow-lg">
                      <Eye className="w-4 h-4 text-rose-400" />
                      <span>View Details & Demo</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Card Container */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                <div>
                  {/* Title & Subtitle */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-xl font-extrabold text-slate-100 group-hover:text-rose-400 transition-colors mb-1 cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-rose-400/90 mb-3">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Action Bar */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all shadow-sm cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4 text-rose-400" />
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn-red-custom flex items-center gap-1.5 px-4 py-2 text-xs shadow-md shadow-rose-600/25 hover:scale-105"
                    >
                      <span>Explore Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
