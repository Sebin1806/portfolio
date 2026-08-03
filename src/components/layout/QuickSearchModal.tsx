import React, { useState, useEffect } from 'react';
import { Search, X, FolderCode, Cpu, Award, Rocket, ArrowRight } from 'lucide-react';
import { PROJECTS, SKILLS, CERTIFICATES } from '../../data/portfolioData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSkills = SKILLS.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCerts = CERTIFICATES.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  const scrollToSection = (id: string) => {
    onClose();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-panel">
        
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
          <Search className="w-5 h-5 text-[#60A5FA] mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search projects, skills, certificates, or press ESC..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm md:text-base focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          
          {/* Quick Nav Options */}
          {!query && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Quick Navigation</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Projects Showcase', id: 'projects', icon: FolderCode },
                  { label: 'Skills & Tech Graph', id: 'skills', icon: Cpu },
                  { label: 'My Journey Tree', id: 'journey', icon: Rocket },
                  { label: 'Certificates Gallery', id: 'certificates', icon: Award },
                ].map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-[#3B82F6]/20 border border-white/5 hover:border-[#3B82F6]/40 transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <sec.icon className="w-4 h-4 text-[#60A5FA] group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-slate-200">{sec.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#22D3EE] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects Results */}
          {filteredProjects.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Projects ({filteredProjects.length})</p>
              <div className="space-y-2">
                {filteredProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(p.id);
                    }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition-all group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-[#60A5FA]">{p.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-1">{p.subtitle}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-[#3B82F6]/20 text-[#60A5FA] font-mono">{p.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Results */}
          {filteredSkills.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Skills ({filteredSkills.length})</p>
              <div className="flex flex-wrap gap-2">
                {filteredSkills.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => scrollToSection('skills')}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#8B5CF6]/20 border border-white/5 hover:border-[#8B5CF6]/40 text-xs font-medium text-slate-200 cursor-pointer"
                  >
                    <span>{s.name}</span>
                    <span className="text-[10px] text-[#22D3EE] font-mono">{s.level}%</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Certificates Results */}
          {filteredCerts.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Certificates ({filteredCerts.length})</p>
              <div className="space-y-2">
                {filteredCerts.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => scrollToSection('certificates')}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition-all"
                  >
                    <span className="text-xs font-medium text-slate-200">{c.title}</span>
                    <span className="text-[11px] text-slate-400 font-mono">{c.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {query && filteredProjects.length === 0 && filteredSkills.length === 0 && filteredCerts.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              <p className="text-sm">No results found for "{query}"</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/10 bg-black/40 text-[11px] text-slate-400 font-mono">
          <span>Navigate with mouse or click items</span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
