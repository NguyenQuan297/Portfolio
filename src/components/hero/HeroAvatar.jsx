import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroAvatar() {
  const [hover, setHover] = useState(false);

  // 12 particles flying up on hover
  const particles = Array.from({ length: 12 }, (_, i) => i);
  // 6 aura streaks rotating around the avatar
  const streaks = Array.from({ length: 6 }, (_, i) => i);

  return (
    <motion.div
      className="relative h-[420px] w-[380px] max-w-full cursor-pointer select-none"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    >
      {/* Soft pulsing aura behind the character (always on, intensifies on hover) */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.35),transparent_60%)] blur-2xl"
        animate={{
          width: hover ? 460 : 320,
          height: hover ? 460 : 320,
          opacity: hover ? 0.9 : 0.45,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Energy rings — only on hover */}
      <AnimatePresence>
        {hover &&
          [0, 1, 2].map((i) => (
            <motion.div
              key={`ring-${i}`}
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50"
              initial={{ width: 200, height: 200, opacity: 0.7 }}
              animate={{ width: 520, height: 520, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.6,
                delay: i * 0.45,
                ease: "easeOut",
                repeat: Infinity,
              }}
              style={{
                boxShadow: "0 0 30px rgba(34,211,238,0.35)",
              }}
            />
          ))}
      </AnimatePresence>

      {/* Aura streaks rotating slowly behind the character */}
      <AnimatePresence>
        {hover && (
          <motion.div
            key="streaks"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.4 },
              rotate: { duration: 14, repeat: Infinity, ease: "linear" },
            }}
            style={{ width: 380, height: 380 }}
          >
            {streaks.map((i) => (
              <span
                key={`streak-${i}`}
                className="absolute left-1/2 top-1/2 h-[2px] w-32 -translate-y-1/2 origin-left bg-gradient-to-r from-cyan-300/0 via-cyan-200/60 to-transparent"
                style={{
                  transform: `rotate(${(360 / streaks.length) * i}deg) translateX(60px)`,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particles flying up on hover */}
      <AnimatePresence>
        {hover &&
          particles.map((i) => {
            const x = -90 + Math.random() * 180;
            const delay = Math.random() * 0.6;
            const duration = 1.4 + Math.random() * 1.0;
            const size = 2 + Math.random() * 3;
            return (
              <motion.span
                key={`particle-${i}`}
                className="pointer-events-none absolute left-1/2 bottom-10 rounded-full bg-cyan-300"
                style={{
                  width: size,
                  height: size,
                  boxShadow: "0 0 8px rgba(34,211,238,0.9)",
                }}
                initial={{ x, y: 0, opacity: 0, scale: 0.6 }}
                animate={{
                  x: x + (Math.random() * 40 - 20),
                  y: -260 - Math.random() * 80,
                  opacity: [0, 1, 0],
                  scale: [0.6, 1, 0.4],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            );
          })}
      </AnimatePresence>

      {/* Avatar wrapper — handles standing-up motion */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: hover ? -22 : 0,
          scale: hover ? 1.06 : 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      >
        {/* Crossfade between sitting and standing */}
        <div className="relative h-full w-full">
          {/* Sitting (default) */}
          <motion.img
            src="/hero-avatar.png"
            alt="Quan sitting with laptop"
            draggable={false}
            className="absolute inset-0 m-auto h-full w-full object-contain"
            style={{ filter: "saturate(1.05) contrast(1.05) drop-shadow(0 28px 35px rgba(0,0,0,0.55))" }}
            animate={
              hover
                ? { opacity: 0, scale: 0.96 }
                : {
                    opacity: 1,
                    scale: 1,
                    y: [0, -6, 0], // breathing
                  }
            }
            transition={
              hover
                ? { duration: 0.45, ease: "easeOut" }
                : {
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 },
                    y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
                  }
            }
          />

          {/* Laptop screen glow — only when sitting */}
          <motion.div
            className="pointer-events-none absolute"
            // positioned roughly over the laptop on the sitting avatar
            style={{
              left: "32%",
              top: "62%",
              width: "36%",
              height: "14%",
              background:
                "radial-gradient(ellipse at center, rgba(34,211,238,0.55), rgba(34,211,238,0) 70%)",
              filter: "blur(6px)",
            }}
            animate={{
              opacity: hover ? 0 : [0.5, 0.95, 0.5],
            }}
            transition={
              hover
                ? { duration: 0.3 }
                : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
            }
          />

          {/* Standing (hover) */}
          <motion.img
            src="/hero-avatar-standPose.png"
            alt="Quan standing"
            draggable={false}
            className="absolute inset-0 m-auto h-full w-full object-contain"
            style={{ filter: "saturate(1.08) contrast(1.06) drop-shadow(0 28px 35px rgba(0,0,0,0.55)) drop-shadow(0 0 18px rgba(34,211,238,0.45))" }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={
              hover
                ? { opacity: 1, scale: 1, y: [0, -3, 0] }
                : { opacity: 0, scale: 0.96 }
            }
            transition={
              hover
                ? {
                    opacity: { duration: 0.5, ease: "easeOut" },
                    scale: { duration: 0.5, ease: "easeOut" },
                    y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
                  }
                : { duration: 0.4, ease: "easeOut" }
            }
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
