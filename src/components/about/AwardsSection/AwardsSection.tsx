import Image from "next/image";

const AWARDS = [
  {
    iconHref: "/images/about/award-2010.svg",
    year: "2021",
    title: "Best NGO Award",
    location: "Berlin, Germany",
  },
  {
    iconHref: "/images/about/award-2010.svg",
    year: "2018",
    title: "Global Award",
    location: "New York, USA",
  },
  {
    iconHref: "/images/about/award-2010.svg",
    year: "2014",
    title: "Foresto Award",
    location: "New Delhi, India",
  },
  {
    iconHref: "/images/about/award-2010.svg",
    year: "2010",
    title: "Earth Saver Award",
    location: "Vienna, Austria",
  },
];

export default function AwardsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="main-container">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 md:text-5xl">
          Awards & Recognitions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {AWARDS.map(({ iconHref, year, title, location }) => (
            <div
              key={year}
              className="flex flex-col items-center text-center gap-4"
            >
              <Image src={iconHref} alt="awards" width={111} height={92} />

              <div>
                <p className="text-2xl font-bold text-gray-800 leading-10">
                  {year}
                </p>
                <p className="text-base font-bold text-gray-800 leading-6 mt-1">
                  {title}
                </p>
                <p className="text-xs font-medium text-gray-800 opacity-60 uppercase tracking-wider mt-1">
                  {location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
