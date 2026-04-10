import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ActivitiesContent from "./ActivitiesContent";

export const metadata: Metadata = {
  title: "Nos Activités | Les Amis de Doudou Fwamba",
  description:
    "Découvrez les domaines d'action de l'ASBL Les Amis de Doudou Fwamba : éducation, santé, développement social et plus.",
};

export default function ActivitesPage() {
  return (
    <>
      <PageBanner
        title="Nos Activités"
        subtitle="Découvrez nos domaines d'intervention et les actions concrètes que nous menons pour le développement communautaire."
        accent="Ce que nous faisons"
      />
      <ActivitiesContent />
    </>
  );
}
