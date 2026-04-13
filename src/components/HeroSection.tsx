"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Heart, Star, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/imagedoudou.jpg"
          alt="Les Amis de Doudou Fwamba"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Flag accent stripe */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rdc-blue via-rdc-yellow to-rdc-red z-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
              <Star size={14} className="text-rdc-yellow" />
              ASBL - République Démocratique du Congo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Les Amis de{" "}
              <span className="text-rdc-yellow drop-shadow-lg">Doudou Fwamba</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-xl">
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

            {/* Mini stats bar */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/15">
              <div>
                <p className="text-3xl font-bold text-rdc-yellow">1000+</p>
                <p className="text-white/60 text-sm">Membres actifs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-white/60 text-sm">Actions sociales</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Tshangu</p>
                <p className="text-white/60 text-sm">District d&apos;action</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rdc-blue via-rdc-yellow to-rdc-red flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">ADF</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Les Amis de Doudou Fwamba</p>
                    <p className="text-white/60 text-sm">Fondée en Août 2024</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <StatCard icon={<Users size={22} />} number="1000+" label="Membres" color="blue" />
                  <StatCard icon={<Heart size={22} />} number="50+" label="Actions" color="red" />
                  <StatCard icon={<Star size={22} />} number="1 An" label="D'engagement" color="yellow" />
                  <StatCard icon={<Play size={22} />} number="5+" label="Événements" color="blue" />
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-rdc-blue/20 rounded-3xl blur-2xl -z-10" />
            </div>
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
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  color: "blue" | "red" | "yellow";
}) {
  const bgMap = {
    blue: "bg-rdc-blue/20 text-rdc-blue",
    red: "bg-rdc-red/20 text-rdc-red",
    yellow: "bg-rdc-yellow/20 text-rdc-yellow",
  };

  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-all">
      <div className={`w-10 h-10 rounded-lg ${bgMap[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-xl font-bold text-white">{number}</p>
      <p className="text-white/50 text-xs">{label}</p>
    </div>
  );
}
