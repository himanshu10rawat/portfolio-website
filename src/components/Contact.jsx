import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader } from "./Bits";
import { PROFILE } from "../data";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
      <path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM3.5 8.5h6.9V21H3.5V8.5ZM13.5 8.5h4.9v1.87h.07c.68-1.23 2.35-2.5 4.84-2.5 5.18 0 6.14 3.24 6.14 7.46V21h-6V16.4c0-1.1-.02-2.5-1.52-2.5-1.53 0-1.76 1.18-1.76 2.4V21h-5.98V8.5Z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard && navigator.clipboard.writeText(PROFILE.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="py-16 px-6 lg:px-10 max-w-5xl mx-auto scroll-mt-14">
      <Reveal>
        <SectionHeader file="contact.js" title="Let's build something" />
        <div className="mt-6 rounded-xl border border-black/[0.1] dark:border-white/[0.1] bg-[#0B0E14] overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.02]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span>
            <span className="ml-3 font-mono text-[11px] text-neutral-500">zsh — contact</span>
          </div>
          <div className="p-6 font-mono text-sm leading-8 text-neutral-300">
            <div>
              <span className="text-[#28C840]">himanshu@portfolio</span>
              <span className="text-neutral-500">:~$</span> whoami --contact
            </div>
            <div className="mt-2 flex flex-wrap gap-x-8 gap-y-2">
              <button onClick={copyEmail} className="flex items-center gap-2 text-neutral-300 hover:text-[#F2B84B] transition-colors">
                <Mail className="w-4 h-4" /> {copied ? "copied!" : PROFILE.email}
              </button>
              <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-2 text-neutral-300 hover:text-[#F2B84B] transition-colors">
                <Phone className="w-4 h-4" /> {PROFILE.phone}
              </a>
              <span className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4" /> {PROFILE.location}
              </span>
            </div>
            <div className="mt-5 flex gap-4">
              <a href={PROFILE.github} className="flex items-center gap-2 text-neutral-300 hover:text-[#F2B84B] transition-colors">
                <GithubIcon /> github
              </a>
              <a href={PROFILE.linkedin} className="flex items-center gap-2 text-neutral-300 hover:text-[#F2B84B] transition-colors">
                <LinkedinIcon /> linkedin
              </a>
            </div>
            <div className="mt-5 text-neutral-500">
              // response time: usually within 24 hours
              <span className="caret text-[#F2B84B]">▍</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 dark:bg-[#F2B84B] text-white dark:text-[#0B0E14] text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" /> Send an email
          </a>
        </div>
      </Reveal>
    </section>
  );
}
