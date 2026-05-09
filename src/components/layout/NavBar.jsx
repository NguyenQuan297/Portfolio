import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed inset-x-0 top-4 z-30 flex items-center justify-between px-6 md:px-16">
      <motion.div
        className="text-lg font-semibold tracking-wide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm uppercase tracking-[0.3em] text-gray-200 backdrop-blur">
          Quan Nguyen
        </span>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`hidden gap-1 rounded-full border border-white/10 px-3 py-2 text-sm text-gray-200 shadow-lg backdrop-blur md:flex ${
          scrolled
            ? "bg-black/70 shadow-[0_0_30px_rgba(34,211,238,0.10)]"
            : "bg-black/40 shadow-cyan-500/10"
        }`}
      >
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="relative rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] transition"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 ring-1 ring-cyan-300/30 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span
                className={`relative transition-colors ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
}
