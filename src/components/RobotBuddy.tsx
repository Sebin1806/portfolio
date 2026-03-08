import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const activities = [
  { emoji: "💻", label: "Coding..." },
  { emoji: "🤖", label: "Thinking..." },
  { emoji: "📧", label: "Send me a message!" },
  { emoji: "🎮", label: "Playing..." },
  { emoji: "☕", label: "Coffee break!" },
  { emoji: "🧠", label: "Learning AI..." },
];

export const RobotBuddy = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activityIndex, setActivityIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition({
        x: Math.random() * 60 - 30,
        y: Math.random() * 20 - 10,
      });
    }, 3000);

    const activityInterval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => {
      clearInterval(moveInterval);
      clearInterval(activityInterval);
    };
  }, []);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="relative cursor-pointer select-none"
      onClick={() => {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 1500);
      }}
    >
      {/* Speech bubble */}
      <motion.div
        key={activityIndex}
        initial={{ opacity: 0, y: 5, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap glass-subtle rounded-xl px-3 py-1.5 text-xs text-muted-foreground font-medium"
      >
        <span className="mr-1">{activities[activityIndex].emoji}</span>
        {activities[activityIndex].label}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card/30 border border-border/20 rotate-45" />
      </motion.div>

      {/* Robot body */}
      <div className="relative w-20 h-24">
        {/* Antenna */}
        <motion.div
          animate={{ rotate: isWaving ? [0, 15, -15, 0] : 0 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_hsl(210_100%_60%/0.6)]" />
          <div className="w-0.5 h-3 bg-muted-foreground/40" />
        </motion.div>

        {/* Head */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-14 h-11 rounded-xl bg-gradient-to-b from-muted/80 to-muted/50 border border-border/50 flex items-center justify-center gap-2.5 overflow-hidden">
          {/* Eyes */}
          <motion.div
            animate={isWaving ? { scaleY: [1, 0.1, 1] } : { scaleY: [1, 0.1, 1] }}
            transition={isWaving ? { duration: 0.3 } : { duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            className="w-2.5 h-3 rounded-full bg-primary shadow-[0_0_6px_hsl(210_100%_60%/0.5)]"
          />
          <motion.div
            animate={isWaving ? { scaleY: [1, 0.1, 1] } : { scaleY: [1, 0.1, 1] }}
            transition={isWaving ? { duration: 0.3 } : { duration: 0.2, repeat: Infinity, repeatDelay: 3, delay: 0.05 }}
            className="w-2.5 h-3 rounded-full bg-primary shadow-[0_0_6px_hsl(210_100%_60%/0.5)]"
          />
          {/* Mouth */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1.5 rounded-full bg-accent/40" />
        </div>

        {/* Body */}
        <div className="absolute top-[3.8rem] left-1/2 -translate-x-1/2 w-12 h-9 rounded-lg bg-gradient-to-b from-muted/70 to-muted/40 border border-border/40 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-secondary/50 animate-pulse" />
        </div>

        {/* Left arm */}
        <motion.div
          animate={isWaving ? { rotate: [0, -40, -20, -40, 0] } : { rotate: [0, -5, 0] }}
          transition={isWaving ? { duration: 1.2 } : { duration: 2, repeat: Infinity }}
          style={{ originX: 1, originY: 0 }}
          className="absolute top-[4rem] left-0.5 w-2 h-6 rounded-full bg-muted-foreground/30"
        />

        {/* Right arm */}
        <motion.div
          animate={isWaving ? { rotate: [0, 40, 20, 40, 0] } : { rotate: [0, 5, 0] }}
          transition={isWaving ? { duration: 1.2 } : { duration: 2, repeat: Infinity, delay: 0.5 }}
          style={{ originX: 0, originY: 0 }}
          className="absolute top-[4rem] right-0.5 w-2 h-6 rounded-full bg-muted-foreground/30"
        />

        {/* Legs */}
        <motion.div
          animate={{ rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-0 left-[1.1rem] w-2 h-4 rounded-b-lg bg-muted-foreground/30"
        />
        <motion.div
          animate={{ rotate: [0, -3, 0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="absolute bottom-0 right-[1.1rem] w-2 h-4 rounded-b-lg bg-muted-foreground/30"
        />

        {/* Shadow */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-primary/10 blur-sm" />
      </div>
    </motion.div>
  );
};
