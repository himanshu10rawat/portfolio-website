import { Folder, File } from "lucide-react";
import { NAV, PROFILE } from "../data";

export default function Sidebar({ active, onNav }) {
  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 border-r border-black/[0.08] dark:border-white/[0.08] pt-6 pr-4 sticky top-11 h-[calc(100vh-2.75rem)]">
      <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-2 px-2">
        Explorer
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 text-sm font-mono text-neutral-700 dark:text-neutral-300 mb-1">
        <Folder className="w-3.5 h-3.5" />
        <span>src</span>
      </div>
      <div className="flex flex-col gap-0.5 ml-3 border-l border-black/[0.08] dark:border-white/[0.08] pl-2">
        {NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => onNav(n.id)}
            className={`flex items-center gap-2 px-2 py-1.5 rounded font-mono text-[13px] text-left transition-colors ${
              active === n.id
                ? "bg-[#F2B84B]/10 text-[#B4790F] dark:text-[#F2B84B]"
                : "text-neutral-500 dark:text-neutral-400 hover:bg-black/[0.04] dark:hover:bg-white/[0.05] hover:text-neutral-800 dark:hover:text-neutral-200"
            }`}
          >
            <File className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{n.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto mb-4 px-2 pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
        <div className="font-mono text-[11px] text-neutral-500 dark:text-neutral-500 leading-relaxed">
          <div className="flex justify-between">
            <span>status</span>
            <span className="text-[#28C840]">available</span>
          </div>
          <div className="flex justify-between">
            <span>base</span>
            <span>{PROFILE.location.split(",")[0]}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
