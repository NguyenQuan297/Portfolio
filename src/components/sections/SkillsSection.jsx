import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";

const groups = [
  {
    label: "Languages",
    items: ["Python", "C++", "JavaScript"],
  },
  {
    label: "AI / ML",
    items: ["PyTorch", "ONNX Runtime", "librosa", "CREPE"],
  },
  {
    label: "Data Engineering",
    items: ["PySpark", "Apache Airflow"],
  },
  {
    label: "Backend & Web",
    items: ["FastAPI", "React", "Tone.js"],
  },
  {
    label: "Cloud",
    items: ["AWS EC2", "AWS S3", "AWS Athena"],
  },
  {
    label: "Databases & Tools",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Docker", "Redis", "FFmpeg", "Git"],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills" eyebrow="ATS + HUMAN FRIENDLY">
      <p className="mb-6 text-sm text-gray-200 md:text-base">
        Core technologies I use to build scalable backend systems, AI products,
        and data pipelines.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group, idx) => (
          <motion.div
            key={group.label}
            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md p-4 shadow-lg shadow-cyan-500/10 transition hover:border-cyan-200/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.18)] ${
              idx === 0
                ? "md:col-span-2 p-6 shadow-[0_0_35px_rgba(34,211,238,0.12)]"
                : ""
            }`}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={idx * 90}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_55%)]" />
            </div>

            <div className="relative mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white md:text-base">
                {group.label}
              </h3>
            </div>

            <div className="relative flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-0.5 text-[11px] font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-400/10 hover:text-white md:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
