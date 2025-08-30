import Image from "next/image";

export default function Impact() {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="mb-4 text-4xl leading-snug font-bold text-gray-900 md:text-5xl">
            Real Impact. <br />
            Reliable <br />
            Results.
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            See how businesses across the globe have transformed their spaces with Vaayu Aircon’s
            sustainable cooling solutions.
          </p>
        </div>

        {/* Video Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/home/impact/mushroomfarm.png"
              alt="Mushroom Farm"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-gray-800 hover:bg-white">
                ▶
              </button>
            </div>
            {/* Label */}
            <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
              Mushroom Farm
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/home/impact/institute.png"
              alt="Institute"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-gray-800 hover:bg-white">
                ▶
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
              Institute
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/home/impact/showroom.png"
              alt="Showroom"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-gray-800 hover:bg-white">
                ▶
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
              Showroom
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
