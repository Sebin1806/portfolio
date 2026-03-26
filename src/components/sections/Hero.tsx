import { Download, FolderOpen, Award, FileText, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

const stats = [
  { icon: FolderOpen, value: "5+", label: "Projects", color: "text-primary" },
  { icon: Award, value: "1", label: "Patent", color: "text-secondary" },
  { icon: FileText, value: "1", label: "Research Paper", color: "text-accent" },
];

const roles = ["DATA SCIENTIST", "MACHINE LEARNING", "DEEP LEARNING"];

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: `linear-gradient(95deg, #a748f5 25%, transparent 25%) -50px 0,
          linear-gradient(-15deg, #a748f5 25%, transparent 25%) -50px 0,
          linear-gradient(25deg, transparent 75%, #a748f5 75%) -50px 0,
          linear-gradient(-45deg, transparent 75%, #a748f5 75%) -50px 0,
          linear-gradient(-15deg, transparent 75%, #a748f5 75%) -50px 0`,
        backgroundColor: '#b669fd',
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="space-y-10">
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-subtle text-sm font-medium h-9 overflow-hidden">
            <Sparkles size={14} className="text-primary shrink-0" />
            <span className="text-primary font-mono tracking-widest whitespace-nowrap">
              {displayText}
              <span className="inline-block w-[2px] h-4 bg-primary ml-0.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] tracking-tight">
              Hi, I am{" "}
              <span className="text-gradient animate-gradient">Sebin S</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming complex data into actionable insights through Machine Learning, Deep Learning, and innovative AI solutions.
            </p>
          </div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-center gap-12 md:gap-20">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl glass-subtle flex items-center justify-center group-hover:border-primary/30 transition-all duration-500">
                  <stat.icon className={stat.color} size={22} />
                </div>
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button onClick={scrollToProjects} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 rounded-2xl shadow-glow hover:shadow-[0_0_40px_hsl(210_100%_60%/0.3)] transition-all duration-500 group">
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={scrollToContact} size="lg" variant="outline" className="font-semibold text-base px-8 py-6 rounded-2xl border-border/60 hover:bg-muted/30 transition-all duration-500">
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="font-semibold text-base px-8 py-6 rounded-2xl border-primary/20 text-primary hover:bg-primary/5 transition-all duration-500" asChild>
              <a href="https://drive.google.com/drive/folders/1sHTdch-tyl_7__Iq0KvuVEchrvteGOjX?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download size={16} />
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};
