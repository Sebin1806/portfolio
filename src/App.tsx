import React, { useState, Suspense } from 'react';
import { Loader } from './components/ui/Loader';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { JourneySection } from './components/sections/JourneySection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { EducationSection } from './components/sections/EducationSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { GithubDashboard } from './components/sections/GithubDashboard';
import { TechStackSection } from './components/sections/TechStackSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { PROJECTS } from './data/portfolioData';
import type { Project } from './data/portfolioData';
import { SubtleAbstractBackground } from './components/ui/SubtleAbstractBackground';

const QuickSearchModal = React.lazy(() =>
  import('./components/layout/QuickSearchModal').then(module => ({ default: module.QuickSearchModal }))
);

const ProjectModal = React.lazy(() =>
  import('./components/ui/ProjectModal').then(module => ({ default: module.ProjectModal }))
);

export function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProjectById = (projectId: string) => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) setSelectedProject(proj);
  };

  return (
    <div className="min-h-screen bg-premium-mesh text-white relative selection:bg-rose-500/30 selection:text-rose-200 dark overflow-x-hidden">
      
      {/* Subtle Abstract Background with Soft Glows, Geometric Rings & Floating Accents */}
      <SubtleAbstractBackground />

      {/* Tech Dot Grid Overlay */}
      <div className="fixed inset-0 bg-dot-grid opacity-70 pointer-events-none z-0" />
      <Loader />

      {/* Glassmorphic Navigation Header */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Portfolio Content Sections */}
      <main className="relative z-10 space-y-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection onSelectProject={(proj) => setSelectedProject(proj)} />
        <EducationSection />
        <CertificatesSection />
        <AchievementsSection />
        <GithubDashboard />
        <TechStackSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lazy Loaded Modals */}
      <Suspense fallback={null}>
        {/* Global Quick Search (Ctrl+K) */}
        <QuickSearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          onSelectProject={handleSelectProjectById}
        />

        {/* Project Screenshot & Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Suspense>

      {/* Floating Scroll-To-Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
