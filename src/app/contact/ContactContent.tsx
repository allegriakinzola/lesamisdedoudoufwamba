"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: <MapPin size={22} />,
    title: "Adresse",
    details: ["Commune de Masina", "District de Tshangu", "Kinshasa, RDC"],
    color: "blue" as const,
  },
  {
    icon: <Phone size={22} />,
    title: "Téléphone",
    details: ["+243 XX XXX XXXX"],
    color: "red" as const,
  },
  {
    icon: <Mail size={22} />,
    title: "Email",
    details: ["contact@amisdoudoufwamba.cd"],
    color: "yellow" as const,
  },
  {
    icon: <Clock size={22} />,
    title: "Horaires",
    details: ["Lundi - Vendredi : 9h - 17h", "Samedi : 9h - 13h"],
    color: "blue" as const,
  },
];

const colorMap = {
  blue: "bg-rdc-blue-light text-rdc-blue",
  red: "bg-rdc-red-light text-rdc-red",
  yellow: "bg-rdc-yellow-light text-yellow-600",
};

export default function ContactContent() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Vous pouvez nous contacter par téléphone, email ou en nous rendant visite
                à notre siège. Nous serons ravis de vous accueillir.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className={`w-12 h-12 rounded-xl ${colorMap[info.color]} flex items-center justify-center shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-gray-500 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 aspect-video rounded-2xl bg-gradient-to-br from-rdc-blue/5 to-rdc-yellow/5 border border-gray-200 flex items-center justify-center"
              >
                <div className="text-center text-gray-400">
                  <MapPin size={32} className="mx-auto mb-2 text-rdc-blue" />
                  <p className="text-sm font-medium">Masina, Tshangu</p>
                  <p className="text-xs">Kinshasa, RDC</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
