"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Nom complet
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none transition-all text-sm"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none transition-all text-sm"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
          Sujet
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none transition-all text-sm"
          placeholder="Sujet de votre message"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none transition-all text-sm resize-none"
          placeholder="Votre message..."
        />
      </div>

      {status === "success" && (
        <div className="mb-5 flex items-center gap-2 text-green-600 bg-green-50 rounded-xl px-4 py-3 text-sm">
          <CheckCircle size={18} />
          Message envoyé avec succès ! Nous vous répondrons bientôt.
        </div>
      )}

      {status === "error" && (
        <div className="mb-5 flex items-center gap-2 text-red-600 bg-red-50 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={18} />
          Une erreur est survenue. Veuillez réessayer.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-rdc-blue text-white font-semibold rounded-xl hover:bg-rdc-blue-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
      >
        {status === "loading" ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send size={18} />
            Envoyer le message
          </>
        )}
      </button>
    </motion.form>
  );
}
