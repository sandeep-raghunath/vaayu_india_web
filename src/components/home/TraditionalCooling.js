"use client";

import Image from "next/image";

export default function TraditionalCooling() {
  return (
    <section className="relative h-screen w-full bg-[url('/images/home/traditionalcooling/traditionalcooling.png')] bg-cover bg-center">
      {/* Overlay Layer */}
      <div className="absolute inset-0 flex flex-col">
        {/* Heading & Description (Top Left) */}
        <div className="absolute top-16 left-8 max-w-md md:top-20 md:left-16">
          <h2 className="mb-4 text-3xl leading-snug font-bold text-white md:text-4xl">
            Better Than <br /> Traditional Cooling
          </h2>
          <p className="text-base leading-relaxed text-white/90">
            Experience more savings, more efficiency, and more comfort — all with less water,
            energy, and maintenance.
          </p>
        </div>

        {/* Card Top Right */}
        <div className="absolute top-24 right-40 w-[360px] rounded-xl border border-gray-300 bg-white/10 p-6 shadow-lg backdrop-blur-md">
          {/* Icon */}
          <div className="mb-4">
            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-white">
              <Image
                src="/images/home/traditionalcooling/bolt.svg"
                alt="bolt"
                width={28}
                height={28}
                className="h-auto w-auto object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <p className="mb-6 text-sm font-medium text-white">Power Input (Watts) Per Machine</p>

          {/* Values with divider */}
          <div className="flex items-start justify-between text-white">
            {/* Left Side */}
            <div className="flex-1 pr-4">
              <p className="text-4xl leading-tight font-bold">1650</p>
              <p className="mt-1 text-sm text-white/80">Vaayu Air Cooler</p>
            </div>

            {/* Divider */}
            <div className="h-14 w-px bg-white/40"></div>

            {/* Right Side */}
            <div className="flex-1 pl-4 text-right">
              <p className="text-4xl leading-tight font-bold">10,000</p>
              <p className="mt-1 text-sm text-white/80">Regular AC</p>
            </div>
          </div>
        </div>

        {/* Card Bottom Left */}
        <div className="absolute bottom-16 left-60 w-[360px] rounded-xl border border-gray-300 bg-white/10 p-6 shadow-lg backdrop-blur-md">
          {/* Icon */}
          <div className="mb-4">
            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-white">
              <Image
                src="/images/home/traditionalcooling/rupee.svg"
                alt="bolt"
                width={28}
                height={28}
                className="h-auto w-auto object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <p className="mb-6 text-sm font-medium text-white">Monthly Bill (Approx)</p>

          {/* Values with divider */}
          <div className="flex items-start justify-between text-white">
            {/* Left Side */}
            <div className="flex-1 pr-4">
              <p className="text-4xl leading-tight font-bold">3,465</p>
              <p className="mt-1 text-sm text-white/80">Vaayu Air Cooler</p>
            </div>

            {/* Divider */}
            <div className="h-14 w-px bg-white/40"></div>

            {/* Right Side */}
            <div className="flex-1 pl-4 text-right">
              <p className="text-4xl leading-tight font-bold">21,000</p>
              <p className="mt-1 text-sm text-white/80">Regular AC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
