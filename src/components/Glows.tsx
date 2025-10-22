"use client";

import { useEffect, useMemo, useState } from "react";

type GlowColor = "amber" | "rose" | "blue";

type GlowsProps = {
  count?: number;
  colors?: GlowColor[];
  /** Max size in pixels for a glow diameter */
  maxSize?: number;
  /** Min size in pixels for a glow diameter */
  minSize?: number;
};

/**
 * Renders softly blurred radial glows positioned randomly within the parent section.
 * Uses client-only randomization after mount to avoid hydration mismatches.
 */
export default function Glows({
  count = 4,
  colors = ["amber", "rose", "blue"],
  maxSize = 380,
  minSize = 220,
}: GlowsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = useMemo(() => {
    if (!mounted) return [] as Array<{
      top: number;
      left: number;
      size: number;
      color: GlowColor;
      duration: number;
      delay: number;
    }>;

    const arr: Array<{
      top: number;
      left: number;
      size: number;
      color: GlowColor;
      duration: number;
      delay: number;
    }> = [];
    for (let i = 0; i < count; i++) {
      const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
      const top = Math.random() * 80; // keep some padding from edges
      const left = Math.random() * 80;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = 9 + Math.random() * 6; // 9s - 15s
      const delay = Math.random() * 5; // 0 - 5s
      arr.push({ top, left, size, color, duration, delay });
    }
    return arr;
  }, [mounted, count, colors, maxSize, minSize]);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {items.map((g, idx) => (
        <div
          key={idx}
          className={`glow-circle glow-${g.color} animate-float-glow`}
          style={{
            top: `${g.top}%`,
            left: `${g.left}%`,
            width: `${g.size}px`,
            height: `${g.size}px`,
            animationDuration: `${g.duration}s`,
            animationDelay: `${g.delay}s`,
          }}
        />
      ))}
    </div>
  );
}


