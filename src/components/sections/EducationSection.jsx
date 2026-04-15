import SectionWrapper from "../layout/SectionWrapper";

export default function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      eyebrow="EDUCATION"
    >
      <div className="space-y-4 text-sm text-gray-200 md:text-base">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-sm text-gray-300">Troy University, USA</p>
          <p className="mt-1 text-sm text-gray-300">
            Expected Graduation: May 2026
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-200">
            <span className="font-semibold text-white">GPA:</span> 3.51 / 4.0
          </p>
          <p className="mt-2 text-sm text-gray-200">Focused on Data Engineering and Backend Systems</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-200">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Dean’s List (Fall 2024)</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>Provost’s List (Spring 2025)</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-cyan-300">
            Relevant Coursework:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Data Structures",
              "Algorithms",
              "Operating Systems",
              "Machine Learning",
              "Databases",
              "AI",
            ].map((course) => (
              <div
                key={course}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-100 md:text-sm"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

