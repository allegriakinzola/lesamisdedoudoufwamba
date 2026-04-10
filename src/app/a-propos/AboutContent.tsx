"use client";

import { motion } from "framer-motion";
import { Target, Eye, Handshake, Users, Award, MapPin } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Philippe Matanzi",
    role: "Coordonnateur National",
    aka: "Pakebo de Kinshasa",
    description:
      "Leader visionnaire et coordonnateur principal de l'ASBL, Philippe Matanzi dirige la structure avec un leadership exemplaire et une gestion participative.",
  },
  {
    name: "Doudou Fwamba Likunde",
    role: "Inspirateur & Parrain",
    aka: "Ministre des Finances",
    description:
      "Ministre des Finances de la RDC, dont les réformes et les actions au service du pays inspirent le mouvement et l'engagement de l'ASBL.",
  },
];

const values = [
  {
    icon: <Target size={24} />,
    title: "Mission",
    description:
      "Soutenir les actions du Président Félix Tshisekedi et appuyer les réformes engagées par le Ministre des Finances Doudou Fwamba Likunde Li-Botayi, tout en œuvrant pour le développement communautaire.",
    color: "blue" as const,
  },
  {
    icon: <Eye size={24} />,
    title: "Vision",
    description:
      "Une RDC unie et prospère, où chaque citoyen participe activement au progrès national à travers l'éducation, la santé et le développement social.",
    color: "yellow" as const,
  },
  {
    icon: <Handshake size={24} />,
    title: "Valeurs",
    description:
      "Unité, solidarité, résilience, engagement citoyen, leadership participatif et inclusif au service de la communauté.",
    color: "red" as const,
  },
];

const colorMap = {
  blue: "bg-rdc-blue-light text-rdc-blue",
  yellow: "bg-rdc-yellow-light text-yellow-600",
  red: "bg-rdc-red-light text-rdc-red",
};

export default function AboutContent() {
  return (
    <>
      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-rdc-blue-light text-rdc-blue text-sm font-semibold rounded-full mb-4">
                Notre Histoire
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Née de la <span className="text-rdc-blue">conviction</span> et de
                l&apos;<span className="text-rdc-red">engagement</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  L&apos;ASBL «Les Amis de Doudou Fwamba» a été créée en août 2024 à
                  Kinshasa, capitale de la République Démocratique du Congo, dans le
                  district de Tshangu, commune de Masina.
                </p>
                <p>
                  Fondée pour soutenir les actions du Président Félix Antoine Tshisekedi
                  et les réformes du Ministre des Finances Doudou Fwamba Likunde Li-Botayi,
                  notre structure s&apos;est rapidement imposée comme une organisation au
                  service de la communauté.
                </p>
                <p>
                  Sous la direction de Philippe Matanzi, coordonnateur national surnommé
                  «Pakebo de Kinshasa», l&apos;ASBL intervient dans les domaines de
                  l&apos;éducation, de la santé, du développement social et du soutien
                  aux initiatives entrepreneuriales.
                </p>
                <p>
                  Malgré les aléas climatiques qui ont reporté la sortie officielle de
                  janvier 2025, la résilience et la détermination de nos membres ont
                  permis de réaliser un lancement mémorable le 9 février 2025 au terrain
                  municipal de Masina.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-rdc-blue-light via-white to-rdc-yellow-light border border-gray-100 flex items-center justify-center p-8">
                <Image  
                  src="/philippe.jpg"
                  alt="About Us"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {/* <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-rdc-blue via-rdc-yellow to-rdc-red flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-4xl">ADF</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Les Amis de Doudou Fwamba</h3>
                  <p className="text-gray-500">ASBL - Fondée en 2024</p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-gray-500 text-sm">
                    <MapPin size={14} />
                    Masina, Tshangu, Kinshasa
                  </div>
                </div> */}
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rdc-yellow/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-rdc-blue/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ce qui nous <span className="text-rdc-blue">guide</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-xl ${colorMap[value.color]} flex items-center justify-center mb-6`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-rdc-yellow-light text-yellow-700 text-sm font-semibold rounded-full mb-4">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Les personnalités <span className="text-rdc-blue">clés</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rdc-blue to-rdc-blue-dark flex items-center justify-center mb-5 shadow-md">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-rdc-blue font-semibold text-sm mb-1">{member.role}</p>
                {member.aka && (
                  <p className="text-gray-400 text-xs italic mb-3">« {member.aka} »</p>
                )}
                <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key figures */}
      <section className="py-20 bg-gradient-to-br from-rdc-blue via-rdc-blue-dark to-[#003d6b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2024", label: "Année de création" },
              { number: "1000+", label: "Membres actifs" },
              { number: "Tshangu", label: "District d'action" },
              { number: "50+", label: "Actions réalisées" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-rdc-yellow mb-2">{stat.number}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
