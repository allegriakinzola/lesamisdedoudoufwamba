import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import EventsContent from "./EventsContent";

export const metadata: Metadata = {
  title: "Événements | Les Amis de Doudou Fwamba",
  description:
    "Découvrez les événements passés et à venir de l'ASBL Les Amis de Doudou Fwamba.",
};

export default function EvenementsPage() {
  return (
    <>
      <PageBanner
        title="Nos Événements"
        subtitle="Retrouvez tous nos événements passés et à venir. Rejoignez-nous pour construire ensemble l'avenir."
        accent="Calendrier"
      />
      <EventsContent />
    </>
  );
}
