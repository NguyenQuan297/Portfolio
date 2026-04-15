import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  subtitle,
  bulletPoints,
  impact,
  repoUrl,
  liveUrl,
  index = 0,
  featured = false,
}) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/90 p-5 shadow-xl shadow-cyan-500/10 ${
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
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,_#ec489933,_transparent_55%)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-3">
        <h3
          className={`text-base font-semibold text-white md:text-lg ${
            featured ? "text-xl md:text-2xl" : ""
          }`}
        >
          {title}
        </h3>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
          {subtitle}
        </p>

        <ul className="mt-2 space-y-2 text-xs text-gray-200 md:text-sm">
          {bulletPoints.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-3 text-xs text-cyan-300 md:text-sm">
          <span className="font-semibold">Impact: </span>
          {impact}
        </p>

        <div className="mt-4 flex gap-2">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-200 transition hover:bg-cyan-500/10"
            >
              Live
            </a>
          ) : null}

          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-200 transition hover:bg-cyan-500/10"
            >
              GitHub
            </a>
          ) : null}
          {!liveUrl && !repoUrl ? (
            <button className="rounded-full border border-cyan-400/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-200 opacity-50 cursor-not-allowed">
              Live / GitHub
            </button>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

