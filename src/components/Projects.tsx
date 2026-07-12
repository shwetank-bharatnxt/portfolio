import { site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Built. Shipped. Used."
        sub={site.projects.intro}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {site.projects.items.map((project, i) => (
          <Reveal
            key={project.title}
            delay={i * 0.08}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <TiltCard className="glass group relative h-full overflow-hidden rounded-3xl">
              <div
                aria-hidden
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${project.accent} opacity-[0.13] blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
              />
              <div className="relative flex h-full flex-col p-8 sm:p-10">
                <span
                  className={`mb-4 inline-flex w-fit rounded-full bg-gradient-to-r px-3 py-1 font-mono text-[11px] tracking-wider text-white/90 uppercase ${project.accent} bg-clip-padding opacity-90`}
                >
                  {project.tag}
                </span>

                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {project.title}
                </h3>

                <p
                  className={`mt-3 leading-relaxed text-white/60 ${
                    project.featured ? "max-w-3xl text-lg" : ""
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-chip rounded-full px-3 py-1 font-mono text-xs text-white/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
