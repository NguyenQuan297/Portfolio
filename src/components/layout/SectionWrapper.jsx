export default function SectionWrapper({ id, title, eyebrow, children }) {
  return (
    <section
      id={id}
      className="relative flex min-h-screen items-center justify-center px-6 py-24 md:px-16"
    >
      {/* Tím đậm + blur nhẹ (after HERO) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.90),rgba(30,41,59,0.80),rgba(49,46,129,0.80))] backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(168,85,247,0.10),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.06),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col gap-10 md:flex-row md:items-start">
        <div
          className="md:w-1/3"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-offset="90"
        >
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {eyebrow}
            </p>
          )}

          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {title}
          </h2>

          <div className="mt-4 h-px w-16 bg-gradient-to-r from-cyan-400 to-indigo-500" />
        </div>

        <div
          className="md:w-2/3"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="90"
        >
          {children}
        </div>
      </div>
    </section>
  );
}

