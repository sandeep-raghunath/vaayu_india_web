"use client";
import Image from "next/image";

export default function EnergyConsiderations() {
  return (
    <section className="bg-[#FFFCF5] px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left side: Heading + Image */}
        <div className="flex flex-col items-start">
          <h2 className="line- text-5xl font-[500] text-black">
            Elevated Cooling <br /> Energy Considerations
          </h2>
          <Image
            src="/images/home/cooler.png"
            alt="Cooling System"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Right side: Description + Button */}
        <div className="flex flex-col self-end-safe">
          <p className="mb-6 text-xl leading-relaxed text-black">
            At Vaayu Aircool, we create fresh air-based cooling systems that strike a balance
            between environmental responsibility, energy efficiency, and performance. Our innovative
            technology is revolutionizing what it means to effectively cool data centers, industrial
            units, archival rooms, and other public as well as private spaces.
          </p>
          <button className="bg-primary w-36 rounded-full px-6 py-2 text-sm text-white transition hover:scale-105">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
