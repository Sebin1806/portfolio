import { Mail, Phone, Github, Linkedin, Code2, User } from "lucide-react";
import { RobotBuddy } from "@/components/RobotBuddy";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactCards = [
  { icon: Mail, label: "EMAIL", id: "sebinsebin180606@gmail.com", href: "mailto:sebinsebin180606@gmail.com", prompt: "✉" },
  { icon: Phone, label: "PHONE", id: "+91 93428 13276", href: "tel:+919342813276", prompt: "📞" },
  { icon: Github, label: "GITHUB", id: "Sebin1806", href: "https://github.com/Sebin1806", prompt: "⌨" },
  { icon: Linkedin, label: "LINKEDIN", id: "Sebin S", href: "https://www.linkedin.com/in/sebin-s-098bb62ab/", prompt: "🔗" },
  { icon: Code2, label: "LEETCODE", id: "Sebin_S", href: "https://leetcode.com/u/Sebin_S/", prompt: "💻" },
];

const UvCard = ({ card }: { card: typeof contactCards[0] }) => (
  <a
    href={card.href}
    target={card.label === "EMAIL" || card.label === "PHONE" ? "_self" : "_blank"}
    rel="noopener noreferrer"
    className="uv-card-container noselect"
  >
    <div className="uv-card">
      <div className="card-content">
        <div className="uv-prompt">{card.prompt}</div>
        <div className="uv-title">{card.label}</div>
        <div className="uv-subtitle">
          <span className="uv-highlight">{card.id}</span>
        </div>
        <div className="glowing-elements">
          <div className="glow-1"></div>
          <div className="glow-2"></div>
          <div className="glow-3"></div>
        </div>
        <div className="card-particles">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>
        <div className="card-glare"></div>
        <div className="cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="corner-elements">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="scan-line"></div>
      </div>
    </div>
  </a>
);

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
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase text-center mb-3">Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Get In <span className="text-gradient animate-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Open to collaborations, research opportunities, and interesting projects.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* 3D Tilt Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {contactCards.map((card, i) => (
              <UvCard key={i} card={card} />
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
                  <button
                    type="submit"
                    disabled={sending}
                    className="group w-full flex items-center justify-center text-xl font-inherit text-primary-foreground py-[0.7em] px-[1em] pl-[0.9em] border-none rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                    style={{ background: "hsl(var(--primary))", fontFamily: "inherit", fontSize: "20px" }}
                  >
                    <div className="svg-wrapper transition-transform duration-300 group-hover:animate-[fly-1_0.6s_ease-in-out_infinite_alternate]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                        className="block transition-transform duration-300 group-hover:translate-x-[1.2em] group-hover:rotate-45 group-hover:scale-110"
                        style={{ transformOrigin: "center center" }}>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                      </svg>
                    </div>
                    <span className="block ml-[0.3em] transition-all duration-300 ease-in-out group-hover:translate-x-[5em]">
                      {sending ? "Opening..." : "Send"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
