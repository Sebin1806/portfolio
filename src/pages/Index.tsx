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
      <CursorTrail />
      <Navigation />
      <Hero />
      <About />
      <TechnicalSkills />
      <Journey />
      <EducationHistory />
      <Projects />
      <Contact />
      

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
