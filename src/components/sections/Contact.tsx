import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In Touch
        </h2>
        <div className="space-y-8">
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </div>
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
                <a href={social.href} aria-label={social.label}>
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
