import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "À Propos | Les Amis de Doudou Fwamba",
  description:
    "Découvrez l'ASBL Les Amis de Doudou Fwamba, sa mission, sa vision et son équipe dirigeante.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="À Propos de Nous"
        subtitle="Découvrez notre histoire, notre mission et les personnes qui portent notre vision."
        accent="Notre Identité"
      />
      <AboutContent />
    </>
  );
}
