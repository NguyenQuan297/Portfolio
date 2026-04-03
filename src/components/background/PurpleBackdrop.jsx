import { motion, useScroll, useTransform } from "framer-motion";

export default function PurpleBackdrop() {
  const { scrollYProgress } = useScroll();
  // Fade in after the HERO section so the first screen keeps its original look.
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.38], [0, 0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-24 left-[8%] h-[460px] w-[460px] rounded-full bg-[#312e81]/22 blur-3xl" />
      <div className="absolute top-[18%] right-[-8%] h-[520px] w-[520px] rounded-full bg-[#1e293b]/16 blur-3xl" />
      <div className="absolute bottom-[-12%] left-[28%] h-[420px] w-[420px] rounded-full bg-[#312e81]/18 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(49,46,129,0.22),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(34,211,238,0.10),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(30,41,59,0.14),transparent_50%)]" />
    </motion.div>
  );
}

