"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/RichTextEditor";
import { Save, Eye, ArrowLeft, ImagePlus, X, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewArticlePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [coverPreview, setCoverPreview] = useState("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [author, setAuthor] = useState("Admin");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const coverInputRef = useRef<HTMLInputElement>(null);

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
        setError(data.error || "Erreur lors du t\u00e9l\u00e9chargement de l'image.");
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

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(value));
    }
  };

  const handleSave = async (publish: boolean) => {
    if (!title || !slug || !excerpt || !content) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          coverImage: coverImage || null,
          published: publish,
          author,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        router.push(`/admin/articles/${data.id}`);
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

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/articles"
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h2 className="text-xl font-bold text-gray-900">Nouvel article</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            <Save size={16} />
            Brouillon
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rdc-blue text-white text-sm font-semibold rounded-xl hover:bg-rdc-blue-dark transition-colors shadow-md disabled:opacity-50"
          >
            <Eye size={16} />
            Publier
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 rounded-xl px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Form */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Titre de l&apos;article *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdc-blue focus:ring-2 focus:ring-rdc-blue/20 outline-none text-sm"
                  placeholder="Le titre de votre article"
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
                    placeholder="mon-article"
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
                  placeholder="Un court résumé de l'article (affiché dans la liste du blog)"
                />
              </div>
            </div>
          </div>

          {/* Rich Text Editor */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Contenu de l&apos;article *
            </label>
            <RichTextEditor content={content} onChange={setContent} />
            <p className="text-xs text-gray-400 mt-2">
              Utilisez la barre d&apos;outils pour formater votre texte : titres (H1, H2, H3),
              listes à puces, listes numérotées, gras, italique, citations.
            </p>
          </div>
        </div>

        {/* Sidebar */}
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
                  placeholder="Nom de l'auteur"
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

          {/* Help */}
          <div className="bg-rdc-blue-light rounded-2xl p-6">
            <h3 className="font-semibold text-rdc-blue-dark mb-3 text-sm">
              Guide de formatage
            </h3>
            <ul className="space-y-2 text-xs text-rdc-blue-dark/80">
              <li><strong>H1</strong> — Titre principal (grand)</li>
              <li><strong>H2</strong> — Sous-titre (moyen)</li>
              <li><strong>H3</strong> — Sous-section (petit)</li>
              <li><strong>B</strong> — Texte en gras</li>
              <li><strong>I</strong> — Texte en italique</li>
              <li><strong>Liste</strong> — Points (puces ou numéros)</li>
              <li><strong>Citation</strong> — Bloc de citation</li>
              <li><strong>Image</strong> — Insérer des images dans le contenu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
