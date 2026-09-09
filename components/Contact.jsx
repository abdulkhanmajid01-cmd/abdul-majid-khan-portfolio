"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, ArrowUpRight, Loader2 } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  }

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-label mb-4 inline-flex items-center gap-2">
            Contact <span className="h-px w-8 bg-line" />
          </span>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tighter text-ink">
            Have a project <span className="text-accent">in mind?</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            Let&apos;s build something useful, scalable, and impactful. Whether
            it&apos;s a full stack application, a SaaS platform, or an
            intelligent feature — I&apos;m available to help.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13px] text-muted">Email</p>
                <a
                  href="mailto:YOUR_EMAIL"
                  className="text-[15px] font-semibold text-ink hover:text-accent"
                >
                  YOUR_EMAIL
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral/10 text-coral">
                <Github className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13px] text-muted">GitHub</p>
                <a
                  href="https://github.com/abdulkhanmajid01-cmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[15px] font-semibold text-ink hover:text-accent"
                >
                  abdu...-cmd
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-highlight/15 text-highlight">
                <Linkedin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13px] text-muted">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[15px] font-semibold text-ink hover:text-accent"
                >
                  YOUR_LINKEDIN
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card space-y-4 p-6 sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-muted focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-muted focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={update("message")}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-muted focus:border-accent"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-xl bg-emerald-500/10 px-4 py-3 text-[14px] font-medium text-emerald-600"
              >
                Thanks for reaching out! I&apos;ll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <p className="rounded-xl bg-coral/10 px-4 py-3 text-[14px] font-medium text-coral">
                Please fill in all fields before sending.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
