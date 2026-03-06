import { ArrowDown, Download, FolderOpen, Award, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-bg.jpg";

const stats = [
  { icon: FolderOpen, value: "5+", label: "Projects" },
  { icon: Award, value: "1", label: "Patent" },
  { icon: FileText, value: "1", label: "Research Paper" },
];

export const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 section-pattern" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium"
          >
            <Sparkles size={16} />
            AI & Data Science Enthusiast
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1]">
            Building{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Intelligent
            </span>
            <br />
            Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights through Machine Learning, 
            Deep Learning, and innovative AI solutions.
          </p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-8 md:gap-16 pt-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <stat.icon className="text-primary" size={22} />
                </div>
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 rounded-xl shadow-glow hover:shadow-glow transition-all hover:scale-105"
            >
              View Projects
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="font-semibold text-base px-8 py-6 rounded-xl border-border hover:bg-muted/50 hover:scale-105 transition-all"
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold text-base px-8 py-6 rounded-xl border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all"
              asChild
            >
              <a href="https://drive.google.com/drive/folders/1sHTdch-tyl_7__Iq0KvuVEchrvteGOjX?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </motion.button>
    </section>
  );
};
