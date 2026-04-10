import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ActivitiesPreview from "@/components/ActivitiesPreview";
import TimelineSection from "@/components/TimelineSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ActivitiesPreview />
      <TimelineSection />
      <CTASection />
    </>
  );
}
