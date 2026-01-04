"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  opacity?: number; // overall intensity (0.5–0.9 recommended)
  nodes?: number;
};

export default function NetworkBackground({
  className = "",
  opacity = 0.8,
  nodes,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let alive = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const state = {
      w: 0,
      h: 0,
      points: [] as {
        x: number;
        y: number;
        vx: number;
        vy: number;
        r: number;
      }[],
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth ?? window.innerWidth;
      const height = parent?.clientHeight ?? window.innerHeight;

      state.w = width;
      state.h = height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count =
        nodes ??
        Math.max(50, Math.min(160, Math.floor((width * height) / 16000)));

      state.points = Array.from({ length: count }, () => {
        const speed = 0.12 + Math.random() * 0.25;
        const angle = Math.random() * Math.PI * 2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: 1.2 + Math.random() * 2.2,
        };
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      if (!alive) return;

      const { w, h, points } = state;

      ctx.clearRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains("dark");

      // Darker, more visible palette
      const nodeRGB = isDark ? "220,220,220" : "30,41,59"; // slate-800
      const edgeRGB = isDark ? "180,180,180" : "51,65,85"; // slate-700

      if (!reduceMotion) {
        for (const p of points) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x <= 0 || p.x >= w) p.vx *= -1;
          if (p.y <= 0 || p.y >= h) p.vy *= -1;
        }
      }

      const maxDist = Math.min(190, Math.max(130, Math.sqrt(w * h) / 8));
      const maxDist2 = maxDist * maxDist;

      // Edges (thicker + darker)
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;

          if (d2 > maxDist2) continue;

          const d = Math.sqrt(d2);
          const alpha = (1 - d / maxDist) * 0.6 * opacity;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${edgeRGB}, ${alpha})`;
          ctx.lineWidth = 1.1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nodes (slightly larger + darker)
      for (const p of points) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${nodeRGB}, ${0.75 * opacity})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [nodes, opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
