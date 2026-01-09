"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export default function Background() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY || 0);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const parallax = useMemo(() => {
    if (prefersReducedMotion) return 0;
    return Math.min(scrollY * 0.18, 160);
  }, [scrollY, prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: "-40px",
        zIndex: 0,
        willChange: "transform",
        transform: `translate3d(0, ${parallax}px, 0) scale(1.06)`,
        filter: "saturate(1.05) contrast(1.05)",
      }}
    >
      <Image
        src="/bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1200px 600px at 30% 0%, rgba(255, 122, 26, 0.12), transparent 55%)," +
            "radial-gradient(900px 500px at 80% 30%, rgba(255, 122, 26, 0.10), transparent 55%)," +
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.92))",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(1200px 700px at 50% 20%, transparent, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85))",
        }}
      />
    </div>
  );
}
