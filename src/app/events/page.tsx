import Image from "next/image";
import { eventsData } from "@/data/events";
import EventCard from "@/components/events/EventCard";

export const metadata = {
  title: "Our Events"
}

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

            <h1 className="md:ps-24 text-center md:text-start text-5xl font-bold lg:text-6xl text-gray-800 leading-[67.20px] mb-8">
              Events for a <br className="hidden lg:block" /> better world
            </h1>

            <p className="pb-10 text-center md:text-start md:ps-24 text-zinc-600 text-base md:text-lg font-normal leading-6 md:max-w-160">
              Join us in our mission to create a better world. Discover upcoming
              volunteer opportunities, workshops, and community gatherings. We
              believe that together we can make a lasting impact on our planet.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div
              className="h-75 relative overflow-hidden shadow-sm -mx-5 w-[calc(100%+2.5rem)] aspect-4/3 md:mx-0 md:w-full md:max-w-125 md:h-full md:aspect-auto md:rounded-xl
  "
            >
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

      <section className="px-5 py-18 bg-white">
        <div className="main-container space-y-16">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
