import { CursorTrail } from "@/components/CursorTrail";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";
import { Journey } from "@/components/sections/Journey";
import { EducationHistory } from "@/components/sections/EducationHistory";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Github, Linkedin, Code2, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const footerLinks = [
  { icon: Github, href: "https://github.com/Sebin1806", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sebin-s-098bb62ab/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/Sebin_S/", label: "LeetCode" },
];

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <TechnicalSkills />
      <Journey />
      <EducationHistory />
      <Projects />
      <Contact />
      
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart size={13} className="text-primary" /> by Sebin S &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-3">
            {footerLinks.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all duration-300"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-11 h-11 rounded-2xl glass-strong text-primary flex items-center justify-center hover:bg-primary/10 transition-all z-50 shadow-glow"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
