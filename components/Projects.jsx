"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectFilters } from "@/lib/projects";
import SectionHeading from "./SectionHeading";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const flagship = projects.find((p) => p.flagship);
  const secondary = projects.filter((p) => !p.flagship);
  const [filter, setFilter] = useState("All");

  const filtered = secondary.filter(
    (p) => filter === "All" || p.filters.includes(filter)
  );

  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          label="Projects"
          title={
            <>
              Selected <span className="text-accent">work</span>
            </>
          }
          sub="Real products built end to end — from SaaS platforms and full stack applications to AI systems and business websites."
        />

        {/* Featured project */}
        <div className="mb-12">
          <h3 className="section-label mb-6 flex items-center gap-2">
            Featured <span className="h-px w-8 bg-line" />
          </h3>
          {flagship && <FeaturedProject project={flagship} />}
        </div>

        {/* Showcase */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="section-label flex items-center gap-2">
              Project Showcase <span className="h-px w-8 bg-line" />
            </h3>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
              {projectFilters.map((f) => {
                const isActive = filter === f.value;
                return (
                  <button
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    role="tab"
                    aria-selected={isActive}
                    className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all ${
                      isActive
                        ? "border-transparent bg-accent text-white shadow-glow"
                        : "border-line bg-white text-body hover:border-ink/30 hover:text-ink"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
