"use client";

import { motion } from "framer-motion";
import { skillsCategories } from "@/lib/skills";
import { fadeUp, viewportOnce } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          label="Skills"
          title={
            <>
              The stack I work <span className="text-accent">across</span>
            </>
          }
          sub="From frontend and backend to databases, cloud, and intelligent systems — the technologies I use to build full products."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillsCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              variants={fadeUp}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={`card p-7 ${cat.title === "Frontend" ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[13px] font-semibold text-accent">
                    {cat.id}
                  </span>
                  <h3 className="text-[17px] font-semibold text-ink">{cat.title}</h3>
                </div>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: cat.accent }}
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-body transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 flex items-start gap-3 rounded-2xl border border-line bg-white p-5 text-[14.5px] leading-relaxed text-body"
        >
          <span className="text-accent">✦</span>
          AI and intelligent systems run alongside my core full stack work — I
          integrate models, retrieval, and automation into practical software
          products rather than treating AI as a separate practice.
        </motion.p>
      </div>
    </section>
  );
}
