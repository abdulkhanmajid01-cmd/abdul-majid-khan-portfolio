"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 12 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98], delay: index * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-2 hover:border-ink/20 hover:shadow-card"
    >
      <div className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0 opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.13]"
          style={{
            background: `linear-gradient(135deg, ${project.accent}, transparent)`,
          }}
        />
        <div
          className="relative p-4 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          style={{ minHeight: project.frame === "phone" ? "auto" : "200px" }}
        >
          <ProjectPreview project={project} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span
          className="text-[11.5px] font-semibold uppercase tracking-wider"
          style={{ color: project.accent }}
        >
          {project.category}
        </span>
        <h3 className="mt-2 text-[19px] font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-ink/5 px-2.5 py-0.5 text-[11.5px] font-medium text-muted"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-[11.5px] font-medium text-muted">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3.5 text-[13px] font-semibold text-ink transition-colors hover:border-ink/30"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live site`}
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          <span className="ml-auto inline-flex items-center gap-1 text-[13px] font-medium text-muted transition-colors group-hover:text-accent">
            View details
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
