import { GraduationCap, BookOpen, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "College",
    year: "2023 - 2027",
    description: "Pursuing B.Tech specializing in Artificial Intelligence and Data Science, building expertise in ML, deep learning, and data analytics.",
    achievements: ["AI & DS Major", "Projects in ML & NLP", "Active Learner"],
  },
  {
    icon: BookOpen,
    degree: "12th Grade (Higher Secondary)",
    institution: "School",
    year: "2022 - 2023",
    description: "Completed higher secondary education with a focus on science and mathematics, building a strong foundation for engineering studies.",
    achievements: ["Science Stream", "Mathematics", "Computer Science"],
  },
];

export const EducationHistory = () => {
  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase text-center mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Education & <span className="text-gradient animate-gradient">Certifications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-20 max-w-xl mx-auto">
            Academic journey and continuous learning in AI & Data Science.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-6 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 group-hover:border-primary/40 transition-all duration-500">
                  <item.icon size={20} />
                </div>
                {i < education.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-border to-transparent mt-4" />}
              </div>

              <div className="glass rounded-3xl p-7 flex-1 mb-2 hover-lift">
                <span className="text-xs font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full">{item.year}</span>
                <h3 className="text-xl font-bold text-foreground mt-3 mb-1">{item.degree}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.institution}</p>
                <p className="text-sm text-foreground/65 mb-5 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((a, j) => (
                    <span key={j} className="px-3 py-1 bg-accent/5 text-accent/80 text-xs rounded-lg border border-accent/10 font-medium">{a}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex justify-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-2xl shadow-glow transition-all duration-500 group" asChild>
            <Link to="/certificates">
              <Award size={16} />
              View All Certificates
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
