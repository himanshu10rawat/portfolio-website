import Reveal from "./Reveal";
import { SectionHeader } from "./Bits";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 lg:px-10 max-w-5xl mx-auto scroll-mt-14">
      <Reveal>
        <SectionHeader file="skills.json" title="Skills" />
        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          {SKILLS.map((s) => (
            <div key={s.group} className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] p-4">
              <div className="font-mono text-xs text-[#B4790F] dark:text-[#F2B84B] mb-3">// {s.label}</div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="font-mono text-[12px] px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
