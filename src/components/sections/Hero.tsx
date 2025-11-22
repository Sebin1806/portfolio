import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 py-20"
    >
      <div className="container mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Creative professional passionate about building beautiful and functional experiences
        </p>
        <div className="pt-6">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
