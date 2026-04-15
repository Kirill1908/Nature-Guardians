import { donutChart } from "@/data/donutChart";
import DonutChart from "../DonutChart/DonutChart";

export default function DonationsSection() {
  return (
    <section className="w-full bg-[#0d0d0d] mb-16 md:mb-24 px-5">
      <div className="py-16 md:py-24 bg-[#0d0d0d] main-container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
          <div className="flex-1 lg:max-w-152.75">
            <h2 className="text-3xl mb-4 md:text-5xl font-bold leading-snug md:leading-tight text-white">
              How we spend your donations and where it goes
            </h2>
            <p className="mb-8 text-zinc-500 text-[16px] leading-relaxed line-clamp-2">
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-4 pt-2">
              {donutChart.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-sm shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-white text-[16px] font-medium whitespace-nowrap">
                    {item.percent}% {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <DonutChart />
          </div>
        </div>
      </div>
    </section>
  );
}
