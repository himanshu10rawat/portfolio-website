import { Sun, Moon, Mail, Folder } from "lucide-react";
import { NAV } from "../data";

export default function TitleBar({ theme, toggleTheme, onNav, active }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-[#0B0E14]/85 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="flex items-center h-11 px-4 gap-3">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
          <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
        </div>
        <div className="hidden sm:flex items-center font-mono text-xs text-neutral-500 dark:text-neutral-400 ml-2 gap-1">
          <Folder className="w-3.5 h-3.5" />
          <span>himanshu-rawat</span>
          <span className="mx-1 text-neutral-300 dark:text-neutral-700">/</span>
          <span className="text-neutral-700 dark:text-neutral-300">portfolio</span>
        </div>
        <nav className="hidden md:flex items-center ml-6 overflow-x-auto scrollbar-thin">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className={`px-3 py-2.5 font-mono text-xs border-b-2 whitespace-nowrap transition-colors ${
                active === n.id
                  ? "border-[#F2B84B] text-neutral-900 dark:text-white"
                  : "border-transparent text-neutral-500 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => onNav("contact")}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md bg-[#F2B84B] text-[#0B0E14] font-medium hover:bg-[#F5C468] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" /> hire me
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <div className="md:hidden flex overflow-x-auto scrollbar-thin border-t border-black/[0.06] dark:border-white/[0.06] px-2">
        {NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => onNav(n.id)}
            className={`px-3 py-2 font-mono text-[11px] whitespace-nowrap ${
              active === n.id ? "text-[#F2B84B]" : "text-neutral-500"
            }`}
          >
            {n.label}
          </button>
        ))}
      </div>
    </header>
  );
}
