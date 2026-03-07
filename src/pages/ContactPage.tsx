import { Mail, Github, Linkedin, MapPin, FileText } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-24 px-6 relative pt-32 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-violet-glow font-mono">&gt;</span> Contact
        </h1>

        <div className="max-w-xl mx-auto">
          <p className="text-text-secondary text-center mb-12">
            Feel free to reach out if you'd like to collaborate, have any
            questions, or just want to connect!
          </p>

          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:ahmedsayidrashid@gmail.com"
              className="gradient-border p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="p-3 bg-violet-dark/30 rounded-lg">
                <Mail className="w-6 h-6 text-violet-glow" />
              </div>
              <div>
                <p className="text-text-muted text-sm">Email</p>
                <p className="text-text-primary font-medium">
                  ahmedsayidrashid@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ahmedsayidrashid"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="p-3 bg-violet-dark/30 rounded-lg">
                <Github className="w-6 h-6 text-violet-glow" />
              </div>
              <div>
                <p className="text-text-muted text-sm">GitHub</p>
                <p className="text-text-primary font-medium">
                  github.com/ahmedsayidrashid
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ahmed-rashid7721/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="p-3 bg-violet-dark/30 rounded-lg">
                <Linkedin className="w-6 h-6 text-violet-glow" />
              </div>
              <div>
                <p className="text-text-muted text-sm">LinkedIn</p>
                <p className="text-text-primary font-medium">
                  linkedin.com/in/ahmed-rashid7721
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="gradient-border p-6 flex items-center gap-4">
              <div className="p-3 bg-violet-dark/30 rounded-lg">
                <MapPin className="w-6 h-6 text-violet-glow" />
              </div>
              <div>
                <p className="text-text-muted text-sm">Location</p>
                <p className="text-text-primary font-medium">Ottawa, Canada</p>
              </div>
            </div>

            {/* Resume */}
            <a
              href="/Resume.pdf"
              download="Ahmed_Rashid_Resume.pdf"
              className="gradient-border p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="p-3 bg-violet-dark/30 rounded-lg">
                <FileText className="w-6 h-6 text-violet-glow" />
              </div>
              <div>
                <p className="text-text-muted text-sm">Resume</p>
                <p className="text-text-primary font-medium">
                  Download my resume (PDF)
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
