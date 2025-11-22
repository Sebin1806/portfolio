import { GraduationCap, Award, BookOpen } from "lucide-react";
import educationBackground from "@/assets/education-bg.jpg";

const education = [
  {
    icon: GraduationCap,
    degree: "Master of Computer Science",
    institution: "University of Technology",
    year: "2020 - 2022",
    description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
    achievements: ["GPA: 3.9/4.0", "Dean's List", "Research Assistant"],
  },
  {
    icon: BookOpen,
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    year: "2016 - 2020",
    description: "Comprehensive foundation in computer science principles and programming.",
    achievements: ["Cum Laude", "Student Council Member", "Hackathon Winner"],
  },
  {
    icon: Award,
    degree: "Professional Certifications",
    institution: "Various Platforms",
    year: "2020 - Present",
    description: "Continuous learning through industry-recognized certifications and courses.",
    achievements: ["AWS Certified Developer", "Google Cloud Professional", "MongoDB Certified"],
  },
];

export const EducationHistory = () => {
  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${educationBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 group hover:translate-x-2 transition-transform duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                  <item.icon size={20} />
                </div>
                {index < education.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-8 flex-1">
                <div className="text-primary font-bold text-sm mb-1">
                  {item.year}
                </div>
                <h3 className="text-2xl font-semibold mb-1">{item.degree}</h3>
                <p className="text-lg text-muted-foreground mb-2">{item.institution}</p>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <span
                      key={achievementIndex}
                      className="px-3 py-1 bg-accent/10 text-accent-foreground text-sm rounded-full border border-accent/20"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
