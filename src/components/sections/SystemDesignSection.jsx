import SectionWrapper from "../layout/SectionWrapper";

export default function SystemDesignSection() {
  return (
    <SectionWrapper
      id="system"
      title="System Design Approach"
      eyebrow="SYSTEM THINKING (GAME CHANGER)"
    >
      <div className="grid gap-10 text-sm md:grid-cols-2 md:items-start md:text-base">
        <div className="space-y-4 text-gray-200">
          <p>I approach problems from a system perspective:</p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Designing scalable data pipelines (batch vs streaming)</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Handling real-time constraints and SLA-based systems</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Optimizing performance with caching (Redis) and efficient querying</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Deploying distributed systems on cloud infrastructure (AWS)</span>
            </li>
          </ul>

          <p className="text-gray-300">
            I focus on building systems that are not only functional, but also
            scalable, maintainable, and production-ready.
          </p>

          <p className="text-sm text-gray-200">
            <span className="font-semibold text-white">Trade-offs:</span>{" "}
            latency vs cost, consistency vs performance.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            System Flow
          </p>

          <div className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-md">
            <div className="space-y-4">
              <div className="rounded-xl border border-cyan-400/20 bg-black/20 px-4 py-3 text-xs text-gray-100">
                Data Pipelines
                <div className="mt-1 text-[11px] text-gray-300">Batch vs Streaming</div>
              </div>
              <div className="flex justify-center text-cyan-300">↓</div>
              <div className="rounded-xl border border-cyan-400/20 bg-black/20 px-4 py-3 text-xs text-gray-100">
                Real-Time Constraints
                <div className="mt-1 text-[11px] text-gray-300">
                  SLA + Monitoring
                </div>
              </div>
              <div className="flex justify-center text-cyan-300">↓</div>
              <div className="rounded-xl border border-cyan-400/20 bg-black/20 px-4 py-3 text-xs text-gray-100">
                Performance Layer
                <div className="mt-1 text-[11px] text-gray-300">
                  Caching + Efficient Queries
                </div>
              </div>
              <div className="flex justify-center text-cyan-300">↓</div>
              <div className="rounded-xl border border-cyan-400/20 bg-black/20 px-4 py-3 text-xs text-gray-100">
                Cloud Deployment
                <div className="mt-1 text-[11px] text-gray-300">
                  AWS + Distributed Systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

