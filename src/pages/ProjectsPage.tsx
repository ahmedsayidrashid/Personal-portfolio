import { Github } from "lucide-react";
import ntp_server_image from "../assets/NTP_server.jpg";
import out_of_my_room_image from "../assets/out_of_my_room.jpg";

const projects = [
  {
    title: "Minimal-NTP-Server",
    description:
      "A lightweight network time protocol (NTP) server built from scratch to synchronize devices connected locally to my PC. It implements core NTP packet handling and time synchronization logic, serving as a minimal, educational alternative to full-scale NTP services.",
    image: ntp_server_image,
    github: "https://github.com/ahmedsayidrashid/Minimal-NTP-Server",
  },
  {
    title: "Out-of-my-room",
    description:
      "A lightweight face detection system built on a Raspberry Pi 4 using a Logitech webcam to monitor my room and send alerts whenever a sibling or anyone else enters.",
    image: out_of_my_room_image,
    github: "https://github.com/ahmedsayidrashid/Out-of-my-room",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-24 px-6 relative pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-violet-glow font-mono">&gt;</span> Projects
        </h1>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="gradient-border p-6">
              <div className="aspect-video bg-charcoal rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-glow hover:text-text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
