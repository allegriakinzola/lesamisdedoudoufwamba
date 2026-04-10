"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  PlusCircle,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  FileText,
  Search,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published: boolean;
  author: string;
  createdAt: string;
}

export default function ArticlesListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchPosts = () => {
    setLoading(true);
    fetch("/api/blog?all=true")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;
    setDeleting(id);
    try {
      await fetch(`/api/blog/${id}`, { method: "DELETE" });
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch {
      alert("Erreur lors de la suppression.");
    } finally {
      setDeleting(null);
    }
  };

  const togglePublish = async (id: string, currentState: boolean) => {
    try {
      await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !currentState }),
      });
      setPosts((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, published: !currentState } : p
        )
      );
    } catch {
      alert("Erreur lors de la mise à jour.");
    }
  };

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Articles du blog</h2>
          <p className="text-sm text-gray-500 mt-1">
            {posts.length} article{posts.length !== 1 ? "s" : ""} au total
          </p>
        </div>
        <Link
          href="/admin/articles/nouveau"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-rdc-blue text-white text-sm font-semibold rounded-xl hover:bg-rdc-blue-dark transition-colors shadow-md"
        >
          <PlusCircle size={16} />
          Nouvel article
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none text-sm bg-white"
        />
      </div>

      {/* List */}
      {loading ? (
        <div className="text-center py-16 text-gray-400">
          <div className="w-8 h-8 mx-auto border-3 border-rdc-blue/30 border-t-rdc-blue rounded-full animate-spin mb-3" />
          Chargement...
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <FileText size={40} className="mx-auto mb-3 text-gray-300" />
          <p className="text-gray-500 mb-3">
            {search ? "Aucun résultat." : "Aucun article pour le moment."}
          </p>
          {!search && (
            <Link
              href="/admin/articles/nouveau"
              className="inline-flex items-center gap-2 text-rdc-blue text-sm font-semibold hover:underline"
            >
              <PlusCircle size={14} />
              Créer votre premier article
            </Link>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filtered.map((post) => (
              <div
                key={post.id}
                className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Link
                      href={`/admin/articles/${post.id}`}
                      className="font-semibold text-gray-900 hover:text-rdc-blue transition-colors truncate"
                    >
                      {post.title}
                    </Link>
                    <span
                      className={`shrink-0 px-2 py-0.5 text-xs font-semibold rounded-full ${
                        post.published
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {post.published ? "Publié" : "Brouillon"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Par {post.author} •{" "}
                    {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => togglePublish(post.id, post.published)}
                    className={`p-2 rounded-lg transition-colors ${
                      post.published
                        ? "text-green-600 hover:bg-green-50"
                        : "text-yellow-600 hover:bg-yellow-50"
                    }`}
                    title={post.published ? "Dépublier" : "Publier"}
                  >
                    {post.published ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                  <Link
                    href={`/admin/articles/${post.id}`}
                    className="p-2 text-rdc-blue hover:bg-rdc-blue-light rounded-lg transition-colors"
                    title="Modifier"
                  >
                    <Edit3 size={16} />
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deleting === post.id}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                    title="Supprimer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
