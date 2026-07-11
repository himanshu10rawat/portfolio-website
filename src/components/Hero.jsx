import { MapPin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { PROFILE } from "../data";

export default function Hero({ onNav }) {
  return (
    <section id="home" className="pt-14 pb-20 px-6 lg:px-10 max-w-5xl mx-auto">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-xl border border-black/[0.1] dark:border-white/[0.1] bg-[#0B0E14] overflow-hidden shadow-sm">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.02]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span>
              <span className="ml-3 font-mono text-[11px] text-neutral-500">
                developer.ts
              </span>
            </div>
            <pre className="p-5 text-[13px] leading-relaxed font-mono overflow-x-auto">
              <code>
                <span className="text-[#6B7280]">// meet the frontend</span>
                {"\n"}
                <span className="text-[#C792EA]">const</span>{" "}
                <span className="text-[#82AAFF]">developer</span> = {"{"}
                {"\n"}
                {"  "}name:{" "}
                <span className="text-[#C3E88D]">"Himanshu Rawat"</span>,{"\n"}
                {"  "}role:{" "}
                <span className="text-[#C3E88D]">"Frontend Developer"</span>,
                {"\n"}
                {"  "}stack: [<span className="text-[#C3E88D]">"React.js"</span>
                , <span className="text-[#C3E88D]">"Next.js"</span>,{" "}
                <span className="text-[#C3E88D]">"JavaScript"</span>,
                <span className="text-[#C3E88D]">"TypeScript"</span>],{"\n"}
                {"  "}experience:{" "}
                <span className="text-[#C3E88D]">"5+ years"</span>,{"\n"}
                {"  "}status:{" "}
                <span className="text-[#C3E88D]">"open to work"</span>
                {"\n"}
                {"}"}
                <span className="caret text-[#F2B84B]">▍</span>
              </code>
            </pre>
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs text-[#B4790F] dark:text-[#F2B84B] mb-3">
              $ npm run build --portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              {PROFILE.name}
            </h1>
            <p className="mt-3 text-lg text-neutral-700 dark:text-neutral-300">
              {PROFILE.tagline}
            </p>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> {PROFILE.location}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => onNav("contact")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 dark:bg-[#F2B84B] text-white dark:text-[#0B0E14] text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" /> Get in touch
              </button>
              <button
                onClick={() => onNav("projects")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-black/[0.15] dark:border-white/[0.15] text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors"
              >
                View projects
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
