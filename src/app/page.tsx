import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ActivitiesPreview from "@/components/ActivitiesPreview";
import LeadershipSection from "@/components/LeadershipSection";
import ImpactSection from "@/components/ImpactSection";
import TimelineSection from "@/components/TimelineSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ActivitiesPreview />
      <LeadershipSection />
      <ImpactSection />
      <TimelineSection />
      <CTASection />
    </>
  );
}
