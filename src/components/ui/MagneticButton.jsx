import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  variant = "primary",
  onClick,
}) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x, y });
  };

  const baseClasses =
    "relative overflow-hidden rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition shadow-lg backdrop-blur";
  const primaryClasses =
    "bg-white text-black shadow-cyan-500/50 hover:bg-cyan-100";
  const outlineClasses =
    "border border-white/30 text-white bg-transparent hover:bg-white/10";

  return (
    <motion.button
      ref={ref}
      className={`${baseClasses} ${
        variant === "primary" ? primaryClasses : outlineClasses
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPos({ x: 0, y: 0 });
      }}
      onClick={onClick}
      animate={{
        x: hover ? pos.x * 0.25 : 0,
        y: hover ? pos.y * 0.25 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-gradient"
        animate={{
          opacity: hover ? 1 : 0,
          scale: hover ? 1.4 : 0.4,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

