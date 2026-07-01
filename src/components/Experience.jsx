import Reveal from "./Reveal";
import { SectionHeader } from "./Bits";
import { EXPERIENCE, EDUCATION } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 lg:px-10 max-w-5xl mx-auto scroll-mt-14">
      <Reveal>
        <SectionHeader file="experience.log" title="Experience" />
        <div className="mt-8 relative pl-6">
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-black/[0.1] dark:bg-white/[0.1]"></div>
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              <span
                className={`absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                  e.current
                    ? "bg-[#28C840] border-[#28C840]"
                    : "bg-white dark:bg-[#0B0E14] border-neutral-400 dark:border-neutral-600"
                }`}
              ></span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white">{e.role}</h3>
                <span className="text-neutral-500 dark:text-neutral-500">·</span>
                <span className="text-[15px] text-neutral-700 dark:text-neutral-300">{e.company}</span>
                {e.current && (
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#28C840]/10 text-[#1a8a2c] dark:text-[#28C840]">
                    current
                  </span>
                )}
              </div>
              <div className="font-mono text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                {e.period} · {e.location}
              </div>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((p, j) => (
                  <li key={j} className="text-[15px] leading-6 text-neutral-700 dark:text-neutral-300 flex gap-2">
                    <span className="text-[#F2B84B] mt-0.5">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <div className="font-mono text-xs text-[#B4790F] dark:text-[#F2B84B] mb-3">// education</div>
          <div className="grid sm:grid-cols-2 gap-4">
            {EDUCATION.map((ed, i) => (
              <div key={i} className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] p-4">
                <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{ed.degree}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{ed.school}</div>
                <div className="font-mono text-xs text-neutral-500 dark:text-neutral-500 mt-1">{ed.period}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
