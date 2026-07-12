import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center items-center" : "";

  return (
    <div className={`mb-14 flex flex-col gap-4 ${alignCls}`}>
      <Reveal>
        <span className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs tracking-widest text-[#9d93ff] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse-dot" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-lg leading-relaxed text-white/55">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
