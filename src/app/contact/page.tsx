import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Les Amis de Doudou Fwamba",
  description:
    "Contactez l'ASBL Les Amis de Doudou Fwamba. Nous sommes à votre écoute.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contactez-nous"
        subtitle="Nous sommes à votre écoute. N'hésitez pas à nous envoyer un message ou à nous rendre visite."
        accent="Restons en contact"
      />
      <ContactContent />
    </>
  );
}
