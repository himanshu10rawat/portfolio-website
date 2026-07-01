import { GitBranch } from "lucide-react";
import { PROFILE } from "../data";

export default function StatusBar({ active }) {
  return (
    <footer className="border-t border-black/[0.08] dark:border-white/[0.08] px-4 py-2.5">
      <div className="max-w-5xl mx-auto flex items-center justify-between font-mono text-[11px] text-neutral-500 dark:text-neutral-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <GitBranch className="w-3.5 h-3.5" /> main
          </span>
          <span className="hidden sm:inline">UTF-8</span>
        </div>
        <div>
          © {new Date().getFullYear()} {PROFILE.name} — {active}.jsx
        </div>
      </div>
    </footer>
  );
}
