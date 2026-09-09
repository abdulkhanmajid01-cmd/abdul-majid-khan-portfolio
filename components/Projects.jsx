"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectFilters } from "@/lib/projects";
import SectionHeading from "./SectionHeading";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);
  const [filter, setFilter] = useState("All");

  const filtered = secondary.filter(
    (p) => filter === "All" || p.filters.includes(filter)
  );

  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          label="Selected Work"
          title={
            <>
              Building digital products for{" "}
              <span className="text-accent">real-world problems.</span>
            </>
          }
          sub="From live business platforms and e-commerce stores to full stack SaaS, AI systems and mobile apps — real projects built for real businesses."
        />

        {/* Featured Work */}
        <div className="mb-16">
          <h3 className="section-label mb-7 flex items-center gap-2">
            Featured Work <span className="h-px w-8 bg-line" />
          </h3>

          <div className="flex flex-col gap-10">
            {featured.map((project, i) => (
              <FeaturedProject key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* More Projects */}
        <div>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h3 className="section-label flex items-center gap-2">
              More Projects <span className="h-px w-8 bg-line" />
            </h3>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter projects"
            >
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

          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <p className="rounded-2xl border border-dashed border-line bg-white px-6 py-12 text-center text-sm leading-relaxed text-muted">
              No more projects match this category — check the Featured Work
              above.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}