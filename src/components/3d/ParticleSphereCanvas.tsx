import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
}

export const ParticleSphereCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 3D particles on a sphere surface + outer floating cloud
    const particleCount = 280;
    const sphereRadius = Math.min(width, height) * 0.28;
    const particles: Particle[] = [];

    const colors = ['#3B82F6', '#8B5CF6', '#22D3EE', '#60A5FA', '#A78BFA'];

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere surface
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const r = sphereRadius * (0.85 + Math.random() * 0.3);
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.2 + 1,
        color: colors[i % colors.length]
      });
    }

    // Mouse reactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - width / 2;
      mouseY = e.clientY - height / 2;
      targetRotY = (mouseX / width) * Math.PI * 0.8;
      targetRotX = (-mouseY / height) * Math.PI * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse rotation easing
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      angleY += 0.004;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(angleY + currentRotY);
      const sinY = Math.sin(angleY + currentRotY);

      const projected: { px: number; py: number; pz: number; size: number; color: string }[] = [];

      const centerX = width / 2;
      const centerY = height / 2;
      const focalLength = 400;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Slight floating pulse
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Soft elastic pull back to base sphere radius
        p.x += (p.baseX - p.x) * 0.01;
        p.y += (p.baseY - p.y) * 0.01;
        p.z += (p.baseZ - p.z) * 0.01;

        // 3D Rotations (Y axis then X axis)
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective Projection
        const scale = focalLength / (focalLength + z2 + 300);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        projected.push({
          px,
          py,
          pz: z2,
          size: p.size * scale,
          color: p.color
        });
      }

      // Sort by depth (z2) for depth buffer drawing
      projected.sort((a, b) => b.pz - a.pz);

      // Draw Neural Connections between close particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j += 4) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const distSq = dx * dx + dy * dy;

          if (distSq < 70 * 70) {
            const alpha = (1 - Math.sqrt(distSq) / 70) * 0.22;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw Glowing Particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.min(1, Math.max(0.15, (p.pz + 300) / 600));

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1.0;

      // Draw Glowing Core Ambient Halo
      const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, sphereRadius * 1.2);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.08)');
      gradient.addColorStop(1, 'rgba(3, 7, 18, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, sphereRadius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
