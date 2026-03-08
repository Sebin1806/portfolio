import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Activity = "idle" | "coding" | "playing" | "waving" | "dancing" | "thinking";

export const RobotBuddy = () => {
  const [posX, setPosX] = useState(0);
  const [activity, setActivity] = useState<Activity>("idle");
  const [facingRight, setFacingRight] = useState(true);

  useEffect(() => {
    const activities: Activity[] = ["idle", "coding", "playing", "waving", "dancing", "thinking"];
    let i = 0;

    const interval = setInterval(() => {
      i = (i + 1) % activities.length;
      setActivity(activities[i]);
      const newX = Math.random() * 300 - 150;
      setFacingRight(newX > posX);
      setPosX(newX);
    }, 3500);

    return () => clearInterval(interval);
  }, [posX]);

  return (
    <div className="relative w-full h-40 overflow-hidden">
      <motion.div
        animate={{ x: posX }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ scaleX: facingRight ? 1 : -1 }}
      >
        <svg width="100" height="130" viewBox="0 0 100 130" className="drop-shadow-lg">
          {/* Antenna */}
          <motion.g
            animate={activity === "dancing" ? { rotate: [0, 20, -20, 0] } : { rotate: 0 }}
            transition={{ duration: 0.6, repeat: activity === "dancing" ? Infinity : 0 }}
            style={{ transformOrigin: "50px 18px" }}
          >
            <circle cx="50" cy="5" r="5" className="fill-primary" filter="url(#glow)" />
            <rect x="49" y="10" width="2" height="8" rx="1" className="fill-muted-foreground/40" />
          </motion.g>

          {/* Head */}
          <rect x="25" y="18" width="50" height="36" rx="10" className="fill-muted/70 stroke-border/50" strokeWidth="1" />

          {/* Eyes */}
          <motion.ellipse
            cx="38" cy="32" rx="5"
            ry={activity === "thinking" ? 2 : 5}
            className="fill-primary"
            animate={
              activity === "waving" ? { ry: [5, 1, 5] }
              : activity === "coding" ? { cx: [38, 40, 38] }
              : {}
            }
            transition={{ duration: 0.8, repeat: activity === "waving" ? 3 : activity === "coding" ? Infinity : 0, repeatDelay: 0.3 }}
            filter="url(#glow)"
          />
          <motion.ellipse
            cx="62" cy="32" rx="5"
            ry={activity === "thinking" ? 2 : 5}
            className="fill-primary"
            animate={
              activity === "waving" ? { ry: [5, 1, 5] }
              : activity === "coding" ? { cx: [62, 64, 62] }
              : {}
            }
            transition={{ duration: 0.8, repeat: activity === "waving" ? 3 : activity === "coding" ? Infinity : 0, repeatDelay: 0.3 }}
            filter="url(#glow)"
          />

          {/* Mouth */}
          <motion.path
            d={activity === "dancing" || activity === "playing" ? "M 40 44 Q 50 52 60 44" : activity === "thinking" ? "M 42 46 L 58 46" : "M 40 44 Q 50 50 60 44"}
            fill="none" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round"
          />

          {/* Body */}
          <rect x="30" y="58" width="40" height="32" rx="8" className="fill-muted/60 stroke-border/40" strokeWidth="1" />
          <motion.circle cx="50" cy="72" r="5" className="fill-secondary/50"
            animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Left Arm */}
          <motion.g
            animate={
              activity === "waving" ? { rotate: [0, -50, -30, -50, -30, 0] }
              : activity === "coding" ? { rotate: [0, -25, -15, -25, -15, 0] }
              : activity === "dancing" ? { rotate: [0, -30, 10, -30, 0] }
              : activity === "playing" ? { rotate: [0, -20, 0] }
              : { rotate: [0, -5, 0] }
            }
            transition={{ duration: activity === "coding" ? 0.8 : 2, repeat: Infinity, repeatDelay: activity === "idle" ? 1 : 0 }}
            style={{ transformOrigin: "28px 62px" }}
          >
            <rect x="14" y="60" width="14" height="6" rx="3" className="fill-muted-foreground/35" />
            <rect x="8" y="58" width="8" height="10" rx="4" className="fill-muted-foreground/25" />
          </motion.g>

          {/* Right Arm */}
          <motion.g
            animate={
              activity === "coding" ? { rotate: [0, 25, 15, 25, 15, 0] }
              : activity === "playing" ? { rotate: [0, 30, -10, 30, 0] }
              : activity === "dancing" ? { rotate: [0, 30, -10, 30, 0] }
              : { rotate: [0, 5, 0] }
            }
            transition={{ duration: activity === "coding" ? 0.6 : 2, repeat: Infinity, repeatDelay: activity === "idle" ? 1 : 0 }}
            style={{ transformOrigin: "72px 62px" }}
          >
            <rect x="72" y="60" width="14" height="6" rx="3" className="fill-muted-foreground/35" />
            <rect x="84" y="58" width="8" height="10" rx="4" className="fill-muted-foreground/25" />
          </motion.g>

          {/* Left Leg */}
          <motion.rect x="34" y="90" width="10" height="18" rx="4" className="fill-muted-foreground/35"
            animate={
              activity === "dancing" ? { rotate: [0, -15, 10, -15, 0] }
              : activity === "playing" ? { rotate: [0, -20, 20, -20, 0] }
              : { rotate: 0 }
            }
            transition={{ duration: 0.6, repeat: (activity === "dancing" || activity === "playing") ? Infinity : 0 }}
            style={{ transformOrigin: "39px 90px" }}
          />
          {/* Right Leg */}
          <motion.rect x="56" y="90" width="10" height="18" rx="4" className="fill-muted-foreground/35"
            animate={
              activity === "dancing" ? { rotate: [0, 15, -10, 15, 0] }
              : activity === "playing" ? { rotate: [0, 20, -20, 20, 0] }
              : { rotate: 0 }
            }
            transition={{ duration: 0.6, repeat: (activity === "dancing" || activity === "playing") ? Infinity : 0, delay: 0.15 }}
            style={{ transformOrigin: "61px 90px" }}
          />

          {/* Feet */}
          <rect x="30" y="106" width="16" height="6" rx="3" className="fill-muted-foreground/30" />
          <rect x="54" y="106" width="16" height="6" rx="3" className="fill-muted-foreground/30" />

          {/* Shadow */}
          <ellipse cx="50" cy="118" rx="22" ry="4" className="fill-primary/10" />

          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
