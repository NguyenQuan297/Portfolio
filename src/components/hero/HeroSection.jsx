import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "../background/ParticleBackground";
import MagneticButton from "../ui/MagneticButton";

export default function HeroSection() {
  const { scrollY } = useScroll();
  // Keep background movement subtle to avoid cropping important parts.
  const y = useTransform(scrollY, [0, 400], [0, 30]);

  const roles = ["Software Developer", "Data Developer", "AI Developer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const typed = roles[wordIndex].slice(0, charIndex);

  useEffect(() => {
    const current = roles[wordIndex];
    const typingSpeed = deleting ? 28 : 55;
    const pauseAfterTyped = 1400;
    const pauseAfterDeleted = 420;

    let timeoutId;

    if (!deleting) {
      if (charIndex < current.length) {
        timeoutId = setTimeout(() => setCharIndex((v) => v + 1), typingSpeed);
      } else {
        timeoutId = setTimeout(() => setDeleting(true), pauseAfterTyped);
      }
    } else {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => setCharIndex((v) => v - 1), typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % roles.length);
        }, pauseAfterDeleted);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, deleting, roles, wordIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 md:px-16"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-[url('/Portfolio_image.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            filter: "saturate(1.06) contrast(1.22) brightness(1.06)",
            transform: "scale(1)",
            willChange: "transform, filter",
            backgroundPosition: "50% 28%",
          }}
        />

        {/* DARK overlay + palette background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.82),rgba(30,41,59,0.48),rgba(49,46,129,0.30))]" />
        {/* HERO -> Section transition (blue/green to purple) */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[linear-gradient(to_top,rgba(34,211,238,0.22),rgba(49,46,129,0.08))]" />

        <motion.div
          className="absolute -inset-40 bg-[conic-gradient(at_top,_#312e81,_#22d3ee,_#1e293b,_transparent)] opacity-35 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-0 md:px-0 grid items-center gap-10 md:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col">
          <motion.h1
            className="mb-2 text-4xl font-semibold tracking-tight text-white md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Quan Nguyen
          </motion.h1>

          <motion.div
            className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 md:text-base text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <span>
              {typed}
              <span className="ml-1 inline-block animate-pulse text-white">|</span>
            </span>
          </motion.div>

          <motion.div
            className="mt-auto mb-6 flex w-full flex-wrap justify-start gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {["Kafka", "Spark", "AWS", "Distributed Systems"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1 text-xs font-medium text-cyan-300 transition hover:border-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.22)]"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex w-full flex-wrap items-center justify-start gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
          >
            <MagneticButton
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="flex justify-end">
          <motion.img
            src="/hero-avatar.png"
            alt="Hero avatar"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-[380px] max-w-full select-none object-contain filter drop-shadow-[0_28px_35px_rgba(0,0,0,0.55)]"
            style={{ filter: "saturate(1.05) contrast(1.05)" }}
          />
        </div>
      </div>

      <ParticleBackground />
    </section>
  );
}

