"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Magnetic from "./ui/Magnetic";
import Reveal from "./ui/Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the mailto button still works
    }
  }

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-4xl scroll-mt-24 px-6 py-28"
    >
      <Reveal>
        <div className="glass-deep glow-ring relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b7cff]/30 via-[#34e0ff]/20 to-[#ff6ec7]/25 blur-3xl"
          />

          <div className="relative">
            <p className="font-mono text-xs tracking-[0.25em] text-[#9d93ff] uppercase">
              What&apos;s next
            </p>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {site.contact.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/55">
              {site.contact.sub}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <a
                  href={`mailto:${site.email}`}
                  className="glow-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8b7cff] to-[#5f4dee] px-8 py-4 font-medium text-white shadow-[0_8px_32px_-8px_rgba(139,124,255,0.6)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgba(139,124,255,0.85)]"
                >
                  {site.contact.cta} →
                </a>
              </Magnetic>

              <button
                onClick={copyEmail}
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-4 font-mono text-sm text-white/70 transition-colors duration-200 hover:text-white"
              >
                {copied ? "✓ Copied!" : site.email}
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm whitespace-nowrap text-white/40 sm:gap-x-6">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                GitHub
              </a>
              <span aria-hidden className="hidden sm:inline">
                ·
              </span>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                LinkedIn
              </a>
              <span aria-hidden className="hidden sm:inline">
                ·
              </span>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                Resume
              </a>
              <span aria-hidden className="hidden sm:inline">
                ·
              </span>
              <span>{site.location}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
