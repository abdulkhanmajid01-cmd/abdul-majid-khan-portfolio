"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Sparkles,
  Plug,
  ArrowUpRight,
} from "lucide-react";
import { capabilities } from "@/lib/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const iconMap = {
  monitor: Monitor,
  server: Server,
  database: Database,
  cloud: Cloud,
  sparkles: Sparkles,
  plug: Plug,
};

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="section-label mb-4 flex items-center gap-2">
              About Me <span className="h-px w-8 bg-line" />
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-tighter text-ink">
              I build complete digital products — from interfaces and APIs to
              databases and intelligent integrations.
            </h2>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-body">
              I&apos;m a Software Engineering graduate and Full Stack Developer
              focused on building practical, scalable, and user-focused digital
              solutions. My work spans frontend interfaces, backend systems,
              APIs, databases, SaaS applications, integrations, and intelligent
              application features.
            </p>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-body">
              I take a software idea from a blank page to a working product —
              turning real business problems into reliable, well-structured
              technology.
            </p>
            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent"
            >
              See what I&apos;ve built
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 self-center sm:grid-cols-3"
          >
            {capabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon] || Monitor;
              return (
                <motion.div
                  key={cap.title}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="card group flex flex-col items-start gap-3 p-4 sm:p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[14.5px] font-semibold text-ink">
                    {cap.title}
                  </span>
                  <span className="h-1 w-6 rounded-full bg-accent/20 transition-all group-hover:w-9 group-hover:bg-accent" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
