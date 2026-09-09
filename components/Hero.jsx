"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Mail,
  FileText,
  Monitor,
  Server,
  Database,
  Shield,
  Sparkles,
} from "lucide-react";

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const stack = [
  { label: "Frontend", icon: Monitor, accent: "#635BFF", detail: "React · Next.js" },
  { label: "API", icon: Shield, accent: "#FF6B6B", detail: "REST" },
  { label: "Backend", icon: Server, accent: "#FF6B6B", detail: "Node · Express" },
  { label: "Database", icon: Database, accent: "#FFD166", detail: "Mongo · SQL" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-x-0 top-0 h-[620px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute -top-24 -left-24 h-[440px] w-[440px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute top-20 right-[-120px] h-[400px] w-[400px] rounded-full bg-coral/10 blur-[120px]" />
        <div className="absolute top-[420px] left-1/2 h-[300px] w-[380px] -translate-x-1/2 rounded-full bg-highlight/10 blur-[110px]" />
      </div>

      <div className="container-px grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: text */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={heroItem}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Full Stack Developer
          </motion.span>

          <motion.h1
            variants={heroItem}
            className="mt-6 text-[clamp(2.9rem,7vw,6.8rem)] font-semibold leading-[0.98] tracking-tighter text-ink"
          >
            Building Scalable
            <br />
            Digital Products
            <br />
            <span className="relative inline-block text-accent">
              Frontend to Backend.
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                width="100%"
                height="12"
                viewBox="0 0 400 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 9 C 100 2, 300 2, 398 7"
                  stroke="#FFD166"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.8, ease: "easeInOut" }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-body"
          >
            I&apos;m Abdul Majid Khan, a Full Stack Developer focused on building
            modern web applications, SaaS products, APIs, dashboards,
            integrations, and intelligent digital solutions.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14.5px] font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5"
            >
              View My Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://github.com/abdulkhanmajid01-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-[14.5px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink/30"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-[14.5px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink/30"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-[14.5px] font-semibold text-body transition-colors hover:text-ink"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: full-stack architecture visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-accent/10 via-highlight/10 to-coral/10 blur-2xl" />

          <div className="card relative overflow-hidden p-2">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-coral/70" />
              <span className="h-3 w-3 rounded-full bg-highlight/80" />
              <span className="h-3 w-3 rounded-full bg-accent/70" />
              <span className="ml-3 flex items-center gap-1.5 rounded-md bg-ink/5 px-2.5 py-1 text-[11px] font-medium text-muted">
                full-stack · architecture
              </span>
            </div>

            <div className="relative p-5">
              {stack.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.25, duration: 0.5 }}
                >
                  <div className="animate-float-slow" style={{ animationDelay: `${i * 0.4}s` }}>
                    <div className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3.5 shadow-card">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${node.accent}1A`, color: node.accent }}
                      >
                        <node.icon className="h-[18px] w-[18px]" />
                      </span>
                      <div className="flex-1">
                        <p className="text-[13px] font-semibold text-ink">{node.label}</p>
                        <p className="text-[11px] text-muted">{node.detail}</p>
                      </div>
                      <span className="flex overflow-hidden rounded-full bg-ink/5 px-2 py-1 text-[9.5px] font-medium tracking-wide text-muted">
                        {["UI", "REST", "API", "DATA"][i]}
                      </span>
                    </div>
                  </div>
                  {i < stack.length - 1 && (
                    <div className="my-1.5 flex items-center justify-center">
                      <Sparkles className="h-3.5 w-3.5 text-accent/50" />
                    </div>
                  )}
                </motion.div>
              ))}

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
                    <Sparkles className="h-3.5 w-3.5 text-highlight" />
                  </span>
                  <span className="text-[12px] font-semibold">Intelligent Spaces</span>
                </div>
                <span className="text-[11px] text-white/60">AI-ready</span>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="absolute -left-5 top-6 flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 shadow-soft"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-[12px] font-semibold text-ink">Open to work</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted transition-colors hover:text-ink sm:flex"
        aria-label="Scroll to about section"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
