"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const x = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const y = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const bg = useMotionTemplate`radial-gradient(560px circle at ${x}px ${y}px, rgba(124,108,255,0.075), rgba(52,224,255,0.035) 45%, transparent 75%)`;

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
      style={{ backgroundImage: bg }}
    />
  );
}
