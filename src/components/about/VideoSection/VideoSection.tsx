"use client";

import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";
import Head from "next/head";

const videoPlaylist = [
  // "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
];

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="preload" as="video" href={videoPlaylist[1]} />
      </Head>

      <section className="mx-5 justify-center items-center lg:mx-0">
        <div
          className="main-container relative w-full overflow-hidden sm:rounded-xl bg-black mx-auto cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            width={1200}
            height={450}
            src="/images/about/video-poster.jpg"
            alt="Video poster"
            className="w-full h-125 object-cover block opacity-90 group-hover:opacity-100 transition-opacity"
          />

          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-black/60 to-transparent z-10 pointer-events-none" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 ml-1 border-t-10 border-t-transparent border-l-18 border-l-gray-800 border-b-10 border-b-transparent" />
            </div>
          </button>
        </div>

        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          playlist={videoPlaylist}
        />
      </section>
    </>
  );
}
