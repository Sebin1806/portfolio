import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  digit: string;
  size: number;
  color: string;
  delay: number;
  swayFreq: number;
  swayAmp: number;
}

export const BinaryParticleHeading: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const triggerAnimation = () => {
    setIsStarted(false);
    setAnimationCompleted(false);
    setTimeout(() => {
      setIsStarted(true);
    }, 40);
  };

  useEffect(() => {
    const handleLoaded = () => {
      triggerAnimation();
    };

    window.addEventListener('site-loaded', handleLoaded);

    // Fallback trigger if loader already finished
    const fallbackTimer = setTimeout(() => {
      setIsStarted(true);
    }, 1800);

    return () => {
      window.removeEventListener('site-loaded', handleLoaded);
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (!isStarted) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    const startTime = performance.now();
    const duration = 2800; // 2.8s total matrix rainfall to sentence formation

    const setupCanvasAndParticles = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      const width = Math.max(rect.width || 700, 320);
      const height = Math.max(rect.height || 120, 90);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Offscreen canvas for sampling target text pixel coordinates
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      const fontSize = Math.min(Math.max(width / 10, 32), 68);
      offCtx.font = `900 ${fontSize}px Geist, Inter, sans-serif`;
      offCtx.textBaseline = 'middle';

      const fullText = "Hi, I'm Sebin S";
      const prefixText = "Hi, I'm ";

      const startX = 0;
      const startY = height / 2;

      offCtx.fillStyle = '#FFFFFF';
      offCtx.fillText(fullText, startX, startY);

      const prefixWidth = offCtx.measureText(prefixText).width;

      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;

      particles = [];
      // Dense sampling grid step (2px) to generate thousands of mini binary digits
      const step = Math.max(Math.floor(fontSize / 24), 2);

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 80) {
            const isName = x >= (startX + prefixWidth - 6);

            // Matrix rainfall origin: Falling from top rain stream above canvas
            const sX = x + (Math.random() - 0.5) * 160;
            const sY = -20 - Math.random() * 220;

            let color = '#00F0FF'; // Glowing neon cyan matrix rain
            if (isName) {
              color = Math.random() > 0.4 ? '#60A5FA' : '#A855F7';
            } else if (Math.random() > 0.6) {
              color = '#38BDF8';
            }

            particles.push({
              x: sX,
              y: sY,
              startX: sX,
              startY: sY,
              targetX: x,
              targetY: y,
              digit: Math.random() > 0.5 ? '1' : '0',
              size: Math.floor(8 + Math.random() * 6), // Mini binary numbers (8px - 14px)
              color,
              delay: Math.random() * 450, // Staggered rain drops
              swayFreq: 0.003 + Math.random() * 0.006,
              swayAmp: 12 + Math.random() * 20
            });
          }
        }
      }
    };

    setupCanvasAndParticles();

    // Smooth easeOutCubic curve
    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const render = (now: number) => {
      const elapsed = now - startTime;
      const rect = container.getBoundingClientRect();
      const width = Math.max(rect.width || 700, 320);
      const height = Math.max(rect.height || 120, 90);

      ctx.clearRect(0, 0, width, height);

      let allArrived = true;

      particles.forEach((p) => {
        const pElapsed = Math.max(0, elapsed - p.delay);
        const totalPTime = duration - p.delay;
        const progress = Math.min(1, pElapsed / totalPTime);

        if (progress < 1) allArrived = false;

        const easedProgress = easeOutCubic(progress);

        // Sinusoidal matrix rainfall sway motion ("move hear and there")
        const swayX = Math.sin(now * p.swayFreq + p.targetX) * p.swayAmp * (1 - easedProgress);

        // Position interpolation: from falling rainfall stream to target sentence pixel
        p.x = p.startX + (p.targetX - p.startX) * easedProgress + swayX;
        p.y = p.startY + (p.targetY - p.startY) * easedProgress;

        // Rapidly toggle binary digit 0 and 1 while moving
        if (progress < 0.9 && Math.random() < 0.4) {
          p.digit = Math.random() > 0.5 ? '1' : '0';
        }

        // Draw glowing mini binary number particle
        ctx.save();
        ctx.font = `800 ${p.size}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, 0.3 + progress * 0.7);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = progress > 0.8 ? 12 : 4;
        ctx.fillText(p.digit, p.x, p.y);
        ctx.restore();
      });

      if (elapsed >= duration || allArrived) {
        setAnimationCompleted(true);
      } else {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isStarted]);

  return (
    <div
      ref={containerRef}
      onClick={triggerAnimation}
      className="relative w-full min-h-[90px] sm:min-h-[110px] flex items-center mb-4 cursor-pointer group"
      title="Click to replay Binary Matrix Rainfall animation"
    >
      {/* Canvas rendering thousands of mini binary matrix rainfall numbers forming the sentence */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          animationCompleted ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Final crisp HTML sentence */}
      <h1
        className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white transition-opacity duration-700 ${
          animationCompleted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Hi, I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#8B5CF6] to-[#22D3EE]">
          Sebin S
        </span>
      </h1>
    </div>
  );
};
