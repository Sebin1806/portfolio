import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
                    ? 'scale-105 shadow-lg shadow-red-600/30 font-bold'
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
              className="glass-panel rounded-2xl overflow-hidden group hover:border-slate-700 transition-all duration-300 flex flex-col h-full shadow-lg"
            >
              {/* Card Container */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Buttons Action Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-red-500" />
                      <span>Code</span>
                    </a>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn-red-custom flex items-center gap-1.5 px-4 py-2 text-xs shadow-md shadow-red-600/30 hover:scale-105"
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
