import { Brain, Database, LineChart, Cpu, Zap, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Brain, label: "Machine Learning", desc: "Building predictive models" },
  { icon: Database, label: "Data Engineering", desc: "Scalable data pipelines" },
  { icon: LineChart, label: "Analytics", desc: "Data-driven insights" },
  { icon: Cpu, label: "Deep Learning", desc: "Neural architectures" },
  { icon: Zap, label: "NLP", desc: "Language understanding" },
  { icon: Code2, label: "Computer Vision", desc: "Image recognition" },
];

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase text-center mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About <span className="text-gradient animate-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-20 max-w-xl mx-auto">
            Passionate about turning data into intelligent solutions that make a real-world impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-8">
            <div className="glass rounded-3xl p-10 space-y-6 hover-lift">
              <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
              <p className="text-lg text-foreground/85 leading-relaxed">
                I'm an AI & Data Science enthusiast passionate about leveraging machine learning and deep learning to solve real-world problems. My journey in tech is driven by curiosity and a desire to build intelligent systems.
              </p>
              <p className="text-lg text-foreground/85 leading-relaxed">
                With hands-on experience in data analysis, model development, and research, I constantly explore cutting-edge techniques in NLP, Computer Vision, and Predictive Analytics.
              </p>
              <p className="text-lg text-foreground/85 leading-relaxed">
                I believe in the power of data-driven decision making and am always eager to collaborate on innovative projects that push the boundaries of AI.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                className="glass rounded-2xl p-6 flex flex-col gap-3 hover-lift group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-500">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{item.label}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
