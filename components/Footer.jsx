"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-px flex flex-col items-center gap-6 py-12 text-center sm:py-14">
        <div>
          <a
            href="#home"
            className="text-[18px] font-semibold tracking-tight text-ink"
          >
            Abdul Majid Khan
          </a>
          <p className="mt-1 text-[13.5px] text-muted">Full Stack Developer</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/abdulkhanmajid01-cmd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-ink/30 hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-ink/30 hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:YOUR_EMAIL"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-ink/30 hover:text-ink"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="text-[13px] text-muted">
          © 2026 Abdul Majid Khan. All rights reserved.
        </p>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-soft transition-colors hover:bg-accent"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
