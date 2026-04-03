import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-40 h-1 origin-left bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400"
      style={{ scaleX }}
    />
  );
}

