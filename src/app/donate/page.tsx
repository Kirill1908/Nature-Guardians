import ContentTabs from "@/components/donate/ContentTabs/ContentTabs";
import Image from "next/image";
import Link from "next/link";

export default function Donate() {
  return (
    <main>
      <section className="px-5 pt-12 pb-16 md:pt-24 md:pb-24 bg-[#eff7f2] overflow-hidden">
        <div className="main-container flex flex-col md:gap-14 md:flex-row">
          <div className="flex-[1.5] lg:flex-[1.8]">
            <div className="flex items-center gap-6 mb-6">
              <span className="w-18 h-0.5 bg-gray-800"></span>
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Donate
              </span>
            </div>

            <h1 className="md:ps-24 text-center md:text-start text-5xl lg:text-6xl text-gray-800 leading-[67.20px] md:leading-tight lg:leading-[67.20px] mb-8 font-bold">
              Making a donation <br className="hidden lg:block" /> for Nature.
            </h1>

            <p className="md:ps-24 text-center md:text-start text-zinc-600 text-base md:text-lg font-normal leading-6 md:max-w-160 mb-10">
              When you donate, you&apos;re supporting effective solutions to big
              environmental challenges — an investment in the future of our
              planet.
            </p>

            {/* Кнопка тільки на десктопі */}
            <div className="hidden md:flex md:ps-24">
              <Link
                href="#"
                className="px-8 py-4 bg-[#70C174] text-white font-medium text-base rounded-sm cursor-pointer hover:opacity-90 transition-colors"
              >
                Donate now
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="h-75 relative overflow-hidden shadow-sm -mx-5 w-[calc(100%+2.5rem)] aspect-4/3 md:mx-0 md:w-full md:max-w-125 md:h-80 md:aspect-auto md:rounded-xl">
              <Image
                src="/images/donate/hero-donate.jpg"
                alt="Donate hero"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Кнопка тільки на мобільному */}
          <div className="md:hidden flex justify-center mt-16">
            <Link
              href="#"
              className="px-8 py-4 bg-[#70C174] text-white font-medium text-base rounded-sm cursor-pointer hover:opacity-90 transition-colors"
            >
              Donate now
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="main-container flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              How you can contribute to protect Earth
            </h2>
            <p className="text-zinc-600 text-base leading-7">
              Every contribution, no matter the size, makes a real difference.
              Your donation funds the programs, people, and tools we need to
              protect our planet&apos;s most vulnerable ecosystems.
            </p>
          </div>
          <div className="md:w-1/2">
            <ContentTabs
              tabs={[
                {
                  label: "Overview",
                  content:
                    "Your donation goes directly to funding tree planting, ocean cleanup, and wildlife protection programs. We ensure full transparency in how every dollar is spent across our global initiatives.",
                },
                {
                  label: "Impact",
                  content:
                    "Since 2018, donor contributions have helped us plant over 32,000 trees, clean 150km of coastline, and protect habitats for more than 40 endangered species. Every dollar creates measurable change.",
                },
                {
                  label: "What You Get",
                  content:
                    "As a donor you receive regular updates on the projects you support, an annual impact report, and the knowledge that your contribution is making a lasting difference for generations to come.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <hr className="main-container border-t border-gray-200" />

      <section className="px-5 py-16 md:py-24">
        <div className="main-container flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              How we use your donation
            </h2>
          </div>
          <div className="md:w-2/3 flex flex-col md:flex-row gap-8">
            <p className="text-zinc-600 text-base leading-7 md:w-1/2">
              60% of all donations go directly to field operations — tree
              planting events, wildlife monitoring, ocean cleanup campaigns, and
              habitat restoration projects carried out by our volunteer teams.
            </p>
            <p className="text-zinc-600 text-base leading-7 md:w-1/2">
              The remaining 40% supports the infrastructure that makes our work
              possible: environmental research, community education programs,
              volunteer training, and organizational operations.
            </p>
          </div>
        </div>
      </section>

      <section
        id="volunteer"
        className="px-5 pt-12 pb-16 md:pt-24 md:pb-24 bg-[#fde8e8] overflow-hidden"
      >
        <div className="main-container flex flex-col md:gap-14 md:flex-row">
          <div className="flex-[1.5] lg:flex-[1.8]">
            <div className="flex items-center gap-6 mb-6">
              <span className="w-18 h-0.5 bg-gray-800"></span>
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Volunteer
              </span>
            </div>

            <h2 className="md:ps-24 text-center md:text-start text-5xl lg:text-6xl text-gray-800 leading-[67.20px] md:leading-tight lg:leading-[67.20px] mb-8 font-bold">
              Join our mission <br className="hidden lg:block" /> as a
              volunteer.
            </h2>

            <p className="md:ps-24 text-center md:text-start text-zinc-600 text-base md:text-lg font-normal leading-6 md:max-w-160 mb-10">
              Volunteering with Nature Guardians means becoming part of a global
              movement. Your time and energy directly protect the ecosystems
              that all life depends on.
            </p>

            {/* Кнопка тільки на десктопі */}
            <div className="hidden md:flex md:ps-24">
              <Link
                href="#"
                className="px-8 py-4 bg-[#70C174] text-white font-medium text-base rounded-sm cursor-pointer hover:opacity-90 transition-colors"
              >
                Join as a volunteer
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="h-75 relative overflow-hidden shadow-sm -mx-5 w-[calc(100%+2.5rem)] aspect-4/3 md:mx-0 md:w-full md:max-w-125 md:h-80 md:aspect-auto md:rounded-xl">
              <Image
                src="/images/donate/hero-volunteer.jpeg"
                alt="Volunteer hero"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Кнопка тільки на мобільному */}
          <div className="md:hidden flex justify-center mt-16">
            <Link
              href="#"
              className="px-8 py-4 bg-[#70C174] text-white font-medium text-base rounded-sm cursor-pointer hover:opacity-90 transition-colors"
            >
              Join as a volunteer
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="main-container flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              How you can help as a volunteer
            </h2>
            <p className="text-zinc-600 text-base leading-7">
              Whether you have a few hours or a few days, there is a meaningful
              role for you. Our volunteer programs are designed to match your
              skills and availability with the needs of our projects.
            </p>
          </div>
          <div className="md:w-1/2">
            <ContentTabs
              tabs={[
                {
                  label: "Overview",
                  content:
                    "Volunteers participate in tree planting events, beach and river cleanups, wildlife surveys, and community education workshops. No prior experience is needed — just a passion for protecting nature.",
                },
                {
                  label: "Impact",
                  content:
                    "Our volunteers have collectively contributed over 120,000 hours of conservation work since 2018. That effort has directly resulted in healthier ecosystems, cleaner waterways, and stronger local communities.",
                },
                {
                  label: "What You Get",
                  content:
                    "As a volunteer you gain hands-on conservation experience, connect with a passionate global community, and receive recognition for your contributions through our volunteer certification program.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <hr className="main-container border-t border-gray-200" />

      <section className="px-5 py-16 md:py-24">
        <div className="main-container flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              How we use volunteer time
            </h2>
          </div>
          <div className="md:w-2/3 flex flex-col md:flex-row gap-8">
            <p className="text-zinc-600 text-base leading-7 md:w-1/2">
              70% of volunteer hours are dedicated to direct conservation action
              — planting, cleaning, monitoring, and restoring natural habitats
              in the areas that need it most.
            </p>
            <p className="text-zinc-600 text-base leading-7 md:w-1/2">
              The remaining 30% supports education and outreach — volunteers
              lead school workshops, community events, and awareness campaigns
              that multiply the impact of our conservation work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
