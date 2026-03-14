import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6 py-12">
      {/* Text Section */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex items-start">
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Beyond Cool</h3>
          <p className="leading-relaxed text-gray-600">
            Vaayu Aircon is rewriting the rules. Our smart Hybrid AHUs slash energy and water use,
            future-proofing your business and the planet.
          </p>

          <p className="mt-7 leading-relaxed text-gray-600">
            At Vaayu Aircon, we don&apos;t just cool spaces — we redefine them. We engineer
            next-generation Hybrid AHUs (AHUs) that deliver powerful, sustainable performance while
            drastically cutting energy and water consumption. We&apos;re leading the charge with
            smart, scalable tech for a cooler future.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-7">
        <Image
          src="/images/about/team-trophy.png"
          alt="Vaayu team with awards"
          width={1200}
          height={700}
          className="w-full rounded-xl object-cover shadow-lg"
        />
      </div>

      <div className="mt-11">
        <div className="flex items-start">
          <h3 className="text-4xl font-bold text-gray-900">Who We Are</h3>
        </div>

        <div>
          <p className="leading-relaxed text-gray-600">
            Vaayu Aircon designs and manufactures energy-efficient hybrid air cooling systems for
            commercial, industrial, and institutional spaces. Our solutions help businesses reduce
            electricity consumption, improve air quality, and lower operating costs compared to
            traditional air conditioning.
          </p>

          <p className="mt-7 leading-relaxed text-gray-600">
            With over 10 years of engineering expertise, we have delivered reliable cooling systems
            across factories, warehouses, offices, schools, and public facilities throughout India.
            Our in-house team focuses on performance, durability, and sustainable design to meet
            demanding real-world conditions.
          </p>

          <p className="mt-7 leading-relaxed text-gray-600">
            Unlike conventional AC systems that consume high amounts of energy and recirculate
            indoor air, Vaayu’s hybrid technology provides fresh-air circulation with 20 degree
            temperature difference while using up to 80% less power. This makes our systems a
            smarter, more sustainable alternative for large spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
