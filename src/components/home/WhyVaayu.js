import Image from "next/image";

export default function WhyVaayu() {
  const cardData = [
    {
      id: "1",
      icon: "/images/home/whyvaayu/waterdrop.svg",
      alt: "waterdrop",
      title: "60% Less Water Used",
      subtitle: "Cool efficiently while conserving every drop.",
    },
    {
      id: "2",
      icon: "/images/home/whyvaayu/bolt.svg",
      alt: "bolt",
      title: "80% Power Savings",
      subtitle: "Lower energy bills. Same powerful performance.",
    },
    {
      id: "3",
      icon: "/images/home/whyvaayu/air.svg",
      alt: "air",
      title: "100% Natural Airflow",
      subtitle: "Pure, fresh air — no chemicals, no compromise.",
    },
    {
      id: "4",
      icon: "/images/home/whyvaayu/co2.svg",
      alt: "co2",
      title: "Reduced Carbon Emission",
      subtitle: "Smarter cooling with a smaller environmental footprint.",
    },
  ];
  return (
    <section className="bg-primary-700 relative w-full px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-4xl leading-snug font-bold text-white md:text-5xl">
            Why Vaayu? Our Chill Changes Things.
          </h2>
          <p className="text-lg leading-relaxed text-white/90">
            It&apos;s not just about feeling cool, it&apos;s about protecting our world — We&apos;re
            here to save resources and shrink our carbon footprint for generations to come.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          {cardData.map((data) => {
            return (
              <div
                key={data.id}
                className="rounded-2xl border border-gray-300 bg-gradient-to-b from-white/10 to-white/10 p-6 text-white shadow-md backdrop-blur-2xl"
              >
                <div className="bg-white-100 mb-6 flex h-14 w-14 items-center justify-center rounded-full">
                  <Image
                    src={data.icon}
                    alt={data.alt}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold">{data.title}</h3>
                <p className="text-sm text-white/80">{data.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
