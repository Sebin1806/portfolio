import { ExternalLink, Github } from "lucide-react";
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
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${projectsBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 section-pattern" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
            Showcasing AI & ML solutions that solve real problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              {/* Header with gradient line */}
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary mb-5 group-hover:w-full transition-all duration-500" />
              
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  <Github size={14} />
                  Code
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors font-medium"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
