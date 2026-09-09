import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function SectionHeading({ label, title, sub, align = "left", id }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={`mb-12 max-w-2xl sm:mb-16 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {label && (
        <span className="section-label mb-4 flex items-center gap-2">
          {label}
          <span className="h-px w-8 bg-line" />
        </span>
      )}
      <h2
        id={id}
        className="text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.05] tracking-tighter"
      >
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-[17px] leading-relaxed text-body">{sub}</p>
      )}
    </motion.div>
  );
}
