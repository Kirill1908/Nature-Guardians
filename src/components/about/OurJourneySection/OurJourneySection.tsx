import Image from "next/image";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";

export default function OurJourneySection() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="main-container">
        <div className="mx-5 md:mx-0 pt-12 lg:pl-24 lg:py-16 bg-stone-950 rounded-xl flex flex-col lg:flex-row items-center lg:items-stretch gap-12">
          <div className="px-8 md:max-w-125 lg:max-w-110 self-center">
            <div className="space-y-4 pb-8">
              <p className="font-bold uppercase tracking-[2px] text-sm text-white">
                OUR JOURNEY
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] text-white">
                How we raised 34M
              </h2>
              <p className="text-base font-normal opacity-60 text-white leading-relaxed">
                Through the collective power of our community, we have secured
                vital funding to restore endangered ecosystems and protect
                biodiversity worldwide. Every contribution brings us closer to a
                sustainable future.
              </p>
            </div>

            <div className="grid max-[420px]:grid-cols-1 grid-cols-3 sm:grid-cols-3 gap-y-10 gap-x-6">
              <div>
                <AnimatedNumber value={34} unit="M+" />
                <p className="text-sm opacity-60 text-white font-medium leading-relaxed">
                  Donation Received
                </p>
              </div>
              <div>
                <AnimatedNumber value={400} unit="+" />
                <p className="text-sm opacity-60 text-white font-medium leading-relaxed">
                  Volunters
                </p>
              </div>
              <div>
                <AnimatedNumber value={40} unit="K+" />
                <p className="text-sm opacity-60 text-white font-medium leading-relaxed">
                  Trees planted
                </p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-xl lg:rounded-none lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden">
            <Image
              src="/images/team/all_team.jpg"
              alt="team Nature Guardians"
              width={650}
              height={450}
              loading="eager"
              className="w-full h-full object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
