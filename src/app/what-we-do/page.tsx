import Image from "next/image";
import { whatWeDoItems } from "@/data/whatWeDoItems";
import ProjectsGrid from "@/components/shared/ProjectsGrid/ProjectsGrid";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import OurNewsSection from "@/components/shared/OurNewsSection/OurNewsSection";
import OurEventsSection from "@/components/shared/OurEventsSection/OurEventsSection";

export const metadata = {
  title: "What We Do",
};

export default function WhatWeDoPage() {
  return (
    <main className="bg-white pt-16 md:pt-24">
      <section className="px-5 pb-16 md:pb-24 overflow-hidden">
        <div className="main-container flex flex-col md:gap-14 md:flex-row">
          <div className="flex-[1.5] lg:flex-[1.8]">
            <div className="flex items-center gap-6 mb-8">
              <span className="w-18 h-0.5 bg-gray-800"></span>
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                What We Do
              </span>
            </div>

            <h1 className="md:ps-24 text-center md:text-start text-5xl lg:text-6xl text-gray-800 leading-[67.20px] mb-8 font-bold">
              We are working <br className="hidden lg:block" /> worldwide
            </h1>

            <p className="text-center md:text-start md:ps-24 text-zinc-600 text-base md:text-lg font-normal leading-6 md:max-w-160">
              We are dedicated to protecting the environment through action,
              education, and community. Our programs span the globe, tackling
              the most urgent ecological challenges of our time.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="h-75 relative overflow-hidden shadow-sm -mx-5 w-[calc(100%+2.5rem)] aspect-4/3 md:mx-0 md:w-full md:max-w-125 md:h-80 md:aspect-auto md:rounded-xl">
              <Image
                src="/images/what-we-do/hero-wwd.jpg"
                alt="What we do hero"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EFF7F2] py-16 md:py-24 px-5 md:px-0 mb-16 md:mb-24">
        <div className="main-container">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 md:mb-16">
            What we do for the environment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {whatWeDoItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="shrink-0"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-base leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <div className="main-container px-5 md:px-0 mb-12 md:mb-16 text-center">
          <p className="text-gray-800 font-bold uppercase tracking-[2px] text-sm mb-4">
            Projects we have done
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight max-w-3xl mx-auto">
            We are creating a sustainable society, for everyone.
          </h2>
        </div>
        <div className="px-5 md:px-0">
          <ProjectsGrid />
        </div>
      </div>

      <div className="py-16 md:py-24">
        <CallToAction />
      </div>

      <OurNewsSection />

      <OurEventsSection />
    </main>
  );
}
