import { File } from "lucide-react";

export function SectionHeader({ file, title }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-500 dark:text-neutral-500">
        <File className="w-3 h-3" /> {file}
      </div>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white mt-1">
        {title}
      </h2>
    </div>
  );
}

export function StatCard({ value, label }) {
  return (
    <div className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] p-4 bg-white/60 dark:bg-white/[0.02]">
      <div className="font-display text-2xl font-semibold text-neutral-900 dark:text-white">{value}</div>
      <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 font-mono">{label}</div>
    </div>
  );
}
