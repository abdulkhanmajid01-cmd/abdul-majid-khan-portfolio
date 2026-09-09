import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://abdulmajidkhan.dev"),
  title: "Abdul Majid Khan | Full Stack Developer",
  description:
    "Abdul Majid Khan is a Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, APIs, SaaS platforms, AI-powered applications, and modern web development.",
  keywords: [
    "Full Stack Developer",
    "Abdul Majid Khan",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "SaaS",
    "CRMs",
    "REST APIs",
    "AI applications",
  ],
  openGraph: {
    title: "Abdul Majid Khan | Full Stack Developer",
    description:
      "Full Stack Developer building complete digital products — from interfaces and APIs to databases and intelligent integrations.",
    type: "website",
    url: "https://abdulmajidkhan.dev",
    siteName: "Abdul Majid Khan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Majid Khan | Full Stack Developer",
    description:
      "Full Stack Developer building scalable digital products from frontend to backend.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
