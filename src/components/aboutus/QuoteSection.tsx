import React from "react";

export default function QuoteSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2">
      <div className="text-xl text-gray-800 italic">
        <p>
          “We didn’t just set out to build cooling systems, we set out to redefine how the world
          stays cool without warming the planet.”
        </p>
        <p className="mt-4 text-gray-600">— Dr. Priyanka Mokshmar, CMD, Vaayu Aircon</p>
      </div>
      <div>
        <img
          src="/images/about/priyanka-quote.jpg"
          alt="Dr. Priyanka Mokshmar"
          className="rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}
