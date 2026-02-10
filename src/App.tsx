import { Github, Linkedin, BookOpen, Mail, ChevronDown } from "lucide-react";
import picture_of_me from "./assets/picture_of_me_facing_camera.JPG";
import picture_of_walkway from "./assets/picture_of_walkway.JPG";
import picture_of_me_looking_away from "./assets/picture_of_me_facing_the_lake.JPG";
import ntp_server_image from "./assets/NTP_server.jpg";
import out_of_my_room_image from "./assets/out_of_my_room.jpg";
function App() {
  return (
    <main className="min-h-screen">
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
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

        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-text-primary via-violet-glow to-violet-deep bg-clip-text text-transparent">
          Ahmed Rashid
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary text-center mb-8 font-mono">
          &lt;Embedded Software Engineer /&gt;
        </p>

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

        <a href="#about" className="absolute bottom-8 animate-float">
          <ChevronDown className="w-8 h-8 text-violet-glow/60 hover:text-violet-glow transition-colors" />
        </a>
      </section>

      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-violet-glow font-mono">&gt;</span> About Me
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-6">
              <div className="gradient-border p-6">
                <p className="text-text-secondary leading-relaxed">
                  I’m Ahmed, an embedded software engineer with a strong
                  interest in avionics and defense systems. I enjoy working
                  close to the hardware and building reliable, low-level
                  software that interfaces with real world systems.
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  Outside of development, I like exploring emerging
                  technologies, experimenting with embedded projects, and
                  documenting what I learn along the way.
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

            <div className="md:col-span-2 space-y-4">
              <div className="gradient-border aspect-square">
                <div className="w-full h-full rounded-xl bg-charcoal flex items-center justify-center">
                  <img
                    src={picture_of_me}
                    alt="Picture of me facing the camera"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
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

      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-violet-glow font-mono">&gt;</span> Projects
          </h2>

          <div className="space-y-8">
            <div className="gradient-border p-6">
              <div className="aspect-video bg-charcoal rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={ntp_server_image}
                  alt="Minimal NTP Server"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Minimal-NTP-Server
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A lightweight network time protocol (NTP) server built from
                scratch to synchronize devices connected locally to my PC. It
                implements core NTP packet handling and time synchronization
                logic, serving as a minimal, educational alternative to
                full-scale NTP services.
              </p>
              <a
                href="https://github.com/ahmedsayidrashid/Minimal-NTP-Server"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-glow hover:text-text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>

            <div className="gradient-border p-6">
              <div className="aspect-video bg-charcoal rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={out_of_my_room_image}
                  alt="Out of my room"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Out-of-my-room
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A lightweight face detection system built on a Raspberry Pi 4
                using a Logitech webcam to monitor my room and send alerts
                whenever a sibling or anyone else enters.
              </p>
              <a
                href="https://github.com/ahmedsayidrashid/Out-of-my-room"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-glow hover:text-text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted text-sm font-mono">
            &copy; {new Date().getFullYear()} Ahmed Rashid.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
