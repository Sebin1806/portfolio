import { Code, Database, Layout, Server, GitBranch, Brain } from "lucide-react";
import { motion } from "framer-motion";
import skillsBackground from "@/assets/skills-bg.jpg";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    color: "from-primary to-primary/60",
    skills: ["Python", "R", "SQL", "JavaScript", "TypeScript", "C++"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    color: "from-secondary to-secondary/60",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost", "LightGBM"],
  },
  {
    icon: Database,
    title: "Data Science",
    color: "from-accent to-accent/60",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Feature Engineering"],
  },
  {
    icon: Server,
    title: "Deep Learning",
    color: "from-primary to-secondary",
    skills: ["CNNs", "RNNs", "Transformers", "GANs", "NLP", "Computer Vision"],
  },
  {
    icon: GitBranch,
    title: "Tools & DevOps",
    color: "from-secondary to-accent",
    skills: ["Git", "Docker", "AWS", "MLflow", "Streamlit", "FastAPI"],
  },
  {
    icon: Layout,
    title: "Visualization",
    color: "from-accent to-primary",
    skills: ["Tableau", "Power BI", "Plotly", "D3.js", "Dash", "Streamlit"],
  },
];

export const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${skillsBackground})` }}
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
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
            Core competencies in AI, ML, and Data Science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <category.icon className="text-foreground" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-muted/50 text-muted-foreground text-xs rounded-lg border border-border/50 hover:text-primary hover:border-primary/30 transition-colors font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
