import Link from "next/link";
import Image from "next/image";
import { eventsData } from "@/data/events";
import { FaLocationDot } from "react-icons/fa6";

export default function EventsPage() {
  return (
    <main className="bg-white">
      <section className="md:h-130 px-5 py-16 md:py-24 bg-[#EFF7F2] overflow-hidden">
        <div className="main-container flex flex-col md:gap-14 md:flex-row">
          <div className="flex-[1.5] lg:flex-[1.8]">
            <div className="flex items-center gap-6 mb-6">
              <span className="w-18 h-0.5 bg-gray-800"></span>
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Our Events
              </span>
            </div>

            <h1 className="md:ps-24 text-center md:text-start text-6xl font-bold md:text-5xl lg:text-6xl text-gray-800 leading-[67.20px] mb-8">
              Events for a <br className="hidden lg:block" /> better world
            </h1>

            <p className="pb-10 text-center md:text-start md:ps-24 text-zinc-600 text-base md:text-lg font-normal leading-6 md:max-w-160">
              Join us in our mission to create a better world.
              Discover upcoming volunteer opportunities, workshops, and
              community gatherings. We believe that together we can make
              a lasting impact on our planet.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="relative w-full aspect-4/3 md:aspect-auto md:h-full max-w-125 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/events/hero-events.jpg"
                alt="People volunteering"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 bg-white">
        <div className="main-container space-y-16">
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 relative h-75 lg:h-100 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={event.mainImage}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="flex items-center gap-5 text-[#70c174] font-bold uppercase tracking-wider text-sm mb-4">
                  Next Event
                  <span className="w-11 h-0.5 bg-[#70c174]"></span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2 leading-[57.60px]">
                  {event.title}
                </h2>

                <div className="flex py-2 mb-2 items-center gap-2 text-[#1d2130]">
                  <FaLocationDot className="-mbs-1 text-[#70c174]" />
                  <span className="text-sm font-medium">{event.location}</span>
                </div>

                <p className="text-zinc-600 mb-8 line-clamp-3">{event.about}</p>

                <Link
                  href={`/events/${event.id}`}
                  className="px-8 py-4 bg-[#70C174] text-white rounded-sm hover:opacity-90 transition-colors"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
