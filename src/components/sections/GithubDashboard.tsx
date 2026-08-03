import React, { useEffect, useState } from 'react';
import { GitBranch, Star, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { PROJECTS } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

interface GithubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  bio: string;
}

export const GithubDashboard: React.FC = () => {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Sebin1806')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.login) {
          setUser(data);
        } else {
          setUser({
            login: 'Sebin1806',
            avatar_url: 'https://github.com/Sebin1806.png',
            public_repos: 12,
            followers: 18,
            following: 24,
            html_url: 'https://github.com/Sebin1806',
            bio: 'Final Year B.Tech AI & Data Science Student | RAG & GenAI Developer'
          });
        }
      })
      .catch(() => {
        setUser({
          login: 'Sebin1806',
          avatar_url: 'https://github.com/Sebin1806.png',
          public_repos: 12,
          followers: 18,
          following: 24,
          html_url: 'https://github.com/Sebin1806',
          bio: 'Final Year B.Tech AI & Data Science Student | RAG & GenAI Developer'
        });
      });
  }, []);

  const languageBreakdown = [
    { name: 'Python', percentage: 70, color: '#F43F5E' },
    { name: 'Jupyter Notebook', percentage: 15, color: '#F97316' },
    { name: 'HTML / CSS / JS', percentage: 10, color: '#F59E0B' },
    { name: 'SQL', percentage: 5, color: '#FB7185' }
  ];

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#F43F5E] font-mono text-3xl sm:text-5xl md:text-6xl">08.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FB7185]">
                GITHUB DASHBOARD
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#F43F5E] via-[#F97316] to-[#F59E0B] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* User Stats Card (4 Cols) */}
          <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-4">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-[#F43F5E]/50 transition-all h-full">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={user?.avatar_url || 'https://github.com/Sebin1806.png'}
                  alt="Sebin1806 GitHub Avatar"
                  className="w-16 h-16 rounded-2xl border-2 border-[#F43F5E]/40 p-0.5 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                    <span>Sebin S</span>
                    <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                  </h3>
                  <a
                    href="https://github.com/Sebin1806"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#FB7185] hover:underline"
                  >
                    @Sebin1806
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                {user?.bio || 'Final Year B.Tech AI & Data Science Student building intelligent RAG systems & Multi-Agent AI workflows.'}
              </p>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 text-center mb-6">
                <div>
                  <span className="text-lg font-extrabold text-white font-mono">{user?.public_repos || 12}</span>
                  <span className="text-[10px] text-slate-400 block font-mono">Repos</span>
                </div>
                <div>
                  <span className="text-lg font-extrabold text-[#60A5FA] font-mono">{user?.followers || 18}</span>
                  <span className="text-[10px] text-slate-400 block font-mono">Followers</span>
                </div>
                <div>
                  <span className="text-lg font-extrabold text-[#22D3EE] font-mono">{user?.following || 24}</span>
                  <span className="text-[10px] text-slate-400 block font-mono">Following</span>
                </div>
              </div>

              {/* Language Distribution Visual Bar */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">Languages Used</span>
                <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden flex">
                  {languageBreakdown.map((l) => (
                    <div
                      key={l.name}
                      style={{ width: `${l.percentage}%`, backgroundColor: l.color }}
                      className="h-full"
                      title={`${l.name}: ${l.percentage}%`}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  {languageBreakdown.map((l) => (
                    <div key={l.name} className="flex items-center gap-2 text-xs">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: l.color }} />
                      <span className="text-slate-300 text-[11px] font-mono">{l.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://github.com/Sebin1806"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 mt-6 rounded-2xl text-xs font-semibold bg-white/10 hover:bg-[#3B82F6] text-white transition-all border border-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
            </a>
          </div>
          </ScrollReveal>

          {/* Repositories List (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJECTS.map((repo, index) => (
              <ScrollReveal key={repo.id} animation="fade-up" staggerIndex={index} staggerDelay={120} delay={200}>
              <div
                className="glass-panel rounded-3xl p-6 flex flex-col justify-between group hover:border-[#3B82F6]/50 transition-all duration-300 border border-white/10 h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-[#60A5FA]">
                      <GitBranch className="w-4 h-4" />
                      <h4 className="text-base font-bold text-white group-hover:text-[#60A5FA] transition-colors">
                        {repo.title}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/30">
                      Public
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5 text-[#22D3EE]" /> Python
                    </span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> Primary Repo
                    </span>
                  </div>

                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between w-full p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 transition-all group/link"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-white transition-colors" />
                  </a>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
