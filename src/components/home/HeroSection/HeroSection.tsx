import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-background.png"
          alt="Save the environment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="main-container relative z-10">
        <div className="flex flex-col">
          <div className="flex-1">
            <h1 className="text-white text-5xl md:text-[64px] font-bold leading-tight md:leading-[1.1] mb-12 md:mb-16 max-w-[640px]">
              Save the environment <br className="hidden lg:block" /> today for
              a better tomorrow
            </h1>

            <div className="flex items-center gap-6 mb-24 md:mb-[192px]">
              <Link
                href="/what-we-do"
                className="inline-block bg-white text-gray-800 px-8 py-4 rounded font-medium transition-all duration-300 text-base text-center hover:bg-[#70C174] hover:text-white"
              >
                What we do
              </Link>
            </div>
          </div>

          <div className="w-full flex items-center gap-4 text-white text-base font-medium">
            <span className="whitespace-nowrap text-sm md:text-base">
              23,800 trees planted
            </span>
            <div className="h-[1px] flex-grow bg-white opacity-40"></div>
            <span className="whitespace-nowrap text-sm md:text-base">
              5,840 donations collected
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
