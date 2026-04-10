"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Users,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const activities = [
  {
    icon: <GraduationCap size={32} />,
    title: "Éducation & Formation",
    description:
      "Nous investissons dans l'avenir de notre jeunesse à travers des programmes éducatifs et des formations professionnelles adaptées aux réalités du marché congolais.",
    actions: [
      "Soutien scolaire pour les enfants défavorisés",
      "Bourses d'études et aide aux étudiants",
      "Ateliers de formation professionnelle",
      "Sensibilisation à l'importance de l'éducation",
    ],
    color: "blue" as const,
  },
  {
    icon: <HeartPulse size={32} />,
    title: "Santé Communautaire",
    description:
      "L'accès aux soins de santé est un droit fondamental. Nous organisons des campagnes de sensibilisation et facilitons l'accès aux services de santé pour les plus vulnérables.",
    actions: [
      "Campagnes de sensibilisation sanitaire",
      "Aide à l'accès aux médicaments",
      "Partenariats avec les centres de santé",
      "Prévention des maladies courantes",
    ],
    color: "red" as const,
  },
  {
    icon: <Users size={32} />,
    title: "Développement Social",
    description:
      "Nous œuvrons pour l'amélioration des conditions de vie des populations locales à travers des initiatives sociales concrètes et durables.",
    actions: [
      "Projets d'assainissement communautaire",
      "Aide aux familles vulnérables",
      "Promotion de la cohésion sociale",
      "Soutien aux personnes âgées",
    ],
    color: "yellow" as const,
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Soutien Entrepreneurial",
    description:
      "Nous accompagnons les initiatives entrepreneuriales locales pour créer des emplois et stimuler l'économie dans nos communautés.",
    actions: [
      "Accompagnement des jeunes entrepreneurs",
      "Formations en gestion d'entreprise",
      "Mise en réseau et mentorat",
      "Accès au microcrédit",
    ],
    color: "blue" as const,
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Dialogue Citoyen",
    description:
      "Nous créons des espaces de dialogue entre les citoyens pour une démocratie participative et une meilleure gouvernance locale.",
    actions: [
      "Forums communautaires",
      "Débats sur les enjeux locaux",
      "Médiation de conflits",
      "Éducation civique",
    ],
    color: "red" as const,
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Soutien aux Réformes",
    description:
      "Nous appuyons les réformes engagées par le gouvernement pour la modernisation et le progrès de la République Démocratique du Congo.",
    actions: [
      "Sensibilisation aux réformes fiscales",
      "Promotion de la bonne gouvernance",
      "Soutien aux politiques publiques",
      "Mobilisation citoyenne",
    ],
    color: "yellow" as const,
  },
];

const bgMap = {
  blue: "bg-rdc-blue-light text-rdc-blue",
  red: "bg-rdc-red-light text-rdc-red",
  yellow: "bg-rdc-yellow-light text-yellow-600",
};

const borderMap = {
  blue: "border-l-rdc-blue",
  red: "border-l-rdc-red",
  yellow: "border-l-rdc-yellow",
};

export default function ActivitiesContent() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl ${bgMap[activity.color]} flex items-center justify-center mb-5`}>
                    {activity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {activity.description}
                  </p>
                  <ul className="space-y-3">
                    {activity.actions.map((action) => (
                      <li key={action} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className={`aspect-[4/3] rounded-2xl border-l-4 ${borderMap[activity.color]} bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8`}>
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto rounded-2xl ${bgMap[activity.color]} flex items-center justify-center mb-4`}>
                        {activity.icon}
                      </div>
                      <p className="text-gray-700 font-semibold">{activity.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vous souhaitez contribuer ?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Rejoignez-nous et participez activement au développement de notre communauté.
              Chaque contribution compte.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-rdc-blue text-white font-semibold rounded-full hover:bg-rdc-blue-dark transition-colors shadow-md hover:shadow-lg"
            >
              Devenir membre <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
