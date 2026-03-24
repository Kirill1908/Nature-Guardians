import OurNewsSection from "@/components/shared/OurNewsSection/OurNewsSection";
import TopNewsList from "@/components/media/TopNewsList/TopNewsList";
import OurEventsSection from "@/components/shared/OurEventsSection/OurEventsSection";
import Link from "next/link";

export const metadata = {
  title: "Media",
};

export default function Media() {
  return (
    <main>
      <section className="py-16 px-6 md:py-24 md:px-0 bg-[#EFF7F2] overflow-hidden">
        <div className="main-container flex flex-col md:gap-24 xl:flex-row items-center">
          <div className="flex-1 lg:flex-[1.8] self-start">
            <div className="flex items-center gap-6 mb-8">
              <span className="w-18 h-0.5 bg-gray-800"></span>
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Top news
              </span>
            </div>

            <h1 className="md:ps-24 text-center md:text-start text-5xl font-bold lg:text-[56px] text-gray-800 leading-[67.20px] mb-8">
              Our goal is to make water available for everyone
            </h1>

            <p className="pb-10 text-center md:text-start md:ps-24 text-zinc-600 text-base md:text-[16px] font-normal leading-6 md:max-w-160">
              Clean water is a basic human right, yet millions still lack access
              to it. We work with local communities to build sustainable water
              solutions and protect natural water sources.
            </p>
            <div className="text-center md:text-start md:ps-24">
              <Link
                href={`/blog`}
                className="px-8 py-4 bg-[#70C174] text-white rounded-sm hover:opacity-90 transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full mt-10 md:mt-0">
            <div className="bg-white rounded-xl overflow-hidden lg:min-w-148">
              <TopNewsList />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center mt-12 sm:mt-24 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-[57.60px]">
            Read our Recent News
          </h2>
          <p className="mb-12 text-zinc-600 font-normal text-base max-w-md mx-auto leading-6">
            Stay informed about our latest environmental initiatives, community
            efforts, and conservation breakthroughs from around the world.
          </p>
        </div>
        <OurNewsSection className="pb-12 sm:pb-24 px-6 md:px-0" />
      </section>
      <OurEventsSection />
    </main>
  );
}
