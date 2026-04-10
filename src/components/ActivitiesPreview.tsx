"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, HeartPulse, Users, Lightbulb, MessageCircle, ShieldCheck } from "lucide-react";

const activities = [
  {
    icon: <GraduationCap size={28} />,
    title: "Éducation & Formation",
    description: "Promotion de l'éducation et programmes de formation pour les jeunes du district de Tshangu.",
    color: "blue" as const,
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Santé Communautaire",
    description: "Initiatives pour améliorer l'accès aux soins de santé dans les communautés locales.",
    color: "red" as const,
  },
  {
    icon: <Users size={28} />,
    title: "Développement Social",
    description: "Actions concrètes pour l'amélioration des conditions de vie des populations.",
    color: "yellow" as const,
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Soutien Entrepreneurial",
    description: "Accompagnement des initiatives entrepreneuriales et création d'emplois locaux.",
    color: "blue" as const,
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Dialogue Citoyen",
    description: "Création d'espaces de dialogue entre les citoyens pour une démocratie participative.",
    color: "red" as const,
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Soutien aux Réformes",
    description: "Appui aux réformes engagées pour la modernisation et le progrès de la RDC.",
    color: "yellow" as const,
  },
];

const colorMap = {
  blue: {
    bg: "bg-rdc-blue-light",
    text: "text-rdc-blue",
    border: "border-rdc-blue/20",
    hover: "hover:border-rdc-blue/50",
  },
  red: {
    bg: "bg-rdc-red-light",
    text: "text-rdc-red",
    border: "border-rdc-red/20",
    hover: "hover:border-rdc-red/50",
  },
  yellow: {
    bg: "bg-rdc-yellow-light",
    text: "text-rdc-yellow",
    border: "border-rdc-yellow/20",
    hover: "hover:border-rdc-yellow/50",
  },
};

export default function ActivitiesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-rdc-blue-light text-rdc-blue text-sm font-semibold rounded-full mb-4">
            Nos Domaines d&apos;Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Engagés pour le <span className="text-rdc-blue">progrès</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Notre ASBL intervient dans plusieurs domaines clés pour contribuer au
            développement de notre communauté et de notre pays.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const colors = colorMap[activity.color];
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-7 border ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg group`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {activity.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{activity.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/activites"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-rdc-blue text-white font-semibold rounded-full hover:bg-rdc-blue-dark transition-colors shadow-md hover:shadow-lg"
          >
            Voir toutes nos activités <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
