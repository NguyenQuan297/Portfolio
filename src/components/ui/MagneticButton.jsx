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
    "group/btn relative overflow-hidden rounded-full px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition shadow-lg backdrop-blur";
  const primaryClasses =
    "bg-white text-black shadow-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]";
  const outlineClasses =
    "border border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-cyan-200/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]";

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

      {/* shimmer sweep on hover */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 z-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[120%] group-hover/btn:opacity-60" />

      <motion.span
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.45),transparent_60%)]"
        animate={{
          opacity: hover ? 1 : 0,
          scale: hover ? 1.4 : 0.4,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
