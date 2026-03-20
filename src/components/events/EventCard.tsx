import { EventData } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

type EventProps = {
  event: EventData;
};
export default function EventCard({ event }: EventProps) {
  return (
    <div
      key={event.id}
      className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${
        event.index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <Link
        href={`/events/${event.id}`}
        className="group relative h-75 lg:h-100 overflow-hidden shadow-lg -mx-5 w-[calc(100%+2.5rem)] md:mx-0 md:w-1/2 md:rounded-xl"
      >
        <Image
          src={event.mainImage}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <div className="flex items-center gap-5 text-[#70c174] font-bold uppercase tracking-wider text-sm mb-4">
          Next Event
          <span className="w-11 h-0.5 bg-[#70c174]"></span>
        </div>

        <Link href={`/events/${event.id}`} className="group block">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2 leading-tight transition-transform duration-200 group-hover:translate-y-px">
            <span className="group-hover:underline decoration-2 underline-offset-4 decoration-gray-800">
              {event.title}
            </span>
          </h3>
        </Link>

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
  );
}
