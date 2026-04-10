"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Heart, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rdc-blue via-rdc-blue-dark to-[#003d6b] min-h-[85vh] flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-rdc-yellow/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-rdc-red/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        {/* DRC flag diagonal stripe (subtle) */}
        <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-rdc-blue via-rdc-yellow to-rdc-red opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/10">
              <Star size={14} className="text-rdc-yellow" />
              ASBL - République Démocratique du Congo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Les Amis de{" "}
              <span className="text-rdc-yellow">Doudou Fwamba</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Ensemble pour le développement communautaire, l&apos;éducation, la santé
              et l&apos;amélioration des conditions de vie dans le district de Tshangu
              et à travers toute la RDC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-rdc-yellow text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl"
              >
                Découvrir notre mission
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>

          {/* Right side - stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-5"
          >
            <StatCard
              icon={<Users size={28} />}
              number="1000+"
              label="Membres actifs"
              color="blue"
              delay={0.4}
            />
            <StatCard
              icon={<Heart size={28} />}
              number="50+"
              label="Actions sociales"
              color="red"
              delay={0.5}
            />
            <StatCard
              icon={<Star size={28} />}
              number="1 An"
              label="D'engagement"
              color="yellow"
              delay={0.6}
            />
            <StatCard
              icon={<Users size={28} />}
              number="Tshangu"
              label="District d'action"
              color="blue"
              delay={0.7}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  number,
  label,
  color,
  delay,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  color: "blue" | "red" | "yellow";
  delay: number;
}) {
  const bgMap = {
    blue: "bg-rdc-blue/20 text-rdc-blue",
    red: "bg-rdc-red/20 text-rdc-red",
    yellow: "bg-rdc-yellow/20 text-rdc-yellow",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all group"
    >
      <div className={`w-12 h-12 rounded-xl ${bgMap[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-white mb-1">{number}</p>
      <p className="text-white/60 text-sm">{label}</p>
    </motion.div>
  );
}
