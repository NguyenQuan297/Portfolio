import SectionWrapper from "../layout/SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" eyebrow="WHO I AM">
      <div className="grid gap-8 text-sm md:grid-cols-2 md:items-start md:text-base">
        <div className="space-y-4 text-gray-200">
          <p>
            I am a Computer Science student at Troy University with a strong
            foundation in software engineering, distributed systems, and
            machine learning.
          </p>
          <p>
            I focus on building real-world systems — from real-time data
            pipelines to scalable backend architectures — using technologies
            like Kafka, Spark, and AWS.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-lg shadow-cyan-500/5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Highlights
          </p>
          <ul className="mt-3 space-y-3 text-gray-200">
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Strong CS fundamentals (GPA 3.51, Dean’s List, Provost’s List)</span>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Hands-on experience with real-time and distributed systems</span>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Built and deployed multiple full-stack and data engineering projects</span>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Interested in scalable, high-performance systems</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

