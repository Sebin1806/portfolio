import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      {/* Content */}
      <div className="container mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-3xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
          Creative professional passionate about building beautiful and functional experiences
        </p>
        <div className="pt-8">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-6 shadow-glow hover:scale-105 transition-all"
          >
            Learn More
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
