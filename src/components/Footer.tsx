import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ExternalLink, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top accent bar */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-rdc-blue" />
        <div className="flex-1 bg-rdc-yellow" />
        <div className="flex-1 bg-rdc-red" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-rdc-blue via-rdc-yellow to-rdc-red flex items-center justify-center">
                <span className="text-white font-bold text-sm">ADF</span>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Les Amis de</p>
                <p className="font-bold text-sm text-rdc-yellow leading-tight">Doudou Fwamba</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              ASBL engagée pour le développement communautaire, le soutien aux réformes
              et l&apos;amélioration des conditions de vie à Kinshasa et en RDC.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-rdc-blue flex items-center justify-center transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-rdc-blue flex items-center justify-center transition-colors">
                <ExternalLink size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-rdc-blue flex items-center justify-center transition-colors">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-base mb-5 text-rdc-yellow">Liens Rapides</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/a-propos", label: "À Propos" },
                { href: "/activites", label: "Activités" },
                { href: "/evenements", label: "Événements" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nos Actions */}
          <div>
            <h3 className="font-semibold text-base mb-5 text-rdc-yellow">Nos Actions</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Éducation & Formation</li>
              <li>Santé Communautaire</li>
              <li>Développement Social</li>
              <li>Soutien Entrepreneurial</li>
              <li>Dialogue Citoyen</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-5 text-rdc-yellow">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-rdc-blue mt-0.5 shrink-0" />
                <span>Commune de Masina, District de Tshangu, Kinshasa, RDC</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-rdc-blue shrink-0" />
                <span>+243 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-rdc-blue shrink-0" />
                <span>contact@amisdoudoufwamba.cd</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Les Amis de Doudou Fwamba. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs">
            ASBL enregistrée en République Démocratique du Congo
          </p>
        </div>
      </div>
    </footer>
  );
}
