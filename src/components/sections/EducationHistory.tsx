import { GraduationCap, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import educationBackground from "@/assets/education-bg.jpg";

const education = [
  {
    icon: GraduationCap,
    degree: "Master of Computer Science",
    institution: "University of Technology",
    year: "2020 - 2022",
    description: "Specialized in Artificial Intelligence and Machine Learning. Conducted research in NLP and Deep Learning.",
    achievements: ["GPA: 3.9/4.0", "Dean's List", "Research Assistant"],
  },
  {
    icon: BookOpen,
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    year: "2016 - 2020",
    description: "Strong foundation in algorithms, data structures, and statistical methods for data science.",
    achievements: ["Cum Laude", "Hackathon Winner", "AI Club President"],
  },
  {
    icon: Award,
    degree: "Professional Certifications",
    institution: "Various Platforms",
    year: "2020 - Present",
    description: "Continuous learning in AI/ML through industry certifications and specialized courses.",
    achievements: ["AWS ML Specialty", "TensorFlow Developer", "Deep Learning Specialization"],
  },
];

export const EducationHistory = () => {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${educationBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 section-pattern" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
            Academic journey and continuous learning
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex gap-6 group"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground shrink-0 shadow-glow group-hover:scale-110 transition-transform">
                  <item.icon size={20} />
                </div>
                {index < education.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent mt-3" />
                )}
              </div>

              {/* Content Card */}
              <div className="glass rounded-2xl p-6 flex-1 mb-2 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.degree}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.institution}</p>
                <p className="text-sm text-foreground/70 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-lg border border-accent/20 font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
