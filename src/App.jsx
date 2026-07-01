import { useState, useEffect, useRef } from "react";
import useTheme from "./useTheme";
import TitleBar from "./components/TitleBar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StatusBar from "./components/StatusBar";
import { NAV } from "./data";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [active, setActive] = useState("home");
  const sectionsRef = useRef({});

  useEffect(() => {
    NAV.forEach((n) => {
      sectionsRef.current[n.id] = document.getElementById(n.id);
    });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    Object.values(sectionsRef.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0B0E14] text-neutral-900 dark:text-neutral-200 transition-colors duration-300">
      <TitleBar theme={theme} toggleTheme={toggleTheme} onNav={onNav} active={active} />
      <div className="flex max-w-[88rem] mx-auto">
        <Sidebar active={active} onNav={onNav} />
        <main className="flex-1 min-w-0">
          <Hero onNav={onNav} />
          <div className="border-t border-black/[0.06] dark:border-white/[0.06]" />
          <About />
          <div className="border-t border-black/[0.06] dark:border-white/[0.06]" />
          <Skills />
          <div className="border-t border-black/[0.06] dark:border-white/[0.06]" />
          <Experience />
          <div className="border-t border-black/[0.06] dark:border-white/[0.06]" />
          <Projects />
          <div className="border-t border-black/[0.06] dark:border-white/[0.06]" />
          <Contact />
          <StatusBar active={active} />
        </main>
      </div>
    </div>
  );
}
