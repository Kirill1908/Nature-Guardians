"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function KnowAboutUsSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="px-5 py-16 md:py-24 overflow-hidden">
      <div className="main-container flex flex-col md:gap-10 lg:flex-row items-center">
        <div className="flex-[1.5] lg:flex-[1.2] w-full flex flex-col">
          <div className="flex items-center gap-6 mb-8">
            <span className="w-18 h-0.5 bg-gray-800"></span>
            <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
              Know about us
            </span>
          </div>
          <div className="md:ps-24">
            <h2 className="mb-8 text-center md:text-start text-4xl lg:text-[48px] text-[#1D2130] font-bold leading-tight md:leading-[1.2]">
              We help nature smile and survive everywhere
            </h2>

            <div className="mb-12 flex flex-col gap-5 text-center md:text-start text-zinc-600 text-base md:text-md font-normal leading-relaxed">
              <p>
                Our primary mission is to protect the planet&apos;s fragile
                ecosystems. We work tirelessly to restore natural habitats, and promote sustainable practices
                across the globe.
              </p>
              <p>
                Through community-driven initiatives and global partnerships, we
                empower people to make a real difference. Join us in our
                commitment to building a healthier world for future
                generations.
              </p>
            </div>
            <div className="text-center md:text-start mt-2">
              <Link
                href="/about-us"
                className="inline-block px-8 py-3.5 bg-[#70C174] text-white rounded-md hover:bg-green-600 hover:opacity-90 transition-colors font-medium"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center md:justify-start md:ps-24 lg:ps-0 mt-12 md:mt-0">
          <div className="relative overflow-hidden w-full max-w-120 max-h-145 aspect-auto rounded-2xl shadow-md group cursor-pointer">
            <video
              ref={videoRef}
              src="/videos/video-home.mp4"
              poster="/images/home/knowAbout.jpg"
              className="w-full h-full object-cover object-bottom transition-transform duration-700"
              controls={isPlaying}
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              onClick={handlePlayClick}
            >
              <button
                className="absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer"
                aria-label="Play video"
                type="button"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
                <div className="relative z-10 w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 ml-1 border-t-[10px] border-t-transparent border-l-[18px] border-l-gray-800 border-b-[10px] border-b-transparent" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
