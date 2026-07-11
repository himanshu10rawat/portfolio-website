import { Folder, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader } from "./Bits";
import { INDUSTRY_PROJECTS, PERSONAL_PROJECTS } from "../data";

function ProjectCard({ p }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-black/[0.08] dark:border-white/[0.08] p-5 hover:border-[#F2B84B]/50 hover:-translate-y-0.5 transition-all bg-white/60 dark:bg-white/[0.02]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-display text-base font-semibold text-neutral-900 dark:text-white">
            {p.name}
          </h4>
          <div className="font-mono text-[11px] text-neutral-500 dark:text-neutral-500 mt-0.5">
            {p.tag}
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#F2B84B] transition-colors shrink-0 mt-1" />
      </div>
      <p className="text-[15px] leading-6 text-neutral-700 dark:text-neutral-300 mt-3">
        {p.desc}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {p.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="font-mono text-[11px] text-[#B4790F] dark:text-[#F2B84B] mt-4 group-hover:underline">
        ↳ {p.link}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-6 lg:px-10 max-w-5xl mx-auto scroll-mt-14"
    >
      <Reveal>
        <SectionHeader file="projects/" title="Projects" />

        <div className="mt-8">
          {/* <div className="font-mono text-xs text-neutral-500 dark:text-neutral-500 mb-3 flex items-center gap-1.5">
            <Folder className="w-3.5 h-3.5" /> industry/
          </div> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRY_PROJECTS.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>

        {/* <div className="mt-10">
          <div className="font-mono text-xs text-neutral-500 dark:text-neutral-500 mb-3 flex items-center gap-1.5">
            <Folder className="w-3.5 h-3.5" /> personal/
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {PERSONAL_PROJECTS.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div> */}
      </Reveal>
    </section>
  );
}
