import AwardsSection from "@/components/about/AwardsSection/AwardsSection";
import OurJourneySection from "@/components/about/OurJourneySection/OurJourneySection";
import TeamCard from "@/components/about/TeamCard/TeamCard";
import VideoSection from "@/components/about/VideoSection/VideoSection";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import OurEventsSection from "@/components/shared/OurEventsSection/OurEventsSection";
import OurNewsSection from "@/components/shared/OurNewsSection/OurNewsSection";
import SupportersSection from "@/components/ui/SupportersSection/SupportersSection";
import { teamData, TeamMember } from "@/data/team";

export const metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <main>
      <section className="px-5 py-16 md:py-24 bg-white overflow-hidden">
        <div className="main-container">
          <div className="flex items-center gap-6 mb-8">
            <span className="w-18 h-0.5 bg-gray-800"></span>
            <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
              Know about us
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:gap-14">
            <div className="flex-[1.5] lg:flex-[1.8] mb-10 md:mb-0">
              <h1 className="md:ps-24 text-center md:text-start text-5xl font-bold lg:text-6xl text-gray-800 leading-[67.20px] mb-8">
                We are a nonprofit team working worldwide
              </h1>
            </div>

            <div className="flex-1 self-start">
              <p className="text-gray-800 font-bold text-base md:text-lg leading-8 mb-4">
                Together we protect ecosystems, restore forests, and empower
                communities to live in harmony with nature.
              </p>
              <p className="opacity-70 text-gray-800 text-base font-normal leading-6">
                Founded in 2010, Nature Guardians has been at the forefront of
                environmental advocacy. Our team of passionate volunteers and
                experts works across 30+ countries to combat climate change,
                preserve biodiversity, and build sustainable futures for
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoSection />

      <section className="pt-78.75 md:pt-86.5 -mt-62.5 px-5 pb-16 md:pb-24 bg-[#EFF7F2] overflow-hidden">
        <div className="main-container lg:px-24 flex flex-col md:flex-row md:gap-14">
          <div className="flex-1 mb-12 md:mb-0">
            <div className="flex items-center gap-6 mb-6">
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Our Mission
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-10 mb-6">
              We make the world a better place by saving our environment
            </h2>
            <p className="opacity-70 text-gray-800 text-base font-normal leading-6">
              Our mission is to inspire and mobilize people around the world to
              take action against environmental degradation. Through education,
              advocacy, and on-the-ground projects, we work to restore natural
              habitats, reduce carbon emissions, and protect endangered species
              for future generations.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-6 mb-6">
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Our Vision
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-10 mb-6">
              Plant more trees to make world air pollution free
            </h2>
            <p className="opacity-70 text-gray-800 text-base font-normal leading-6">
              We envision a world where clean air, pure water, and thriving
              ecosystems are a reality for every living being. By planting
              millions of trees, promoting renewable energy, and partnering with
              local communities, we aim to create a sustainable planet where
              nature and humanity coexist in balance.
            </p>
          </div>
        </div>
      </section>

      <SupportersSection
        classNameForLine="hidden"
        classNameForBg="bg-[#EFF7F2]"
        classNameForPB = "md:pb-24"
      />

      <AwardsSection />
      <OurJourneySection />

      <section className="px-5 pb-16 md:pb-24 bg-white">
        <div className="main-container">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet our team
            </h2>
            <p className="text-zinc-500 text-base max-w-md mx-auto leading-6">
              Our dedicated team of environmental advocates works tirelessly to
              protect nature and inspire communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {(teamData as TeamMember[]).map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <CallToAction />
      </section>
      <OurNewsSection />
      <OurEventsSection />
    </main>
  );
}
