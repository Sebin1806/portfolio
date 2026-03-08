import { motion, AnimatePresence } from "framer-motion";
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
      const newAct = activities[i];
      setActivity(newAct);

      // Move robot across
      const newX = Math.random() * 300 - 150;
      setFacingRight(newX > posX);
      setPosX(newX);
    }, 3500);

    return () => clearInterval(interval);
  }, [posX]);

  const activityLabel: Record<Activity, string> = {
    idle: "👋 Hey there!",
    coding: "💻 Coding...",
    playing: "⚽ Playing!",
    waving: "🤗 Hello!",
    dancing: "🎵 Vibing!",
    thinking: "🧠 Thinking...",
  };

  return (
    <div className="relative w-full h-48 overflow-hidden">
      <motion.div
        animate={{ x: posX }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ scaleX: facingRight ? 1 : -1 }}
      >
        {/* Speech bubble - always readable */}
        <motion.div
          key={activity}
          initial={{ opacity: 0, y: 8, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap glass-subtle rounded-xl px-3 py-1.5 text-xs text-muted-foreground font-medium z-10"
          style={{ scaleX: facingRight ? 1 : -1 }}
        >
          {activityLabel[activity]}
        </motion.div>

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
            cx="38" cy="32"
            rx="5" ry={activity === "thinking" ? "2" : "5"}
            className="fill-primary"
            animate={
              activity === "waving"
                ? { ry: [5, 1, 5], cy: [32, 32, 32] }
                : activity === "coding"
                ? { cx: [38, 40, 38] }
                : {}
            }
            transition={{ duration: 0.8, repeat: activity === "waving" ? 3 : activity === "coding" ? Infinity : 0, repeatDelay: 0.3 }}
            filter="url(#glow)"
          />
          <motion.ellipse
            cx="62" cy="32"
            rx="5" ry={activity === "thinking" ? "2" : "5"}
            className="fill-primary"
            animate={
              activity === "waving"
                ? { ry: [5, 1, 5] }
                : activity === "coding"
                ? { cx: [62, 64, 62] }
                : {}
            }
            transition={{ duration: 0.8, repeat: activity === "waving" ? 3 : activity === "coding" ? Infinity : 0, repeatDelay: 0.3 }}
            filter="url(#glow)"
          />

          {/* Mouth */}
          <motion.path
            d={activity === "dancing" || activity === "playing" ? "M 40 44 Q 50 52 60 44" : activity === "thinking" ? "M 42 46 L 58 46" : "M 40 44 Q 50 50 60 44"}
            fill="none"
            className="stroke-accent/60"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Body */}
          <rect x="30" y="58" width="40" height="32" rx="8" className="fill-muted/60 stroke-border/40" strokeWidth="1" />
          {/* Chest light */}
          <motion.circle
            cx="50" cy="72"
            r="5"
            className="fill-secondary/50"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Left Arm */}
          <motion.g
            animate={
              activity === "waving"
                ? { rotate: [0, -50, -30, -50, -30, 0] }
                : activity === "coding"
                ? { rotate: [0, -25, -15, -25, -15, 0] }
                : activity === "dancing"
                ? { rotate: [0, -30, 10, -30, 0] }
                : { rotate: [0, -5, 0] }
            }
            transition={{
              duration: activity === "waving" ? 1.8 : activity === "coding" ? 0.8 : 2,
              repeat: activity === "idle" ? Infinity : (activity === "coding" || activity === "dancing") ? Infinity : 1,
              repeatDelay: activity === "idle" ? 1 : 0,
            }}
            style={{ transformOrigin: "28px 62px" }}
          >
            <rect x="14" y="60" width="14" height="6" rx="3" className="fill-muted-foreground/35" />
            <rect x="8" y="58" width="8" height="10" rx="4" className="fill-muted-foreground/25" />
          </motion.g>

          {/* Right Arm */}
          <motion.g
            animate={
              activity === "coding"
                ? { rotate: [0, 25, 15, 25, 15, 0] }
                : activity === "playing"
                ? { rotate: [0, 30, -10, 30, 0] }
                : activity === "dancing"
                ? { rotate: [0, 30, -10, 30, 0] }
                : { rotate: [0, 5, 0] }
            }
            transition={{
              duration: activity === "coding" ? 0.6 : 2,
              repeat: (activity === "coding" || activity === "playing" || activity === "dancing") ? Infinity : Infinity,
              repeatDelay: activity === "idle" ? 1 : 0,
            }}
            style={{ transformOrigin: "72px 62px" }}
          >
            <rect x="72" y="60" width="14" height="6" rx="3" className="fill-muted-foreground/35" />
            <rect x="84" y="58" width="8" height="10" rx="4" className="fill-muted-foreground/25" />
          </motion.g>

          {/* Left Leg */}
          <motion.rect
            x="34" y="90" width="10" height="18" rx="4"
            className="fill-muted-foreground/35"
            animate={
              activity === "dancing"
                ? { rotate: [0, -15, 10, -15, 0] }
                : activity === "playing"
                ? { rotate: [0, -20, 20, -20, 0] }
                : { rotate: 0 }
            }
            transition={{ duration: 0.6, repeat: (activity === "dancing" || activity === "playing") ? Infinity : 0 }}
            style={{ transformOrigin: "39px 90px" }}
          />
          {/* Right Leg */}
          <motion.rect
            x="56" y="90" width="10" height="18" rx="4"
            className="fill-muted-foreground/35"
            animate={
              activity === "dancing"
                ? { rotate: [0, 15, -10, 15, 0] }
                : activity === "playing"
                ? { rotate: [0, 20, -20, 20, 0] }
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

          {/* Glow filter */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Activity props */}
        <AnimatePresence>
          {activity === "coding" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute bottom-6 -right-10"
            >
              {/* Laptop */}
              <svg width="40" height="30" viewBox="0 0 40 30">
                <rect x="2" y="0" width="36" height="22" rx="3" className="fill-muted/80 stroke-border/50" strokeWidth="1" />
                <rect x="6" y="3" width="28" height="16" rx="1" className="fill-primary/15" />
                {/* Screen content lines */}
                <motion.rect x="9" y="6" width="14" height="1.5" rx="0.5" className="fill-primary/40"
                  animate={{ width: [8, 18, 12] }} transition={{ duration: 1, repeat: Infinity }} />
                <motion.rect x="9" y="10" width="10" height="1.5" rx="0.5" className="fill-accent/30"
                  animate={{ width: [12, 8, 16] }} transition={{ duration: 1.2, repeat: Infinity }} />
                <motion.rect x="9" y="14" width="16" height="1.5" rx="0.5" className="fill-secondary/30"
                  animate={{ width: [6, 14, 10] }} transition={{ duration: 0.9, repeat: Infinity }} />
                <rect x="0" y="22" width="40" height="4" rx="2" className="fill-muted-foreground/30" />
              </svg>
            </motion.div>
          )}

          {activity === "playing" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute bottom-12 -right-8"
            >
              {/* Football */}
              <motion.svg width="24" height="24" viewBox="0 0 24 24"
                animate={{ y: [-4, -20, -4], rotate: [0, 180, 360] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx="12" cy="12" r="10" fill="white" stroke="#333" strokeWidth="1.5" />
                <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z" fill="none" stroke="#333" strokeWidth="0.8" />
              </motion.svg>
            </motion.div>
          )}

          {activity === "thinking" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-2 -right-6"
            >
              <motion.div
                animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-lg"
              >
                💡
              </motion.div>
            </motion.div>
          )}

          {activity === "dancing" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -top-4 -right-4"
            >
              <motion.div animate={{ rotate: [0, 15, -15, 0], y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
                🎵
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
