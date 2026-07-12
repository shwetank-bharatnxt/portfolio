import { site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Achievements() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Track record"
        title="A habit of finishing first."
        sub="Contests, hackathons, board exams — the pattern started early."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {site.achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="glass group flex h-full items-start gap-5 rounded-2xl p-6 transition-colors duration-300 hover:border-white/20">
              <span
                aria-hidden
                className="glass-chip flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
              >
                {item.icon}
              </span>
              <div>
                <h3 className="font-display font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/50">
                  {item.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
