import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
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
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#F43F5E] font-mono text-3xl sm:text-5xl md:text-6xl">04.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FB7185]">
                FEATURED PROJECTS
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#F43F5E] via-[#F97316] to-[#F59E0B] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal animation="scale-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#F43F5E] via-[#F97316] to-[#F59E0B] text-white shadow-lg shadow-rose-500/25 border border-transparent'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 hover:text-white'
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
            <ScrollReveal key={project.id} animation="flip-up" staggerIndex={index} staggerDelay={150} delay={150}>
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between group glass-card-hover border border-white/10 hover:border-[#F43F5E]/50 transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-56 sm:h-64 bg-slate-900 overflow-hidden cursor-pointer" onClick={() => onSelectProject(project)}>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/30 hover:scale-105 transition-transform cursor-pointer">
                    <Eye className="w-4 h-4" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#FB7185] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F59E0B] mb-3">{project.subtitle}</p>
                  
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Action Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-[#FB7185]" />
                      <span>Code</span>
                    </a>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#F43F5E] to-[#F97316] text-white hover:opacity-90 transition-all shadow-md shadow-rose-500/20 cursor-pointer"
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
