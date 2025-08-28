import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-16 text-center">
      {/* Background Image */}
      <Image
        src="/images/hero/background.png"
        alt="Hero Background"
        fill
        className="-z-10 object-cover"
        priority
      />
      {/* Heading */}
      <h1 className="mb-4 text-5xl leading-tight font-bold">
        Cool Innovation <br />
        Efficient <span className="font-serif text-gray-700 italic">Sustainability</span>
      </h1>

      <p className="mb-6 max-w-2xl text-lg text-gray-600">
        Revolutionary Air Cooling Eco-Smart Technology With Patented Engineering Solutions For Your
        Present And Tomorrow.
      </p>

      {/* CTA */}
      <button className="bg-primary cursor-pointer rounded-full px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
        Book A Call With Expert
      </button>

      <div className="absolute top-36 right-12 hidden md:block">
        <Image
          src="/images/hero/carbonwatch.png"
          alt="Carbon Watch"
          fill
          className="-z-10 object-cover"
          priority
        />
      </div>
    </section>
  );
}
