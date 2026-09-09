"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import ProjectPreview from "./ProjectPreview";

export default function FeaturedProject({ project, index }) {
  const number = String(index + 1).padStart(2, "0");
  const reverse = index % 2 === 1;
  const previewHref = project.live || project.github;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-white shadow-soft"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px]"
        style={{ backgroundColor: `${project.accent}0F` }}
      />
      <span className="pointer-events-none absolute right-4 top-2 select-none text-[clamp(4rem,8vw,6.5rem)] font-bold leading-none tracking-tighter text-ink/[0.045]">
        {number}
      </span>

      <div className="grid gap-0 lg:grid-cols-12">
        {/* Preview */}
        <div
          className={`relative border-line bg-ink/[0.02] p-6 sm:p-8 lg:col-span-7 ${
            reverse ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r"
          }`}
        >
          <a
            href={previewHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — visit live site`}
            className="block"
          >
            <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
              <ProjectPreview project={project} />
            </div>
          </a>
        </div>

        {/* Content */}
        <div
          className={`flex flex-col justify-center p-7 sm:p-10 lg:col-span-5 ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[13px] font-bold tracking-widest"
              style={{ color: project.accent }}
            >
              {number}
            </span>
            <span className="h-px w-8 bg-line" />
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-muted">
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold leading-tight tracking-tighter text-ink">
            {project.title}
          </h3>
          <p
            className="mt-2 text-[15px] font-medium"
            style={{ color: project.accent }}
          >
            {project.tagline}
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-body">
            {project.description}
          </p>

          {project.features.length > 0 && (
            <ul className="mt-5 grid gap-2">
              {project.features.slice(0, 4).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[13.5px] text-body"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-ink/5 px-3 py-1 text-[12.5px] font-medium text-ink"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:border-ink/30"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.live && (
              <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted">
                Real-world business project
                <ArrowUpRight className="h-4 w-4 text-accent" />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}