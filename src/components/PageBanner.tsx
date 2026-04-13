"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PageBanner({
  title,
  subtitle,
  accent,
  backgroundImage,
}: {
  title: string;
  subtitle: string;
  accent?: string;
  backgroundImage?: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-rdc-blue/40" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-rdc-blue via-rdc-blue-dark to-[#003d6b]" />
      )}

      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-rdc-yellow/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-rdc-red/10 blur-3xl" />
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rdc-blue via-rdc-yellow to-rdc-red opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {accent && (
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium rounded-full mb-5 border border-white/20">
              {accent}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">{title}</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
