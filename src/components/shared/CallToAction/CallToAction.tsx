import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden rounded-xl main-container mx-5 md:mx-auto">
      <Image
        src="/images/shared/cta-bg.jpg"
        alt="Call to action background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative flex flex-col items-center justify-center gap-8 px-6 pt-23.5 pb-23">
        <h2 className="text-3xl md:text-5xl font-bold text-center leading-snug md:leading-tight text-white">
          You can contribute to make <br className="hidden md:block" /> the
          environment greener!
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <Link
            href="/donate#volunteer"
            className="min-w-50 text-center px-8 py-4 bg-[#70C174] text-white font-medium text-base rounded-sm hover:opacity-90 transition-colors"
          >
            Join as a volunteer
          </Link>
          <Link
            href="/donate"
            className="min-w-50 text-center px-8 py-4 bg-white text-gray-800 font-medium text-base rounded-sm hover:opacity-90 transition-colors"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
