"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/lib/experience";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 90%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          label="Experience"
          title={
            <>
              Where I&apos;ve <span className="text-accent">worked</span>
            </>
          }
          sub="Hands-on experience across real development teams and production-oriented projects."
        />

        <div ref={ref} className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-0 h-full w-px bg-line sm:left-1/2 sm:-translate-x-px">
            <motion.div
              style={{ height: lineHeight }}
              className="w-px bg-gradient-to-b from-accent to-coral"
            />
          </div>

          <div className="flex flex-col gap-10 sm:gap-14">
            {experiences.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className={`relative flex pl-12 sm:pl-0 ${
                    left ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-0 top-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-line bg-white sm:left-1/2 sm:-translate-x-1/2"
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${
                        exp.current
                          ? "bg-accent text-white"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <Briefcase className="h-3.5 w-3.5" />
                    </span>
                  </motion.span>

                  <div
                    className={`ml-0 w-full sm:w-[calc(50%-3rem)] ${
                      left ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <div className="card p-6 transition-shadow hover:shadow-card">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[13px] font-semibold text-accent">
                          {exp.company}
                        </span>
                        {exp.status && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            {exp.status}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1.5 text-[18px] font-semibold text-ink">
                        {exp.role}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-muted">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.date}
                      </p>
                      <p className="mt-3.5 text-[14.5px] leading-relaxed text-body">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
