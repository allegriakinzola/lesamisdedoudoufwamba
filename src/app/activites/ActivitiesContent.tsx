"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  HeartPulse,
  Users,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Heart,
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
    stat: "200+",
    statLabel: "Jeunes formés",
    image: "/formation.jpg",
    overlay: "from-blue-900/80 via-blue-800/50 to-transparent",
    largeIcon: <GraduationCap size={120} />,
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
    stat: "500+",
    statLabel: "Personnes aidées",
    image: "/sante.jpg",
    overlay: "from-red-900/80 via-red-800/50 to-transparent",
    largeIcon: <HeartPulse size={120} />,
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
    stat: "7",
    statLabel: "Communes touchées",
    image: "/social.jpg",
    overlay: "from-yellow-900/80 via-amber-800/50 to-transparent",
    largeIcon: <Users size={120} />,
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
    stat: "30+",
    statLabel: "Entrepreneurs soutenus",
    image: "/entreprenariat.jpg",
    overlay: "from-sky-900/80 via-cyan-800/50 to-transparent",
    largeIcon: <Lightbulb size={120} />,
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
    stat: "10+",
    statLabel: "Forums organisés",
    image: "/dialogue.jpg",
    overlay: "from-rose-900/80 via-pink-800/50 to-transparent",
    largeIcon: <MessageCircle size={120} />,
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
    stat: "1000+",
    statLabel: "Citoyens mobilisés",
    image: "/soutient.jpg",
    overlay: "from-emerald-900/80 via-green-800/50 to-transparent",
    largeIcon: <ShieldCheck size={120} />,
  },
];

const colorMap = {
  blue: {
    bg: "bg-rdc-blue-light",
    text: "text-rdc-blue",
    iconBg: "bg-rdc-blue/10 text-rdc-blue",
    gradient: "from-rdc-blue/20 to-rdc-blue/5",
    border: "border-rdc-blue/30",
    accent: "bg-rdc-blue",
  },
  red: {
    bg: "bg-rdc-red-light",
    text: "text-rdc-red",
    iconBg: "bg-rdc-red/10 text-rdc-red",
    gradient: "from-rdc-red/20 to-rdc-red/5",
    border: "border-rdc-red/30",
    accent: "bg-rdc-red",
  },
  yellow: {
    bg: "bg-rdc-yellow-light",
    text: "text-yellow-600",
    iconBg: "bg-rdc-yellow/20 text-yellow-600",
    gradient: "from-rdc-yellow/20 to-rdc-yellow/5",
    border: "border-rdc-yellow/30",
    accent: "bg-rdc-yellow",
  },
};

export default function ActivitiesContent() {
  return (
    <>
      {/* Intro section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target size={28} />, title: "Notre Mission", desc: "Soutenir le développement communautaire à travers des actions concrètes et durables dans le district de Tshangu." },
              { icon: <TrendingUp size={28} />, title: "Notre Impact", desc: "Des milliers de vies touchées grâce à nos programmes dans l'éducation, la santé et le développement social." },
              { icon: <Heart size={28} />, title: "Notre Engagement", desc: "100% bénévole, notre équipe est animée par la passion de servir et de bâtir une RDC plus forte." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-rdc-blue-light text-rdc-blue flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {activities.map((activity, index) => {
              const colors = colorMap[activity.color];
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                >
                  {/* Text side */}
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center`}>
                        {activity.icon}
                      </div>
                      <div className={`h-1 w-12 rounded-full ${colors.accent}`} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {activity.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {activity.actions.map((action) => (
                        <li key={action} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                    {/* Inline stat */}
                    <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r ${colors.gradient} border ${colors.border}`}>
                      <span className={`text-2xl font-bold ${colors.text}`}>{activity.stat}</span>
                      <span className="text-gray-600 text-sm">{activity.statLabel}</span>
                    </div>
                  </div>

                  {/* Visual side */}
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <div className="relative group">
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                          src={activity.image}
                          alt={activity.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Unique color overlay per activity */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${activity.overlay}`} />

                        {/* Large decorative icon watermark */}
                        <div className="absolute top-4 right-4 text-white/10">
                          {activity.largeIcon}
                        </div>

                        {/* Floating badge */}
                        <div className="absolute bottom-5 left-5 right-5">
                          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0`}>
                                {activity.icon}
                              </div>
                              <div>
                                <p className="font-bold text-gray-900 text-sm">{activity.title}</p>
                                <p className="text-gray-500 text-xs">{activity.statLabel}</p>
                              </div>
                              <div className="ml-auto">
                                <span className={`text-xl font-bold ${colors.text}`}>{activity.stat}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className={`absolute -bottom-3 ${isReversed ? "-left-3" : "-right-3"} w-24 h-24 rounded-2xl ${colors.accent} opacity-20 -z-10`} />
                      <div className={`absolute -top-3 ${isReversed ? "-right-3" : "-left-3"} w-16 h-16 rounded-xl ${colors.accent} opacity-10 -z-10`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote / Impact banner with background image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/imagedoudou.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rdc-yellow/20 flex items-center justify-center">
              <Heart size={28} className="text-rdc-yellow" />
            </div>
            <blockquote className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
              &ldquo;Ensemble, nous bâtissons l&apos;avenir de notre communauté,
              une action à la fois.&rdquo;
            </blockquote>
            <p className="text-white/60 text-lg">
              — Les Amis de Doudou Fwamba, depuis Août 2024
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-white/15">
              {[
                { num: "1 000+", label: "Membres" },
                { num: "50+", label: "Actions" },
                { num: "7", label: "Communes" },
                { num: "100%", label: "Bénévole" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-rdc-yellow">{s.num}</p>
                  <p className="text-white/60 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/philippe.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rdc-blue/90 via-rdc-blue-dark/85 to-rdc-blue/90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Vous souhaitez contribuer ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Rejoignez-nous et participez activement au développement de notre communauté.
              Chaque contribution compte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rdc-yellow text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Devenir membre <ArrowRight size={18} />
              </Link>
              <Link
                href="/evenements"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 text-lg"
              >
                Nos événements
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
