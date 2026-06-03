"use client";

import { InteractiveStarfieldHero } from "@/components/starfield-hero/starfield-hero";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroWithAuroraProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export default function HeroWithAurora({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroWithAuroraProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(420px at ${x}px ${y}px, rgba(56,189,248,.35), transparent 60%)`;

  const UP = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  };
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      className="absolute inset-0"
    >
      <InteractiveStarfieldHero
        particleCount={0}
        className="bg-zinc-950 min-h-screen rounded-none"
      >
        <div className="absolute inset-0 opacity-80">
          <div className="lf-aurora absolute inset-0" />
          <motion.div className="absolute inset-0" style={{ backgroundImage: spotlight }} />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(9,9,11,0.92) 100%)",
          }}
        />

        <div className="relative z-10 w-full min-h-screen flex flex-col justify-center px-8 pb-40 sm:px-14 lg:px-20">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.11 } } }}
          >
            <motion.div
              variants={UP}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="size-1.5 animate-pulse rounded-full bg-blue-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={UP}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-balance text-5xl font-bold tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl"
            >
              {titleLine1}
              <br />
              <span className="text-white/45">{titleLine2}</span>
            </motion.h1>

            <motion.p
              variants={UP}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/40"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={UP}
              transition={{ duration: 0.55, ease: EASE }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-zinc-900 shadow-[0_0_20px_rgba(255,255,255,.12)] transition-all duration-200 hover:gap-3 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,.22)]"
              >
                {primaryCTA}
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-2.5 text-sm font-medium text-white/65 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
              >
                {secondaryCTA}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </InteractiveStarfieldHero>
    </div>
  );
}
