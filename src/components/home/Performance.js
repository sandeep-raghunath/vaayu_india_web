"use client";

export default function Performance() {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-sm">
        <div className="grid grid-cols-2">
          {/* Left Side - Text */}
          <div className="flex flex-col justify-center bg-[#F6F6F6] px-10 pt-40 pb-4">
            <h2 className="mb-4 text-4xl leading-snug font-medium text-black">
              Performance &amp; <br /> Sustainability
            </h2>
            <p className="text-lg leading-relaxed text-black">
              Vaayu Aircon delivers high-performance cooling engineered for exceptional energy
              efficiency. This ensures optimal comfort while significantly reducing electricity
              consumption. Committed to sustainability, the systems utilize eco-friendly
              refrigerants to minimize environmental impact. In a crux, Vaayu offers a powerful and
              responsible cooling solution with a lower carbon footprint thereby combining high
              value products and services.
            </p>
          </div>

          {/* Right Side - Years */}
          <div className="bg-primary-700 flex flex-col items-center justify-center">
            <div className="flex h-full w-full items-end justify-start pb-3">
              <span className="text-[200px] leading-none font-[900] text-white">15</span>
              <span className="mb-3 ml-2 text-xl font-bold text-white">Years Of Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
