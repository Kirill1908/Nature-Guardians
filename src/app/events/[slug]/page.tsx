import { eventsData } from "@/data/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import OurEventsSection from "@/components/shared/OurEventsSection/OurEventsSection";
import BackButton from "@/components/ui/BackButton/BackButton";

export const metadata = {
  title: "Events"
}

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.id === slug);

  if (!event) notFound();

  return (
    <main className="min-h-screen bg-white">
      <section className="mb-6 md:h-100 bg-[#eff7f2] py-16 md:py-24 px-6">
        <div className="main-container">
          <h1 className="max-w-3xl text-5xl lg:text-6xl text-left font-bold text-gray-800 leading-[67.20px] mb-12">
            {event.title}
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 text-gray-800 font-medium">
            <div className="flex items-center gap-3">
              <FaLocationDot className="-mbs-1 text-[#70c174]" />
              <span className="text-sm md:text-base">{event.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="-mbs-1 text-[#70c174]" />
              <span className="text-sm md:text-base">{event.date}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="main-container mx-auto px-6 md:px-0">
        <BackButton />
        <div className=" pt-10 pb-16 md:py-16 prose prose-lg max-w-none">
      
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            About
          </h2>

          <p className="text-zinc-600 text-base leading-6 mb-6">
            {event.content[0]}
          </p>

          <p className="text-zinc-600 text-base leading-6">
            {event.content[1]}
          </p>

          <div className="relative -mx-6 md:mx-0 aspect-21/9 md:aspect-3/1 md:rounded-2xl overflow-hidden shadow-lg my-12">
            <Image
              src={event.mainImage}
              alt={event.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
          </div>

          <p className="text-zinc-600 text-base leading-6 ">
            {event.content[2]}
          </p>
        </div>
      </section>
      <OurEventsSection currentEventId={event.id} />
    </main>
  );
}
