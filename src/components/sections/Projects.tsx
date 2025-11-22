import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import projectsBackground from "@/assets/projects-bg.jpg";

const projects = [
  {
    title: "Project Alpha",
    description: "A comprehensive solution for modern web applications with focus on performance and user experience.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Beta",
    description: "Innovative approach to solving complex problems with elegant and maintainable code.",
    tags: ["Node.js", "API", "Database"],
  },
  {
    title: "Project Gamma",
    description: "Creative design system that brings consistency and beauty to digital products.",
    tags: ["Design", "UI/UX", "Components"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${projectsBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <ExternalLink size={18} className="text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
