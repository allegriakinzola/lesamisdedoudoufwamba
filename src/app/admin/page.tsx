"use client";

import { useState, useEffect } from "react";
import { FileText, Mail, Eye, PlusCircle } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog?all=true")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const publishedCount = posts.filter((p) => p.published).length;
  const draftCount = posts.filter((p) => !p.published).length;

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          icon={<FileText size={22} />}
          label="Total articles"
          value={loading ? "..." : String(posts.length)}
          color="blue"
        />
        <StatCard
          icon={<Eye size={22} />}
          label="Publiés"
          value={loading ? "..." : String(publishedCount)}
          color="green"
        />
        <StatCard
          icon={<FileText size={22} />}
          label="Brouillons"
          value={loading ? "..." : String(draftCount)}
          color="yellow"
        />
        <StatCard
          icon={<Mail size={22} />}
          label="Messages"
          value="–"
          color="red"
        />
      </div>

      {/* Quick actions */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Actions rapides</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/articles/nouveau"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rdc-blue text-white text-sm font-semibold rounded-xl hover:bg-rdc-blue-dark transition-colors"
          >
            <PlusCircle size={16} />
            Nouvel article
          </Link>
          <Link
            href="/admin/articles"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-colors"
          >
            <FileText size={16} />
            Gérer les articles
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-colors"
          >
            <Eye size={16} />
            Voir le blog
          </Link>
        </div>
      </div>

      {/* Recent posts */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Articles récents
        </h2>
        {loading ? (
          <div className="text-center py-8 text-gray-400">Chargement...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-8">
            <FileText size={32} className="mx-auto mb-3 text-gray-300" />
            <p className="text-gray-500 text-sm">Aucun article pour le moment.</p>
            <Link
              href="/admin/articles/nouveau"
              className="inline-flex items-center gap-2 mt-3 text-rdc-blue text-sm font-semibold hover:underline"
            >
              <PlusCircle size={14} />
              Créer votre premier article
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {posts.slice(0, 5).map((post) => (
              <div
                key={post.id}
                className="py-3 flex items-center justify-between"
              >
                <div>
                  <Link
                    href={`/admin/articles/${post.id}`}
                    className="font-medium text-gray-900 hover:text-rdc-blue transition-colors text-sm"
                  >
                    {post.title}
                  </Link>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                    post.published
                      ? "bg-green-50 text-green-700"
                      : "bg-yellow-50 text-yellow-700"
                  }`}
                >
                  {post.published ? "Publié" : "Brouillon"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: "blue" | "green" | "yellow" | "red";
}) {
  const colorMap = {
    blue: "bg-rdc-blue-light text-rdc-blue",
    green: "bg-green-50 text-green-600",
    yellow: "bg-rdc-yellow-light text-yellow-600",
    red: "bg-rdc-red-light text-rdc-red",
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
      <div className={`w-11 h-11 rounded-xl ${colorMap[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
}
