"use client";

export default function TraditionalCooling() {
  return (
    <section className="py-20">
      <div className="mx-auto flex h-screen w-screen items-center justify-center bg-[url('/images/home/traditionalcooling/traditionalcooling.png')] bg-contain bg-center">
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
        <div className="absolute top-24 right-8 w-[280px] rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-md md:right-16">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
              ⚡
            </div>
            <p className="text-sm font-medium text-white/90">Power Input (Watts) Per Machine</p>
          </div>
          <div className="flex justify-between text-white">
            <div>
              <p className="text-2xl font-bold">1650</p>
              <p className="text-xs text-white/70">Vaayu Air Cooler</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">10,000</p>
              <p className="text-xs text-white/70">Regular AC</p>
            </div>
          </div>
        </div>

        {/* Card Bottom Left */}
        <div className="absolute bottom-16 left-8 w-[300px] rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-md md:left-16">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
              ₹
            </div>
            <p className="text-sm font-medium text-white/90">Monthly Bill (Approx)</p>
          </div>
          <div className="flex justify-between text-white">
            <div>
              <p className="text-2xl font-bold">3,465</p>
              <p className="text-xs text-white/70">Vaayu Air Cooler</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">21,000</p>
              <p className="text-xs text-white/70">Regular AC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
