import Image from "next/image";
import { site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading
        eyebrow="About"
        title={site.about.heading}
        sub="The short version: I take products from empty repo to production, and I care about every layer in between."
      />

      <div className="grid items-start gap-12 lg:grid-cols-12">
        {/* portrait */}
        <Reveal className="lg:col-span-4">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#8b7cff]/30 via-[#34e0ff]/10 to-[#ff6ec7]/25 blur-2xl"
            />
            <div className="glass glow-ring relative overflow-hidden rounded-[2rem] p-2.5">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                width={1080}
                height={1080}
                sizes="(max-width: 1024px) 90vw, 380px"
                className="w-full rounded-[1.5rem] object-cover"
              />
              <div className="glass-chip absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-sm whitespace-nowrap text-white/85 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                SDE-1 @ {site.company} · Mumbai
              </div>
            </div>
          </div>
        </Reveal>

        {/* story */}
        <div className="flex flex-col gap-6 lg:col-span-8">
          {site.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.08}>
              <p className="text-lg leading-relaxed text-white/65">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* traits */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {site.about.traits.map((trait, i) => (
          <Reveal key={trait.title} delay={0.1 + i * 0.08}>
            <div className="glass group h-full rounded-2xl p-5 transition-colors duration-300 hover:border-white/20">
              <h3 className="font-display text-base font-semibold text-white">
                {trait.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                {trait.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
