"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { workflow } from "@/lib/services";
import { fadeUp, viewportOnce } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

export default function Workflow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="workflow" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          label="Process"
          title={
            <>
              How I <span className="text-accent">work</span>
            </>
          }
          sub="A clear, repeatable process that takes a product from understanding the problem to production."
        />

        <div ref={ref} className="relative">
          {/* Desktop horizontal line */}
          <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-line lg:block">
            <motion.div
              style={{ height: "100%", width: lineHeight }}
              className="bg-gradient-to-r from-accent to-coral"
            />
          </div>
          {/* Mobile vertical line */}
          <div className="absolute left-[14px] top-1 bottom-1 w-px bg-line lg:hidden" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {workflow.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative pl-10 lg:pl-0"
              >
                {/* Mobile node */}
                <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-line bg-white lg:hidden">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>

                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="hidden lg:flex"
                >
                  <span className="mx-auto flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-line bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                </motion.span>

                <div className="mt-4 lg:text-center">
                  <span className="font-mono text-[12px] font-semibold text-accent">
                    {step.num}
                  </span>
                  <h3 className="mt-1 text-[16px] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-body">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
