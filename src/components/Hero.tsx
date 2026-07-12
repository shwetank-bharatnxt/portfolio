"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import Magnetic from "./ui/Magnetic";
import Reveal from "./ui/Reveal";

const ease: [number, number, number, number] = [0.21, 0.65, 0.32, 1];

const floatChips = [
  { text: "Spring Boot", className: "top-[18%] left-[6%]", delay: "0s" },
  { text: "Golang", className: "top-[30%] right-[7%]", delay: "-2.5s" },
  { text: "Angular", className: "bottom-[30%] left-[10%]", delay: "-4s" },
  { text: "RabbitMQ", className: "top-[14%] right-[20%]", delay: "-1.2s" },
  { text: "PostgreSQL", className: "bottom-[24%] right-[12%]", delay: "-5.5s" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* floating tech chips — desktop only */}
      {floatChips.map((chip) => (
        <div
          key={chip.text}
          aria-hidden
          className={`glass-chip animate-float-slow absolute hidden rounded-full px-4 py-2 font-mono text-xs text-white/45 xl:block ${chip.className}`}
          style={{ animationDelay: chip.delay }}
        >
          {chip.text}
        </div>
      ))}

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="glass-chip mb-8 flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-white/70"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          {site.hero.badge}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mb-5 font-mono text-sm tracking-[0.25em] text-[#9d93ff] uppercase"
        >
          {site.hero.eyebrow}
        </motion.p>

        <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          {site.hero.headline.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 1 ? "text-gradient" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
        >
          {site.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <a
              href={site.hero.primaryCta.href}
              className="glow-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8b7cff] to-[#5f4dee] px-7 py-3.5 font-medium text-white shadow-[0_8px_32px_-8px_rgba(139,124,255,0.6)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgba(139,124,255,0.8)]"
            >
              {site.hero.primaryCta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={site.hero.secondaryCta.href}
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-white/85 transition-colors duration-300 hover:text-white"
            >
              {site.hero.secondaryCta.label}
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* stats */}
      <div className="relative z-10 mx-auto mt-20 grid w-full max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
        {site.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.1 + i * 0.08}>
            <div className="glass h-full rounded-2xl p-5 text-center sm:p-6">
              <div className="font-display text-3xl font-bold text-shimmer sm:text-4xl">
                {stat.value}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-white/50 sm:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-white/60"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.a>
    </section>
  );
}
