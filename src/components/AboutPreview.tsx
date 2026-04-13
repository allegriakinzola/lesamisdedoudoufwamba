"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Handshake } from "lucide-react";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image placeholder with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-rdc-blue-light to-rdc-yellow-light">
              <Image
                src="/doudou.jpg"
                alt="About Us"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-rdc-blue via-rdc-yellow to-rdc-red flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">ADF</span>
                  </div>
                  <p className="text-rdc-blue-dark font-semibold text-lg">Les Amis de Doudou Fwamba</p>
                  <p className="text-gray-500 text-sm mt-2">Fondée en 2024 à Kinshasa</p>
                </div>
              </div> */}
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rdc-yellow rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-rdc-blue/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-rdc-blue-light text-rdc-blue text-sm font-semibold rounded-full mb-4">
              Qui sommes-nous ?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Une vision pour le{" "}
              <span className="text-rdc-blue">développement</span> de la RDC
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              L&apos;ASBL «Les Amis de Doudou Fwamba» a été créée à Kinshasa pour soutenir
              les actions du Président Félix Tshisekedi et appuyer les réformes engagées
              par le Ministre des Finances, Doudou Fwamba Likunde Li-Botayi. Sous la
              coordination de Philippe Matanzi, notre structure œuvre pour le bien-être
              des communautés locales.
            </p>

            <div className="space-y-5 mb-8">
              <ValueItem
                icon={<Target size={20} />}
                title="Notre Mission"
                description="Soutenir le développement communautaire et les réformes pour l'avancement du pays."
              />
              <ValueItem
                icon={<Eye size={20} />}
                title="Notre Vision"
                description="Une RDC unie, prospère, où chaque citoyen contribue au progrès national."
              />
              <ValueItem
                icon={<Handshake size={20} />}
                title="Nos Valeurs"
                description="Unité, solidarité, engagement citoyen et leadership participatif."
              />
            </div>

            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 text-rdc-blue font-semibold hover:gap-3 transition-all"
            >
              En savoir plus <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-rdc-blue-light text-rdc-blue flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-0.5">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
