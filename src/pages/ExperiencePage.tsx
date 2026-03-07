import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Wind River",
    role: "Embedded Software Engineer Intern",
    location: "Kanata, Ontario",
    period: "January 2026 – Present",
    description: [
      "Working with the Helix Virtualization Platform (HVP) team, contributing to the development of a FACE conformant release.",
    ],
    current: true,
  },
  {
    company: "Collins Aerospace",
    role: "Junior Software Engineer",
    location: "Kanata, Ontario",
    period: "January 2025 – December 2025",
    description: [
      "Developed a user-friendly Flask web application to simplify system configurations for the RT-2200A Wideband HF Radio, enhancing usability and accessibility for users.",
      "Designed and implemented a ZeroMQ-based IPC protocol, enabling seamless communication between the front-end web interface and the backend configuration tool.",
      "Built backend support for system configuration management, including features such as changing network settings, SSH enablement, and time synchronization control.",
    ],
    current: false,
  },
  {
    company: "Carleton University",
    role: "Teaching Assistant - Differential Equations",
    location: "Ottawa, Ontario",
    period: "September 2024 – December 2024",
    description: [
      "Led weekly tutorials, explaining key concepts using real-world examples to improve comprehension and retention.",
      "Provided personalized guidance to help students tackle complex mathematical exercises, fostering critical thinking and analytical skills.",
      "Graded tests and assessments and provided constructive feedback to students utilizing rubrics to ensure fair grading.",
    ],
    current: false,
  },
  {
    company: "Best Theratronics Ltd",
    role: "Software Developer",
    location: "Kanata, Ontario",
    period: "May 2024 – August 2024",
    description: [
      "Enhanced a C# application for surgical tumor removal by improving code performance and integrating new features, ensuring precise intraoperative imaging for better tumor excision outcomes.",
      "Managed testing and updates for radiation therapy tables, optimizing patient positioning accuracy by 22%.",
      "Proposed and implemented an upgrade of a DOS-based test suite to a modern C# application, improving serial communication and validation efficiency.",
    ],
    current: false,
  },
];

export default function ExperiencePage() {
  return (
    <section className="py-24 px-6 relative pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-violet-glow font-mono">&gt;</span> Experience
        </h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-glow via-violet-deep to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-6">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? "bg-violet-glow border-violet-glow animate-pulse"
                        : "bg-charcoal border-violet-deep"
                    }`}
                  />
                </div>

                {/* Content card */}
                <div className="flex-1 gradient-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-violet-dark/30 rounded-lg hidden sm:block">
                      <Briefcase className="w-6 h-6 text-violet-glow" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-text-primary">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-violet-glow/20 text-violet-glow rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-violet-glow font-medium mb-1">
                        {exp.role}
                      </p>
                      <p className="text-text-muted text-sm mb-3">
                        {exp.location} • {exp.period}
                      </p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-text-secondary text-sm leading-relaxed flex gap-2"
                          >
                            <span className="text-violet-glow mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
