"use client";

import { useEffect, useState, useCallback } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  velocity: number;
  spin: number;
}

const COLORS = ["#E0B35B", "#96710E", "#1B2341", "#4A6FA5", "#E06060", "#9B7EC8"];

export function KonamiConfetti() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [show, setShow] = useState(false);

  const triggerConfetti = useCallback(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      newParticles.push({
        id: i,
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight / 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        angle: Math.random() * Math.PI * 2,
        velocity: 4 + Math.random() * 8,
        spin: (Math.random() - 0.5) * 20,
      });
    }
    setParticles(newParticles);
    setShow(true);
    setTimeout(() => setShow(false), 2500);
  }, []);

  useEffect(() => {
    let buffer: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      buffer.push(e.key);
      if (buffer.length > KONAMI.length) {
        buffer = buffer.slice(-KONAMI.length);
      }
      if (buffer.length === KONAMI.length && buffer.every((k, i) => k === KONAMI[i])) {
        triggerConfetti();
        buffer = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerConfetti]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-2.5 h-2.5 rounded-sm"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            animation: `confetti-fall 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            animationDelay: `${Math.random() * 0.15}s`,
            // Use CSS custom properties for unique trajectories
            ["--confetti-x" as string]: `${Math.cos(p.angle) * p.velocity * 40}px`,
            ["--confetti-y" as string]: `${Math.sin(p.angle) * p.velocity * 20 - 200}px`,
            ["--confetti-spin" as string]: `${p.spin * 30}deg`,
          }}
        />
      ))}
    </div>
  );
}
