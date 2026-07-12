"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  const exp = site.experience;
  const [active, setActive] = useState<string>(exp.tabs[0].key);
  const activeTab = exp.tabs.find((t) => t.key === active) ?? exp.tabs[0];

  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading
        eyebrow="Experience"
        title="One year. Four stacks. Real money."
        sub={exp.intro}
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* left: role summary — sticky wrapper stays outside Reveal: its
            residual filter style would otherwise break position:sticky */}
        <div className="lg:col-span-2">
          <div className="sticky top-28">
            <Reveal>
              <div className="glass glow-ring rounded-3xl p-8">
            <p className="font-mono text-xs tracking-widest text-[#9d93ff] uppercase">
              {exp.period}
            </p>
            <h3 className="font-display mt-3 text-3xl font-bold text-white">
              {exp.company}
            </h3>
            <p className="mt-1 text-lg text-white/70">{exp.role}</p>
            <p className="mt-1 text-sm text-white/40">{exp.place}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="glass-chip rounded-full px-3 py-1 font-mono text-xs text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* right: tabbed highlights */}
        <Reveal delay={0.12} className="lg:col-span-3">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Areas of work">
              {exp.tabs.map((tab) => (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={active === tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active === tab.key
                      ? "text-white"
                      : "text-white/45 hover:text-white/80"
                  }`}
                >
                  {active === tab.key && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={activeTab.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col gap-4"
                >
                  {activeTab.points.map((point) => (
                    <li key={point} className="flex gap-3.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8b7cff] to-[#34e0ff]" />
                      <p className="leading-relaxed text-white/65">{point}</p>
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
