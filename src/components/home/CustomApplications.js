"use client";
import Image from "next/image";

export default function CustomApplications() {
  return (
    <section className="bg-white px-6 py-20 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col">
        {/* Left Content */}
        <div className="flex flex-col justify-start">
          <h2 className="mb-2 text-4xl leading-snug font-medium text-black">
            One Product. Customized <br /> For Hundreds Of <br /> Applications.
          </h2>
        </div>
        {/* Right Image */}
        <div className="-mt-10 flex flex-col items-center">
          <Image
            src="/images/home/customapplications/cooler.png"
            alt="Vaayu Product"
            width={500}
            height={450}
            className="object-contain"
          />
        </div>
        <div className="flex justify-between">
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-black">
            Vaayu effortlessly fits into variegated settings where air quality and sustainability
            are of utmost importance, ranging from food processing facilities and textile
            manufacturing plants to coaching centers and hospitality venues. Simply, easy to buy!
          </p>
          <div className="mt-6 self-end">
            <button className="bg-primary rounded-full px-6 py-2 text-white transition hover:scale-105">
              Explore Applications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
