import { Code, Database, Layout, Server, GitBranch, Palette } from "lucide-react";
import skillsBackground from "@/assets/skills-bg.jpg";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "Python", "REST APIs", "GraphQL", "Express"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  },
  {
    icon: GitBranch,
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
  },
  {
    icon: Layout,
    title: "Design & UI/UX",
    skills: ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping"],
  },
  {
    icon: Palette,
    title: "Other Skills",
    skills: ["Agile/Scrum", "Problem Solving", "Team Collaboration", "Testing", "Documentation"],
  },
];

export const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${skillsBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
