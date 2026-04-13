"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PlusCircle, Edit, Trash2, Calendar, MapPin, Eye, EyeOff } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string | null;
  published: boolean;
  createdAt: string;
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch("/api/events?all=true")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setEvents(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cet événement ?")) return;
    try {
      const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
      if (res.ok) {
        setEvents(events.filter((e) => e.id !== id));
      }
    } catch {}
  };

  const togglePublish = async (event: Event) => {
    try {
      const res = await fetch(`/api/events/${event.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !event.published }),
      });
      if (res.ok) {
        setEvents(
          events.map((e) =>
            e.id === event.id ? { ...e, published: !e.published } : e
          )
        );
      }
    } catch {}
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Événements</h2>
        <Link
          href="/admin/evenements/nouveau"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-rdc-blue text-white text-sm font-semibold rounded-xl hover:bg-rdc-blue-dark transition-colors"
        >
          <PlusCircle size={16} />
          Nouvel événement
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Chargement...</div>
      ) : events.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center">
          <Calendar size={40} className="mx-auto mb-4 text-gray-300" />
          <p className="text-gray-500 mb-4">Aucun événement pour le moment.</p>
          <Link
            href="/admin/evenements/nouveau"
            className="inline-flex items-center gap-2 text-rdc-blue font-semibold hover:underline text-sm"
          >
            <PlusCircle size={14} />
            Créer votre premier événement
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-100">
            {events.map((event) => (
              <div
                key={event.id}
                className="p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors"
              >
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5">
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar size={12} />
                          {new Date(event.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={12} />
                          {event.location}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full ${
                        event.published
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {event.published ? "Publié" : "Brouillon"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Link
                      href={`/admin/evenements/${event.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Edit size={12} />
                      Modifier
                    </Link>
                    <button
                      onClick={() => togglePublish(event)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      {event.published ? (
                        <>
                          <EyeOff size={12} />
                          Dépublier
                        </>
                      ) : (
                        <>
                          <Eye size={12} />
                          Publier
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 size={12} />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
