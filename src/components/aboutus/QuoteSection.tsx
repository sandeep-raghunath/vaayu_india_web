import React from "react";

export default function QuoteSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
      <div className="text-xl text-gray-800 italic">
        <p className="font-semibold">
          “We didn’t just set out to build cooling systems, we set out to redefine how the world
          stays cool without warming the planet.”
        </p>
        <p className="text-gray-600">— Dr. Priyanka Mokshmar, CMD, Vaayu Aircon</p>
      </div>
      <div>
        <img
          src="/images/about/priyanka-quote.png"
          alt="Dr. Priyanka Mokshmar"
          className="rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}
