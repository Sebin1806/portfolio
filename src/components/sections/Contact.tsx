import { Mail, Phone, Github, Linkedin, Code2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${contactBackground})` }}
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
            Open to collaborations, research opportunities, and interesting projects
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="glass rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </a>
            ))}
          </motion.div>

          {/* Send Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-glow hover:shadow-glow transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:hello@example.com">
                <Send size={18} />
                Send Me an Email
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-xl border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all hover:scale-110 hover:shadow-glow"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon size={20} />
                </a>
              </Button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
