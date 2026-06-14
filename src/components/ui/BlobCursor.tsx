'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';

/**
 * Concentric glowing circles cursor — desktop only (hidden md:block)
 * Matches the blue concentric rings design shown in the reference image.
 * No SVG filter used — fully cross-browser (Safari + Chrome).
 */
export default function BlobCursor() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Ring configs: size, color, lag duration (outermost ring lags most)
  const rings = [
    { size: 16,  color: 'rgba(255,255,255,0.95)', duration: 0.06 },
    { size: 44,  color: 'rgba(120,130,255,0.70)', duration: 0.18 },
    { size: 90,  color: 'rgba(80, 95,240,0.40)',  duration: 0.35 },
    { size: 150, color: 'rgba(60, 80,230,0.22)',  duration: 0.55 },
    { size: 220, color: 'rgba(50, 70,210,0.12)',  duration: 0.80 },
  ];

  const handleMove = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    const x = e.clientX;
    const y = e.clientY;

    ringsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        x: x,
        y: y,
        duration: rings[i].duration,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  }, [isMobile, rings]);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [handleMove, isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden hidden md:block"
      style={{ zIndex: 999999 }}
      aria-hidden="true"
    >
      {rings.map((ring, i) => (
        <div
          key={i}
          ref={el => { ringsRef.current[i] = el; }}
          className="absolute rounded-full will-change-transform"
          style={{
            width: ring.size,
            height: ring.size,
            backgroundColor: ring.color,
            // Center the ring on cursor position (rings are positioned top-left by GSAP x/y)
            marginLeft: -ring.size / 2,
            marginTop: -ring.size / 2,
            // Glow effect for each ring
            boxShadow: i === 0
              ? `0 0 12px 4px rgba(140,150,255,0.9)`
              : i === 1
              ? `0 0 24px 8px rgba(100,110,255,0.5)`
              : `0 0 ${16 + i * 12}px ${4 + i * 4}px rgba(70,90,240,${0.2 - i * 0.03})`,
            // Outermost rings slightly blurred for soft glow
            filter: i >= 3 ? `blur(${(i - 2) * 2}px)` : 'none',
            top: 0,
            left: 0,
          }}
        />
      ))}
    </div>
  );
}
