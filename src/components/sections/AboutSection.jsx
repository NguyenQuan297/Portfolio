import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";

const highlights = [
  "Strong CS fundamentals (GPA 3.5, Dean’s & Provost’s List)",
  "Built and deployed real-world systems (CRM, data pipelines)",
  "Experience with real-time processing and distributed systems",
  "Focused on scalable backend and data engineering",
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" eyebrow="WHO I AM">
      <div className="grid gap-8 text-sm md:grid-cols-2 md:items-start md:text-base">
        <motion.div
          className="space-y-4 text-gray-200"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I’m a Computer Science student at Troy University with hands-on
            experience building real-world systems — from real-time lead
            management platforms to large-scale data pipelines.
          </p>
          <p>
            I specialize in backend engineering and data infrastructure,
            working with technologies like FastAPI, PySpark, and AWS to design
            scalable, production-ready systems.
          </p>
          <p>
            My focus is on building systems that handle real-time constraints,
            large datasets, and distributed workflows — not just prototypes,
            but systems that can actually be used.
          </p>
        </motion.div>

        <motion.div
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-lg shadow-cyan-500/5 transition hover:border-cyan-200/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_55%)]" />
          </div>

          <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Highlights
          </p>
          <ul className="relative mt-3 space-y-3 text-gray-200">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                className="flex gap-3 leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              >
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
