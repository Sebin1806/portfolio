import { ArrowDown, Download, FolderOpen, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const stats = [
  { icon: FolderOpen, value: "5+", label: "Projects" },
  { icon: Award, value: "1", label: "Patent" },
  { icon: FileText, value: "1", label: "Research Paper" },
];

export const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      <div className="container mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-3xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
          Creative professional passionate about building beautiful and functional experiences
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 pt-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <stat.icon className="text-primary" size={24} />
              </div>
              <span className="text-3xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 pt-6">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-6 shadow-glow hover:scale-105 transition-all"
          >
            Learn More
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold text-lg px-10 py-6 hover:scale-105 transition-all border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://drive.google.com/drive/folders/1sHTdch-tyl_7__Iq0KvuVEchrvteGOjX?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Download size={20} />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-foreground/70 hover:text-primary transition-colors z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={36} />
      </button>
    </section>
  );
};
