import { Github, Linkedin, BookOpen, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative pt-16">
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

      <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-text-primary via-violet-glow to-violet-deep bg-clip-text text-transparent">
        Ahmed Rashid
      </h1>
      <p className="text-xl md:text-2xl text-text-secondary text-center mb-8 font-mono">
        &lt;Embedded Software Engineer /&gt;
      </p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
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
        <Link
          to="/blog"
          className="group flex items-center gap-2 px-5 py-3 rounded-lg bg-charcoal/50 border border-slate hover:border-violet-glow transition-all duration-300 hover:glow-violet-sm"
        >
          <BookOpen className="w-5 h-5 text-violet-glow group-hover:text-text-primary transition-colors" />
          <span className="text-text-secondary group-hover:text-text-primary transition-colors">
            Blog
          </span>
          <span className="text-xs text-text-muted">(coming soon)</span>
        </Link>
      </div>

      <Link to="/about" className="absolute bottom-8 animate-float">
        <ChevronDown className="w-8 h-8 text-violet-glow/60 hover:text-violet-glow transition-colors" />
      </Link>
    </section>
  );
}
