import { Mail, Phone, Github, Linkedin, Code2, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import contactBackground from "@/assets/contact-bg.jpg";

const contactInfo = [
  { icon: Mail, label: "Email", value: "sebinsebin180606@gmail.com", href: "mailto:sebinsebin180606@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9342813276", href: "tel:+919342813276" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Sebin1806" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sebin-s-098bb62ab/" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/Sebin_S/" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: `url(${contactBackground})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/97 to-background" />
      <div className="absolute inset-0 section-pattern" />

      {/* Ambient orbs */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/4 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase text-center mb-3">Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Get In <span className="text-gradient animate-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-20 max-w-xl mx-auto">
            Open to collaborations, research opportunities, and interesting projects.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* All Contact Cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {contactInfo.map((item, i) => (
              <a key={i} href={item.href}
                className="glass rounded-3xl p-8 flex flex-col items-center text-center hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-500">
                  <item.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </a>
            ))}
            {socialLinks.map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                className="glass rounded-3xl p-8 flex flex-col items-center text-center hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-500">
                  <social.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{social.label}</h3>
                <p className="text-sm text-muted-foreground">View Profile</p>
              </a>
            ))}
          </motion.div>

          {/* Send Email CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 rounded-2xl shadow-glow hover:shadow-[0_0_40px_hsl(210_100%_60%/0.3)] transition-all duration-500 group" asChild>
              <a href="mailto:sebinsebin180606@gmail.com">
                <Send size={16} />
                Send Me an Email
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
