"use client";

import { motion } from "framer-motion";

export default function PageBanner({
  title,
  subtitle,
  accent,
}: {
  title: string;
  subtitle: string;
  accent?: string;
}) {
  return (
    <section className="relative bg-gradient-to-br from-rdc-blue via-rdc-blue-dark to-[#003d6b] py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-rdc-yellow/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-rdc-red/10 blur-3xl" />
        <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-rdc-blue via-rdc-yellow to-rdc-red opacity-60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {accent && (
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium rounded-full mb-5 border border-white/10">
              {accent}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
