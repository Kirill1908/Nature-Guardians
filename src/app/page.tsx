import Image from "next/image";
import Link from "next/link";

import { whatWeDoItems } from "@/data/whatWeDoItems";
import ProjectsGrid from "@/components/shared/ProjectsGrid/ProjectsGrid";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import OurNewsSection from "@/components/shared/OurNewsSection/OurNewsSection";
import OurEventsSection from "@/components/shared/OurEventsSection/OurEventsSection";
import SupportersSection from "@/components/ui/SupportersSection/SupportersSection";
import DonationsSection from "@/components/home/DonationsSection/DonationsSection";
import KnowAboutUsSection from "@/components/home/KnowAboutUsSection/KnowAboutUsSection";

export default function HomeHero() {
  const displayItems = whatWeDoItems.slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/hero-background.png"
            alt="Save the environment"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="main-container relative z-10 px-5">
          <div className="flex flex-col">
            <div className="flex-1">
              <h1 className="text-white text-5xl md:text-[64px] font-bold leading-tight md:leading-[1.1] mb-12 md:mb-16 max-w-[640px]">
                Save the environment <br className="hidden lg:block" /> today
                for a better tomorrow
              </h1>

              <div className="flex items-center gap-6 mb-24 md:mb-[192px]">
                <Link
                  href="/what-we-do"
                  className="inline-block bg-white text-gray-800 px-8 py-4 rounded font-medium transition-all duration-300 text-base text-center hover:bg-[#70C174] hover:text-white"
                >
                  What we do
                </Link>
              </div>
            </div>

            <div className="w-full flex items-center gap-4 text-white text-base font-medium">
              <span className="whitespace-nowrap text-sm md:text-base">
                23,800 trees planted
              </span>
              <div className="h-[1px] flex-grow bg-white opacity-40"></div>
              <span className="whitespace-nowrap text-sm md:text-base">
                5,840 donations collected
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Know about us Section */}
      <KnowAboutUsSection />

      {/* Supporters Section */}
      <SupportersSection />

      {/* What we do Section */}
      <section className="bg-[#EFF7F2] py-16 md:py-24 overflow-hidden">
        <div className="main-container px-5">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-18 h-0.5 bg-gray-800"></span>
            <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm whitespace-nowrap">
              What we do
            </span>
          </div>

          <div className="md:ps-24">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
              <div className="flex-[1.4] w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 max-w-[600px]">
                  We care for earth, care for the coming birth
                </h2>

                <p className="text-zinc-500 text-base leading-6 mb-12 max-w-[600px]">
                  We implement innovative solutions to protect ecosystems and
                  restore natural resources, bringing communities together to
                  ensure a sustainable future for our planet.
                </p>

                <div className="space-y-6 max-w-[520px]">
                  {displayItems.map((item) => (
                    <div key={item.id} className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-8 h-8 relative mt-1">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full flex justify-center lg:justify-end">
                <div className="relative w-full aspect-[4/5] max-w-[480px] rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/home/whatwedo.png"
                    alt="Working for the environment"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="main-container px-5">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-18 h-0.5 bg-gray-800"></span>
            <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
              Projects we have done
            </span>
          </div>

          <div className="md:ps-24 mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight max-w-2xl">
              We are creating sustainable society, for everyone and forever.
            </h2>
          </div>

          <ProjectsGrid />
        </div>
      </section>

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
