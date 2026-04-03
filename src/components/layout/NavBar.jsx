import React, { useEffect, useState } from "react";

export default function NavBar() {
  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed inset-x-0 top-4 z-30 flex items-center justify-between px-6 md:px-16">
      <div className="text-lg font-semibold tracking-wide">
        <span className="rounded-full bg-white/10 px-3 py-1 text-sm uppercase tracking-[0.3em] text-gray-200">
          Quan Nguyen
        </span>
      </div>

      <nav
        className={`hidden gap-8 rounded-full px-8 py-3 text-sm text-gray-200 shadow-lg backdrop-blur md:flex ${
          scrolled
            ? "bg-black/70 shadow-[0_0_30px_rgba(34,211,238,0.10)]"
            : "bg-black/40 shadow-cyan-500/10"
        }`}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="relative text-xs font-medium uppercase tracking-[0.2em] text-gray-300 transition hover:text-white"
          >
            <span>{item.label}</span>
            <span className="absolute inset-x-0 -bottom-1 mx-auto h-px w-0 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </nav>
    </div>
  );
}

