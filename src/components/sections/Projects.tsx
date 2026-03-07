import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import projectsBackground from "@/assets/projects-bg.jpg";

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "An intelligent conversational agent using NLP and Transformer architecture for automated customer support.",
    tags: ["Python", "Transformers", "NLP", "FastAPI"],
    github: "https://github.com/Sebin1806",
  },
  {
    title: "Image Classification System",
    description: "Deep learning model for multi-class image classification with 95%+ accuracy using CNNs and transfer learning.",
    tags: ["PyTorch", "CNN", "Transfer Learning", "OpenCV"],
    github: "https://github.com/Sebin1806",
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "End-to-end data pipeline with interactive visualizations for business intelligence and forecasting.",
    tags: ["Python", "Streamlit", "Pandas", "Plotly"],
    github: "https://github.com/Sebin1806",
  },
  {
    title: "Sentiment Analysis Engine",
    description: "Real-time sentiment analysis tool processing social media data using BERT and ensemble methods.",
    tags: ["BERT", "NLP", "Scikit-learn", "Flask"],
    github: "https://github.com/Sebin1806",
  },
  {
    title: "Recommendation System",
    description: "Collaborative filtering and content-based recommendation engine for personalized user experiences.",
    tags: ["Python", "TensorFlow", "Matrix Factorization", "APIs"],
    github: "https://github.com/Sebin1806",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8" style={{ backgroundImage: `url(${projectsBackground})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/97 to-background" />
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
