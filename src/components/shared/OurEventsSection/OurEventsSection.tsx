"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { EventData, eventsData } from "@/data/events";
import { FaArrowRightLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";

type OurEventsProps = {
  currentEventId?: string;
}

export default function OurEventsSection({ currentEventId }: OurEventsProps) {
  const [randomEvents, setRandomEvents] = useState<EventData[]>([]);
  const pathname = usePathname();
  const fromPath = currentEventId ? "/events" : pathname;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const filtered = currentEventId
        ? eventsData.filter((event) => event.id !== currentEventId)
        : eventsData;

      const shuffled = [...filtered]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      setRandomEvents(shuffled);
    });

    return () => cancelAnimationFrame(frame);
  }, [currentEventId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return { day: "23", month: "SEP" };

    return {
      day: date.getDate(),
      month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    };
  };

  return (
    <section className="pb-20 bg-white">
      <div className="main-container">
        <div className="flex items-center justify-between mb-12 px-6 md:px-0">
          <h2 className="text-4xl font-medium leading-14 text-gray-800">
            {currentEventId ? "Other events" : "Our Events"}
          </h2>
          <div className="flex-1 h-px bg-[#E5E5E5] ml-6 md:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 md:px-0">
          {randomEvents.map((event) => {
            const { day, month } = formatDate(event.date);

            return (
              <Link
                key={event.id}
                href={`/events/${event.id}?from=${fromPath}`}
                className="group flex items-start gap-6 p-10 bg-[#BEF3C0] rounded-lg transition-all duration-500 ease-in-out hover:bg-[#A3E6A6] hover:shadow-md"
              >
                <div className="flex flex-col items-center min-w-15 -mt-1.5">
                  <span className="text-5xl font-medium text-gray-800 leading-[57.60px]">
                    {day}
                  </span>
                  <span className="text-base uppercase font-medium text-gray-800 tracking-widest">
                    {month}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-base font-medium uppercase tracking-widest text-gray-800">
                      Next Events
                    </span>
                    <span className="w-11 h-0.5 bg-gray-800"></span>
                  </div>
                  <h3 className="text-3xl md:text-2xl font-bold text-gray-800 leading-tight  transition-transform duration-200 group-hover:translate-y-px">
                    <span
                      className="group-hover:underline decoration-2 underline-offset-4 decoration-gray-800"
                    >
                      {event.title}
                    </span>
                  </h3>
                </div>
                <div className="self-center w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-in-out group-hover:translate-x-3">
                  <FaArrowRightLong size={20} className="text-gray-800" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
