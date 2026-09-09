/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F8F8F5",
          alt: "#FFFFFF",
        },
        ink: "#111111",
        body: "#5F5F5F",
        muted: "#8A8A8A",
        line: "#E8E8E3",
        accent: "#635BFF",
        coral: "#FF6B6B",
        highlight: "#FFD166",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(17,17,17,0.12)",
        card: "0 6px 30px -12px rgba(17,17,17,0.10)",
        glow: "0 8px 40px -8px rgba(99,91,255,0.25)",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-slower": "floatSlow 8s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
