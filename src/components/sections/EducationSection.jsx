import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";

const honors = ["Dean’s List (Fall 2024)", "Provost’s List (Spring 2025)"];

export default function EducationSection() {
  return (
    <SectionWrapper id="education" title="Education" eyebrow="EDUCATION">
      <motion.div
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg shadow-cyan-500/10 transition hover:border-cyan-200/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4 }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute -inset-24 bg-[radial-gradient(circle_at_left_top,rgba(99,102,241,0.18),transparent_55%)]" />
        </div>

        <div className="relative space-y-5 text-sm text-gray-200 md:text-base">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-white md:text-xl">
                Bachelor of Science in Computer Science
              </h3>
              <p className="mt-1 text-sm text-gray-300">Troy University, USA</p>
            </div>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-200">
              Expected May 2026
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                GPA
              </span>
              <span className="font-semibold text-white">3.5 / 4.0</span>
            </span>
            <span className="text-sm text-gray-300">
              Focused on Data Engineering and Backend Systems
            </span>
          </div>

          <ul className="space-y-2">
            {honors.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-2 text-sm text-gray-200"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
