import { site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: readonly string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex w-max gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="glass-chip rounded-full px-5 py-2.5 font-mono text-sm whitespace-nowrap text-white/65"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading
        eyebrow="Skills"
        title={site.skills.heading}
        sub={site.skills.sub}
      />

      <Reveal>
        <div className="flex flex-col gap-2">
          <MarqueeRow items={site.skills.rows[0]} />
          <MarqueeRow items={site.skills.rows[1]} reverse />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {site.skills.groups.map((group, i) => (
          <Reveal key={group.title} delay={0.1 + i * 0.08}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="font-display mb-4 text-sm font-semibold tracking-widest text-[#9d93ff] uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                    <span className="h-1 w-1 rounded-full bg-accent-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
