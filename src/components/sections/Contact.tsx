import { Mail, Phone, Github, Linkedin, Code2, Send, ArrowUpRight, User, MessageSquare } from "lucide-react";
import { RobotBuddy } from "@/components/RobotBuddy";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio Contact from ${name.trim()}`);
    const body = encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`);
    window.open(`mailto:sebinsebin180606@gmail.com?subject=${subject}&body=${body}`, "_self");
    setTimeout(() => {
      setSending(false);
      setName("");
      setEmail("");
      setMessage("");
      toast({ title: "Email client opened!", description: "Send the email to complete your message." });
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: `url(${contactBackground})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/60" />
      <div className="absolute inset-0 section-pattern" />

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

        <div className="space-y-16">
          {/* Contact Cards */}
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

          {/* Robot buddy */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <RobotBuddy />
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                  Let's Connect & Build <span className="text-gradient animate-gradient">Something Amazing</span>
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-8">Drop me a message and I'll get back to you soon.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={100}
                      className="pl-11 py-6 rounded-2xl bg-background/50 border-border/40 text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={255}
                      className="pl-11 py-6 rounded-2xl bg-background/50 border-border/40 text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <Textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={1000}
                    rows={5}
                    className="rounded-2xl bg-background/50 border-border/40 text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:ring-primary/20 transition-all resize-none"
                  />
                  <Button
                    type="submit"
                    disabled={sending}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base py-6 rounded-2xl shadow-glow hover:shadow-[0_0_40px_hsl(210_100%_60%/0.3)] transition-all duration-500 uppercase tracking-wider"
                  >
                    {sending ? "Opening..." : "Submit"}
                    {!sending && <Send size={16} />}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};