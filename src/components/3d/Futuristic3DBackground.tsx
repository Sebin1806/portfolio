import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Futuristic3DBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Atmosphere
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.03);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3.5, 14);
    camera.rotation.x = -0.2;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x030712, 1.0);
    container.appendChild(renderer.domElement);

    // 4. 3D Wave Perspective Grid (Cyber Horizon)
    const isMobile = window.innerWidth < 768;
    const gridWidth = isMobile ? 32 : 54;
    const gridDepth = isMobile ? 32 : 54;
    const gridSegments = isMobile ? 32 : 48;

    const planeGeometry = new THREE.PlaneGeometry(
      gridWidth,
      gridDepth,
      gridSegments,
      gridSegments
    );
    planeGeometry.rotateX(-Math.PI / 2);

    // Save initial vertex Y values for wave animation
    const posAttr = planeGeometry.attributes.position;
    const initialY = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      initialY[i] = posAttr.getY(i);
    }

    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending
    });

    const gridMesh = new THREE.Mesh(planeGeometry, gridMaterial);
    gridMesh.position.set(0, -3.8, -5);
    scene.add(gridMesh);

    // 5. Constellation Starfield & Horizon Energy Points
    const starCount = isMobile ? 120 : 250;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0x38bdf8),
      new THREE.Color(0xf43f5e),
      new THREE.Color(0x8b5cf6),
      new THREE.Color(0xf59e0b)
    ];

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 36;
      const y = Math.random() * 18 - 2;
      const z = (Math.random() - 0.5) * 30 - 5;

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      const col = palette[i % palette.length];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Circular Glow Particle Texture
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.3, 'rgba(56, 189, 248, 0.7)');
        grad.addColorStop(0.7, 'rgba(244, 63, 94, 0.2)');
        grad.addColorStop(1, 'rgba(3, 7, 18, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const starMaterial = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const starSystem = new THREE.Points(starGeometry, starMaterial);
    scene.add(starSystem);

    // 6. Neural Laser Connections between nearby stars
    const maxConnections = isMobile ? 30 : 70;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // 7. Mouse Interaction & Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener('resize', handleResize);

    // 9. Smooth 60 FPS Cyber Wave Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp (0.03)
      currentMouseX += (targetMouseX - currentMouseX) * 0.03;
      currentMouseY += (targetMouseY - currentMouseY) * 0.03;

      // Parallax Camera Tilt
      camera.position.x = currentMouseX * 1.6;
      camera.position.y = 3.5 - currentMouseY * 1.0;
      camera.lookAt(0, 0, -5);

      // Animate 3D Cyber Wave Grid Vertices
      const posArr = planeGeometry.attributes.position.array as Float32Array;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        const x = posAttr.getX(i);
        const z = posAttr.getZ(i);

        // Sinusoidal dual wave pulse
        const wave1 = Math.sin(x * 0.25 + elapsedTime * 1.2) * 0.35;
        const wave2 = Math.cos(z * 0.25 + elapsedTime * 1.0) * 0.35;
        const y = wave1 + wave2;

        posArr[i * 3 + 1] = y;
      }
      posAttr.needsUpdate = true;

      // Rotate Starfield
      starSystem.rotation.y = elapsedTime * 0.012;

      // Update Neural Connection Lines between stars
      const sPositions = starGeometry.attributes.position.array as Float32Array;
      const linePosAttr = lineGeometry.attributes.position;
      const lineColAttr = lineGeometry.attributes.color;

      let lineIndex = 0;
      const maxDist = 4.2;

      for (let i = 0; i < starCount && lineIndex < maxConnections; i++) {
        const x1 = sPositions[i * 3];
        const y1 = sPositions[i * 3 + 1];
        const z1 = sPositions[i * 3 + 2];

        for (let j = i + 1; j < starCount && lineIndex < maxConnections; j += 2) {
          const x2 = sPositions[j * 3];
          const y2 = sPositions[j * 3 + 1];
          const z2 = sPositions[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDist * maxDist) {
            const idx = lineIndex * 6;

            linePosAttr.array[idx] = x1;
            linePosAttr.array[idx + 1] = y1;
            linePosAttr.array[idx + 2] = z1;

            linePosAttr.array[idx + 3] = x2;
            linePosAttr.array[idx + 4] = y2;
            linePosAttr.array[idx + 5] = z2;

            const alpha = (1.0 - Math.sqrt(distSq) / maxDist) * 0.35;
            lineColAttr.array[idx] = 0.22 * alpha;
            lineColAttr.array[idx + 1] = 0.51 * alpha;
            lineColAttr.array[idx + 2] = 0.96 * alpha;

            lineColAttr.array[idx + 3] = 0.95 * alpha;
            lineColAttr.array[idx + 4] = 0.25 * alpha;
            lineColAttr.array[idx + 5] = 0.37 * alpha;

            lineIndex++;
          }
        }
      }

      linePosAttr.needsUpdate = true;
      if (lineColAttr) lineColAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Resource Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      planeGeometry.dispose();
      gridMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Three.js WebGL Grid Canvas */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* Ambient Pulsing Aurora Background Glowing Mesh Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-[#F43F5E]/15 via-[#8B5CF6]/15 to-[#3B82F6]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Deep Central Vignette for 100% Text & Content Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-[#030712]/30 to-[#030712]/80 pointer-events-none" />
    </div>
  );
};
