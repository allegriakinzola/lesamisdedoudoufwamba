"use client";

import { useState, useEffect, use, useRef } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/RichTextEditor";
import { Save, Eye, EyeOff, ArrowLeft, Trash2, ImagePlus, X, Loader2 } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  published: boolean;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export default function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [coverPreview, setCoverPreview] = useState("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverPreview(URL.createObjectURL(file));
    setUploadingCover(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        setCoverImage(data.url);
      } else {
        const data = await res.json();
        setError(data.error || "Erreur lors du t\u00e9l\u00e9chargement.");
        setCoverPreview("");
      }
    } catch {
      setError("Erreur de connexion.");
      setCoverPreview("");
    } finally {
      setUploadingCover(false);
      if (coverInputRef.current) coverInputRef.current.value = "";
    }
  };

  const removeCover = () => {
    setCoverImage("");
    setCoverPreview("");
  };

  useEffect(() => {
    fetch(`/api/blog/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.id) {
          setPost(data);
          setTitle(data.title);
          setSlug(data.slug);
          setExcerpt(data.excerpt);
          setContent(data.content);
          setCoverImage(data.coverImage || "");
          setAuthor(data.author);
          setPublished(data.published);
        }
      })
      .catch(() => setError("Erreur lors du chargement."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSave = async () => {
    if (!title || !slug || !excerpt || !content) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          coverImage: coverImage || null,
          published,
          author,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setPost(data);
        setSuccess("Article sauvegardé avec succès !");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        const data = await res.json();
        setError(data.error || "Erreur lors de la sauvegarde.");
      }
    } catch {
      setError("Erreur de connexion au serveur.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;

    try {
      await fetch(`/api/blog/${id}`, { method: "DELETE" });
      router.push("/admin/articles");
    } catch {
      setError("Erreur lors de la suppression.");
    }
  };

  const togglePublish = async () => {
    const newState = !published;
    setPublished(newState);
    setSaving(true);
    try {
      await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: newState }),
      });
      setSuccess(newState ? "Article publié !" : "Article dépublié.");
      setTimeout(() => setSuccess(""), 3000);
    } catch {
      setPublished(!newState);
      setError("Erreur lors de la mise à jour.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-3 border-rdc-blue/30 border-t-rdc-blue rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">Article non trouvé.</p>
        <Link href="/admin/articles" className="text-rdc-blue font-semibold hover:underline">
          Retour aux articles
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/articles"
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h2 className="text-xl font-bold text-gray-900">Modifier l&apos;article</h2>
          <span
            className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
              published
                ? "bg-green-50 text-green-700"
                : "bg-yellow-50 text-yellow-700"
            }`}
          >
            {published ? "Publié" : "Brouillon"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDelete}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-red-500 bg-red-50 text-sm font-semibold rounded-xl hover:bg-red-100 transition-colors"
          >
            <Trash2 size={16} />
            Supprimer
          </button>
          <button
            onClick={togglePublish}
            disabled={saving}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors disabled:opacity-50 ${
              published
                ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
                : "bg-green-50 text-green-700 hover:bg-green-100"
            }`}
          >
            {published ? <EyeOff size={16} /> : <Eye size={16} />}
            {published ? "Dépublier" : "Publier"}
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rdc-blue text-white text-sm font-semibold rounded-xl hover:bg-rdc-blue-dark transition-colors shadow-md disabled:opacity-50"
          >
            <Save size={16} />
            Sauvegarder
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 rounded-xl px-4 py-3 text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 text-green-600 rounded-xl px-4 py-3 text-sm">
          {success}
        </div>
      )}

      {/* Form */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Titre *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Slug (URL) *
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">/blog/</span>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Extrait *
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none text-sm resize-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Contenu *
            </label>
            {content !== undefined && (
              <RichTextEditor content={content} onChange={setContent} />
            )}
            <p className="text-xs text-gray-400 mt-2">
              Utilisez la barre d&apos;outils pour formater : titres (H1, H2, H3),
              listes, gras, italique, citations.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Paramètres</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Auteur
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Image de couverture
                </label>
                {coverPreview || coverImage ? (
                  <div className="relative group">
                    <img
                      src={coverPreview || coverImage}
                      alt="Couverture"
                      className="w-full aspect-video object-cover rounded-xl border border-gray-200"
                    />
                    {uploadingCover && (
                      <div className="absolute inset-0 bg-white/70 rounded-xl flex items-center justify-center">
                        <Loader2 size={24} className="animate-spin text-rdc-blue" />
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={removeCover}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => coverInputRef.current?.click()}
                    className="w-full aspect-video rounded-xl border-2 border-dashed border-gray-200 hover:border-rdc-blue hover:bg-rdc-blue-light/30 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer"
                  >
                    <ImagePlus size={24} className="text-gray-400" />
                    <span className="text-xs text-gray-400">Cliquez pour ajouter</span>
                  </button>
                )}
                <input
                  ref={coverInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  onChange={handleCoverUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Informations</h3>
            <div className="space-y-2 text-xs text-gray-500">
              <p>
                Créé le{" "}
                {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>
                Modifié le{" "}
                {new Date(post.updatedAt).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              {published && (
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  className="text-rdc-blue hover:underline block mt-2"
                >
                  Voir l&apos;article publié →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
