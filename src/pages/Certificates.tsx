import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import certificatesBg from "@/assets/certificates-bg.jpg";

import aiml from "@/assets/certificates/AIML.jpg";
import dataViz from "@/assets/certificates/Data_Visualization.jpg";
import ethicalHacking from "@/assets/certificates/Ethical_Hacking.png";
import git from "@/assets/certificates/Git.png";
import ijcrt from "@/assets/certificates/IJCRT_Publication.jpg";
import mysql from "@/assets/certificates/MySQL.png";
import powerBI from "@/assets/certificates/Power_BI.png";
import patent from "@/assets/certificates/Patent.jpg";
import python from "@/assets/certificates/Python.jpg";

const certificates = [
  { title: "AI & Machine Learning", issuer: "Infosys Springboard", date: "May 2025", image: aiml },
  { title: "IJCRT Research Publication", issuer: "IJCRT Journal", date: "Nov 2024", image: ijcrt },
  { title: "Smart Dustbin Patent", issuer: "Indian Patent Office", date: "Feb 2025", image: patent },
  { title: "Python for Beginners", issuer: "Udemy", date: "Oct 2024", image: python },
  { title: "Data Visualization with Matplotlib", issuer: "GUVI / HCL", date: "Jun 2025", image: dataViz },
  { title: "Ethical Hacking for Beginners", issuer: "GUVI / HCL", date: "Feb 2025", image: ethicalHacking },
  { title: "GIT", issuer: "GUVI / HCL", date: "Oct 2025", image: git },
  { title: "MySQL", issuer: "GUVI / HCL", date: "Oct 2025", image: mysql },
  { title: "Advanced Data Visualization – Power BI", issuer: "GUVI / HCL", date: "Oct 2025", image: powerBI },
];

const Certificates = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: `url(${certificatesBg})` }} />
      <div className="fixed inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/60" />
      <div className="relative z-10">
      <Navigation />
      {/* Grid */}
      <div className="container mx-auto max-w-6xl px-6 pt-32 pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase text-center mb-3">Achievements</p>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Certificates & <span className="text-gradient animate-gradient">Publications</span>
          </h1>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Course completions, research publications, and patent filings.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setSelected(i)}
              className="glass rounded-3xl overflow-hidden cursor-pointer hover-lift group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-xs text-primary font-mono flex items-center gap-1"><ExternalLink size={12} /> View Full</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground text-sm mb-1 line-clamp-1">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </Button>
              <div className="glass rounded-3xl overflow-hidden">
                <img
                  src={certificates[selected].image}
                  alt={certificates[selected].title}
                  className="w-full h-auto max-h-[75vh] object-contain bg-card"
                />
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{certificates[selected].title}</h3>
                    <p className="text-sm text-muted-foreground">{certificates[selected].issuer} · {certificates[selected].date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default Certificates;
