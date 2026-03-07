import { Mail, GraduationCap, Award, Code } from "lucide-react";
import picture_of_lake from "../assets/picture_of_lake.jpg";
import walkway from "../assets/walkway.jpg";
import facing_the_lake from "../assets/facing_the_lake.jpg";

export default function AboutPage() {
  return (
    <section className="py-24 px-6 relative pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-violet-glow font-mono">&gt;</span> About Me
        </h1>

        <div className="grid md:grid-cols-5 gap-12 items-center mb-16">
          {/* About Text */}
          <div className="md:col-span-3 space-y-6">
            <div className="gradient-border p-6">
              <p className="text-text-secondary leading-relaxed">
                I'm Ahmed, an embedded software engineer with a strong interest
                in avionics and defense systems. I enjoy working close to the
                hardware and building reliable, low-level software that
                interfaces with real world systems.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Outside of development, I like exploring emerging technologies,
                experimenting with embedded projects, and documenting what I
                learn along the way.
              </p>
            </div>
            <a
              href="mailto:ahmedsayidrashid@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-dark hover:bg-violet-deep rounded-lg font-bold text-white brightness-125 transition-colors glow-violet-sm"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>

          {/* Photo Gallery */}
          <div className="md:col-span-2 space-y-4">
            <div className="gradient-border aspect-square">
              <div className="w-full h-full rounded-xl bg-charcoal flex items-center justify-center">
                <img
                  src={facing_the_lake}
                  alt="Picture of me facing the camera"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="gradient-border aspect-square">
                <div className="w-full h-full rounded-xl bg-charcoal flex items-center justify-center">
                  <img
                    src={walkway}
                    alt="Picture of a walkway"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="gradient-border aspect-square">
                <div className="w-full h-full rounded-xl bg-charcoal flex items-center justify-center">
                  <img
                    src={picture_of_lake}
                    alt="Picture of me facing the lake"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-violet-glow font-mono">&gt;</span> Education
          </h2>

          <div className="gradient-border p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-violet-dark/30 rounded-lg">
                <GraduationCap className="w-8 h-8 text-violet-glow" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-primary">
                  Carleton University
                </h3>
                <p className="text-violet-glow font-mono text-sm mb-2">
                  Sep 2022 - May 2027
                </p>
                <p className="text-text-secondary mb-3">
                  Bachelor of Engineering (B.Eng.), Software Engineering, 4th
                  Year
                </p>
                <p className="text-text-secondary mb-1">Ottawa, Canada</p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-text-muted">CGPA:</span>
                    <span className="text-text-primary font-semibold">
                      10.3/12
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-violet-glow" />
                    <span className="text-text-secondary">
                      Dean's List 2024/2025
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-text-muted text-sm">
                    <span className="text-text-secondary">
                      Relevant coursework:
                    </span>{" "}
                    Real-Time Systems, Operating Systems, Data Structures &
                    Algorithms, Object-Oriented Programming
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-violet-glow font-mono">&gt;</span> Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Languages */}
            <div className="gradient-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-violet-dark/30 rounded-lg">
                  <Code className="w-5 h-5 text-violet-glow" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["C/C++", "Python", "Java", "JavaScript", "C#"].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 bg-charcoal border border-slate rounded-lg text-text-secondary text-sm hover:border-violet-glow hover:text-violet-glow transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="gradient-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-violet-dark/30 rounded-lg">
                  <Code className="w-5 h-5 text-violet-glow" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">
                  Frameworks & Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "FreeRTOS",
                  "Flask",
                  "React",
                  "Docker",
                  "Git",
                  "Pico SDK",
                  "Arduino",
                  "ZeroMQ",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-charcoal border border-slate rounded-lg text-text-secondary text-sm hover:border-violet-glow hover:text-violet-glow transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
