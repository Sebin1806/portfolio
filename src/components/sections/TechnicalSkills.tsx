import { Code, Database, Layout, Server, GitBranch, Brain } from "lucide-react";
import { motion } from "framer-motion";
import skillsBackground from "@/assets/skills-bg.jpg";

const skillCategories = [
  { icon: Code, title: "Programming", skills: ["Python", "R", "SQL", "JavaScript", "TypeScript", "C++"] },
  { icon: Brain, title: "Machine Learning", skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost", "LightGBM"] },
  { icon: Database, title: "Data Science", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Feature Engineering"] },
  { icon: Server, title: "Deep Learning", skills: ["CNNs", "RNNs", "Transformers", "GANs", "NLP", "Computer Vision"] },
  { icon: GitBranch, title: "Tools & DevOps", skills: ["Git", "Docker", "AWS", "MLflow", "Streamlit", "FastAPI"] },
  { icon: Layout, title: "Visualization", skills: ["Tableau", "Power BI", "Plotly", "D3.js", "Dash", "Streamlit"] },
];

export const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8" style={{ backgroundImage: `url(${skillsBackground})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/97 to-background" />
      <div className="absolute inset-0 section-pattern" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase text-center mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Technical <span className="text-gradient animate-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-20 max-w-xl mx-auto">
            Core competencies spanning the full AI & Data Science stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-3xl p-7 hover-lift group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-500">
                  <cat.icon className="text-primary" size={18} />
                </div>
                <h3 className="text-base font-bold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1.5 bg-muted/40 text-muted-foreground text-xs rounded-lg border border-border/30 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 font-medium cursor-default">
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
