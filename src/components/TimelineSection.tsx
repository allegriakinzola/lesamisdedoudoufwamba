"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const timeline = [
  {
    date: "Août 2024",
    title: "Création de l'ASBL",
    description: "Fondation officielle de l'ASBL Les Amis de Doudou Fwamba à Kinshasa, dans le district de Tshangu.",
    color: "blue" as const,
  },
  {
    date: "Janvier 2025",
    title: "Préparation de la sortie officielle",
    description: "Organisation de la sortie officielle prévue au terrain municipal de Masina, reportée au 9 février en raison de la pluie.",
    color: "yellow" as const,
  },
  {
    date: "Février 2025",
    title: "Sortie officielle",
    description: "Lancement officiel de l'ASBL avec une grande mobilisation des membres et de la population de Masina.",
    color: "red" as const,
  },
  {
    date: "Août 2025",
    title: "Premier anniversaire",
    description: "Célébration du premier anniversaire au stade municipal de Masina avec concerts, discours et remise de cadeaux.",
    color: "blue" as const,
  },
];

const dotColors = {
  blue: "bg-rdc-blue",
  yellow: "bg-rdc-yellow",
  red: "bg-rdc-red",
};

const ringColors = {
  blue: "ring-rdc-blue/30",
  yellow: "ring-rdc-yellow/30",
  red: "ring-rdc-red/30",
};

export default function TimelineSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-rdc-yellow-light text-yellow-700 text-sm font-semibold rounded-full mb-4">
            Notre Parcours
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Les étapes <span className="text-rdc-blue">clés</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Depuis notre création, nous avons franchi des étapes importantes dans notre
            engagement pour le développement communautaire.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rdc-blue via-rdc-yellow to-rdc-red" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${dotColors[item.color]} ring-4 ${ringColors[item.color]} ring-offset-2 ring-offset-white`} />
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className={`flex items-center gap-2 text-sm text-gray-500 mb-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
