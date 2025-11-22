import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactBackground from "@/assets/contact-bg.jpg";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Sebin1806" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sebin-s-098bb62ab/" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/Sebin_S/" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${contactBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In Touch
        </h2>
        <div className="space-y-8">
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:shadow-md hover:border-primary transition-all"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4 pt-6">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon size={20} />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
