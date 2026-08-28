import { useState } from 'react';
import { Loader } from './components/ui/Loader';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { QuickSearchModal } from './components/layout/QuickSearchModal';
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
import { ProjectModal } from './components/ui/ProjectModal';
import { PROJECTS } from './data/portfolioData';
import type { Project } from './data/portfolioData';
export function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProjectById = (projectId: string) => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) setSelectedProject(proj);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white relative selection:bg-rose-500/30 selection:text-rose-200 dark overflow-x-hidden">

      {/* Site Initialization Loader */}
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
    </div>
  );
}

export default App;
