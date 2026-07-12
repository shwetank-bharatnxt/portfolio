"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.65, 0.32, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`glass flex w-full max-w-3xl items-center justify-between rounded-full py-2 pr-2 pl-5 transition-all duration-500 ${
          scrolled ? "max-w-2xl shadow-2xl" : ""
        }`}
      >
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-tight text-white"
        >
          shwetank<span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-white/60 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-3.5 py-1.5 text-sm text-white/60 transition-colors duration-200 hover:bg-white/5 hover:text-white sm:block"
          >
            Resume
          </a>
          <a
            href={`mailto:${site.email}`}
            className="glow-ring rounded-full bg-white/8 px-4 py-1.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/15"
          >
            Say hello
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
