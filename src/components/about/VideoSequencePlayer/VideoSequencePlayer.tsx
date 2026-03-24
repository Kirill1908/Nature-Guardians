"use client";

import { useState, useRef, useEffect } from "react";

const videoPlaylist = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
];

export const VideoSequencePlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
    setIsTransitioning(false);
  };

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoPlaylist.length - 1) {
      setIsTransitioning(true);
      setCurrentVideoIndex((prev) => prev + 1);
    } else {
      setCurrentVideoIndex(0);
      setIsPlaying(false);
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    if (currentVideoIndex > 0) {
      videoRef.current?.play();
    }
  }, [currentVideoIndex]);

  return (
    <section className="main-container w-full flex justify-center items-center sm:px-6 md:px-0">
      <div className="relative w-full overflow-hidden sm:rounded-xl bg-black mx-auto"
      >
        <video
          ref={videoRef}
          key={currentVideoIndex}
          src={videoPlaylist[currentVideoIndex]}
          className="w-full h-125 object-cover block"
          controls={isPlaying}
          onEnded={handleVideoEnd}
          onPause={() => !isTransitioning && setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          poster={
            currentVideoIndex === 0
              ? "/images/about/video-poster.jpg"
              : undefined
          }
        />

        {!isPlaying && !isTransitioning && currentVideoIndex === 0 && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play video"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-black/60 to-transparent z-10 pointer-events-none" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 ml-1 border-t-10 border-t-transparent border-l-18 border-l-gray-800 border-b-10 border-b-transparent" />
            </div>
          </button>
        )}
      </div>
    </section>
  );
};
