"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Users, MapPin, Calendar, Heart, Award } from "lucide-react";

const stats = [
  { icon: <Users size={24} />, number: "1 000+", label: "Membres actifs dans le district de Tshangu" },
  { icon: <Heart size={24} />, number: "50+", label: "Actions sociales menées depuis 2024" },
  { icon: <MapPin size={24} />, number: "7", label: "Communes du district couvertes" },
  { icon: <Calendar size={24} />, number: "5+", label: "Grands événements organisés" },
  { icon: <TrendingUp size={24} />, number: "100%", label: "Engagement bénévole de nos membres" },
  { icon: <Award size={24} />, number: "1ère", label: "ASBL de soutien aux réformes financières" },
];

export default function ImpactSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/creation.jpeg"
          alt="Impact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-rdc-yellow/20 text-rdc-yellow text-sm font-semibold rounded-full mb-4 border border-rdc-yellow/30">
            Notre Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Des <span className="text-rdc-yellow">résultats</span> concrets
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Depuis notre création en août 2024, nous avons mobilisé des milliers de citoyens
            pour bâtir ensemble une communauté plus forte.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all group text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-rdc-yellow/20 text-rdc-yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-white mb-2">{stat.number}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
