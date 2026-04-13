"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function LeadershipSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/plein.jpeg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-rdc-blue/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-rdc-blue-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-rdc-yellow text-sm font-semibold rounded-full mb-4 border border-white/10">
            Notre Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Guidés par une <span className="text-rdc-yellow">vision</span> commune
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Sous le leadership du Président Félix Tshisekedi et l&apos;impulsion du
            Ministre des Finances Doudou Fwamba, notre ASBL œuvre pour la transformation de la RDC.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Doudou Fwamba */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/15 group"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src="/imagedoudou.jpg"
                alt="Doudou Fwamba Likunde Li-Botayi"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white font-bold text-lg">Doudou Fwamba Likunde Li-Botayi</p>
                <p className="text-rdc-yellow text-sm font-medium">Ministre des Finances de la RDC</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex gap-3">
                <Quote size={20} className="text-rdc-yellow shrink-0 mt-1" />
                <p className="text-white/80 text-sm leading-relaxed italic">
                  Un leader visionnaire qui a orchestré l&apos;entrée historique de la RDC sur les
                  marchés financiers internationaux, levant 1,25 milliard USD via la première
                  émission d&apos;eurobonds du pays.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Philippe Matanzi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/15 group"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src="/philippe.jpg"
                alt="Philippe Matanzi"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white font-bold text-lg">Philippe Matanzi</p>
                <p className="text-rdc-yellow text-sm font-medium">Coordonnateur de l&apos;ASBL</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex gap-3">
                <Quote size={20} className="text-rdc-yellow shrink-0 mt-1" />
                <p className="text-white/80 text-sm leading-relaxed italic">
                  Mobilisateur infatigable, Philippe Matanzi coordonne les actions de l&apos;ASBL
                  avec dévouement, appelant sans cesse à l&apos;unité et au travail pour le
                  développement du district de Tshangu.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
