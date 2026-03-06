import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";
import { EducationHistory } from "@/components/sections/EducationHistory";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Github, Linkedin, Code2, Heart } from "lucide-react";

const footerLinks = [
  { icon: Github, href: "https://github.com/Sebin1806", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sebin-s-098bb62ab/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/Sebin_S/", label: "LeetCode" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <TechnicalSkills />
      <EducationHistory />
      <Projects />
      <Contact />
      <footer className="py-10 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-primary" /> by Sebin S &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-3">
            {footerLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
