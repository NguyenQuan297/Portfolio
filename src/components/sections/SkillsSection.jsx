import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";

export default function SkillsSection() {
  const groups = [
    {
      label: "Core Stack",
      items: ["Python", "Kafka", "Spark", "AWS", "PostgreSQL"],
    },
    {
      label: "Backend & Web",
      items: ["Node.js", "FastAPI", "Flask", "React.js"],
    },
    {
      label: "Data Engineering",
      items: ["PySpark", "Apache Airflow", "Spark Streaming"],
    },
    {
      label: "Cloud & DevOps",
      items: ["AWS (EC2, S3, Athena)", "Docker", "Redis"],
    },
    {
      label: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      label: "Additional Exposure",
      items: ["TensorFlow", "Machine Learning", "NLP (BERT)"],
    },
  ];

  return (
    <SectionWrapper id="skills" title="Skills" eyebrow="ATS + HUMAN FRIENDLY">
      <p className="mb-6 text-sm text-gray-200 md:text-base">
        Core technologies I use to build scalable backend systems and
        data-driven products.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group, idx) => (
          <motion.div
            key={group.label}
            className={`rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md p-4 shadow-lg shadow-cyan-500/10 ${
              idx === 0
                ? "md:col-span-2 p-6 shadow-[0_0_35px_rgba(34,211,238,0.12)]"
                : ""
            } transition hover:border-cyan-200/25 hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]`}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={idx * 120}
          >
            <div className="mb-3 flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white md:text-base">
                {group.label}
              </h3>
            </div>

            <ul className="space-y-1 text-xs text-gray-200 md:text-sm">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

