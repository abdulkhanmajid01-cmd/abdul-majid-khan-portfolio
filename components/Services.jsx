"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Cloud,
  Server,
  Sparkles,
  ShoppingBag,
  Plug,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/lib/services";
import { fadeUp, viewportOnce } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const iconMap = {
  layers: Layers,
  cloud: Cloud,
  server: Server,
  sparkles: Sparkles,
  cart: ShoppingBag,
  plug: Plug,
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          label="What I Build"
          title={
            <>
              Services &amp; <span className="text-accent">capabilities</span>
            </>
          }
          sub="Full stack development with a practical, business-first approach."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <motion.div
                key={service.num}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group card relative overflow-hidden p-7"
              >
                <span className="absolute right-6 top-7 font-mono text-[15px] font-semibold text-muted/40">
                  {service.num}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-body">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-ink p-7 text-white sm:flex-row"
        >
          <div>
            <h3 className="text-xl font-semibold">Have a project in mind?</h3>
            <p className="mt-1 text-[14.5px] text-white/70">
              Let&apos;s talk about your requirements.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
