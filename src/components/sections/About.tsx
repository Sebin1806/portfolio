import { Brain, Database, LineChart, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import aboutBackground from "@/assets/about-bg.jpg";

const highlights = [
  { icon: Brain, label: "Machine Learning" },
  { icon: Database, label: "Data Engineering" },
  { icon: LineChart, label: "Analytics" },
  { icon: Cpu, label: "Deep Learning" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 section-pattern" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
            Passionate about turning data into intelligent solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass rounded-2xl p-8 space-y-5">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm an AI & Data Science enthusiast passionate about leveraging machine learning 
                and deep learning to solve real-world problems. My journey in tech is driven by 
                curiosity and a desire to build intelligent systems that make a meaningful impact.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                With hands-on experience in data analysis, model development, and research, 
                I constantly explore cutting-edge techniques in Natural Language Processing, 
                Computer Vision, and Predictive Analytics.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I believe in the power of data-driven decision making and am always eager 
                to collaborate on innovative projects that push the boundaries of AI.
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
