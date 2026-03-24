import {
  FaLeaf,
  FaGlobe,
  FaSeedling,
  FaMountain,
  FaWater,
  FaSun,
} from "react-icons/fa";

const SUPPORTERS = [
  { icon: FaLeaf, name: "GreenWave" },
  { icon: FaGlobe, name: "EcoSphere" },
  { icon: FaSeedling, name: "Plantify" },
  { icon: FaWater, name: "AquaCore" },
  { icon: FaMountain, name: "PeakFund" },
  { icon: FaSun, name: "SolarBase" },
];

type SupportersSectionProps = {
  classNameForLine?: string;
  classNameForBg?: string;
};

export default function SupportersSection({
  classNameForLine = "md:block",
  classNameForBg = "bg-white",
}: SupportersSectionProps) {
  return (
    <section className={`${classNameForBg} pb-16 md:pb-24`}>
      <div className="main-container">
        <div className="mb-12 flex items-center justify-between px-6 md:px-0">
          <p className=" text-gray-800 font-bold uppercase tracking-[2px] text-sm">
            Our Supporters
          </p>
          <div
            className={`${classNameForLine} flex-1 h-px bg-[#E5E5E5] ml-6`}
          ></div>
        </div>

        <div className="flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-between lg:items-center gap-6 w-full">
    {SUPPORTERS.map(({ icon: Icon, name }) => (
      <div
        key={name}
        className="pl-10 sm:pl-16 md:pl-10 lg:pl-0 flex items-center gap-2 text-slate-400 hover:text-[#33a839] transition-colors duration-200 cursor-pointer"
      >
        <Icon className="w-6 h-6 shrink-0" />
        <span className="text-[15px] font-medium tracking-tight">{name}</span>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
