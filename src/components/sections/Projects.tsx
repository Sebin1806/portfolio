import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import projectsBackground from "@/assets/projects-bg.jpg";

const projects = [
  {
    title: "AI Healthcare Chatbot",
    description: "An intelligent healthcare chatbot powered by AI to assist users with medical queries and health-related information.",
    tags: ["Python", "NLP", "AI", "Healthcare"],
    github: "https://github.com/Sebin1806/AI-Healthcare-Chatbot",
  },
  {
    title: "Multi-Agent Data Analysis System",
    description: "A multi-agent data analysis system built with CrewAI for collaborative and automated data insights.",
    tags: ["CrewAI", "Python", "Multi-Agent", "Data Analysis"],
    github: "http://github.com/Sebin1806/Multi-Agent-Data-Analysis-System-with-CrewAI",
  },
  {
    title: "Email Spam Shield",
    description: "A machine learning-based email spam detection system to classify and filter spam emails effectively.",
    tags: ["Python", "ML", "NLP", "Classification"],
    github: "https://github.com/Sebin1806/Email-spam-shield",
  },
  {
    title: "Dragonball OpenCV",
    description: "A computer vision project using OpenCV for Dragon Ball themed image processing and detection.",
    tags: ["Python", "OpenCV", "Computer Vision", "Deep Learning"],
    github: "https://github.com/Sebin1806/Dragon-Ball",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{ backgroundImage: `url(${projectsBackground})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 section-pattern" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase text-center mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Featured <span className="text-gradient animate-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-20 max-w-xl mx-auto">
            Showcasing AI & ML solutions that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-3xl p-7 hover-lift group flex flex-col"
            >
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary via-secondary to-accent mb-6 group-hover:w-full transition-all duration-700" />
              
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-2.5 py-1 text-xs bg-primary/5 text-primary/70 rounded-md border border-primary/10 font-mono">{tag}</span>
                ))}
              </div>

              <div className="flex gap-4 pt-2 border-t border-border/30">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium group/link">
                  <Github size={14} />
                  Code
                  <ArrowUpRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors font-medium group/link">
                  <ExternalLink size={14} />
                  Demo
                  <ArrowUpRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
