import React, { useEffect, useRef } from 'react';

// 1. SVG 1 Spec: Bright Shooting Laser Comet
interface LaserComet {
  id: number;
  x1: number;
  y1: number;
  length: number;
  speed: number;
  strokeWidth: number;
  headRadius: number;
  color: string;
  glowColor: string;
  shadowBlur: number;
}

// 2. SVG 2 Spec: Bright Animated Dotted Glowing Star Sphere
interface AnimatedDottedStar {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  coreRadius: number;
  outerRadius: number;
  baseOuterRadius: number;
  color: string;
  glowColor: string;
  opacity: number;
  baseOpacity: number;
  pulsePhase: number;
  pulseSpeed: number;
  vx: number;
  vy: number;
  expansionFactor: number;
  isPeripheral: boolean;
}

// 3. Cosmic Space Image Spec: Globular Cluster Micro-Star
interface ClusterStar {
  angle: number;
  distance: number;
  radius: number;
  speed: number;
  color: string;
  opacity: number;
}

export const ModernPortfolioBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // --- COLOR PALETTES FROM ALL SOURCES ---
    const laserColors = [
      { main: '#FF4D4D', glow: '#FF3333' }, // Coral Red
      { main: '#40E0d0', glow: '#00FFCC' }, // Turquoise/Green
      { main: '#4D88FF', glow: '#3377FF' }, // Sapphire Blue
      { main: '#FFFFFF', glow: '#FFFFFF' }  // Pure White
    ];

    const starColors = [
      { main: '#3333FF', glow: '#1A1AFF' }, // Blue
      { main: '#00FF66', glow: '#00FF33' }, // Neon Emerald
      { main: '#FF2A2A', glow: '#FF0000' }, // Crimson Red (from cosmic image)
      { main: '#FFFFFF', glow: '#FFFFFF' }, // Pure White
      { main: '#E6E6FF', glow: '#CCCCFF' }  // Lavender
    ];

    // Helper: Central reading zone check
    const isCentralReadingZone = (x: number, y: number, w: number, h: number) => {
      const normalizedX = (x - w / 2) / (w * 0.35);
      const normalizedY = (y - h / 2) / (h * 0.35);
      return normalizedX * normalizedX + normalizedY * normalizedY < 1.0;
    };

    // Helper: Peripheral border coordinate generator
    const generatePeripheralCoordinate = (w: number, h: number) => {
      const edge = Math.floor(Math.random() * 4);
      let x = 0;
      let y = 0;

      switch (edge) {
        case 0:
          x = Math.random() * w;
          y = Math.random() * (h * 0.26);
          break;
        case 1:
          x = Math.random() * w;
          y = h - Math.random() * (h * 0.28);
          break;
        case 2:
          x = Math.random() * (w * 0.26);
          y = Math.random() * h;
          break;
        case 3:
          x = w - Math.random() * (w * 0.26);
          y = Math.random() * h;
          break;
      }
      return { x, y };
    };

    // --- INITIALIZE SHOOTING LASER COMETS (SVG 1) ---
    const cometCount = Math.min(Math.floor((width * height) / 11000), 54);
    const comets: LaserComet[] = [];

    const createComet = (id: number, randomStart = false): LaserComet => {
      const colorObj = laserColors[Math.floor(Math.random() * laserColors.length)];
      const length = Math.random() * 160 + 80;

      let startX: number;
      let startY: number;

      if (randomStart) {
        const pt = generatePeripheralCoordinate(width, height);
        startX = pt.x;
        startY = pt.y;
      } else {
        const side = Math.random();
        if (side < 0.5) {
          startX = Math.random() * (width * 0.7) - 120;
          startY = -length - Math.random() * 180;
        } else {
          startX = -length - Math.random() * 180;
          startY = Math.random() * height;
        }
      }

      return {
        id,
        x1: startX,
        y1: startY,
        length,
        speed: Math.random() * 2.2 + 1.4,
        strokeWidth: Math.random() * 2.0 + 1.2,
        headRadius: Math.random() * 1.8 + 1.3,
        color: colorObj.main,
        glowColor: colorObj.glow,
        shadowBlur: Math.random() * 12 + 10
      };
    };

    for (let i = 0; i < cometCount; i++) {
      comets.push(createComet(i, true));
    }

    // --- INITIALIZE ANIMATED DOTTED STARS (SVG 2) ---
    const starCount = Math.min(Math.floor((width * height) / 5500), 220);
    const stars: AnimatedDottedStar[] = Array.from({ length: starCount }, (_, id) => {
      let x: number;
      let y: number;
      const isPeripheral = Math.random() > 0.10;

      if (isPeripheral) {
        const coord = generatePeripheralCoordinate(width, height);
        x = coord.x;
        y = coord.y;
      } else {
        x = Math.random() * width;
        y = Math.random() * height;
      }

      const c = starColors[Math.floor(Math.random() * starColors.length)];
      const coreRadius = Math.random() * 4.2 + 1.4;
      const baseOuterRadius = coreRadius * (Math.random() * 4.0 + 3.0);
      const inCenter = isCentralReadingZone(x, y, width, height);
      const baseOpacity = inCenter ? Math.random() * 0.22 + 0.10 : Math.random() * 0.45 + 0.55;

      return {
        id,
        x,
        y,
        baseX: x,
        baseY: y,
        coreRadius: inCenter ? coreRadius * 0.7 : coreRadius,
        outerRadius: baseOuterRadius,
        baseOuterRadius,
        color: c.main,
        glowColor: c.glow,
        opacity: baseOpacity,
        baseOpacity,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.012,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        expansionFactor: 0,
        isPeripheral
      };
    });

    // --- INITIALIZE COSMIC GLOBULAR STAR CLUSTER (Space Image Spec) ---
    // Concentrated dense star cluster in lower-right region
    const clusterStars: ClusterStar[] = Array.from({ length: 80 }, () => {
      const distance = Math.pow(Math.random(), 2) * 110 + 5; // Higher density at center of cluster
      const clusterColors = ['#FFFFFF', '#FEF08A', '#38BDF8', '#F43F5E', '#E2E8F0'];
      return {
        angle: Math.random() * Math.PI * 2,
        distance,
        radius: Math.random() * 1.6 + 0.6,
        speed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        color: clusterColors[Math.floor(Math.random() * clusterColors.length)],
        opacity: Math.random() * 0.6 + 0.4
      };
    });

    // --- 60 FPS RENDER LOOP ---
    let nebulaTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      const parallaxX = (mouseX / width - 0.5) * 24;
      const parallaxY = (mouseY / height - 0.5) * 24;

      nebulaTime += 0.005;

      // 1. RENDER RAYS & NEBULA SHADOWS
      // 2. RENDER BRIGHT DOTTED STARS (SVG 2)
      stars.forEach((s) => {
        s.baseX += s.vx;
        s.baseY += s.vy;

        if (s.baseX < -60) s.baseX = width + 60;
        if (s.baseX > width + 60) s.baseX = -60;
        if (s.baseY < -60) s.baseY = height + 60;
        if (s.baseY > height + 60) s.baseY = -60;

        s.pulsePhase += s.pulseSpeed;
        const pulse = Math.sin(s.pulsePhase);

        const currentX = s.baseX + parallaxX;
        const currentY = s.baseY + parallaxY;
        s.x = currentX;
        s.y = currentY;

        const inCenter = isCentralReadingZone(currentX, currentY, width, height);
        const targetOpacity = inCenter
          ? s.baseOpacity * 0.35
          : s.baseOpacity + pulse * 0.3;

        s.opacity += (targetOpacity - s.opacity) * 0.08;

        const dx = mouseX - currentX;
        const dy = mouseY - currentY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist) {
          const targetExp = (1 - dist / maxDist) * 1.6;
          s.expansionFactor += (targetExp - s.expansionFactor) * 0.1;
        } else {
          s.expansionFactor += (0 - s.expansionFactor) * 0.05;
        }

        const animatedOuterRadius =
          (s.baseOuterRadius + pulse * (s.baseOuterRadius * 0.3)) *
          (1 + s.expansionFactor * 0.85);
        const animatedCoreRadius = s.coreRadius * (1 + s.expansionFactor * 0.55);

        const haloGrad = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          animatedOuterRadius
        );
        haloGrad.addColorStop(0, s.color);
        haloGrad.addColorStop(0.3, `${s.color}aa`);
        haloGrad.addColorStop(0.65, `${s.color}44`);
        haloGrad.addColorStop(1, `${s.color}00`);

        ctx.beginPath();
        ctx.arc(currentX, currentY, animatedOuterRadius, 0, Math.PI * 2);
        ctx.fillStyle = haloGrad;
        ctx.globalAlpha = Math.max(0, Math.min(1, s.opacity * 0.65));
        ctx.fill();

        ctx.beginPath();
        ctx.arc(currentX, currentY, animatedCoreRadius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, s.opacity));
        ctx.shadowBlur = animatedCoreRadius * 6;
        ctx.shadowColor = s.glowColor;
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      // 3. RENDER COSMIC GLOBULAR STAR CLUSTER (Space Image Spec - Lower Right Quadrant)
      const clusterCenterX = width * 0.82 + parallaxX * 0.5;
      const clusterCenterY = height * 0.72 + parallaxY * 0.5;

      // Glow halo for cluster core
      const clusterGlow = ctx.createRadialGradient(
        clusterCenterX,
        clusterCenterY,
        0,
        clusterCenterX,
        clusterCenterY,
        140
      );
      clusterGlow.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      clusterGlow.addColorStop(0.2, 'rgba(254, 240, 138, 0.25)');
      clusterGlow.addColorStop(0.5, 'rgba(56, 189, 248, 0.12)');
      clusterGlow.addColorStop(1, 'rgba(3, 5, 13, 0)');

      ctx.beginPath();
      ctx.arc(clusterCenterX, clusterCenterY, 140, 0, Math.PI * 2);
      ctx.fillStyle = clusterGlow;
      ctx.fill();

      // Render individual cluster micro-stars
      clusterStars.forEach((cs) => {
        cs.angle += cs.speed;
        const cx = clusterCenterX + Math.cos(cs.angle) * cs.distance;
        const cy = clusterCenterY + Math.sin(cs.angle) * cs.distance * 0.7; // Slightly flattened ellipse

        ctx.beginPath();
        ctx.arc(cx, cy, cs.radius, 0, Math.PI * 2);
        ctx.fillStyle = cs.color;
        ctx.globalAlpha = cs.opacity;
        ctx.shadowBlur = cs.radius * 3;
        ctx.shadowColor = cs.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      // Constellation Lines
      ctx.lineWidth = 0.7;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j += 2) {
          const s1 = stars[i];
          const s2 = stars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 125 * 125) {
            const inCenter = isCentralReadingZone((s1.x + s2.x) / 2, (s1.y + s2.y) / 2, width, height);
            const alpha = (1 - Math.sqrt(distSq) / 125) * (inCenter ? 0.05 : 0.28);

            const lineGrad = ctx.createLinearGradient(s1.x, s1.y, s2.x, s2.y);
            lineGrad.addColorStop(0, s1.color);
            lineGrad.addColorStop(1, s2.color);

            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = lineGrad;
            ctx.globalAlpha = alpha;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      }

      // 4. RENDER HIGH COUNT & BRIGHT SHOOTING LASER COMETS (SVG 1)
      ctx.globalCompositeOperation = 'lighter';
      comets.forEach((c, idx) => {
        const dx = c.speed * 0.707;
        const dy = c.speed * 0.707;

        c.x1 += dx;
        c.y1 += dy;

        const headX = c.x1 + c.length * 0.707;
        const headY = c.y1 + c.length * 0.707;

        if (c.x1 > width + 250 || c.y1 > height + 250) {
          comets[idx] = createComet(c.id, false);
          return;
        }

        const inCenter = isCentralReadingZone(headX, headY, width, height);
        const fadeAlpha = inCenter ? 0.22 : 1.0;

        const lineGrad = ctx.createLinearGradient(c.x1, c.y1, headX, headY);
        lineGrad.addColorStop(0, `${c.color}00`);
        lineGrad.addColorStop(0.65, `${c.color}99`);
        lineGrad.addColorStop(1, c.color);

        ctx.beginPath();
        ctx.moveTo(c.x1, c.y1);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = c.strokeWidth;
        ctx.lineCap = 'round';
        ctx.globalAlpha = fadeAlpha;

        ctx.shadowBlur = c.shadowBlur * 1.5;
        ctx.shadowColor = c.glowColor;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(headX, headY, c.headRadius * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.shadowBlur = c.shadowBlur * 2.2;
        ctx.shadowColor = c.glowColor;
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });
      ctx.globalCompositeOperation = 'source-over';

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03050d] selection:bg-indigo-500/30">
      {/* 1. Deep Obsidian Cosmic Space Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b19] via-[#03050d] to-[#010208]" />

      {/* 2. Space Image Spec: Animated Crimson & Rose Red Nebula Gas Clouds */}
      {/* Upper Right Crimson Red Primary Nebula */}
      <div className="absolute top-[10%] right-[15%] w-[650px] sm:w-[900px] h-[500px] sm:h-[650px] bg-gradient-to-bl from-[#e11d48]/28 via-[#9f1239]/18 to-transparent rounded-full blur-[160px] animate-pulse-glow" />

      {/* Mid-Left Rose & Crimson Secondary Nebula Blob */}
      <div className="absolute top-[45%] -left-28 w-[550px] sm:w-[750px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-[#be123c]/24 via-[#881337]/14 to-transparent rounded-full blur-[160px] animate-float" />

      {/* Top-Left Deep Indigo / Blue Space Atmosphere Glow */}
      <div className="absolute -top-24 -left-20 w-[600px] sm:w-[800px] h-[450px] sm:h-[600px] bg-gradient-to-br from-[#1e1b4b]/30 via-[#312e81]/15 to-transparent rounded-full blur-[170px] pointer-events-none" />

      {/* Bottom-Right Golden & Cyan Star Cluster Core Glow */}
      <div className="absolute -bottom-20 -right-20 w-[650px] sm:w-[850px] h-[450px] sm:h-[650px] bg-gradient-to-tl from-[#0284c7]/20 via-[#e11d48]/12 to-transparent rounded-full blur-[170px] pointer-events-none" />

      {/* 3. Subtle Tech Grid Matrix Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 4. Combined Canvas: Cosmic Nebula Star Cluster + Shooting Lasers + Animated Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 5. Glassmorphism Light Sheen Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-transparent pointer-events-none transform -rotate-12 scale-150 origin-center" />

      {/* 6. Deep Central Reading Vignette: Guarantees 100% Text & UI Readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_28%,_#010208_90%)] opacity-92 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b19]/50 via-transparent to-[#010208]/88 pointer-events-none" />
    </div>
  );
};
