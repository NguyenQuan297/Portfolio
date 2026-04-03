import { motion } from "framer-motion";

export default function ParticleBackground() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, idx) => {
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * -20;
        const left = Math.random() * 100;

        return (
          <motion.div
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            className="absolute rounded-full bg-cyan-400/40 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: "110%",
            }}
            animate={{ y: "-130%", opacity: [0, 1, 0] }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeOut",
              delay,
            }}
          />
        );
      })}
    </div>
  );
}

