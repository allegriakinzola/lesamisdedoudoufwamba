"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const events = [
  {
    title: "Création officielle de l'ASBL",
    date: "Août 2024",
    location: "Kinshasa, District de Tshangu",
    description:
      "Fondation officielle de l'ASBL Les Amis de Doudou Fwamba avec l'enregistrement légal et la mise en place de la structure organisationnelle.",
    status: "past" as const,
    attendees: "Membres fondateurs",
  },
  {
    title: "Sortie officielle - Première tentative",
    date: "16 Janvier 2025",
    location: "Terrain Municipal de Masina",
    description:
      "La sortie officielle prévue a été reportée au 9 février 2025 en raison d'une pluie torrentielle. Le coordonnateur Philippe Matanzi a su mobiliser les membres et transformer cet imprévu en opportunité de renforcement.",
    status: "past" as const,
    attendees: "Membres et sympathisants",
  },
  {
    title: "Sortie officielle de l'ASBL",
    date: "9 Février 2025",
    location: "Terrain Municipal de Masina",
    description:
      "Lancement officiel de l'ASBL avec une grande mobilisation. Philippe Matanzi a appelé les membres à l'unité dans le travail pour le développement du district de Tshangu et de la RDC.",
    status: "past" as const,
    attendees: "1000+ participants",
  },
  {
    title: "Célébration du Premier Anniversaire",
    date: "31 Août 2025",
    location: "Stade Municipal de Masina, Tshangu",
    description:
      "Grande célébration du premier anniversaire avec discours, remise de cadeaux aux coordonnateurs et concert d'artistes. Les bases de la Tshangu ont manifesté leur soutien et leur joie.",
    status: "past" as const,
    attendees: "Milliers de membres",
  },
  {
    title: "Prochaine Assemblée Générale",
    date: "À déterminer",
    location: "Kinshasa",
    description:
      "Assemblée générale pour faire le bilan des actions menées et planifier les activités futures de l'ASBL.",
    status: "upcoming" as const,
    attendees: "Tous les membres",
  },
];

export default function EventsContent() {
  const pastEvents = events.filter((e) => e.status === "past");
  const upcomingEvents = events.filter((e) => e.status === "upcoming");

  return (
    <>
      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 bg-rdc-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-rdc-blue/10 text-rdc-blue text-sm font-semibold rounded-full mb-4">
                Prochainement
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Événements à <span className="text-rdc-blue">venir</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-md border-2 border-rdc-blue/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 px-4 py-1.5 bg-rdc-blue text-white text-xs font-semibold rounded-bl-xl">
                    À venir
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 pr-16">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} className="text-rdc-blue" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin size={14} className="text-rdc-red" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users size={14} className="text-rdc-yellow" />
                      {event.attendees}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-rdc-yellow-light text-yellow-700 text-sm font-semibold rounded-full mb-4">
              Rétrospective
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Événements <span className="text-rdc-blue">passés</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {pastEvents.reverse().map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-48 shrink-0">
                    <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                      <Calendar size={20} className="mx-auto mb-2 text-rdc-blue" />
                      <p className="font-bold text-gray-900 text-sm">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <MapPin size={14} className="text-rdc-red" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Users size={14} className="text-rdc-blue" />
                        {event.attendees}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
