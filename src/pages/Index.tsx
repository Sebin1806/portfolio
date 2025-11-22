import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ImportantDates } from "@/components/sections/ImportantDates";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ImportantDates />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground bg-muted/30">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
