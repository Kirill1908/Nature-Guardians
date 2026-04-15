import CallToAction from "@/components/shared/CallToAction/CallToAction";
import OurNewsSection from "@/components/shared/OurNewsSection/OurNewsSection";
import OurEventsSection from "@/components/shared/OurEventsSection/OurEventsSection";
import SupportersSection from "@/components/ui/SupportersSection/SupportersSection";
import DonationsSection from "@/components/home/DonationsSection/DonationsSection";
import KnowAboutUsSection from "@/components/home/KnowAboutUsSection/KnowAboutUsSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection/WhatWeDoSection";
import ProjectsSection from "@/components/home/ProjectsSection/ProjectsSection";
import HeroSection from "@/components/home/HeroSection/HeroSection";

export default function HomeHero() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      {/* Know about us Section */}
      <KnowAboutUsSection />
      {/* Supporters Section */}
      <SupportersSection />
      {/* What We Do Section */}
      <WhatWeDoSection />
      {/* Projects Section */}
      <ProjectsSection />
      {/* How we spend your donations Section */}
      <DonationsSection />
      {/* CallToAction Section */}
      <section className="pb-16 md:pb-24">
        <CallToAction />
      </section>
      {/* Read our news Section */}
      <OurNewsSection />
      {/* Our events Section */}
      <OurEventsSection />
    </main>
  );
}
