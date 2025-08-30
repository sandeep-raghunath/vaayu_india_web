import React from "react";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="mx-auto my-16 grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
      <div className="text-xl leading-relaxed text-gray-800 italic">
        <p className="mb-4 font-medium">
          “We didn&apos;t just set out to build cooling systems, we set out to redefine how the
          world stays cool without warming the planet.”
        </p>
        <p className="text-base text-gray-600 not-italic">
          — Dr. Priyanka Mokshmar, CMD, Vaayu Aircon
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/about/priyanka-quote.png"
          alt="Dr. Priyanka Mokshmar"
          width={800}
          height={900}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}
