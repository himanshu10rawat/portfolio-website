import Reveal from "./Reveal";
import { SectionHeader, StatCard } from "./Bits";
import { PROFILE } from "../data";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 lg:px-10 max-w-5xl mx-auto scroll-mt-14">
      <Reveal>
        <SectionHeader file="about.jsx" title="About" />
        <p className="mt-5 text-base leading-7 text-neutral-700 dark:text-neutral-300 max-w-3xl">
          {PROFILE.summary}
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <StatCard value="5+" label="years experience" />
          <StatCard value="25–35%" label="avg. perf. gains delivered" />
          <StatCard value="4" label="production platforms shipped" />
        </div>
      </Reveal>
    </section>
  );
}
