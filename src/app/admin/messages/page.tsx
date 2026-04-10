"use client";

import { useState, useEffect } from "react";
import { Mail, MailOpen, Trash2, Clock } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Message | null>(null);

  useEffect(() => {
    fetch("/api/admin/messages")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setMessages(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const markAsRead = async (id: string) => {
    try {
      await fetch(`/api/admin/messages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, read: true } : m))
      );
    } catch {}
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer ce message ?")) return;
    try {
      await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
      setMessages((prev) => prev.filter((m) => m.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch {}
  };

  const handleSelect = (msg: Message) => {
    setSelected(msg);
    if (!msg.read) markAsRead(msg.id);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-3 border-rdc-blue/30 border-t-rdc-blue rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Messages reçus</h2>
        <p className="text-sm text-gray-500 mt-1">
          {messages.length} message{messages.length !== 1 ? "s" : ""} •{" "}
          {messages.filter((m) => !m.read).length} non lu{messages.filter((m) => !m.read).length !== 1 ? "s" : ""}
        </p>
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <Mail size={40} className="mx-auto mb-3 text-gray-300" />
          <p className="text-gray-500">Aucun message pour le moment.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Messages list */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => handleSelect(msg)}
                  className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                    selected?.id === msg.id ? "bg-rdc-blue-light" : ""
                  } ${!msg.read ? "border-l-3 border-l-rdc-blue" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className={`text-sm truncate ${!msg.read ? "font-bold text-gray-900" : "font-medium text-gray-700"}`}>
                        {msg.name}
                      </p>
                      <p className={`text-sm truncate ${!msg.read ? "font-semibold text-gray-800" : "text-gray-600"}`}>
                        {msg.subject}
                      </p>
                      <p className="text-xs text-gray-400 truncate mt-1">
                        {msg.message.substring(0, 60)}...
                      </p>
                    </div>
                    <div className="shrink-0 flex flex-col items-end gap-1">
                      <p className="text-xs text-gray-400">
                        {new Date(msg.createdAt).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                        })}
                      </p>
                      {!msg.read && (
                        <div className="w-2 h-2 rounded-full bg-rdc-blue" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Message detail */}
          <div className="lg:col-span-3">
            {selected ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {selected.subject}
                    </h3>
                    <p className="text-sm text-gray-600">
                      De <span className="font-semibold">{selected.name}</span>{" "}
                      &lt;{selected.email}&gt;
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                      <Clock size={12} />
                      {new Date(selected.createdAt).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(selected.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {selected.message}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-rdc-blue text-white text-sm font-semibold rounded-xl hover:bg-rdc-blue-dark transition-colors"
                  >
                    <MailOpen size={16} />
                    Répondre par email
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center justify-center min-h-[300px]">
                <div className="text-center text-gray-400">
                  <Mail size={32} className="mx-auto mb-2" />
                  <p className="text-sm">Sélectionnez un message</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
