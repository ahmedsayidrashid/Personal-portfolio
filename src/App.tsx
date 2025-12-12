import { Github, Linkedin, BookOpen, Mail, ChevronDown } from "lucide-react";
import picture_of_me from "./assets/picture_of_me_facing_camera.JPG";
import picture_of_walkway from "./assets/picture_of_walkway.JPG";
import picture_of_me_looking_away from "./assets/picture_of_me_facing_the_lake.JPG";

function App() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-glow/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-deep/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative mb-8">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-violet-glow to-violet-deep p-1">
            <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center overflow-hidden">
              <span className="text-5xl font-bold text-violet-glow">AR</span>
            </div>
          </div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-glow to-violet-deep opacity-20 blur-xl -z-10" />
        </div>

        {/* Name & Tagline */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-text-primary via-violet-glow to-violet-deep bg-clip-text text-transparent">
          Ahmed Sayid Rashid
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary text-center mb-8 font-mono">
          &lt;Software Engineer /&gt;
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a
            href="https://github.com/ahmedsayidrashid"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 rounded-lg bg-charcoal/50 border border-slate hover:border-violet-glow transition-all duration-300 hover:glow-violet-sm"
          >
            <Github className="w-5 h-5 text-violet-glow group-hover:text-text-primary transition-colors" />
            <span className="text-text-secondary group-hover:text-text-primary transition-colors">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-rashid7721/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 rounded-lg bg-charcoal/50 border border-slate hover:border-violet-glow transition-all duration-300 hover:glow-violet-sm"
          >
            <Linkedin className="w-5 h-5 text-violet-glow group-hover:text-text-primary transition-colors" />
            <span className="text-text-secondary group-hover:text-text-primary transition-colors">
              LinkedIn
            </span>
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 px-5 py-3 rounded-lg bg-charcoal/50 border border-slate hover:border-violet-glow transition-all duration-300 hover:glow-violet-sm"
          >
            <BookOpen className="w-5 h-5 text-violet-glow group-hover:text-text-primary transition-colors" />
            <span className="text-text-secondary group-hover:text-text-primary transition-colors">
              Blog
            </span>
            <span className="text-xs text-text-muted">(coming soon)</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="absolute bottom-8 animate-float">
          <ChevronDown className="w-8 h-8 text-violet-glow/60 hover:text-violet-glow transition-colors" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-violet-glow font-mono">&gt;</span> About Me
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* About Text */}
            <div className="md:col-span-3 space-y-6">
              <div className="gradient-border p-6">
                <p className="text-text-secondary leading-relaxed">
                  Hello! I'm Ahmed, a passionate developer who loves building
                  things with code. I enjoy solving complex problems and
                  creating elegant solutions that make a difference.
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  When I'm not coding, you can find me exploring new
                  technologies, taking photos, or sharing my knowledge through
                  my blog.
                </p>
              </div>
              <a
                href="mailto:ahmedsayidrashid@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-deep to-violet-glow rounded-lg font-semibold text-text-primary hover:opacity-90 transition-opacity glow-violet-sm"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>

            {/* Photo Gallery Placeholder */}
            <div className="md:col-span-2 space-y-4">
              {/* Main photo */}
              <div className="gradient-border aspect-square">
                <div className="w-full h-full rounded-xl bg-charcoal flex items-center justify-center">
                  <img
                    src={picture_of_me}
                    alt="Picture of me facing the camera"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              {/* Secondary photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="gradient-border aspect-square">
                  <div className="w-full h-full rounded-xl bg-charcoal flex items-center justify-center">
                    <img
                      src={picture_of_walkway}
                      alt="Picture of a walkway"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="gradient-border aspect-square">
                  <div className="w-full h-full rounded-xl bg-charcoal flex items-center justify-center">
                    <img
                      src={picture_of_me_looking_away}
                      alt="Picture of me facing the lake"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted text-sm font-mono">
            &copy; {new Date().getFullYear()} Ahmed Sayid Rashid. Built with
            React + Tailwind.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
