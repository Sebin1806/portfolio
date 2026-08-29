import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'GitHub', href: '#github' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#030712]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo removed per user request */}
        <div />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions Controls */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Official Google Drive Resume Link Button */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-red-custom hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs shadow-lg shadow-red-600/30 hover:scale-105"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 lg:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5 text-red-500" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-white/10 hover:text-red-500 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full mt-3 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#F43F5E] to-[#F97316] text-white cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      )}
    </header>
  );
};
