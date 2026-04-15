import SectionWrapper from "../layout/SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" eyebrow="WHO I AM">
      <div className="grid gap-8 text-sm md:grid-cols-2 md:items-start md:text-base">
        <div className="space-y-4 text-gray-200">
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
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-lg shadow-cyan-500/5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Highlights
          </p>
          <ul className="mt-3 space-y-3 text-gray-200">
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Strong CS fundamentals (GPA 3.51, Dean’s &amp; Provost’s List)</span>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Built and deployed real-world systems (CRM, data pipelines)</span>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Experience with real-time processing and distributed systems</span>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Focused on scalable backend and data engineering</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

