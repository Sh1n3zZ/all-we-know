"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function HeroAurora() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotlight = useMotionTemplate\`radial-gradient(420px at \${x}px \${y}px, rgba(56,189,248,.35), transparent 60%)\`;

  return (
    <section onMouseMove={(e) => {
      const r = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - r.left); y.set(e.clientY - r.top);
    }} className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 p-10">
      <div className="lf-aurora absolute inset-0 opacity-80" />
      <motion.div className="absolute inset-0" style={{ backgroundImage: spotlight }} />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Ship faster</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Motion-native interfaces</h1>
      </div>
    </section>
  );
}
