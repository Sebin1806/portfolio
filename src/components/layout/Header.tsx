import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Journey', id: 'journey' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'GitHub', id: 'github' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  // Scroll detection for sticky header backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to observe sections and update active section state
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Custom smooth scroll handler compensating for sticky header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#0B0F19]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Space / Spacer */}
        <div className="flex items-center gap-2">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-lg font-extrabold tracking-tight text-white hover:text-rose-400 transition-colors flex items-center gap-1.5"
          >
            <span className="text-rose-500 font-black">SEBIN S</span>
            <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium">
              AI Engineer
            </span>
          </a>
        </div>

        {/* Desktop Navigation with Active Indicator */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3 py-1.5 text-xs rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-rose-500/15 text-rose-400 font-bold border border-rose-500/30 shadow-sm'
                    : 'text-slate-300 font-medium hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Official Google Drive Resume Link Button */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-red-custom hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs shadow-lg shadow-rose-600/25 hover:scale-105"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white lg:hidden cursor-pointer transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-rose-500" /> : <Menu className="w-5 h-5 text-rose-500" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Smooth Slide & Fade Transition */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-slate-800 space-y-1.5 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-rose-500/15 text-rose-400 font-bold border border-rose-500/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-red-custom flex items-center justify-center gap-2 w-full mt-3 py-3 rounded-xl text-sm font-bold shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </header>
  );
};
