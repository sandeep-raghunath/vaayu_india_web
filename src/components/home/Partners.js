import Image from "next/image";

export default function Partners() {
  const partners = [
    { src: "/images/home/partners/drdo.png", alt: "DRDO" },
    { src: "/images/home/partners/hero.png", alt: "Hero" },
    { src: "/images/home/partners/wipro.png", alt: "Wipro" },
    { src: "/images/home/partners/army.png", alt: "Indian Army" },
    { src: "/images/home/partners/mondelez.png", alt: "Mondelez" },
    { src: "/images/home/partners/mp-tourism.png", alt: "Madhya Pradesh Tourism" },
    { src: "/images/home/partners/greatgalleon.png", alt: "Great Galleon Ventures" },
    { src: "/images/home/partners/mcdonalds.png", alt: "McDonalds" },
    { src: "/images/home/partners/indianrailways.png", alt: "Indian Railways" },
    { src: "/images/home/partners/indianrailways.png", alt: "Indian Railways" },
    { src: "/images/home/partners/indianrailways.png", alt: "Indian Railways" },
    { src: "/images/home/partners/indianrailways.png", alt: "Indian Railways" },
    { src: "/images/home/partners/indianrailways.png", alt: "Indian Railways" },
    { src: "/images/home/partners/indianrailways.png", alt: "Indian Railways" },
    { src: "/images/home/partners/indianrailways.png", alt: "Indian Railways" },
  ];

  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto">
        {/* Heading */}
        <div className="mb-12 max-w-3xl px-20">
          <h2 className="mb-4 text-4xl leading-snug font-medium text-black">The A-List Of Cool.</h2>
          <p className="text-lg leading-relaxed text-black">
            From agile innovators to market leaders, our partners have one thing in common: a
            commitment to a better-cooled future for everyone, everywhere.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="scrollbar-hide grid grid-flow-col grid-rows-2 gap-6 overflow-x-auto pb-4 md:gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex h-[100px] w-[180px] flex-none items-center justify-center rounded-lg bg-gray-50 p-6 shadow-sm"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={80}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
