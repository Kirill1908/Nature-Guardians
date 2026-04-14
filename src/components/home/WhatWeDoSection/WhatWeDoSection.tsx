import Image from "next/image";

import { whatWeDoItems } from "@/data/whatWeDoItems";

export default function WhatWeDoSection() {
  const displayItems = whatWeDoItems.slice(0, 4);
  return (
    <section className="bg-[#EFF7F2] px-5 py-16 md:py-24 overflow-hidden">
      <div className="main-container">
        <div className="flex items-center gap-6 mb-8">
          <span className="w-18 h-0.5 bg-gray-800"></span>
          <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm whitespace-nowrap">
            What we do
          </span>
        </div>

        <div className="md:ps-24">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-8 max-w-[600px]">
                We care for earth, care for the coming birth
              </h2>

              <p className="text-zinc-500 text-base leading-6 mb-8 max-w-none md:max-w-[600px]">
                We implement innovative solutions to protect ecosystems and
                restore natural resources, bringing communities together to
                ensure a sustainable future for our planet.
              </p>

              <div className="space-y-6 w-full max-w-none md:max-w-[600px] lg:max-w-[520px] text-left">
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

            <div className="w-full flex justify-center md:justify-start lg:block lg:w-[480px] flex-shrink-0">
              <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/home/whatwedo.png"
                  alt="Working for the environment"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 480px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
