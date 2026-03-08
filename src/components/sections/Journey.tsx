import { Rocket, FileText, Award, Code } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    icon: Code,
    year: "2023",
    title: "Started Programming Journey",
    description: "Began learning programming languages and building a foundation in computer science and software development.",
  },
  {
    icon: Award,
    year: "2024",
    title: "Patent Filed – Smart Dustbin",
    description: "Title of the invention: Smart Dustbin System with Automated Dust Collection, Waste Management, and IoT Integration.",
  },
  {
    icon: FileText,
    year: "2024",
    title: "First Research Publication",
    description: "Published cybersecurity analysis paper in IJCRT. Deep dive into ML and NLP.",
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute inset-0 section-pattern" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase text-center mb-3">Timeline</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            My <span className="text-gradient animate-gradient">Journey</span>
          </h2>
          <p className="text-center text-muted-foreground mb-20 max-w-xl mx-auto">
            Key milestones and achievements along my path in tech.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 group-hover:border-primary/40 transition-all duration-500">
                    <item.icon size={20} />
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-border to-transparent mt-4" />}
                </div>

                <div className="glass rounded-3xl p-7 flex-1 mb-2 hover-lift">
                  <span className="text-xs font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full">{item.year}</span>
                  <h3 className="text-xl font-bold text-foreground mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
