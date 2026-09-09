"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import ProjectPreview from "./ProjectPreview";

export default function FeaturedProject({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-white shadow-soft"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-[90px]" />

      <div className="grid gap-0 lg:grid-cols-2">
        {/* Preview */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden border-line bg-ink/2 p-6 sm:p-8 lg:border-r"
          aria-label={`${project.title} GitHub repository`}
        >
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
            <ProjectPreview project={project} />
          </div>

          <div className="mt-5 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-[11.5px] font-semibold text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Flagship Project
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-[11.5px] font-semibold text-ink">
              {project.category}
            </span>
          </div>
        </a>

        {/* Content */}
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <h3 className="text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-tight tracking-tighter text-ink">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[15px] font-medium text-accent">
            {project.tagline}
          </p>
          <p className="mt-5 text-[15.5px] leading-relaxed text-body">
            {project.description}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {project.features.slice(0, 6).map((f) => (
              <li key={f} className="flex items-start gap-2 text-[13.5px] text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-ink/5 px-3 py-1 text-[12.5px] font-medium text-ink"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
            <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted">
              Built to demonstrate a complete SaaS product
              <ArrowRight className="h-4 w-4 text-accent" />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
