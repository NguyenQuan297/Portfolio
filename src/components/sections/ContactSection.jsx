import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";

function GithubIcon({ className = "h-5 w-5" }) {
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

function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0z" />
    </svg>
  );
}

const links = [
  {
    label: "Email",
    handle: "justinvu3689@gmail.com",
    href: "mailto:justinvu3689@gmail.com",
    Icon: MailIcon,
    accent: "from-rose-400/30 to-orange-300/20",
    iconColor: "text-rose-200",
  },
  {
    label: "GitHub",
    handle: "github.com/NguyenQuan297",
    href: "https://github.com/NguyenQuan297",
    Icon: GithubIcon,
    accent: "from-slate-200/20 to-slate-400/10",
    iconColor: "text-white",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/quan-nguyen-897798218",
    href: "https://www.linkedin.com/in/quan-nguyen-897798218",
    Icon: LinkedinIcon,
    accent: "from-sky-400/30 to-blue-500/20",
    iconColor: "text-sky-200",
  },
];

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" title="Contact" eyebrow="LET'S CONNECT">
      <div className="space-y-8 text-sm text-gray-200 md:text-base">
        <div className="space-y-3">
          <p>
            I’m actively seeking internship or entry-level opportunities in
            Software Engineering, Data Engineering, or AI Engineering.
          </p>
          <p>Let’s connect and build something impactful.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {links.map(({ label, handle, href, Icon, accent, iconColor }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:border-cyan-200/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition group-hover:opacity-100`}
              />
              <span
                className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 ${iconColor} transition group-hover:scale-110`}
              >
                <Icon />
              </span>
              <div className="relative min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  {label}
                </p>
                <p className="truncate text-sm text-white">{handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
