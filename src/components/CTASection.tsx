"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/imagedoudou.jpg"
          alt="Rejoignez-nous"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rdc-blue/90 via-rdc-blue-dark/85 to-[#003d6b]/90" />
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-rdc-yellow/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-rdc-red/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rdc-blue via-rdc-yellow to-rdc-red flex items-center justify-center">
              <span className="text-white font-bold text-xl">ADF</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Rejoignez le mouvement pour une{" "}
            <span className="text-rdc-yellow">RDC meilleure</span>
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Ensemble, nous pouvons transformer nos communautés. Devenez membre de
            l&apos;ASBL Les Amis de Doudou Fwamba et participez activement au développement
            de notre pays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rdc-yellow text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Devenir membre <ArrowRight size={20} />
            </Link>
            <Link
              href="/activites"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 text-lg"
            >
              Nos activités
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
