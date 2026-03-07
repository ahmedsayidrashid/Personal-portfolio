import { BookOpen, Clock } from "lucide-react";

export default function BlogPage() {
  return (
    <section className="py-24 px-6 relative pt-32 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-violet-glow font-mono">&gt;</span> Blog
        </h1>

        <div className="flex flex-col items-center justify-center py-16">
          <div className="relative mb-8">
            <div className="p-6 bg-violet-dark/20 rounded-full">
              <BookOpen className="w-16 h-16 text-violet-glow" />
            </div>
            <div className="absolute -inset-4 rounded-full bg-violet-glow/10 blur-xl -z-10 animate-pulse-glow" />
          </div>

          <h2 className="text-2xl font-bold text-text-primary mb-4 text-center">
            Coming Soon
          </h2>

          <p className="text-text-secondary text-center max-w-md mb-8">
            I'm working on some exciting content about embedded systems,
            software engineering, and my learning journey. Stay tuned!
          </p>

          <div className="flex items-center gap-2 text-text-muted">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-mono">Under Construction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
