import { motion } from "framer-motion";

function GithubIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function ExternalIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3h7v7" />
      <path d="M21 3l-9 9" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export default function ProjectCard({
  title,
  subtitle,
  bulletPoints,
  impact,
  repoUrl,
  liveUrl,
  timeframe,
  role,
  stack = [],
  index = 0,
  featured = false,
}) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/90 p-5 shadow-xl shadow-cyan-500/10 transition-colors hover:border-cyan-300/30 ${
        featured
          ? "md:col-span-2 p-7 shadow-[0_0_60px_rgba(34,211,238,0.12)] border-cyan-200/20"
          : ""
      }`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-delay={index * 130}
    >
      {/* Animated gradient border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-[conic-gradient(from_120deg_at_50%_50%,rgba(34,211,238,0.0)_0%,rgba(34,211,238,0.35)_25%,rgba(168,85,247,0.0)_50%,rgba(236,72,153,0.30)_75%,rgba(34,211,238,0.0)_100%)] blur-[6px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,_#ec489933,_transparent_55%)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={`text-base font-semibold text-white md:text-lg ${
                featured ? "text-xl md:text-2xl" : ""
              }`}
            >
              {title}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              {subtitle}
            </p>
          </div>

          {timeframe ? (
            <span className="hidden shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-100/80 md:inline-block">
              {timeframe}
            </span>
          ) : null}
        </div>

        {role ? (
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
            {role}
          </p>
        ) : null}

        {stack.length > 0 ? (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 text-[10px] font-medium text-cyan-200/90"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <ul className="mt-2 space-y-2 text-xs text-gray-200 md:text-sm">
          {bulletPoints.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {impact ? (
          <p className="mt-3 text-xs text-cyan-300 md:text-sm">
            <span className="font-semibold">Impact: </span>
            {impact}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-500/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>
          ) : null}

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-500/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
            >
              <ExternalIcon />
              <span>Live Demo</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
