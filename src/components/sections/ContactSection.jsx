import SectionWrapper from "../layout/SectionWrapper";

export default function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      eyebrow="LET'S CONNECT"
    >
      <div className="space-y-6 text-sm text-gray-200 md:text-base">
        <div className="space-y-3">
          <p>
            I’m actively seeking internship or entry-level opportunities in
            Software Engineering or Data Engineering.
          </p>
          <p>Let’s connect and build something impactful.</p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            <a
              href="mailto:justinvu3689@gmail.com"
              className="text-cyan-300 underline-offset-2 hover:underline"
            >
              justinvu3689@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">GitHub:</span>{" "}
            <a
              href="https://github.com/NguyenQuan297"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 underline-offset-2 hover:underline"
            >
              github.com/NguyenQuan297
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/NguyenQuan297"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 underline-offset-2 hover:underline"
            >
              linkedin.com/in/NguyenQuan297
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">Location:</span> USA /
            Open to relocation
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

